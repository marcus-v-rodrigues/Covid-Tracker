import React from 'react'
import styles from './Cards.module.css'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'




const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {//Destructuring dos dados vindos da API
    if(!confirmed){
        return 'Carregando'
    }

    return(
        <div className={styles.container}>            
                <Grid container spacing={3} justify="center" alignItems="stretch">
                    <Grid item xs={12} md={4} style={{display: 'flex'}}>
                        <Card className={cx(styles.card, styles.infected)} style={{backgroundColor: '#F5F5F5'}}>
                            <CardContent>
                                <Typography gutterBottom>Infectados</Typography>
                                <Typography variant='h5'>
                                    <CountUp start={0} end={confirmed.value} duration={3} separator='.' />{/*Inserção do dado de casos confirmados*/}
                                </Typography>
                                <Typography>{new Date (lastUpdate).toLocaleDateString('pt-BR')}</Typography>
                                <Typography variant='body2'>Número de casos ativos de COVID-19</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} style={{display: 'flex'}}>
                        <Card className={cx(styles.card, styles.recovered)} style={{backgroundColor: '#F5F5F5'}}>
                            <CardContent>
                                <Typography gutterBottom>Recuperados</Typography>
                                <Typography variant='h5'>
                                    <CountUp start={0} end={recovered.value} duration={3} separator='.' />{/*Inserção do dado de casos recuperados*/}
                                </Typography>
                                <Typography>{new Date (lastUpdate).toLocaleDateString('pt-BR')}</Typography>
                                <Typography variant='body2'>Número de casos recuperados de COVID-19</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} style={{display: 'flex'}}>
                        <Card className={cx(styles.card, styles.deaths)} style={{backgroundColor: '#F5F5F5'}}>
                            <CardContent>
                                <Typography gutterBottom>Mortos</Typography>
                                <Typography variant='h5'>
                                    <CountUp start={0} end={deaths.value} duration={3} separator='.' />{/*Inserção do dado de mortos*/}
                                </Typography>
                                <Typography>{new Date (lastUpdate).toLocaleDateString('pt-BR')}</Typography>
                                <Typography variant='body2'>Número de mortos por COVID-19</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
        </div>
    )
}

export default Cards