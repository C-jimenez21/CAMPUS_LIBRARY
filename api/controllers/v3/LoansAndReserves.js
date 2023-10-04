import { ObjectId } from "mongodb";
import genCollection from "../../helpers/fastConnect.js"
//COLECCION RESERVES

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
                "User._id": 0,
                "Product._id": 0
            }
        },
        {
            $sort: { "reservedDate": -1 }
        }
    ]).toArray();
    res.send(result).status(200)
}

export const getDataReserveById = async (req, res) => {
    try {
        const coleccion = await genCollection("Reserves");
        let result = await coleccion.aggregate([
            { $match: { _id: new ObjectId(req.params.id) } },
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

                    "User._id": 0,
                    "Product._id": 0
                }
            }]).toArray();
        (result.length > 0) ? result = res.send(result).status(200) : result = res.status(404).json({ message: 'Reserves not found' })
        return result;
    } catch (error) {
        res.status(404).json({ message: 'Something went wrong' })
        console.log(error);
    }
}

export const getDataReserveByDate = async (req, res) => {
    try {
        const fechaFormat = new Date(req.body.date);
        console.log(fechaFormat);
        console.log(new Date(req.body.date));

        const coleccion = await genCollection("Reserves");
        let result = await coleccion.aggregate([
            { $match: { reservedDate: fechaFormat } },
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

                    "User._id": 0,
                    "Product._id": 0
                }
            }]).toArray();
        (result.length > 0) ? result = res.send(result).status(200) : result = res.status(404).json({ message: 'Reserve not found' })
        return result;
    } catch (error) {
        res.status(404).json({ message: 'Something went wrong' })
        console.log(error);
    }
}

export const getDataReserveByDiferentParam = async (req, res) => {
    try {
        const { field, value } = req.body
        const coleccion = await genCollection("Reserves");
        console.log(field, value);
        if (field == "state") {
            let result = await coleccion.aggregate([
                { $match: { state: value } },
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

                        "User._id": 0,
                        "Product._id": 0
                    }
                },
                { $sort: { "reservedDate": -1 } }
            ]).toArray();
            (result.length > 0) ? result = res.send(result).status(200) : result = res.status(404).json({ message: 'Reserve not found' })
            return result;
        } else if (field == "user") {
            let result = await coleccion.aggregate([
                { $match: { user: value } },
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

                        "User._id": 0,
                        "Product._id": 0
                    }
                },
                { $sort: { "reservedDate": -1 } }
            ]).toArray();
            (result.length > 0) ? result = res.send(result).status(200) : result = res.status(404).json({ message: 'Reserve not found' })
            return result
        }
        return result
    } catch (error) {
        res.status(404).json({ message: 'Something went wrong' })
        console.log(error);
    }
}

export const postReserve = async (req, res) => {
    try {
        //Validar la informacion
        const {  product, reservedDate, state } = req.data
        const { email: user } = req.user
        //Revisar si este usuario ya se encuentra en la base de datos
        const UserCol = await genCollection("User");
        const isMatchA = await UserCol.findOne({ email: user });
        if (!isMatchA) { return res.status(404).json({ message: "User not found" }); }

        const ProductCol = await genCollection("Product");
        const isMatch = await ProductCol.findOne({ serial: product });
        if (!isMatch) { return res.status(404).json({ message: "Product not found" }); }

        if (isMatch.stock == 0) return res.status(404).json({ message: 'There is not stock for this product.' })

        //Realizar el registro en la base de datos
        const ReseveObj = {
            user,
            Product: product,
            reservedDate: new Date(reservedDate),
            state
        }

        console.log(ReseveObj);
        const Reserve = await genCollection("Reserves");
        const newReserve = await Reserve.insertOne(ReseveObj)
        console.log(newReserve);
        let result
        (newReserve.acknowledged) ? result = res.status(201).json({ message: 'Successfully created reserve' }) : result = res.status(404).json({ message: 'Reserve could not be registered' })
        return result;
    } catch (error) {
        res.status(404).json({ message: 'Something went wrong' })
        console.log(error);
    }
}

export const deleteReserveById = async (req, res) => {
    try {
        const coleccion = await genCollection("Reserves");
        let result = await coleccion.deleteOne({ _id: new ObjectId(req.params.id) })
        console.log(result);
        (result.acknowledged && result.deletedCount !== 0) ? result = res.send({ message: 'Reserve successfully removed' }).status(204) : result = res.status(404).json({ message: 'Reserve not found' })
        return result;
    } catch (error) {
        res.status(404).json({ message: 'Something went wrong' })
        console.log(error);
    }
}



