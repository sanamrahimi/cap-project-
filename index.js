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

// Generating feature data
const speakerData = [
  {
    name: 'Yoachi Benkler',
    image: 'speaker1.png',
    authorDetail: 'Berkman Professor of Scientific computation Studies at Harvard School',
    authorDescription: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },

  {
    name: 'SohYeong Noh',
    image: 'speaker2.png',
    authorDetail: 'Director of Art Centre Nabi and a board member of CC Korea',
    authorDescription: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },

  {
    name: 'Kilnam Chon',
    image: 'speaker3.png',
    authorDetail: 'Director of Art Centre Nabi and a board member of CC Korea',
    authorDescription: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },

  {
    name: 'SohYeong Noh',
    image: 'speaker2.png',
    authorDetail: 'Director of Art Centre Nabi and a board member of CC Korea',
    authorDescription: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },

  {
    name: 'Julia Leda',
    image: 'speaker1.png',
    authorDetail: 'President of Young Pirates of Europe',
    authorDescription: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },

  {
    name: 'Lila tretikov',
    image: 'speaker2.png',
    authorDetail: 'Executive Director of the Wikimedia Foundation',
    authorDescription: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
];

// Adding Features to the feature speaker
const addFt = () => {
  const featureContainer = document.querySelector('.feature-speakers');
  const featureUl = document.createElement('ul');
  let i = 1;
  speakerData.forEach((el) => {
    // fUl.classList.add();
    const fLi = document.createElement('li');
    fLi.classList.add('ft');
    if (i > 2) {
      fLi.classList.add('desktopShow');
    }
    fLi.innerHTML = `
            <div class="left">
                <div class="feature_img"><img src="img/${el.image}" alt=""></div>
            </div>

            <div class="right">
                <div class="author_name">
                    <h4 class="mrb5">${el.name}</h4>
                </div>
                <div class="ah-detail">
                    <p class="mrt0"> ${el.authorDetail}
                    </p>
                </div>
                <div class="ft-description">
                    <p> ${el.authorDescription}</p>
                </div>
            </div>`;
    featureUl.appendChild(fLi);
    i += 1;
  });
  featureContainer.appendChild(featureUl);
};
window.addEventListener('load', addFt);