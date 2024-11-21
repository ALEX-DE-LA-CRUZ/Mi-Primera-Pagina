const usuarios = [
    {usuario: 'Juan', contrasena: '123456'},
    {usuario: 'maria', contrasena: '22222'},
    {usuario: 'alex', contrasena: '11111'}
];

function InicioSecion() {
    let usu = document.getElementById('usu').value;
    let contra = document.getElementById('contra').value;

    let verifica = !!usuarios.find(e => e.usuario === usu && e.contrasena === contra);
    if (verifica) {
        // Guardar la sesión del usuario en localStorage
        localStorage.setItem('usuarioAutenticado', usu);
        
        alert("Usuario correcto");
        // Redirigir a la página de compras
        
        window.open('../proyecto/paginas/ventas.html');


  // Ajusta la ruta


    } else {
        alert("Usuario o contraseña incorrecto...");
    }
}

// Comprobar si el usuario está autenticado al cargar la página
window.onload = function () {
    let usuarioAutenticado = localStorage.getItem('usuarioAutenticado');
    
    // Habilitar el enlace de compras si el usuario está autenticado
    if (usuarioAutenticado) {
        document.getElementById('comprasLink').classList.remove('disabled-link');
        document.getElementById('comprasLink').classList.add('enabled-link');
    }
};
// Al cargar la página, comprueba si el usuario está autenticado
window.onload = function () {
    let usuarioAutenticado = localStorage.getItem('usuarioAutenticado');
    
    // Habilitar el enlace de compras si el usuario está autenticado
    if (usuarioAutenticado) {
        document.getElementById('comprasLink').classList.remove('disabled-link');
        document.getElementById('comprasLink').classList.add('enabled-link');
    } else {
        document.getElementById('comprasLink').classList.add('disabled-link');
        document.getElementById('comprasLink').classList.remove('enabled-link');
    }

    // Agregar funcionalidad para cerrar sesión
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            // Eliminar el usuario autenticado del localStorage
            localStorage.removeItem('usuarioAutenticado');
            
            // Deshabilitar el enlace de compras
            document.getElementById('comprasLink').classList.add('disabled-link');
            document.getElementById('comprasLink').classList.remove('enabled-link');
            
            // Redirigir al usuario a la página de inicio
            window.location.href='index.html' ;  // O la ruta que corresponda
        });
    }
};

