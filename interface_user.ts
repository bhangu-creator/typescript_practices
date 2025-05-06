interface User 
{
    readonly id : number,
    name : string,
    email ?: string
}

function createUser(id: number,name :string,email?:string) :User
{
     const user={
        id : id,
        name: name,
        email : email
    }


    return user
}
function printUser(user:User) : void
{
    console.log("name is " + user.name + " id is "+ user.id +" and email if provided is " + user.email);
    
}


const usr = createUser(1,"huh")
printUser(usr)
