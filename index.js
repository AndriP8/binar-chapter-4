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
    this.gunting = document.querySelector(".item .gunting");
    this.kertas = document.querySelector(".item .kertas");
  }

  draw() {
    const draw = document.querySelectorAll(".results");
    let index = draw.length - 1;
    if (draw[index].textContent === "DRAW") {
      draw[index].classList.add("draw");
    }
  }

  logMatch() {
    const draw = document.querySelectorAll(".results");
    let index = draw.length - 1;
    console.log(`Hasil pertandingan : ${draw[index].textContent}`);
  }
}

class FirstItem extends Games {
  constructor(batu, gunting, kertas) {
    super(batu, gunting, kertas);
  }

  infinity() {
    let imgComp = document.querySelector(".com .batu");
    const itemComp = ["batu", "kertas", "gunting"];
    let index = 0;
    const startTime = new Date().getTime();
    setInterval(() => {
      if (new Date().getTime() - startTime > 1000) {
        clearInterval;
        return;
      }

      imgComp.setAttribute("src", `assets/${itemComp[index++]}.png`);
      if (index == itemComp.length) {
        return (index = 0);
      }
    }, 100);
  }

  firstPick() {
    this.batu.addEventListener("click", () => {
      const firstGame = () => {
        const player = this.batu.className;
        const comp = randomNum();
        const finalResult = result(player, comp);
        console.log(`Item yang di pilih Player : ${player}`);
        this.infinity();

        setTimeout(() => {
          const imgCompRandom = document.querySelector(".com .batu");
          imgCompRandom.setAttribute("src", `assets/${comp}.png`);
          const referee = document.querySelector(".referee");
          const newResult = document.createElement("p");
          newResult.classList.add("results");
          newResult.innerHTML = finalResult;
          referee.append(newResult);
          super.draw();
          super.logMatch();
        }, 1000);
      };
      firstGame();
    });
  }
}
const firstPick = new FirstItem();
firstPick.firstPick();
