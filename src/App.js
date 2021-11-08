import './App.css';
import BodyContent from './components/BodyContent';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>    
      <GlobalStyle />      
      <Navigation />
      <MainContent />
      <BodyContent />
    </>
  );
}

export default App;