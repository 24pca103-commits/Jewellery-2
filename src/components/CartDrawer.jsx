import React, { useState, useEffect } from 'react';

export default function CartDrawer({ isOpen, cart, onClose, onQtyChange, onRemove, onCheckout, isDirectCheckout, setIsDirectCheckout }) {
  const [checkoutStep, setCheckoutStep] = useState(0); // 0=cart, 1=details, 2=shipping, 3=payment, 4=success

  useEffect(() => {
    if (isOpen && isDirectCheckout) {
      setCheckoutStep(1);
    } else if (!isOpen) {
      setTimeout(() => {
        setCheckoutStep(0);
        if (setIsDirectCheckout) setIsDirectCheckout(false);
      }, 400);
    }
  }, [isOpen, isDirectCheckout, setIsDirectCheckout]);

  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleCloseClick = () => {
    onClose();
  };

  const handleNextStep = () => {
    if (checkoutStep === 3) {
      onCheckout();
      setCheckoutStep(4);
    } else {
      setCheckoutStep(prev => prev + 1);
    }
  };

  const renderStepContent = () => {
    if (checkoutStep === 1) {
      return (
        <div className="checkout-step">
          <h4 style={{ color: 'var(--gold-light)', marginBottom: '15px', fontWeight: '500' }}>1. Customer Details</h4>
          <input type="text" placeholder="Full Name" className="checkout-input" style={inputStyle} />
          <input type="email" placeholder="Email Address" className="checkout-input" style={inputStyle} />
          <input type="text" placeholder="Member ID (Optional)" className="checkout-input" style={inputStyle} />
        </div>
      );
    }
    if (checkoutStep === 2) {
      return (
        <div className="checkout-step">
          <h4 style={{ color: 'var(--gold-light)', marginBottom: '15px', fontWeight: '500' }}>2. Shipping & Gifting</h4>
          <div className="shipping-options" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <label style={radioLabelStyle}>
              <input type="radio" name="shipping" defaultChecked style={{ accentColor: 'var(--gold-light)' }} />
              <span>Bespoke Courier Delivery (Insured) - Complimentary</span>
            </label>
            <label style={radioLabelStyle}>
              <input type="radio" name="shipping" style={{ accentColor: 'var(--gold-light)' }} />
              <span>Secure Vault Pickup (Local Boutique)</span>
            </label>
          </div>
          
          <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--gray-light)', borderRadius: '4px' }}>
            <h5 style={{ color: 'var(--white)', marginBottom: '10px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Corporate Sales & Gifting</h5>
            <label style={{ ...radioLabelStyle, marginBottom: '8px' }}>
              <input type="checkbox" style={{ accentColor: 'var(--gold-light)' }} />
              <span>Mark as a Gift (No prices on receipt)</span>
            </label>
            <label style={{ ...radioLabelStyle, marginBottom: '8px' }}>
              <input type="checkbox" style={{ accentColor: 'var(--gold-light)' }} />
              <span>Add Complimentary Gift Wrapping</span>
            </label>
            <label style={{ ...radioLabelStyle }}>
              <input type="checkbox" style={{ accentColor: 'var(--gold-light)' }} />
              <span>Request Corporate Bulk Order Invoice</span>
            </label>
            <textarea placeholder="Gift Message (Optional)" style={{ ...inputStyle, minHeight: '60px', marginTop: '15px', resize: 'vertical' }}></textarea>
          </div>
          
          <textarea placeholder="Delivery Instructions..." style={{ ...inputStyle, minHeight: '80px', marginTop: '15px', resize: 'vertical' }}></textarea>
        </div>
      );
    }
    if (checkoutStep === 3) {
      return (
        <div className="checkout-step">
          <h4 style={{ color: 'var(--gold-light)', marginBottom: '15px', fontWeight: '500' }}>3. Secure Payment</h4>
          <div className="payment-options" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <label style={radioLabelStyle}>
              <input type="radio" name="payment" defaultChecked style={{ accentColor: 'var(--gold-light)' }} />
              <span>Concierge Credit Card</span>
            </label>
            <label style={radioLabelStyle}>
              <input type="radio" name="payment" style={{ accentColor: 'var(--gold-light)' }} />
              <span>Direct Wire Transfer</span>
            </label>
            <label style={radioLabelStyle}>
              <input type="radio" name="payment" style={{ accentColor: 'var(--gold-light)' }} />
              <span>Crypto Wallet (BTC / ETH)</span>
            </label>
          </div>
          <div style={{ marginTop: '20px', padding: '15px', border: '1px solid rgba(188,160,87,0.3)', borderRadius: '4px', background: 'rgba(188,160,87,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Total to Pay:</span>
              <span style={{ color: 'var(--gold-light)', fontWeight: 'bold' }}>${subtotal.toLocaleString()}</span>
            </div>
            <p style={{ fontSize: '11px', color: 'var(--gray-text)' }}>Your transaction is encrypted and secured by Vaibhav Jewels.</p>
          </div>
        </div>
      );
    }
    if (checkoutStep === 4) {
      return (
        <div className="checkout-success-view">
          <div className="success-icon">✦</div>
          <h3 style={{ marginBottom: '10px', fontFamily: 'Cinzel, serif', color: 'var(--gold-light)' }}>Purchase Confirmed</h3>
          <p style={{ fontSize: '13px', color: 'var(--gray-text)', lineHeight: '1.5' }}>
            Your order has been confirmed. A certified shipping specialist will contact you shortly with tracking details.
          </p>
        </div>
      );
    }
    return null;
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '10px',
    background: 'var(--white)',
    border: '1px solid var(--gray-light)',
    color: 'var(--charcoal)',
    borderRadius: '4px',
    fontSize: '13px',
    outline: 'none'
  };

  const radioLabelStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '13px',
    color: 'var(--charcoal)',
    cursor: 'pointer'
  };

  return (
    <>
      <div 
        className={`drawer-overlay ${isOpen ? 'open' : ''}`} 
        onClick={handleCloseClick}
      ></div>
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header" style={{ borderBottom: checkoutStep > 0 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
          <h3>{checkoutStep === 0 ? 'Your Treasury Box' : checkoutStep === 4 ? 'Receipt' : 'Secure Checkout'}</h3>
          <button className="close-cart" onClick={handleCloseClick}>&times;</button>
        </div>

        <div className="cart-items" style={{ padding: checkoutStep > 0 ? '20px' : '20px' }}>
          {checkoutStep === 0 ? (
            cart.length === 0 ? (
              <div style={{ textAlign: 'center', color: 'var(--gray-text)', padding: '40px 0' }}>
                Your box of treasures is empty.
              </div>
            ) : (
              cart.map(item => (
                <div className="cart-item" key={item.cartItemId}>
                  <img src={item.product.img} alt={item.product.title} className="cart-item-img" />
                  <div className="cart-item-info">
                    <h4 className="cart-item-title">{item.product.title}</h4>
                    {item.customDetails && (
                      <div style={{ fontSize: '11px', color: 'var(--gray-text)', marginBottom: '5px' }}>
                        <div>{item.customDetails.metal}</div>
                        <div>Size: {item.customDetails.size}</div>
                        {item.customDetails.engraving && <div>Engraving: "{item.customDetails.engraving}"</div>}
                      </div>
                    )}
                    <div className="cart-item-price">${item.product.price.toLocaleString()}</div>
                    <div className="cart-item-qty">
                      <button className="qty-btn" onClick={() => onQtyChange(item.cartItemId, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button className="qty-btn" onClick={() => onQtyChange(item.cartItemId, 1)}>+</button>
                    </div>
                  </div>
                  <button className="cart-item-remove" onClick={() => onRemove(item.cartItemId)}>Remove</button>
                </div>
              ))
            )
          ) : (
            renderStepContent()
          )}
        </div>

        {checkoutStep < 4 && cart.length > 0 && (
          <div className="cart-footer">
            {checkoutStep === 0 && (
              <div className="cart-subtotal">
                <span>Subtotal:</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
            )}
            <div style={{ display: 'flex', gap: '10px' }}>
              {checkoutStep > 0 && checkoutStep < 4 && (
                <button 
                  className="btn-outline" 
                  style={{ flex: 1, padding: '15px' }} 
                  onClick={() => setCheckoutStep(prev => prev - 1)}
                >
                  Back
                </button>
              )}
              <button 
                className="btn-gold" 
                style={{ flex: checkoutStep > 0 ? 2 : 1, textAlign: 'center', padding: '15px' }} 
                onClick={handleNextStep}
              >
                {checkoutStep === 0 ? 'Secure Checkout' : checkoutStep === 3 ? 'Confirm Purchase' : 'Continue'}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
