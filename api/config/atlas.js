//Connection to atlas server
import {MongoClient} from "mongodb"
import { loadEnv } from "vite";

const env = loadEnv('development', process.cwd(), "ATLAS");

 console.log(`mongodb+srv://${env.ATLAS_USER}:${env.ATLAS_PASSWORD}@cluster0.qbqr4gp.mongodb.net/${env.ATLAS_DB}`);
export async function connection(){
    try {
        const URI = `mongodb+srv://${env.ATLAS_USER}:${env.ATLAS_PASSWORD}@cluster0.qbqr4gp.mongodb.net/${env.ATLAS_DB}`;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        const client = await MongoClient.connect(URI);
        return client.db()
    } catch (error) {
        return{status: 500, message: error};
    }
}
