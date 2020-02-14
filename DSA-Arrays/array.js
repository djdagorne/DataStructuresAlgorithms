import memory from './memory'

class Array{
    constructor(){
        this.length = 0;
        this.ptr = memory.allocate(this.length)
    }

    push(value){
        if(this.length >= this._capacity){
            this._resize((this.length+1) * Array.SIZE_RATIO);
        }
        //resizes the array, requesting a proper sized memory allocation to be provided for the resized array
        
        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size){
        //takes old memory, and requests a larger/smaller space to store new memory
        const oldPtr = memory.allocate(size);
        this.ptr = memory.allocate(size);
        if(this.ptr === null){
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }

    get(index){
        //this adds an index offset and gets the value stored at a memory address. 
        if(index < 0 || index >= this.length){
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index)
    }

    pop(){
        if(this.length ===0){
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1)
        this.length--;
        return value;
    }

    insert(index, value){
        //if we want to insert into the middle of the array, we take the existing info copy it and shift to the right one position
        if(index < 0 || index >= this.length){
            throw new Error('Index error');
        }
        if (this.length >= this._capacity){
            this._resize((this.length+1)*Array.SIZE_RATIO)
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++ 
    }

    remove(index){
        //we check to see if index is valid
        //we copy data that occurs after index using O(n) get methods
        //we set it to this.ptr-index,value
        //length--
        if(index < 0 || index >= this.length){
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.ptr - index - 1)
        this.length--

    }
}
Array.SIZE_RATIO = 3;

