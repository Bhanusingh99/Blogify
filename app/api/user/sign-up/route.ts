import { User } from "@/models/user.model";
import {connectionToDb} from "@/db/connectionDb"
import { NextRequest, NextResponse} from "next/server";
import bcrypt from "bcrypt";
import validator from 'validator';

connectionToDb()
export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const{username,firstname,lastname,email,password} = reqBody;

        if(!validator.isEmail(email)){
            return NextResponse.json({message:"Email format is wrong",status:400})
        }
        if(!validator.isStrongPassword(password)){
            return NextResponse.json({message:"Password is not strong",status:400})
        }

        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({message:"user already exist",status:400})
        }

        const hasedPassowrd = await bcrypt.hash(password,10);

        const createUser = await User.create({
            firstname,
            lastname,
            username,
            email,
            password:hasedPassowrd
        })

        return NextResponse.json({
            message:"user created successfully",
            success:true,
            createUser
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:500})
    }
}