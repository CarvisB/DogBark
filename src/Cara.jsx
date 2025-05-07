import React from 'react'
import './cara.css'

function Cara() {
  return (
    <div>
      <div id="caral" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#caral" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#caral" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#caral" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active c-item">
            <img src="https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100 c-img" alt="Slide 1"/>
              <div className="carousel-caption d-none d-md-block capt">
                <h5 className='slide-h'>Looking for a best friend?</h5>
                <p className='slide-d'>Contact us today, and we'll help you find your pal fur life!</p>
              </div>
          </div>
          <div className="carousel-item c-item">
            <img src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100 c-img" data-bs-target="" alt="Slide 2"/>
              <div className="carousel-caption d-none d-md-block capt">
                <h5 className='slide-h'>Hello!</h5>
                <p className='slide-d'>Consider this your sign.</p>
              </div>
          </div>
          <div className="carousel-item c-item">
            <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100 c-img" alt="Slide 3"/>
              <div className="carousel-caption d-none d-md-block capt">
                <h5 className='slide-h'>Paws to Your Heart</h5>
                <p className='slide-d'>Adopt Today!</p>
              </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#caral" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#caral" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Cara
