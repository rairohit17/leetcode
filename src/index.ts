import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

async function addingValue(email: string, firstName:string, lastName: string){

    const res= await prisma.user.create({
        data:{
            email,
            firstName,
            lastName
        },
        select:{
            id: true,
            email:true,
            firstName:true,
            lastName:true
        }

    })
    console.log(res)
}
// addingValue("roai@1dfsdfs23.com", "rohit","rai")

