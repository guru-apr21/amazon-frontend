import React from 'react';
import '../css/form.css';
import { signin } from '../services/signInService';
import { Link, useHistory } from 'react-router-dom';
import { setUser } from '../reducers/userReducer';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from './common/Logo';
import Input from './common/Input';
import { useForm } from 'react-hook-form';

function SignIn() {
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { user } = await signin(data);
      dispatch(setUser(user));
      history.replace('/');
    } catch (error) {
      toast.error('Invalid Credentials!');
    }
  };

  return (
    <>
      <Logo />
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign In</h1>
        <Input
          name="email"
          label="Email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          error={errors.email}
        />
        <Input
          name="password"
          type="password"
          label="password"
          ref={register({ required: true })}
          error={errors.password}
        />

        <button disabled={isSubmitting} type="submit">
          Sign In
        </button>
        <span>New to Amazon?</span>
        <Link to="/signup">
          <button style={{ backgroundColor: '#f3f4f6' }}>
            Create your Amazon account
          </button>
        </Link>
      </form>
    </>
  );
}

export default SignIn;
