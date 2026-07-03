import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import MetalRates from './components/MetalRates';
import Diamond3D from './components/Diamond3D';
import Consultation from './components/Consultation';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import ShopByCategory from './components/ShopByCategory';
import TrustBadges from './components/TrustBadges';
import InstagramFeed from './components/InstagramFeed';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const PRODUCTS = [
  {
      id: 1,
      title: "Aura Diamond Solitaire",
      category: "rings",
      price: 1850,
      img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
      hoverImg: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
      desc: "An exquisite 18k Burnished Gold solitaire ring featuring a brilliant 1.5 carat round cut diamond. Crafted to represent timeless elegance and supreme sophistication."
  },
  {
      id: 2,
      title: "Royal Kundan Choker",
      category: "necklaces",
      price: 3400,
      img: "https://images.unsplash.com/photo-1599643471487-2c92c90cbfbb?auto=format&fit=crop&w=600&q=80",
      hoverImg: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
      desc: "A breathtaking traditional Kundan choker set, hand-crafted with uncut diamonds and pearls, perfect for the modern bride seeking vintage charm."
  },
  {
      id: 3,
      title: "Imperial Gold Drops",
      category: "earrings",
      price: 1250,
      img: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=600&q=80",
      desc: "Stately 22k burnished gold earrings featuring intricate filigree work and polished gold drop accents. Infuse modern royalty into your evening wear."
  },
  {
      id: 4,
      title: "Celestia Diamond Cuff",
      category: "bracelets",
      price: 4500,
      img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
      desc: "A bold statement cuff in 18k gold encrusted with over 3 carats of brilliant VVS1 clarity baguette diamonds, shining with unmatched luxury."
  },
  {
      id: 5,
      title: "Regal Emerald Signet",
      category: "rings",
      price: 2100,
      img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80",
      desc: "A classic signet ring featuring a polished square-cut deep green emerald set in chunky 22k yellow gold. Unisex elegance at its peak."
  },
  {
      id: 6,
      title: "Orion Diamond Choker",
      category: "necklaces",
      price: 8900,
      img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
      desc: "A grand statement choker necklace crafted in platinum, featuring cascading pear-cut diamonds that capture and reflect the light from every angle."
  }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDirectCheckout, setIsDirectCheckout] = useState(false);

  // Fade out loader on mount
  useEffect(() => {
    const loader = document.getElementById('preloader');
    if (loader) {
      setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
        }, 500);
      }, 500);
    }
  }, []);

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
    setIsCartOpen(true); // Automatically slide in drawer on add
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

  const handleCheckout = () => {
    // CartDrawer handles success UI; we just clear state after drawer is closed
  };

  const handleCheckoutFinished = () => {
    setCart([]);
  };

  const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <Navbar cartCount={totalQty} onCartToggle={() => setIsCartOpen(true)} />
      <Hero />
      <TrustBadges />
      <ShopByCategory />
      <Catalog products={PRODUCTS} onAddToCart={handleAddToCart} onQuickView={setSelectedProduct} />
      <MetalRates />
      <Diamond3D />
      <Consultation />
      
      <InstagramFeed />

      {/* Footer */}
      <footer style={{ background: 'var(--white)', padding: 'clamp(40px, 6vw, 60px) clamp(16px, 3vw, 20px)', borderTop: '1px solid var(--gray-light)', color: 'var(--charcoal)' }}>
        <div className="footer-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
            <div className="footer-col">
                <a href="#" className="logo-container" style={{ alignItems: 'flex-start', marginBottom: '20px', textDecoration: 'none' }}>
                    <span className="logo-main" style={{ display: 'flex', flexDirection: 'column', lineHeight: '1', fontFamily: 'Cinzel, serif' }}>
                      <span style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '1px', color: '#2a1a14' }}>Jewellery Shop</span>
                    </span>
                </a>
                <p style={{ color: 'var(--gray-text)', fontSize: '14px', lineHeight: '1.8' }}>
                  Your trusted destination for exquisite handcrafted jewelry, certified diamonds, and precious metals.
                </p>
            </div>
            
            <div className="footer-col">
                <h4 style={{ color: 'var(--emerald-deep)', marginBottom: '15px' }}>Collections</h4>
                <ul className="footer-links" style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}><a href="#catalog" style={{ color: 'var(--gray-text)', textDecoration: 'none' }}>Rings</a></li>
                    <li style={{ marginBottom: '10px' }}><a href="#catalog" style={{ color: 'var(--gray-text)', textDecoration: 'none' }}>Necklaces</a></li>
                    <li style={{ marginBottom: '10px' }}><a href="#catalog" style={{ color: 'var(--gray-text)', textDecoration: 'none' }}>Earrings</a></li>
                    <li style={{ marginBottom: '10px' }}><a href="#catalog" style={{ color: 'var(--gray-text)', textDecoration: 'none' }}>Bracelets</a></li>
                </ul>
            </div>

            <div className="footer-col">
                <h4 style={{ color: 'var(--emerald-deep)', marginBottom: '15px' }}>Customer Service</h4>
                <ul className="footer-links" style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}><a href="#consultation" style={{ color: 'var(--gray-text)', textDecoration: 'none' }}>Book Video Consultation</a></li>
                    <li style={{ marginBottom: '10px' }}><a href="#metal-rates" style={{ color: 'var(--gray-text)', textDecoration: 'none' }}>Live Metal Rates</a></li>
                    <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'var(--gray-text)', textDecoration: 'none' }}>Track Order</a></li>
                </ul>
            </div>

            <div className="footer-col">
                <h4 style={{ color: 'var(--emerald-deep)', marginBottom: '15px' }}>Newsletter</h4>
                <p style={{ color: 'var(--gray-text)', fontSize: '14px', marginBottom: '20px' }}>
                  Subscribe to receive updates on new collections and special offers.
                </p>
                <form className="newsletter-form" onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing to Jewellery Shop!");
                  e.target.reset();
                }} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <input type="email" placeholder="Your email address" required style={{ flex: '1 1 180px', minWidth: 0, padding: '10px', border: '1px solid var(--gray-light)', borderRadius: '4px' }} />
                    <button type="submit" style={{ padding: '10px 20px', background: 'var(--emerald-deep)', color: 'var(--white)', border: 'none', borderRadius: '4px', cursor: 'pointer', whiteSpace: 'nowrap' }}>Subscribe</button>
                </form>
            </div>
        </div>

        <div className="footer-bottom" style={{ maxWidth: '1200px', margin: '40px auto 0', paddingTop: '20px', borderTop: '1px solid var(--gray-light)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', color: 'var(--gray-text)', fontSize: '13px' }}>
            <div>&copy; 2026 Jewellery Shop. All rights reserved.</div>
            <div>Designed for Elegance</div>
        </div>
      </footer>

      {/* Cart Slider Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        cart={cart}
        isDirectCheckout={isDirectCheckout}
        setIsDirectCheckout={setIsDirectCheckout}
        onClose={() => {
          setIsCartOpen(false);
          setIsDirectCheckout(false);
          // If checkout succeeded and drawer closes, clear the cart
          if (cart.length === 0) handleCheckoutFinished();
        }}
        onQtyChange={handleQtyChange}
        onRemove={handleRemove}
        onCheckout={handleCheckoutFinished}
      />

      {/* Details Modal */}
      <ProductModal 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />
      
      <FloatingWhatsApp />
    </>
  );
}


