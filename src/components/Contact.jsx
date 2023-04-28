import React,{useState, useEffect} from "react";

function Contact() {

  const [btnText, setBntText] = useState('Send Message')  



  function sendMail(e) {
    e.preventDefault()

     var params = { 
      name: document.getElementById('name').value,
      email: document.getElementById('email').value, 
      message: document.getElementById('message').value
    } 


    const serviceId = 'service_a4wfbrq'; 
    const templateId = 'template_q3ewkva'; 

    emailjs.send(serviceId, templateId, params).then(reponse => {
      document.getElementById("name").value = '';
      document.getElementById("email").value = '';
      document.getElementById("message").value = '';

      setBntText('Sending...',);

      
      const timer = setTimeout(() => {
         setBntText('Send Message')
        }, 3000); 
    
          
      return () => clearTimeout(timer);

    })  


    
    

  } 

  return (
    <div id="Contact" className="bg-gray-100 pb-20 lg:ml-60">
      <div className="mb-36 flex justify-center">
        <h2 className="text-9xl uppercase opacity-5 absolute bg-text">Contact</h2>
        <p className="text-5xl capitalize relative top-10 font-bold border-b-2 border-blue-500 text-x">
          Get in Touch
        </p>
      </div>
      <div className="flex flex-row-reverse justify-center md:w-full">
        <form className="flex flex-col gap-4 md:w-4/5 items-center" action="" method="POST">
        <h2 className="font-bold text-3xl">SEND US A NOTE</h2>
          <input className="p-4 w-96  md:w-4/5 rounded-lg" id="name" type="text" placeholder="Name" name="name" required />
          <input className="p-4 w-96 md:w-4/5 rounded-lg" id="email" type="email" placeholder="Email" name="email" required/>
          <textarea className="p-4 rounded-lg w-96 mb-4 md:w-4/5"
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Tell us more about your needs..." required></textarea>
            <input className="text-white py-4 px-7
           bg-blue-400 rounded-full text-white-500 font-bold hover:bg-blue-500 shadow-2xl transition-all delay-75 md:w-96 " type="submit" onClick={sendMail} value={btnText}/> 
        </form>
      </div> 
    </div>
  );
}

export default Contact;
