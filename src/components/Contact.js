import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send notification email to you (al.fuguo@gmail.com)
      const notificationResult = await emailjs.send(
        "service_k4yte2m", // Your EmailJS service ID
        "template_xasp5c8", // Your notification template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "jqWuV_uALMd5ibUvq" // Your EmailJS public key
      );

      // Send auto-reply to the person who contacted you
      const autoReplyResult = await emailjs.send(
        "service_k4yte2m", // Your EmailJS service ID
        "template_nv9fro4", // Your auto-reply template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "jqWuV_uALMd5ibUvq" // Your EmailJS public key
      );

      // Email sent successfully
      alert("Message sent successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      console.error("Error details:", error.text || error.message);
      alert("Failed to send message. Please check the console for details.");
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
        <div className="row" style={{ display: "flex", alignItems: "stretch" }}>
          <div className="col-lg-5 col-xl-4 m-15px-tb" style={{ display: "flex" }}>
            <div className="contact-info" style={{ 
              display: "flex", 
              flexDirection: "column", 
              height: "100%", 
              padding: "30px"
            }}>
              <h4 style={{ 
                color: "#2fbf71", 
                marginBottom: "20px",
                fontSize: "24px",
                fontWeight: "600"
              }}>
                Let&apos;s work together!
              </h4>
              <p style={{ 
                color: "#ccc", 
                lineHeight: "1.6", 
                marginBottom: "30px" 
              }}>
                I&apos;m always interested in new opportunities and exciting
                projects. Whether you have a project in mind or just want to
                chat about technology, feel free to reach out!
              </p>
              <div className="contact-item" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <div className="contact-icon" style={{ 
                  marginRight: "15px",
                  color: "#2fbf71",
                  fontSize: "18px"
                }}>
                  <i className="ti-location-pin" />
                </div>
                <div className="contact-text">
                  <h6 style={{ 
                    margin: "0", 
                    display: "inline", 
                    marginRight: "10px",
                    color: "#fff",
                    fontWeight: "600"
                  }}>
                    Address:
                  </h6>
                  <span style={{ color: "#ccc" }}>College Park, Maryland, United States</span>
                </div>
              </div>
              <div className="contact-item" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <div className="contact-icon" style={{ 
                  marginRight: "15px",
                  color: "#2fbf71",
                  fontSize: "18px"
                }}>
                  <i className="ti-mobile" />
                </div>
                <div className="contact-text">
                  <h6 style={{ 
                    margin: "0", 
                    display: "inline", 
                    marginRight: "10px",
                    color: "#fff",
                    fontWeight: "600"
                  }}>
                    Phone:
                  </h6>
                  <span style={{ color: "#ccc" }}>+1 (703) 894-8202</span>
                </div>
              </div>
              <div className="contact-item" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <div className="contact-icon" style={{ 
                  marginRight: "15px",
                  color: "#2fbf71",
                  fontSize: "18px"
                }}>
                  <i className="ti-email" />
                </div>
                <div className="contact-text">
                  <h6 style={{ 
                    margin: "0", 
                    display: "inline", 
                    marginRight: "10px",
                    color: "#fff",
                    fontWeight: "600"
                  }}>
                    Email:
                  </h6>
                  <span style={{ color: "#ccc" }}>al.fuguo@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-xl-8 m-15px-tb" style={{ display: "flex" }}>
            <div className="contact-form" style={{ 
              display: "flex", 
              flexDirection: "column", 
              height: "100%", 
              padding: "30px", 
              width: "100%"
            }}>
              <h4 style={{ 
                color: "#2fbf71", 
                marginBottom: "20px",
                fontSize: "24px",
                fontWeight: "600"
              }}>
                Contact
              </h4>
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
                      <button className="px-btn px-btn-theme" type="submit">
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
