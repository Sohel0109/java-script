function Sum(a, b){

    sum = a+b;
    console.log(sum);
}

function odd_even(a){
    if(a%2 ==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
function largest(a, b, c){
    if(a>b && a>c){
        console.log("a is largest");
    }
    else if(b>c && b>a ){
        console.log("b is largest");
    }
    else if(b ==c ==a){
        console.log("All are equal");
    }
    else{
        console.log("c is largest");
    }
}
function celtofer(a){
    console.log(((9/5)*a)+32);
}

Sum(1, 3);
odd_even(2);
largest(1, 2, 3);
celtofer(40);