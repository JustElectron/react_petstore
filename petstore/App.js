import React, {useState} from 'react';
import NavigationBar from './src/navigation/navigation-bar';
import ViewSelector from './src/navigation/view-selector';


const App = () => {
  const [viewIndex, setViewIndex] = useState(0)

  const selectView = (i) => {
    const newViewIndex = i;
    setViewIndex(newViewIndex);
  }

  return (
    <>
      <NavigationBar onPress={selectView}/>
      <ViewSelector/>
    </>
  );
}

export default App;