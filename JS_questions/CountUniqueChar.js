// Count unique characters in a string

const str = "aa dada";

function count(input) {
    let res = 0;
    let unique = {};
    for(let i=0; i< input.length; i++) {
        const cha = input[i];
        if(unique[cha] === undefined){
            res += 1;
            unique[cha] = 1;
        }
    }
    return res;
}

console.log(count(str));