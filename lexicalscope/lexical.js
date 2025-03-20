
function a(){
    b();
    function b(){
        console.log(c);
    }
}
let c = 10;   // it will be in scope with child function like a () and B();
a();
//let c =10;   here this will through reference error cant access "c"...
