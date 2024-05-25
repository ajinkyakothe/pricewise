"use client";

import React, { FormEvent, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { addUserEmailToProduct } from '@/lib/action';

interface Props{
  productId:string
}


const Modal = ({productId}:Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting,setIsSubmitting]=useState(false);
  const [email,setEmail]=useState('');
 
  const handleSubmit=async(e:FormEvent<HTMLFormElement>)=>{
     e.preventDefault();
     setIsSubmitting(true);

     await addUserEmailToProduct(productId,email);

     setIsSubmitting(false);
     setEmail('')
     closeModal()



  }


  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button type="button" className="btn" onClick={openModal}>
        Track
      </button>

      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as="div" onClose={closeModal} className="fixed inset-0 overflow-y-auto">
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as="div"
              className="fixed inset-0 bg-black bg-opacity-30"
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            />

            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>

            <Transition.Child
              as="div"
              className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <div className="p-3 border border-gray-200 rounded-10">
                    <Image
                      src="/assets/icons/logo.svg"
                      alt="logo"
                      width={28}
                      height={28}
                    />
                  </div>
                   <br></br>

                
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600"
                    onClick={closeModal}
                  >
                    <span className="sr-only">Close</span>
                    &times;
                  </button>
              
                </div>
                <h4 className='dialog-head_text'>Stay updated with product pricing alerts right in your inbox!</h4>
                   <p className='text-sm text-gray-600 mt-2'>Never miss a bargain again with our timely alerts!</p>

               <form action="" className='flex flex-col mt-5' onSubmit={handleSubmit}>
                <label htmlFor='email' className='text-sm font-medium text-gray-700'>
                   Email address
                </label>
                <div className='dialog-input_container'>
                  <Image 
                  src="/assets/icons/mail.svg"
                  alt='mail'
                  width={18}
                  height={18}
                  />
                  
                  <input
                  required
                  type='email'
                  id='email'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder='Enter your email address'
                  className='dialog-input'                  
                  
                  />
                </div>
                  <button type='submit' className='dialog-btn'>
                   {isSubmitting ? 'Submitting..' : 'Track'}
                    </button>

               </form>
   
 

              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
