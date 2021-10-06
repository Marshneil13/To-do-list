let todoList = [];
let todo = prompt("What would you like to do?");
let item;
while (todo.toLowerCase() !== "quit")
{
    if (todo.toLowerCase() === "new")
    {
        item = prompt("Enter Todo");
        todoList.push(item);
        console.log(item);
    }
    else if (todo.toLowerCase() === "delete")
    {
        let del = parseInt(prompt("Ok, enter item number to remove"));
       while(!del||del<0||del>=todoList.length)
        {
           del =parseInt(prompt("Enter a valid index"));
            }
        console.log(`Ok, we removed ${ todoList[del] }`);
        todoList.splice(del, 1,);
    }
    else if (todo.toLowerCase() === "list")
    {
        console.log("********************");
        for (let obj of todoList)
        {
            console.log(`${todoList.indexOf(obj)} : ${obj}`);
        }
        console.log("********************");
    }
    else {
        console.log("Oops! The command is invalid!");
    }
    todo = prompt("What would you like to do?");
}
    console.log("YOU HAVE EXIT THE LIST!");
