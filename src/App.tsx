import React, {useState} from 'react';
import "./App.css";
import MovieList  from './components/MovieList';

const App: React.FC = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "Busqueda Implacable",
      genero: "Accion - Suspenso",
      lanzamiento:2008,
      duracion: "1h-33m",
      reparto: "Liam Neeson - Maggie Grace - Fanke Janssen",
      image: "BusquedaImplacable.png"
    },
    {
      id: 2,
      title: "El Transportador",
      genero: "Acción - Ciencia Ficción",
      lanzamiento: 2002,
      duracion: "1h-30m",
      reparto:"Jason Statham - Shu Qi - Matt Schulze",
      image: "ElTransportador.png"
    },
    {
      id: 3,
      title: "John Wick",
      genero: "Acción - Suspenso",
      lanzamiento: 2014,
      duracion: "1h-45m",
      reparto:"Keanu Reeves - Ian McShane - Lance Reddick",
      image: "JohnWick.png"
    },
    {
      id: 4,
      title: "Juego Del Miedo",
      genero: " Terror - Crimen",
      lanzamiento: 2004,
      duracion: "1h-43m",
      reparto: "Tobin Bell - Cary Elwes - Dina Meyer",
      image: "saw.png"
  },
  {
      id: 5,
      title: "Spider-Man No Way Home",
      genero: "Accion - Ciencia Ficcion",
      lanzamiento: 2021,
      duracion: "2h-28m",
      reparto: "Tom Holland - Zendaya - Benedict Cumberbatch",
      image: "spider.png"
  },
  {
      id: 6,
      title: "Soy Leyenda",
      genero: "Accion - Terror",
      lanzamiento: 2008,
      duracion: "1h-41m",
      reparto:"Will Smith - Alice Braga - Dash Mihok",
      image: "soyleyenda.png"
  },
  {
      id: 7,
      title: "Cars",
      genero: "Infantil - Comedia",
      lanzamiento: 2006,
      duracion: "1h-57m",
      reparto: "Owen Wilson - Paul Newman - Bonnie Hunt",
      image: "cars.png"
  },
  {
      id: 8,
      title: "Robot Salvaje",
      genero: "Infantil - Aventura ",
      lanzamiento: 2024,
      duracion: "1h-45m",
      reparto: "Kit Connor - Pedro Pascal - Bill Nighy",
      image: "robotsalvaje.png"
  },
  {
      id: 9,
      title: "Libranos Del Mal",
      genero: "Terror - Misterio",
      lanzamiento: 2014,
      duracion: "1h-58m",
      reparto: "Eric Bana - Edgar Ramirez - Joel McHale",
      image: "libranosdelmal.png"
  }
  ]);
  return (
    <div className="app-container">
      <h1 className="app-tittle">🎬Movie List</h1>
      <MovieList movies={movies}/> 

      <footer className="app-footer">
        <p>&copy; 2024 Mis Peliculas Favoritas📺.</p>
        <nav>
          <ul>
            <li><a href="#privacidad">🚨Política de Privacidad</a></li>
            <li><a href="#contacto">📞Contacto</a></li>
            <li><a href="#terminos">🧾Términos y Condiciones</a></li>
          </ul>
        </nav>
      </footer>
      <div>
  
      </div>
    </div>
  );
};    

export default App;