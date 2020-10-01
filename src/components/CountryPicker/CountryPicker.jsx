import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import { fetchCountries } from '../../api'

import styles from './CountryPicker.module.css'

const CountryPicker = ({handleCountryChange}) => {
  const [countries, setCountries] = useState([])//Hook que te permite adicionar o state do React a um componente de função. 

  useEffect(() => {//Hook que te permite executar efeitos colaterais em componentes funcionais.
    (async () => {
      setCountries(await fetchCountries())
    })()//Isso é uma Self Invoked Arrow Function

  }, [setCountries])

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(event) => handleCountryChange(event.target.value)}>
        <option value="">Global</option>
        {countries.map((country, index) => <option key={index} value={country}>{country}</option>)/*Função para gerar cada linha com o nome de cada país*/}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker