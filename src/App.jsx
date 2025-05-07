import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cara from './Cara';
import './App.css'
import Footer from './footer';

const toys = [
  {
    index: 1,
    name: 'Frisbee',
    img: "https://media.istockphoto.com/id/171375061/photo/a-red-frisbee-on-a-plain-white-background.jpg?s=1024x1024&w=is&k=20&c=rffLFEeKrXbzUp5D7Bj-w9SgADifDZfdsadyRV-hduM=",
    price: 12.99,
    color: 'Red',
    brand: 'Chewy',
    group: 'Puppy'
  },
  {
    index: 2,
    name: 'Tennis Ball',
    img: "https://media.istockphoto.com/id/1191012773/photo/tennis-ball-isolated-without-shadow-photography.jpg?s=1024x1024&w=is&k=20&c=_4aICFLQbI7tX5s5Ws7CTaMIFbIqsJqWb0dPabdF7D0=",
    price: 4.99,
    color: 'Volt Green',
    brand: 'Chewy',
    group: 'Adult'
  },
  {
    index: 3,
    name: 'Chew Stick',
    img: "https://media.istockphoto.com/id/1217094772/photo/portrait-of-a-cute-labrador-puppy-with-a-stick-in-his-teeth-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=N_Q6j9LXsYAkLR8Gpgy8w1ar6vY2BrEqhiJFHoaqtn0=",
    price: 2.99,
    color: 'Brown',
    brand: 'Good Boy',
    group: 'Adult'
  },
  {
    index: 4,
    name: 'Diapers (10-Pack)',
    img: "https://media.istockphoto.com/id/1211200502/photo/top-view-of-dog-welsh-corgi-pembroke-lies-in-a-special-diaper-spreading-its-paws-back-on-a.jpg?s=1024x1024&w=is&k=20&c=4E5njBTZOMYL3H7XzBLJThs-9smUgyu_ElI2l-_BMbM=",
    price: 10.99,
    color: 'White',
    brand: 'Breeder',
    group: 'Puppy'
  },
  {
    index: 5,
    name: 'Plush Squeaky Toy',
    img: 'https://media.istockphoto.com/id/172667862/photo/a-loved-childs-dog-stuffed-animal.jpg?s=1024x1024&w=is&k=20&c=8tgXUeDiZOvvaK5yVouWNpgwzyDHplyHdJTT7pBor2w=',
    price: 8.49,
    color: 'Brown',
    brand: 'PawParadise',
    group: 'Puppy'
  },
  {
    index: 6,
    name: 'Rope Tug',
    img: 'https://media.istockphoto.com/id/184113489/photo/dog-toy.jpg?s=1024x1024&w=is&k=20&c=fX1K-ClFbjP8bYRGL0rR8Caemc3sfi2HdsLqq_ruXmg=',
    price: 7.99,
    color: 'Multicolor',
    brand: 'TuffChew',
    group: 'Adult'
  },
  {
    index: 7,
    name: 'Puzzle Feeder',
    img: 'https://media.istockphoto.com/id/2189678251/photo/kibble-pet-food-in-slow-feeding-bowl-isolated-on-white-background-slow-feeder-with-kibble-for.jpg?s=1024x1024&w=is&k=20&c=XYHoFa6FiiNR1w8lJ3zt9yMDIefz00oFJoV_3BZMk2U=',
    price: 19.99,
    color: 'Baby Blue',
    brand: 'SmartPet',
    group: 'Adult'
  },
  {
    index: 8,
    name: 'Rubber Bone',
    img: 'https://media.istockphoto.com/id/1199080512/photo/dog-bone-orange-pet-toy-perfect-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=VhVPbNZgtCHME4muNcXU-uF5w7crPhdDqdt3bTioi-E=',
    price: 5.49,
    color: 'Orange',
    brand: 'FetchMaster',
    group: 'Adult'
  },
  {
    index: 9,
    name: 'Ball Launcher',
    img: 'https://media.istockphoto.com/id/1409503318/photo/happy-boy-and-dog-playing-with-automatic-trow-and-fetch-machine-launching-tennis-balls.jpg?s=1024x1024&w=is&k=20&c=3M1DdNRig7Cs3u1WfBIr7cQWDmaT7AtAfmxTZwoBVc4=',
    price: 49.99,
    color: 'White',
    brand: 'PlayFetch',
    group: 'Adult'
  }
]

const dogs = [
  {
    index: 1,
    img: 'https://media.istockphoto.com/id/1231537922/photo/getty.jpg?s=1024x1024&w=is&k=20&c=8ZhIn4Qz6lCH0ny9u99c9BMwlPgkCEqPyUGUmTul7hc=',
    name: 'Gucci',
    age: 2,
    breed: 'Yorkie',
    color: 'Black/Brown'
  },
  {
    index: 2,
    img: 'https://media.istockphoto.com/id/532341534/photo/playful-havanese-puppy-running-with-his-ball.jpg?s=1024x1024&w=is&k=20&c=RcMGCsJzsPTgDjg4kxOcQt2pO94pazj8lkN67FFUdNQ=',
    name: 'Tinker',
    age: 6,
    breed: 'Havanese',
    color: 'Black/White'
  },
  {
    index: 3,
    img: 'https://media.istockphoto.com/id/1568255988/photo/mature-dog.jpg?s=1024x1024&w=is&k=20&c=ng6HoMXFhMNoZpDpeH9WGcsNAh_bapRg39Gt92r6Gzc=',
    name: 'TJ',
    age: 5,
    breed: 'Pitbull',
    color: 'Gray'
  },
  {
    index: 4,
    img: 'https://media.istockphoto.com/id/923062512/photo/dog-with-sand-on-his-nose.jpg?s=1024x1024&w=is&k=20&c=UVYkLLsWBcHK6RtvO1mwyxjX4drbJNqpE1EPnYmOF88=',
    name: 'Scooby-Doo',
    age: 7,
    breed: 'Great Dane',
    color: 'Brown'
  },
  {
    index: 5,
    img: 'https://media.istockphoto.com/id/1167171324/photo/great-dane-puppy.jpg?s=1024x1024&w=is&k=20&c=E-nL0BGlzHSMFv6UgZSlafVzeTpaVd_yNNFQ3W7Vw_Q=',
    name: 'Scrappy-Doo',
    age: 2,
    breed: 'Great Dane',
    color: 'Brown'
  },
  {
    index: 6,
    img: 'https://media.istockphoto.com/id/1130682008/photo/dog-in-a-field-os-flowers.jpg?s=1024x1024&w=is&k=20&c=-OnjBtEAbGELMhrr-9ayxIbs8RRAV7Na-OTGWzaGq_k=',
    name: 'Kyrpto',
    age: 5,
    breed: 'Terrier',
    color: 'White'
  }
]


const ToyCard = ({ toy, onClick }) => {
  return (
    <div className="toys-b" onClick={onClick}>
      <div className="toys-h">
        <img className='toy-img' src={toy.img} />
      </div>
      <div className='toys-d'>
        <h3>{toy.name}</h3>
        <p><em>${toy.price}</em> | {toy.color}</p>
        <p>{toy.brand}</p>
      </div>
    </div>
  )
}


