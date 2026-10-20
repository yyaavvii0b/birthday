const wishButton = document.getElementById('wishButton');
if (wishButton) {
  const flame = document.getElementById('flame');
  const result = document.getElementById('wishResult');
  const wishes = [
    'May all the love you give find its way back to you. ♡',
    'Here’s to a year full of tiny joys and big dreams. ✨',
    'May you always remember how wonderfully loved you are. ♥'
  ];
  wishButton.addEventListener('click', () => {
    flame.classList.add('out');
    result.textContent = wishes[Math.floor(Math.random() * wishes.length)];
    wishButton.innerHTML = 'wish sent with love <span>♡</span>';
    wishButton.disabled = true;
    document.querySelector('.wish-page').classList.add('wish-made');
    document.querySelector('.wish-stars').textContent = '✦　 ✧　✦　 ·　 ✧　✦';
    const burst = document.getElementById('sparkleBurst');
    if (burst) {
      const marks = ['✦', '♡', '✧', '·'];
      for (let i = 0; i < 22; i += 1) {
        const spark = document.createElement('span');
        spark.className = 'wish-spark';
        spark.textContent = marks[i % marks.length];
        spark.style.setProperty('--drift-x', `${Math.round(Math.random() * 260 - 130)}px`);
        spark.style.setProperty('--drift-y', `${Math.round(Math.random() * 150 - 100)}px`);
        spark.style.setProperty('--spin', `${Math.round(Math.random() * 260 - 130)}deg`);
        spark.style.setProperty('--delay', `${Math.random() * 220}ms`);
        burst.appendChild(spark);
      }
    }
  });
}

document.querySelectorAll('.memory-photo img, .collage-image img').forEach((image) => {
  image.addEventListener('load', () => image.closest('.memory-photo, .collage-image').classList.add('has-photo'));
  image.addEventListener('error', () => image.hidden = true);
  if (image.complete && image.naturalWidth > 0) image.closest('.memory-photo, .collage-image').classList.add('has-photo');
});
