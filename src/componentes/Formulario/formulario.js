import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

export const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [classe, setClasse] = useState('')
    const [imagem, setImagem] = useState('')
    const [categoria, setCategorias] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoPersonagemCadastrado({
            nome,
            classe,
            imagem,
            categoria
        })
        setNome('')
        setClasse('')
        setImagem('')
        setCategorias('')
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do personagem</h2>
                <CampoTexto obrigatorio={true}label="Nome" placeholder="Digite seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)} />
                <CampoTexto obrigatorio={true} label="Classe" placeholder="Digite seu cargo" 
                valor={classe}
                aoAlterado={valor => setClasse(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                obrigatorio ={true} 
                label='Categoria'
                itens={props.categorias}
                valor={categoria}
                aoAlterado = {valor => setCategorias(valor)}/>
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}