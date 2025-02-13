import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  };

  const slides = [
    {
      image: '/slider1.jpg',
      title: 'Welcome To Al-Ahbar ',
      description: 'Talent, skills, and quality are here. Just knock and see our service! We look forward to building a stronger business relationship with you.',
      buttonText: 'Learn More',
      buttonLink: '#',
    },
    {
      image: '/slider2.jpg',
      title: 'Rental Prices',
      description: 'We are trusted team/company who provide printers on rental at very cheap prices all over UAE. ',
      buttonText: 'Explore',
      buttonLink: '#',
    },
    {
      image: '/slider3.jpg',
      title: 'Special Offer',
      description: 'Free Toners Cartidges, Free Delivery & Installation, Pay On Monthly Basis, No Machine Cost, No Annual Maintenance Charges ',
      buttonText: 'Get Started',
      buttonLink: '#',
    },
    {
      image: '/slider4.jpg',
      title: 'Printer Repair Service',
      description: 'We perform all kinds of printer repair in Dubai. Your printer might be facing any type of problems and requires solutions such as printing speed repair, Cartridge repair, Color contrast solutions, Inkjet issue repairs or graphics repairs.',
      buttonText: 'Discover',
      buttonLink: '#',
    },
  ];

  return (
    <section className="banner">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img src={slide.image} alt={`Banner ${index + 1}`} className="w-full h-screen object-cover" />
            <div className="absolute top-32 left-32 flex flex-col text-white"> {/* bg-black bg-opacity-50 */}
              <h2 className="heading text-dpink">{slide.title}</h2>
              <p className="text-lg mb-8 w-1/2 pl-6">{slide.description}</p>
              <Link to={slide.buttonLink}>
                <button className="btn-md ">{slide.buttonText}</button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Banner;