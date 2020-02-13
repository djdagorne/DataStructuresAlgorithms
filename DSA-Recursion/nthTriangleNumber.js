function nthTriangleNumber(num){
    if(num===0){
        return num
    }
    return num + nthTriangleNumber(num-1)
}

console.log(nthTriangleNumber(4))