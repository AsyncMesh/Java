var product={
    pid:"p1",
    pname:"TV",
    pquantity:6,
    price:500000
}


product.company="Sony"
console.log(product);
delete product.company
console.log(product);

var order={
    orderId:"8161238",
    oderDate:"2025",
    oderby:{
        name:"Ayush",
        id:"57"
    }
}

product.order=order
console.log(product);
console.log(product["order"]["oderby"]);