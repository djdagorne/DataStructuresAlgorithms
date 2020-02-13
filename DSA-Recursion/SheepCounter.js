function SheepCounter(sheep){
    if(sheep===0){
        console.log('All Sheep jumped over the fence')
    }else{
        console.log(`${sheep}: Another sheep jumps over the fence`)
        SheepCounter(sheep-1)
    }
}

SheepCounter(4)