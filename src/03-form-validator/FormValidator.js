import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [message, setMessage] = useState(null);

  const validation = (event) => {
    event.preventDefault();
    const validEmail = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if (email === '' || password === '' || passwordConfirm === '') {
      setMessage('All fields must be filled in');
      return;
    }
    else if (!validEmail) {
      setMessage('Invalid Email Format');
      return;
    } else if (password.length !== 8) {
      setMessage('Password must be minimum 8 characters');
      return;
    } else if (password !== passwordConfirm) {
      setMessage('Passwords do not match');
      return;
    } else {
      setMessage('Successfully Signed Up');
      return;
    }

  };

  return (
    <form onSubmit={(e) => validation(e)}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      <p>{message}</p>
      <input type='submit' value='Submit'/>
    </form>
  )
}
