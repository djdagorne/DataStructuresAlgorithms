function ReverseString(string){
    if(string.length === 1){
        return string;
    }
    return string.slice(0, -1) + ReverseString(string.slice(0, -1))
}

console.log(ReverseString('testy1234'))