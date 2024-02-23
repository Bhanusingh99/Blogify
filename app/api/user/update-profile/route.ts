import { User } from "@/models/user.model";
import { ProfileModel } from "@/models/profile.model";
import { BlogModel } from "@/models/blog.model";
import { NextRequest,NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import randomAvatarGenerator from "@/helpers/getRandomAvatar";

export async function POST(request:NextRequest){
    const userId = await getDataFromToken(request);
        try {
            const reqBody = await request.json();
            const{firstname,lastname,bio} = reqBody;

            let cookie = request.cookies.get('token')?.value;

            const createProfile = await ProfileModel.create({

            })

        } catch (error) {
            
        }
}