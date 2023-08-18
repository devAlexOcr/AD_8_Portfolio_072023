import './login.scss'

function Login() {
    
    return (
        <section id="login">
            <h2>Connection</h2>
            <form method='post' id='form_login'>
                <label for="login">Login</label>
                <input type='text' name='login' id='login2'/>
                <label for='password'>Password</label>
                <input type="password" name='password' id='password'/>
                <button id='se_connecter'>Se connecter</button>
                <button id='register'>S'enregistrer</button>
            </form>
        </section>
    )
};

export default Login;