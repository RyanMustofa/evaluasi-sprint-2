//(i,n) => eval("for(1 = array(i).fill(1);n-->i;)1.push(eval(1.slice(-i).join`+`));1");
function fibonaci3(){

var fib = (i,n)=>[...Array(n)].map((_,j,a)=>a[j]=j<i?1:j-i?s+=s -a[j +~i]:s=i)
var fibonansi = fib(4,9)
console.log(fibonansi);

var text = "";

var hasil = fibonansi.map((o)=> o)

document.write(hasil)
}

fibonaci3();
