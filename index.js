 function convertFahrToCelsius(fahR) { 
      let takenFahr = fahR;   
      if (typeof fahR !== 'number') 
      {     if (typeof fahR === 'string' && !isNaN(Number(fahR)))
       {       takenFahr = Number(fahR);     } 
       else {
             return `${JSON.stringify(fahR)} is not a valid number but a/an 
             ${ Array.isArray(fahR) ? 'array' : typeof fahR}`     }  
             }   const _celsius = (takenFahr - 32) * 5 / 9;
                return _celsius.toFixed(4) } 
                console.log(convertFahrToCelsius(0))
                 console.log(convertFahrToCelsius("0")) 
                 console.log(convertFahrToCelsius([1,2,3]))
console.log(convertFahrToCelsius({temp: 0})) 






function checkYuGiOh(n) {
      if(!Number(n)){
            let value = JSON.stringify(n);
            return 'invalid parameter: "$(value)"'
      }
      else{
            let answer = [];
            for (let i =1; i <=n; i++) {
            if (i % 2 ===0 && i % 4 === 0 && i % 6 === 0){
                  answer.push("yu-gi-oh");
            } else if (i % 2 === 0 && i % 4 === 0) {
              answer.push("yu-gi");
            } else if  (i % 2 === 0 && i % 6 === 0) {
              answer.push("yu-oh");
            } else if (i % 4 === 0 && i % 6 === 0) {
              answer.push("gi-oh");
            } else if (i % 2 === 0) {
              answer.push("yu");
            } else if  (i % 4 === 0) {
              answer.push("gi");
            } else if (i % 6 === 0) {
              answer.push("oh");
            } else {answer.push(i)}

            }
      return answer;
      }
};

console.log(checkYuGiOh(150));
console.log(checkYuGiOh("80"));
console.log(checkYuGiOh("Leonardo"));
console.log(checkYuGiOh([4,8,8,16]));
console.log(checkYuGiOh({name: "David-Daniel", country: "Portugal"}));