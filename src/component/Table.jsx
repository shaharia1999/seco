import { useContext, useState } from "react";
import { UserContext } from "../App";
import Pagination from "./Pagination";

function Table() {
    const user = useContext(UserContext);
    const [condition,setCondition]=useState([]);
        const [name,setName]=useState(false)
    const [ProjectLink,setProjectLink]=useState(false)
    const [ProjectID,setProjectID]=useState(false)
    const [ProjectBudget,setProjectBudget]=useState(false)
    const [Bidvalue,setBidvalue]=useState(false)
    const [Created,setCreated]=useState(false)
    const [CreateBy,setCreateby]=useState(false)
    const [BiddingDelayTime,setBiddingDelayTime]=useState(false)
    const [Status,setStatus]=useState(false)
  

    // const flatArray = user.flat(Infinity)
    console.log(condition)
  

    console.log(user?.data)
    const thArrey = ['name', 'Project Link', 'Project ID', 'Project Budget', 'Bid value', 'Created', 'Create By', 'Bidding Delay Time', 'Status', 'Deal Status', 'Action']

    // 
    const itemsPerPage = 20;

    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = Math.ceil(user?.data.length / itemsPerPage);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    const displayedData = user?.data.slice(startIndex, endIndex);
    console.log(displayedData);

    const Filter =(item)=>{
        let data= document.getElementById(item);
      
        if (!condition.includes(item)) {
            console.log(item);
            // Add the item to the array
            // setCondition((prevCondition) => [...prevCondition, item]);
            condition.push(item)
            console.log(condition)
            document.getElementById(item).style.display = "none";
            if(item==0){
                setName(true);
            }
            if(item==1){
                setProjectLink(true);
            }
            if(item==2){
                setProjectID(true);
            }
            if(item==3){
                setProjectBudget(true);
            }
            if(item==4){
                setBidvalue(true);
            }
            if(item==5){
                setCreated(true);
            }
            if(item==6){
                setCreateby(true);
            }
            if(item==8){
                setBiddingDelayTime(true);
            }
            if(item==9){
                setStatus(true);
            }
           
          
            console.log(name)
        //    document.querySelector({item});
          
          }else if(condition.includes(item)){
            if(item==0){
                setName(false);
            }
            if(item==1){
                setProjectLink(false);
            }
            if(item==2){
                setProjectID(false);
            }
            if(item==3){
                setProjectBudget(false);
            }
            if(item==4){
                setBidvalue(false);
            }
            if(item==5){
                setCreated(false);
            }
            if(item==6){
                setCreateby(false);
            }
            if(item==8){
                setBiddingDelayTime(false);
            }
            if(item==9){
                setStatus(false);
            }
           
            const updatedCondition = condition.filter((data) =>data !== item );
            setCondition(updatedCondition);
            document.getElementById(item).style.display = "table-cell";
          }
         

    
    }
  

    
    return (
        <div >
            <h1 className="text-3xl font-bold underline text-red-500">
                New Table Added
            </h1>
            <div className="overflow-x-auto relative">
                <div className="flex justify-end"><span className="bg-green-500 px-4 py-2 cursor-pointer text-white">Filter</span></div>
                <div className="">
                    <ul>
                    {
                                thArrey.map((item, index) => {
                                    return (
                                        <li key={index}>
                                           <input
                                           type="checkbox"
                                           value={index}
                                            
                                           onChange={() => Filter(index)}
                                           />
                                           <label>{item}</label>
                                       </li>
                                    )
                                })
                            }
                  
    
                    </ul>
                </div>
                <table className="table table-xs">
                    <thead>
                        <tr>
                            {
                                thArrey.map((item, index) => {
                                    return (
                                        <th key={index} id={index}>
                                            {item}
                                       </th>
                                    )
                                })
                            }

                        </tr>
                    </thead>
                    <tbody>
                        {
                            displayedData && displayedData.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td  className={`${name?'hidden':'table-cell'}`}>{
                                            user.client_name}
                                        </td>
                                        <td  className={`text-blue-500 0${ProjectLink?'hidden':'table-cell'}`}><a href={user.project_link}></a>
                                            Link
                                        </td>
                                        <td className={`${ProjectID?'hidden':'table-cell'}`}>{user.id}</td>
                                        <td className={`${ProjectBudget?'hidden':'table-cell'}`}>{user.actual_value
                                        }</td>
                                        <td className={`${Bidvalue?'hidden':'table-cell'}`}>{user.bid_value
                                        }</td>
                                        <td className={`${Created?'hidden':'table-cell'}`}>{user.country
                                        }</td>
                                        <td className={`${CreateBy?'hidden':'table-cell'}`}>{user.country
                                        }</td>
                                        <td className={`${CreateBy?'hidden':'table-cell'}`}>{user.deadline

                                        }</td>
                                        {
                                            user.deal_status ==0 && <td className={`${ProjectID?'hidden':'table-cell'} text-red-400`}>not convet deal</td>
                                        }
                                        {
                                            user.deal_status ==1 && <td className={`${ProjectID?'hidden':'table-cell'} text-green-500`}>convet deal</td>
                                        }
                                       
                                        <td className={`${BiddingDelayTime?'hidden':'table-cell'}`}>{user.deal_status

                                        }</td>
                                        <td className={`${Status?'hidden':'table-cell'}`}>action</td>

                                    </tr>
                                )
                            })
                        }


                    </tbody>

                </table>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
     
            </div>
        </div>
    );
}

export default Table;
