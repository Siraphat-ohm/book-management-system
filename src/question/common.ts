import { ConfirmQuestion, ListQuestion } from "inquirer";

const keepUp = ( message: string ) => {
    return<ConfirmQuestion> {
        type:"confirm",
        name: "status",
        message: message,
    };
}

const selectBook = ( message: string, titles: string[] ) => {
    return <ListQuestion> {
        type: "list",
        name: "title",
        message: message,
        choices: titles
    }
}

export default { keepUp, selectBook };