//functions v1
import { ObjectId } from "mongodb";
import genCollection from "../../helpers/fastConnect.js"
//import { con } from "../../config/atlas.js";
//let db = await con()
import {connection} from "../../config/atlas.js"

let db = await connection()
export const getDataUserV1 = async (req, res) => {
  try {
    const coleccion = db.collection("User");
    console.log(req.user);
    let result = await coleccion.find({"rol": "Usuario"}).toArray();
    res.send(result).status(200)
  } catch (error) {
    console.log(error);
  }
}

export const getDataEmpleadoV1 = async (req, res) => {
  try {
    console.log(req.user);
    const coleccion = await genCollection("User");
    let result = await coleccion.find({"rol": "Empleado"}).toArray();
    res.send(result).status(200)
  } catch (error) {
    console.log(error);
  }
}


export const getDataUserById = async (req, res) => {
  try {
    console.log(req.user);
    const coleccion = await genCollection("User");
    let result = await coleccion.findOne({_id: new ObjectId(req.params.id)}).toArray();
    res.send(result).status(200)
  } catch (error) {
    console.log(error);
  }
}





export const getDataReserveV1 = async (req, res) => {
  const coleccion = await genCollection("Reserves");
  let result = await coleccion.aggregate([
    {
      $lookup: {
        from: "User",
        localField: "user",
        foreignField: "email",
        as: "User"
      }
    },
    {
      $unwind: "$User"
    },
    {
      $lookup: {
        from: "Product",
        localField: "Product",
        foreignField: "serial",
        as: "Product"
      }
    },
    {
      $unwind: "$Product"
    },
    {
      $project: {
        user: 0,
        _id: 0,
        "User._id": 0,
        "Product._id": 0
      }
    }
  ]).toArray();
  res.send(result).status(200)
}

export const getDataLoanV1 = async (req, res) => {
  const coleccion = await genCollection("Loans");
  let result = await coleccion.aggregate([
    {
      $lookup: {
        from: "User",
        localField: "user",
        foreignField: "email",
        as: "User"
      }
    },
    {
      $unwind: "$User"
    },
    {
      $lookup: {
        from: "Product",
        localField: "Product",
        foreignField: "serial",
        as: "Product"
      }
    },
    {
      $unwind: "$Product"
    },
    {
      $project: {
        user: 0,
        _id: 0,
        "User._id": 0,
        "Product._id": 0
      }
    }
  ]).toArray();
  res.send(result).status(200)
}

export const deleteUserById = async (req, res) => {
  try {
    const coleccion = await genCollection("User");
    let result = await coleccion.deleteOne({email:req.params.id})
    console.log(result);
    (result.acknowledged && result.deletedCount !== 0) ? result = res.send({message: 'Product successfully removed'}).status(204) : result = res.status(404).json({ message: 'Product not found' })
    return result;
} catch (error) {
    res.status(404).json({ message: 'Something went wrong' })
    console.log(error);
  }
}