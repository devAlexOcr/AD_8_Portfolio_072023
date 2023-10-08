import{ useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.scss'


function Login({setPage}) {

    useEffect(() => {
        setPage('Login');
    },[setPage]);
    

    const [Form, SetForm]= useState('login');

    const Navigate = useNavigate();

    const email = useRef();
    const password = useRef();
    const name = useRef();
    const firstname = useRef();

    function User(action) { 
        if(action === 'signup') {                
            return {action: action,
                    email: email.current.value,
                    password: password.current.value,
                    name: name.current.value,
                    firstname: firstname.current.value}
        } else {
            return {action: action,
                    email: email.current.value,
                    password: password.current.value}
        }};
   
        function clickLogin(action) {

           const user = User(action)

            fetch('https://api.alexandrepaucdetoc.fr/login', 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                }
            )
            .then (res => {
                return res.json();
            })
            .then(data => {
            
                document.querySelector('form').reset();
                console.log(data)
                if(data[0].status === '1'){
                    localStorage.setItem('CurrentUser', JSON.stringify(data));
                    Navigate('/avis')
                }
                if(data[0].status === '-1'){alert(data[0].message)}
                if(data[0].status === '0'){alert(data[0].message)}
            }) 
        };

    

    
    
    return (
        <section id="login">         
                <nav id='nav_login'>
                    <button onClick={()=>SetForm('login')}className={(Form === 'login') ? 'active' : ''} > LogIn </button>
                    <button onClick={()=>SetForm('signup')} className={(Form === 'signup') ? 'active' : ''} > SignUp </button>
                </nav>
                {Form === 'login' &&        
                    <form method='post' id='form_login'>
                        <label htmlFor="email">Email</label>
                            <input ref={email} type='email' name='email' id='login2'/>
                        <label htmlFor='password'>Password</label>
                            <input ref={password} type="password" name='password' id='current-password'/>
                        <button  type ='button' onClick={()=>clickLogin('log')} id='se_connecter'>Se connecter</button>
                    </form>
                }
                {Form === 'signup' && 
                    <form method='post' id='form_signUp'>
                        <label htmlFor='name'>Name</label>
                            <input ref={name} type='text' />
                        <label htmlFor='firstname'>Firstname</label>
                            <input ref={firstname} type='text'/>
                        <label htmlFor="email">Email</label>
                            <input ref={email} type='email' name='email' id='login2'/>
                        <label htmlFor='password'>Password</label>
                            <input ref={password} type="password" name='password' id='current-password'/>
                        <button type='button' onClick={()=>clickLogin('signup')} id='register'>S'enregistrer</button>
                    </form>
                }    
        </section>
    )
};

export default Login;