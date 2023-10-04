//functions v1
import { ObjectId } from "mongodb";
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
