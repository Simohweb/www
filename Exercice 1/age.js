let age = parseInt(prompt('quel est votre age ?'));

switch (true) {
  case (age >= 1 && age <= 17):
    alert("vous êtes mineur");
    break;
  case (age >= 18 && age <= 30):
    alert("Vous avez entre 18 et 30 ans");
    break;
  case (age >= 31 && age <= 60):
    alert("Vous avez entre 31 et 50 ans");
    break;
  case (age > 61):
    alert("prepare toi a mourir");
    break;
  default:
    alert("Erreur ")
    break;
}