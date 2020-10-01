import React from 'react'
import styles from './TipsCards.module.css'
import {Card, CardContent, Grid} from '@material-ui/core'

const TipsCards = () => {    

    return(
        <div className={styles.container}>
            <h2>Dicas de cuidados com o COVID-19</h2>            
                <Grid container spacing={2} justify="center" alignItems="stretch">
                    <Card className={styles.card} style={{backgroundColor: '#F5F5F5'}}>
                        <CardContent>
                            <div className={styles.img}>
                                <img alt='' src={'/images/dica_1.png'}/>
                            </div>
                            <div className={styles.text}>
                                <p>Use máscara</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className={styles.card} style={{backgroundColor: '#F5F5F5'}}>
                        <CardContent>
                            <div className={styles.img}>
                                <img alt='' src={'/images/dica_2.png'}/>
                            </div>
                            <div className={styles.text}>
                                <p>Cubra a boca caso queira tossir</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className={styles.card} style={{backgroundColor: '#F5F5F5'}}>
                        <CardContent>
                            <div className={styles.img}>
                                <img alt='' src={'/images/dica_3.png'}/>
                            </div>
                            <div className={styles.text}>
                                <p>Lave as mãos frequentemente</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className={styles.card} style={{backgroundColor: '#F5F5F5'}}>
                        <CardContent>
                            <div className={styles.img}>
                                <img alt='' src={'/images/dica_4.png'}/>
                            </div>
                            <div className={styles.text}>
                                <p>Não toque seu rosto com as mãos sem lavar</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className={styles.card} style={{backgroundColor: '#F5F5F5'}}>
                        <CardContent>
                            <div className={styles.img}>
                                <img alt='' src={'/images/dica_5.png'}/>
                            </div>
                            <div className={styles.text}>
                                <p>Evite o contato com pessoas doentes</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className={styles.card} style={{backgroundColor: '#F5F5F5'}}>
                        <CardContent>
                            <div className={styles.img}>
                                <img alt='' src={'/images/dica_6.png'}/>
                            </div>
                            <div className={styles.text}>
                                <p>Limpe e desinfete tudo o que usar</p>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
        </div>
    )
}

export default TipsCards