import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import iposImg from '../images/IPOS.png';       
import shopeeImg from '../images/shopee.png';
import productImg from '../images/product.jpg';

export default function About() {
  /* -----------------------------
     HERO DECORATIVE CIRCLES
  ----------------------------- */
  const [circles, setCircles] = useState([
    { id: 1, x: -160, y: -10, color: '#00BCD4', size: 56 },
    { id: 2, x: 210, y: -40, color: '#FFC107', size: 36 },
    { id: 3, x: 360, y: 0, color: '#FF5722', size: 44 }
  ]);

  const [dragging, setDragging] = useState(null);
  const dragRef = useRef({ startX: 0, startY: 0, initialX: 0, initialY: 0 });

  const handleMouseDown = (e, circle) => {
    setDragging(circle.id);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: circle.x,
      initialY: circle.y
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const dx = Math.max(-100, Math.min(100, e.clientX - dragRef.current.startX));
    const dy = Math.max(-80, Math.min(80, e.clientY - dragRef.current.startY));
    setCircles(cs => cs.map(c => c.id === dragging
      ? { ...c, x: dragRef.current.initialX + dx, y: dragRef.current.initialY + dy }
      : c
    ));
  };

  const handleMouseUp = () => setDragging(null);

  useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragging]);

  /* -----------------------------
     CURVED PILL CONNECTIONS
  ----------------------------- */
  const interestRef = useRef(null);
  const exposureRef = useRef(null);

  const renderCurves = (ref, color) => {
    if (!ref.current) return null;
    const pills = Array.from(ref.current.querySelectorAll('.pill'));
    if (pills.length < 2) return null;
    const rect = ref.current.getBoundingClientRect();

    return (
      <svg className="pill-lines" width={rect.width} height={rect.height}>
        {pills.slice(0, -1).map((pill, i) => {
          const a = pill.getBoundingClientRect();
          const b = pills[i + 1].getBoundingClientRect();
          const x1 = a.left - rect.left + a.width;
          const y1 = a.top - rect.top + a.height / 2;
          const x2 = b.left - rect.left;
          const y2 = b.top - rect.top + b.height / 2;
          const cx = (x1 + x2) / 2;
          return (
            <path
              key={i}
              d={`M ${x1} ${y1} Q ${cx} ${y1 - 18} ${x2} ${y2}`}
              stroke={color}
              strokeWidth="2"
              strokeDasharray="4 4"
              fill="none"
            />
          );
        })}
      </svg>
    );
  };

  return (
    <div style={{ fontFamily: 'Helvetica', background: '#f5f5f5' }}>
      <style>{`
        * { box-sizing: border-box; }
        body { overflow-x: hidden; }

        .section { padding: 96px 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 80px; }

        h1 { font-size: 88px; letter-spacing: -2.5px; }
        h2 { font-size: 72px; letter-spacing: -1.5px; }

        .pill {
          position: relative;
          padding: 10px 28px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          z-index: 2;
          transition: transform 0.25s ease;
        }
        .pill:hover {
          transform: translateY(-6px);
        }
        .pill.orange { background: #FF5722; }
        .pill.cyan { background: #00BCD4; }

        .pill-wrap { position: relative; display: inline-flex; gap: 16px; }
        .pill-lines { position: absolute; inset: 0; pointer-events: none; z-index: 1; }

        .draggable-circle { position: absolute; border-radius: 50%; cursor: grab; }

        .image-placeholder {
          width: 250px;
          height: 180px;
          background: linear-gradient(180deg, #87CEEB 0%, #87CEEB 60%, #90EE90 60%, #90EE90 100%);
          border-radius: 6px;
        }

        .cta-btn {
          background: #FF5722;
          color: #fff;
          padding: 12px 36px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          text-decoration: none;
        }

        .email-btn {
          background: #fff;
          padding: 18px 52px;
          border-radius: 999px;
          font-size: 16px;
          text-decoration: none;
          color: #000;
        }
      `}</style>

      {/* HERO */}
      <section className="section" style={{ background: '#fff', position: 'relative' }}>
        {circles.map(c => (
          <div
            key={c.id}
            className="draggable-circle"
            onMouseDown={(e) => handleMouseDown(e, c)}
            style={{
              width: c.size,
              height: c.size,
              background: c.color,
              left: '50%',
              top: 220,
              transform: `translate(calc(-50% + ${c.x}px), ${c.y}px)`
            }}
          />
        ))}

        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Hi, I’m Talia!</h1>
          <p style={{ maxWidth: 820, margin: '32px auto 56px', fontSize: 18 }}>
            A final year Business Analytics undergraduate from the National University of Singapore.
            Passionate about interdisciplinary applications of computing — e.g. computational social sciences, product management and development, data storytelling.
          </p>

          <div style={{ marginBottom: 32 }}>
            <span style={{ marginRight: 16 }}>Interests:</span>
            <div className="pill-wrap" ref={interestRef}>
              {renderCurves(interestRef, '#FF5722')}
              <span className="pill orange">Product</span>
              <span className="pill orange">Analytics</span>
              <span className="pill orange">Strategy</span>
            </div>
          </div>

          <div>
            <span style={{ marginRight: 16 }}>Exposure:</span>
            <div className="pill-wrap" ref={exposureRef}>
              {renderCurves(exposureRef, '#00BCD4')}
              <span className="pill cyan">Sales</span>
              <span className="pill cyan">Banking</span>
              <span className="pill cyan">Commerce</span>
              <span className="pill cyan">Government</span>
            </div>
          </div>
        </div>
      </section>

      {/* RESUME / GITHUB */}
      <section className="section" style={{ background: '#fff', paddingTop: 24 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, fontSize: 18 }}>
            <a href={`${import.meta.env.BASE_URL}pdfs/resume.pdf`} style={{ color: '#FF5722', borderBottom: '2px solid #FF5722', textDecoration: 'none' }}>Resume</a>
            <a href="https://github.com/tali-a" target="_blank" rel="noreferrer" style={{ color: '#00BCD4', borderBottom: '2px solid #00BCD4', textDecoration: 'none' }}>GitHub</a>
          </div>
          <div style={{ marginTop: 24, opacity: 0.7 }}>find out more ↓</div>
        </div>
      </section>
{/* INTERESTS */}
<section className="section" style={{ background: '#FF5722', paddingBottom: 0 }}>
  <div className="container">
    <h2 style={{ color: '#fff', marginBottom: 48, marginLeft: 0 }}>Interests</h2>
  </div>
<div style={{ background: '#fff', padding: '0 80px' }}>
  {[
    {
      title: 'PRODUCT',
      cta: 'CASE STUDY →',
      img: productImg,
      paragraphs: [
        'Why product? A big part of product management is identifying the right problems to solve and understanding what value new features can provide to users.',
        'I developed my interest in product by joining Developer Group @ NUS as a Product Associate and joining the current iteration of Product Launchpad at PayPal.',
        'I like the visual aspect involved in product management—drafting and iterating. Product management also needs good analytics...'
      ],
      link: '/case-studies/maribank', 
      external: false
    },
    {
      title: 'ANALYTICS',
      cta: 'DASHBOARD →',
      img: iposImg,
      paragraphs: [
        'Why analytics? Knowledge of data and how to work with it is essential for any organisation—whether it’s solving a business problem or conducting policy research.',
        'In my time doing price elasticity research or creating reporting dashboards, I realised that data models, good practices, and scalability are fundamental for any effective analysis.',
        'I have an interest in data storytelling—conveying information clearly and effectively. I explored fun visualisations of the Global Innovation Index during my time at the Intellectual Property Office of Singapore. But data storytelling approaches are universally important, especially in...'
      ],
      link: 'https://public.tableau.com/app/profile/ipos/viz/GII2024LandingPage/LandingPage',
      external: true
    },
    {
      title: 'STRATEGY',
      cta: 'CASE STUDY →',
      img: shopeeImg,
      paragraphs: [
        'Why strategy? Strategy is all about using data and context to make trade-offs that move the organisation toward its goals.',
        'It’s a mix of intuition and data-driven approaches—that intuition is built only with experience and domain knowledge—but it’s an important part of the equation for seeing how everything connects. I want to learn more about it!'
      ],
      link: '/case-studies/shopee-spp',
      external: false
    }
  ].map((item, i) => (
    <div
      key={i}
      style={{
        display: 'flex',
        gap: 32,
        padding: '32px 0',
        borderBottom: i < 2 ? '2px solid #000' : 'none'
      }}
    >
      <div
        className="image-placeholder"
        style={{
          backgroundImage: `url(${item.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: 250,
          height: 180,
          borderRadius: 6
        }}
      />
      <div style={{ flex: 1, paddingRight: 160 }}>
        {item.paragraphs.map((p, idx) => (
          <p key={idx} style={{ fontSize: 15, lineHeight: 1.4 }}>
            {p}
          </p>
        ))}
      </div>
      <div
        style={{
          width: 180,
          textAlign: 'right',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 25 }}>{item.title}</div>
        {item.external ? (
          <a
            className="cta-btn"
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            {item.cta}
          </a>
        ) : (
          <Link to={item.link} className="cta-btn">
            {item.cta}
          </Link>
        )}
      </div>
    </div>
  ))}
</div>
</section>



{/* EXPOSURE */}
<section className="section" style={{ background: '#00BCD4' }}>
  <div className="container">
    <h2 style={{ marginBottom: 48, marginLeft: 0 }}>Exposure</h2>
  </div>
  <div style={{ background: '#fff', padding: '0 80px' }}>
    {[
      {
        title: 'Sales',
        paragraphs: [
          'Curious about how technology drives sustainability and efficiency at scale, I worked as a Strategy Intern at Siemens, supporting commercial decision-making through Power BI dashboards, CRM sales-pipeline dashboard design, and data validation. This experience grounded my analytical work in commercial realities and immersed me in the practical applications of digitalisation and AI in manufacturing.'
        ]
      },
      {
        title: 'Banking',
        paragraphs: [
          'As a Risk and Prevention Intern at OCBC, I wrote Python automation scripts to improve the accuracy and efficiency of risk surveillance processes, which showed me how well-designed analytical interventions can meaningfully strengthen governance and operation.'
        ]
      },
      {
        title: 'Commerce',
        paragraphs: [
          'As a commercial intern at Campari, I did pricing research on different SKUs in inventory to assess price elasticities, working on data from NielsenIQ.'
        ]
      },
      {
        title: 'Government',
        paragraphs: [
          'Alongside analytics, I have a strong interest in media and design, which has shaped how I approach data storytelling. At the Intellectual Property Office of Singapore, I designed an exploratory Tableau dashboard presenting insights from Singapore\'s performance in the Global Innovation Index, reinforcing my belief that effective analytics should be intuitive, accessible, and meaningful to its users.',
          'I pursued my interest in sustainability at the Centre for Liveable Cities, conducting policy research and future sensing on mobility interventions.',
          'I\'m currently at Synapxe, supporting the implementation of AimSG, an AI medical imaging platform deployed across public hospitals. Through this role, I\'m gaining exposure to MLOps concepts and the operationalisation of AI in a regulated healthcare environment!'
        ]
      }
    ].map((item, i) => (
      <div
        key={i}
        style={{
          display: 'flex',
          gap: 32,
          padding: '32px 0',
          borderBottom: i < 3 ? '2px solid #000' : 'none'
        }}
      >
        <h3 style={{ width: 250, fontSize: 42 }}>{item.title}</h3>
        <div style={{ flex: 1 }}>
          {item.paragraphs.map((p, idx) => (
            <p key={idx} style={{ fontSize: 15, lineHeight: 1.4 }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
    </div>
  );
}
