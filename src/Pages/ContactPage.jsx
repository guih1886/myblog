import React from 'react'
import '../CSS/Contact.css'
import { ImWhatsapp } from "react-icons/im";

export default function ContactPage() {
  return (
    <div className='content'>
      <div className='contact'>
        <div className="contact-info">
          <div><ImWhatsapp color='green' /></div>
          <div>Envie-me uma mensagem no WhatsApp!</div>
        </div>
      </div>
    </div>
  )
}
