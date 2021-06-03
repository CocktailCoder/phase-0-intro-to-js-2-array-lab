// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
   cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function appendCat(name){
    cats.slice(cats);
    return [...cats, name];
}

function prependCat(name){
    cats.slice(cats);
    return [name, ...cats];
}

function removeLastCat(){
    cats.slice(cats);
    return [...cats.slice(0, 2)];
}

function removeFirstCat(){
    cats.slice(cats);
    return [...cats.slice(1)];
}