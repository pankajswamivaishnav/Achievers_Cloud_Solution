import React, { useState } from "react";
import "./css/contactform.css";
// axios backend integration
import axios from "axios";
// Define the URL of your backend API
const backendURL = "https://achiever-cloud-it-solution.onrender.com";
// const ContactForm = () => {
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const inputEvent = (event) => {
//     const { name, value } = event.target;
//     setData((preVal) => {
//       return {
//         ...preVal,
//         [name]: value,
//       };
//     });
//   };

//   const formSubmit = async (e) => {
//     // e.preventDefault();
//     // Prepare the data to send to the backend
//     const formData = {
//       name: data.name,
//       email: data.email,
//       subject: data.subject,
//       message: data.message,
//     };

//     // Send a POST request to the backend
//     try {
//       alert("Form submitted successfully!");
//       await axios.post(`${backendURL}/contact`, formData);
//     } catch (e) {
//       console.log("not send data", e);
//     }
//   };

//   return (
//     <section className="costum-contact-form">
//       <div className="container-fluid">
//         <div className="container">
//           {/* Heading */}
//           <div className="costum-contactform-row1">
//             <h1 className="contact-form-map-heading">Find Us On Google Maps</h1>
//           </div>
//           {/* Embedded Map */}
//           <div className="row costum-contactform-row2">
//             <div className="col-xl-12">
//               <iframe
//                 title="achiever Cloud IT Solution"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2975098075817!2d75.77171609999999!3d26.894051599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a404a63f8f%3A0x57d4cbafe7d1f79f!2sFantasy%20Khiladi!5e0!3m2!1sen!2sin!4v1698308014834!5m2!1sen!2sin"
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="acs-map"
//               />
//             </div>
//           </div>
//           {/* Form */}
//           <div className="row costum-contact-row3">
//             <h1 className="text-center py-5 contact-form-heading">
//               Have Any Questions ? Let's Answer Them
//             </h1>
//             <form method="post" onSubmit={formSubmit} id="contact-form">
//               <div className="row">
//                 <div className="col-xl-6 costum-form-input">
//                   <label htmlFor="name" className="form-label">
//                     Name
//                   </label>
//                   <input
//                     placeholder="Enter your name"
//                     type="text"
//                     id="name"
//                     name="name"
//                     autoComplete="off"
//                     onChange={inputEvent}
//                     value={data.value}
//                     required
//                   />
//                 </div>
//                 <div className="col-xl-6 costum-form-input">
//                   <label htmlFor="email" className="form-label">
//                     E-Mail
//                   </label>
//                   <input
//                     placeholder="Enter your email address"
//                     type="email"
//                     id="email"
//                     name="email"
//                     autocomplete="off"
//                     onChange={inputEvent}
//                     value={data.value}
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-xl-12 costum-form-input">
//                   <label htmlFor="subject" className="form-label">
//                     Subject
//                   </label>
//                   <input
//                     placeholder="Enter subject"
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     autocomplete="off"
//                     onChange={inputEvent}
//                     value={data.value}
//                     required
//                   />
//                 </div>
//                 <div className="col-xl-12 costum-form-input">
//                   <label htmlFor="message">Your Message</label>
//                   <textarea
//                     placeholder="Your Message"
//                     name="message"
//                     id="message"
//                     cols="30"
//                     rows="10"
//                     onChange={inputEvent}
//                     value={data.value}
//                     required
//                   ></textarea>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="costum-btn contact-form-submit-btn"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const inputEvent = (event) => {
    setName(event.target.value);
  };

  const inputEvent2 = (event) => {
    setEmail(event.target.value);
  };
  const inputEvent3 = (event) => {
    setSubject(event.target.value);
  };
  const inputEvent4 = (event) => {
    setMessage(event.target.value);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    // Prepare the data to send to the backend
    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    // Send a POST request to the backend
    try {
      alert("Form submitted successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      await axios.post(`${backendURL}/contact`, formData);
    } catch (e) {
      console.log("not send data", e);
    }
  };

  return (
    <section className="costum-contact-form">
      <div className="container-fluid">
        <div className="container">
          {/* Heading */}
          <div className="costum-contactform-row1">
            <h1 className="contact-form-map-heading">Find Us On Google Maps</h1>
          </div>
          {/* Embedded Map */}
          <div className="row costum-contactform-row2">
            <div className="col-xl-12">
              <iframe
                title="achiever Cloud IT Solution"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2975098075817!2d75.77171609999999!3d26.894051599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a404a63f8f%3A0x57d4cbafe7d1f79f!2sFantasy%20Khiladi!5e0!3m2!1sen!2sin!4v1698308014834!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="acs-map"
              />
            </div>
          </div>
          {/* Form */}
          <div className="row costum-contact-row3">
            <h1 className="text-center py-5 contact-form-heading">
              Have Any Questions ? Let's Answer Them
            </h1>
            <form method="post" onSubmit={formSubmit} id="contact-form">
              <div className="row">
                <div className="col-xl-6 costum-form-input">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    placeholder="Enter your name"
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="off"
                    onChange={inputEvent}
                    value={name}
                    required
                  />
                </div>
                <div className="col-xl-6 costum-form-input">
                  <label htmlFor="email" className="form-label">
                    E-Mail
                  </label>
                  <input
                    placeholder="Enter your email address"
                    type="email"
                    id="email"
                    name="email"
                    autocomplete="off"
                    onChange={inputEvent2}
                    value={email}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 costum-form-input">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    placeholder="Enter subject"
                    type="text"
                    id="subject"
                    name="subject"
                    autocomplete="off"
                    onChange={inputEvent3}
                    value={subject}
                    required
                  />
                </div>
                <div className="col-xl-12 costum-form-input">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    placeholder="Your Message"
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    onChange={inputEvent4}
                    value={message}
                    required
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="costum-btn contact-form-submit-btn"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
