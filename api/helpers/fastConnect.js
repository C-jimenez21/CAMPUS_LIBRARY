import  {connection}  from '../config/atlas.js';

const genCollection = async (coleccion) => {
    try {
        let db = await connection();
        let newCollection = db.collection(coleccion)
        return newCollection;
    } catch (error) {
        console.log(error);
    }
}

export default genCollection