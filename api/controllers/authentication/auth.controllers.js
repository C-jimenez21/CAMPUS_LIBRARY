import bcrypt from 'bcrypt'
import genCollection from '../../helpers/fastConnect.js';


import { ObjectId } from 'mongodb';
import { generateToken } from '../../middlewares/Token.js';

export const register = async (req, res) => {
    try {
        const { name, lastname, username, email, phone, password, rol } = req.data;
        console.log(req.data);
        let colecction = await genCollection('User')
        let userExists = await colecction.findOne({ "email": email })
        console.log(userExists);
        if(userExists) {return res.status(404).json({error:["This email is already register"]});}
        const passwordHash = await bcrypt.hash(password, 10)
        console.log(passwordHash);
        const newUser = {
            name,
            lastname,
            username,
            email,
            password: passwordHash,
            phone,
            rol
        }
        console.log({ "user obj": newUser });
        const userSaved = await colecction.insertOne(newUser);
        if(!userSaved.acknowledged){return res.status(404).send({ error: [' an error occurred with user creation'] }) }
        const token = await generateToken({ email: newUser.email })
        res.cookie('token', token);
        const user = await colecction.findOne({ email: newUser.email });
        (userSaved.acknowledged) ? res.status(201).send({ user }) : res.status(404).send({ error: [' an error occurred with user creation'] })
        
    } catch (error) {
        res.status(500).json({ error: [error.message] });
    }
}


export const login = async (req, res) => {

    const { email, password } = req.data;
    try {
    
        let colecction = await genCollection('User')

        const userFound = await colecction.findOne({ email: email })
        if (!userFound) { return res.status(400).send({ error: ['User not found'] }) }

        const isMatch = await bcrypt.compare(password, userFound.password)
        if (!isMatch) { return res.status(400).send({ error: ['Incorrect password'] }) }

        const token = await generateToken({ email: userFound.email })
        res.cookie('token', token);
        //res.set('Authorization', `${token}`)
        res.send(userFound)

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const logout = async (req, res) => {
    res.cookie('token', "", { expires: new Date(0) });
    return res.status(200).send({message: 'Session was closed' });
}

export const profile = async (req, res) => {
    //let db = await connection()
    //let colecction = await db.collection('users')
    //const userFound = await colecction.findOne({ _id: new ObjectId(req.user.id) })
    //if (!userFound) { return res.status(400).send({ message: 'User not found' }) }
    res.status(200).json(req.user)
    //res.set('Authorization', `Bearer ${token}`)
}

