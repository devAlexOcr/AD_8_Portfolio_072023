import { useRef } from "react";

function FormSignUp(clickLogin) {

    const email = useRef();
    const password = useRef();
    const name = useRef();
    const firstname = useRef();

    return (
        <form method='post' id='form_signUp'>
            <label for='name'>Name</label>
                <input ref={name} type='text' />
            <label for='firstname'>Firstname</label>
                <input ref={firstname} type='text'/>
            <label for="email">Email</label>
                <input ref={email} type='email' name='email' id='login2'/>
            <label for='password'>Password</label>
                <input ref={password} type="password" name='password' id='current-password'/>
        <button type='button' onClick={()=>clickLogin()} id='register'>S'enregistrer</button>
    </form>
    )
}

export default FormSignUp;