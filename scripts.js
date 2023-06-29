const key = "e0283766cee7e7e70be7e75409ae8042"


function CliqueBotao(){
    const cidade =  document.querySelector(".input-cidade").value
    BuscarDados(cidade)
}
                                        

async function BuscarDados(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br`).then(Response => Response.json())
    console.log(dados)
    DadosTela(dados) 
}

function DadosTela(dados){
    document.querySelector(".titulo-cidade").innerHTML = "Tempo em " + dados.name
    const temperatura = dados.main.temp - 273.15
   
    const idImg = dados.weather[0].icon
    document.querySelector('.icone-previsao').setAttribute('src', `https://openweathermap.org/img/wn/${idImg }.png`)

    document.querySelector('.temperatura').innerHTML = Math.floor(temperatura) + '°C'
    document.querySelector(".umidade").innerHTML = "Umidade Relativa do Ar: " + dados.main.humidity + "%"
    document.querySelector(".previsao-texto").innerHTML =  dados.weather[0].description
} 