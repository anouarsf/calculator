// DOM TOUCHES

const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

// Event in keydown number & convert string
document.addEventListener('keydown', (e) =>
{
    const valeur = e.keyCode.toString();
    calculer(valeur)

})


// Event on click number & convert string
document.addEventListener('click', (e) =>
{
    const valeur = e.target.dataset.key;
    calculer(valeur)
})



// const calculate



const calculer = (valeur) =>
{
    if (listeKeycode.includes(valeur))
    {
        switch (valeur)
        {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeyCode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeyCode];
                ecran.textContent += touche.innerHTML;
        }
    }
}


// error 
window.addEventListener('error', (e) =>
{
    alert('Une erreur est survenue : ' + e.message)
})
