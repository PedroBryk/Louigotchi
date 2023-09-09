function decrementHappy() {
    const felicidadeElement = document.getElementById("felicidade");
    
    let felicidadePoints = parseInt(felicidadeElement.innerText.split(":")[1].trim());
    
    felicidadePoints = Math.max(felicidadePoints - 10, 0);
     
    felicidadeElement.innerText = `Felicidade: ${felicidadePoints}`;
    
  }

  function decrementHungry(){

    const fomeElement = document.getElementById("fome");

    let fomePoints = parseInt(fomeElement.innerText.split(":")[1].trim());

    fomePoints = Math.max(fomePoints - 10, 0);

    fomeElement.innerText = `Fome: ${fomePoints}`;
    
  }

  function decrementSleep(){

    const sonoElement = document.getElementById("sono");

    let sonoPoints = parseInt(sonoElement.innerText.split(":")[1].trim());

    sonoPoints = Math.max(sonoPoints - 10, 0);

    sonoElement.innerText = `Sono: ${sonoPoints}`;

  }

  setInterval(decrementHungry, 10000);     // 10 seconds
  setInterval(decrementHappy, 20000);     // 20 seconds
  setInterval(decrementSleep, 30000);     // 30 seconds

  