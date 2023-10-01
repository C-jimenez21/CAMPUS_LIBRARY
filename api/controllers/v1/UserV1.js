//functions v1
import genCollection from "../../helpers/fastConnect.js"
//import { con } from "../../config/atlas.js";
//let db = await con()

export const getDataUserV1 = async (req, res) => {
  try {
    console.log(req.user);
    const coleccion = await genCollection("User");
    let result = await coleccion.find().toArray();
    res.send(result).status(200)
  } catch (error) {
    console.log(error);
  }
}

export const PostUserV1 = async (req, res) => {
  try {
    //Validar la informacion

    //Revisar si este usuario ya se encuentra en la base de datos

    //Realizar el registro en la base de datos

    //Si todo se realizo de manera correcta se genere el token

  } catch (error) {

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
