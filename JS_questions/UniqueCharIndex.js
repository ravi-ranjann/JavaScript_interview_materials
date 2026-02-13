// Return index of unique characters

const str = "India is my nation."

function checkIndex(str) {
    const str1 = str.toLowerCase();
    const obj = {};

    for(let i=0; i<str1.length; i++) {
      const ch = str1[i];
      if(!obj[ch]) {
        obj[ch] = {count: 1, index: i};
      } else {
        obj[ch].count += 1;
      }
    }

    const keys = Object.keys(obj);
    for(let i=0; i< keys.length; i++) {
      if(obj[keys[i]].count === 1) {
        console.log(keys[i] + ' : ' + obj[keys[i]].index)
      }
    }
}

checkIndex(str)