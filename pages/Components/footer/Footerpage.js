import React from 'react'
import classes from './Footerpage.module.css'


const Footerpage = () => {
    return (
        <>
            <div className={classes.box}>
                <div className={classes.pages}>
                    <h6 className={classes.flex}>Unsere Vergleiche</h6>
                    <p className={classes.place}>Kreditvergleich</p>
                    <p className={classes.place}>Kredit</p>
                    <p className={classes.place}>Autokredite</p>
                    <p className={classes.place}>Ratenkredite</p>
                    <p className={classes.place}>Umschuldungen</p>
                    <p className={classes.place}>Baufinanzierungen</p>
                </div>
                <div className={classes.page}>
                    <h6 className={classes.flex}>Unternehmen</h6>
                    <p className={classes.place}>Über uns</p>
                    <p className={classes.place}>Jobs</p>
                    <p className={classes.place}>Presse</p>
                    <p className={classes.place}>FAQ</p>
                </div>
                <div className={classes.pagehead}>
                    <h6 className={classes.flex}>Kontakt</h6>
                    <p className={classes.place}>Partnerprogramm</p>
                    <p className={classes.place}>finanzcheckPRO - B2B Partnerlösung</p>
                    <p className={classes.place}>AGB</p>
                    <p className={classes.place}>Datenschutz</p>
                    <p className={classes.place}>Cookie-Präferenzen</p>
                    <p className={classes.place}>Impressum</p>
                    <p className={classes.place}>Kontakt</p>
                </div>
                <div className={classes.pagemiddle}>
                    <h6 className={classes.flex}>Social und Hotline</h6>
                    <p className={classes.price}>Gemeinsam finden wir Ihren passenden Kredit! Kostenlose Hotline.</p>
                    <div className={classes.adress}>
                        <div>
                            <img className={classes.call} src='phone-call.png' alt='phone call' />
                        </div>
                        <div>
                            <p className={classes.place}>0800 433 88 77 66</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className={classes.pride}>
                <div>
                    <img className={classes.tick} src='facebook-logo.png' alt='tick' />
                </div>
                <div>
                    <img className={classes.tick} src='twitter.png' alt='tick' />
                </div>
                <div>
                    <img className={classes.tick} src='youtube.png' alt='tick' />
                </div>
                <div>
                    <img className={classes.tick} src='xing.png' alt='tick' />
                </div>
                <div>
                    <img className={classes.tick} src='linkedin.png' alt='tick' />
                </div>
            </div>
        </>
    )
}

export default Footerpage
