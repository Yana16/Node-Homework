const contacts = require("./db/contacts");
const { program } = require("commander");
// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");
// const argv = require("yargs").argv;

const invokeAction = async ({ action, id, email, name, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;
    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
      break;
    case "add":
      const newContact = await contacts.addContact({ email, name, phone });
      console.log(newContact);
      break;
    case "remove":
      const removeCont = await contacts.removeContact(id);
      console.log(removeCont);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program.option("-a, --action <type>", "choose action");
program.option("-i, --id <type>", "user id");
program.option("-n, --name <type>", "user name");
program.option("-e, --email <type>", "user email");
program.option("-p, --phone <type>", "user phone");

program.parse();
const options = program.opts();
invokeAction(options);

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// invokeAction(argv);

// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
// }

// // invokeAction({ action: "list" });
// // invokeAction({ action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// // invokeAction({
// //   action: "add",
// //   id: "AeHIrLTr6JkxGE6SN-0Rw",
// //   name: "Allen Raymond",
// //   email: "dui.in@egetlacus.ca",
// //   phone: "(294) 840-6685",
// // });
// invokeAction({
//   action: "remove",
//   id: "AeHIrLTr6JkxGE6SN-0Rw",
// });
