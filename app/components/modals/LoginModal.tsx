'use client';

import Modal from './Modal';
import { useRouter } from 'next/navigation';
import useLoginModal from '../../hooks/useLoginModal';
import CustomButton from '../forms/CustomButton';
import { handleLogin } from '../../lib/actions';
import { useState } from 'react';
import apiService from '@/app/services/apiService';

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const submitLogin = async () => {
    const formData = {
      email: email,
      password: password
    }
    const response = await apiService.post('/api/auth/login/', JSON.stringify(formData));

    if (response.access) {
      handleLogin(response.user_id, response.access, response.refresh);
      loginModal.close();
      router.push('/');
    } else {
      // non_field_errors is a key in the response object that contains an array of errors which was returned by the server
      setErrors(response.non_field_errors);
    }
  }

  const content = (
    <>
      <form
        action={submitLogin}
        className="space-y-4">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 h-[54px] border border-gray-300 rounded-xl"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.map((error, index) => (
          <div key={`error_${index}`} className="text-red-500 text-sm">{error}</div>
        ))}
        <CustomButton label="Submit" onClick={() => submitLogin()} />


      </form>
    </>
  );


  return (
    <Modal isOpen={loginModal.isOpen} close={loginModal.close} label={"Log in"} content={content} />

  )
}

export default LoginModal;