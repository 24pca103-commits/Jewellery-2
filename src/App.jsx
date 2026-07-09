import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ShopByCategory from './components/ShopByCategory';
import Catalog from './components/Catalog';
import MetalRates from './components/MetalRates';
import Diamond3D from './components/Diamond3D';
import Consultation from './components/Consultation';
import TrustBadges from './components/TrustBadges';
import Testimonials from './components/Testimonials';
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
      img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80",
      hoverImg: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
      desc: "Stately 22k burnished gold jhumkas featuring intricate temple filigree work and polished gold drop accents. Perfect for bridal elegance."
  },
  {
      id: 2,
      title: "Aura Solitaire Diamond Studs",
      category: "studs",
      price: 1450,
      img: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=600&q=80",
      hoverImg: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
      desc: "Breathtaking 18k white gold stud earrings featuring brilliant-cut 1.5 carat diamonds with VVS1 clarity, crafted for timeless everyday sophistication."
  },
  {
      id: 3,
      title: "Imperial Gold Hoop Earrings",
      category: "hoops",
      price: 950,
      img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=600&q=80",
      hoverImg: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
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
      img: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=600&q=80",
      hoverImg: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80",
      desc: "Polished pear-cut natural emeralds suspended from detailed 22k yellow gold filigree posts. Royal charm personified."
  },
  {
      id: 6,
      title: "Orion Diamond Cascade Drops",
      category: "diamond",
      price: 4500,
      img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80",
      hoverImg: "https://images.unsplash.com/photo-1599643471487-2c92c90cbfbb?auto=format&fit=crop&w=600&q=80",
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

      {/* 10. Customer Testimonials */}
      <Testimonials />

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
