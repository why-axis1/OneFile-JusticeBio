/* 
Just replace the searchByKeywords function for this one
or even just replace the if statement, the rest is all the same
*/

function searchByKeywords(searchTerm) {
      let searchResults = [];
      searchTerm = searchTerm.toLowerCase();
      for (let i = 0; i < products.length; i++) {
          for (let j = 0; j < products[i].keywords.length; j++) {
              if (products[i].keywords[j].startsWith(searchTerm)) {
                  searchResults.push(products[i]);
                  break;
              }
          }
      }
      return searchResults;
    }
