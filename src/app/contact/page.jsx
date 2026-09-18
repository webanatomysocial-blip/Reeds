import Image from "next/image";
import InnerBanner from "../(Components)/InnerBanner";

import TickerTape from "../(Components)/(Home)/TickerTape";
import CTA from "../(Components)/CTA";
import ContactForm from "../(Components)/Contact/ContactForm";
import Loop from "../(Components)/(Home)/Loop";
const Contact = () => {   
  return (
    <>
      <InnerBanner 
        bgImage="/assets/Banner_Assets/contact-2.webp"
        bgPosition="center"
        eyebrowText="Contact"
        title="Reach Out. 
We’re Here Always"
        desc="Have questions, ideas, or need support? Connect with us we’re ready to listen & help."
      />
   <ContactForm/>
      <TickerTape />
      <CTA />
      <Loop />

    </>
    
  );
};

export default Contact;
