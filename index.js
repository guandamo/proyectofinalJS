let saldo = parseInt(prompt("Ingrese el saldo a invertir en USDT"));

let valorBTC = parseInt(prompt("Ingrese el valor actual de BTC"));
let valorETH = parseInt(prompt("Ingrese el valor actual de ETH"));
let valorLTC = parseInt(prompt("Ingrese el valor actual de LTC"));

for (;;) {
  let opcion = prompt("¿Qué moneda desea comprar? 1) Bitcoin (BTC), 2) Ethereum (ETH), 3) Litecoin (LTC)");
  
  let gasto;
if (opcion === "1") {
  gasto = parseInt(prompt("Ingrese la cantidad de saldo que desea gastar en BTC"));
} else if (opcion === "2") {
  gasto = parseInt(prompt("Ingrese la cantidad de saldo que desea gastar en ETH"));
} else if (opcion === "3") {
  gasto = parseInt(prompt("Ingrese la cantidad de saldo que desea gastar en LTC"));
} else {
  alert("Opción inválida. Por favor, elija una opción correcta.");
  continue;
}


  if (isNaN(gasto)) {
    alert("Debe ingresar un número válido");
    continue;
  }

  switch (opcion) {
    case "1":
      saldo = saldoDisp(saldo, gasto, valorBTC, "BTC");
      break;
    case "2":
      saldo = saldoDisp(saldo, gasto, valorETH, "ETH");
      break;
    case "3":
      saldo = saldoDisp(saldo, gasto, valorLTC, "LTC");
      break;
    default:
      alert("Opción inválida. Por favor, elija una opción correcta.");
      continue;
  }
  
  let continuar = prompt("¿Desea comprar otra moneda? (si)/(no)");
  if (continuar !== "no" && continuar !== "No" && continuar !== "NO" && continuar !== "nO") {
    continue;
  } else {
    break;
  }
}

function saldoDisp(saldo, gasto, valorMoneda, moneda) {
  let cantidad = gasto / valorMoneda;
  alert(`Ha comprado ${cantidad} ${moneda}`);
  return saldo - gasto;
}

alert(`Su saldo disponible es de ${saldo} USDT`);

let cambioBTC = parseInt(prompt("Ingrese el porcentaje de cambio en el valor de BTC"));
let cambioETH = parseInt(prompt("Ingrese el porcentaje de cambio en el valor de ETH"));
let cambioLTC = parseInt(prompt("Ingrese el porcentaje de cambio en el valor de LTC"));

let monedas = [
  {
    nombre: "Bitcoin",
    valor: valorBTC,
    cambio: cambioBTC
  },
  {
    nombre: "Ethereum",
    valor: valorETH,
    cambio: cambioETH
  },
  {
    nombre: "Litecoin",
    valor: valorLTC,
    cambio: cambioLTC
  }
];

let monedaMayorCambio;
if (monedas[0].cambio > monedas[1].cambio && monedas[0].cambio > monedas[2].cambio) {
  monedaMayorCambio = monedas[0];
} else if (monedas[1].cambio > monedas[2].cambio) {
  monedaMayorCambio = monedas[1];
} else {
  monedaMayorCambio = monedas[2];
}

alert(`La moneda con el mayor cambio en el día es ${monedaMayorCambio.nombre} con un cambio del ${monedaMayorCambio.cambio}%`);

let monedaBuscada = prompt("¿Qué moneda desea buscar? (1) Bitcoin, (2) Ethereum, (3) Litecoin");
let monedaEncontrada = monedas.find(m => {
  switch (monedaBuscada) {
    case "1":
      return m.nombre === "Bitcoin";
    case "2":
      return m.nombre === "Ethereum";
    case "3":
      return m.nombre === "Litecoin";
    default:
      return false;
  }
});

if (monedaEncontrada) {
  alert(`El cambio de valor de ${monedaEncontrada.nombre} en el día fue del ${monedaEncontrada.cambio}%`);
} else {
  alert("Moneda no encontrada");
}
