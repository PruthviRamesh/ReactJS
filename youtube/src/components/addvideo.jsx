import { useRef } from 'react';
import '../style/addvideo.css'
const AddVideo = () => {
    let thumbnail=useRef()
    let title=useRef()
    let channelName=useRef()
    let channelIcon=useRef()
    let views=useRef()
    let submitvideo=(e)=>{
        e.preventDefault()
        let user={
            thumbnail:thumbnail.current.value,
            channelIcon:channelIcon.current.value,
            title:title.current.value,
            channelname:channelName.current.value,
            views:views.current.value
        }
        fetch('http://localhost:4000/videos',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
    }
    return ( 
        <div className="addvideo">
            <form onSubmit={submitvideo}>
                <div className="row">
                <label htmlFor="">Thumbnail:</label>
                <input type="text" name="" id="" ref={thumbnail} /><br /><br />
                </div>
                <div className="row">
                <label htmlFor="">ChannelIcon:</label>
                <input type="text" name="" id="" ref={channelIcon} /><br /><br />
                </div>
                <div className="row">
                <label htmlFor="">Title:</label>
                <input type="text" name="" id="" ref={title} /><br /><br />
                </div>
                <div className="row">
                <label htmlFor="">ChannelName:</label>
                <input type="text" name="" id="" ref={channelName} /><br /><br />
                </div>
                <div className="row">
                <label htmlFor="">Views:</label>
                <input type="text" name="" id="" ref={views} /><br /><br />
                </div>
                <input type="submit" value="Submit" id="submit" />
            </form>
        </div>
     );
}
 
export default AddVideo;