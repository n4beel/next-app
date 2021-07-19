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
                    <div>
                        <img className={classes.blow} src='edom.jpg' alt='default' />
                    </div>
                    <div>
                        <h5 className={classes.phophorus}>FINANZCHECK.de</h5>
                        <div className={classes.tram}>
                            <div>
                                <img className={classes.bash} src='star.png' alt='default' />
                            </div>
                            <div>
                                <p className={classes.rating}>4.9/5</p>
                            </div>
                        </div>
                        <p className={classes.hollow}>2155Bewertungen</p>
                    </div>

                </div>
                <div className={classes.slate}>
                    <h1 className={classes.anger}>Der FINANZCHECK Kreditvergleich – unabhängig und kundenorientiert</h1>
                </div>

                <div className={classes.kart}>
                    <p className={classes.hang}>Auf der Suche nach einem passenden Kredit? FINANZCHECK.de findet für
                        Sie das optimale Angebot! Ob klassischer Ratenkredit, zweckgebundener
                        <a href='#'>Kredit</a> oder Kleinkredit: Mithilfe unseres <a href='#'>Kreditvergleichs</a> finden Sie
                        bei über 20 Partnerbanken sicher und schnell die passende Lösung.</p>
                </div>
                <div className={classes.btnprimary}>
                    <h3 className={classes.Page}>Die FINANZCHECK.de Vorteile im Überblick</h3>
                </div>
                <div className={classes.primarycolor}>
                    <div>
                        <img className={classes.idea} src='idea.png' alt='default' />
                    </div>
                    <div className={classes.line}></div>

                    <div className={classes.list}>
                        <ul className={classes.unordered}>
                            <li>Wir bieten Ihnen einen unabhängigen und kostenlosen Vergleich von Kreditangeboten</li>
                            <li>Wir holen für Sie individuelle Kreditangebote ein. Unsere Kreditanfragen sind SCHUFA-neutral,
                                also ohne negative Auswirkung auf Ihren SCHUFA-Score</li>
                            <li>Zusätzlich bieten wir Ihnen weitere Dienstleistungen rund um Ihren Kreditwunsch, z. B. unsere
                                individuelle telefonische Beratung und technische Unterstützung, um die Bearbeitung Ihrer
                                Kreditanfrage durch die Bank zu beschleunigen</li>
                            <li>Mit FINANZCHECK.de gelangen Sie sicher und mühelos an Ihr Wunschdarlehen</li>

                        </ul>
                    </div>
                </div>

                <div className={classes.vorteile}>
                    <h4 className={classes.Page}>Warum FINANZCHECK.de?</h4>
                </div>

                <div className={classes.adress}>
                    <p className={classes.erste}>FINANZCHECK.de ist Ihre erste Adresse, wenn es um günstige, sichere
                        und seriöse Kredite geht. Ein Kredit ist etwas sehr Persönliches. Daher
                        stehen Sie und Ihre Bedürfnisse bei uns immer im Mittelpunkt. Es gibt
                        viele gute Gründe, weshalb Sie uns als Experten für Ihren individuellen
                        Finanzierungswunsch vertrauen können:</p>
                </div>
                <div className={classes.weil}>
                    <h5 className={classes.Page}>Weil wir eine ausgezeichnete Beratung haben</h5>
                </div>
                <div className={classes.adress}>
                    <p className={classes.daher}>Effektiver Jahreszins, Tilgungsmodalitäten, Haushaltsrechnung
                        – bei Ihrer Suche nach dem passenden Kredit können viele Fragen
                        auftauchen. Wir vermitteln daher nicht nur günstige Kredite, sondern
                        kümmern uns wirklich um Ihr Anliegen. Sie haben jederzeit die Möglichkeit,
                        persönlich mit einem unserer 170 erfahrenen Kreditberater zu sprechen.
                        Dabei finden Sie gemeinsam mit Ihrem persönlichen Berater die passende Lösung
                        für Ihr Finanzierungsvorhaben.</p>
                </div>
                <div className={classes.weils}>
                    <h5 className={classes.Page}>Weil Ihre Daten bei uns sicher sind</h5>
                </div>
                <div className={classes.React}>

                    <div>
                        <img className={classes.tuv} src='tuv.jpg' alt='default' />
                    </div>
                    <div className={classes.pest}>
                        <p className={classes.daher}>Wir legen größten Wert auf den Schutz Ihrer Daten. Wir wissen Ihr
                            Vertrauen zu schätzen.Daher ist uns der gewissenhafte Umgang mit
                            Ihren sensiblen Daten auch enorm wichtig. Unsere hohen Standards
                            im Bereich der Datensicherheit haben wir daher auch dieses Jahr
                            wieder für Sie vom <a href='#'>TÜV Saarland</a> prüfen lassen.</p>
                    </div>
                </div>
                <div className={classes.weil}>
                    <h5 className={classes.Page}>Weil Sie bei uns sparen können</h5>
                </div>
                <div className={classes.adress}>
                    <p className={classes.daher}>FINANZCHECK.de kooperiert mit über 20 Partnerbanken in ganz
                        Deutschland. Ihr Vorteil: Wir vergleichen die Angebote der Banken miteinander, suchen
                        Ihnen das passende Angebot und finden so Ihren Wunschkredit.</p>
                </div>
                <div className={classes.hash}>
                    <h5 className={classes.Page}>Weil Sie mit uns schnell und effizient zum Kredit kommen</h5>
                </div>
                <div className={classes.adress}>
                    <p className={classes.daher}>Wir holen für Sie mithilfe unserer Datenschnittstellen individuelle
                        Kreditangebote in Echtzeit, d.h. binnen weniger Minuten ein. Der Abschluss des Kreditvertrages
                        bei der Bank kann ebenfalls softwaregestützt erfolgen, so dass Sie binnen kürzester Zeit über
                        Ihr Geld verfügen können. Auch die Abwicklung des Kreditvertrags und die Auszahlung des Geldes
                        erfolgen schnell, in vielen Fällen schon innerhalb einer Woche. Schließen Sie Ihren Kredit
                        komplett digital ab, erhalten Sie Ihr Geld sogar noch schneller. Wir bieten im Zuge unseres
                        Kreditvergleichs sichere und schnelle Legitimationsverfahren an, die Ihren Kreditantrag
                        beschleunigen. Wählen Sie ganz entspannt zwischen Videoident, das Sie bequem von Zuhause aus
                        nutzen können, oder dem klassischen Postident-Verfahren.</p>
                </div>
                <div className={classes.weil}>
                    <h5 className={classes.Page}>Weil unsere Auszeichnungen für uns sprechen</h5>
                </div>
                <div className={classes.adress}>
                    <p className={classes.daher}>99,3 Prozent der Kreditnehmer sind mit unseren Leistungen absolut zufrieden.
                        Damit haben wir als Onlinevergleichsportal eine überdurchschnittlich hohe Kundenzufriedenheit. Damit
                        dies auch so bleibt und wir in Zukunft noch besser werden, arbeiten wir jeden Tag daran, unseren Service
                        für Sie weiter zu verbessern.</p>
                </div>
                <div className={classes.images}>
                    <div className={classes.blend}>
                        <div className={classes.dust} className={classes.box}>
                            <img className={classes.edom} src='edom.jpg' alt='default' />
                            <p className={classes.kunden}>eKomi ist ein unabhängiges Bewertungssystem, welches Kunden ermöglicht,
                                FINANZCHECK.de zu bewerten und auch Kommentare zu hinterlassen. Unsere
                                <a href='#'>eKomi-Bewertungen</a> beweisen: Über 15.000 Kunden bewerten unseren Service
                                positiv. Unsere effiziente und kompetente Kreditabwicklung bringt Sie
                                schnell auf den Weg zu Ihrem Wunschkredit.</p>
                        </div>
                        <div className={classes.dust} className={classes.box}>
                            <img className={classes.bewer} src='bewer.jpg' alt='default' />
                            <p className={classes.kunden}>Wenn es um Vertrauen geht, sind unsere Kunden bei uns in den besten Händen.
                                Das zeigen nicht nur die positiven Bewertungen auf <a href='#'>Bewertet.de</a>, sondern auch
                                die Weiterempfehlungen unserer zufriedenen Kunden. Mit Bewertet.de haben gerade
                                Neukunden den Vorteil, Erfahrungsberichte und Bewertungen über FINANZCHECK.de
                                zu lesen und auch selbst Beurteilungen zu verfassen. Dies ist nicht nur für
                                Sie als Kunde optimal. Auch wir als Dienstleister können somit auf Feedback
                                eingehen und unseren Service für Sie noch weiter verbessern.</p>
                        </div>
                    </div>
                    <div>
                        <div className={classes.dust}>
                            <img className={classes.trustpilot} src='trustpilot.png' alt='default' />
                            <p className={classes.kunden}>Die Community von <a href='#'>Trustpilot</a> sieht uns als kompetenten und vertrauenswürdigen
                                Dienstleister an. Das fördert nicht nur unsere Beziehung zu unseren Kunden, sondern
                                bietet diesen auch völlige Transparenz unseres Angebotes. Mit der Bewertungscommunity
                                Trustpilot haben Sie als Kunde die Gelegenheit, FINANZCHECK.de besser kennenzulernen
                                und von authentischem Feedback zu profitieren.</p>
                        </div>
                        <div className={classes.dust}>
                            <img className={classes.fragment} src='fragment.jpg' alt='default' />
                            <p className={classes.kunden}>Auch die von Kunden abgegebenen Bewertungen und Kommentare auf <a href='#'>ProvenExpert</a> sprechen für
                                sich: Sowohl unsere Beratung als auch die Kreditabwicklung werden durchweg positiv von
                                unseren Kunden bewertet. Dadurch können Sie sich sicher sein, dass Sie mit uns schnell und
                                mühelos zu Ihrem Wunschkredit gelangen</p>
                        </div>
                    </div>

                </div>
                <div className={classes.duster}>
                    <div>
                        <img className={classes.ausg} src='ausg.jpg' alt='default' />
                    </div>
                    <div>
                        <p className={classes.kunden}>Mit <a href='#'>Ausgezeichnet</a>.org haben Sie als Kunde die Möglichkeit, sich selbst ein Bild von uns zu machen.
                            Wie zufrieden waren Kunden mit unserer Beratung, unserem Service und dem Angebot an Krediten. Diese
                            und andere Fragen werden auf ausgezeichnet.org beantwortet.</p>
                    </div>
                </div>
                <div className={classes.weiley}>
                    <h4 className={classes.Page}>Wie läuft der Kreditvergleich bei FINANZCHECK.de ab?</h4>
                    <p className={classes.unser}>Unser <a href='#'>Vergleich</a> ist für Sie jederzeit transparent und völlig kostenfrei. Und so geht es:</p>
                    <div className={classes.formular}>
                        <ol className={classes.orderlist}>
                            <li>Wunschkredit in den Vergleichsrechner eintragen.</li>
                            <li>Aus mehreren Angeboten auswählen.</li>
                            <li>Formular ausfüllen und persönliche Daten angeben.</li>
                            <li>Optional: Unsere kostenlose Kontoblick-Funktion nutzen, um von den Vorteilen eines Online-Kredits zu profitieren.</li>
                            <li>Individuelle Angebote von den Banken erhalten und auswählen.</li>
                            <li>Auf Wunsch: Persönliche Beratung am Telefon einholen.</li>
                            <li>Kreditvertrag unterschreiben (auch via digitaler Unterschrift möglich) und abschicken.</li>
                            <li>Optional: Den Kredit komplett digital abschließen. Somit kann von einer schnelleren Auszahlung profitiert werden.</li>
                            <li>Sobald die Bank die manuelle Kreditprüfung abgeschlossen hat, wird der Kreditbetrag schnellstmöglich ausgezahlt.</li>

                        </ol>
                    </div>
                </div>
                <div className={classes.weil}>
                    <h5 className={classes.Page}>Unser Tipp: Schließen Sie Ihren Kredit komplett digital ab</h5>
                </div>
                <div className={classes.adress}>
                    <p className={classes.daher}>Dank modernster Datenschnittstellen zu unseren Partnerbanken
                        und geprüften Softwarelösungen, können Sie vollständig auf Papierkram verzichten und
                        gleichzeitig von besonders günstigen Zinsen und einer schneller Auszahlung
                        profitieren.</p>
                </div>
                <div className={classes.weiles}>
                    <h5 className={classes.Page}>Videoident</h5>
                </div>
                <div className={classes.adress}>
                    <p className={classes.daher}>Damit sichergestellt werden kann, dass es sich bei dem potenziellen
                        Kreditnehmer tatsächlich um Sie handelt, müssen Sie sich bei der Bank identifizieren. Mit dem
                        <a href='#'>Videoident</a>-Verfahren funktioniert dies einfach und unkompliziert. Dafür ist ein Gerät mit integrierter
                        Kamera notwendig, beispielsweise Ihr Smartphone, Ihr Tablet oder Ihr Notebook. Im Videoident-Verfahren
                        identifizieren Sie sich mit Ihrem Ausweisdokument bei einem unserer Partner, wie IDnow oder WebID.
                        Dieser prüft ob alle Angaben korrekt und vollständig sind.</p>
                </div>
                <div className={classes.weiles}>
                    <h5 className={classes.Page}>Kontoblick</h5>
                </div>
                <div className={classes.adress}>
                    <p className={classes.daher}>Der <a href='#'>Kontoblick</a> ist für Sie: sicher und schnell. Die
                        Bearbeitung Ihres Kreditantrags bei der Bank wird beschleunigt, da die erforderlichen Unterlagen
                        für die Banken sofort abgerufen werden können. Für Sie entfällt der Aufwand, die Informationen und
                        Nachweise umständlich zusammenzutragen und per Post einzusenden. Wenn Sie neben dem Kontoblick auf
                        die elektronische Unterschrift setzen, ist außerdem ein rein digitaler Abschluss eines Kreditvertrags
                        möglich.</p>
                </div>
                <div className={classes.weiles}>
                    <h5 className={classes.Page}>Digitale Unterschrift</h5>
                </div>
                <div className={classes.adress}>
                    <p className={classes.daher}>Ihr Kreditvertrag muss von Ihnen selbstverständlich unterschrieben
                        werden. Damit Ihnen der Weg zur Post erspart bleibt und Ihr Kredit schneller ausgezahlt werden
                        kann, bietet Ihnen FINANZCHECK.de die <a href='#'>digitale Unterschrift</a> an. Damit können
                        Sie ganz einfach und schnell Ihre Signatur unter Ihren Kreditvertrag setzen und sparen somit
                        Zeit und Nerven. Nicht umsonst werden digitale Unterschriften immer beliebter.</p>
                </div>
                <div className={classes.weil}>
                    <h4 className={classes.Page}>Welche Kredite bietet FINANZCHECK.de an?</h4>
                </div>
                <div className={classes.adress}>
                    <p className={classes.daher}>Bei uns finden Sie alle gängigen Formen von Darlehen. Sie können sowohl
                        Ratenkredite mit freiem Verwendungszweck aufnehmen als auch Ihre Auto- oder Urlaubsfinanzierung mit
                        uns realisieren. Unsere Partnerbanken decken das komplette Spektrum ab.</p>
                </div>
                <div className={classes.dubbed}>
                    <div className={classes.distract}>
                        <div className={classes.selbests}>
                            <h5 className={classes.Page}>Ratenkredit</h5>
                        </div>
                        <div className={classes.adresses}>
                            <p className={classes.daher}>Die klassische Option für die Kreditaufnahme ist der Ratenkredit.
                                Hier tilgen Sie das Kreditvolumen plus Zinsen durch monatliche, zuvor festgelegte Raten. Deren
                                Höhe bemisst sich an Faktoren wie der Kreditsumme, Laufzeit und Ihrer persönlichen Bonität.</p>

                        </div>
                    </div>
                    <div className={classes.distract}>
                        <div className={classes.lenar}>
                            <div className={classes.selbests}>
                                <h5 className={classes.Page}>Kredit für Selbstständige</h5>
                            </div>
                            <div className={classes.adresses}>
                                <p className={classes.daher}>Selbstständige gelten häufig als Risikogruppe und haben es daher bei
                                    der Suche nach Darlehen besonders schwer, da z.B. bei Krankheit die direkten Einnahmen wegfallen.
                                    FINANZCHECK.de zeigt Ihnen im Kreditvergleich gerne geeignete Kredite, die Sie auf dem Weg in die
                                    Selbstständigkeit und darüber hinaus benötigen.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.dubbed}>
                    <div className={classes.distract}>
                        <div className={classes.selbests}>
                            <h5 className={classes.Page}>Ratenkredit</h5>
                        </div>
                        <div className={classes.adresses}>
                            <p className={classes.daher}>Die klassische Option für die Kreditaufnahme
                                ist der Ratenkredit. Hier tilgen Sie das Kreditvolumen plus Zinsen durch
                                monatliche, zuvor festgelegte Raten. Deren Höhe bemisst sich an Faktoren
                                wie der Kreditsumme, Laufzeit und Ihrer persönlichen Bonität.</p>
                        </div>
                    </div>
                    <div className={classes.distract}>
                        <div className={classes.selbests}>
                            <h5 className={classes.Page}>Privatkredit</h5>
                        </div>
                        <div className={classes.adresses}>
                            <p className={classes.daher}>Mit dem Begriff "Privatkredit" kann sowohl ein Kredit
                                an Privatpersonen gemeint sein als auch ein Darlehen, das nicht von Banken, sondern
                                von privaten Geldgebern gewährt wird. Beim Kredit an Privatpersonen erfüllen Sie
                                sich mit dem Privatkredit kleine und größere Träume, vielleicht einen Urlaub oder
                                neue Möbel.</p>
                        </div>
                    </div>
                </div>
                <div className={classes.dubbed}>
                    <div className={classes.distract}>
                        <div className={classes.selbests}>
                            <h5 className={classes.Page}>Baufinanzierung</h5>
                        </div>
                        <div className={classes.adresses}>
                            <p className={classes.daher}>Kredite rund um die Baufinanzierung sind zweckgebundene Kredite
                                mit dem Grundstück oder der Immobilie als Sicherheit. Rabatte in der Baufinanzierung lassen
                                sich erzielen, wenn Eigenkapital vorhanden ist und keine 100-Prozent-Finanzierung gewählt
                                wird – passende Angebote bieten wir Ihnen gern in Zusammenarbeit mit unserem Partner ImmobilienScout24,
                                dem führenden Immobilienportal im deutschsprachigen Raum.</p>
                        </div>
                    </div>
                    <div className={classes.distract}>
                        <div className={classes.selbests}>
                            <h5 className={classes.Page}>Kleinkredit</h5>
                        </div>
                        <div className={classes.adresses}>
                            <p className={classes.daher}>Schon kleine Wünsche können zur Aufnahme eines Kleinkredits führen.
                                Dabei handelt es sich um Darlehen, deren Summe 10.000 Euro nicht überschreitet. FINANZCHECK.de
                                hilft dabei, den günstigsten Kleinkredit zu finden – oft ganz ohne zusätzlich erforderliche
                                Sicherheiten.</p>
                        </div>
                    </div>

                </div>
                <div className={classes.weil}>
                    <h4 className={classes.Page}>Weitere Angebote</h4>
                </div>
                <div className={classes.adress}>
                    <p className={classes.daher}>Bei uns finden Sie alle gängigen Formen von Darlehen. Sie können sowohl Ratenkredite mit freiem
                        Verwendungszweck aufnehmen als auch Ihre Auto- oder Urlaubsfinanzierung mit uns realisieren. Unsere Partnerbanken decken das
                        komplette Spektrum ab</p>
                </div>
                <div className={classes.danger}></div>
            </div>
        </div>
    )
}

export default Page
