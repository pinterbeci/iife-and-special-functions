console.log(`IIFE functions (Azonnal meghívódó fv-k) !`);

console.log( 
    (function add(a,b){
        return a + b;
    })(4,5)

);
console.log(
    ( (a, v) => {

        return (Math.pow(a, v));
    }) (5, 7)

);