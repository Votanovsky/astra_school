let faq_paddings = {
    lg: "35px",
    md: "20px",
    sm: "15px"
}

let padding;
if (window.innerWidth > breakpoint_lg_min) {
    padding = faq_paddings['lg'];
}
else if (window.innerWidth > breakpoint_sm_min) {
    padding = faq_paddings['md'];
}
else {
    padding = faq_paddings['sm'];
}

let faq = document.querySelector('.faq_accordeon');
if (faq) {
    faq.querySelector('.it-active .cont').style.height = 'auto';
    faq.querySelector('.it-active .cont').style.padding = padding;
    let faq_items = faq.querySelectorAll('.it');
    let active = 0;

    for (let [key, it] of faq_items.entries()) {
        it.addEventListener('click', () => {
            if (active >= 0) {
                faq_items[active].classList.remove('it-active');
                gsap.to(faq_items[active].querySelector('.cont'), {height: 0, paddingTop: 0, paddingBottom: 0, duration: .5, ease: "power2.inOut"});
            }
            if (key !== active) {
                it.classList.add('it-active');
                gsap.to(it.querySelector('.cont'), {height: 'auto', paddingTop: padding, paddingBottom: padding, duration: .5, ease: "power2.inOut"});
                active = key;
            }
            else active = -1;
        })
    }
}

let accordeon = document.querySelector('.accordeon');
if (accordeon) {
    let items = accordeon.querySelectorAll('.accordeon_it');
    let active = -1;

    for (let [key, it] of items.entries()) {
        it.addEventListener('click', () => {
            if (active >= 0) {
                items[active].classList.remove('accordeon_it-active');
                gsap.to(items[active].querySelector('.cont'), {height: 0, paddingBottom: '0px', duration: .5, ease: "power2.inOut"});
                gsap.to(items[active].querySelector('.r span:nth-child(2)'), {width: '22px', left: 0, duration: .3, ease: "power2.inOut"});
            }
            if (key !== active) {
                it.classList.add('accordeon_it-active');
                gsap.to(it.querySelector('.cont'), {height: 'auto', paddingBottom: '35px', duration: .5, ease: "power2.inOut"});
                gsap.to(it.querySelector('.r span:nth-child(2)'), {width: 0, left: '10px', duration: .3, ease: "power2.inOut"});
                active = key;
            }
            else active = -1;
        })
    }
}