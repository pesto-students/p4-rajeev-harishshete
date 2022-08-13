function sum(a,b)
{
    return this.a + this.b;
}

const Values = {
    a:10,
    b:20
}

var ary  = [10,20];
console.log("calling sum() in global context")
console.log(sum())

console.log("bounded sum() to Values Object using .Bind")
const sumB = sum.bind(Values);
console.log("Sum: " + sumB())

console.log("bounded sum() to Values Object using .Call")
console.log("Sum: " + sum.call(Values))

console.log("bounded sum() to Values Object using .Apply")
console.log("Sum: " + Math.max.apply(null,ary));








