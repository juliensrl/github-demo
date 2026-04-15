/**
Indique un commentaire pour jsdoc
* Represent a book.
* @constructor
* @param {string} title - The title of the book.
* @param {string} author - The author of the book.
*/
function Book(title, author) {
  console.log(`Title: ${title}, Author: ${author} `);
}
Book("Silo", "Hugh Howey");
