// Assignment 2
// Task2
let contact_table = document.getElementById("contact_table");

const contacts = [];

function add_contact(contact) {
     let name =
          document.getElementById("fname").value +
          " " +
          document.getElementById("lname").value;

     let new_contact = {};
     new_contact.name = name;
     new_contact.email = document.getElementById("email").value;
     new_contact.message = document.getElementById("message").value;
     contacts.push(new_contact);
}

function clear_table(table) {
     while (table.childNodes.length > 1) {
          table.removeChild(table.lastChild);
     }
}

document.getElementById("submit").addEventListener("click", function (event) {
     clear_table(contact_table);
     add_contact();
     populate_table(contact_table, contacts);
     // event.preventDefault();
});
