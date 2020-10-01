import React, {useState,useEffect} from 'react'
import { fetchDailyData } from '../../api'
import {Line, Bar} from 'react-chartjs-2'

import styles from './Chart.module.css'


const Chart = ({data: {confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() =>{
        (async () => {
            setDailyData(await fetchDailyData())
        })() //Isso é uma Self Invoked Arrow Function

    }, [])

    const lineChart = (
        dailyData.length ? (
          <Line
            data={{ //O motivo para as duas chaves '{{}}' é que React usa JSX, e nela qualquer variável, objeto, expressão etc. Deve ser colocada em {}.
                    //Essa variável data deve armazenar um objeto de JavaScript, então deve-se por {} novamente
              labels: dailyData.map(({date}) => {
                let trueDate = new Date(date)

                let day = trueDate.getDate()
                let month = trueDate.getMonth()
                let year = trueDate.getFullYear()

                if(day < 10){
                  day ="0" + day
                }
                if(month < 10) {
                  month ="0" + month
                }

                return day + "/" + month + "/" + year
              }), //dailyData é um array, o que ocorre aqui é que em cada elemento do array está sendo executado a função do callback, ou seja está se desestruturando do objeto e passando a data convertida
              
              datasets: [{
                data: dailyData.map((data) => data.confirmed), //dailyData é um array, o que ocorre aqui é que em cada elemento do array está sendo executado a função do callback, ou seja está se passando o número de confirmados
                label: 'Infectados',
                borderColor: '#3333ff',
                backgroundColor: 'rgba(51, 51, 255, 0.3)',
                fill: true,
              }, {
                data: dailyData.map((data) => data.deaths), //dailyData é um array, o que ocorre aqui é que em cada elemento do array está sendo executado a função do callback, ou seja está se passando o número de mortos
                label: 'Mortes',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.6)',
                fill: true,
              },
              ],
            }}
          />
        ) : null //if ternário para saber se há ou não um array de dados diário
      )

      const barChart = (
        confirmed ? (
           <Bar
            data={{
              labels: ['Infectados', 'Recuperados', 'Mortos'],
              datasets: [{
                label: 'Pessoas',
                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                data: [confirmed.value, recovered.value, deaths.value],
              }],
            }}
            options={{
              legend: {display: false},
              title: {display: true, text: `Estado atual em ${country}`},
            }}
           />
         ) : null //if ternário para saber se foi passado ou não os dados de um país
      )

    return(
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart