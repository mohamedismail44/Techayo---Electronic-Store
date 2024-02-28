import React, { useState } from "react";

export default function Contact() {
  const [User, setUser] = useState({
    Name: "",
    email: "",
    subject: "",
    Message: "",
  });
  let values, names;
  const data = (e) => {
    values = e.target.value;
    names = e.target.name;
    setUser({ ...User, [names]: values });
  };
console.log(User);
  const send = async (e) => {
    const [Name, email, subject, Message] = User;
    e.preventDefault();
    const option = {
      method: "POST",
      headers: { "Content-Type": "aplication/json" },
      body: JSON.stringify({ Name, email, subject, Message }),
    };
    const send = await fetch (
      "https://react-e-commerce-2f0b6-default-rtdb.firebaseio.com/Message.json",
      option
    );
    if (send) {
      alert("Message Sent");
    } else {
      alert("Erorr Occoured Message Sent Failed");
    }
  };
  return (
    <>
      <section className="conatact">
        <div className="c-container">
          <h2>#contact us</h2>
          <form method="POST">
            <div className="box">
              <h4>name</h4>
              <input
                type="text"
                placeholder="Name"
                name="Name"
                value={User.Name}
                onChange={data}
              />
            </div>
            <div className="box">
              <h4>E-mail</h4>
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                value={User.email}
                onChange={data}
              />
            </div>
            <div className="box">
              <h4>Subject</h4>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={User.subject}
                onChange={data}
              />
            </div>
            <div className="box">
              <h4>Message</h4>
              <textarea
                placeholder="Message !"
                name="Message"
                value={User.Message}
                onChange={data}
              ></textarea>
            </div>
            <button type="submit" onClick={send}>
              send
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
