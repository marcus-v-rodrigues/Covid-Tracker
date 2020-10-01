import axios from 'axios'

const url = 'https://covid19.mathdro.id/api' //API de casos globais

const urlBrazil = 'https://covid19-brazil-api.now.sh/api/report/v1' //API para os estados brasileiros

export const fetchData = async (country) => { //Função que busca os casos de todos os países ou de um em específico

  let changeableUrl = url

  if (country) { //Caso seja passado um país, é pesquisado os dados dele
    changeableUrl = `${url}/countries/${country}`
  }


  try {
      const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl) //Destructuring dentro de destructuring

      const modifiedData = {confirmed, recovered, deaths, lastUpdate}// Em JS, se a key e o value de um objeto tem o mesmo nome, pode-se fazer uma omissão
      return modifiedData //Retorno dos dados já peneirados
      
  } catch (error) {
      return error
  }
}

export const fetchDailyData = async () => {//Faz uma solicitação HTTP GET de dados globais desde o início da pandemia até o dia atual, organizando e tratando as informações para serem usadas.

  try {
    const {data} = await axios.get(`${url}/daily`) //Destructuring da informação passada pela API
    const modifiedData = data.map((dailyData) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate //Só é retornado um objeto com o dia, mortes e casos confirmados da data específica
    })) //Capturando um array de objetos

    return modifiedData

  } catch (error) {
    return error
  }
}

export const fetchCountries = async () => {//Faz uma solicitação HTTP GET com dados de todos os países sendo que é capturado e organizado o nome de cada um deles.

  try{
    const {data: {countries}} = await axios.get(`${url}/countries`)
    return countries.map((country) => country.name)//Só é retornado o nome dos países
  } catch(error) {
    return error
  }
}

export const fetchBrazil = async () => {//Faz uma solicitação HTTP GET com dados de todos os estados brasileiros, sendo que é organizado em ordem decrescente pelo número de casos.

  try{
    const {data} = await axios.get(urlBrazil) //Destructuring da informação passada pela API
    return data.data.sort((a, b) => (a.cases < b.cases ? 1 : -1)) //No retorno já é feita a organização por ordem decrescente do número de casos confirmados
    
  } catch(error) {
    return error
  }
}