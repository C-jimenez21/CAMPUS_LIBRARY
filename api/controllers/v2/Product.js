//functions v2
import genCollection from "../../helpers/fastConnect.js";
import {connection} from "../../config/atlas.js"
export const getDataProductV1 = async (req, res) => {
    try {
      const coleccion = await genCollection("Product");
      let result = await coleccion.find().toArray();
      (result.length > 0) ? result = res.send(result).status(200) : result = res.status(404).json({ message: 'Product not found' })
        return result;
    } catch (error) {
      res.status(404).json({ message: 'Something went wrong' })
      console.log(error);
    }
  }
  
  
export const getDataProductById = async (req, res) => {
  try {
    let db = await connection()
    let coleccion = db.collection('Product')
    //const coleccion = await genCollection("Product");
    let result = await coleccion.find({serial:req.params.id}).toArray();
    (result.length > 0) ? result = res.send(result).status(200) : result = res.status(404).json({ message: 'Product not found' })
    return result;
} catch (error) {
    res.status(404).json({ message: 'Something went wrong' })
    console.log(error);
  }
}

  export const postProduct = async (req, res) => {
    try {
      //Validar la informacion
      //const { name, author, company, serial, category, description,   } = req.body
  
      //Revisar si este usuario ya se encuentra en la base de datos
      const Product = await genCollection("Product")
      const isMatch = await Product.findOne({serial: req.data.serial})
      if(isMatch) return res.status(404).json({message: 'This product is already registered'})
      //Realizar el registro en la base de datos
      const newProduct = await Product.insertOne(req.data)
      let result
      (newProduct.acknowledged) ? result = res.status(201).json({message: 'Successfully created product'}) : result = res.status(404).json({message: 'Product could not be registered'})
      return result;
    } catch (error) {
      res.status(404).json({ message: 'Something went wrong' })
      console.log(error);
    }
  }
  
  export const deleteProductById = async (req, res) => {
    try {
      const coleccion = await genCollection("Product");
      let result = await coleccion.deleteOne({serial:req.params.id})
      console.log(result);
      (result.acknowledged && result.deletedCount !== 0) ? result = res.send({message: 'Product successfully removed'}).status(204) : result = res.status(404).json({ message: 'Product not found' })
      return result;
  } catch (error) {
      res.status(404).json({ message: 'Something went wrong' })
      console.log(error);
    }
}