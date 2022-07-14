import { React, useState } from 'react';
import './Hero.css';
import image from '../images/image.png';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { data } from 'jquery';
import { ErrorMessage } from '@hookform/error-message';
import Modal from './modal/Modal';

const Hero = () => {
	const { register, formState: { errors }, handleSubmit } = useForm();
	const [ success, setSuccess ] = useState(false);
	const [ show, setShow ] = useState(false);


	const envoi = async (data) => {
		console.log('==============ENVOIE=======');
		console.log(data);
		console.log('==============FIN=======');

		await axios
			.post(
				'https://rocket-landing-page-backend.herokuapp.com/formulaire/',
				{ ...data } // {...data, message: "...."}
			)
			.then((response) => {
				console.log(response.data);
				window.location.reload(false);
               
                    // handleShow();
               
			})
			.catch((e) => {
				console.log(e.response);
			});
    

	};

	const handleClose = () => {
		if (success) {
			setShow(false);
		} else {
			setShow(false);
		}
	};

	const handleShow = () => setShow(true);

	return (
		<div className="hero">
			<div className="container">
				<div className="content">
					<div className="col-1">
						<h1>
							<div>Devenez Développeur </div>
							<div>Full Stack</div>
						</h1>
						<h2>
							<span>En deux mois, à distance </span>
						</h2>
						<p>
							Formation à distance et à temps plein pendant 10 semaines intensives pour apprendre le
							métier de Développeur Web et Mobile, avec des formateurs pros et expérimentés.{' '}
						</p>
						<div className="corps">
							<p>
								<em>S’incrire à la prochaine réunion d’information à distance : </em>{' '}
							</p>
							<div className="form-layout">
								<form
									className="Formulaire"
									onSubmit={handleSubmit((data) => {
										envoi(data);
									})}
								>
									<div className="Categorie_Formulaire">
										{/** FIRST NAME INPUT */}
										<input
											{.../* register must be use to apply validation rules on the input. Find more : https://react-hook-form.com/api/useform/register/ */

											register('nom', {
												required: '* Ce champs est requis',
												value: data.nom,
												shouldUnregister: true
											})}
											placeholder="Nom "
										/>

										{/** Show an error message under the input if the field does not respect validation rules */}
										<ErrorMessage
											errors={errors}
											name="nom"
											render={({ message }) => <p id="Message_erreur">{message}</p>}
										/>

										{/* --- LAST NAME INPUT --- */}
										<input
											{...register('prenom', {
												required: '* Ce champs est requis'
											})}
											placeholder="Prénom "
										/>

										<ErrorMessage
											errors={errors}
											name="prenom"
											render={({ message }) => <p id="Message_erreur">{message}</p>}
										/>

										{/* --- EMAIL INPUT --- */}
										<input
											{...register('email', {
												required: '* Ce champs est requis',
												pattern: {
													value: /\d+/,
													message: 'Ce champs ne comprend que des chiffres.'
												}
											})}
											placeholder="Email "
										/>
										<ErrorMessage
											errors={errors}
											name="email"
											render={({ message }) => <p id="Message_erreur">{message}</p>}
										/>
										{/* --- PHONE NUMBER INPUT --- */}
										<input
											{...register('telephone', {
												required: '* Ce champs est requis',
												pattern: {
													value: /\d+/,
													message: 'Ce champs ne comprend que des chiffres.'
												}
											})}
											placeholder="Telephone "
										/>
										<ErrorMessage
											errors={errors}
											name="telephone"
											render={({ message }) => <p id="Message_erreur">{message}</p>}
										/>

										<button type="submit">ENVOYER</button>

										{/* <p>{result}</p>  */}
									</div>
								</form>
								<Modal
									handleClose={handleClose}
									show={show}
									title={
										<div>
											{success ? 'Envoyé' : 'Erreur'}
											<i
												className={`${success ? ' fas fa-thumbs-up' : ' fas fa-thumbs-down'}`}
												style={{
													color: 'var(--primary-color)',
													marginLeft: '1rem'
												}}
											/>
										</div>
									}
								>
									{success ? (
										'Félicitations ! Nous avons bien reçu votre don et vous remercions.'
									) : (
										"Une erreur s'est produite, veuillez réessayer."
									)}
								</Modal>
							</div>
						</div>
					</div>
					<div className="col-2">
						<img src={image} alt="imghomme" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
