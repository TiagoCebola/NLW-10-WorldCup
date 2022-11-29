function createGame(player1, hourResult, player2) {
  return `<li>
              <img src="./assets/icon-${player1}.svg" style="width:50px; height:51px;" alt="Bandeira ${player1}" />
              <strong>${hourResult}</strong>
              <img src="./assets/icon-${player2}.svg" style="width:50px; height:51px;" alt="Bandeira ${player2}" />
            </li>`
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `<div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>`
}

document.querySelector("#app").innerHTML = ` <header>
        <img src="./assets/logo.svg" alt="Logo da nlw" />
      </header>
      <main id="cards">
        ${createCard(
          "30/11",
          "quarta",
          createGame("tunisia", "15:00", "france") +
            createGame("australia", "15:00", "denmark") +
            createGame("poland", "19:00", "argentina") +
            createGame("saudi arabia", "19:00", "mexico")
        )}
        ${createCard(
          "1/12",
          "quinta",
          createGame("croatia", "15:00", "belgium") +
            createGame("canada", "15:00", "marocco") +
            createGame("japan", "19:00", "spain") +
            createGame("costa rica", "19:00", "germany")
        )}
        ${createCard(
          "2/12",
          "sexta",
          createGame("south korea", "15:00", "portugal") +
            createGame("ghana", "15:00", "uruguay") +
            createGame("serbia", "19:00", "switzerland") +
            createGame("cameroon", "19:00", "brazil")
        )}
        ${createCard(
          "20/11",
          "domingo",
          createGame("qatar", "0 - 2", "ecuador")
        )}
        ${createCard(
          "21/11",
          "segunda",
          createGame("england", "6 - 2", "iran") +
            createGame("senegal", "0 - 2", "netherlands") +
            createGame("usa", "1 - 1", "wales")
        )}
        ${createCard(
          "22/11",
          "terça",
          createGame("argentina", "1 - 2", "saudi arabia") +
            createGame("denmark", "0 - 0", "tunisia") +
            createGame("mexico", "0 - 0", "poland") +
            createGame("france", "4 - 1", "australia")
        )}
        ${createCard(
          "23/11",
          "quarta",
          createGame("marocco", "0 - 0", "croatia") +
            createGame("germany", "1 - 2", "japan") +
            createGame("spain", "7 - 0", "costa rica") +
            createGame("belgium", "1 - 0", "canada")
        )}
        ${createCard(
          "24/11",
          "quinta",
          createGame("switzerland", "1 - 0", "cameroon") +
            createGame("uruguay", "0 - 0", "south korea") +
            createGame("portugal", "3 - 2", "ghana") +
            createGame("brazil", "2 - 0", "serbia")
        )}
        ${createCard(
          "25/11",
          "sexta",
          createGame("wales", "0 - 2", "iran") +
            createGame("qatar", "1 - 3", "senegal") +
            createGame("netherlands", "1 - 1", "ecuador") +
            createGame("england", "0 - 0", "usa")
        )}
        ${createCard(
          "26/11",
          "sabado",
          createGame("tunisia", "0 - 1", "australia") +
            createGame("poland", "2 - 0", "saudi arabia") +
            createGame("france", "2 - 1", "denmark") +
            createGame("argentina", "2 - 0", "mexico")
        )}
        ${createCard(
          "27/11",
          "domingo",
          createGame("japan", "0 - 1", "costa rica") +
            createGame("belgium", "0 - 2", "marocco") +
            createGame("croatia", "4 - 1", "canada") +
            createGame("spain", "1 - 1", "germany")
        )}
        ${createCard(
          "28/11",
          "segunda",
          createGame("cameroon", "3 - 3", "serbia") +
            createGame("south korea", "2 - 3", "ghana") +
            createGame("brazil", "1 - 0", "switzerland") +
            createGame("portugal", "2 - 0", "uruguay")
        )}
        ${createCard(
          "29/11",
          "terça",
          createGame("ecuador", "1 - 2", "senegal") +
            createGame("netherlands", "2 - 0", "qatar") +
            createGame("iran", "0 - 1", "usa") +
            createGame("wales", "0 - 3", "england")
        )}
      </main>`
