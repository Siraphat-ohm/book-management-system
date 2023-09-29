import { ListQuestion } from "inquirer";

const menu: ListQuestion = {
   type: "list" ,
   name: "action",
   message: "What do you want to do ?",
   choices: [
        { name: 'addBook', value: 'addBook' },
        { name: 'viewBooks', value: 'viewBooks' },
        { name: 'editBook', value: 'editBook' },
        { name: 'delBook', value: 'delBook' },
        { name: 'exit', value: 'exit' }
   ]
}

export default { menu };