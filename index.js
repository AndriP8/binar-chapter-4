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

const infinity = () => {
  let ImgComp = document.querySelector(".com .batu");
  const itemComp = ["batu", "kertas", "gunting"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    ImgComp.setAttribute("src", `assets/${itemComp[i++]}.png`);
    if (i == itemComp.length) {
      return (i = 0);
    }
  }, 100);
};

const firstPick = document.querySelector(".item .batu");
firstPick.addEventListener("click", () => {
  function firstGame() {
    const player = firstPick.className;
    const comp = randomNum();
    const hasil = result(player, comp);
    console.log(`Item yang di pilih Player : ${player}`);
    infinity();

    setTimeout(function () {
      const imgComp = document.querySelector(".com .batu");
      imgComp.setAttribute("src", `assets/${comp}.png`);
      const referee = document.querySelector(".referee");
      const hasilAkhir = document.createElement("p");
      hasilAkhir.classList.add("results");
      hasilAkhir.innerHTML = hasil;
      referee.append(hasilAkhir);

      draw();
      logMatch();
    }, 1000);
  }
  firstGame();
});

const secondInfinity = () => {
  let ImgComp = document.querySelector(".com .kertas");
  const itemComp = ["batu", "kertas", "gunting"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    ImgComp.setAttribute("src", `assets/${itemComp[i++]}.png`);
    if (i == itemComp.length) {
      return (i = 0);
    }
  }, 100);
};

const secondPick = document.querySelector(".item .kertas");
secondPick.addEventListener("click", () => {
  function secondGame() {
    const player = secondPick.className;
    const comp = randomNum();
    const hasil = result(player, comp);
    console.log(`Item yang di pilih Player : ${player}`);

    secondInfinity();

    setTimeout(function () {
      const imgComp = document.querySelector(".com .kertas");
      imgComp.setAttribute("src", `assets/${comp}.png`);
      const referee = document.querySelector(".referee");
      const hasilAkhir = document.createElement("p");
      hasilAkhir.classList.add("results");
      hasilAkhir.innerHTML = hasil;
      referee.append(hasilAkhir);
      draw();
      logMatch();
    }, 1000);
  }
  secondGame();
});

const thirdInfinity = () => {
  let ImgComp = document.querySelector(".com .gunting");
  const itemComp = ["batu", "kertas", "gunting"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    ImgComp.setAttribute("src", `assets/${itemComp[i++]}.png`);
    if (i == itemComp.length) {
      return (i = 0);
    }
  }, 100);
};

const thirdPick = document.querySelector(".item .gunting");
thirdPick.addEventListener("click", () => {
  function secondGame() {
    const player = thirdPick.className;
    console.log(`Item yang di pilih Player : ${player}`);
    const comp = randomNum();
    const hasil = result(player, comp);

    thirdInfinity();

    setTimeout(function () {
      const imgComp = document.querySelector(".com .gunting");
      imgComp.setAttribute("src", `assets/${comp}.png`);
      const referee = document.querySelector(".referee");
      const hasilAkhir = document.createElement("p");
      hasilAkhir.classList.add("results");
      hasilAkhir.innerHTML = hasil;
      referee.append(hasilAkhir);
      draw();
      logMatch();
    }, 1000);
  }
  secondGame();
});

function draw() {
  const draw = document.querySelectorAll(".results");
  let index = draw.length - 1;
  if (draw[index].textContent === "DRAW") {
    draw[index].classList.add("draw");
  }
}
draw();

function logMatch() {
  const draw = document.querySelectorAll(".results");
  let index = draw.length - 1;
  console.log(`Hasil pertandingan : ${draw[index].textContent}`);
}
logMatch();
