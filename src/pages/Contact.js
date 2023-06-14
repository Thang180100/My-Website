import React from 'react';
import '../styles/Contact.css'
import showroom from '../assets/showroom.jpeg'

function Contact() {
    return (
        <div className="contact">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${showroom})` }}
        ></div>

        <div className="rightSide">
          <h1> LIÊN HỆ CHÚNG TÔI</h1>
        
         <form id="contact-form" method="POST">
            <label htmlFor="name">Họ tên</label>
            <input name="name" placeholder="Nhập họ tên đầy đủ của bạn..." type="text" />
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Nhập Email của bạn..." type="email" />
            <label htmlFor="message">Lời nhắn</label>
            <textarea
              rows="6"
              placeholder="Để lại lời nhắn tại đây..."
              name="message"
              required
            ></textarea>
            <button type="submit"> Liên hệ ngay</button>
          </form>

        </div>
      </div>
    );
}

export default Contact;