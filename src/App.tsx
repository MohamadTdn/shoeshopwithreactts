import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

export default function App() : React.JSX.Element {

  const router = useRoutes(routes)

  return (
    <div>
      {router}
    </div>
  )
}
