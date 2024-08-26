
import './Styles CSS/App.css';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Fruits from './Fruits';
import CartList from './CartList';
import ContactUs from './ContactUs';
import Footer from './Footer';
import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vegetables from './Vegetables.js';
import Dairy from './Dairy';

function App(){
  const [product, setProduct]=useState([
    {
      url:'https://freshclub.co.in/cdn/shop/products/25690_original.png?v=1660188894&width=600',
      name: 'Pomegranate',
      price:199,
      amt:'1 Kg'
    },
    {
      url:'https://freshclub.co.in/cdn/shop/products/Bananas1kg.jpg?v=1660188813&width=600',
      name: 'Banana',
      price:150,
      amt:'1 Kg'
    },
    {
      url:'https://freshclub.co.in/cdn/shop/products/ApplesWashington4pcs.jpg?v=1660188812&width=600',
      name: 'Apple',
      price:300,
      amt:'1 Kg'
    },
    {
      url:'https://freshclub.co.in/cdn/shop/products/OrangesImported1kg.jpg?v=1660188891&width=360',
      name:'Orange',
      price:250,
      amt:'1 Kg'
    },
    {
      url:'https://freshclub.co.in/cdn/shop/products/GrapeFruit1pc.jpg?v=1660188903&width=600',
      name:'Grape Fruit',
      price:289,
      amt:'1 Kg'
    },
    {
      url:'https://freshclub.co.in/cdn/shop/products/ca.jpg?v=1634553472&width=360',
      name:'Custard Apple',
      price:85,
      amt:'1 Kg'
    }
  

  ])

  const [vege, setVege]=useState([
    {
      url:'https://freshclub.co.in/cdn/shop/products/Cauliflower.jpg?v=1660188984&width=600',
      name: 'Cauliflower',
      price:50,
      amt:'1 Kg'
    },
    {
      url:'https://freshclub.co.in/cdn/shop/products/Tomato_Local_1kg.jpg?v=1660188996&width=600',
      name: 'tomato',
      price:120,
      amt:'1 Kg'
    },
    {
      url:'https://freshclub.co.in/cdn/shop/products/Broccoli_Approx.500g.jpg?v=1660189010&width=600',
      name: 'Broccoli',
      price:240,
      amt:'1 Kg'
    },
    {
      url:'https://freshclub.co.in/cdn/shop/products/Cabbage1pc.jpg?v=1660188807&width=600',
      name:'Cabbage',
      price:250,
      amt:'1 Kg'
    },
    {
      url:'https://freshclub.co.in/cdn/shop/products/download_1.jpg?v=1655986447',
      name:'Cucumber',
      price:289,
      amt:'1 Kg'
    },
    {
      url:'https://freshclub.co.in/cdn/shop/products/313f_Q4ZXxL._SX425.jpg?v=1660188993&width=600',
      name:'Potatoes',
      price:85,
      amt:'1 Kg'
    },
    {
      url:'https://freshclub.co.in/cdn/shop/products/SambarOnion250g.jpg?v=1660189001&width=600',
      name:'Onions',
      price:85,
      amt:'1 Kg'
    },
    {
      url:'https://freshclub.co.in/cdn/shop/products/Garlic-1.jpg?v=1660188990&width=600',
      name:'Garlic',
      price:85,
      amt:'1 Kg'
    }
  

  ])

  const [dry, setDry]=useState([
    {
      url:'https://freshclub.co.in/cdn/shop/products/815V9EawbJL._SL1500.png?v=1655986659&width=600',
      name: 'Heritage Milk (toned)',
      price:30,
      amt:'500mL'
    },
    {
      url:'https://freshclub.co.in/cdn/shop/products/123_69be53e1-56bb-4266-ae61-2ee0c5ae9f76.jpg?v=1660292819',
      name: 'Amul Cheese Cubes',
      price:131,
      amt:'200g'
    },
    {
      url:'https://freshclub.co.in/cdn/shop/products/MilkyMistCheeseSlice200g.jpg?v=1660189080&width=600',
      name: 'Milk Mist Cheese Slice',
      price:170,
      amt:'200g'
    },
    {
      url:'https://freshclub.co.in/cdn/shop/products/71hVKOXk8DL._SL1500.jpg?v=1655986927&width=600',
      name:'Paneer',
      price:250,
      amt:'500g'
    },
    {
      url:'https://freshclub.co.in/cdn/shop/products/MilkyMistCurdFarmFresh400g.jpg?v=1660189094&width=600',
      name:'Milky Mist Curd',
      price:135,
      amt:'1 Kg'
    },
    {
      url:'https://freshclub.co.in/cdn/shop/products/104860-2_1-amul-butter-pasteurised.jpg?v=1655986887',
      name:'Amul Butter',
      price:256,
      amt:'500g'
    },
    {
      url:'https://freshclub.co.in/cdn/shop/products/252429_7-grb-ghee.png?v=1660189030&width=600',
      name:'GRB Ghee',
      price:406,
      amt:'500mL'
    },
    {
      url:'https://freshclub.co.in/cdn/shop/products/NestlecondensedMilk400g.jpg?v=1660189084&width=600',
      name:'Nestle Condensed Milk ',
      price:139,
      amt:'400g'
    }
  

  ])

  const [cart,setCart]=useState([])
  console.log(cart)
  const addToCart=(data)=>{
    console.log(data)
    setCart([...cart,{...data, quantity:1}])
  }
  

  return(
<>
<div>
<BrowserRouter>
<Header count={cart.length} />
<Routes>
 <Route path='/' element={<Home/> }/>
<Route path='About' element={<About/>}/>
<Route path='Contact' element={<Contact/>}/>
<Route path='Fruits' element={<Fruits product={product} addToCart={addToCart}/>}/>
<Route path='Vegetables' element={<Vegetables vege={vege} addToCart={addToCart}/>}/>
<Route path='Dairy' element={<Dairy dry={dry} addToCart={addToCart}/>}/>
<Route path='Carts' element={<CartList cart={cart}/>}/>
<Route path='/ContactUs' element={<ContactUs/>}/>
</Routes>

</BrowserRouter>

</div>
</>
  );
}


export default App;
