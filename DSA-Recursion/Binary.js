function convertToBinary(num){
    if(num>0){
        let binary = Math.floor(num%2);
        return (convertToBinary(Math.floor(num/2))+ binary,' ' );
    }else{
        return ''; 
    }
}

console.log(convertToBinary(25))