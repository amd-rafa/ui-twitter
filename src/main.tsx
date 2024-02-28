// Programação interativa vs. programação declarativa
//TypeScript = ferramenta de tipagem para o JavaScript
//Tipagem estática: Mecanimo para evitar error ENQUANTO a gente desenvolve nosso App
// renderizar => mostrar em tela
// Componentes: pequenas partes de interaface reutilizável
// Propriedade: tudo que muda visualmente/comportamental

import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'; 
 
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>, 
)