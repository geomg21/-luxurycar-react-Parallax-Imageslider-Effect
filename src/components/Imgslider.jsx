import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Imgslider.css'; // Import a separate CSS file for styling

function Imgslider() {
  const [clickedIndex, setClickedIndex] = useState(null); // State to track the clicked image

  const handleClick = (index) => {
    setClickedIndex(index);
    setTimeout(() => {
      setClickedIndex(null); // Reset after 300ms (or any desired duration)
    }, 300); // Duration of the click effect
  };

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {[
          "https://wallpaperaccess.com/full/46148.jpg",
          "https://wallpapercave.com/wp/wp7296347.jpg",
          "http://hdqwalls.com/download/1/lamborghini-centenario-super-car-3840x2160.jpg",
          "http://wallpapercave.com/wp/xkjRk54.jpg",
          "https://wallpapercave.com/wp/wp3739662.jpg",
          "https://getwallpapers.com/wallpaper/full/a/9/e/1044499-download-free-full-hd-sports-car-wallpaper-1920x1080-samsung.jpg",
          "https://wallpaperaccess.com/full/20008.jpg",
          "https://www.hdcarwallpapers.com/download/ford_mustang_4k_2-2560x1440.jpg"
        ].map((src, index) => (
          <div className="slide" key={index} onClick={() => handleClick(index)}>
            <div className={`image-container ${clickedIndex === index ? 'clicked' : ''}`}>
              <img src={src} alt={`Luxury Car ${index + 1}`} className="car-image" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Imgslider;
