import axios from "axios";
import { useState } from "react"
import './CreateNoticia.css'

const CreateNoticia = () => {

    const [input, setInput] = useState([]);
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput(values => ({...values, [name]: value }));
    }
    const handleSubmit = (e) => {
        var data = JSON.stringify(input);
        console.log(data);
        e.preventDefault();
        axios.post('http://teste2.localhost.com/api/noticias/cadastrar.php',
        data,
        {
            headers:{
                "Content-Type" : "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            }
        })
        .then(function(res){
            console.log(res.data);
        })
    }
    return (
        <>
            <h1>Criar Notícia</h1>
            <form onSubmit={handleSubmit} class="criar-noticia">
                <div>
                    <label>Título: </label>
                    <input type="text" name="titulo" onChange={handleChange} />
                </div>
                <div>
                    <label>Descrição: </label>
                    <input type="text" name="descricao" onChange={handleChange} />
                </div>
                <div>
                    <label>Conteúdo: </label>
                    <input type="text" name="conteudo" onChange={handleChange} />
                </div>
                <div>
                    <label>URL da Imagem: </label>
                    <input type="text" name="imagem" onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">Salvar</button>
                </div>
                
            </form>
        </>
    )
}

export default CreateNoticia