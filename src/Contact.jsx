import './Contact.css';

function Contact() {
  return (
    <section className="care-section">
      <div className="care-container">
        
        {/* Header Section */}
        <header className="care-header">
          <h1>Contact Us & Schedule a Tour</h1>
          <p className="care-lead-text">
            We welcome families to visit our home, meet our staff, and see firsthand how we support our residents every day. Reach out to schedule a tour or ask any questions about our specialized care.
          </p>
        </header>

        {/* Contact Information Block */}
        <div className="care-block contact-info-block">
   
          
          <div className="contact-details-grid">
            <div className="care-skill-card">
              <h3>Phone</h3>
              <ul>
                <li>425-772-5316</li>
                <p>Call or text Shirmela</p>
                  <li>425-672-5795</li>
                <p>House phone</p>
              </ul>
            </div>

            <div className="care-skill-card">
              <h3>Email</h3>
              <ul>
                <li>MountlakeAFH@hotmail.com</li>
              </ul>
            </div>

            <div className="care-skill-card">
              <h3>Location</h3>
              <ul>
                <li>5709 236th St SW Mountlake Terrace, WA 98043</li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

export default Contact;
