import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './screens/Dashboard'
import ToolsandServices from './screens/ToolsandServices'
import Articles from './screens/Articles'
import Templates from './screens/Templates'
import ProductScreen from './screens/ProductScreen'
import TemplateScreen from './screens/TemplateScreen'
import ArticleScreen from './screens/ArticleScreen'


function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
      <Container>
        <Route path='/' component={Dashboard} exact />
        <Route path='/toolsandservices' component={ToolsandServices} />
        <Route path='/articles' component={Articles} />
        <Route path='/templates' component={Templates} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/template/:id' component={TemplateScreen} />
        <Route path='/article/:id' component={ArticleScreen} />
      </Container>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;
