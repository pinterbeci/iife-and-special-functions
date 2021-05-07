
console.log( "Function return function!");

function index(numOfIndex){

    let returnedValue = 0 ;
    
    if( ( numOfIndex % 2 === 0 )){
        return function powing(numb){
            returnValue = Math.pow(numb, numOfIndex) ;
            console.log(returnValue);
        }
    }
    else{
        return function powing2(numb2){
            returnedValue = Math.pow(numb2, numOfIndex) ;
            console.log(returnedValue);
        }
    }
}

index(0.5)(9);
let returnedFunc = index(8);
returnedFunc(6);
/*
ha így hívtam meg a saját butaságom miatt, akkor kaptam egy plusz 'undefined'-et, mivel a függvény egy
log-ot térít vissza, így nem kell plusz egy log-ba beletenni
console.log(returnedFunc(6));

*/