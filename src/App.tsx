import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

type Lang = 'es' | 'en'
const content = {
  es: {
    nav: ['Inicio', 'Servicios', 'Proyectos', 'Nosotros', 'Contacto'], talk: 'Hablemos',
    eyebrow: 'DESARROLLO WEB · SOFTWARE A MEDIDA',
    heroA: 'Ideas que se convierten en', heroB: 'soluciones digitales.',
    heroDesc: 'Diseñamos y desarrollamos experiencias digitales que ayudan a las empresas a crecer. Tecnología bien pensada, hecha para personas reales.',
    seeWork: 'Ver proyectos', quoteCTA: 'Solicitar presupuesto', discover: 'Conocé Dofra',
    trust1: 'Pensado para crecer', trust2: 'Diseño + ingeniería', trust3: 'Argentina · Irlanda',
    serviceKicker: 'QUÉ HACEMOS', serviceTitle: 'La tecnología correcta para cada desafío.', serviceDesc: 'Desde tu primera presencia online hasta una plataforma que transforme tu operación.',
    services: [
      { n:'01', icon:'code', title:'Desarrollo web', desc:'Sitios rápidos, modernos y optimizados para convertir visitas en oportunidades.', tags:['Landing pages','Sitios corporativos','SEO técnico'] },
      { n:'02', icon:'layers', title:'Aplicaciones web', desc:'Productos digitales intuitivos, seguros y preparados para acompañar tu crecimiento.', tags:['Web apps','Dashboards','Portales'] },
      { n:'03', icon:'cpu', title:'Software a medida', desc:'Sistemas diseñados alrededor de tus procesos, no al revés.', tags:['Gestión interna','Integraciones','SaaS'] },
      { n:'04', icon:'zap', title:'Automatizaciones', desc:'Conectamos herramientas y eliminamos tareas repetitivas para liberar tiempo valioso.', tags:['Flujos de trabajo','APIs','Optimización'] },
    ],
    workKicker:'TRABAJO DESTACADO', workTitle:'Proyectos y soluciones digitales.', workDesc:'Conocé nuestro trabajo y explorá las ideas que estamos desarrollando.',
    caseType:'PLATAFORMA WEB · GESTIÓN DE TURNOS', caseName:'Equilibrium Estética', caseDesc:'Una solución digital para simplificar la gestión de turnos, organizar servicios y ofrecer una experiencia más cómoda a clientes y administradores.', caseNote:'Proyecto propio · Caso de estudio', caseCTA:'Conocer el proyecto',
    processKicker:'NUESTRA FORMA DE TRABAJAR', processTitle:'Simple, transparente y enfocado en resultados.',
    process:[{n:'01',title:'Descubrimos',desc:'Escuchamos tus objetivos y definimos qué problema resolver.'},{n:'02',title:'Diseñamos',desc:'Transformamos ideas en una experiencia clara y funcional.'},{n:'03',title:'Construimos',desc:'Desarrollamos con tecnología moderna, calidad y criterio.'},{n:'04',title:'Evolucionamos',desc:'Lanzamos, medimos y mejoramos cuando tu negocio lo necesita.'}],
    aboutKicker:'SOBRE DOFRA', aboutTitle:'Una mirada humana sobre la tecnología.', aboutDesc:'Dofra Software nace con una idea simple: el buen software no debería complicarte la vida. Combinamos diseño, desarrollo e ingeniería para construir productos digitales claros, confiables y preparados para el futuro.',
    aboutQuote:'Menos complejidad. Más posibilidades.', aboutStats:['Soluciones a medida','Enfoque en calidad','Visión internacional'],
    faqKicker:'PREGUNTAS FRECUENTES', faqTitle:'Antes de empezar.',
    faqs:[{q:'¿Trabajan con negocios pequeños?',a:'Sí. Trabajamos con emprendimientos, profesionales y empresas que buscan una solución digital acorde a su etapa.'},{q:'¿Puedo contratar solo una página web?',a:'Por supuesto. Podemos desarrollar una landing page, un sitio corporativo o una solución más compleja según tu objetivo.'},{q:'¿Ofrecen mantenimiento?',a:'Podemos acordar soporte, mejoras y mantenimiento después de la entrega, según las necesidades del proyecto.'},{q:'¿Trabajan con clientes fuera de Argentina?',a:'Sí. Nuestro enfoque es internacional, con especial atención a clientes de Argentina e Irlanda.'}],
    contactKicker:'EMPECEMOS ALGO BUENO', contactTitle:'Tu próxima gran idea merece hacerse realidad.', contactDesc:'Contanos qué tenés en mente. Nos encantaría conocer tu proyecto y encontrar juntos la mejor solución.', contactBtn:'Escribinos', contactSubject:'Consulta de proyecto — Dofra Software',
    footerTag:'Software built around your business.', footerNote:'Diseñado con intención. Construido con tecnología.', rights:'Todos los derechos reservados.',
    previewLabel:'VISTA DE PRODUCTO', previewTitle:'Tu negocio, más simple.', previewMini:'Panel de gestión', previewClients:'Clientes', previewBookings:'Turnos', previewGrowth:'Actividad', previewStatus:'En marcha', previewRecent:'Próximos turnos', previewToday:'Hoy', previewTomorrow:'Mañana',
  },
  en: {
    nav:['Home','Services','Projects','About','Contact'], talk:"Let's talk",
    eyebrow:'WEB DEVELOPMENT · CUSTOM SOFTWARE', heroA:'Ideas transformed into', heroB:'digital solutions.',
    heroDesc:'We design and build digital experiences that help businesses grow. Thoughtful technology, made for real people.',
    seeWork:'View projects', quoteCTA:'Request a quote', discover:'Discover Dofra', trust1:'Built to scale', trust2:'Design + engineering', trust3:'Argentina · Ireland',
    serviceKicker:'WHAT WE DO', serviceTitle:'The right technology for every challenge.', serviceDesc:'From your first online presence to a platform that transforms the way you work.',
    services:[
      {n:'01',icon:'code',title:'Web development',desc:'Fast, modern websites designed to turn visitors into opportunities.',tags:['Landing pages','Business websites','Technical SEO']},
      {n:'02',icon:'layers',title:'Web applications',desc:'Intuitive, secure digital products ready to grow with your business.',tags:['Web apps','Dashboards','Portals']},
      {n:'03',icon:'cpu',title:'Custom software',desc:'Systems designed around your workflows, not the other way around.',tags:['Operations','Integrations','SaaS']},
      {n:'04',icon:'zap',title:'Automation',desc:'We connect tools and eliminate repetitive tasks so you can focus on what matters.',tags:['Workflows','APIs','Optimization']},
    ],
    workKicker:'FEATURED WORK',workTitle:'Projects and digital solutions.',workDesc:'Explore our work and discover the ideas we are developing.',
    caseType:'WEB PLATFORM · APPOINTMENT MANAGEMENT',caseName:'Equilibrium Estética',caseDesc:'A digital solution to simplify appointment scheduling, organize services, and make life easier for customers and administrators.',caseNote:'In-house project · Case study',caseCTA:'Explore the project',
    processKicker:'HOW WE WORK',processTitle:'Simple, transparent, results-focused.',
    process:[{n:'01',title:'Discover',desc:'We listen to your goals and define the problem to solve.'},{n:'02',title:'Design',desc:'We turn ideas into a clear, functional experience.'},{n:'03',title:'Build',desc:'We develop with modern technology, quality, and care.'},{n:'04',title:'Evolve',desc:'We launch, learn, and improve as your business grows.'}],
    aboutKicker:'ABOUT DOFRA',aboutTitle:'A human approach to technology.',aboutDesc:'Dofra Software was born from a simple idea: great software should make life easier. We bring together design, development, and engineering to build clear, reliable digital products made for the future.',
    aboutQuote:'Less complexity. More possibility.',aboutStats:['Tailored solutions','Quality first','Global mindset'],
    faqKicker:'FREQUENTLY ASKED QUESTIONS',faqTitle:'Before we begin.',
    faqs:[{q:'Do you work with small businesses?',a:'Yes. We work with startups, independent professionals, and established businesses looking for solutions that fit their stage.'},{q:'Can I hire you just for a website?',a:'Absolutely. We can build a landing page, business website, or a more complex solution depending on your goals.'},{q:'Do you offer maintenance?',a:'We can arrange ongoing support, improvements, and maintenance after launch based on your project needs.'},{q:'Do you work internationally?',a:'Yes. We work with an international mindset, particularly with clients in Argentina and Ireland.'}],
    contactKicker:"LET'S BUILD SOMETHING",contactTitle:'Your next big idea deserves to happen.',contactDesc:"Tell us what you're thinking. We'd love to learn about your project and find the right solution together.",contactBtn:'Get in touch',contactSubject:'Project inquiry — Dofra Software',
    footerTag:'Software built around your business.',footerNote:'Designed with intention. Built with technology.',rights:'All rights reserved.',
    previewLabel:'PRODUCT PREVIEW',previewTitle:'Business, simplified.',previewMini:'Management overview',previewClients:'Clients',previewBookings:'Bookings',previewGrowth:'Activity',previewStatus:'On track',previewRecent:'Upcoming bookings',previewToday:'Today',previewTomorrow:'Tomorrow',
  }
}

