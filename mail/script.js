const emailPermesse = ["utente1@gmail.com", "utente2@gmail.com", "utente3@gmail.com"];

const controllaEmail = () => {
  const email = document.getElementById("email").value;
  const risultato = document.getElementById("risultato");
  if (emailPermesse.includes(email)) {
    risultato.textContent = "Accesso consentito.";
  } else {
    risultato.textContent = "Accesso negato.";
  }
};

document.getElementById("controlla").addEventListener("click", controllaEmail);
