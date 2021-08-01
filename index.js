const bgImg = document.querySelectorAll(".item");

bgImg.forEach((bg) => {
  bg.addEventListener("click", () => {
    removeBg();
    bg.classList.add("bgClick");
  });
});

function removeBg() {
  bgImg.forEach((bg) => {
    bg.classList.remove("bgClick");
  });
}

function randomNum() {
  const comp = Math.random();
  if (comp < 0.33) return "batu";
  if (comp >= 0.33 && comp < 0.66) return "kertas";
  return "gunting";
}

function result(player, comp) {
  if (player == comp) return "DRAW";
  if (player == "batu") return comp == "kertas" ? "COM WIN" : "PLAYER 1 WIN";
  if (player == "kertas") return comp == "gunting" ? "COM WIN" : "PLAYER 1 WIN";
  if (player == "gunting") return comp == "batu" ? "COM WIN" : "PLAYER 1 WIN";
}

class Games {
  constructor() {
    this.batu = document.querySelector(".item .batu");
    this.kertas = document.querySelector(".item .kertas");
    this.gunting = document.querySelector(".item .gunting");
  }
  firstOption() {
    this.batu.addEventListener("click", () => {
      const player = this.batu.className;
      const comp = randomNum();
      const finalResult = result(player, comp);
      console.log("player : ", player);
      console.log("comp : ", comp);
      console.log(finalResult);

      setTimeout(() => {
        const compRandom = document.querySelectorAll(".img-comp");
        let random = Math.floor(Math.random() * compRandom.length);
        let hasil = compRandom[random];
        console.log(hasil);
        if (hasil) {
          hasil.classList.add("bgClick");
        }
        this.batu.addEventListener("click", () => {
          setTimeout(() => {
            if (hasil.classList.contains("bgClick")) {
              hasil.classList.remove("bgClick");
            }
          }, 100);
        });
        const result = document.querySelector(".result");
        const newFinalResult = document.createElement("p");
        setTimeout(() => {
          newFinalResult.classList.add("final-result");
          newFinalResult.innerHTML = finalResult;
          result.append(newFinalResult);
        }, 200);
      }, 1000);
    });
  }
}
class Batu extends Games {
  constructor(batu) {
    super(batu);
  }
  firstOption() {
    super.firstOption();
  }
}

const firstGame = new Batu();
firstGame.firstOption();
