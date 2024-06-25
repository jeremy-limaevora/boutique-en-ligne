document.getElementById('inscriptionForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche la soumission du formulaire

  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  if (password!== confirmPassword) {
    alert("Les mots de passe ne correspondent pas.");
    return false;
  }

  // Ici, vous pouvez ajouter le code pour envoyer les données du formulaire à votre serveur
  console.log("Formulaire validé avec succès!");
});