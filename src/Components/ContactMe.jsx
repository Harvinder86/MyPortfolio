import React, { useRef } from 'react';
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_yqnz5x8", 'template_a7h8468', form.current, 'iYVACwAoWXYY3LJC8')
      .then((result) => {
          console.log(result.text);
          alert('Email sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send email. Please try again.');
      });
  };

  return (
    <>
      <div className='h-[100vh] w-[98.8vw]  bg-[url("src/assets/bg4.jpg")] backdrop-blur-md bg-cover relative'>
        <div className='absolute top-56 left-52'>
          <h1 className='text-4xl font-semibold text-white'>CONTACT ME</h1>
          <h3 className='text-2xl font-semibold text-white mt-8 flex items-center'>
            <MdOutlinePhoneInTalk className='w-6 h-6 mr-2' />Phone No.
          </h3>
          <p className='text-lg text-white'>+91 8699525447</p>
          <h3 className='text-2xl font-semibold text-white mt-8 flex items-center'>
            <SlLocationPin className='w-6 h-6 mr-2' />Location
          </h3>
          <p className='text-lg text-white'>
            Pocket 5, Mayur Vihar, Delhi, 110091.
          </p>
        </div>
        <div className='text-white absolute top-40 right-40'>
          <form className="footer" ref={form} onSubmit={sendEmail}>
            <label>
              NAME <br />
              <input type="text" name="user_name" placeholder="Your Name..." className="fname bg-transparent outline-none border-b-2 w-[350px]" required />
            </label>
            <br /><br />
            <label>
              EMAIL <br />
              <input type="email" name="user_email" placeholder="Your Email..." className="email bg-transparent outline-none border-b-2 w-[350px]" required />
            </label>
            <br /><br />
            <label>
              SUBJECT <br />
              <input type="text" name="subject" placeholder="Write The Subject..." className="subject bg-transparent outline-none border-b-2 w-[350px]" required />
            </label>
            <br /><br />
            <label>
              YOUR MESSAGE
              <br />
              <textarea
                name="message"
                cols="24"
                rows="5"
                placeholder="Write Your Message here!!!!"
                className="bg-transparent border-b-2 w-[350px] outline-none"
                required
              ></textarea>
            </label>
            <br /><br />
            <button type="submit" className='w-[360px]   rounded-xl pl-5 pr-5 pb-1 border-solid border-2 border-black text-white bg-amber-600 hover:shadow-black'>
              SUBMIT
            </button>
          </form>
        </div>
        <div className="footer-nav w-full bg-black text-white fixed bottom-0 left-0 flex justify-between items-center p-4">
          <div className="flex items-center">
            <span className="text-lg">Gmail: itshannusingh13@gmail.com</span>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100009064766824&mibextid=LQQJ4d" target='_blank' className="Facebook SocialMedia">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="/" className="Twitter SocialMedia">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.instagram.com/i_harvinder_singh?igsh=djFyNjBvd3V5OG80" target='_blank' className="Instagram SocialMedia">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com/Harvinder86" target='_blank' className="Rss SocialMedia">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="/" className="YouTube SocialMedia">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
