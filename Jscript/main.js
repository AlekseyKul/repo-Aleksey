var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];



function findNeedle(haystack) {
    //   let str = 'found the needle at position'
      for(var x = 0; x < haystack.length; x++ ) {
        if (haystack[x] === "needle"){
          Console.log(x);
          
        }
      }
    
    }
// console.log(findNeedle(haystack_2));
    findNeedle(haystack_2);