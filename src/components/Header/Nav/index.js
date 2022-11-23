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
            <a><Link to="/">Notícias</Link></a>
          </li>
          <li>
            <a><Link to="noticia/criar">Cadastrar</Link></a>
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