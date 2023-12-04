<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>ToDoList</title>
</head>
<body>
    <div id="back">
        <canvas id="canvas" class="canvas-back"></canvas>
        <div class="backRight">    
        </div>
        <div class="backLeft">
        </div>
      </div>
     <!-- Conteneur principal pour la boîte de connexion/inscription -->
<div id="slideBox">

    <!-- Couche supérieure qui contient les sections "Sign Up" et "Login" -->
    <div class="topLayer">
  
      <!-- Section "Sign Up" à gauche -->
      <div class="left">
        <div class="content">
          <h2>Sign Up</h2>
  
          <!-- Formulaire d'inscription -->
          <form id="form-signup" method="post" onsubmit="return false;">
  
            <!-- Champ pour l'adresse e-mail -->
            <div class="form-element form-stack">
              <label for="email" class="form-label">Email</label>
              <input id="email" type="email" name="email">
            </div>
  
            <!-- Champ pour le nom d'utilisateur -->
            <div class="form-element form-stack">
              <label for="username-signup" class="form-label">Username</label>
              <input id="username-signup" type="text" name="username">
            </div>
  
            <!-- Champ pour le mot de passe -->
            <div class="form-element form-stack">
              <label for="password-signup" class="form-label">Password</label>
              <input id="password-signup" type="password" name="password">
            </div>
  
            <!-- Case à cocher pour accepter les conditions -->
            <div class="form-element form-checkbox">
              <input id="confirm-terms" type="checkbox" name="confirm" value="yes" class="checkbox">
              <label for="confirm-terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
            </div>
  
            <!-- Boutons de soumission et de basculement vers "Log In" -->
            <div class="form-element form-submit">
              <button id="signUp" class="signup" type="submit" name="signup">Sign up</button>
              <button id="goLeft" class="signup off">Log In</button>
            </div>
  
          </form>
        </div>
      </div>
  
      <!-- Section "Login" à droite -->
      <div class="right">
        <div class="content">
          <h2>Login</h2>
  
          <!-- Formulaire de connexion -->
          <form id="form-login" method="post" onsubmit="return false;">
  
            <!-- Champ pour le nom d'utilisateur -->
            <div class="form-element form-stack">
              <label for="username-login" class="form-label">Username</label>
              <input id="username-login" type="text" name="username">
            </div>
  
            <!-- Champ pour le mot de passe -->
            <div class="form-element form-stack">
              <label for="password-login" class="form-label">Password</label>
              <input id="password-login" type="password" name="password">
            </div>
  
            <!-- Boutons de soumission et de basculement vers "Sign Up" -->
            <div class="form-element form-submit">
              <button id="logIn" class="login" type="submit" name="login">Log In</button>
              <button id="goRight" class="login off" name="signup">Sign Up</button>
            </div>
  
          </form>
        </div>
      </div>
  
    </div>
  </div>
  
</body>
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.0/paper-full.min.js"></script>
<script src="login.js"></script>
</html>