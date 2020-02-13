function Factorial(num){
    let result = num
    for(i=num-1;i>0;i--){
        result = result * i
    }
    return result
}

console.log(Factorial(5))