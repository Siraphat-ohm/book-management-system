import { InputQuestion } from "inquirer";

const title: InputQuestion = {
    name: "title",
    message: "Enter title book : ",
}

const author: InputQuestion = {
    name: "author",
    message: "Enter author : "
}

const year: InputQuestion = {
    name: "year",
    message: "Enter Year of publication : ",
    validate: async( input ) => {
        if ( isNaN(input) ) return "Please enter number.";
        return true;
    }
}

const price: InputQuestion = {
    name: "price",
    message: "Enter price : ",
    validate: async( input ) => {
        if ( isNaN(input) ) return "Please enter number.";
        return true;
    }
}

export default { title, author, year, price };