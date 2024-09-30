import {prisma} from "./index"


type updateData= {
    firstName : string,
    lastName : string
}

async function Update(email :string , data : updateData ,){
    const res = await prisma.user.update({

        where :{
            email: email,
        },
        data:{
            firstName:data.firstName,
            lastName : data.lastName
        },
        select:{
            id:true,
            firstName:true,
            lastName:true
        }

    })
    console.log(res)
    
}
Update("rohitrai@123.com",{firstName:"shivhm", lastName:'rai'})