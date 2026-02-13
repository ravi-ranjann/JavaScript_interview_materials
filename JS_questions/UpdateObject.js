const obj = {
    a:'Prasad',
    b:{
        c: 'Prasad',
        6:{
            d: 'Prasad',
            18:{
                xyz: 'Prasad',
                e:{
                    f:{
                        abc: "Prasad"
                    }
                }
            }
        }
    }
 }
 
 
 function updateObj(obj) {
  const keys = Object.keys(obj);
  for(let i=0; i< keys.length; i++) {
    if(typeof obj[keys[i]] === 'object') {
      updateObj(obj[keys[i]]);
    }
    if(obj[keys[i]] === 'Prasad') {
      obj[keys[i]] = 'Ravi';
    }
  }
 }
 
 
 updateObj(obj);
 console.log(JSON.stringify(obj));

 