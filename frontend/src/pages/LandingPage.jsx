import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="container">
      <h1>Bienvenido a EncuestasApp</h1>
      <p style={{ textAlign: 'center' }}>Inicia sesión o regístrate para comenzar a crear encuestas.</p>
      <div className="nav-links">
        <Link to="/login">Login</Link>
        <Link to="/register">Registrar</Link>
      </div>
    </div>
  );
}



