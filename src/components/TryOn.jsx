import React, { useState, useRef } from 'react';

export default function TryOn({ products = [] }) {
  const [model, setModel] = useState('neck');
  const [userBg, setUserBg] = useState(null);
  const [jewel, setJewel] = useState(null); // Default to null so user only views the canvas image initially
  const [width, setWidth] = useState(120);
  const [pos, setPos] = useState({ x: 190, y: 220 }); // initial center pos inside 500x400 canvas
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const startPos = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleModelChange = (tgt) => {
    setModel(tgt);
    setUserBg(null);
    setJewel(null); // Clear overlay on model change
    if (tgt === 'neck') {
      setWidth(120);
      setPos({ x: 190, y: 220 });
    } else {
      setWidth(90); // default scale for circular medallion overlay
      setPos({ x: 220, y: 200 });
    }
  };

  const handleJewelChange = (img) => {
    setJewel(img);
    if (img.includes('rings') || img.includes('ring')) {
      setWidth(90);
    } else {
      setWidth(120);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserBg(event.target.result);
        setModel('custom');
        setJewel(null); // Clear overlay initially
      };
      reader.readAsDataURL(file);
    }
  };

  const onMouseDown = (e) => {
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    startPos.current = { ...pos };
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!dragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    
    let newX = startPos.current.x + dx;
    let newY = startPos.current.y + dy;

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      if (newX > 0 && newX < rect.width && newY > 0 && newY < rect.height) {
        setPos({ x: newX, y: newY });
      }
    }
  };

  const onMouseUp = () => {
    setDragging(false);
  };

  // Filter master collection products based on active canvas
  const tryOnItems = products.filter(p => {
    if (model === 'neck') {
      return p.category === 'necklaces' || p.category === 'earrings';
    } else if (model === 'hand') {
      return p.category === 'rings' || p.category === 'bracelets';
    }
    return true; // if custom upload background, display all
  });

  return (
    <section className="section" id="tryon" onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
      <div className="section-header">
        <span className="section-tag">Interactive Mirror</span>
        <h2 className="section-title">Virtual Try-On Studio</h2>
      </div>

      <div className="tryon-layout">
        <div className="tryon-viewer">
          <div 
            ref={containerRef}
            className={`canvas-container ${model === 'neck' ? 'model-neck' : model === 'hand' ? 'model-hand' : ''}`}
            style={{ backgroundImage: model === 'custom' ? `url(${userBg})` : undefined }}
          >
            <div className="tryon-badge">
              <span className="pulse-dot"></span> LIVE MIRROR
            </div>
            
            {jewel && (
              <img 
                src={jewel} 
                alt="Overlay jewel" 
                className="draggable-item ring-preview-style" // apply circular gold medallion preview
                style={{
                  width: `${width}px`,
                  left: `${pos.x}px`,
                  top: `${pos.y}px`,
                  cursor: dragging ? 'grabbing' : 'move'
                }}
                onMouseDown={onMouseDown}
              />
            )}
          </div>
          
          <div className="tryon-controls">
            <button className="btn-outline" onClick={() => setWidth(prev => Math.max(prev - 10, 20))} disabled={!jewel}>Scale Down -</button>
            <button className="btn-outline" onClick={() => setWidth(prev => prev + 10)} disabled={!jewel}>Scale Up +</button>
          </div>
        </div>

        <div className="tryon-sidebar">
          <h3>Try On Your Vault Favorites</h3>
          <p>Test out your next heirloom. Select one of our hand-picked model canvas layouts, upload your own photo to personalize the experience, and scale/drag the jewelry into place.</p>
          
          <div className="tryon-selection">
            <div className="selection-title">1. Choose Canvas Backdrop</div>
            <div className="selection-grid" style={{ flexWrap: 'wrap', gap: '10px' }}>
              <button 
                className={`model-option ${model === 'neck' ? 'active' : ''}`}
                onClick={() => handleModelChange('neck')}
              >
                Necklace Stand
              </button>
              <button 
                className={`model-option ${model === 'hand' ? 'active' : ''}`}
                onClick={() => handleModelChange('hand')}
              >
                Ring Cushion
              </button>
              
              <label className="model-option" style={{ display: 'inline-flex', cursor: 'pointer', border: '1px dashed var(--gold-burnished)' }}>
                ✦ Upload My Photo
                <input 
                  type="file" 
                  accept="image/*" 
                  style={{ display: 'none' }} 
                  onChange={handleFileUpload} 
                />
              </label>
            </div>
          </div>

          <div className="tryon-selection">
            <div className="selection-title">2. Choose Masterpiece Overlay</div>
            <div className="selection-grid" style={{ flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
              {tryOnItems.map(p => (
                <div 
                  key={p.id}
                  className={`jewel-option ${jewel === p.img ? 'active' : ''}`}
                  onClick={() => handleJewelChange(p.img)}
                  title={p.title}
                  style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--gold-champagne)', cursor: 'pointer' }}
                >
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}

              {jewel && (
                <button 
                  className="btn-outline" 
                  onClick={() => setJewel(null)}
                  style={{ padding: '8px 16px', fontSize: '11px', height: 'fit-content' }}
                >
                  Remove Overlay
                </button>
              )}
            </div>
          </div>
          
          <p style={{ fontSize: '12px', color: 'var(--gray-text)', fontStyle: 'italic', marginTop: '10px' }}>
            *Drag the jewelry item inside the mirror frame to position it perfectly on your canvas.
          </p>
        </div>
      </div>
    </section>
  );
}



