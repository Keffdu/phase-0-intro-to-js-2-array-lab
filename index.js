const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push('Ralph');
};

function destructivelyPrependCat() {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    let newCats;
    return newCats = [...cats, "Broom"];
}

function prependCat() {
    let newCats;
    return newCats = ["Arnold", ...cats];
}

function removeLastCat() {
    let newCats;
    return newCats = [...cats.slice(0,2)];
}

function removeFirstCat() {
    let newCats;
    return newCats = [...cats.slice(1)];
}