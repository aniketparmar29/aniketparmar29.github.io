import React, { useRef,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {FaPhoneSquareAlt} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
import {MdOutlineEmail,MdEmail} from 'react-icons/md'
import {HiLocationMarker,HiOutlineLocationMarker} from 'react-icons/hi'
import AOS from "aos";

const Contact = ({isDarkMode}) => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_g79n1cv', 'template_097sepi', form.current, 'OcyVq4hagf_isaEFa')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    form.current.reset();
  };
  
  useEffect(()=>{
    AOS.init({delay:200});
  },[])
  return (
    <div name="Contact" className={`pb-10 contact ${isDarkMode ? "bg-black text-white" : "bg-blue-500 text-black"}`}>
  <p data-aos="fade-right" className="text-5xl text-center pt-10 mb-10 hover:underline hover:text-blue-900 hover:underline-offset-8">
    Contact
  </p>
  <div className="max-w-screen-md gap-4 mx-auto grid md:grid-cols-2 items-center">
    <div data-aos="fade-right" className={`mt-5 p-6 w-[80%] lg:w-[100%] m-auto flex-col mb-5 justify-between items-center border-2 rounded-lg shadow-lg ${isDarkMode ? "border-white shadow-cyan-400" : "border-blue-900 shadow-white"}`}>
      <div className={`p-6 flex-col font-extrabold justify-between items-center border-2 rounded-lg shadow-lg ${isDarkMode ? "border-white shadow-red-400" : "border-blue-900 shadow-white"}`}>
        <div className="flex">
          {!isDarkMode && <BsTelephone size={50} className="mt-1 menui12 cursor-pointer" />}
          {isDarkMode && <FaPhoneSquareAlt size={50} className="mt-1 menui12 cursor-pointer text-blue-600" />}
          <p className="text-xl ml-5 mt-3">Phone:</p>
        </div>
        <h3 className="text-xl mt-3">+918160665677</h3>
      </div>
      <div className={`p-6 flex-col font-extrabold justify-between mt-5 items-center border-2 rounded-lg shadow-lg ${isDarkMode ? "border-white shadow-green-400" : "border-blue-900 shadow-white"}`}>
        <div className="flex">
          {!isDarkMode && <MdOutlineEmail size={50} className="mt-1 menui12 cursor-pointer" />}
          {isDarkMode && <MdEmail size={50} className="mt-1 menui12 cursor-pointer text-blue-600" />}
          <p className="text-xl ml-5 mt-4">Mail:</p>
        </div>
        <h3 className="text-sm lg:text-xl mt-3">aniketparmar068@gmail.com</h3>
      </div>
      <div className={`p-6 flex-col font-extrabold justify-between mt-5 items-center border-2 rounded-lg shadow-lg ${isDarkMode ? "border-white shadow-blue-400" : "border-blue-900 shadow-white"}`}>
        <div className="flex">
          {!isDarkMode && <HiOutlineLocationMarker size={50} className="mt-1 menui12 cursor-pointer" />}
          {isDarkMode && <HiLocationMarker size={50} className="mt-1 menui12 cursor-pointer text-blue-600" />}
          <p className="text-xl ml-5 mt-4">Address:</p>
        </div>
        <h3 className="text-xl mt-3">Lathidad,Gujarat</h3>
      </div>
    </div>
  <form ref={form} data-aos="fade-right" className={`pb-12 h-[33rem] p-6 flex-col justify-center items-center w-[80%] ${isDarkMode===true?"border-white shadow-cyan-400":"border-blue-900 shadow-white"} border-4 m-auto rounded-lg shadow-lg`} onSubmit={sendEmail}>
    <h1 className='text-center font-bold border-2 p-6 mb-10 text-xl rounded-xl hover:bg-white hover:text-black'>Contact Form</h1>
    <div className="mb-4">
      <label className="block  font-medium mb-2" htmfor="user_name">
        Name
      </label>
      <input 
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
        type="text" 
        name="user_name" 
        id="user_name" 
      />
    </div>
    <div className="mb-4">
      <label className="block font-medium mb-2" htmfor="user_email">
        Email
      </label>
      <input 
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
        type="email" 
        name="user_email" 
        id="user_email" 
        />
    </div>
    <div className="mb-4">
      <label className="block  font-medium mb-2" htmfor="message">
        Message
      </label>
      <textarea 
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
        name="message" 
        id="message"
        />
    </div>
    <div className="flex items-center justify-end">
      <button 
        className="bg-blue-400 hover:bg-blue-700 text-white font-medium py-2 w-full mt-5 text-center rounded focus:outline-none focus:shadow-outline" 
        type="submit"
        >
        Send
      </button>
    </div>
  </form>
 </div>
</div>

  );
};

export default Contact;