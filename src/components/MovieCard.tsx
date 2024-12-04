import React from "react"; // importamos react
import Swal from "sweetalert2"; // importamos la libreria de los pop-ups
import {Movie} from "../types/Movie"; // importamos la interfaz de los props


interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({movie}) => {
    //Definir la ruta para importar la imagen basada en el nombre de la imagen
    const imageSrc = new URL(`../assets/img/${movie.image}`, import.meta.url).href;

    //crear ventana emergente
    const showDetails = () => {
        Swal.fire({
            title: movie.title,
            text:`Reparto: ${movie.reparto}`,
            imageUrl: imageSrc,
            imageWidth: 300,
            customClass: {
                popup: 'custom-popup',
                },
            color: 'black',
            imageAlt: `${movie.title} Poster`,
            confirmButtonText:"Excelente"
            
        });
    };
    return (
        <div className="movie-card" onClick={showDetails}>
            <img src={imageSrc} alt={movie.title} className="movie-image"/>
            <h3>{movie.title}</h3>
            <h5>Genero: {movie.genero}</h5>
            <h5>Duracion: {movie.duracion}</h5>
            <h5>Lanzamiento: {movie.lanzamiento}</h5>
        </div>
    );
};

export default MovieCard;