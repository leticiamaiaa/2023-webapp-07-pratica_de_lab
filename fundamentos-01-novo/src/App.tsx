import { useState } from 'react'
import './App.css'

const AppNavBar = () => {
  return (
  <h1>Título</h1>
  )
}

const AppEntrada = (props:any) => {
  return (
    <input value={props.texto} onChange={props.mudarTexto} placeholder="Coloque uma mensagem"/>
  )
}

const AppCloneEntrada = (props:any) => {
  return (
    <p>{props.texto}</p>
  )
}

function App() {
const [entrada, setEntrada] = useState('')

const funcao_texto = (txt:any) => setEntrada(txt.target.value)

  return (
    <>
    <AppNavBar />
    <AppEntrada texto = {entrada} mudarTexto = {funcao_texto}/>
    <AppCloneEntrada texto = {entrada}/>
    </>
  )
}

export default App