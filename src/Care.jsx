import './Care.css';

function Care() {
  return (
    <section id="about" className="care-section">
      <div className="care-container">
        
        {/* Header Section */}
        <header className="care-header">
          <h1>Our Care & Values</h1>
          <p className="care-lead-text">
            For over 30 years, Mountlake Adult Family Home has provided high-quality, compassionate care to residents with diverse needs.
            We tailor our specialized care plans to each individual—ensuring their health is closely monitored while supporting 
            their unique lifestyle, independence, and daily comfort.
          </p>
        </header>

    
        {/* Pilot Program Callout */}
        <div className="care-pilot-box">
          <h2>Washington State Pilot Program</h2>
          <p>
            Through many years of great service and specialized care, Mountlake AFH has been hand-selected and chosen by 
            the State of Washington to join pilot program. These programs allow for further specialized care plans to help 
            us reach our goal of supporting our clients' dreams and independent living. Before pilot programs, we helped 5 people achieve their goals. After the
            pilot program, that number has doubled. 
          </p>
        </div>
        {/* Pilot Program Callout */}
        <div className="care-pilot-box">
          <h2>Meaningfulday Program</h2>
          <p>
            Mountlake AFH helped start and run the meaningful day program funded by the state of Washington to help clients be more involved in the community to reduce behavioral issues. 
            Our impact through the program was successsful helping at least 5 clients get more involved in activities while maintaining good behavior. 
          </p>
        </div>

        {/* Specialized Experience */}
        <div className="care-block">
          <h2>Specialized Care Experience</h2>
          <p className="care-block-desc">
            Our team has extensive experience working with developmental disability (DD) clients with:
          </p>
          <div className="care-tags-grid">
            <div className="care-tag">Autism Spectrum</div>
            <div className="care-tag">Down Syndrome</div>
            <div className="care-tag">Schizophrenia & Behavioral Health</div>
            <div className="care-tag">Developmental Disabilities (DDA)</div>
            <div className="care-tag">Mobility & Physical Assistance Needs</div>
            <div className="care-tag">Individualized Specialized Care</div>
          </div>
        </div>

        {/* ADL and IADL Support */}
        <div className="care-block">
          <h2>Daily Living & Life Skills (ADLs & IADLs)</h2>
          <p className="care-block-desc">
            We help assist clients and teach essential daily skills to promote confidence and independence:
          </p>
          <div className="care-skills-container">
            <div className="care-skill-card">
              <h3>Cooking & Nutrition</h3>
              <ul>
                <li>Cooking & meal preparation</li>
                <li>Eating & mealtime support</li>
                <li>Dietary accommodations</li>
              </ul>
            </div>

            <div className="care-skill-card">
              <h3>Personal Hygiene</h3>
              <ul>
                <li>Showering & bathing assistance</li>
                <li>Denture & oral care</li>
                <li>Toileting assistance</li>
                <li>Dressing & personal grooming</li>
              </ul>
            </div>

            <div className="care-skill-card">
              <h3>Health & Medication</h3>
              <ul>
                <li>Medication administration & tracking</li>
                <li>Daily health & vitals monitoring</li>
                <li>Healthcare provider coordination</li>
              </ul>
            </div>

            <div className="care-skill-card">
              <h3>Household & Communication</h3>
              <ul>
                <li>Washing clothes & laundry</li>
                <li>Housekeeping & room cleaning</li>
                <li>Grocery shopping & errands</li>
                <li>Using phones & communicative devices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Special Activities and Events */}
        <div className="care-block">
          <h2>Special Activities & Community Outings</h2>
          <p className="care-block-desc">
            We believe in staying active, connected, and engaged. Some of our outings and events include:
          </p>
          <div className="care-activities-wrap">
            <span className="care-activity-pill">Concerts</span>
            <span className="care-activity-pill">Road Trips</span>
            <span className="care-activity-pill">Ferry Trips</span>
            <span className="care-activity-pill">Disneyland</span>
            <span className="care-activity-pill">Texas Road Trips</span>
            <span className="care-activity-pill">Animal Petting Zoo</span>
            <span className="care-activity-pill">Gardening</span>
            <span className="care-activity-pill">Bowling</span>
            <span className="care-activity-pill">Horseback Riding</span>
            <span className="care-activity-pill">Dance Lessons</span>
            <span className="care-activity-pill">Singing Lessons</span>
            <span className="care-activity-pill">Easter Egg Hunt</span>
             <span className="care-activity-pill">Christmas Present Opening</span>
          </div>
        </div>

        {/* Contact / Tour Call to Action */}
        <div className="care-cta">
          <h2>Schedule a Tour of Mountlake AFH</h2>
          <p>
            We welcome families to visit our home, meet our staff, and see firsthand how we support our residents every day.
          </p>
          <div className="care-cta-buttons">
            <a href="contact" className="btn-cta-primary">Schedule a Tour</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Care;