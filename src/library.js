function createLibrary(name, shelves){
  if (!name || shelves <= 0) {
    return [];
  }

  var library = {
    name: name, //sets property name
    shelves: { //created a 'shelf' object in the library
      fantasy: [], //Initializes empty array
      fiction: [], //Initializes empty array
      nonFiction: [] //Initializes empty array
    }
  };

  return library; //returns the library object 
}

function addBook(library, book){
    if(!library.shelves){
      library.shelves = {};
    }
    library.shelves[book.genre].push(book);

    return library;
  }

  function checkoutBook(library, title, genre){
    for (i = 0; i < library.shelves[genre].length; i++){
      var createBook = library.shelves[genre][i].title;
      if(createBook === title){
        library.shelves[genre].splice(i,1)
      }
      return `You have now checked out ${title} from the ${library.name}.`
    }
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`
  }
  

    
  function takeStock(library, genre){ 
    if(genre === undefined){
      return `There are a total of ${Object.values(library.shelves).length} books at the ${library.name}.`
    }
    var stock = 0;
    for(i = 0; i < library.shelves[genre].length; i++){
      stock += library.shelves[genre].length;
      return `There are a total of ${stock} ${genre} books at the ${library.name}.`
    }
  }



module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};

