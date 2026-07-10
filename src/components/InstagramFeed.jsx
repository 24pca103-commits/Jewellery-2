import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';

const Instagram = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const POSTS = [
  {
    img: "https://img.tatacliq.com/images/i19//1348Wx2000H/MP000000023374461_1348Wx2000H_202408211155051.jpeg",
    likes: '1.4k',
    comments: 82
  },
  {
    img: "https://www.pngjewellers.com/cdn/shop/files/GBEAR21_C_20_large.jpg?v=1772807267",
    likes: '942',
    comments: 41
  },
  {
    img: "https://assets0.mirraw.com/images/11953511/PLJWOCERMK23047-4_zoom.jpg?1697549402",
    likes: '2.1k',
    comments: 118
  },
  {
    img: "https://www.griiham.in/cdn/shop/files/WhatsApp_Image_2024-08-24_at_16.21.05_2.jpg?v=1742231898",
    likes: '1.8k',
    comments: 94
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSheDoYahRaAYTmXdNUxuK2_sHTQRaaZyj8-54dm1Dr2Wr72e9AOgIwC-I&s=10",
    likes: '820',
    comments: 29
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ30l2WQ7itqTKcXncuwa0rVwZxqbbIzUrjpc8e94aW8eDxuMKeKufgzo&s=10",
    likes: '1.5k',
    comments: 72
  }
];

export default function InstagramFeed() {
  return (
    <section className="py-10 bg-white border-t border-gold-light/20 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-xs text-gold font-bold uppercase tracking-widest">
            <Instagram className="w-4 h-4" />
            Social Gallery
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-charcoal">
            As Seen On You
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
          <p className="font-sans text-charcoal-muted text-sm leading-relaxed">
            Tag <span className="text-gold font-semibold">@ThodooJewels</span> to share your timeless wedding and lifestyle moments.
          </p>
        </div>

        {/* Infinite scrolling marquee wrapper */}
        <div className="marquee-container">
          <div className="marquee-track">
            {[...POSTS, ...POSTS].map((post, idx) => (
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                className="flex-shrink-0 w-[240px] sm:w-[280px] aspect-square relative group overflow-hidden rounded-sm border border-gold-light/10 shadow-soft"
              >
                <img
                  src={post.img}
                  alt={`Thodoo Jewels Instagram ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Luxury Glassmorphic Overlay */}
                <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3 text-white z-10">
                  <Instagram className="w-6 h-6 text-gold" />
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-current text-gold" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 fill-current text-gold" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center px-8 py-3.5 border border-charcoal hover:border-gold hover:text-gold text-charcoal font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300"
          >
            Follow Our Journey
          </a>
        </div>

      </div>
    </section>
  );
}
