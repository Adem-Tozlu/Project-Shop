import React from 'react'
import { useState } from 'react'

function Contact() {
const [input, setInput] =  useState({ name: "",password:"", email: "",message:"" });
console.log(input);
function handleChange(event) {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value })
  }


const [submit, setSubmit] = useState(true)


function handleSubmit(e) {

    e.preventDefault();
    
    if(input.name.toLowerCase()==="adem"&&input.password.toLowerCase()==="tozlu"&&input.message.length>5&&input.email.toLowerCase()==="adem@project.de")
        {
            setSubmit(false)
        }else if(input.message.length<5){
           alert("Die Nachricht sollte mindestens 5 zeichen lang sein")
        }if(input.password !=="Tozlu"){
            alert("Ihr Passwort ist falsch")
        }
}


console.log(input);

return (
    <main >
        {submit ? (
            <form onSubmit={handleSubmit} className='form'>
                <h1>Login</h1>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={input.name} onChange={handleChange} />
                
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={input.password} onChange={handleChange} />
                
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={input.email} onChange={handleChange} />
                
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={input.message} onChange={handleChange} />
                
                <button type="submit">Submit</button>
            </form>
        ) : (
            <p className='contact__messages'>Thank you for your message <span>Redirect to home in </span></p>
        )}
    </main>
);
}

export default Contact