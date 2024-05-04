'use client';

import Modal from './Modal';
import useLoginModal from '../../hooks/useLoginModal';
import CustomButton from '../forms/CustomButton';


const LoginModal = () => {
    const loginModal = useLoginModal();

    const content = (
        <>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 h-[54px] border border-gray-300 rounded-xl"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                The email or password you entered is incorrect. Please try again.
            </div>
            <CustomButton label="Submit" onClick={() => console.log("clicked button")} />
    
          </form>
        </>
      );


    return (
       <Modal isOpen={loginModal.isOpen} close={loginModal.close} label={"Log in"} content={content} />
        
    )
}

export default LoginModal;