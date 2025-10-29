var pageNav = false;
document.getElementById('current-year').innerText = (new Date()).getFullYear();
$(document).ready(function () {
    router = new appRouter();
    Backbone.history.start();

    /* document.querySelectorAll('.nav-main').forEach((elem) => {
        elem.addEventListener('click', (evt) => {
            const e = evt.target;
            const setActive = () => {
                document.querySelectorAll('.nav-main').forEach((_elem) => {
                    _elem.classList.remove('active');
                });
                document.querySelectorAll('.nav-sub-main').forEach((_elem) => {
                    _elem.classList.remove('active');
                });
                e.classList.add('active');
            };
            if(e.classList.contains('dropdown-item')) {
                const parentElem = e.parentNode.parentNode.parentNode;
                setActive();
                parentElem.querySelector('.dropdown-toggle').classList.add('active')
            } else if(!e.classList.contains('dropdown-toggle')) {
                setActive();
            }
        });
    }); */
    /* document.querySelectorAll('.nav-sub-main').forEach((elem) => {
        elem.addEventListener('click', (evt) => {
            const e = evt.target;
            const setActive = () => {
                document.querySelectorAll('.nav-main').forEach((_elem) => {
                    _elem.classList.remove('active');
                });
                document.querySelectorAll('.nav-sub-main').forEach((_elem) => {
                    _elem.classList.remove('active');
                });
                e.classList.add('active');
            };
            if(e.classList.contains('dropdown-sub-item')) {
                const parentElem = e.parentNode.parentNode.parentNode;
                setActive();
                parentElem.querySelector('.dropdown-sub-toggle').classList.add('active');
                setTimeout(() => {
                    parentElem.parentNode.parentNode.querySelector('.dropdown-toggle').classList.add('active');
                }, 50);
            } else if(!e.classList.contains('dropdown-sub-toggle')) {
                setActive();
            }
        });
    }); */
    /* const dropdown = new bootstrap.Dropdown(document.getElementById('main-navbar'), {
        popperConfig(defaultBsPopperConfig) {
          // const newPopperConfig = {...}
          // use defaultBsPopperConfig if needed...
          // return newPopperConfig
        }
    });
    console.log(dropdown); */
    document.querySelectorAll('.dropdown').forEach(elem => {
        elem.addEventListener('hide.bs.dropdown', evt => {
            document.querySelectorAll('.dropdown-sub-toggle').forEach(elem => {
                elem.classList.remove('show');
                elem.parentNode.querySelector('.dropdown-sub-menu').classList.remove('show');
            });
        });
    });
    document.querySelectorAll('.dropdown-sub-toggle').forEach(elem => {
        elem.addEventListener('click', evt => {
            evt.preventDefault();
            evt.stopPropagation();
            if(elem.classList.contains('show')) {
                elem.classList.remove('show');
                elem.parentNode.querySelector('.dropdown-sub-menu').classList.remove('show');
            } else {
                elem.classList.add('show');
                elem.parentNode.querySelector('.dropdown-sub-menu').classList.add('show');
            }
        });
    });
})