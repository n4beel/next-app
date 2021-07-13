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

                        <Dropdown className={classes.head} >
                            <Dropdown.Toggle className={classes.dropdown} variant="success">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

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
