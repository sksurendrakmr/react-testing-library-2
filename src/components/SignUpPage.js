export const SignUpPage = () => {
  return (
    <>
      <h1>Sign Up</h1>
      <label htmlFor='username'>UserName</label>
      <input
        id='username'
        type='text'
        placeholder='Enter username'
        name='username'
      />
      <label htmlFor='email'>Email</label>
      <input id='email' type='text' placeholder='Enter email' />
      <label htmlFor='password'>Password</label>
      <input id='password' type='password' placeholder='Enter password' />
      <label htmlFor='confirm-password'>Confirm Password</label>
      <input
        id='confirm-password'
        type='password'
        placeholder='Confirm Password'
      />
      <button disabled={true}>Sign Up</button>
    </>
  );
};
