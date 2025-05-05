

interface Products{

    id : number,
    name : string,
    price : number,
    inStock : boolean
}

let products : Products[] = [
    {
  id : 1,
  name: "userOne",
  price: 1,
  inStock: true
},
{
    id : 2,
    name : "userTwo",
    price : 2,
    inStock : false
},
{
    id : 3,
    name: "userThree",
    price : 3,
    inStock : true
}
]

function printAllProducts(products: Products[]): void {
    for (const product of products) {
        printProductDetail(product);
    }
}

function printProductDetail (prod : Products) :void
{
    console.log("Product Id "+ prod.id + " and name is " + prod.name + " and price is " + prod.price+ " and is it in stock? "+ prod.inStock)

}


printAllProducts(products)