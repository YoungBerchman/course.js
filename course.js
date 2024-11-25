let x = ["praise","john","peter","israel"];
let y = x.slice(0,3);
console.log(y);
let lastName = [3,3,4,5,5,2,4]
let firstname = lastName.lastIndexOf(4);
console.log(firstname);
const fruits = ["banana","orange","apple","mango","pawpaw"];
let size = fruits.push("pizza","chessball");
console.log(size);


const books = [
    "1984",
    "To kill a Mockingbird",
    "The Great Gatsby",
    "pride and prejudice",
    "The Catcher in the Rye",
];
//1
let booksTitle = books.join(",")
let lastbook = books.pop("The Catcher in the Rye");
let newbook = books.unshift("war and Peace");
let joined = books.join(";")

console.log("1.",booksTitle);
console.log("2.",lastbook);
console.log("3.",newbook);
console.log("4.",joined);
//2
let firstBooks = books.shift();
let returnBook = books.unshift(firstBooks);
let addNewBook = books.push("Pride and Prejudice");
let removeBooks = books.shift("1984")
let title = books.unshift(removeBooks)


console.log("5.",firstBooks);
console.log("6.",returnBook);
console.log("7.",addNewBook);
console.log("8.",removeBooks);
console.log("9. ",title);
console.log(books);
//3
let add = books.unshift("Pride and Prejudice");
let add2 = books.unshift("War and Peace");
let remove = books.shift();
let return2 = books.unshift(remove);
console.log("10.",add);
console.log("11.",add2);
console.log("12.",remove);
console.log("13.",return2);
//4
let aNewBook = books.push("War and Peace");
let dFirst = books.shift()
let joinAll = books.join(",")

console.log("14.",aNewBook);
console.log("15.",dFirst);
console.log("16.",joinAll);
5
let dLast = books.pop()
let rBack =  books.push(dLast)
let addPr = books.unshift("Pride and Prejudice");
let addWa = books.push("War and Peace");
console.log("17.",dLast);
console.log("18.",rBack);
console.log("19.",addPr);
console.log("20.",addWa);


const library = [
    {
        section: "Fiction",
        books: ["1984","Brave New World","Fahrenheit 451"],
    },
    {
        section:"Non-fiction",
        books: ["Sapiens","Educated","The Immortal life of Henrietta Lacks"],
    },
    {
        section: "Science",
        books: ["A Brief History of Time", "The Selfish Gene","Cosmos"],
    },
];

//6
let lab1 = library[0].books[1];
let lab2 = library[2].books.push("The Man That Knew Infinity")
let a = library[0].books.concat(library[2].books);

console.log(lab1);
console.log(lab2);
console.log(a);
// console.log(library);

//7
let b = library[1].books.pop();
let c = library[1].books.unshift("Silent Spring");
let d = library[1].section.concat(library[0].section);

console.log(b);
console.log(c);
console.log(d);

//8
let e = library[0].books.push("To kill a Mockingbird");
let f = library[2].books.shift();
let g = library[0].section.concat(library[2].section)

console.log(e);
console.log(f);
console.log(g);

//9
let h = library[2].books.pop();
let i = library[2].books.unshift("The Gene");
let j = library[2].section.concat(library[1].section)

console.log(h);
console.log(i);
console.log(j);

//10
let k = library[0].books.unshift("The Great Gatsby");
let l = library[1].books.shift();
let m = library[0].section.concat(library[1].section);

console.log(k);
console.log(l);
console.log(m);
