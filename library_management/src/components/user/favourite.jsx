import '../../styles/user/favourite.css'
const Favourites = ({cart,setCart}) => {
    return ( 
        <div className="favourites">
            <center><h1>Favourites</h1></center>
            <div className="favy">
            {cart.map((data)=>(
                <div className="fav_book">
                    <img src={data.thumbnailUrl} alt=""  height={200} width={250}/><br />
                    <div id='spany'>
                    <span>{data.title}</span><br />
                    </div>
                    <button onClick={()=>setCart(cart.filter((dat)=>dat.id!=data.id))} className='removebtn'>Remove</button>
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default Favourites;