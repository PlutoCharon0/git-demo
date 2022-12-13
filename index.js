const slideList = document.querySelectorAll('.slide');
slideList.forEach((value, index) => {
  let picIndex = index + 1;
 value.style.background='url(./images/0'+picIndex+'.avif) center no-repeat'
})
slideList.forEach((value) => {
  value.addEventListener('click', () => {
    slideList.forEach(item => item.classList.remove('active'));
    value.classList.add('active');
  })
})
