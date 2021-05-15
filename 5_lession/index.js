// function getAlphabetOrder(word1, word2, word3) {
//   if (word1 < word2 && word2 < word3) {
//     return `${word1} ${word2} ${word3}`;
//   } else if (word1 < word3 && word3 < word2) {
//     return `${word1} ${word3} ${word2}`;
//   } else if (word2 < word1 && word1 < word3) {
//     return `${word2} ${word1} ${word3}`;
//   } else if (word2 < word3 && word3 < word1) {
//     return `${word2} ${word3} ${word1}`;
//   } else if (word3 < word1 && word1 < word2) {
//     return `${word3} ${word1} ${word2}`;
//   } else if (word3 < word2 && word2 < word1) {
//     return `${word1} ${word2} ${word3}`;
//   }
// }

// alert(getAlphabetOrder('Планета', 'Арбуз', 'Ар'));

// function pow(num) {
//   return num * num;
// }

// function getIncr(num) {
//   return num + 1;
// }

// function getNum(num, cb1, cb2) {
//   if (num % 2 == 0) {
//     return cb1(num);
//   } else {
//     return cb2(num);
//   }
// }

// alert(
//   getNum(
//     5,
//     function () {
//       return num + 1;
//     },
//     getIncr
//   )
// );

// function mult(num1 = 1, num2 = 1, num3 = 2) {
//   for (let i = 0; i < num3; i++) {
//     num1 = num1 * num2;
//   }
//   return num1;
// }

// alert(mult(2, 3, 3));

// let funcEx = function (num) {
//   return num * num;
// };

// let arrowFunc = (num) => {
//   return num * num;
// };

// alert(arrowFunc(6));

// alert(funcEx(7));

// arr = [0, 2];

// arr.forEach((element) => {});

// let firstName = 'Дмитрий';
// let age = 26;

// let user = {
//   firstName,
//   age,
// };
// firstName = 'Владимир';
// user.firstName = 'Аркадий'
// console.log(user);

// let user = {
//   firstName: 'Дмитрий',
//   age: 26,
//   sayName() {
//     alert(user.firstName);
//   },
// };

// // console.log(user);
// user.sayName();

// let myFavoriteFilm = {
//   title: 'La-La - Land',
//   director: 'Damian Shozel',
//   country: 'USA',
//   releaseYear: 2016,
// };

// myFavoriteFilm.profit = 10000000000;

// myFavoriteFilm.getTitle = () => {
//   console.log(myFavoriteFilm.title);
// };
// // myFavoriteFilm.getTitle();
// delete myFavoriteFilm.releaseYear;
// console.log(myFavoriteFilm);

// const a = new String('sdsd');

// console.log(a);

// let b = 'string';
// b = b.toLocaleUpperCase();
// console.log(b.toLocaleUpperCase());
// console.log(b);

// let str = 'Widgetwith id';
// alert(str.slice(-5, -1)); // 12;

// let isUpperCase = (str, n) => {
//   let char = str[n];
//   if (char === char.toUpperCase()) {
//     return true;
//   } else return false;
// };
// alert(isUpperCase('sDsadasd', ));

// let isUpperCase = (str, n) => {
//   return char === char.toUpperCase();
// };


//
// let replaceStr = (str, find, replace) => {
//   let pos = 0;
//   while (str.includes(find)) {
//     pos = str.indexOf(find, pos);
//     console.log(pos);
//     str = str.slice(0, pos) + replace + str.slice(pos + find.length);
//     //  str = Космос + Two + НовыйOneeeeЛокомотивOneeee str Oneeee
//     // pos++;
//     console.log(str);
//   }
//   return str;
// };

// console.log(
//   replaceStr(
//     'КосмосOneeeeНовыйOneeeeЛокомотивOneeee str Oneeee',
//     'Oneeee',
//     'Two'
//   )
// );

// #___________________1
// var str = 'Каждый охотник желает знать';
// var length = 5;
// function delete_characters(str, length) {

//   var result = str.slice(0, length);
// console.log(result);

// };

// delete_characters(str,length);

// #____________________2
// var str = "HTML JavaScript PHP";

// function insert_dash(str) {

// var str1 = str.toUpperCase();
// for (var i=0; i < str.length; i++) {
//   var str2 = str1[i] + '-';
// }

// console.log(str2);
// }

// insert_dash (str);


//praktika lesson6. zadacha1
// var arr = [1, -2, 5, 2, 6, 8, 4.5];

// function sum(arr) {
//   result = 0
//   for (i=0; i<arr.length; i++) {
//     if arr[i] / 2 && arr[i] > 0 {
//       result = result + arr[i]
//     }
//   }
//   console.log(result);
// } 

// var arr = [1, -2, 5, 2, 6, 8, 4.5];

// var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// for (i = 0; i < vegetables.length; i++) {
// vegetableLength = vegetables[i].length;
// }

// alert( vegetableLength ); // 7,4,7,8

// let user = {};
//     user.name: 'John';
//     user.surname: 'Smith';
//     user.name: 'Pete';
// delete user.name;

// function checkAge(age) {

// return (age>18) ? alert('Проходите!') : confirm('Родители разрешили?'); 
// }

// checkAge(19);


// function pow (x,n) {
//     let result = x;

//     for (i=1; i < n; i++) {
//         result = result * x; 
//     }
//     console.log (result); 
// }

// pow (3,3);


// const str = "test";

// console.log(str.toUpperCase());
// console.log(str)

// let fruit = "fuck you";

// console.log(fruit.substring()) 

// const p = "12.2px";

// console.log(parseInt(p));
// console.log(parseFloat(p));

// //24234213423412342

//КЛАССЫ
class People {
    constructor (options) {
        this.name = options.name;
        this.surname = options.surname;
    }
    getFullName() {
        return this.name + ' ' + this.surname;
    }
}

class Worker extends People {
    constructor(options) {
        super(options);
        this.rate = options.rate;
        this.day = options.day
    }
    getSalary() {
        return this.rate * this.day;
    }
}

const worker_1 = new Worker ({
    name: "Ivan",
    surname: "Ivanov",
    rate: 50,
    day: 100,
});
console.log(worker_1);
console.log(worker_1.getSalary());
console.log(worker_1.getFullName());