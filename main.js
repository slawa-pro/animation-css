const squares = document.querySelectorAll('.square');
const startScroll = 750;
const endScroll = 1000;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  console.log('пикселей =', scrollY);

  if (scrollY >= startScroll && scrollY <= endScroll) {
    const progress = (scrollY - startScroll) / (endScroll - startScroll);

    squares.forEach((square, index) => {
      const start = index * 0.33;
      const end = (index + 1) * 0.33;

      if (progress >= start && progress <= end) {
        const rotation = (progress - start) * 3 * 180;
        square.style.transform = `rotate(${rotation}deg)`;
      } else if (progress > end) {
        square.style.transform = 'rotate(360deg)';
      }
    });
  } else {

    squares.forEach(square => {
      square.style.transform = 'rotate(0deg)';
    });
  }
});