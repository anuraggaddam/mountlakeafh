import { Link } from 'react-router-dom';
import './Home.css';
import frontImg from './assets/front.jpg';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Mountlake Adult Family Home</h1>
          <p>
            Providing high quality care for your loved one since 1996.
          </p>
        </div>
        <div className="house-image-placeholder">
          <img 
            src={frontImg} 
            alt="Mountlake Adult Family Home" 
            className="house-img" 
          />
        </div>
      </section>

     
      {/* Contact CTAs */}
      <section className="home-cta-section">
        <div className="home-cta-content">
          <h2>Ready to Learn More?</h2>
          <div className="home-cta-buttons">
            <Link to="/care" className="btn-primary">Check out our care</Link>
             <Link to="/ourhome" className="btn-primary">View Home and Ammenedies</Link>
            <Link to="/contact" className="btn-secondary">Contact us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
