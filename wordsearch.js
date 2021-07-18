const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
     console.log(horizontalJoin)
    for (l of horizontalJoin) {
        if (l.includes(word)){
  
        return true;
        } else{
          let k =0;
          let wordExist = "";
          let arrayWord = [];
          for (let i = 0;  i < letters.length; i++) {
            for ( let j =0; j <letters[i].length; j++) {           
            wordExist = wordExist + letters[i][k];            
            }
            k=k+1;
          }
          arrayWord.push(word)
          for (l of arrayWord) {
            if (l.includes(word)){
              return true;
            }
          return false; 
          }
        }
      }
  }

module.exports = wordSearch
