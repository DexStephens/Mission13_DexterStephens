import { movies } from './movieData';
import MovieRow from './MovieRow';

const MovieTable = () => {
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Year</th>
          <th scope="col">Director</th>
          <th scope="col">Category</th>
          <th scope="col">Edited</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((m) => (
          <MovieRow movie={m} />
        ))}
      </tbody>
    </table>
  );
};

export default MovieTable;
