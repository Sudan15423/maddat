(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`<!-- footer.html -->\r
<footer class="site-footer">\r
    <div class="container footer-container">\r
        <div class="footer-brand">\r
            <span class="footer-logo">MADDAT</span>\r
            <p>Swiss relief organization — helping where help is needed since 2014.</p>\r
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
            <p>&copy; 2026 Maddat. All rights reserved. Registered charity </p>\r
        </div>\r
    </div>\r
</footer>`;document.addEventListener(`DOMContentLoaded`,()=>{let t=document.getElementById(`mobileMenuToggle`),n=document.getElementById(`mainNav`);t&&n&&t.addEventListener(`click`,()=>{let e=t.getAttribute(`aria-expanded`)!==`true`;t.setAttribute(`aria-expanded`,e),n.classList.toggle(`active`),document.body.classList.toggle(`menu-open`)}),document.querySelectorAll(`.dropdown-toggle`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),t.stopPropagation();let n=e.closest(`.dropdown`);window.innerWidth<=768&&n.classList.toggle(`active`)})}),document.querySelectorAll(`.nav-link:not(.dropdown-toggle)`).forEach(e=>{e.addEventListener(`click`,r=>{let i=e.getAttribute(`href`);if(i&&i!==`#`&&(n&&n.classList.contains(`active`)&&(n.classList.remove(`active`),t&&t.setAttribute(`aria-expanded`,`false`),document.body.classList.remove(`menu-open`)),i.startsWith(`#`))){r.preventDefault();let e=document.querySelector(i);if(e){let t=e.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:t,behavior:`smooth`}),history.pushState(null,null,i)}}})}),document.querySelectorAll(`.dropdown-menu a`).forEach(e=>{e.addEventListener(`click`,()=>{n&&n.classList.contains(`active`)&&(n.classList.remove(`active`),t&&t.setAttribute(`aria-expanded`,`false`),document.body.classList.remove(`menu-open`))})}),window.location.hash&&setTimeout(()=>{let e=document.querySelector(window.location.hash);if(e){let t=e.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:t,behavior:`smooth`})}},100);let r=document.getElementById(`footer-container`);r&&(r.innerHTML=e);let i=document.getElementById(`contactForm`);i&&i.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`name`)?.value.trim(),n=document.getElementById(`email`)?.value.trim(),r=document.getElementById(`message`)?.value.trim();t&&n&&r?(alert(`Thank you ${t}! Your message has been received. We'll get back to you soon.`),i.reset()):alert(`Please fill in all required fields.`)});let a=document.querySelectorAll(`section[id]`),o=document.querySelectorAll(`.nav-link`);function s(){let e=``,t=window.scrollY+100;a.forEach(n=>{let r=n.offsetTop,i=n.clientHeight;t>=r&&t<r+i&&(e=n.getAttribute(`id`))}),o.forEach(t=>{t.classList.remove(`active`),t.getAttribute(`href`).substring(1)===e?(t.classList.add(`active`),t.style.color=`var(--light-blue)`):t.style.color=``})}window.addEventListener(`scroll`,s),s();let c=document.querySelectorAll(`.reveal-on-scroll`),l=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),l.unobserve(e.target))})},{threshold:.15});c.forEach(e=>l.observe(e))});