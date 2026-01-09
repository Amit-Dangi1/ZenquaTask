import DealsBoard from "./components/DealsBoard";
import Navbar from "./components/Navbar";

 
const App = () => {
  return (
    <>
      
   

    
      <div className="container-fluid"  style={{
          background: "linear-gradient(180deg, #f5f9ff, #eef3ff)",
         
        }}>
         
        <Navbar/>
      <DealsBoard/>
      </div>
      
    </>
  );
};

export default App;
