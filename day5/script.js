let i=0;
let numbers = [];
for(i ; i<51; i++ ){
    if(i%2 == 0){
        console.log(i +"even");
    }
    else{
        console.log(i);
        
    }
    numbers.push(i);
}

console.log(numbers)
function even(){   
let even = numbers.filter(n<= n%2==0);
console.log(even);
}

let student = {
    name: "Tony",
    age: 23,
    skills : ["C", "Java"]
}
ß
student.skills.push("python");
for(let key in student){
    console.log(key, ":", student[key] );
}
