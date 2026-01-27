function fn1(){
    console.log("Ayush");  
}
fn1()

//Paramaterised Function
function fn2(x,y){
    console.log("yes",x,y);
    
}

fn2(10,20)

function fn3(x,y){
    return x+y
}
var res= fn3(10,20)
console.log(fn3(10,20));
console.log(res);


//Anonymous Function
function fn4(f){
    f()
    console.log(f);
    
}
fn4(function(){
    state="WB"
    console.log(state)
})



function print(){//callback
    console.log("Hello");
    
}

function fn5(f){
    f()
    console.log(f,"fn5 ran");
    
}
fn5(print)//higher order function

var res=function(){
    console.log("Function expression :","function called with storing in variable");
    
}
res()//function expression
console.log(res);

