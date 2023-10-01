
export const validateSchema = (schema) => (req, res, next) => {
    try {
        console.log(req.body);
        schema.parse(req.body);
        next();
    } catch (error) {
        res.status(400).json({error: error.errors.map(err => err.message)})
        //console.log(error.errors.map(err => err.message));
    }
}