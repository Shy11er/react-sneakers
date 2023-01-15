import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from './components/Drawer';

const data = [
  {title: "Men`s Sneakers Nike Blazer Mid Suede", imageUrl: "nike_blaze_mid", price: '1,999'},
  {title: "Men`s Sneakers Nike Air Force 1 Low", imageUrl: "nike_air_force_1_low", price: '2,000'},
  {title: "Men`s Sneakers Nike Jordan 1 Retro", imageUrl: "nike_jordan_1_retro", price: '3,909'},
  {title: "Men`s Sneakers Nike Air Max 270", imageUrl: "nike_air_max_270", price: '1,800'},
  // {title: "Men`s Sneakers Nike Blazer Mid Suede", imageUrl: "nike_blaze_mid", price: '1,702'},
  // {title: "Men`s Sneakers Nike Blazer Mid Suede", imageUrl: "nike_blaze_mid", price: '1,990'},
  // {title: "Men`s Sneakers Nike Blazer Mid Suede", imageUrl: "nike_blaze_mid", price: '1,800'},
  // {title: "Men`s Sneakers Nike Blazer Mid Suede", imageUrl: "nike_blaze_mid", price: '4,909'},
]

function App() {
  return (  
    <div className='wrapper'>
      {/* <Drawer /> */}
      <Header />
      <div className="content">
        <div className='content_top'>
          <h1>All Sneakers</h1>
          <input placeholder="Search..." />
        </div>
        <div className='cards'>
          {/* <Card title="asd" imageUrl={data[0].imageUrl} price={data[0].price} /> */}
          {data.map((val, index) => {
            return <Card title={val.title} imageUrl={val.imageUrl} price={val.price} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;