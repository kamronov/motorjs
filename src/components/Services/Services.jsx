import React from 'react'
import './Services.scss'
import shinas from '../../assets/img/shina.svg'
import icon1 from '../../assets/img/icon1.svg'
import icon2 from '../../assets/img/icon2.svg'
import icon3 from '../../assets/img/icon3.svg'
import icon4 from '../../assets/img/icon4.svg'
import icon5 from '../../assets/img/icon5.svg'
import icon6 from '../../assets/img/icon6.svg'
import icon7 from '../../assets/img/icon7.svg'
import icon8 from '../../assets/img/icon8.svg'
import icon9 from '../../assets/img/icon9.svg'
import icon10 from '../../assets/img/icon10.svg'
import icon11 from '../../assets/img/icon11.svg'
import icon12 from '../../assets/img/icon12.svg'
import icon13 from '../../assets/img/icon13.svg'
import icon14 from '../../assets/img/icon14.svg'
import icon15 from '../../assets/img/icon15.svg'

function Services() {
  return (
    <div>
      <div className="services">
        <h2 id='De' className='service__title'>Die Leistungen unseres Fachbetriebes</h2>
        <p className='service__text'>Sehr günstige Lage der Autowerkstatt mit sehr guter <br /> Verkehrsanbindung in Gelsenkirchen Buer</p>

        <ul className="services__list container">
          <li>
            <div>
              <img src={icon1} alt="icon" />
              <p>Service Inspektionen an Ihren Fahrzeug nach Herstellervorgaben</p>
            </div>
            <div>
              <img src={icon2} alt="icon" />
              <p>Auspuff </p>
            </div>
            <div>
              <img src={icon3} alt="icon" />
              <p>Schaltgetriebeinstandsetzung</p>
            </div>
            <div>
              <img src={icon4} alt="icon" />
              <p>Autoglas</p>
            </div>
            <div>
              <img src={icon5} alt="icon" />
              <p>computerdiagnose </p>
            </div>
          </li>
          <li>
            <div>
              <img src={icon6} alt="icon" />
              <p>reifenservice</p>
            </div>
            <div>
              <img src={icon7} alt="icon" />
              <p>Karosseriearbeiten</p>
            </div>
            <div>
              <img src={icon8} alt="icon" />
              <p>Einbau von Anhängerkupplung</p>
            </div>
            <div>
              <img src={icon9} alt="icon" />
              <p>Lackierarbeiten</p>
            </div>
            <div>
              <img src={icon10} alt="icon" />
              <p>Bremsen</p>
            </div>
          </li>
          <li>
            <div>
              <img src={icon11} alt="icon" />
              <p>automatikgertriebspülung </p>
            </div>
            <div>
              <img src={icon12} alt="icon" />
              <p>Schlüssel Programmierung</p>
            </div>
            <div>
              <img src={icon13} alt="icon" />
              <p>Kupplung</p>
            </div>
            <div>
              <img src={icon14} alt="icon" />
              <p>Klimaservice</p>
            </div>
            <div>
              <img src={icon15} alt="icon" />
              <p>Hauptuntersuchung sowie Abgasuntersuchung (DEKRA Stützpunkt)</p>
            </div>
          </li>
        </ul>
        <button className='service__btn '>Kontaktformular <i class="bi bi-envelope"></i></button>
      </div>
      <div className="card_footer"><img src={shinas} alt="" /></div>
    </div>
  )
}

export default Services