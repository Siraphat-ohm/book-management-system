import inquirer from "inquirer";
import { book, confirm, select }  from "./type";
import bookQuesion from "./question/book";
import common from "./question/common";

const addBook = async( books:book[], callback: Function ) => {
    try {
        const newBook = await inquirer.prompt<book>([ bookQuesion.title, bookQuesion.author, bookQuesion.year, bookQuesion.price ]);
        books.push( newBook );
        const anotherBook = await inquirer.prompt<confirm>([ common.keepUp( "Do you want add another book ? " ) ]);
        if ( anotherBook.status ) {
            console.clear();
            addBook(  books, callback );
        } else {
            console.clear();
            callback();
        }
    } catch (error) {
        console.error('An error occurred while adding a book:', error);
        callback();
    }
                                
}

const viewBooks = async( books:book[], callback: Function) => {
    try {
        books.forEach( book => {
            console.log("title: ",book.title);
            console.log("author: ", book.author);
            console.log("year: ", book.year);
            console.log("price: ",book.price);
            console.log("---------------------------") 
        });
        const confirm = await inquirer.prompt<confirm>([ common.keepUp( "Do you want exit ? " ) ]);
        if ( confirm.status ) {
            console.clear();
            callback();
        } else {
            console.clear();
            viewBooks( books, callback );
        }
    } catch (error) {
        console.error('An error occurred while viewing a book:', error);
        callback();
        
    }
}

const editBook = async( books: book[], callback: Function ) => {
    try {
        const titles = books.map( book => book.title );
        const select = await inquirer.prompt<select>([ common.selectBook( "Select the book you want to edit ? ", titles ) ]);
        const index = books.findIndex( book => book.title === select.title );
        const newBook = await inquirer.prompt<book>([ bookQuesion.title, bookQuesion.author, bookQuesion.year, bookQuesion.price ]);
        books.splice(index, 1);
        books.push( newBook );
        const anotherBook = await inquirer.prompt([ common.keepUp("Do you want edit another book ? ") ]);
        if ( anotherBook.status ) {
            console.clear();
            editBook( books, callback );
        } else {
            console.clear();
            callback();
        }
    } catch (error) {
        console.error('An error occurred while editing a book:', error);
        callback();
    }
}

const delBook = async( books: book[], callback: Function ) => {
    try {
        const titles = books.map( book => book.title );
        const select = await inquirer.prompt<select>([ common.selectBook( "Selelct the book you want to delete ? ", titles )]);
        const index = books.findIndex( book => book.title === select.title );
        const confirm = await inquirer.prompt<confirm>([ common.keepUp( "Do you want to delete this book ? " ) ]);
        if ( confirm.status ) {
            console.clear();
            books.splice(index, 1);
            const keepUp = await inquirer.prompt<confirm>([ common.keepUp( "Do you delete another book ? " )]);
            if ( keepUp.status && books.length > 0 ) {
                delBook( books, callback );
            } else {
                callback();
            }
        } else {
            callback();
        }
    } catch (error) {
        console.error('An error occurred while deleting a book:', error);
        callback();
    }
}

export default { addBook, viewBooks, editBook, delBook };