import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Noticia from '../../Noticias';
import CreateNoticia from '../../Noticias/CreateNoticia.js';
import './Nav.css';

const Nav = () => {
    return (
        <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Notícias</Link>
          </li>
          <li>
            <Link to="noticia/criar">Cadastrar</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<Noticia/>} />
        <Route path="noticia/criar" element={<CreateNoticia/>} />
      </Routes>
      </BrowserRouter>
    );
}

export default Nav