 //console.log("1. Вёрстка валидная +10\n2. Вёрстка семантическая +20\n\tВ коде странице присутствуют следующие элементы (указано минимальное количество, может быть больше):\n\t<header>, <main>, <footer> +2\n\tшесть элементов <section> (по количеству секций) +2\n\tтолько один заголовок <h1> +2\n\tпять заголовков <h2> (количество секций минус одна, у которой заголовок <h1>) +2\n\tодин элемент <nav> (панель навигации) +2\n\tдва списка ul > li > a (панель навигации, ссылки на соцсети) +2\n\tдесять кнопок <button> +2\n\tдва инпута: <input type=\"email\"> и <input type=\"tel\"> +2\n\tодин элемент <textarea> +2\n\tтри атрибута placeholder +2\n3. Вёрстка соответствует макету +48\n\tблок <header> +6\n\tсекция hero +6\n\tсекция skills +6\n\tсекция portfolio +6\n\tсекция video +6\n\tсекция price +6\n\tсекция contacts +6\n\tблок <footer> +6\n4. Требования к css + 12\n\tдля построения сетки используются флексы или гриды +2(флексы)\n\tпри уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n\tфонвый цвет тянется на всю ширину страницы +2\n\tиконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2\n\tизображения добавлены в формате .jpg +2\n\tесть favicon +2\n5. Интерактивность, реализуемая через css +20\n\tплавная прокрутка по якорям +5\n\tссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5\n\tинтерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5\n\tобязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5\nИТОГО: 110");
 console.log("1. Вёрстка соответствует макету. Ширина экрана 768px +48\n\t*блок <header> +\n\t*секция hero +6\n\t*секция skills +6\n\t*секция portfolio +6\n\t*секция video +6\n\t*секция price +6\n\t*секция contacts +6\n\t*блок <footer> +6\n2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n\t*нет полосы прокрутки при ширине страницы от 1440рх до 768рх +5\n\t*нет полосы прокрутки при ширине страницы от 768рх до 480рх +5\n\t*нет полосы прокрутки при ширине страницы от 480рх до 320рх +5\n3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22\n\t*при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2\n\t*при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4\n\t*высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4\n\t*при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4\n\t*бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2\n\t*ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2\n\t*при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4\nИТОГО: 85"); 

 //меню бургер
const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_body');
if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

const menuLinks = document.querySelectorAll('.menu_link');
if(menuLinks.length>0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", function(e){
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
        })
    })
}


//галерея в портфолио
const portfolioImages = document.querySelectorAll('.portfolio-img');
const portfolioBtns = document.querySelectorAll('.portfolio-btn');

portfolioBtns.forEach(btn =>{
    btn.addEventListener("click", function(e){
        portfolioBtns.forEach(button =>{
            button.classList.remove("active");
        })
        btn.classList.toggle("active");
        portfolioImages.forEach((img, index) => img.src = `assets/${btn.dataset.season}/${index + 1}.jpg`);
    })
})

const seasons = ['winter', 'spring', 'summer', 'autumn']; //кеширование
seasons.forEach((season,i)=>{
    const img = new Image();
    img.src = `./assets/${season}/${i+1}.jpg`;
})


//перевод
import i18Obj from './translate.js';
const languageSwitcher = document.querySelectorAll('.language');
console.log(languageSwitcher);
let activeLang = localStorage.getItem('lang')?localStorage.getItem('lang'):'EN';

getTranslate(activeLang);
languageSwitcher.forEach(language =>{
    languageSwitcher.forEach(lang =>{
        lang.classList.remove("active");
    })
    language.classList.toggle("active");
})

languageSwitcher.forEach(language =>{
    language.addEventListener("click", function(e){
        languageSwitcher.forEach(lang =>{
            lang.classList.remove("active");
        })
        language.classList.toggle("active");
        localStorage.setItem('lang', language.textContent);
        getTranslate(language.textContent);
    })
})

function getTranslate(lang){
    let needToTranslate = document.querySelectorAll('[data-i18]');
    needToTranslate.forEach(element => {
        
        if(Object.hasOwn(i18Obj[lang], element.dataset.i18)){
            if (element.placeholder) {
                element.placeholder = i18Obj[lang][element.dataset.i18];
                element.textContent = '';
              }
            else
            element.textContent = i18Obj[lang][element.dataset.i18];
        }
        
    })
}


//тема
const lightElements = document.querySelectorAll('.theme');  //список элементов, которым необходимо добавлять .light-theme
const svg = document.getElementById('theme-svg');
const themeBtn = document.getElementById('theme-icon');
let theme;

if (localStorage.getItem('theme')){
    switch(localStorage.getItem('theme')){
        case 'sun':
            deleteLightClass(lightElements)
            break;
        case 'moon':
            addLightClass(lightElements)
            break;
    }
}

theme = document.querySelectorAll('.light-theme').length>0?'moon':'sun';

// продолжение про тему
themeBtn.addEventListener("click", function(e){
    theme==='moon'?deleteLightClass(lightElements):addLightClass(lightElements);
})

function deleteLightClass (List){
    console.log(List[0]);
    List.forEach(element =>{
        console.log(element.classList);
        element.classList.remove('light-theme');
    })
    theme = 'sun';
    localStorage.setItem('theme', 'sun');
    svg.href.baseVal = `sprite.svg#${theme}`;
}
function addLightClass (List){
    List.forEach(element =>{
        element.classList.toggle('light-theme');
    })
    theme = 'moon';
    localStorage.setItem('theme', 'moon');
    svg.href.baseVal = `sprite.svg#${theme}`;
}

