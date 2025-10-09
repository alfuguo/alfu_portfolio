import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send notification email to you (al.fuguo@gmail.com)
      const notificationResult = await emailjs.send(
        'service_k4yte2m', // Your EmailJS service ID
        'template_xasp5c8', // Your notification template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'jqWuV_uALMd5ibUvq' // Your EmailJS public key
      );

      // Send auto-reply to the person who contacted you
      const autoReplyResult = await emailjs.send(
        'service_k4yte2m', // Your EmailJS service ID
        'template_nv9fro4', // Your auto-reply template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'jqWuV_uALMd5ibUvq' // Your EmailJS public key
      );
      
      console.log('Notification email sent:', notificationResult);
      console.log('Auto-reply sent:', autoReplyResult);
      alert('Message sent successfully!');
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      console.error('Error details:', error.text || error.message);
      alert('Failed to send message. Please check the console for details.');
    }
  };

  return (
    <section
      id="contactme"
      data-nav-tooltip="Contact"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Get In Touch</h3>
        </div>
        <div className="row">
          <div className="col-lg-5 col-xl-4 m-15px-tb">
            <div className="contact-info">
              <h4>Let&apos;s work together!</h4>
              <p>
                I&apos;m always interested in new opportunities and exciting projects. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="ti-location-pin" />
                </div>
                <div className="contact-text">
                  <h6>Address</h6>
                  <p>College Park, Maryland, United States</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="ti-mobile" />
                </div>
                <div className="contact-text">
                  <h6>Phone</h6>
                  <p>+1 (703) 894-8202</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="ti-email" />
                </div>
                <div className="contact-text">
                  <h6>Email</h6>
                  <p>al.fuguo@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-xl-8 m-15px-tb">
            <div className="contact-form">
              <h4>Say Something</h4>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="name"
                        placeholder="Name *"
                        className="form-control"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        placeholder="Email *"
                        className="form-control"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        name="subject"
                        placeholder="Subject *"
                        className="form-control"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Your message *"
                        rows={5}
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button
                        className="px-btn px-btn-theme"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;