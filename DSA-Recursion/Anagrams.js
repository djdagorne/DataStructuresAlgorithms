function permutations(string){
    if (string.length === 1){
        return string;
    }    
    var permutation = []

    for (var i=0; i<string.length; i++){  
        //start going through each letter of the string
        var firstLetter = string[0]; 
        var otherLetters =  permutations(string.slice(1, string.length)); 
        //recursively scramble the tail end of the string, working towards the begining
        //scrambles from back to front
        for(var j=0; j<otherLetters.length; j++){
            permutation.push(firstLetter + otherLetters[j]);
        }
        string = string.substr(1, string.length-1) + firstLetter;
    }
    return permutation;
}

console.log(permutations('abc'))

