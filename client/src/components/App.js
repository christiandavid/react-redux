import React from 'react';
import dotenv from 'dotenv';
import AddText from '../container/AddText';
import TextLists from '../container/TextLists';

dotenv.config();

function App() {
  return (
    <div>
      <AddText />
      <TextLists />
    </div>
  );
}

export default App;
