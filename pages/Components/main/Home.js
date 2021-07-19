import React from 'react'
import classes from './Home.module.css'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css'

const Home = () => {
    return (
        <div className={classes.background}>
            <div className={classes.box}>
                <div>
                    <h1 className={classes.header}>Die Kreditexperten</h1>
                    <p className={classes.page}>Online vergleichen, persönlich beraten</p>
                </div>
                <div className={classes.React}>
                    <div className={classes.headbox}>
                        <form>
                            <div>
                                <input className={classes.react} type='text' placeholder='Wunschbetrag' />
                            </div>
                            <div>
                                <button className={classes.btn}>Laufzite</button>
                            </div>
                            <div>
                                <button className={classes.btn}>verwundungszweck</button>
                            </div>
                            <div>
                                <div className={classes.aus}><p className={classes.uber}>Günstigster Kredit aus über 60 Angeboten ab:</p>
                                    <div className={classes.boss}>  <a className={classes.price}>243,86€</a> Mtl. Rate <a className={classes.play}>0,68%</a> <a className={classes.jahn}>Eff. Jahreszins</a></div> </div>
                            </div>
                            <div>
                                <button className={classes.head}>
                                    <div className={classes.ping}>
                                        <div className={classes.start}>
                                            kerditvergleich starten
                                        </div>
                                        <div>
                                            <img className={classes.arrow} src='right-arrow.png' alt='tick' />
                                        </div>
                                    </div>
                                    <div className={classes.form}>(Kostenlos und unverbindlich)</div>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className={classes.round}>
                        <p>Schon ab</p>
                        <h3> -0,4%</h3>
                        <p> effektiver Jahreszins¹</p>
                        <div className={classes.topheader}>
                            <div className={classes.flex}>
                                <div>
                                    <img className={classes.tick} src='check.png' alt='tick' />
                                </div>
                                <div>
                                    <p className={classes.param}>100% kostenlos</p>
                                </div>
                            </div>
                            <div className={classes.flex}>
                                <div>
                                    <img className={classes.tick} src='check.png' alt='tick' />
                                </div>
                                <div>
                                    <p className={classes.param}>Unverbindliche Kreditanfrage</p>
                                </div>
                            </div>
                            <div className={classes.flex}>
                                <div>
                                    <img className={classes.tick} src='check.png' alt='tick' />
                                </div>
                                <div>
                                    <p className={classes.param}>99,3% positive Bewertungen</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
