import '../styles/cart.css'
const Cart = ({cart,setcart}) => {
    let subTotal=cart.reduce((sum,x)=>{
        return sum+(x.price*80)-((x.price*80)*10)/100
    },0)
    return ( 
        <div className="cart_">
            <div className='cart_y'>
            {cart.map((data)=>(
                <div className="carty">
                    <div className="cartyimg">
                        <img src={data.thumbnail} alt="" />
                    </div>
                    <div className="cartytitle">
                        <h1>{data.title}</h1>
                        <p id="price"><span id="inner">&#8377;{(data.price*80)-((data.price*80)*10)/100}</span> M.R.P: <strike>&#8377;{data.price*80}</strike> (10% off)</p>
                    </div>
                </div>
            ))}
            </div>
            <h1>SubTotal: &#8377;{subTotal}</h1>
        </div>
     );
}
 
export default Cart;