function SheepCounter(sheep){
    while(0<sheep){
        console.log(`${sheep}: Another sheep jumps over the fence`)
        sheep--
    }    
    console.log('All sheep jumped over the fence')
}

SheepCounter(4)