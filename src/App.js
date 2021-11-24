import React from 'react'
import Container from './layout/Container'
import Sidebar from './layout/Sidebar'
import Widgets from './layout/Widgets'
import Content from './layout/Content'

const App = () => {
  return (
    <Container>
      <Sidebar />
      <Content />
      <Widgets />
    </Container>
  )
}

export default App
