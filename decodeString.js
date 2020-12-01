var decodeString = function(s) {
    let expandedArr = [];
    const recursion = (string, iterations = 1) => {
      for (let i = 0; i < iterations; i++) {
        for (let j = 0; j < string.length; j++) {
          if (!Number.isNaN(parseInt(string[j]))) {
            let newIterations = string[j];
            let bracketDepth = 1
            let subArray = [];
            j += 2;
            while (bracketDepth > 0) {
              if (string[j] === ']') {
                bracketDepth--;
                if (bracketDepth === 0) {
                  break;
                }
              }

              if (string[j] === '[') {
                bracketDepth++;
              }
              subArray.push(string[j]);
              j++
            }
            recursion(subArray.join(''), newIterations);
          } else {
            expandedArr.push(string[j]);
          }
        }
      }
    }
  recursion(s);
  return expandedArr.join('');
};

console.log(decodeString("100[leetcode]"))