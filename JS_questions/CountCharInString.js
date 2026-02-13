// Count the characters in strings?

const str = 'aaabbcqwsaerasdfasdfa';

function count(input){
    let res = {};
    for(let i=0; i< input.length ; i++) {
        const cha = input[i];
        if(res[cha] === undefined) {
            res[cha] = 1;
        } else {
            res[cha] += 1;
        }
    }
    return res;
}

console.log(count(str));