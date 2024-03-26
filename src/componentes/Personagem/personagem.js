import './Personagem.css'

export const Personagem = (props) => {
    return (
        <div className='personagem'>
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
            <img src={props.imagem} alt={props.nome}></img>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.classe}</h5>
            </div>
        </div>
    )
}

