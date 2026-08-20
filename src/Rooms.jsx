import './Rooms.css';
import bedroomImg from './assets/bedroom.jpg';
import bathroomImg from './assets/bathroom.jpg';
import diningLivingImg from './assets/diningliving.jpg';
import gardenImg from './assets/garden.jpg';
import patioImg from './assets/patio.jpg';

function Rooms() {
  const amenities = [
     {
      title: "Community",
      description: "Mountlake AFH is in the proximity of the library, police station, feeway, as well as other grocery stores. Public transportation such as community transit, king county and the light rail are also closely available for client. At Mountlake AFH, we are partnered with Dart community services to provide safe transportation at an efficient price.",
      image: "https://via.placeholder.com/800x600?text=Outdoor+Seating",
    },
    {
      title: "Bedrooms",
      description: "Client gets their personal private space to sleep and store belongings. Clients can also decorate their room as desired to make themselves feel at home. (Empty Room shown)",
      image: bedroomImg,
    },
    {
      title: "Bathroom",
      description: "We offer a bathroom with a non slip shower stall along with grab bars to help with client mobilty. Client also has access to a washer and drier for laundry.",
      image: bathroomImg,
    },
   
    {
      title: "Living Room and Dining Room",
      description: "Clients have access to a dining room to eat food as well as a living room if they have guests over.",
      image: diningLivingImg,
    },
    {
      title: "Garden",
      description: "Fresh fruits and vegtables are available and home grown in the garden. ",
      image: gardenImg,
    },
    {
      title: "Patio",
      description: "Clients can enjoy the beautiful day outside on our patio. The patio is also used for special events and occasions and has a patio heater for the Washington weather.",
      image: patioImg,
    },
     {
      title: "Kitchen",
      description: "This is where meals are prepped by provider and staff or by clients if they wish to cook. Clients have access to the fridge if they wish to store food in there.",
      image: "https://via.placeholder.com/800x600?text=Kitchen",
    },
     {
      title: "Other Ammendeties",
      description: "At Mountlake AFH, we provide high speed wifi, subscription TV services, transportation. We partnered with Star Hair and Nails salon in Edmonds to provide the clients with grooming as needed. We transport and assist clients with medical and dental appointments.",
      
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
