// squre broket--> (köşeli parantez[])demek

// DİZİLER------
// DİZİ TANIMLAMA

// const names = []
// console.log(names);
// !square bracket (ARRAY LİTERAL)
const names = ["ahmet","mehmet","Saffet","can","true",6.6,[1,3],"ara vakti"]
console.log(names);
console.log("uzunluk:" , names.length);
console.log(typeof names);  //*object (jsde aslında herşey bir objedir.)

// dizilere erişim yöntemleri:
// *---- diziden veri okuma -yazma (indisleme)
// ?OKUMA
console.log(names[3]);
console.log(names[0]);
console.log(names[6][0]); //?1

// ?dizinin son elemanını bir değişkene saklyalım

// const lastelement = names[7]-->hard-codedur.aşağıdaki gibi yapsak daha iyi.
const lastelement = names[names.length-1]
console.log(lastelement);

// ?YAZMA
names[4] = "canan"
console.log(names);

names[5]++ //?değeri bir artırmış ılduk.yani 5. sıradaki 6.6 -> 7.6 olur.
console.log(names);

names[2].toLowerCase()
console.log(names); //?diziyi tkerar baktıiğmızda saffetin s yine küçük olur çünkü atamadık aşağı bak
names[2]=names[2].toLowerCase()
console.log(names);

// ! 2.YÖNTEM (OBJECT CONSTRUCTOR)

const programmingLangs = new Array("go","js","java")
console.log(programmingLangs);

const myarr = new Array(2) //? bu şekilde girilirse [emptyx2] iki elemanlı bir dizi oluşturmuş oluyor.

// ! 3.YÖNTEM (Array.of())

const sayılar = Array.of(4)
console.log(sayılar);

// ?---------DİZİYİ DEĞİŞTİREN (MUTATOR) METODLAR

const cars = ["BMW","mersedes","audi","togg","anadol","devrim"]
cars[cars.length]="şahin"
console.log(cars);  //! bu zorlama olur aşağıdaki methodlar daha iyi
// *push(dizinin sonuna eleman ekler ve dizinin son eleeman sayısını döndürür.)
cars.push("kartal")
console.log(cars);  //?en son elemente ekledi

// *pop() son elementi çıkartır ve sildiği elemnti dömdürür.

const deletecar = cars.pop()
console.log(deletecar);


// *shift() dizinin sıfırıncı index elemanını siler ve döndürür.

const bmv = cars.shift()
console.log(bmv);
console.log(cars);

// * unshift() dizinin  sıfırıncı indexine eleman ekler ve son eleman sayısı döndürür.

const newelsay = cars.unshift("toros")
console.log(newelsay);
console.log(cars);

// *splice() aradan bir şey silme veya eklemeye yarar.
// ?1.parametre  eklenecek indis numarası
// ?2.oarametre 0 ise araya eklme 1 ise üzerine yazma
// ?3.parametre yeni eklenecek veri



cars.splice(1,0,"porsche")
console.log(cars);

cars.splice(4,0,"serçe","tofaş")
console.log(cars);

// * reverse() index olarak zıddını almış oluyor .tersinden yazdırıyor.

cars.reverse() 
console.log(cars);

// *sort() sıralıyor. ascıı ye göre sıralar. yazı karakterlerine göre sıralar. textlerde bu işe yarar. A dan Z ye . sonuna reverse eklersek tam tersi Z den  A ya sıralar.
// sort methodu diziyi iterasyona uğratır. ve ascii karaktere göre sıralam yapar.dolayısı ile stringlerde doğru sıralam yapar.
cars.sort()
console.log(cars);

cars.reverse()
console.log(cars);

// ! ancak sayılar il edoğrudan sıralama yapılır sa asciiden dolayı değerler sıralammış olabilir.
const number = [3,2,1,9,3]
number.sort()
console.log(number);

const num = [3,2,22,1,11,9,3]
num.sort()
console.log(num);

const nu = [3, 2, 22, 6, 1, 11, 9, 3]

nu.sort((a, b) => a - b) //? Asc küçükten büyüğe
nu.sort((a, b) => b - a) //? DESC (büyükten küçüğe)
console.log(nu)

// * fill()  hepsini sıfır yaptı.
const degerler = [2, 1, 4, 33, 7, 9, 22]
degerler.fill(0)

// for (let i = 0, j = 1; i < degerler.length; i++) {
//   degerler[i] = j++
// }

degerler.fill(77, 3) //?1.parmetere: deger, 2.start index
degerler.fill(44, 3, 5) //?1.parmetere: deger, 2.start index, 3. end index (not inclusive)

console.log(degerler)
