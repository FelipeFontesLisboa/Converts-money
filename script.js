const button = document.getElementById("currency-button");
const select = document.getElementById("selectMoney");

const euro = 5.5;
const bitcoin = 333.897;

const convertValue = () => {
  // 3
  const inputReal = document.getElementById("input-real").value;
  const realValuelText = document.getElementById("real-value-text");
  const correncyValueText = document.getElementById("currency-value-text");

  realValuelText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReal); // '$100.00' onvert format money

  switch (select.value) {
    case "€ Euro":
      correncyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(inputReal / euro); // '$100.00' onvert format money
      break;
    case "UD$ Dólar americano":
      correncyValueText.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(inputReal / dolar); // '$100.00' convert format money
      break;
    case "₿ Bitcoin":
      correncyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "XBT",
      }).format(inputReal / bitcoin); // '$100.00' convert format money
      break;

    default:
      console.error();
  }
  //se tiver selecionado para euro faz a conversao  e divide REAL / EURO
  // if (select.value === "€ Euro") {
  //   correncyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
  //     style: "currency",
  //     currency: "EUR",
  //   }).format(inputReal / euro); // '$100.00' onvert format money
  // }

  // //se tiver selecionado para euro faz a conversao  e divide REAL / DOLA
  // if (select.value === "UD$ Dólar americano") {
  //   correncyValueText.innerHTML = new Intl.NumberFormat("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //   }).format(inputReal / dolar); // '$100.00' convert format money
  // }
};

button.addEventListener("click", convertValue);
select.addEventListener("change", changeMoney);

changeMoney = () => {
  //3

  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.getElementById("currency-img");
  const correncyValueText = document.getElementById("currency-value-text");

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.png";
    currencyImg.style.width = "57px";
  }
  if (select.value === "UD$ Dólar americano") {
    currencyName.innerHTML = "Dolar Americano";
    currencyImg.src = "./assets/eua.png";
    currencyImg.style.width = "80px";
  }
  if (select.value === "₿ Bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./assets/bitcoin.png";
    currencyImg.style.width = "40px";
  }
  console.log(select.value);

  convertValue();
};
