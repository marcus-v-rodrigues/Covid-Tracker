import React from 'react'

import {Cards, Chart, CountryPicker, BrazilCard, StartButton, Logo, TipsCards} from './components'
import {fetchData} from './api'
import styles from './App.module.css'

class App extends React.Component {
    constructor(){ //Construtor da Classe
        super() //Chamamento do construtor da classe pai
        this.state = {
            data: {},
            country: '',
        }
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({data: fetchedData, country: country})
    }

    async componentDidMount(){ //Método que é chamado toda vez que um componente é montado. Está sendo usado para chamar uma função GET da API
        const fetchedData = await fetchData()
        this.setState({data: fetchedData})
    }

    render(){//Responsável por renderizar os componentes do React na div root do HTML.

        const {data, country} = this.state

        let brazilCard  
        if(this.state.country === 'Brazil'){
            brazilCard = <BrazilCard/>
        } else{
            brazilCard = null
        }

        return(
            <>
                <div className={styles.landing+' '+styles.container}>
                    <Logo/>
                    <StartButton title="Iniciar" reference='tracker'/>
                </div>
                <div className={styles.container}>
                    <TipsCards/>
                </div>
                <div className={styles.container} id='tracker'>
                    <Cards data={data} />
                    <CountryPicker handleCountryChange={this.handleCountryChange}/> {/*handleCountryChange é um prop do componente CountryPicker */}
                    <Chart data={data} country={country}/>
                    {brazilCard}
                </div>
            </>
        )  
    }
}

export default App