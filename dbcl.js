function doublewithcallback(arr,callback){
    let doublearr = [];

    for(i=0; i<arr.length ; i++)
    {
        doublearr.push(callback(arr[i]));

        
    }
    
    return doublearr;

}

const orginalarray = [1,2.3,4,5];

function double(num){
    return num*2;
}

const doublearray = doublewithcallback(orginalarray,double);

console.log(doublearray);