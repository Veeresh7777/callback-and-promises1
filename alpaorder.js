function arrangeinalpaorder(books,callback){
    
    const titles = books.map(book => book.title);

    const sortedtitles = titles.sort();

    callback(sortedtitles);
}

const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 }
];

function logtitles(titles){
    console.log("Titles in alphabetical order:");
    titles.forEach(title => console.log(title))
}

arrangeinalpaorder(books,logtitles);