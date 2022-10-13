const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  
        let newStr = ""
        let counter =0
      
       for (let i=0 ; i<str.length; i++) {
          counter ++
          if (str[i]!==str[i+1]) {
              newStr += counter + str[i]
              counter = 0      
          }
      
       }
       let arr=newStr.split("").filter(item=>item!=='1').join('')
       console.log(arr);
       
       
       
       return  arr
      };


module.exports = {
  encodeLine
};
