// Chiedi all’utente il suo nome
const firstName = prompt('Come ti chiami ?');

// poi chiedi il suo cognome
const lastName = prompt('Qual è il tuo cognome ? ');

// poi chiedi il suo colore preferito
const color = prompt('Qual è il tuo colore preferito ? ');

// poi chiedi l'età
const age = Number(prompt('Quanti anni hai ?'));

// Infine scrivi sulla pagina nomecognomecolorepreferito22
document.getElementById("password").innerHTML = firstName + lastName + color + age;
