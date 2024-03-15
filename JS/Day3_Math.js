const name = new String ("Hhell");
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt());

const num = new Number(102.89);
console.log(num.toPrecision(4)); // jitna daloge utni precise value dega baki round off

const numb = new Number(100);
console.log(numb.toFixed(2)); // Point ke baad wali values daldega 


const numbb = new Number(1000000);
console.log(numbb.toLocaleString('en-IN')); // commas lagata acc to indian value


console.log(Math);
console.log(Math.abs(-5)); // Positive krdeta
console.log(Math.round(4.3)); // Normal Round off
console.log(Math.ceil(4.2)); //  Top Round off
console.log(Math.floor(4.2)); //  Bottom Round off
console.log(Math.floor(4.2)); //  Bottom Round off

const min =10
const max =20
console.log(Math.floor(Math.random() * ( max - min + 1 )) + min ); // agar min value chahea ho randome mei
