import Stars from './stars.jsx';

function formAvis() {
    return (
        <form>
            <label for='comment'>Commenaire</label>
            <input type='text' name='comment' />
            <label htmlFor="rate">
                <p>Note</p>
                <Stars rating={1} />
            </label>
        </form>
    )
};

export default formAvis;