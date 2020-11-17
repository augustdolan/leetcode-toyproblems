var mirrorReflection = function(p, q) {
  let width = p;
  let height = q;

  while (true) {

  if (height % p === 0 && width % p === 0) {
    if ((height / p) % 2 === 0 && (width / p) % 2 === 1) {
      return 0;
    }
    if ((height / p) % 2 === 1) {
      if ((width / p) % 2 === 1) {
        return 1;
      }
      return 2;
    }
  }

  width += p;
  height += q;
  }
}

console.log(mirrorReflection(2, 1))