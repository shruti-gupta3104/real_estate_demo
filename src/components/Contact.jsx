import React from "react";
import { toast } from "react-toastify";
import {motion} from "framer-motion";
const Contact = () => {
const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c9231bc4-60fc-4563-82e4-6f220dec3446");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
    // alert("Success");
    toast.success("Message sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("");
    //   alert(data.message);
    toast.error(data.message || "Failed to send message");
    }
  };



  return (


    
    <motion.div
    initial={{ opacity: 0, x:-200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x:0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl fint-bold mb-2">
        Contact
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With us
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        What our clients say about us
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8" >
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 text-left">
            Your Name
            <input  type="text" placeholder="Enter your name" className="border border-gray-300 rounded w-full p-2 mb-4" name='Name'/> 
            </div>
            <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input  type="email" placeholder="Enter your name" className="border border-gray-300 rounded w-full p-2 mb-4" name='Email'/> 
            </div>
        </div>



        <div className="my-6 text-left">
            Message
            <textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-2 resize-none"
            name='Message'> </textarea>
        </div>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-full">
          {result ? result :  "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
