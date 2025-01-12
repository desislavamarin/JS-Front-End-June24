// ((a, b, c) => console.log(Math.min(a, b ,c)));


//без math.min
function smallestNumber (a, b, c) {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

smallestNumber(2,3,1);