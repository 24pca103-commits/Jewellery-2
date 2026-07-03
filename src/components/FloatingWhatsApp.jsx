import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/1234567890" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#25D366',
        color: 'white',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
        zIndex: 9999,
        transition: 'transform 0.3s ease',
        textDecoration: 'none'
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      title="Chat with us on WhatsApp"
    >
      <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 0C5.385 0 0 5.383 0 12.029c0 2.124.553 4.195 1.603 6.015L.15 24l6.115-1.603A11.956 11.956 0 0 0 12.031 24c6.645 0 12.03-5.383 12.03-12.029S18.677 0 12.031 0zm6.273 17.158c-.244.693-1.42 1.328-1.946 1.408-.49.076-1.127.135-3.238-.74-2.535-1.05-4.14-3.64-4.263-3.805-.123-.166-1.02-1.356-1.02-2.585 0-1.23.633-1.835.856-2.072.223-.238.487-.297.65-.297.163 0 .326.001.469.008.15.007.35-.06.533.385.223.535.753 1.84.814 1.958.06.118.102.257.02.435-.08.178-.122.288-.243.427-.123.139-.257.307-.367.408-.12.11-.247.23-.11.465.138.236.612 1.01 1.317 1.638.908.81 1.674 1.063 1.91 1.182.235.12.373.099.513-.06.14-.158.608-.71.77-954.162-.244.184-.287.643-.099.824-.188.182-.375.47-.674.654-.298.182-.41.288-.506z"/>
      </svg>
    </a>
  );
}


