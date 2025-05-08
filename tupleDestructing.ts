let coord: [number,number]

function coords (coords:[number,number]) : string
{
    return "X coordinate is "+ coords[0] + " y coordinate is " + coords[1]

}

coord =[10,20]
let str : string =coords(coord)
console.log(str)