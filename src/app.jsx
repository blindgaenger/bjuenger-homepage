import React from 'react';
import { Route, Router, Switch } from 'wouter';
import Footer from './components/footer';
import Header from './components/header';
import MetaTags from './components/meta-tags';
import useHashLocation from './hooks/wouter-hash';
import About from './pages/about';
import Home from './pages/home';
import Work from './pages/work';
import './styles/app.css';

export default function App() {
  return (
    <Router hook={useHashLocation}>
      <MetaTags />

      <div className="card" itemScope itemType="http://schema.org/Person">
        <Header />

        <main role='main'>
          <Switch>
            <Route path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/work' component={Work} />
          </Switch>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
