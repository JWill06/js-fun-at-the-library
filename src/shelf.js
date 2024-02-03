function shelfBook(book, sciFiShelf){
  if (sciFiShelf.length < 3) {
    sciFiShelf.unshift(book);
  }
}

function unshelfBook(bookTitle, shelf){
  var remove = shelf.findIndex(book => book.title === bookTitle)
  if (remove !== -1){
    var removeBook = shelf.splice(remove, 1)[0];
    return removeBook;
  }
}

function listTitles(titles){
  var list = titles.map(book => book.title).join(', ');
  return list;
}

function searchShelf(title, shelf) {
  if (Array.isArray(shelf)) {
    return shelf.some(book => book.title === title);
  } else {
    return false;
  }
}








module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};


