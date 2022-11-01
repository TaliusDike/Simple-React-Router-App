import { Outlet, Link } from "react-router-dom";

const Contact = () => {
  return (
    
    <section className="contactpage-container">
       
       

      <h2>
        Want to speak with the admin of this page? <br />
        Shoot an email to ebeledikea@gmail.com; <br /> you'll get a response as
        soon as possible.
      </h2>
      
      <Link to="/contact/new" className="contactpage-link">CONTACT US</Link>

    </section>
  );
};

export default Contact;
