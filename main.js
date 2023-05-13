// Accordion
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const heading = item.querySelector('.accordion-heading');
  const content = item.querySelector('.accordion-content');
  const icon = item.querySelector('.accordion-icon');

  heading.addEventListener('click', () => {
    console.log('click');
    content.classList.toggle('active');
    icon.classList.toggle('active');
  });
});

// Mobiel-Nav

const burger = document.querySelector('.burger');
const nav = document.querySelector('.mobile-nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
