import React from 'react';
import Icons from './Icons';
import email from './email.svg';


function Contact(){
    return (
        <div id="main-div">
        <h1>Contact Page</h1>
        <p><img src={email} alt="email" height="50px" width="50px" /></p>
        <form name="contact-form" method="post" netlify>
            <p>
                 <label>
                    <input className="input" type="text" name="name" placeholder="Full name" />
                 </label>
             </p>
             <p>
                 <label> 
                    <input className="input" type="email" name="email" placeholder="E-mail" required />
                </label>
             </p>
                   
            <p>
                 <label>
                     <input className="input" type="phone" name="phone" placeholder="Mobile" optional/>
                 </label>
             </p>
                
             <p>
                 <label>
                     <textarea className="textarea" name="message" height="200px" width="300px" placeholder="Your message"></textarea>
                 </label>
             </p>
             <p>
                 <button type="submit">Send</button>
             </p>
        </form>
        <p id="skills">HTML | CSS | JavaScript | React | NodeJS | Python</p>
        <Icons />

        </div>
    )
       

}

export default Contact;