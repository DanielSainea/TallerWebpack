import './sass/app.scss';

import menu from './components/menu.js';
import header from './components/header.js';
import footer from './components/footer.js';

import inicioPage from './pages/inicioPage.js';


const tasas = {
    USD: { USD: 1, EUR: 0.9, COP: 4000 },
    EUR: { USD: 1.1, EUR: 1, COP: 4500 },
    COP: { USD: 0.00025, EUR: 0.00022, COP: 1 }
};

const routesPages = (namePage) => {
    const content = document.getElementById('content-page');
    content.innerHTML = '';
    switch (namePage) {
        default:
            content.appendChild(inicioPage(tasas));
            break;
    }
}

const page = document.getElementById('page');
//page.classList.add('principal');
page.appendChild(header());

page.appendChild(menu((namePage) => {
    routesPages(namePage)
}, tasas));

const contentPage = document.createElement('main');
contentPage.setAttribute('id', 'content-page');
page.appendChild(contentPage);
routesPages('default');

page.appendChild(footer());
