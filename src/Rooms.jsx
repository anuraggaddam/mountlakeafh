import './Rooms.css';

function Rooms() {
  const amenities = [
     {
      title: "Community",
      description: "We are located very close to the police station, library, grocery stores, freeway, mass transit and Snohomish County/King County Bus Routes",
      image: "https://via.placeholder.com/600x400?text=Outdoor+Seating",
    },
    {
      title: "Bedrooms",
      description: "Description",
      image: "https://via.placeholder.com/600x400?text=Bedroom",
    },
    {
      title: "Bathroom",
      description: "Our bathrooms are fully equipped with safety features, including grab bars and non-slip surfaces, ensuring a safe and comfortable experience for all residents.",
      image: "https://via.placeholder.com/600x400?text=Bathroom",
    },
    {
      title: "Kitchen",
      description: ".",
      image: "https://via.placeholder.com/600x400?text=Kitchen",
    },
    {
      title: "Dining Room and Table",
      description: "",
      image: "https://via.placeholder.com/600x400?text=Dining+Table",
    },
    {
      title: "Garden",
      description: "",
      image: "https://via.placeholder.com/600x400?text=Garden",
    },
    {
      title: "Outdoor Seating",
      description: "",
      image: "https://via.placeholder.com/600x400?text=Outdoor+Seating",
    },
  ];

  return (
    <div className="rooms-container">
      <header className="rooms-header">
        <h1>Our Home & Amenities</h1>
      </header>

      <div className="amenities-list">
        {amenities.map((amenity, index) => (
          <section key={index} className={`amenity-section ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="amenity-image-wrapper">
              {/* Replace the src with actual images from your assets folder */}
              <img src={amenity.image} alt={amenity.title} className="amenity-image" />
            </div>
            <div className="amenity-text">
              <h2>{amenity.title}</h2>
              <p>{amenity.description}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
