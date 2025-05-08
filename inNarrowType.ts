interface car
{
    brand : "honda",
    engineCapacity : number

}

interface bike 
{
    brand: "honda",
    cc : number
}

function getCapacity(cap : car|bike) : void
{
    if("engineCapacity" in cap)
    {
        console.log(cap.engineCapacity);
        
    }

    else if ("cc" in cap)
    {
        console.log(cap.cc);
        
    }

}

getCapacity({brand :"honda",cc:500})
getCapacity({brand :"honda",engineCapacity:200})
