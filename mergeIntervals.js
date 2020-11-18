var merge = function(intervals) {
  const quicksort = (arr) => {

    if (arr < 2) {
      return arr;
    }
    let middle = [ arr.pop() ];
    let lessThanArr = [];
    let greaterThanArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] < middle[0][0]) {
        lessThanArr.push(arr[i]);
      } else if (arr[i][0] > middle[0][0]) {
        greaterThanArr.push(arr[i]);
      } else {
        middle.push(arr[i]);
      }
    }

    return quicksort(lessThanArr).concat(middle, quicksort(greaterThanArr));
  }

  intervals = quicksort(intervals);
  let mergedIntervals = [ intervals[0] ];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= mergedIntervals[mergedIntervals.length - 1][1]) {
      mergedIntervals[mergedIntervals.length - 1] = [mergedIntervals[mergedIntervals.length - 1][0], Math.max(intervals[i][1], mergedIntervals[mergedIntervals.length - 1][1])]
    } else {
      mergedIntervals.push(intervals[i]);
    }
  }

  return mergedIntervals;
};