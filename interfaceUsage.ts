

interface Produce{

    id : number,
    name : string,
    price : number,
    inStock : boolean
}

const cart : Produce[] =[]

let prod : Produce[] = [
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

function getAvailableProducts(products: Produce[]): Produce[] {

    return products.filter(product=>product.inStock)

    
}


const availableProds = getAvailableProducts(prod)

function addProductsToCart(availProds:Produce[]) : Produce[]
{
    for (const item of availProds)
    {
    cart.push(item)
    }

    return cart

}

function calcPriceOfCart(mycart: Produce[]) : number
{
    let price =0
    mycart.forEach(mycart=>price=price+mycart.price)
    return price
}


const mycart= addProductsToCart(availableProds)
const price= calcPriceOfCart(mycart)
console.log("The price of total items in my cart is " + price)