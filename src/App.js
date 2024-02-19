import './App.css';
import { FaSearch,FaContao,FaRegSave,FaShoppingCart} from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { BiSolidShoppingBags } from "react-icons/bi";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { TbShoppingBagSearch } from "react-icons/tb";
import { FaFacebook,FaInstagramSquare,FaTwitter } from "react-icons/fa";
import { CiSaveUp2 } from "react-icons/ci";

import ImageList from './ImageList';
function App() {
  return (
   <div className='main-container'>
              <div className='nav-container'>
                    <h1 className='nav-name'>TANN TRIM</h1>
                    <div className='nav-icons'>
                        <FaSearch className='icons'/>
                        <FaContao className='icons'/>
                        <FaRegSave className='icons'/>
                        <FaShoppingCart className='icons'/> 
                    </div>
                    
              </div>
              <div className='nav-items'>
                          <p>Bags</p>
                          <p>Travel</p>
                          <p>Accesories</p>
                          <p>Gifting</p>
                          <p>Jewelery</p>
              </div>
              <div className='All-Bags'>
                <div>
                    <FaBagShopping className='bag-icon'/>
                    <h6>All Bags</h6>
                </div>
                    <div>
                    <BiSolidShoppingBags className='bag-icon'/>
                    <h6>Tote Bag</h6>
                    </div>
                    <div>
                    <PiHandbagSimpleLight className='bag-icon'/>
                      <h6>Handbags</h6>
                    </div>
                    <div>
                    <LiaShoppingBagSolid className='bag-icon'/>
                      <h6>Duffle Bag</h6>
                    </div>
                    <div>
                    <TbShoppingBagSearch className='bag-icon'/>
                      <h6>Slings Bags</h6>
                    </div>
                    <div>
                    <FaBagShopping className='bag-icon'/>
                      <h6>Messenger Bags</h6>
                    </div>
                    <div>
                    <PiHandbagSimpleLight className='bag-icon'/>
                      <h6> Vanity Bag Bags</h6>
                    </div>                 
              </div>
              <div className='backpacks'>
                      <h3>Bags . Backpacks</h3>
                      <h3>13 Products <CiSaveUp2 className='p-icons'/></h3>
              </div>
              <ImageList />
              <div className='footer'>
                  <h1>Contact Us</h1>
                  <div className='contact-icons'>
                  <FaFacebook className='follow-icons'/>
                  <FaInstagramSquare className='follow-icons'/>
                  <FaTwitter className='follow-icons'/>
                  </div>
                  <p>saleai@gmail.com</p>
                  <hr></hr>
                  <p>&copy; 2024 SaleAI Company. All rights reserved.</p>
              </div>
   </div>
   
  );
}

export default App;
