import { signInWithGoogle } from '../services/firebase';

import '../App.css';

const Login = () => {
  return (
    <div className="gsign">
      <button className="button" onClick={signInWithGoogle}><i ></i>Sign in with google</button>
    </div>
  )
}

export default Login;