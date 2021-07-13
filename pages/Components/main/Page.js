import React from 'react'
import classes from './Page.module.css'
import Carousel from 'react-bootstrap/Carousel';


const Page = () => {
    return (
        <div>
            <div className={classes.flex}>
                <div className={classes.image}>
                    <div>
                        <img className={classes.haze} src='tuv.jpg' alt='default' />
                    </div>
                    <div>
                        <img className={classes.haze} src='edom.jpg' alt='default' />
                    </div>
                    <div>
                        <img className={classes.haze} src='zinc.jpg' alt='default' />
                    </div>
                </div>

                <div className={classes.blaze}>
                    <p className={classes.pera}>
                        <a href='#'>¹-0,4% Effektiver Jahreszins</a>bei: 1.000€ Netto-Darlehensbetrag, 12 Monate Laufzeit, 0,00% fester Sollzins p.a., monatliche Rate 83,15€, Gesamtbetrag 997,83€, Fidor Bank | Entspricht zugleich dem repräsentativen Beispiel gem. § 6a PAngV. Kredit erfordert Online-Kontoauszug (Kontoblick) und Eröffnung eines Girokontos bei der Fidor Bank. Das Girokonto ist während der Kreditlaufzeit kostenlos.

                    </p>
                </div>
            </div>
            <div>
                <div className={classes.alt}>
                    <h2 className={classes.heading}>Das sagen unsere Kunden</h2>
                </div>
                <div className={classes.enter}>
                    <Carousel className={classes.Carousel}>
                        <Carousel.Item>
                            <p>professionell und gut, unkompliziert und schnell, keine lange wartezeit...</p>

                        </Carousel.Item>
                        <Carousel.Item>

                            <p>Meine Erfahrung mit Finanzcheck.de ist sehr gut.Ist alles reibungslos un...</p>

                        </Carousel.Item>
                        <Carousel.Item>

                            <p>Das Team hat sich sehr bemüht, war kompetent und sehr freundlich!</p>

                        </Carousel.Item>
                        <Carousel.Item>
                            <p>professionell und gut, unkompliziert und schnell, keine lange wartezeit...</p>

                        </Carousel.Item>
                        <Carousel.Item>
                            <p>professionell und gut, unkompliziert und schnell, keine lange wartezeit...</p>

                        </Carousel.Item>
                        <Carousel.Item>
                            <p>professionell und gut, unkompliziert und schnell, keine lange wartezeit...</p>

                        </Carousel.Item>
                        <Carousel.Item>
                            <p>professionell und gut, unkompliziert und schnell, keine lange wartezeit...</p>

                        </Carousel.Item>
                        <Carousel.Item>
                            <p>professionell und gut, unkompliziert und schnell, keine lange wartezeit...</p>

                        </Carousel.Item>
                        <Carousel.Item>
                            <p>professionell und gut, unkompliziert und schnell, keine lange wartezeit...</p>

                        </Carousel.Item>
                        <Carousel.Item>
                            <p>professionell und gut, unkompliziert und schnell, keine lange wartezeit...</p>

                        </Carousel.Item>
                        <Carousel.Item>
                            <p>professionell und gut, unkompliziert und schnell, keine lange wartezeit...</p>

                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div >

                <div className={classes.center}>
                    <img className={classes.blow} src='edom.jpg' alt='default' />
                    <h5 className={classes.phophorus}>FINANZCHECK.de</h5>

                    <div classNmae={classes.tram}>
                        <img className={classes.blows} src='star.png' alt='default' />
                        <p className={classes.rating}>4.9/5</p>
                    </div>



                </div>
                <div className={classes.slate}>

                </div>
            </div>
        </div>
    )
}

export default Page
