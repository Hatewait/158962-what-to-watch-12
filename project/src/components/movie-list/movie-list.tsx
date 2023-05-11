import MovieCard from '../movie-card/movie-card';
import {IMovie} from '../../types/movie';
import {useState} from 'react';
import {useAppSelector} from '../../hooks';
import {selectMaxToShow} from '../../store/slices/films-slice/films-slice';

interface FilmsListProps {
  movies: IMovie[];
  maxAmountToShow?: number;
}

const MovieList = ({ movies}: FilmsListProps):JSX.Element => {
  const [, setActiveCardId] = useState<number | null>(null);
  const maxToShow = useAppSelector(selectMaxToShow);


  return (
    <div className="catalog__films-list">
      {movies
        .slice(0, maxToShow)
        .map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onActiveCardId={setActiveCardId}
          />))}
    </div>
  );
};

export default MovieList;
