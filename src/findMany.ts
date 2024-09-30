import {prisma} from "./index"


async function finadMany(firstName: string){

    const res= await prisma.user.findMany({
        select:{
            id :true,
            firstName:true,
            lastName:true,

        },
        where:{
            firstName:firstName
        }
    })
    console.log(res)
}
finadMany("rohit")