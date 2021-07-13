import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import classes from './Nav.module.css'

export default function Navbar() {
    return (
        <nav className={classes.top}>
            <div >
                <div className={classes.logo}>
                    <h1>FINANZCHECK.DE</h1>
                    <div>
                        <div className={classes.image}>
                            <h3>Kostenlose Beratung</h3>
                            <p className={classes.flex}>0800 433 88 77 66</p>
                        </div>
                        <div >
                            <img className={classes.call} src='phone-call.png' alt='phone call' />
                        </div>
                    </div>


                </div>
            </div>

            <div className={classes.anker}>
                <div>
                    <a className={classes.board} href='#'>Kreditvergleich</a>
                    <a className={classes.board} href='#'>Kredit</a>
                    <a className={classes.board} href='#'>   Autokredit</a>
                    <a className={classes.board} href='#'>Ratenkredit</a>
                    <a className={classes.board} href='#'>Baufinanzierung</a>
                    <a className={classes.board} href='#'>Karriere</a>
                </div>
                <div>
                    <a className={classes.boards} href='#'>Kundenbereich</a>
                </div>
            </div>




        </nav >
    )
}



