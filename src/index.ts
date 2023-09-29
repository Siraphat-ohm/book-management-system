import inquirer from "inquirer";
import controller from "./controller";
import menu from "./question/menu";

let books = [ 
    {
        title: "nameless monster",
        author: "Emil Scherbe",
        year: 1997,
        price: 950
    }
]

const main = async() => {
    try {
        const answer = await inquirer.prompt([ menu ]);
        if ( answer['action'] == 'addBook' ) {
            controller.addBook( books, main );
        } else if ( answer['action'] == 'viewBooks' ) {
            controller.viewBooks( books, main );
        } else if  ( answer['action'] == 'editBook' ) {
            controller.editBook( books, main );
        } else if ( answer['action'] == 'delBook' ) {
            controller.delBook( books, main );
        }
    } catch (error) {
        
    }
}

main();