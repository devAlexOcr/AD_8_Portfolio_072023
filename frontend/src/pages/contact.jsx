import { useEffect, useRef } from 'react';

import './contact.scss'

function Contact({setPage}) {

	useEffect(() => {
		setPage('Contact');
	}, [setPage]);
	

	const nom = useRef();
	const prenom = useRef();
	const email = useRef();
	const message = useRef();
	


	function postMessage () {
		
		const contactText = {
			name : nom.current.value,
			firstname : prenom.current.value,
			email : email.current.value,
			message : message.current.value
		};

		fetch('https://api.alexandrepaucdetoc.fr/contact', 
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(contactText)
		}
		)
		.then (res => {
			document.getElementById('contactForm').reset();
			
			return res.json();	
		})
		.then (data => {
			alert(data.message);
		})
	}

    return (        
        
        <section id="contact">           
			<h3>Une question ? Une demande de devis ?</h3>
				<p> N’hésitez pas à m’écrire ! Je vous répondrais en moins de 24 heures</p>
			<form id='contactForm'>
				<div id='form1'>
					<label htmlFor="nom">Nom</label>
					<input ref={nom} type="text" name="nom" id="nom"/>
					<label htmlFor="prénom">Prénom</label>
					<input ref={prenom}type="text" name="nom" id="nom"/>
					<label htmlFor="email">Email</label>
					<input ref={email}type="email" name="email" id="email"/>
				</div>
				<div id='form2'>
					<label htmlFor="message">Message</label>
					<textarea ref={message} name="message" id="message" cols="30" rows="10"></textarea>
					<button type="button" onClick={()=>postMessage()}>Envoyer</button>
				</div>
			</form>
        </section>
    )
};


export default Contact;