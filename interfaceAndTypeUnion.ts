interface Dog 
{
    type:"dog",
    breed:string
}

interface cat
{
    type :"cat",
    color : string
}

type Pet= Dog|cat

function describePet(pet : Pet)
{
    if (pet.type=="dog")
    {
        console.log("breed is " + pet.breed);
        
    }

    else if (pet.type=="cat")
    {
        console.log("color is " + pet.color);
    }
}

const pet : Pet= { type : "dog",breed: "labra"}
describePet(pet)