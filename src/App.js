import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Categoria from './componentes/Categoria/index';

function App() {

  const categorias = [{
    nome: 'Saiyajin',
    corPrimaria: ' #E06B69',
    corSecundaria: '#FDE7E8'
  },
  {
    nome: 'Namekuseijin',
    corPrimaria: '#57C278',
    corSecundaria: '#D9F7E9'
  },
  {
    nome: 'Raça Freeza',
    corPrimaria: '#DB6EBF',
    corSecundaria: '#FAE9F5'
  },
  {
    nome: 'Raça Majin',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF'
  },
  {
    nome: 'Terráqueo',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2'
  },
  {
    nome: 'Andróide',
    corPrimaria: '#FFBA05',
    corSecundaria: '#FFF5D9'
  },
  {
    nome: 'Kaiohshin',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF'
  },
  {
    nome: 'Hakaishin',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF'
  }]
  

  const [personagens, setPersonagens] = useState([])
  const aoNovoPersonagemAdicionado = (personagem) =>{
   
    
    setPersonagens([...personagens, personagem])

  }
  return (
    <div className="App">
      <Banner />
      <Formulario categorias={categorias.map(categoria => categoria.nome)} aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)}/>
      {categorias.map(categoria => <Categoria key={categoria.nome} nome={categoria.nome} corPrimaria={categoria.corPrimaria} corSecundaria={categoria.corSecundaria}
      personagens={personagens.filter(personagem => personagem.categoria === categoria.nome)}/>)}
      
    </div>
  );
}

export default App;
