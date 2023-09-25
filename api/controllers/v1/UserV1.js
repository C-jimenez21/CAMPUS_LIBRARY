//functions v1
import genCollection from "../../helpers/fastConnect.js"
//import { con } from "../../config/atlas.js";
//let db = await con()

export const getDataUserV1 = async(req, res) => {
    const coleccion =  await genCollection("Product")
    let result = await coleccion.find().toArray();
    res.send(result).status(200)
}

