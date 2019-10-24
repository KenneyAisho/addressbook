class AddressBook {
  constructor(contacts) {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    this.contacts.push(new Contact(name, email, phone, relation));
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

function print(info) {
  console.log(info);
}

let book = new AddressBook();

book.add("Kenney", "kenneyaisho@gmail.com", "5865555555", "myself");
book.add("Kyle", "kyleaisho@gmail.com", "5864444444", "brother");
book.add(
  "Jarl",
  "Jarlbalgruuf@gmail.com",
  "phones didn't exist back then",
  "Jarl of Whiterun"
);
book.deleteAt(1);
print(book);
