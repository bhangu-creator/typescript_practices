interface Profile 
{
    name : string,
    city? : string,
    zipcode : number
}

function printCity (prof : Profile) : void
{
    const cite = prof.city ?? "City not available"
    console.log(`user's city is : ${cite}`  );
    
}

const deta : Profile= {name: "Bhangu",city: "Patiala",zipcode:148}
printCity(deta)

const deta2 : Profile= {name: "Bhangu",zipcode:148}
printCity(deta2)
