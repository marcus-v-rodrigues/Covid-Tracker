import React, { useState, useEffect } from 'react'
import { fetchBrazil } from '../../api'
import List from '../List/List'
import styles from './BrazilCard.module.css'

const BrazilCard = () => {
    const [data, setData] = useState([])//Hook que te permite adicionar o state do React a um componente de função. 

    useEffect(() =>{//Hook que te permite executar efeitos colaterais em componentes funcionais.
        (async () => {
            setData(await fetchBrazil())
        })() //Isso é uma Self Invoked Arrow Function

    }, [])

    function getFlag(uf) {//Retorna a bandeira de cada estado
        return `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${uf}.png`;
    }

    return(
    <List title="Estados Brasileiros">{/*Chamamento do componente List*/}
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <span role="img" aria-label="alert">📍</span>
                {' '}
                <strong>Estado</strong>
              </th>
              <th>
                <span role="img" aria-label="alert">🚨</span>
                {' '}
                <strong>Confirmados</strong>
              </th>
              <th>
                <span role="img" aria-label="death">💀</span>
                {' '}
                <strong>Mortes</strong>
              </th>
            </tr>
          </thead>
        </table>
        <div className={styles.tableScroll}>
          <table>
            <thead>
                {data.map((report, i) => (//Função para gerar cada linha com os dados de cada estado
                  <tr key={i}>
                      <th className={styles.flex}>
                          <img src={getFlag(report.uf)} alt="uf flag" width="30px" />
                          <span>{report.uf}</span>
                      </th>
                      <th className={styles.textRight}>
                          {report.cases}
                      </th>
                      <th className={styles.textRight}>
                          {report.deaths}
                      </th>
                  </tr>
                ))}
            </thead>
          </table>
        </div>
      </div>
    </List>
    )
}

export default BrazilCard