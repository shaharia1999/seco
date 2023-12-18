
import CanvasJSReact from '@canvasjs/react-charts';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Barchat = () => {
    const user = useContext(UserContext);
  useEffect(()=>{
    if(user){
    
      const newDataSlice = user?.data?.slice(0, 25).filter((x) => x.deal_status === 1);
      const newFirst1 = user?.data?.slice(26, 50).filter((x) => x.deal_status === 1)
      const newFirst2 = user?.data?.slice(51, 75).filter((x) => x.deal_status === 1)
      const newFirst3 = user?.data?.slice(76, 100).filter((x) => x.deal_status === 1)
      const newFirst4 = user?.data?.slice(101, 125).filter((x) => x.deal_status === 1)
      const newFirst5 = user?.data?.slice(126, 150).filter((x) => x.deal_status === 1)
      const newFirst6 = user?.data?.slice(151, 175).filter((x) => x.deal_status === 1)
      const newFirst7 = user?.data?.slice(176, 200).filter((x) => x.deal_status === 1)
      const newFirst8 = user?.data?.slice(201, 225).filter((x) => x.deal_status === 1)
      const newFirst9 = user?.data?.slice(226, 250).filter((x) => x.deal_status === 1)
      console.log(newDataSlice.length,newFirst1.length,newFirst2.length,newFirst3.length,newFirst4.length,newFirst5.length,newFirst6.length,newFirst7.length,newFirst8.length,newFirst9.length);

      updateFirstDataPointY(newDataSlice,newDataSlice,newFirst1,newFirst2,newFirst3,newFirst4,newFirst5,newFirst6,newFirst7,newFirst8,newFirst9)
    }

    
    
  },[user])
  const updateFirstDataPointY = (newDataSlice,newFirst1,newFirst2,newFirst3,newFirst4,newFirst5,newFirst6,newFirst7,newFirst8,newFirst9) => {
    // Create a copy of the options2 state
    const updatedOptions = { ...options2 };

    // Update the y value of the first data point
    updatedOptions.data[0].dataPoints[0].y = newDataSlice.length;
    updatedOptions.data[0].dataPoints[1].y = newFirst2?.length;
    updatedOptions.data[0].dataPoints[2].y = newFirst2.length;
    updatedOptions.data[0].dataPoints[3].y = newFirst3.length;
    updatedOptions.data[0].dataPoints[4].y = newFirst4.length;
    updatedOptions.data[0].dataPoints[5].y = newFirst5.length;
    updatedOptions.data[0].dataPoints[6].y = newFirst6.length;
    updatedOptions.data[0].dataPoints[7].y = newFirst7.length;
    updatedOptions.data[0].dataPoints[8].y = newFirst8.length;
    updatedOptions.data[0].dataPoints[9].y = newFirst9.length;

    // Update the state with the new options
    setOptions2(updatedOptions);
  };
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

        { x: 25, y:0},
        { x: 50, y: 0 },
        { x: 75, y: 0 },
        { x: 100, y: 0 },
        { x: 125, y: 0},
        { x: 150, y: 0},
        { x: 175, y: 0 },
        { x: 200, y:0 },
        { x: 225, y:0 },
        { x: 250, y:0 },
    
      
      ]
    }]
    
  });

// pie Chart 


  return (
    <div className='  px-10 mt-20'>
      <h1>Hare convet deal 0-25=3, 26-50=5, 51-75=5, 75-100=5, 101-125=5, 126-150=1, 151-175=2, 176-200=4, 201-225=5, 226-250=9</h1>
 
      <CanvasJSChart options={options2} />
  


     
    </div>
  );
};

export default Barchat;