import { Movie } from './movieData';

type RowProps = {
  movie: Movie;
};

const MovieRow = (props: RowProps) => {
  return (
    <tr>
      <td>{props.movie.Title}</td>
      <td>{props.movie.Year}</td>
      <td>{props.movie.Director}</td>
      <td>{props.movie.Category}</td>
      <td>{props.movie.Edited}</td>
    </tr>
  );
};

export default MovieRow;
