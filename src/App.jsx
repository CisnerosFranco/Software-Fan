import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const lista = [
      <div className="floating-element">
        <div className="cube"></div>
        <div className="sphere"></div>
        <div className="cylinder"></div>
      </div>,
      <img src='/imgs/00.jpeg' className='img-item'/>,
      <img src='/imgs/api.svg' className='img-item'/>,
      <img src='/imgs/ecomerce.png' className='img-item'/>
  ]

  const [cont, setCont] = useState(1)
  const [item, setItem] = useState(lista[0])
  const [nombre, setNombre] = useState('');
  const [mail, setMail] = useState('');
  const [servicio, setServicio] = useState('')
  const [mssage, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [noti, setNoti] = useState(false)

  setTimeout(() => {
    let dato = lista[cont];
    setItem(dato)
    if(cont+1 == lista.length) {
      setCont(0)
    } else {
      setCont(cont + 1)
    }
  }, 12000)

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sendEmail = useCallback((e) => {
    e.preventDefault();
    if(nombre.length == 0 || mssage.length < 10) return;

    setLoading(true)
    const idService = 'service_p5v3sgs';
    const idTemplate = 'template_9aeqf0s';
    const publicKey = 'n1l-JgiudsyJianbQ'

    const mensaje = nombre + ", " + mail + "\n" + mssage
    emailjs.send(
      idService,
      idTemplate,
      {
        from_name: "Software Fan",
        from_email: "softwarefan147@gmail.com",
        service: servicio,
        message: mensaje
      },
      publicKey
    );
    setLoading(false);
    setNombre('')
    setMail('')
    setMessage('')
    setNoti(true)
  }, [loading, nombre, mail, servicio, mssage]);

  const handlerNombre = event => {
    let valor = event.target.value;
    if(valor.length<100) {
      setNombre(valor)
    }
  }

  const handlerEmail = event => {
    let valor = event.target.value;
    if(valor.length<100) {
      setMail(valor)
    }
  }

  const handlerServicio = event => {
    let valor = event.target.value;
    if(valor.length<100) {
      setServicio(valor)
    }
  }

  const handlerMessage = event => {
    let valor = event.target.value;
    if(valor.length<200) {
      setMessage(valor)
    }
  }

  return (
    <div className="App">
      {/* Navegación */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-text">Software Fan</span>
            <span className="logo-subtext">Servicios Digitales</span>
          </div>
          <nav className="nav">
            <button 
              className={activeSection === 'inicio' ? 'nav-link active' : 'nav-link'} 
              onClick={() => scrollToSection('inicio')}
            >
              Inicio
            </button>
            <button 
              className={activeSection === 'servicios' ? 'nav-link active' : 'nav-link'} 
              onClick={() => scrollToSection('servicios')}
            >
              Servicios
            </button>
            <button 
              className={activeSection === 'proyectos' ? 'nav-link active' : 'nav-link'} 
              onClick={() => scrollToSection('proyectos')}
            >
              Proyectos
            </button>
            <button 
              className={activeSection === 'contacto' ? 'nav-link active' : 'nav-link'} 
              onClick={() => scrollToSection('contacto')}
            >
              Contacto
            </button>
          </nav>
        </div>
      </header>

      {/* Sección Hero */}
      <section id="inicio" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Transformamos datos en decisiones estratégicas</h1>
            <p className="hero-subtitle">
              Especialistas en Reporting con Power BI, Desarrollo de APIs y Productos Web a medida
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('servicios')}>
                Nuestros Servicios
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contacto')}>
                Contáctanos
              </button>
            </div>
          </div>
          <div className="hero-image">
            {item}
          </div>
        </div>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="services-section">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">Soluciones tecnológicas que impulsan tu negocio</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon power-bi">
                <i className="icon">📊</i>
              </div>
              <h3 className="service-title">Reporting en Power BI</h3>
              <p className="service-description">
                Creamos dashboards interactivos y reportes avanzados que transforman tus datos en insights accionables.
              </p>
              <ul className="service-features">
                <li>Análisis de datos en tiempo real</li>
                <li>Visualizaciones interactivas</li>
                <li>Integración con múltiples fuentes</li>
                <li>Creación y Gestión de Modelo Semantico</li>
                <li>Auto Actualizaciones Programadas</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon api">
                <i className="icon">⚙️</i>
              </div>
              <h3 className="service-title">Desarrollo de APIs</h3>
              <p className="service-description">
                Diseñamos APIs robustas, escalables y seguras que conectan tus sistemas y optimizan procesos.
              </p>
              <ul className="service-features">
                <li>Arquitectura RESTful</li>
                <li>Seguridad y autenticación</li>
                <li>Alta disponibilidad</li>
                <li>Gestión de Multiples Rutas</li>
                <li>Documentación completa</li>
                <li>Integración con Bases de datos</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon web">
                <i className="icon">💻</i>
              </div>
              <h3 className="service-title">Desarrollo Web</h3>
              <p className="service-description">
                Desarrollamos aplicaciones web modernas, responsivas y de alto rendimiento para tu empresa.
              </p>
              <ul className="service-features">
                <li>Diseño responsivo, y atractivo</li>
                <li>Experiencia de usuario excepcional</li>
                <li>Tecnologías modernas (Next.js, Bases de datos)</li>         
                <li>Logueo de usuarios y multiples roles</li>
                <li>Integración de Pagos Automaticos</li>        
                <li>Integración de Whatsapp e Email</li>
                <li>Geolocalización</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Sección Proyectos */}
      <section id="proyectos" className="projects-section">
        <div className="container">
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="section-subtitle">Algunos de nuestros trabajos más recientes</p>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image bi-project"></div>
              <div className="project-content">
                <h3 className="project-title">Dashboard Financiero</h3>
                <p className="project-description">
                  Sistema de reporting en tiempo real para una corporación financiera, con más de 50 métricas clave.
                </p>
                <span className="project-tag">Power BI</span>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image api-project"></div>
              <div className="project-content">
                <h3 className="project-title">API de Pagos</h3>
                <p className="project-description">
                  API segura para procesamiento de pagos con integración a múltiples pasarelas y sistemas contables.
                </p>
                <span className="project-tag">API Development</span>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image web-project"></div>
              <div className="project-content">
                <h3 className="project-title">Plataforma E-learning</h3>
                <p className="project-description">
                  Plataforma web interactiva con más de 10,000 usuarios activos y sistema de aprendizaje adaptativo.
                </p>
                <span className="project-tag">Web Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="contact-section">
        <div className="container">
          <h2 className="section-title">¿Listo para Transformar tu Negocio?</h2>
          <p className="section-subtitle">Contáctanos para una consulta gratuita</p>
          
          <div className="contact-container">
            <div className="contact-info">
              <h3 className="contact-title">Información de Contacto</h3>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>softwarefan147@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>Teléfono</h4>
                  <p>+54 (11) 6173-7568</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Ubicación</h4>
                  <p>Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={sendEmail} noValidate>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" placeholder="Tu nombre" value={nombre} onChange={(e) => handlerNombre(e)}/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="tu@email.com" value={mail} onChange={(e) => handlerEmail(e)} />
              </div>
              <div className="form-group">
                <label htmlFor="service">Servicio de interés</label>
                <select id="service" value={servicio} onChange={(e) => handlerServicio(e)}>
                  <option value="">Selecciona un servicio</option>
                  <option value="powerbi">Reporting en Power BI</option>
                  <option value="api">Desarrollo de APIs</option>
                  <option value="web">Desarrollo Web</option>
                  <option value="multiple">Varios servicios</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" rows="5" placeholder="Cuéntanos sobre tu proyecto..." value={mssage} onChange={(e) => handlerMessage(e)}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">Software Fan</div>
            <p className="footer-text">Transformando ideas en soluciones digitales desde 2020</p>
            <div className="social-links">
              <a href={"https://wa.me/+541161737568?text=Hola,%20Software%20Fan.%20quiero%20hacer%20una%20consulta."} target='_blank' className="social-link">Whatsapp</a>
              <a href="https://www.linkedin.com/in/franco-cisneros-9a6a6a1a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className="social-link">LinkedIn</a>
              <a href="https://www.instagram.com/softwarefan147" target='_blank' className="social-link">Instagram</a>
            </div>
            <p className="copyright">© 2020 TechSolutions. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      {
        loading &&
        <div className='loading-container'>
          <div className='bg-white p-3'>CARGANDO...</div>
        </div>
      }
      {
        noti &&
        <div className='noti-container'>
          <div className='noti'>
            <h2>NOTIFICACIÓN</h2>
            <div>MAIL ENVIADO.</div>
            <button className='btn btn-primary mt-3' onClick={() => setNoti(false) }>CERRAR</button>
          </div>
        </div>
      }
    </div>
  );
}

export default App;