import React from 'react'
import './Hero.scss'
import heroIcon from '../../assets/img/gayka.png'
function Hero() {
    return (
        <div className='hero'>
            <div className="hero__inner container">
                <h2 className='hero__title'>Ihre Autowerkstatt in <br /> Gelsenkirchen</h2>
                <ul className='hero__list'>

                    <li className='hero__item'>
                        <img src={heroIcon} alt="" />
                        <p>Erfahrene Mechaniker und Meister</p>
                    </li>
                    <li className='hero__item'>
                        <img src={heroIcon} alt="" />
                        <p>Moderne Werkstattausrüstung</p>
                    </li>
                    <li className='hero__item'>
                        <img src={heroIcon} alt="" />
                        <p>Breites Spektrum an Dienstleistungen (von A wie ABS bis Z wie Zylinderkopfdichtung, wir sind für Sie da!)</p>
                    </li>
                    <li className='hero__item'>
                        <img src={heroIcon} alt="" />
                        <p>Erfahrene Mechaniker und Meister mit jahrzehntelange Erfahrung im KFZ Gewerbe</p>
                    </li>
                    <li className='hero__item'>
                        <img src={heroIcon} alt="" />
                        <p>Zuverlässiger und qualitativ hochwertiger Service, der dazu beiträgt, die Lebensdauer Ihres Autos zu verlängern</p>
                    </li>
                </ul>
                 <button className='hero__btn'  >Kontaktformular <i class="bi bi-envelope"></i> </button>
            </div>

        </div>
    )
}

export default Hero