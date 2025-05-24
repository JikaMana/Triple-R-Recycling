import "../../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Quote } from "lucide-react";
import whoWeAre from "../../assets/images/home/tripleR-whoWeAre.jpeg";

const testimonials = [
  {
    quote:
      "Working with Triple R Recycling has been a life-changing experience. It's more than just a job—it's a mission to clean up our environment and empower our community.",
    name: "Abdulrazak Lawal",
    role: "Machine Operator",
  },
  {
    quote:
      "I’ve learned so much about sustainability and community engagement through our school outreach programs. Triple R Recycling is shaping the future, one bottle at a time.",
    name: "Fauziya Suleiman",
    role: "Community Engagement Officer",
  },
  {
    quote:
      "Triple R Recycling gave me the platform to turn my passion for the environment into real action. We are truly making an impact.",
    name: "Salamatu Muhammed",
    role: "Sorter",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section
      style={{
        backgroundImage: `url(${whoWeAre})`,
      }}
      className="w-full py-12 md:py-16 px-4 sm:px-8 lg:px-24 bg-cover bg-no-repeat bg-center flex justify-center"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-200">
          Voices of Impact
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="w-[90vw] sm:w-full"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide
              key={index}
              className="w-full max-w-3xl mx-auto px-2 sm:px-4"
            >
              <div className="w-full bg-white shadow-lg rounded-2xl p-8 border-t-4 border-green-600 text-left">
                <Quote className="text-green-600 mb-4" />
                <p className="text-gray-800 text-lg leading-relaxed italic mb-6">
                  “{t.quote}”
                </p>
                <div className="text-green-800 font-semibold">{t.name}</div>
                <div className="text-sm text-gray-500">~ {t.role}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
