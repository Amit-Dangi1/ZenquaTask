 import DealsBoard from "./comonents/DealsBoard";
 import Navbar from "./comonents/Navbar";

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
