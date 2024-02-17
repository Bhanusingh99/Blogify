import { User } from "@/models/user.model";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//user sign-up
export const signUp = async (req:any,res:any) => {

    try {
        //fetch data from body
        const {userName,email,password,bio,profile_picture,isActive} = req.body;

        const {pic} = req.files.file;

        //check if input field is empty or not
        if(!userName || !email || !password){
            return res.status(400).json({
                success:false,
                message:"Input field Can't be empty"
            })
        }
    
         //TODO: add some more checks like, checking for password format,email format.
    
         //check if user already exists
        const user = await User.findOne({email});
    
        if(!user){
            return res.status(400).json({
                success:false,
                message:"user already exist"
            })
        }
    
        //hash a password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        //create a entry in db
        const createUser = await User.create({
            userName,
            email,
            password:hashedPassword,
            bio,
            profile_picture,
            isActive
        })
    
    
        //create a token
        const payload = {
            id:createUser._id,
            username:userName
        }
        const token = jwt.sign(payload,'process.env.SECRET_KEY',{expiresIn:"6h"});
    
        //return a successfull response with jwt token
        return res.status(200).json({
            success:true,
            message:"user successfully created",
            token
        })
   } catch (error) {
       console.log(error)
       throw error
 }

}

//user login
export const logIn = async ( req:any,res:any) => {
    try {
        //fetch data from body
        const {password,userName} = req.body;

        //check is input field empty or not
        if(!password||!userName){
            return res.status(400).json({
                success:false,
                message:"Input field can not be empty"
            })
        }

        //Todo:add more check to check is passowrd and email format is corect

        //check is user exits or not
        const user = await User.findOne({userName});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"user not exist"
            })
        }

        //create a token
        const payload = {
            id:user._id,
            username:userName
        }
        const token = jwt.sign(payload,'process.env.SECRET_KEY',{expiresIn:"6h"});

        return res.status(200).json({
            success:true,
            message:"user successfully loggedin",
            token
        })

    } catch (error) {
        console.log(error)
        throw error
    }
}

// delete user
export const deleteUser = async (req:any,res:any) => {
    try {
        const {id} = req.body;

        const deleteAccount = await User.findByIdAndDelete(id);

        return res.status(200).json({
            success:true,
            message:"user deleted successfully",      
        })
    } catch (error) {
        console.log(error)
        throw error
    }
}

//update user
// export const updatePassword = async (req: any, res: any) => {
//     try {
//         // Fetch data from the request body
//         const { oldPassword, newPassword, confirmPassword } = req.body;

//         // Check if input fields are empty
//         if (!oldPassword || !newPassword || !confirmPassword) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Input fields cannot be empty"
//             });
//         }

//         // Verify the old password
//         const token:any = localStorage.getItem("token")
//         const userId = getUserIdFromToken(token);

//         const user = await User.findById(userId);

//         if (!user) {
//             return res.status(400).json({
//                 success: false,
//                 message: "User not found"
//             });
//         }

//         const isPasswordMatch = await bcrypt.compare(oldPassword, user.password);

//         if (!isPasswordMatch) {
//             return res.status(401).json({
//                 success: false,
//                 message: "Old password is incorrect"
//             });
//         }

//         // Check if the new password and confirm password match
//         if (newPassword !== confirmPassword) {
//             return res.status(400).json({
//                 success: false,
//                 message: "New password and confirm password do not match"
//             });
//         }

//         // Hash the new password
//         const hashedPassword = await bcrypt.hash(newPassword, 10);

//         // Update the user's password in the database
//         user.password = hashedPassword;
//         await user.save();

//         return res.status(200).json({
//             success: true,
//             message: "Password updated successfully"
//         });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             success: false,
//             message: "Internal Server Error"
//         });
//     }
// };

// // Helper function to extract user ID from the JWT token
// const getUserIdFromToken = (token: string | undefined): string => {
//     if (!token) {
//         throw new Error("Token not provided");
//     }

//     try {
//         const decoded: any = Jwt.verify(token, process.env.SECRET_KEY);
//         return decoded.id;
//     } catch (error) {
//         throw new Error("Invalid token");
//     }
// };