const Card = ({ dog, img, onClick }) => {
  const style = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="bodyy" style={style} onClick={onClick}>
      <div className="head-overlay">
        <h1>{dog.name}</h1>
      </div>
      <div className="main-overlay">
        <h2> Age: {dog.age} | Breed: {dog.breed}</h2>
        <p>Color: {dog.color}</p>
      </div>
    </div>
  )
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [term, setTerm] = useState('');

  return (
    <div className='head-h'>
      <div className="logo">
        <a href='#home'>Dog<span id='eat'>Bark</span></a>
      </div>

      <nav className="navbar w-100 p-4">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </nav>

      {/* Hamburger Icon */}
      <div className='hamburger' onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Desktop Nav */}
      <nav className='nav-bar'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <i className="bi bi-house nav-icon" />
            <a href='#home' className='nav-label'>Home</a>
          </li>
          <li className='nav-item'>
            <i className="bi bi-heart nav-icon" />
            <a href='#adoption' className='nav-label'>Adoption</a>
          </li>
          <li className='nav-item'>
            <i class="bi bi-cart nav-icon"></i>
            <a href='#shopping' className='nav-label'>Shopping</a>
          </li>
          <li className='nav-item'>
            <i className="bi bi-info-circle nav-icon" />
            <a href='about' className='nav-label'>About</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Side Menu */}
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className='hamburger-bar' onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        <ul className='dog-list'>
          <li className='item-list' onClick={() => setIsOpen(false)}><a href='#home'>Home</a></li>
          <li className='item-list' onClick={() => setIsOpen(false)}><a href='#adoption'>Adoption</a></li>
          <li className='item-list' onClick={() => setIsOpen(false)}><a href='#shopping'>Shopping</a></li>
          <li className='item-list' onClick={() => setIsOpen(false)}><a href='#about'>About</a></li>
        </ul>
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <>
      <div className='top'>
        <div className="hello">
          <h1>Welcome to DogBark</h1>
        </div>
        <div className="intro">
          <p>Welcome to the heart of the South’s pet-lover community: Atlanta, Georgia—where every street hums with the promise of wagging tails and joyful paws! Here in the Peach State’s bustling capital, dog adoption is more than a transaction; it’s a celebration of second chances, community spirit, and the unbreakable bond between humans and their four-legged companions. From the historic oak-lined neighborhoods of Inman Park and Virginia Highland to the modern high-rises of Midtown and Buckhead, you’ll find dedicated shelters, rescues, and foster networks working tirelessly to match every dog with the perfect family.

            Imagine strolling through a weekend adoption fair at Centennial Olympic Park: volunteers enthusiastically introducing you to scruffy terriers rescued from rural counties, gentle seniors who’ve learned that every belly rub counts, and energetic puppies ready to explore the BeltLine’s miles of greenway. Or picture attending a “Paws on the Plaza” event in Downtown—where local trainers offer free workshops on leash manners, and pup-approved food trucks fuel tails-wags for the entire family. In Atlanta, adoption isn’t a one-time moment; it’s a lifelong partnership supported by a city that rallies behind events like the annual “Walk for Rescue,” where fundraising dollars help veterinary clinics provide critical care and spay/neuter services.

            Beyond the excitement of meet-and-greet days, Atlanta’s dog adoption community extends into cozy neighborhood cafés and patios—where adopted pups sip water alongside their new humans, settling into city life with sunny smiles. And with organizations like PAWS Atlanta and Furkids Animal Rescue advocating for accessible, low-cost adoption fees, you’ll discover opportunities to welcome home everything from pint-sized Chihuahuas to robust Great Danes.

            Whether you’re a first-time adopter or adding another canine companion to your home, Atlanta offers a network of trainers, dog-friendly parks, and affectionate volunteers ready to guide you every step of the way. Here, “Dog Eat Dog” takes on an entirely new meaning: it’s a place where only the best matches thrive, and where every rescued dog finds not just a roof over their head, but a community to call family.</p>
        </div>
      </div>
    </>
  )
}

function App() {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [toyboxSrc, setToyboxSrc] = useState(null);

  const openToybox = (tr) => setToyboxSrc(tr);
  const closeToybox = () => setToyboxSrc(null);

  const openLightbox = (src) => setLightboxSrc(src);
  const closeLightbox= () => setLightboxSrc(null);

  const scrollLeft = () => {
    const c = document.getElementById('dog-scroll');
    c.scrollBy({ left: -500, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const c = document.getElementById('dog-scroll');
    c.scrollBy({ left: 500, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <section id='home'>
        <Cara />
      </section>
        <Home />
      <section id='adoption'>
        <div className="sec-h">
          <h2>Adoption</h2>
        </div>
        <div className='container'>
          <div className="scroll-wrapper">

            <button className='scroll-btn left' onClick={() => scrollLeft()}>
              <i class="bi bi-arrow-left-circle"></i>
            </button>

            <div className="card-scroll" id='dog-scroll'>
              {dogs.map((d, index) =>
                <Card
                  key={index}
                  dog={d}
                  img={d.img}
                  onClick={() => openLightbox(d.img)}
                />
              )}
            </div>

            <button className='scroll-btn right' onClick={() => scrollRight()}>
              <i class="bi bi-arrow-right-circle"></i>
            </button>

          </div>
          {lightboxSrc && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightboxSrc} alt="Full size" />
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
        </div>
      )}
        </div>
      </section>
      <section id='shopping'>
        <div className="sec-h">
          <h2>Shopping</h2>
        </div>
        <div className="container">
          <div className="toy-sec">
            {toys.map((toy, index) =>
              <ToyCard
                key={index}
                toy={toy}
                onClick={() => openToybox(toy.img)}
              />
            )}
          </div>
          {toyboxSrc && (
            <div className="toybox" onClick={closeToybox}>
              <img src={toyboxSrc} alt='Full size' />
              <button className='toybox-close' onClick={closeToybox}>x</button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
