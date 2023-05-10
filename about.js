const mobMenu = document.querySelector('.mobile-menu-img');

const cancelClickHandle = () => {
  const mobileNav = document.querySelector('.nav-bar');
  const mobileNavChild = document.querySelector('.mobileNavBg');
  document.querySelector('#cancel').addEventListener('click', () => {
    mobileNav.removeChild(mobileNavChild);
    mobMenu.classList.remove('dNone');
  });
};

mobMenu.addEventListener('click', () => {
  const mobileNav = document.querySelector('.nav-bar');
  const mobileNavContainer = document.createElement('div');
  mobileNavContainer.classList.add('mobileNavBg');
  mobileNavContainer.innerHTML = `
        <div class="cancelIcon"> <img id='cancel' src="img/cancel.png" alt=""> </div>
        <nav>
            <ul>
                <li class="lsNone"> <a href="about.html">About</a></li> 
                <li class="lsNone">Program</li>
                <li class="lsNone">join</li>
                <li class="lsNone">Sponsor</li>
                <li class="lsNone">news</li>
                <li class="lsNone">Compain</li>
            </ul>
        </nav>
  `;
  mobMenu.classList.add('dNone');
  mobileNav.appendChild(mobileNavContainer);
  cancelClickHandle();
});