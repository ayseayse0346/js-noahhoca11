// ***DİZİ ERİŞİM METHODLARI 

// ACCESS

const numbers = [3, 5, 2, "4", "bes", "four", 3, "4", "bes", "1", 3, "bes"]

//* includes()
//*----------------------------------------------------------- içinde var mı yok mu ona bakar.

console.log(numbers.includes("4")); //true var yani
console.log(numbers.includes("Bes")); //?false baş harfi büyük çünkü 
console.log(numbers.includes("Bes".toLowerCase()));  //true 
console.log(numbers.includes("four",5)); //? 5 ten sonra four var mı ona bakar true

// **indexof(), lastindexof()
// ilk eşleşen döndürür. bulunmazsa -1 döndürür.

console.log(numbers.indexOf("bes")); //baştaki besin index no döndürür.//?4
console.log(numbers.lastIndexOf("bes"));  //sondaki besin index değerini döndürür.//?11

console.log(numbers.lastIndexOf("bes",5)); //beşten sonraki beşi bul dersek onun index no döndürr.

console.log(numbers.lastIndexOf("beslik")); //! -1 döndürdü çünkü bu yok.

if(numbers.indexOf(2)<0){
    console.log("aranan bulunamadı.");
}else{
    console.log(`aradığınız sayı ${numbers.indexOf(2)} indisinde bulunmuştur.`);
}

// ? join ,dizinin elemanlarını birleştirip stringe çevirir.

const joinedarray = numbers.join() //birleştirdi default olarak virgül koyar. "" yaparsak hiç birşe y koymaz ."-"yaparsak bunu koyar araya ama numbers yine clg yaptığımızda değişmez bu bi rkopya gibiii?
console.log(joinedarray);
console.log(numbers);

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.
console.log(numbers.toString())

//* concat()
//*-----------------------------------------------------------
const message = ["The weather", "is", "very", "nice"]
const time = new Date().toDateString()
console.log(time, message)

const concatedArray = message.concat("hello", time, "JS")
console.log(concatedArray)

console.log(concatedArray.reverse().join(" "))

//* slice(start, end) -- end exclusive
//*-----------------------------------------------------------
let cars = ["BMW", "Mercedes", "Fiat", "Togg"]

const slicedCars = cars.slice(1) //?  ['Mercedes', 'Fiat', 'Togg']
console.log(slicedCars, cars)

console.log(cars.slice(0, 2)) //?['BMW', 'Mercedes']


