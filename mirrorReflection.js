var mirrorReflection = function(p, q) {
  let width = p;
  let height = q;
  let slope = q / p;
  let firstReceptor;
  let right = false;
  let up = true;

  while (true) {
    if (width === p || width === 0) {
      if (height === 0 && width === p) {
        firstReceptor = 0;
        break;
      }
      if (height === p && width === p) {
        firstReceptor = 1;
        break;
      }
      if (height === p && width === 0) {
        firstReceptor = 2;
        break;
      }
    }


    if (up) {
      height += slope;
    } else {
      height -= slope;
    }

    if (right) {
      width += 1;
    } else {
      width -= 1
    }

    if (height >= p || height <= 0) {
      if (height < 0) {
        height = Math.abs(height);
      } else {
        height = p - (height - p);
        if (height === p) {
          up = !up;
        }
      }
      up = !up;
    }
    if (width >= p || width <= 0) {
      if (width < 0) {
        width = Math.abs(width);
        if (width === p) {
          right = !right;
        }
      } else {
        width = p - (width - p);
      }
      right = !right;
    }
  }

  return firstReceptor
};

console.log(mirrorReflection(2, 1))