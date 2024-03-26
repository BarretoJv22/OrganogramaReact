import Personagem from '../Personagem'
import './Categoria.css'

export const Categoria = (props) =>{
    return(
        props.personagens.length > 0 ?
        <section className='categoria' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='personagens'>
            {props.personagens.map(personagem => <Personagem corDeFundo={props.corPrimaria} key={personagem.nome}nome={personagem.nome} classe={personagem.classe} imagem={personagem.imagem}/>)}
            </div>
        </section>
        : ''
    )
}