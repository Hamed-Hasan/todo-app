import React from 'react';
import {  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Home/Loading';
import auth from '../../firebase.init';
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (loading) {
      return <Loading/>;
    }
    return (
        <div className='glow-btn'>
          <button onClick={() => signInWithGoogle()} class="glow-on-hover" type="button">Continue With Google</button>
        </div>
    );
};

export default Login;