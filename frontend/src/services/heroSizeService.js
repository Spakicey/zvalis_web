// heroUtils.js
export const setHeroSize = () => {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');

  if (header && footer) {
    const headerRect = header.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();

    const headerHeight = headerRect.height;
    const footerHeight = footerRect.height;

    // Adjusting for dynamic viewport height on mobile
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const fixedHeight = `calc(${viewportHeight}px - (${headerHeight}px + ${footerHeight}px))`;

    const heroContainer = document.querySelector('.hero .container');
    heroContainer.style.height = fixedHeight;
  }
};
