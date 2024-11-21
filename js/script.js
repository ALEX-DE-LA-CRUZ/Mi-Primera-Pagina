const content = document.querySelector('.content-login'); 
const loginLink = document.querySelector('.login-link'); 
const registerLink = document.querySelector('.register-link'); 
const btnLogin = document.querySelector('.btnLogin'); 
const iconCloses = document.querySelectorAll('.icon-close'); // Todos los iconos de cierre

// Mostrar el formulario de registro
registerLink.addEventListener('click', () => {
    console.log('Registro clickeado'); // Depuración
    content.classList.add('active');
    content.classList.remove('active-login');
});

// Mostrar el formulario de login
loginLink.addEventListener('click', () => {
    console.log('Login clickeado'); // Depuración
    content.classList.add('active-login');
    content.classList.remove('active');
});

// Mostrar el contenedor de login al hacer clic en el botón de login
btnLogin.addEventListener('click', () => {
    console.log('Botón login clickeado'); // Depuración
    content.classList.add('active-login');
});

// Cerrar el formulario
iconCloses.forEach(iconClose => {
    iconClose.addEventListener('click', () => {
        console.log('Ícono de cierre clickeado'); // Depuración
        content.classList.remove('active');
        content.classList.remove('active-login');
    });
});