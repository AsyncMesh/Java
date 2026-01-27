var obj1={
    id:1,
    deptnm:"MKTG",
    loc:"LOLKATA"
}
var obj2={
    ...obj1,
    loc:'Delhi'
}

console.log(obj1);
console.log(obj2);

//Rest Parameter
//behave like a array
function fn(x,y,...data){
    console.log(x,y,data);
}
fn(10,20,30,40)

// output: 10 20 [ 30, 40 ]

var employee={
    eid:1,
    ename:'Ajoy',
    deptnm:'HR'
}

var {eid}=employee

console.log(eid);


//Arrow Function

function fn(){
    console.log("NOrmal Function");
    
}
fn()

const fn1=()=>{
    console.log("arrow Function");
    
}
fn1()

var arr=[100,600,400]
arr.forEach((e,index)=>{
    console.log(index,e);   
})