//COLECCION LOANS


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
                "User._id": 0,
                "Product._id": 0
            }
        },
        { $sort:{"beguinDate": -1}}
    ]).toArray();
    (result.length > 0) ? result = res.send(result).status(200) : result = res.status(404).json({ message: 'Loans not found' })
    return result
}


export const getDataLoanById = async (req, res) => {
    try {
        const coleccion = await genCollection("Loans");
        let result = await coleccion.aggregate([
            { $match: { _id: new ObjectId(req.params.id) } },
            
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
                    "User._id": 0,
                    "Product._id": 0
                }
            }
        ]).toArray();
        (result.length > 0) ? result = res.send(result).status(200) : result = res.status(404).json({ message: 'Loans not found' })
        return result;
    } catch (error) {
        res.status(404).json({ message: 'Something went wrong' })
        console.log(error);
    }
}

export const getDataLoanByDate = async (req, res) => {
    try {
        const fechaFormat = new Date(req.body.date);
        console.log(fechaFormat);
        console.log(new Date(req.body.date));

        const coleccion = await genCollection("Loans");
        let result = await coleccion.aggregate([
            { $match: { beguinDate: fechaFormat } },
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

                    "User._id": 0,
                    "Product._id": 0
                }
            },
            { $sort:{"beguinDate": -1}}
        ]).toArray();
        (result.length > 0) ? result = res.send(result).status(200) : result = res.status(404).json({ message: 'Loan not found' })
        return result;
    } catch (error) {
        res.status(404).json({ message: 'Something went wrong' })
        console.log(error);
    }
}

export const getDataLoanByDiferentParam = async (req, res) => {
    try {
        const { field, value } = req.body
        const coleccion = await genCollection("Loans");
        console.log(field, value);
        if (field == "state") {
            let result = await coleccion.aggregate([
                { $match: { state: value } },
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

                        "User._id": 0,
                        "Product._id": 0
                    }
                },
                { $sort:{"beguinDate": -1}}]).toArray();
            (result.length > 0) ? result = res.send(result).status(200) : result = res.status(404).json({ message: 'Loan not found' })
            return result;
        } else if (field == "user") {
            let result = await coleccion.aggregate([
                { $match: { user: value } },
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

                        "User._id": 0,
                        "Product._id": 0
                    }
                },
                { $sort:{"beguinDate": -1}}]).toArray();
            (result.length > 0) ? result = res.send(result).status(200) : result = res.status(404).json({ message: 'Loan not found' })
            return result
        }
        return result
    } catch (error) {
        res.status(404).json({ message: 'Something went wrong' })
        console.log(error);
    }
}

export const postLoan = async (req, res) => {
    try {
        //Validar la informacion
        const {  product, beguinDate, endDate, state= "pediente" } = req.data
console.log(req.data);
const {email:user} = req.user
        //Revisar si este usuario ya se encuentra en la base de datos
        const UserCol = await genCollection("User");
        const isMatchA = await UserCol.findOne({ email: user });
        if (!isMatchA) { return res.status(404).json({ message: "User not found" }); }

        const ProductCol = await genCollection("Product");
        const isMatch = await ProductCol.findOne({ serial: product });
        if (!isMatch) { return res.status(404).json({ message: "Product not found" }); }

        if (isMatch.stock == 0) return res.status(404).json({ message: 'There is not stock for this product.' })

        //Realizar el registro en la base de datos
        const ReseveObj = {
            user,
            Product: product,
            beguinDate: new Date(beguinDate),
            endDate: new Date(endDate),
            state 
        }
        console.log(ReseveObj);
        const Loan = await genCollection("Loans");
        const newLoan = await Loan.insertOne(ReseveObj)
        console.log(newLoan);
        let result
        (newLoan.acknowledged) ? result = res.status(201).json({ message: 'Successfully created Loan' }) : result = res.status(404).json({ message: 'Loan could not be registered' })
        return result;
    } catch (error) {
        res.status(404).json({ message: 'Something went wrong' })
        console.log(error);
    }
}

export const deleteLoanById = async (req, res) => {
    try {
        const coleccion = await genCollection("Loans");
        let result = await coleccion.deleteOne({ _id: new ObjectId(req.params.id) })
        console.log(result);
        (result.acknowledged && result.deletedCount !== 0) ? result = res.send({ message: 'Loan successfully removed' }).status(204) : result = res.status(404).json({ message: 'Reserve not found' })
        return result;
    } catch (error) {
        res.status(404).json({ message: 'Something went wrong' })
        console.log(error);
    }
}
