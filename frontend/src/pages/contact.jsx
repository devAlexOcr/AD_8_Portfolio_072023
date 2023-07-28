import './contact.scss'

function Contact() {

    return (        
        
        <div id="contact">           
			<h3>Une question ? Une demande de devis ?</h3>
			<p> N’hésitez pas à m’écrire ! Je vous répondrais en moins de 24 heures</p>
			<form method="post">
				<label for="nom">Nom</label>
				<input type="text" name="nom" id="nom"/>
				<label for="email">Email</label>
				<input type="email" name="email" id="email"/>
				<label for="message">Message</label>
				<textarea name="message" id="message" cols="30" rows="10"></textarea>
				<input type="submit" value="Envoyer"/>
			</form>
        </div>
    )
};


export default Contact