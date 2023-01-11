import React from 'react';
import '../CSS/Contact.css';
import { ImWhatsapp, ImLinkedin, ImGithub } from "react-icons/im";
import { MdOutlineMail } from "react-icons/md";

export default function ContactPage() {
  return (
    <div className='content'>
      <div className='contact'>
        <h1>Contatos</h1>
        <div className="l1">
          <a href='https://wa.me/5519982210064?text=Olá%20Guilherme,%20tudo%20bem?'
            target='_blank'>
            <ImWhatsapp size={80} color={'#25D366'} />
          </a>
          <a href='https://www.linkedin.com/in/guih1886/' target='_blank'>
            <ImLinkedin size={80} color={'#0077b5'} />
          </a>
          <a href='https://github.com/guih1886' target='_blank'>
            <ImGithub size={80} color={'#fff'} />
          </a>
          <a href='mailto:guilherme_18henrique@yahoo.com.br' target='_blank'>
            <MdOutlineMail size={80} color={'#fff'} />
          </a>
        </div>
      </div>
    </div>
  );
}
