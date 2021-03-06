import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'
import PaypalButton from './PaypalButton'

function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)
    const [user_id,setUserID]=state.userAPI.id
    const [email,setEmail]=state.userAPI.email
    const [name,setName]=state.userAPI.name
    const [address,setAddress]=useState('');
    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }

        getTotal()

    },[cart])

    const addToCart = async (cart) =>{
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    }


    const increment = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }

    const tranSuccess = async() => {  
        if(!address) alert("Vui lòng nhập địa chỉ");
        else{
            await axios.post('/api/order', {name,email,cart, user_id, address}, {
                headers: {Authorization: token}
            })
    
            setCart([])
            addToCart([])
            alert("You have successfully placed an order.")
        }
        
    }


    if(cart.length === 0) 
        return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2> 

    return (
        <div>
            {
                cart.map(product => (
                    <div className="detail cart" key={product._id}>
                        <img src={product.images.url} alt="" />

                        <div className="box-detail">
                            <h2>{product.title}</h2>

                            <h3>{product.price * product.quantity}.000đ</h3>
                            <p>{product.description}</p>
                            <p>{product.content}</p>

                            <div className="amount">
                                <button onClick={() => decrement(product._id)}> - </button>
                                <span>{product.quantity}</span>
                                <button onClick={() => increment(product._id)}> + </button>
                            </div>
                            
                            <div className="delete" 
                            onClick={() => removeProduct(product._id)}>
                                X
                            </div>
                        </div>
                    </div>
                ))
            }

            <div className="total">
                <div className="row">
                    <h3>Total:{total}.000đ</h3>
                    <div class="group">
                        <label for="">Nhập địa chỉ    </label>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <input type="text" onChange={(e)=>{setAddress(e.target.value);console.log(address)}} class="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
                    </div>
                </div>
                <button classname="order" onClick={tranSuccess}>ĐẶT ĐƠN HÀNG
                </button>
            </div>
        </div>
    )
}

export default Cart