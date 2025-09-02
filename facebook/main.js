/**
 * Fonction pour basculer l'affichage d'un menu déroulant avec une animation.
 * @param {string} triggerSelector - Le sélecteur CSS de l'élément qui déclenche le menu.
 * @param {string} menuSelector - Le sélecteur CSS du menu à afficher/cacher.
 */
function toggleDropdown(triggerSelector, menuSelector) {
    const trigger = document.querySelector(triggerSelector);
    const menu = document.querySelector(menuSelector);

    // Vérifie si les éléments existent avant d'ajouter l'écouteur
    if (trigger && menu) {
        trigger.addEventListener('click', () => {
            // Vérifie si le menu est déjà ouvert (si max-height est défini et > 0)
            if (menu.style.maxHeight && menu.style.maxHeight !== "0px") {
                menu.style.maxHeight = "0px";
                menu.style.opacity = "0";
            } else {
                // Ouvre le menu en calculant sa hauteur de contenu
                menu.style.maxHeight = menu.scrollHeight + "px";
                menu.style.opacity = "1";
            }
        });
    } else {
        console.error("L'élément déclencheur ou le menu est introuvable. Vérifiez les sélecteurs.");
    }
}

// Utilisation de la fonction pour votre menu utilisateur
toggleDropdown('.fa-caret-down', '.drop');

// --- Dark Mode Switch ---
const darkModeBtn = document.querySelector('.dark-mode-btn');

darkModeBtn.addEventListener('click', () => {
    // Ajoute la classe 'on' au bouton lui-même
    darkModeBtn.classList.toggle('on');
    // Ajoute la classe 'dark-theme' au body
    document.body.classList.toggle('dark-theme');

    // Sauvegarde le choix de l'utilisateur dans le localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Vérifie le thème sauvegardé au chargement de la page
if (localStorage.getItem('theme') === 'dark') {
    darkModeBtn.classList.add('on');
    document.body.classList.add('dark-theme');
}