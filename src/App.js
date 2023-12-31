  import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <main>
        <h1>
          Home
        </h1>
        <p> Projetos </p>
        <div className='links'>
        <Link to='Compras'> Lista de Compras </Link>
        |
        <Link to='/alunos'> alunos </Link>
        |
        <Link to='/insta'> Instagram </Link>
        |
        <Link to='/sorv'> Sorveteria </Link>
        |
        <Link to='/netflix'> Netflix </Link>
        |
        <Link to='/marvel'> Marvel </Link>
        |
        <Link to='/IMDB'> IMDB </Link>
        |
        <Link to='/poke'> Pokedex </Link>
        </div>
      </main>
    </div>
  );
}

export default App;
