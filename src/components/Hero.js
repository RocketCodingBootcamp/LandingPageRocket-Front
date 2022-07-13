import React from 'react'
import './Hero.css'
import image from '../images/image.png'


const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='content'>
                    <div className='col-1'>
                        <h1>
                            <div>Devenez Développeur </div>
                            <div>Full Stack</div>
                         </h1>
                        <h2><span >En deux mois, à distance </span></h2>
                        <p>Formation à distance et à temps plein pendant 10 semaines intensives pour apprendre le métier de Développeur Web et Mobile, avec des formateurs pros et expérimentés. </p>
                    <div className='corps'>
                        <p><em>S’incrire à la prochaine réunion d’information à distance : </em> </p>
                        <div className='form-layout'>
                            
                                <form action=''>
                                    <input type='text' placeholder='Nom' />
                                    <input type='text' placeholder='Prénom' />
                                    <input type='email' placeholder='Email' />
                                    <input type='text' placeholder='Téléphone' />
                                    <button>Envoyer</button>
                                </form>
                            
                        </div>
                        </div>
                    </div>
                    <div className='col-2'>
                        
                            
                              <img src={image} alt='imghomme' />
                            
                        
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Hero