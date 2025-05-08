interface Circle 
{
    type: "circle",
    radius : number
}

interface Square 
{
    type: "square",
    side : number
}

interface Rectangle 
{
    type: "rectangle",
    width : number,
    height : number
}

function Shape (typ: Circle|Square|Rectangle) : number
{
    switch(typ.type)
    {
        case "circle":
            return Math.PI*typ.radius*typ.radius
        case "square":
            return typ.side*typ.side
        default:
            return typ.height*typ.width

    }

}


let squ= Shape({type:"square",side:5})
let rec= Shape({type:"rectangle",height:2,width:2})
let cir= Shape({type:"circle",radius:3})

console.log("are of square is "+ squ + " are of rectangle is " + rec + " area of circle is " + cir );

