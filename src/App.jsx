import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ShopByCategory from './components/ShopByCategory';
import Catalog from './components/Catalog';
import MetalRates from './components/MetalRates';
import Diamond3D from './components/Diamond3D';
import Consultation from './components/Consultation';
import TrustBadges from './components/TrustBadges';

import InstagramFeed from './components/InstagramFeed';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const PRODUCTS = [
  {
    id: 1,
    title: "Royal Antique Gold Jhumkas",
    category: "jhumka",
    price: 2800,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR427BZ93vcV4nm9zlbfmwPJb6F2y21RHGYU2ao9ZH8Kz7nTB0-_wLlllQ&s=10",
    hoverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB476eX8NokiLet-1NO_KkTSjjiRRNsohxed3PRohDYDyQsMp_cWYknKQ&s=10",
    desc: "Stately 22k burnished gold jhumkas featuring intricate temple filigree work and polished gold drop accents. Perfect for bridal elegance."
  },
  {
    id: 2,
    title: "Aura Solitaire Diamond Studs",
    category: "studs",
    price: 1450,
    img: "https://cdn.eternz.com/thumbnails/products/1_73155584_thumbnail_1024.jpg",
    hoverImg: "https://www.craftier.in/cdn/shop/files/3_a51d1854-f8dd-4e8c-89e2-ae92b07c74af.jpg?v=1777637694",
    desc: "Breathtaking 18k white gold stud earrings featuring brilliant-cut 1.5 carat diamonds with VVS1 clarity, crafted for timeless everyday sophistication."
  },
  {
    id: 3,
    title: "Imperial Gold Hoop Earrings",
    category: "hoops",
    price: 950,
    img: "https://www.gehnaindia.com/_next/image?url=https%3A%2F%2Fcdn-assets.gehnaindia.com%2F5q0f97fc4jx1okh4wv5ds31yohw1&w=2560&q=75",
    hoverImg: "https://i.etsystatic.com/22353755/r/il/86e419/2440359383/il_fullxfull.2440359383_an3w.jpg",
    desc: "Sculpted 22k gold hoops showcasing textured twist engraving, transitioning seamlessly from workspace elegance to evening luxury."
  },
  {
    id: 4,
    title: "Celestia Diamond Chandeliers",
    category: "chandeliers",
    price: 3900,
    img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80",
    hoverImg: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
    desc: "Cascading chandelier earrings encrusted with baguette and round-cut diamonds, catching and reflecting light at every angle."
  },
  {
    id: 5,
    title: "Regal Emerald Drop Earrings",
    category: "gold",
    price: 1650,
    img: "https://houseofarmilla.com/cdn/shop/files/7A0904EB-FA67-4F7B-B80D-79A072CDBCAB.png?v=1755165740&width=1946",
    hoverImg: "https://cdn.eternz.com/thumbnails/products/ake045-1_52ff5aa2_thumbnail_1024.jpg",
    desc: "Polished pear-cut natural emeralds suspended from detailed 22k yellow gold filigree posts. Royal charm personified."
  },
  {
    id: 6,
    title: "Orion Diamond Cascade Drops",
    category: "diamond",
    price: 4500,
    img: "https://www.miabytanishq.com/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2164c89f/images/Mia/hi-res/2922DCN_1.jpg",
    hoverImg: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd596221b/images/Mia/hi-res/2922DCN_4.jpg?sw=640&sh=640",
    desc: "Elegant platinum drops featuring cascading emerald-cut diamonds, bringing elite sophistication to your most important milestones."
  }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDirectCheckout, setIsDirectCheckout] = useState(false);

  const handleToggleWishlist = (productId) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const getCartItemId = (productId, customDetails) => {
    return `${productId}-${customDetails?.metal || ''}-${customDetails?.size || ''}-${customDetails?.engraving || ''}`;
  };

  const handleAddToCart = (product, customDetails) => {
    setCart(prev => {
      const itemId = getCartItemId(product.id, customDetails);
      const existing = prev.find(item => item.cartItemId === itemId);
      if (existing) {
        return prev.map(item =>
          item.cartItemId === itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1, customDetails, cartItemId: itemId }];
    });
    setIsCartOpen(true);
  };

  const handleBuyNow = (product, customDetails) => {
    setCart(prev => {
      const itemId = getCartItemId(product.id, customDetails);
      const existing = prev.find(item => item.cartItemId === itemId);
      if (!existing) {
        return [...prev, { product, quantity: 1, customDetails, cartItemId: itemId }];
      }
      return prev;
    });
    setIsDirectCheckout(true);
    setIsCartOpen(true);
  };

  const handleQtyChange = (cartItemId, delta) => {
    setCart(prev => {
      const item = prev.find(i => i.cartItemId === cartItemId);
      if (!item) return prev;
      const newQty = item.quantity + delta;
      if (newQty <= 0) {
        return prev.filter(i => i.cartItemId !== cartItemId);
      }
      return prev.map(i => i.cartItemId === cartItemId ? { ...i, quantity: newQty } : i);
    });
  };

  const handleRemove = (cartItemId) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const handleCheckoutFinished = () => {
    setCart([]);
  };

  const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-white min-h-screen text-charcoal font-sans overflow-x-hidden selection:bg-gold/30 selection:text-charcoal-dark">
      {/* 1. Header & Navigation */}
      <Navbar
        cartCount={totalQty}
        wishlistCount={wishlist.length}
        onCartToggle={() => setIsCartOpen(true)}
      />

      {/* 2. Hero Slider Banner (Home) */}
      <Hero />

      {/* 3. About Us Heritage Section (About) */}
      <AboutUs />

      {/* 4. Why Choose Us (Trust Badges) */}
      <TrustBadges />

      {/* 5. Curated Shop By Type (ShopByCategory) */}
      <ShopByCategory />

      {/* 6. Collections (New Arrivals, Best Sellers & Bridal Banner) */}
      <Catalog
        products={PRODUCTS}
        wishlist={wishlist}
        onWishlistToggle={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onQuickView={setSelectedProduct}
      />

      {/* 7. Live Gold & Silver Market Rates */}
      <MetalRates />

      {/* 8. 3D Diamond Custom Showcase */}
      <Diamond3D />

      {/* 9. Booking & Consultation Service */}
      <Consultation />



      {/* 11. Social Gallery Feed */}
      <InstagramFeed />

      {/* 12. Privilege Club Newsletter Sign-up */}
      <Newsletter />

      {/* 13. Premium Multi-column Footer */}
      <Footer />

      {/* E-Commerce Drawer Overlay */}
      <CartDrawer
        isOpen={isCartOpen}
        cart={cart}
        isDirectCheckout={isDirectCheckout}
        setIsDirectCheckout={setIsDirectCheckout}
        onClose={() => {
          setIsCartOpen(false);
          setIsDirectCheckout(false);
          if (cart.length === 0) handleCheckoutFinished();
        }}
        onQtyChange={handleQtyChange}
        onRemove={handleRemove}
        onCheckout={handleCheckoutFinished}
      />

      {/* Details Quick-View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* Floating Support Button */}
      <FloatingWhatsApp />
    </div>
  );
}
