import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from './components/Drawer';

function App() {
  return (  
    <div className='wrapper'>
      <Drawer />
      <Header />
      <div className="content">
        <div className='content_top'>
          <h1>All Sneakers</h1>
          <input placeholder="Search..." />
        </div>
        <div className='cards'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;