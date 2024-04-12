import { useEffect, useState } from "react";

const VideosLogic = ({video,fn,data,title}) => {
    let[state,setUsers]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch('http://localhost:4000/videos')
            let data=await response.json()  
            setUsers(data)  
        }
        fetchData()
    },[])
    function removed(id){
        setUsers(state.filter((data)=>data.id!=id))
    }
    return ( 
        <div className="vid">
        <center><h1>{title}</h1></center>
        <div className="videologic">
            {state.length==0? "There are no videos to be deleted":state.map((data)=>{
                return(
                <div className="video">
                    <div className="thumb">
                        <img src={data.thumbnail} alt="" />
                    </div>
                    <div className="details">
                        <div className="cicon">
                            <img src={data.channelIcon} alt="" />
                        </div>
                        <div className="title">
                            <span id='title'>{data.title}</span><br />
                            <span>{data.channelname}</span><br />
                            <span>{data.views}M views</span>
                            <a onClick={()=>removed(data.id)} style={{cursor:"pointer",marginLeft:"230px"}}>Delete</a>
                        </div>
                    </div>
                </div>    
            )})}
            {/* <button onClick={()=>setUsers([])}>Delete All</button> */}
        </div>
        </div>
     
     );
}
export default VideosLogic;