var longestMountain = function(A) {
  let count = 1;
  let maxCount = 0;
  let increasing = true;
  for (let i = 1; i < A.length; i++) {
    if (increasing) {
      if (A[i] > A[i - 1]) {
          count++;
      }
      else if (A[i] < A[i - 1] && count > 1) {
          count++
          increasing = !increasing;
          if (i === A.length - 1) {
            maxCount = Math.max(maxCount, count);
          }
      } else {
          count = 1;
      }
    } else {
      if (A[i] < A[i - 1]) {
          count++;
          if (i === A.length - 1) {
            maxCount = Math.max(maxCount, count);
          }
      } else {
          maxCount = Math.max(maxCount, count);
          increasing = !increasing;
          count = 1;
          if (A[i] > A[i - 1]) {
            count++;
          }
      }
    }
  }

  if (maxCount >= 3) {
    return maxCount;
  } else {
    return 0;
  }
};