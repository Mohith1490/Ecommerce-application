import React from "react";
import ItemCardComponent from "./components/ItemCardComponent.tsx";
import  {products}  from './projects.js'
import './global.css'

function App() {
  return (
    <>
        <div className="w-full flex justify-center " >
          <div className="w-[85%] h-full relative top-10 grid grid-cols-4" >
            {
              products.map((product) => {
                return <ItemCardComponent key={product.id} {...product} />
              })
            }
          </div>
        </div>
    </>
  );
}

export default App;
