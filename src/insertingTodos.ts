import { prisma } from "./index";
type Todo ={
    todo:string,
    description:string,
    user_id: number
}

async function insertTodo(data :Todo){
    const res  = await prisma.todo.create({
        data:{
            todo :data.todo,
            description: data.description,
            user_id: data.user_id
        },
        select :{
            todo:true,
            description:true,
            user_id:true,
            id:true
        }
    })
    console.log(res)
}
insertTodo({
    todo:"hello ther ",
    description:"bfhjsdgfyhjsdgjyfsdjyufhkdhf",
    user_id:4

})