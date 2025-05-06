function printValueType(val:string|number): void
{
    if(typeof val=="number")
    {
        console.log("It's a number");
        
    }
    else if(typeof val=="string")
    {
        console.log("It's a string");
        
    }
}

printValueType(5)
printValueType("5")

function formatInput(val:string|number[]): string
{
    if(typeof val=="string")
    {
        return val.toUpperCase()
        
    }
    if(Array.isArray(val))
    {
        
        return val.join("-") 
        
    }

    return ""
}

let str1=formatInput("jjsjaa")
let str2=formatInput([1,2,3,4,5])
console.log(str1)
console.log(str2)