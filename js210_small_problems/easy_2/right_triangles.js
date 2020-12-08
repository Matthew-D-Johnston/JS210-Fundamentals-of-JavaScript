function triangle(n) {
  for (let stars = 1; stars <= n; stars += 1) {
    let line = ' '.repeat(n - stars) + '*'.repeat(stars);
    console.log(line);
  }
}

triangle(5);
triangle(9);
triangle(10);
triangle(30);