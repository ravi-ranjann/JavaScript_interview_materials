const str1 = "4[a]" // aaaa
const str2 = "3[abc]4[ab]c" // abcabcabcababababc
const str3 = "2[3[a]b]" // aaabaaab

function getExpandedString(str) {
    let stack = [];
    let result = "";
    let temp = "";
    for(let i=0; i< str.length ; i++) {
        if(!isNaN(str[i]))  stack.push(parseInt(str[i]));
        else if(str[i] === '[') continue;
        else if(typeof str[i] === 'string' && str[i] !== ']') temp += str[i];
        else if(str[i] === ']') {
            temp = temp.repeat(stack.pop());
            if(stack.length === 0) {
                result += temp;
                temp = "";
            }
        }
    }
    return result + temp;
}


console.log(getExpandedString(str2));

