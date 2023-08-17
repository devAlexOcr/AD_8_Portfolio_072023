import './contact.scss'

function Contact() {

    return (        
        
        <section id="contact">           
			<h3>Une question ? Une demande de devis ?</h3>
			<p> N’hésitez pas à m’écrire ! Je vous répondrais en moins de 24 heures</p>
			<form method="post">
				<div>
				<label for="nom">Nom</label>
				<input type="text" name="nom" id="nom"/>
				<label for="prénom">Prénom</label>
				<input type="text" name="nom" id="nom"/>
				<label for="email">Email</label>
				<input type="email" name="email" id="email"/>
				</div>
				<div>
				<label for="message">Message</label>
				<textarea name="message" id="message" cols="30" rows="10"></textarea>
				<button type="submit">Envoyer</button>
				</div>
			</form>
        </section>
    )
};


export default Contact