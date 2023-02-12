import React, { useRef,useEffect } from 'react';
import emailjs from '@emailjs/browser';
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
    document.getElementById("contactfrom").reset();
  };
  
  useEffect(()=>{
    AOS.init({delay:200});
  },[])
  return (
    <div name="Contact"  style={isDarkMode===true?{background:"#000006",color:"white"}:{backgroundColor:"#00BFFF",color:"black"}}>
      <p data-aos="fade-right" className="text-5xl text-center mb-10 hover:underline hover:text-blue-900 hover:underline-offset-8" >
            Contact
          </p>
  <form ref={form} data-aos="fade-down" class=" p-6 flex-col justify-center items-center w-[70%]  border-4 m-auto rounded-lg shadow-md" onSubmit={sendEmail}>
    <div class="mb-4">
      <label class="block text-gray-700 font-medium mb-2" for="user_name">
        Name
      </label>
      <input 
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
        type="text" 
        name="user_name" 
        id="user_name" 
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 font-medium mb-2" for="user_email">
        Email
      </label>
      <input 
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
        type="email" 
        name="user_email" 
        id="user_email" 
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 font-medium mb-2" for="message">
        Message
      </label>
      <textarea 
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
        name="message" 
        id="message"
      />
    </div>
    <div class="flex items-center justify-end">
      <button 
        class="bg-purple-500 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
        type="submit"
      >
        Send
      </button>
    </div>
  </form>
</div>

  );
};

export default Contact;