import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [meaasage, setMeaasage] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <section className='contact'>
      <form>
        <h1>Contact us</h1>
        <div>
          <label>Name</label>
          <input type='text'
          value={name}
          onChange={(e) =>setName(e.target.value)}/>
        </div>

        <div>
          <label>Email</label>
          <input type='email'
          value={email}
          onChange={(e) =>setEmail(e.target.value)}/>
        </div>

        <div>
          <label>Message</label>
          <input type='text'
          value={meaasage}
          onChange={(e) =>setMeaasage(e.target.value)}
          />
        </div>

        <div>
          <button type='submit' disabled={loading}
            style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px"}}
          >
            {loading && <ClipLoader size={20} color="white"/>}
            Send Message
          </button>
        </div>
      </form>
    </section>
  )
}

export default Contact
