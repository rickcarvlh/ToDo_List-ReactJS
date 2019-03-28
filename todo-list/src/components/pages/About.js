import React from 'react'

export default function About() {
  return (
      /** React.Fragment -> Quando eu nao preciso de um elemento na Dom posso
       * usar isto en vez de uma div. É como se não estivesse aqui nada mas é preciso
       * para o JSX
       */
    <React.Fragment>
      <h1>About</h1>
      <p>This is the TodoList app v1.0.0. It is part of a react course</p>
    </React.Fragment>
  )
}
