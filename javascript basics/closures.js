//using function factory as in file functions
function multiplyby(multiplier){
    return (
        function (x){
            return multiplier * x;
        }
    )
}
var dodouble = multiplyby(2);
console.log(dodouble(13));//now is when exe envt is created
/**
 * basically the console.log statement is what is returned from the multiplyby function, which is also a function
 * so dodouble is a function that has been returned.
 * now how is the dodouble function able to perform the functions operation after being returned
 * this is because of closure in javascript
 * the function is retained in memory
 * the multiplier variable is looked in its own lexical envt, then outside the lexical envt of the function
 */