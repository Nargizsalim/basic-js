const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let newArr = [];
  let dreamTeam = "";

  if (Array.isArray(members) == false) {
    return false
  }

 let arr2 = members.filter(member=> typeof member =='string')
 if (arr2.length === 0)
  return false;

  for (let i = 0; i < arr2.length; i++) {   

    let names = arr2[i];
    if (typeof names === "string") {
      let str = names.trim().toUpperCase();
      newArr.push(str[0]);
    }
  }
  dreamTeam = newArr.sort().join("");

  return dreamTeam;
}


module.exports = {
  createDreamTeam
};
