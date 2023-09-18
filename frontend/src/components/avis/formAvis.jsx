
function formAvis() {

    // const [rating, setRating] = useState(0);


    return (
        <form>
            <label for='prenom'>Prenom</label>
            <input type='text' name='prenom'/>
            <label for='nom'>Nom</label>
            <input type='text' name='nom' />
            <label for='comment'>Commenaire</label>
            <input type='text' name='comment' />
            <label htmlFor="rate">
                <p>Note</p>
            </label>
        </form>
    )
};

export default formAvis;