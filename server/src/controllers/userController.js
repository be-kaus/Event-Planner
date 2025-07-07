export const GetProfile = async (req, res, next) => {

    try{
        const currentUser = req.user;
        if(!currentUser){
            const error = new Error("Unauthorised!! Login Again")
            error.statusCode = 401;
            return next(error);
        }

        res.status(200).json({message:`Welcome Back ${currentUser.name}`});

    } catch (error) {
        next(error);
    }
};