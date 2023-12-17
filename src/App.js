import { useState, createContext, useEffect, } from "react";
import Table from './component/Table';
import axios from "axios";
import Barchat from "./component/Barchat";

export const UserContext = createContext()
function App() {
  const [data, setData] = useState(null);
  useEffect(()=>{
    axios.get('https://erp.seopage1.net/api/leads').then((res)=>{
      setData(res.data)
    }).catch((err)=>{
      console.log(err)
    })

  },[])

  return (
    <div className="mt-20 px-32">
    <UserContext.Provider value={data}>
      <Table></Table>
      <Barchat
      ></Barchat>
    </UserContext.Provider>
    </div>
  );
}

export default App;
