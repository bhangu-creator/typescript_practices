interface Product{

    id : number,
    name : string,
    price : number,
    isStock : boolean
}


const Product = {
    id : 4,
    name: "bhangu" ,
    price : 44,
    isStock : false
}

function printProductDetails (prod : Product) :void
{
    console.log("Product Id "+ prod.id + " and name is " + prod.name + " and price is " + prod.price+ " and is it in stock? "+ prod.isStock)

}

printProductDetails(Product)