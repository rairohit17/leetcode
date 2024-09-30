import { isExpressionWithTypeArguments } from "typescript"
import {prisma } from "./index"

async function  findOne(id : number){
   const res=  await  prisma.user.findUnique({
        select :{
            id:true,
            email:true,
            firstName:true,
            lastName:true,

        },
        where:{
            id :id
        }

    })
    console.log(res);
}
findOne(1);