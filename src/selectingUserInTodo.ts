import {prisma } from "./index"


async function  selecting(){
     const res= await prisma.todo.findMany({
        select:{
            id:true,
            user_id:true,
            todo:true,
            description:true,
            user:{
                select:{
                    email:true,
                    firstName:true,
                    lastName:true
                
                }
            }

        }
     })
     console.log(res)
}
selecting()