
export const validateSchema = (schema) => (req, res, next) => {
    try {
        req.data = schema.parse(req.body);
        console.log({body:req.body, data:req.data});
        next();
    } catch (error) {
        res.status(400).json({error: error.errors.map(err => err.message)})
        //console.log(error.errors.map(err => err.message));
    }
}