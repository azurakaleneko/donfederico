
function addUser() {
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
   
      localStorage.setItem("JUGADOR MU3RT0 1", player1_name);
      localStorage.setItem("JUGADOR AS3S1N0", player2_name);
   
      window.location = "game_page.html";
}