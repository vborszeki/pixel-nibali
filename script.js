'use strict';

const nibali = document.querySelector('.nibali');

for (let i = 1; i < 75; i++) {
  setTimeout(() => nibali.appendChild(document.createElement('div')), 50 * i);
}
