function createTitle(bookTitle) {
  var bookIdea = `The ${bookTitle}`
  return bookIdea
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name, 
    age: age,
    pronouns: pronouns
  }
  return character
}


function saveReview(newReview, allReviews) {
  if(!allReviews.includes(newReview)){
    allReviews.push(newReview)
    }

    return allReviews;
  }

  function calculatePageCount(bookTitle) {
    var pageCount = bookTitle.length * 20;
  
    return pageCount;
}

function writeBook(bookTitle, bookCharacter, genre){
  var book = {
    title: bookTitle,
    genre: genre,
    pageCount: calculatePageCount(bookTitle),
    mainCharacter: bookCharacter,
  };
  
  return book;
}

function editBook(book){
  book.pageCount = Math.ceil(book.pageCount * 0.75);

    return book.pageCount;
}



    
  
 
  