function showAlert() {
    alert("Bạn đã nộp bài");
}
//let arr = ["Táo", "Chuối", "Vải", "Mận"]
//console.log(arr.sort());

let arr = [
    {
        name: "Hoa",
        age: 30  
    },
    {
        name: "Duc",
        age: 24 
    },
    {
        name: "Lan",
        age: 11
    }
]
console.log(arr.sort(function(a, b) {return a.age - b.age}));

let arr1 = ["Hoa", "Ha"]
let arr2 = ["Duc", "Tuan"]
let arr3 = ["Kien", "Minh"]
console.log(arr1.concat(arr2, arr3));

let animals = [
    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
]

let animals_names = animals.filter(myFunction);
function myFunction (value, index, array) {
       return value.weight > 10;
}
console.log(animals_names);

let date = new Date ();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth()+1);
//In JavaScript, the first month (January) is month number 0, so December returns month number 11.
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(days[date.getDay()]);