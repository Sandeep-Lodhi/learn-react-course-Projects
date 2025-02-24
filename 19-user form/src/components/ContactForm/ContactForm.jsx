import { useState } from "react";
import Button from "../Button/Button.jsx";
import styles from "./Contact.module.css";
import { BiSolidMessageDetail } from "react-icons/bi";
import {BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  
  const [name ,setName] = useState("sandeep");
  const [email ,setEmail] = useState("sandeep@gmail.com");
  const [text ,setText] = useState("Hello and welcome on my page.");


  const onSubmit = (event) =>{
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    console.log(name,email,text);
    
  }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<BiSolidMessageDetail fontSize="24px" />}
          />
          <Button
            text="VIA CALL"
            icon={<BsFillTelephoneFill fontSize="24px" />}
          />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>  
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea  name="text" rows="8" />
          </div>
          <div 
          style= {{
            
            display:"flex",
            justifyContent:"end",
          }
          }>
          <Button text="SUBMIT BUTTON"/>
          </div>
          <div>
           { name + ",  " + email + ",  " + text }
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
