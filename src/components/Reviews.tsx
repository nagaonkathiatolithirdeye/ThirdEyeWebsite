import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

/* ---------- Reviews Data ---------- */
const reviewsData = [
  {
    name: "Sakib Sahariyar Nobi",
    course: "DCA",
    rating: 5,
    text:
      "Third Eye Education is a revolution in the field of Computer Education. Faculties have strong core concepts which help students gain practical and technical skills effectively.",
    avatar: "./src/assets/StudentsPicture/Sakib Sahariyar Nobi.webp",
  },
  {
    name: "Anamika Bardhan",
    course: "PGDCA",
    rating: 5,
    text:
      "Digital education is essential today, and I always felt anxious about not knowing computers. At Third Eye, the faculty taught me patiently and made me feel comfortable.",
    avatar: "",
  },
  {
    name: "Shah Arju Nobi",
    course: "DCA",
    rating: 5,
    text:
      "As a beginner, I was worried about learning computer skills. The teaching methods made everything simple and easy to understand.",
    avatar: "./src/assets/StudentsPicture/Shah Arju Nobi.webp",
  },
  {
    name: "Deep Jyoti Gusait",
    course: "DCA",
    rating: 5,
    text:
      "The learning experience was excellent and confidence-building. The institute is ideal for beginners with very supportive faculty.",
    avatar: "./src/assets/StudentsPicture/Deep Jyoti Gussait.webp",
  },
  {
    name: "Archita Newar",
    course: "PGDCA",
    rating: 5,
    text:
      "The institute offers an outstanding practical approach to teaching computer technologies. I highly recommend it.",
    avatar: "./src/assets/StudentsPicture/Archita Newar.webp",
  },
  {
    name: "Biki Mudoi",
    course: "ADCAP",
    rating: 5,
    text:
      "I am truly grateful for the opportunity to learn computer skills here. The training will be very beneficial for my future career.",
    avatar: "./src/assets/StudentsPicture/Biki Mudoi.webp",
  },
  {
    name: "Sasank Nath",
    course: "ADCAP",
    rating: 5,
    text:
      "The course is taught in a detailed and practical manner, making it highly effective for career growth.",
    avatar: "./src/assets/StudentsPicture/Sasanka Nath.webp",
  },
];

/* ---------- Shuffle Function ---------- */
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/* ---------- Component ---------- */
const Reviews = () => {
  const [showAll, setShowAll] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(shuffleArray(reviewsData));
  }, []);

  const visibleReviews = showAll ? reviews : reviews.slice(0, 6);

  return (
    <section
      id="reviews"
      className="py-20 px-10 bg-gradient-to-br from-muted to-background"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            Student <span className="text-primary">Reviews</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear what our students say about their learning experience at Third
            Eye Computer Institute.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review) => (
            <Card
              key={review.name}
              className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <Quote
                className="absolute top-4 right-4 text-primary/10"
                size={48}
              />

              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-muted">
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xl font-semibold">
                      {review.name.charAt(0)}
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {review.course}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                “{review.text}”
              </p>
            </Card>
          ))}
        </div>

        {/* Show More / Less Button */}
        {reviews.length > 6 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
            >
              {showAll ? "Show Less Reviews" : "View All Reviews"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
