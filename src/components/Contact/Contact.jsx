import React from 'react'
import './Contact.scss'
function Contact() {
    return (
        <div>
            <div className="contact container">
                <div className="contact__inner">
                    <div className="contact__title">
                        <h2 id='Co'>Kontakt</h2>
                        <p>Vertrauen Sie Ihr Auto den echten Profis an und erhalten Sie zuverlässigen und hochwertigen Service in unserer Autowerkstatt!</p>
                    </div>

                    <ul className="contact__info">

                        <li className='contact__item'>
                            <div className="contact__block">

                            <i class="bi bi-geo-alt-fill"><h3>Adresse </h3></i>
                            <p>Gelsenkirchen, Horsterstr <br /> 10645897</p>
                            </div>
                            <div className="contact__block">
                                <i class="bi bi-clock-fill"><h3>Öffnungszeiten</h3></i>
                                <p>Montag - Freitag <br /> 8 bis 18 Uhr</p>
                            </div>
                        </li>
                        <li className='contact__item'>
                            <div className="contact__block">
                            <i class="bi bi-telephone-fill"> <h3>Telefon</h3></i>
                             <p>0209/592696</p>
                            </div>
                            <div className="contact__block">
                            <i class="bi bi-envelope-fill"> <h3>E-Mail</h3></i>
                        <p>info@kfz-laschet.de</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1511.3297219697258!2d72.35952772803033!3d40.74751858633482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced630e0f4795%3A0xf72460c2369068a8!2sDigital%20City!5e0!3m2!1sru!2s!4v1683217606883!5m2!1sru!2s" width="488" height="422" style={{"border":"0"}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}

export default Contact