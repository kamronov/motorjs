import React from 'react'
import './Cards.scss'
import shinas from '../../assets/img/shina.svg'
function Cards() {
    return (
        <div className='cards'>
            <div className="card_header"><img src={shinas} alt="" /></div>   

            <ul className="cards__list container">
                <li className='cards_item'>
                    <ul>
                        <li>Hochqualifizierte Mechaniker mit langjähriger Erfahrung in der Autowerkstatt</li>
                        <li>Individueller Ansatz für jeden Kunden und sein Fahrzeug</li>
                        <li>Zuverlässiger und qualitativ hochwertiger Service, der dazu beiträgt, die Lebensdauer Ihres Autos zu verlängern</li>
                    </ul>
                </li>
                <li className='cards_item'>
                    <ul>
                        <li>
                            Falls die benötigten Teile nicht in unserem Lager vorhanden sind, werden diese in kürzester Zeit beshaffen. Sie müssen nicht selbst etwas suchen und Ihre Zeit verschwenden, die Reparatur wird für Sie zügig und bequem ausgeführt.
                        </li>
                        <li>
                            Moderne Ausrüstung und Technologien, die es ermöglichen, schnell und qualitativ hochwertig jede Aufgabe zu erledigen

                        </li>
                    </ul>
                </li>
                <li className='cards_item'>
                 <ul>
                 <li>
                        Breites Spektrum an Dienstleistungen, einschließlich Diagnose. Von A wie ABS System bis Z wie Zahnriemenwechsel sowie Austauschen der Betriebsflüssigkeiten und sicherheitsrelevante Verschleißteile sind wir für Sie da.
                        </li>
                    <li>
                        Günstige Lage der Autowerkstatt und flexible Arbeitszeiten, die es ermöglichen, den Service zu einem für Sie günstigen Zeitpunkt zu erhalten
                        </li>
                 </ul>
                </li>
            </ul>
            <div className="card_footer"><img src={shinas} alt="" /></div>
        </div>
    )
}

export default Cards