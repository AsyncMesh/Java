var arr=[100,600,400]
arr.push(500)
console.table(arr);
console.log(arr.sort())
arr.unshift(50)//first element add
arr.shift()//remove
arr.splice(2,1)
arr.splice(2,0,300)
console.table(arr);


//foreach

arr.forEach(function(e,index){
    console.log(index,e);
    
})

var res=arr.map(function(e,index){
    return e+100
})

console.log(res);

var newarr=arr.filter(function(e,index){
    return e<300
})
console.log(newarr);

