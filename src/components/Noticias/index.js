import axios from 'axios';
import { useEffect, useState } from 'react';
import './Noticia.css';
const Noticia = () => {
    const [noticias, setNoticia] = useState([]);
    useEffect(()=>{
        getNoticias();
    }, []);
    function getNoticias() {
        axios.get('http://teste2.localhost.com/api/noticias.php')
        .then((res) => {
            var data = Object.values(res.data)
            var records = Object.values(data[1])
            var array = Object.values(records[0])
            console.log(array)
            setNoticia(array);
        })
    }
    return (
        <>
            <h1>Lista de Notícias</h1>
            <table className='noticias'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Conteúdo</th>
                        <th>Imagem</th>
                    </tr>
                </thead>
                <tbody>
                    {noticias.map((noticia, key)=>
                        <tr key={key}>
                            <td>{noticia.id}</td>
                            <td>{noticia.titulo}</td>
                            <td>{noticia.descricao}</td>
                            <td>{noticia.conteudo}</td>
                            <td>{noticia.imagem}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Noticia