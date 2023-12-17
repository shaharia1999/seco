
import CanvasJSReact from '@canvasjs/react-charts';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Barchat = () => {
    const user = useContext(UserContext);
    const newDataSlice = user?.data?.slice(0, 25) || []
    const newFirst1 = user?.data?.slice(25, 50) || []
    const newFirst2 = user?.data?.slice(75, 100) || []
    const newFirst3 = user?.data?.slice(100, 125) || []
    const newFirst4 = user?.data?.slice(125, 150) || []
    const newFirst5 = user?.data?.slice(150, 175) || []
    const newFirst6 = user?.data?.slice(175, 200) || []
    const newFirst7 = user?.data?.slice(200, 225) || []
    const newFirst8 = user?.data?.slice(225, 250) || []
    const [first, setFirst] = useState(0);
    const [first2, setFirst2] = useState(0);
    const [first3, setFirst3] = useState(0);
    const [first4, setFirst4] = useState(0);
    const [first5, setFirst5] = useState(0);
    const [first6, setFirst6] = useState(0);
    const [first7, setFirst7] = useState(0);
    const [first8, setFirst8] = useState(0);
    const [first9, setFirst9] = useState(0);
    const [first10, setFirst10] = useState(0);


    
    // const newdata=user?.data
   

    useEffect(() => {
        console.log(first8);
        setTimeout(() => {
          let newdata2 = newDataSlice.filter((x) => x.deal_status === 1);
          setFirst(Number(newdata2.length));
          let newdata4 = newFirst1.filter((x) => x.deal_status === 1);
          setFirst2(Number(newdata4.length));
          let newdata5 = newFirst2.filter((x) => x.deal_status === 1);
          setFirst3(Number(newdata5.length));
          let newdata6 = newFirst3.filter((x) => x.deal_status === 1);
          setFirst4(Number(newdata6.length));
          let newdata7 = newFirst4.filter((x) => x.deal_status === 1);
          setFirst5(Number(newdata5.length));
          let newdata8 = newFirst6.filter((x) => x.deal_status === 1);
          setFirst6(Number(newdata7.length));
          let newdata9 = newFirst8.filter((x) => x.deal_status === 1);
          setFirst7(Number(newdata2.length));
  
        }, );
      }, [newDataSlice,first]);
    

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
        { x: 100, y: 1 },
        { x: 125, y: 5},
        { x: 150, y: 2},
        { x: 175, y: 3 },
        { x: 200, y:0 },
    
      
      ]
    }]
    
  });

// pie Chart 


  return (
    <div className='  px-10 mt-20'>
 
      <CanvasJSChart options={options2} />
  


     
    </div>
  );
};

export default Barchat;