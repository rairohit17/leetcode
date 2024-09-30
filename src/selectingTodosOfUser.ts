import {prisma } from "./index"
   

async  function  select (){
    const res= await prisma.user.findMany({
        select:{
            firstName:true,
            lastName:true,
            id:true,
             todos:{
                select:{
                    todo:true ,
                    description:true,
                }
             }
        }
    })
    console.log(JSON.stringify(res))
}
select()