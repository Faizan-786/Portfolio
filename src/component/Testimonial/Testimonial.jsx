import React from "react";
import "./testimonial.css";
import avater1 from "../../images/avater1.png";
import avater2 from "../../images/avatar2.png";
import avater3 from "../../images/aboutImage.avif";
import { Navigation, Pagination ,Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const data = [
  {
    avater: avater1,
    name: "Earnest Achiever",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eos architecto eius eligendi facilis expedita blanditiis excepturi nemo sapiente aliquid!",
  },
  {
    avater: avater2,
    name: "Shatta Wali",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eos architecto eius eligendi facilis expedita blanditiis excepturi nemo sapiente aliquid!",
  },
  {
    avater: avater3,
    name: "Levis elit",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eos architecto eius eligendi facilis expedita blanditiis excepturi nemo sapiente aliquid!",
  },
  {
    avater: avater1,
    name: "William Shati",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eos architecto eius eligendi facilis expedita blanditiis excepturi nemo sapiente aliquid!",
  },
];

function Testimonial() {
  return (
    <section id="testimonial">
      <h5 className="portfolio-subtitle">Review From Clients</h5>
      <h2>Testimonial</h2>

      <Swiper
       
        className="container testimonial_container"
        modules={[Pagination, Navigation,Autoplay]}
        spaceBetween={5}
        slidesPerView={1}
        pagination={{ clickable: true }} // Add this line to enable pagination dots
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000 }}
      >
        {data.map(({ avater, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client_avater">
              <img src={avater} alt="" />
            </div>
            <h5 className="client_name">{name}</h5>
            <small className="client_review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonial;
