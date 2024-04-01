// const code = ["java" , "JS ", "html"];

// const values = code.forEach ( (value) => { // for each kabhi value return nahi karta
//     console.log(value);
//     return value
// })

// console.log(values);

// const num = [ 1,2,3,5,6,8,9,7,10]
//                       // if {} is not used then return is not needed
// const numm = num.filter( (number) =>  number > 4 )
//                       // if scope if open then return is must warna it wont show result
// const numm2 = num.filter( (number) => { 
//     return number > 4 } )

// const newNumbs = []

// myNumbs.forEach ( (num) => number > 4 )
// console.log(numm,numm2);



// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   const print = books.filter ( (bk) => bk.genre === "Fiction")

//   console.log(print);
                // filter mei TRUE FALSE kr skte 
                // map vs filter - map har ek value pr jata agr kch changes kroge lekin filter sb k end m krta
  const num = [ 1,2,3,5,6,8,9,7,10]
  const newnum = num.map ( (num) => num + 10)
  const newnum2 = num.filter ( (num) => num + 10)
  console.log(newnum);
  console.log(newnum2);

  

  mytotal = mynums.reduce( (acc,currentvalu) => acc+currentvalu,0)