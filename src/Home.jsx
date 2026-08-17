import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
       <div className="hero-text">
          <h1>Welcome to Mountlake Adult Family Home</h1>
        
        </div>
      {/* Hero / House Picture Spot */}
      <section className="hero-section">
        <div className="house-image-placeholder">
          {/* TODO: Replace src with your actual house image path once you have it in your assets folder */}
          <img 
            src="https://via.placeholder.com/1200x600?text=House+Picture+Goes+Here" 
            alt="Mountlake Adult Family Home" 
            className="house-img" 
          />
        </div>
       
      </section>

      {/* Care Provider Profile */}
      <section className="provider-section">
        <h2>Meet Our Care Provider</h2>
        <div className="provider-profile">
          <div className="provider-image-placeholder">
            {/* TODO: Replace src with actual provider image path */}
            <img 
              src="https://via.placeholder.com/200x200?text=Provider+Photo" 
              alt="Care Provider" 
              className="provider-img" 
            />
          </div>
          <div className="provider-info">
            <h3>Shirmela Gaddam</h3>
         
            <p className="provider-bio">
              Care provider with over 30 years running the business and providing high quality care. 
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTAs */}
      <section className="home-cta-section">
        <div className="home-cta-buttons">
          <Link to="/care" className="btn-primary">Check out our care</Link>
          <Link to="/contact" className="btn-secondary">Contact us</Link>
        </div>
      </section>
    </div>
  )
}

export default Home;
