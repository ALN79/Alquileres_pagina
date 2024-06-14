document.addEventListener('DOMContentLoaded', (event) => {
    // Funciones para establecer, obtener y borrar cookies
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        document.cookie = name + '=; Max-Age=-99999999;';  
    }

    // Mostrar el banner de cookies si no se ha aceptado o rechazado
    if (!getCookie('cookiesAccepted')) {
        document.getElementById('cookie-banner').style.display = 'flex';
    }

    // Evento de aceptación de cookies
    document.getElementById('accept-cookies').addEventListener('click', () => {
        setCookie('cookiesAccepted', 'true', 365);
        document.getElementById('cookie-banner').style.display = 'none';
    });

    // Evento de rechazo de cookies
    document.getElementById('reject-cookies').addEventListener('click', () => {
        setCookie('cookiesAccepted', 'false', 365);
        document.getElementById('cookie-banner').style.display = 'none';
        // Opcional: Elimina cookies existentes si el usuario las rechaza
        // eraseCookie('someCookieName');
    });
});
