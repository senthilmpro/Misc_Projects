[1,2,3].forEach(function(value, index){
    console.log("value, index : ", value, index)
});

foo = (x,y) => {
    return {
    author : "senthilmpro",
    "date" : new Date(),
    "name" : "Senthil Kumar Muthuvel"
}
}

console.log(foo(1,2));

console.log(foo.name)