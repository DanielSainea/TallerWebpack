import './sass/app.scss';

import menu from './components/menu.js';
import header from './components/header.js';
import footer from './components/footer.js';

import inicioPage from './pages/inicioPage.js';


 const routesPages = (namePage) => {
    const content = document.getElementById('content-page');
    content.innerHTML = '';
    switch (namePage) {
        
        default: //'Responsive' | 'defaul'
            content.appendChild(inicioPage());
            break;
    }
  
}


const page = document.getElementById('page');
//page.classList.add('principal');
page.appendChild(header());
page.appendChild(menu((namePage) => {
    routesPages(namePage)
}));

const contentPage = document.createElement('main');
contentPage.setAttribute('id', 'content-page');
page.appendChild(contentPage);
routesPages('default');

page.appendChild(footer());

