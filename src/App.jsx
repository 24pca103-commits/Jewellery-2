import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import MetalRates from './components/MetalRates';
import Diamond3D from './components/Diamond3D';
import Consultation from './components/Consultation';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';

const PRODUCTS = [
  {
      id: 1,
      title: "Aura Diamond Solitaire",
      category: "rings",
      price: 1850,
      img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
      desc: "An exquisite 18k Burnished Gold solitaire ring featuring a brilliant 1.5 carat round cut diamond. Crafted to represent timeless elegance and supreme sophistication."
  },
  {
      id: 2,
      title: "Ethereal Emerald Pendant",
      category: "necklaces",
      price: 3200,
      img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
      desc: "A stunning teardrop-cut Colombian emerald surrounded by a halo of micro-pave diamonds, suspended on a delicate 18k champagne gold chain."
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

  const handleAddToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true); // Automatically slide in drawer on add
  };

  const handleQtyChange = (id, delta) => {
    setCart(prev => {
      const item = prev.find(i => i.product.id === id);
      if (!item) return prev;
      const newQty = item.quantity + delta;
      if (newQty <= 0) {
        return prev.filter(i => i.product.id !== id);
      }
      return prev.map(i => i.product.id === id ? { ...i, quantity: newQty } : i);
    });
  };

  const handleRemove = (id) => {
    setCart(prev => prev.filter(item => item.product.id !== id));
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
      <Catalog products={PRODUCTS} onAddToCart={handleAddToCart} onQuickView={setSelectedProduct} />
      <MetalRates />
      <Diamond3D />
      <Consultation />
      
      {/* Footer */}
      <footer>
        <div className="footer-grid">
            <div className="footer-col">
                <a href="#" className="logo-container" style={{ alignItems: 'flex-start', marginBottom: '20px' }}>
                    <span className="logo-main" style={{ color: 'var(--gold-light)' }}>AURA</span>
                    <span className="logo-sub" style={{ color: 'rgba(255,255,255,0.6)' }}>Vault of Treasures</span>
                </a>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: '1.8' }}>
                  Exquisite custom jewellery designed by hand using certified high-carat minerals, diamonds, and precious metals.
                </p>
            </div>
            
            <div className="footer-col">
                <h4>Collections</h4>
                <ul className="footer-links">
                    <li><a href="#catalog">The Rings</a></li>
                    <li><a href="#catalog">The Necklaces</a></li>
                    <li><a href="#catalog">The Earrings</a></li>
                    <li><a href="#catalog">The Cuffs & Bracelets</a></li>
                </ul>
            </div>

            <div className="footer-col">
                <h4>Bespoke Care</h4>
                <ul className="footer-links">
                    <li><a href="#consultation">Book Private Viewing</a></li>
                    <li><a href="#metal-rates">Today's Metal Rates</a></li>
                    <li><a href="#">Bespoke Cleansing & Fitting</a></li>
                </ul>
            </div>

            <div className="footer-col">
                <h4>The Inner Circle</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '20px' }}>
                  Receive notifications of private vault listings and custom gem sourcing updates.
                </p>
                <form className="newsletter-form" onSubmit={(e) => {
                  e.preventDefault();
                  alert("Welcome to the inner circle. You have successfully subscribed to AURA's premium releases.");
                  e.target.reset();
                }}>
                    <input type="email" className="newsletter-input" placeholder="Your email address" required />
                    <button type="submit" className="newsletter-btn">Join</button>
                </form>
            </div>
        </div>

        <div className="footer-bottom">
            <div>&copy; 2026 AURA Bespoke Jewellery. All luxury rights reserved.</div>
            <div>Designed with Ethereal Gold & Royal Emerald</div>
        </div>
      </footer>

      {/* Cart Slider Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        cart={cart}
        onClose={() => {
          setIsCartOpen(false);
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
      />
    </>
  );
}
