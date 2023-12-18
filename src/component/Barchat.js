
import CanvasJSReact from '@canvasjs/react-charts';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Barchat = () => {
    const user = useContext(UserContext);
  useEffect(()=>{
    if(user){
    
      const newDataSlice = user?.data?.slice(0, 25).filter((x) => x.deal_status === 1);
      const newFirst1 = user?.data?.slice(25, 50).filter((x) => x.deal_status === 1)
      const newFirst2 = user?.data?.slice(50, 75).filter((x) => x.deal_status === 1)
      const newFirst3 = user?.data?.slice(75, 100).filter((x) => x.deal_status === 1)
      const newFirst4 = user?.data?.slice(100, 125).filter((x) => x.deal_status === 1)
      const newFirst5 = user?.data?.slice(125, 150).filter((x) => x.deal_status === 1)
      const newFirst6 = user?.data?.slice(150, 175).filter((x) => x.deal_status === 1)
      const newFirst7 = user?.data?.slice(175, 200).filter((x) => x.deal_status === 1)
      const newFirst8 = user?.data?.slice(200, 225).filter((x) => x.deal_status === 1)
      const newFirst9 = user?.data?.slice(225, 250).filter((x) => x.deal_status === 1)
      console.log(newDataSlice.length,newFirst1.length,newFirst2.length,newFirst3.length,newFirst4.length,newFirst5.length,newFirst6.length,newFirst7.length,newFirst8.length,newFirst9.length);

      
    }
    
    
  },[user])
const [options2, setOptions2] = useState({
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",

    axisY: {
      includeZero: true
    },
    height:700,
    data: [{
      type: "column",
      indexLabelFontColor: "#5A5757",
      indexLabelPlacement: "outside",
      dataPoints: [

        { x: 25, y:3},
        { x: 50, y: 6 },
        { x: 75, y: 5 },
        { x: 100, y: 5 },
        { x: 125, y: 1},
        { x: 150, y: 2},
        { x: 175, y: 5 },
        { x: 200, y:6 },
        { x: 225, y:9 },
        { x: 250, y:2 },
    
      
      ]
    }]
    
  });

// pie Chart 


  return (
    <div className='  px-10 mt-20'>
      <h1>Hare convet deal 0-25=3, 25-50=6, 50-75=5, 75-100=5, 100-125=1, 125-150=2, 150-175=5, 175-200=6, 200-225=9, 225-250-2</h1>
 
      <CanvasJSChart options={options2} />
  


     
    </div>
  );
};

export default Barchat;