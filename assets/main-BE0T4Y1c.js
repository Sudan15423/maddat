(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`<!-- footer.html\r
<footer class="site-footer">\r
    <div class="container footer-container">\r
        <div class="footer-brand">\r
            <span class="footer-logo">MADDAT</span>\r
            <p>Helping Where Help Is Needed</p>\r
        </div>\r
        <div class="footer-links">\r
            <div>\r
                <h4>Explore</h4>\r
                <ul>\r
                    <li><a href="our-activities.html">Our Activities</a></li>\r
                    <li><a href="index.html#about">About</a></li>\r
                    <li><a href="index.html#contact">Contact</a></li>\r
                </ul>\r
            </div>\r
            <div>\r
                <h4>Legal</h4>\r
                <ul>\r
                    <li><a href="#">Privacy Policy</a></li>\r
                    <li><a href="#">Terms of Use</a></li>\r
                </ul>\r
            </div>\r
        </div>\r
        <div class="footer-copyright">\r
            <p>&copy; 2026 Maddat. All rights reserved. Registered charity.</p>\r
        </div>\r
    </div>\r
</footer> -->\r
\r
\r
\r
\r
<footer class="site-footer">\r
    <div class="container footer-container">\r
        <!-- Left column: Logo & Slogan -->\r
        <div class="footer-column footer-logo-col">\r
            <img src="src/images/logo.webp" alt="Maddat Nepal Logo" class="footer-logo-img">\r
            <p class="footer-slogan">Helping where help is needed</p>\r
        </div>\r
\r
        <!-- Left column: Important pages -->\r
        <div class="footer-column">\r
            <h4>Important pages</h4>\r
            <ul>\r
                <li><a href="#">Donate Now</a></li>\r
                <li><a href="#">Sponsorship</a></li>\r
                <li><a href="#">Subscribe to Maddat News</a></li>\r
                <li><a href="#">Publications & Annual Report</a></li>\r
                <li><a href="index.html#contact">Contact Form</a></li>\r
                <!-- <li><a href="#">Maddat Guest House</a></li> -->\r
                <!-- <li><a href="#">Women's Workshop</a></li> -->\r
            </ul>\r
        </div>\r
\r
        <!-- Right column: Contact info -->\r
        <div class="footer-column">\r
            <h4>Contact</h4>\r
            <address>\r
                <p>MADDAT<br>Böcklinstrasse 27<br>8032 Zürich, Schweiz</p>\r
                <p class="bank-details">IBAN: CH54 0900 0000 8001 9029 5</p>\r
                <p>📞 Phone: <a href="tel:+41225551234">+41 44 262 68 88</a><br>\r
                    📧 E-Mail: <a href="mailto:hello@maddat-relief.org">info@rokpa.org</a></p>\r
            </address>\r
            <div class="social-icons">\r
                <a href="#" aria-label="LinkedIn">in</a>\r
                <a href="#" aria-label="Facebook">f</a>\r
                <a href="#" aria-label="Twitter">𝕏</a>\r
                <a href="#" aria-label="Instagram">📷</a>\r
                <a href="#" aria-label="YouTube">▶</a>\r
            </div>\r
        </div>\r
    </div>\r
    <div class="footer-bottom">\r
        <div class="container">\r
            <p>2026. Helping where help is needed</p>\r
        </div>\r
    </div>\r
</footer>`;document.addEventListener(`DOMContentLoaded`,()=>{let t=document.getElementById(`mobileMenuToggle`),n=document.getElementById(`mainNav`);t&&n&&t.addEventListener(`click`,()=>{let e=t.getAttribute(`aria-expanded`)!==`true`;t.setAttribute(`aria-expanded`,e),n.classList.toggle(`active`),document.body.classList.toggle(`menu-open`)}),document.querySelectorAll(`.dropdown-toggle`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),t.stopPropagation();let n=e.closest(`.dropdown`);window.innerWidth<=768&&n.classList.toggle(`active`)})}),document.querySelectorAll(`.nav-link:not(.dropdown-toggle)`).forEach(e=>{e.addEventListener(`click`,r=>{let i=e.getAttribute(`href`);if(i&&i!==`#`&&(n&&n.classList.contains(`active`)&&(n.classList.remove(`active`),t&&t.setAttribute(`aria-expanded`,`false`),document.body.classList.remove(`menu-open`)),i.startsWith(`#`))){r.preventDefault();let e=document.querySelector(i);if(e){let t=e.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:t,behavior:`smooth`}),history.pushState(null,null,i)}}})}),document.querySelectorAll(`.dropdown-menu a`).forEach(e=>{e.addEventListener(`click`,()=>{n&&n.classList.contains(`active`)&&(n.classList.remove(`active`),t&&t.setAttribute(`aria-expanded`,`false`),document.body.classList.remove(`menu-open`))})}),window.location.hash&&setTimeout(()=>{let e=document.querySelector(window.location.hash);if(e){let t=e.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:t,behavior:`smooth`})}},100);let r=document.getElementById(`footer-container`);r&&(r.innerHTML=e);let i=document.getElementById(`contactForm`);i&&i.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`name`)?.value.trim(),n=document.getElementById(`email`)?.value.trim(),r=document.getElementById(`message`)?.value.trim();t&&n&&r?(alert(`Thank you ${t}! Your message has been received. We'll get back to you soon.`),i.reset()):alert(`Please fill in all required fields.`)});let a=document.querySelectorAll(`section[id]`),o=document.querySelectorAll(`.nav-link`);function s(){let e=``,t=window.scrollY+100;a.forEach(n=>{let r=n.offsetTop,i=n.clientHeight;t>=r&&t<r+i&&(e=n.getAttribute(`id`))}),o.forEach(t=>{t.classList.remove(`active`),t.getAttribute(`href`).substring(1)===e?(t.classList.add(`active`),t.style.color=`var(--light-blue)`):t.style.color=``})}let c=document.querySelectorAll(`.reveal-on-scroll`),l=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),l.unobserve(e.target))})},{threshold:.15});c.forEach(e=>l.observe(e)),[{selector:`.news-grid`,paginationId:`news-pagination`},{selector:`.news-grid-modern`,paginationId:`news-pagination`},{selector:`.projects-grid-compact`,paginationId:`projects-pagination`}].forEach(e=>{let t=document.querySelector(e.selector),n=document.getElementById(e.paginationId);if(!t)return;let r=t.children;if(r.length===0)return;if(n){n.innerHTML=``;for(let e=0;e<r.length;e++){let r=document.createElement(`span`);r.classList.add(`dot`),e===0&&r.classList.add(`active`),r.addEventListener(`click`,()=>{let n=parseInt(window.getComputedStyle(t).gap)||0,r=e*(t.firstElementChild.offsetWidth+n);t.scrollTo({left:r,behavior:`smooth`})}),n.appendChild(r)}}let i=n?n.querySelectorAll(`.dot`):[],a=!1;t.addEventListener(`scroll`,()=>{if(window.innerWidth>768||i.length===0)return;let e=parseInt(window.getComputedStyle(t).gap)||0,n=t.firstElementChild.offsetWidth+e,r=Math.round(t.scrollLeft/n);i.forEach((e,t)=>e.classList.toggle(`active`,t===r))}),setInterval(()=>{if(window.innerWidth>768||a)return;let e=t.firstElementChild;if(!e)return;let n=parseInt(window.getComputedStyle(t).gap)||0,r=e.offsetWidth+n,i=t.scrollWidth-t.offsetWidth;t.scrollLeft>=i-10?t.scrollTo({left:0,behavior:`smooth`}):t.scrollBy({left:r,behavior:`smooth`})},4e3),t.addEventListener(`touchstart`,()=>a=!0,{passive:!0}),t.addEventListener(`touchend`,()=>setTimeout(()=>a=!1,2e3),{passive:!0}),t.addEventListener(`mouseenter`,()=>a=!0),t.addEventListener(`mouseleave`,()=>a=!1)}),window.addEventListener(`scroll`,s),s()});