function Icon({ name, size = 22 }: { name:string; size?:number }) {
  const paths: Record<string, ReactNode> = {
    arrow:<><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    code:<><path d="m8 8-4 4 4 4"/><path d="m16 8 4 4-4 4"/><path d="m14 4-4 16"/></>,
    layers:<><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 9h8M8 13h8M8 17h5"/></>,
    cpu:<><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4"/></>,
    zap:<path d="m13 2-9 12h7l-1 8 10-12h-7z"/>,
    check:<path d="m5 12 5 5L20 7"/>,
    plus:<path d="M12 5v14M5 12h14"/>,
    minus:<path d="M5 12h14"/>,
    menu:<path d="M4 7h16M4 12h16M4 17h16"/>,
    close:<path d="M5 5l14 14M19 5 5 19"/>,
    mail:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    globe:<><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c6 5 6 13 0 18M12 3c-6 5-6 13 0 18"/></>,
    calendar:<><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/></>,
    users:<><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M17 5a3 3 0 0 1 0 6M18 15a5 5 0 0 1 3 5"/></>,
    trending:<><path d="m3 17 7-7 4 4 7-7M15 7h6v6"/></>,
    external:<><path d="M13 5h6v6M19 5l-9 9"/><path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/></>,
  }
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}
function Brand({ light = false }: { light?:boolean }) { return <a className={`brand ${light ? 'brand-light':''}`} href="#inicio" aria-label="Dofra Software, inicio"><span className="brand-word">dofra<span className="brand-dot">.</span></span><span className="brand-caption">SOFTWARE</span></a> }
function Dashboard({ lang }: { lang:Lang }) {
  const t=content[lang]
  return <div className="dashboard" aria-label={t.previewLabel}>
    <div className="dash-side"><div className="dash-logo">d<span>.</span></div><div className="side-line active"/><div className="side-line"/><div className="side-line"/><div className="side-line"/><div className="side-bottom"/></div>
    <div className="dash-main"><div className="dash-top"><span className="dash-breadcrumb">dofra / overview</span><span className="dash-avatar">D</span></div><div className="dash-title"><div><small>{t.previewMini}</small><strong>{t.previewTitle}</strong></div><span className="dash-pill"><i/>{t.previewStatus}</span></div>
    <div className="dash-metrics"><div><span className="metric-icon"><Icon name="users" size={17}/></span><small>{t.previewClients}</small><strong>1,248</strong><em>↗ 12.8%</em></div><div><span className="metric-icon"><Icon name="calendar" size={17}/></span><small>{t.previewBookings}</small><strong>328</strong><em>↗ 8.2%</em></div><div><span className="metric-icon"><Icon name="trending" size={17}/></span><small>{t.previewGrowth}</small><strong>+24%</strong><em>↗ 5.4%</em></div></div>
    <div className="dash-chart"><div className="dash-chart-head"><strong>{t.previewGrowth}</strong><span>2026 <span className="chev">⌄</span></span></div><div className="chart-grid"><svg viewBox="0 0 500 140" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#398cff" stopOpacity=".24"/><stop offset="1" stopColor="#398cff" stopOpacity="0"/></linearGradient></defs><path d="M0 111 C30 101 43 108 70 92 S119 99 151 73 S195 91 228 61 S278 70 311 45 S360 58 394 32 S458 42 500 10 V140 H0Z" fill="url(#area)"/><path d="M0 111 C30 101 43 108 70 92 S119 99 151 73 S195 91 228 61 S278 70 311 45 S360 58 394 32 S458 42 500 10" stroke="#3487fa" strokeWidth="3" fill="none"/></svg></div><div className="chart-months"><span>JAN</span><span>MAR</span><span>MAY</span><span>JUL</span><span>SEP</span><span>NOV</span></div></div>
    <div className="dash-list"><strong>{t.previewRecent}</strong><div><span className="dash-list-icon">✦</span><span>09:30 · {t.previewToday}</span><span className="dash-list-tag">Confirmed</span></div><div><span className="dash-list-icon alt">✦</span><span>11:00 · {t.previewTomorrow}</span><span className="dash-list-tag">Pending</span></div></div>
    </div>
  </div>
}
export default function App() {
  const [lang,setLang]=useState<Lang>(() => window.localStorage.getItem('dofra-lang')==='en'?'en':'es')
  const [menuOpen,setMenuOpen]=useState(false)
  const [faqOpen,setFaqOpen]=useState<number|null>(0)
  const [formStatus,setFormStatus]=useState<'idle'|'sending'|'success'|'error'>('idle')
  const t=content[lang]
  useEffect(()=>{document.documentElement.lang=lang;window.localStorage.setItem('dofra-lang',lang);document.title=lang==='es'?'Dofra Software | Desarrollo web y software a medida':'Dofra Software | Web development & custom software'},[lang])
  const navIds=['inicio','servicios','proyectos','nosotros','contacto']
  const contactEmail='dofrasoftware@gmail.com'
  const contactLink=`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}&su=${encodeURIComponent(t.contactSubject)}`
  async function submitQuote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (formStatus === 'sending') return
    const form=event.currentTarget
    const data=new FormData(form)
    if (data.get('_honey')) return
    setFormStatus('sending')
    try {
      const response=await fetch(`https://formsubmit.co/ajax/${contactEmail}`,{
        method:'POST',
        body:data,
        headers:{'Accept':'application/json'}
      })
      const result=await response.json() as {success?:boolean|string}
      if (!response.ok || result.success === false || result.success === 'false') throw new Error('Submission failed')
      form.reset()
      setFormStatus('success')
    } catch {
      setFormStatus('error')
    }
  }
  return <>
    <header className="header"><div className="container nav-inner"><Brand/><nav className={menuOpen?'nav-links open':'nav-links'} aria-label={lang==='es'?'Navegación principal':'Main navigation'}>{t.nav.map((label,i)=><a key={navIds[i]} href={`#${navIds[i]}`} onClick={()=>setMenuOpen(false)}>{label}</a>)}</nav><div className="nav-actions"><button className="lang-switch" onClick={()=>setLang(lang==='es'?'en':'es')} aria-label={lang==='es'?'Switch to English':'Cambiar a español'}><Icon name="globe" size={16}/>{lang.toUpperCase()}</button><a className="button button-primary nav-cta" href="#contacto">{t.talk}<Icon name="arrow" size={17}/></a><button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label={menuOpen?'Cerrar menú':'Abrir menú'} aria-expanded={menuOpen}><Icon name={menuOpen?'close':'menu'} size={24}/></button></div></div></header>
    <main>
      <section className="hero" id="inicio"><div className="hero-glow"/><div className="container hero-grid"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line"/>{t.eyebrow}</div><h1>{t.heroA}<br/><span>{t.heroB}</span></h1><p>{t.heroDesc}</p><div className="hero-actions"><a className="button button-primary button-large" href="#contacto">{t.quoteCTA}<Icon name="arrow" size={19}/></a><a className="button button-text" href="#proyectos">{t.seeWork}<Icon name="arrow" size={18}/></a></div><div className="hero-trust"><span><Icon name="check" size={15}/>{t.trust1}</span><span><Icon name="check" size={15}/>{t.trust2}</span><span><Icon name="globe" size={15}/>{t.trust3}</span></div></div><div className="hero-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="hero-art-label"><span className="status-dot"/> {t.previewLabel}</div><Dashboard lang={lang}/><div className="floating-code"><span>&lt;/&gt;</span> crafted with care</div></div></div><div className="hero-bottom-line"/></section>
      <section className="section services" id="servicios"><div className="container"><div className="section-heading section-heading-split"><div><div className="kicker">{t.serviceKicker}</div><h2>{t.serviceTitle}</h2></div><p>{t.serviceDesc}</p></div><div className="services-grid">{t.services.map(s=><article className="service-card" key={s.n}><div className="service-card-top"><span className="service-icon"><Icon name={s.icon} size={25}/></span><span className="service-num">{s.n} / 04</span></div><h3>{s.title}</h3><p>{s.desc}</p><div className="tag-list">{s.tags.map(tag=><span key={tag}>{tag}</span>)}</div></article>)}</div></div></section>
      <section className="section work" id="proyectos"><div className="container"><div className="section-heading"><div className="kicker">{t.workKicker}</div><h2>{t.workTitle}</h2><p>{t.workDesc}</p></div><article className="case-card"><div className="case-copy"><div className="case-category"><span className="case-category-dot"/>{t.caseType}</div><h3>{t.caseName}</h3><p>{t.caseDesc}</p><div className="case-bottom"><span>{t.caseNote}</span><a href="#contacto">{t.caseCTA}<Icon name="arrow" size={17}/></a></div></div><div className="case-visual"><div className="case-browser"><div className="browser-toolbar"><span/><span/><span/><small>equilibrium / appointments</small></div><div className="case-browser-body"><div className="case-brand">EQUILIBRIUM<span>✳</span></div><div className="case-badge">ESTÉTICA & BIENESTAR</div><div className="case-big">Tu tiempo.<br/><em>Tu bienestar.</em></div><div className="case-description">Una experiencia pensada para vos.</div><div className="case-fake-button">RESERVAR TURNO <span>↗</span></div><div className="case-orb"/></div></div><div className="case-phone"><div className="phone-notch"/><div className="phone-title">EQUILIBRIUM</div><div className="phone-circle"/><div className="phone-lines"><span/><span/><span/></div><div className="phone-button"/></div></div></article>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(min(100%, 310px), 1fr))',gap:22,marginTop:24}}>
          {[
            {name:'Dentalia',category:lang==='es'?'LANDING PAGE · ODONTOLOGÍA':'LANDING PAGE · DENTAL CARE',description:lang==='es'?'Concepto de landing para un consultorio odontológico: tratamientos, presentación del equipo, preguntas frecuentes y contacto directo por WhatsApp.':'Landing page concept for a dental practice: treatments, team introduction, FAQs, and direct WhatsApp contact.',subtitle:lang==='es'?'Clínica odontológica':'Dental practice',gradient:'linear-gradient(135deg,#d8f4f2,#b8dbe8)',accent:'#127c83',mark:'✳'},
            {name:'Estudio Norte',category:lang==='es'?'LANDING PAGE · CONTABILIDAD':'LANDING PAGE · ACCOUNTING',description:lang==='es'?'Concepto de sitio profesional para un estudio contable: servicios impositivos, asesoramiento para empresas y monotributistas, y formulario de consultas.':'Professional website concept for an accounting firm: tax services, business and independent professional advisory, and an inquiry form.',subtitle:lang==='es'?'Asesoramiento contable':'Accounting advisory',gradient:'linear-gradient(135deg,#e6ecf6,#c5d3e9)',accent:'#244b7b',mark:'↗'},
            {name:'Atelier Arquitectura',category:lang==='es'?'LANDING PAGE · ARQUITECTURA':'LANDING PAGE · ARCHITECTURE',description:lang==='es'?'Concepto de landing para un estudio de arquitectura: portfolio visual de obras, presentación de servicios, proceso de trabajo y formulario para solicitar una consulta.':'Landing page concept for an architecture studio: visual project portfolio, services, design process, and an inquiry form.',subtitle:lang==='es'?'Estudio de arquitectura':'Architecture studio',gradient:'linear-gradient(135deg,#f2e9dc,#dfcdb8)',accent:'#80634c',mark:'⌂'}
          ].map(project=><article key={project.name} style={{background:'#fff',border:'1px solid #e0e8f2',borderRadius:18,overflow:'hidden',display:'flex',flexDirection:'column'}}>
            <div style={{background:project.gradient,padding:24,minHeight:205,display:'flex',alignItems:'center',justifyContent:'center'}} aria-label={`${project.name} — ${project.subtitle}`}>
              <div style={{width:'100%',maxWidth:350,background:'#fff',borderRadius:10,boxShadow:'0 18px 45px #12304d24',overflow:'hidden'}}>
                <div style={{height:25,background:'#f2f5f9',display:'flex',alignItems:'center',gap:5,padding:'0 11px'}}><span style={{width:6,height:6,borderRadius:'50%',background:'#b9c5d2'}}/><span style={{width:6,height:6,borderRadius:'50%',background:'#b9c5d2'}}/><span style={{width:6,height:6,borderRadius:'50%',background:'#b9c5d2'}}/></div>
                <div style={{padding:'24px 22px 28px',color:project.accent}}><div style={{fontSize:13,fontWeight:800,letterSpacing:'.5px'}}>{project.mark} {project.name.toUpperCase()}</div><div style={{fontSize:9,marginTop:17,opacity:.75}}>{project.subtitle}</div><div style={{fontSize:22,fontWeight:800,lineHeight:1.25,marginTop:7}}>{lang==='es'?'Tu próximo paso empieza acá.':'Your next step starts here.'}</div><div style={{width:100,height:9,borderRadius:8,background:project.accent,opacity:.2,marginTop:17}}/></div>
              </div>
            </div>
            <div style={{padding:'27px 28px 30px',display:'flex',flexDirection:'column',flex:1}}>
              <div style={{fontSize:10,fontWeight:800,letterSpacing:1.3,color:'#4185ce'}}>{project.category}</div>
              <h3 style={{fontFamily:'Manrope, sans-serif',fontSize:25,letterSpacing:'-.7px',margin:'14px 0 12px',color:'#102139'}}>{project.name}</h3>
              <p style={{fontSize:13,lineHeight:1.85,color:'#64768b',margin:0,flex:1}}>{project.description}</p>
              <div style={{borderTop:'1px solid #e6ecf3',marginTop:24,paddingTop:17,display:'flex',justifyContent:'space-between',gap:12,flexWrap:'wrap',alignItems:'center'}}>
                <span style={{fontSize:11,color:'#6b7f95'}}>{lang==='es'?'Demo conceptual · No es un cliente real':'Concept demo · Not a real client'}</span>
                <span style={{fontSize:11,fontWeight:700,color:'#287cce'}}>{lang==='es'?'Próximamente':'Coming soon'}</span>
              </div>
            </div>
          </article>)}
        </div></div></section>
      <section className="section process"><div className="container"><div className="section-heading"><div className="kicker">{t.processKicker}</div><h2>{t.processTitle}</h2></div><div className="process-grid">{t.process.map((step,i)=><div className="process-item" key={step.n}><div className="process-number">{step.n}<span>{i<3?'↗':'✓'}</span></div><h3>{step.title}</h3><p>{step.desc}</p></div>)}</div></div></section>
      <section className="section about" id="nosotros"><div className="container about-grid"><div className="about-visual"><div className="about-shape"><div className="about-shape-ring"/><div className="about-d">d<span>.</span></div><div className="about-shape-caption">DESIGN · DEVELOP · DELIVER</div></div><div className="about-quote">“{t.aboutQuote}”</div></div><div className="about-copy"><div className="kicker">{t.aboutKicker}</div><h2>{t.aboutTitle}</h2><p>{t.aboutDesc}</p><div className="about-points">{t.aboutStats.map(s=><div key={s}><span><Icon name="check" size={16}/></span>{s}</div>)}</div></div></div></section>
      <section className="section faq"><div className="container faq-grid"><div><div className="kicker">{t.faqKicker}</div><h2>{t.faqTitle}</h2></div><div className="faq-list">{t.faqs.map((f,i)=><div className={`faq-item ${faqOpen===i?'expanded':''}`} key={f.q}><button aria-expanded={faqOpen===i} onClick={()=>setFaqOpen(faqOpen===i?null:i)}><span>{f.q}</span><Icon name={faqOpen===i?'minus':'plus'} size={19}/></button>{faqOpen===i&&<p>{f.a}</p>}</div>)}</div></div></section>
      <section className="contact" id="contacto"><div className="container"><div className="contact-panel"><div className="contact-orb"/><div className="kicker">{t.contactKicker}</div><h2>{t.contactTitle}</h2><p>{t.contactDesc}</p><form className="quote-form" onSubmit={submitQuote}>
        <input type="hidden" name="_subject" value={lang==='es'?'Nuevo presupuesto desde Dofra Software':'New quote request from Dofra Software'}/>
        <input type="hidden" name="_captcha" value="true"/>
        <div className="quote-honey" aria-hidden="true"><label>Website<input name="_honey" tabIndex={-1} autoComplete="off"/></label></div>
        <div className="quote-grid">
          <label>{lang==='es'?'Nombre y apellido':'Full name'}<input name="name" required maxLength={100} autoComplete="name" placeholder={lang==='es'?'Tu nombre':'Your name'}/></label>
          <label>Email<input type="email" name="email" required maxLength={150} autoComplete="email" placeholder="name@example.com"/></label>
          <label>{lang==='es'?'Tipo de proyecto':'Project type'}<select name="project_type" required defaultValue=""><option value="" disabled>{lang==='es'?'Seleccioná una opción':'Choose an option'}</option><option value="Landing page">Landing page</option><option value="Business website">{lang==='es'?'Sitio empresarial':'Business website'}</option><option value="Web application">{lang==='es'?'Aplicación web':'Web application'}</option><option value="Custom software">{lang==='es'?'Software a medida':'Custom software'}</option><option value="Automation">{lang==='es'?'Automatización':'Automation'}</option><option value="Other">{lang==='es'?'Otro':'Other'}</option></select></label>
          <label>{lang==='es'?'Presupuesto aproximado (opcional)':'Estimated budget (optional)'}<select name="budget" defaultValue=""><option value="">{lang==='es'?'A definir':'To be discussed'}</option><option value="Under USD 500">{lang==='es'?'Menos de USD 500':'Under USD 500'}</option><option value="USD 500–1500">USD 500–1,500</option><option value="USD 1500–5000">USD 1,500–5,000</option><option value="Over USD 5000">{lang==='es'?'Más de USD 5.000':'Over USD 5,000'}</option></select></label>
        </div>
        <label>{lang==='es'?'Contanos sobre tu proyecto':'Tell us about your project'}<textarea name="message" required minLength={15} maxLength={3000} rows={5} placeholder={lang==='es'?'Qué necesitás, para cuándo y cualquier detalle que quieras compartir...':'What do you need, when, and any useful details...'} /></label>
        <label className="quote-consent"><input type="checkbox" required name="consent" value="yes"/><span>{lang==='es'?'Acepto que Dofra Software utilice mis datos para responder esta consulta. El envío se procesa mediante FormSubmit.':'I agree that Dofra Software may use my details to reply to this inquiry. Submission is processed by FormSubmit.'}</span></label>
        <button type="submit" className="button button-white button-large" disabled={formStatus==='sending'}>{formStatus==='sending'?(lang==='es'?'Enviando...':'Sending...'):(lang==='es'?'Enviar solicitud':'Send request')}<Icon name="arrow" size={19}/></button>
        <div className="quote-feedback" role="status" aria-live="polite">{formStatus==='success'?(lang==='es'?'Solicitud enviada. Revisá tu email por si el servicio solicita una confirmación.':'Request submitted. Check your email in case the service requests confirmation.'):formStatus==='error'?(lang==='es'?'No pudimos enviar el formulario. Escribinos directamente por email.':'Could not send the form. Please email us directly.'):null}</div>
        <a className="quote-email" href={contactLink} target="_blank" rel="noopener noreferrer">{lang==='es'?'O escribinos a':'Or email us at'} {contactEmail}</a>
      </form><div className="contact-small">Argentina <span>·</span> Ireland <span>·</span> Remote-first</div></div></div></section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-main"><div><Brand light/><p>{t.footerTag}</p></div><div className="footer-links">{t.nav.slice(1).map((label,i)=><a key={label} href={`#${navIds[i+1]}`}>{label}</a>)}</div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Dofra Software. {t.rights}</span><span>{t.footerNote}</span></div></div></footer>
  </>
}
