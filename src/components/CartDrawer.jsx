import React, { useState } from 'react';

export default function CartDrawer({ isOpen, cart, onClose, onQtyChange, onRemove, onCheckout }) {
  const [checkedOut, setCheckedOut] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleCheckoutClick = () => {
    onCheckout();
    setCheckedOut(true);
  };

  const handleCloseClick = () => {
    setCheckedOut(false);
    onClose();
  };

  return (
    <>
      <div 
        className={`drawer-overlay ${isOpen ? 'open' : ''}`} 
        onClick={handleCloseClick}
      ></div>
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Your Treasury Box</h3>
          <button className="close-cart" onClick={handleCloseClick}>&times;</button>
        </div>

        <div className="cart-items">
          {checkedOut ? (
            <div className="checkout-success-view">
              <div className="success-icon">✦</div>
              <h3 style={{ marginBottom: '10px', fontFamily: 'Cinzel, serif' }}>Purchase Confirmed</h3>
              <p style={{ fontSize: '13px', color: 'var(--gray-text)', lineHeight: '1.5' }}>
                Your bespoke order has been logged into our vault. A certified shipping specialist will contact you shortly.
              </p>
            </div>
          ) : cart.length === 0 ? (
            <div style={{ textAlign: 'center', color: 'var(--gray-text)', padding: '40px 0' }}>
              Your box of treasures is empty.
            </div>
          ) : (
            cart.map(item => (
              <div className="cart-item" key={item.product.id}>
                <img src={item.product.img} alt={item.product.title} className="cart-item-img" />
                <div className="cart-item-info">
                  <h4 className="cart-item-title">{item.product.title}</h4>
                  <div className="cart-item-price">${item.product.price.toLocaleString()}</div>
                  <div className="cart-item-qty">
                    <button className="qty-btn" onClick={() => onQtyChange(item.product.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="qty-btn" onClick={() => onQtyChange(item.product.id, 1)}>+</button>
                  </div>
                </div>
                <button className="cart-item-remove" onClick={() => onRemove(item.product.id)}>Remove</button>
              </div>
            ))
          )}
        </div>

        {!checkedOut && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span>Subtotal:</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
            <button 
              className="btn-gold" 
              style={{ width: '100%', textAlign: 'center' }} 
              onClick={handleCheckoutClick}
            >
              Secure Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
