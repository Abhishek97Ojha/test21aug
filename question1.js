function greet() {
    return 'Hello';
}
function name(user, func)
{
    const message = func();
    console.log(`${message} ${user}`);
}

name('Ram', greet);
name('Shyam', greet);
name('Sanjiv', greet);
