export default function TestimonialsStyles() {
    return (
      <style jsx global>{`
        .testimonial-slider .slick-list {
          margin: 0 -16px;
        }
        .testimonial-slider .slick-slide > div {
          padding: 0 16px;
        }
        .testimonial-slider .slick-dots li button:before {
          font-size: 12px;
          color: #6B7280;
        }
        .testimonial-slider .slick-dots li.slick-active button:before {
          color: #3B82F6;
        }
      `}</style>
    )
  }
  
  