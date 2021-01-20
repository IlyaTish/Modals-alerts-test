/* Variables */

const viewportWidth = window.innerWidth || document.documentElement.clientWidth;



/* Functions */

// Document ready function

const ready = callback => {
  if (document.readyState !== 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
}
