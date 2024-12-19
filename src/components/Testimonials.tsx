import React from 'react';

interface Testimonial {
  text: string;
  name: string;
  role: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    text: "This service is amazing! It has transformed the way our team collaborates.",
    name: "Jane Doe",
    role: "CEO, Company ABC",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    text: "I’ve seen a huge improvement in productivity. Highly recommended!",
    name: "John Smith",
    role: "Product Manager, XYZ Corp",
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    text: "The user experience is fantastic. It was exactly what we needed.",
    name: "Alice Brown",
    role: "Marketing Lead, ABC Inc.",
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 pt-32 pb-28 bg-base-200 md:pt-40 md:pb-32">
      <div className="container mx-auto px-6 space-y-6">
        <div>
            <img
                src="Testimonials.png"
                className="w-96 h-auto" />
        </div>

        <div className="flex flex-col ml-0 gap-5 md:flex-row md:ml-40 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card bg-base-100 shadow-xl md:w-96 p-4">
              <div className="card-body">
                <p className="text-base-content">{testimonial.text}</p>
                <div className="flex items-center mt-4">
                  <img
                    src={testimonial.imageUrl}
                    alt={`Testimonial from ${testimonial.name}`}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-base-content">{testimonial.name}</p>
                    <p className="text-sm text-base-content">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;