const NewContactMessage = () => {

  const submitButton = () => {
    alert ("Message Submitted Successfully!")
  }

  return (
    <section className="newcontactmessage-container">
      <h2>Leave a new contact message</h2>
      <form className="newcontactmessage-form">
        <input className="newcontactmessage-input" type="text" name="name" id="name" placeholder="Type your message here" />
      </form>

      <button onClick={submitButton} >SUBMIT</button>
      
    </section>
  );
};

export default NewContactMessage;
