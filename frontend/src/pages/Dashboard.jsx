import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Si usas token o info en localStorage, limpia aquí:
    // localStorage.removeItem('token');
    // localStorage.removeItem('user');

    navigate('/'); // redirige a landing page
  };

  return (
    <div className="dashboard">
      <button onClick={handleLogout} className="botExit">
        Salir
      </button>
      <h1>Panel de Usuario</h1>
      <p>Bienvenido a tu espacio personal. Aquí podrás crear, editar y ver resultados de tus encuestas.</p>
      <ul>
        <li>✔ Crear nueva encuesta</li>
        <li>✔ Ver encuestas activas</li>
        <li>✔ Consultar resultados</li>
        <li>✔ Gestionar tu perfil</li>
      </ul>
    </div>
  );
}

