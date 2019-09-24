import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import AddText from '../container/AddText';
import TextLists from '../container/TextLists';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <AddText />
        <TextLists />
        <Footer />
      </div>
    </div>
  );
}

export default App;
