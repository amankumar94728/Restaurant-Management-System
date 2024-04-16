import { Route,Routes } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Sgn from "./components/Sgn";
import Sgup from "./components/Sgup";
// import AdminApp from "./components/admin/src/AdminApp";
import Content from "./components/adminPanel/dashboard/dashboardContent";
import Navbar from "./components/adminPanel/dashboard/navbar";
import Users from "./components/adminPanel/users/userContent";
import Feedback from "./components/adminPanel/feedback/feedbackContent";
import Setting from "./components/adminPanel/setting/settingContent";
// import Mdashboard from "./components/admin/src/pages/app"
//import Navbar from "../dashboard/navbar";
import Userreg from "./components/user_res/user_res";
import Search from "./components/Search";
import Hello from "./components/ShopOwner/Hello"
import Cookies from "js-cookie";
import ShopDetail from "../src/components/adminPanel/users/shop_det_sheet";
import TransactionForm from "./components/ShopOwner/transection_shop";
import Feedbacks from "./components/ShopOwner/feedback_shop";
import IngredientForm from "./components/ShopOwner/ingredient_shop_front";
import MenuItem from "./components/ShopOwner/menu_item_front.js";
import OrderItem from "./components/ShopOwner/order_item_front.js";
import Table from "./components/ShopOwner/table_shop_front.js";
import Reservation from "./components/ShopOwner/reservation_front.js";
import Resturant from "./components/restutrant/resturant_front.js"
import Book_Table from "./components/restutrant/resturant_page/book_table.js";
import Shop_owner_dashboard from "../src/components/shop_admin/dashboard/shop_owner_dashboard.js";
import CustomerDetails from "../src/components/shop_admin/users/customer_det_sheet.js";
import Customer from "../src/components/shop_admin/users/customerContent.js";
import Menudisplay from "../src/components/shop_admin/menu/menu_item_admin.js";
import User from "../src/components/Userpage/UserPage.js";
import Notification from "./components/notification/Notification.jsx";
import HomePage from "./home.js";
export default function App(){
  const value = Cookies.get("User-Details")
  console.log(value);
return (
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/Sgn"  element={<Sgn />} /> 
  <Route path="/Sigup"  element={<Sgup />} />
  {/* <Route path="/admin" element={<AdminApp />} /> */}
  {/* <Route path={`/${value}`} element={<Hello />} /> */}
  <Route path="/admin/navbar" element={<Navbar />} />
  <Route path={`/admin/dashboard`} element={<Content />} />
  <Route path="/admin/notification" element={<Notification />} />
  <Route path="/admin/users" element={<Users />} />
  <Route path="/admin/feedback" element={<Feedback />} />
  <Route path="/admin/settings" element={<Setting />} />
  <Route path="/admin/customer/details" element={<CustomerDetails />} />
  {/* <Routes path="/admindasboard" element={<Mdashboard />} /> */}
  <Route path="/Userreg" element={<Userreg />} />
   <Route path="/admin/users/details" element={<ShopDetail />} />
   <Route path={`/${value}/owner/transection`} element={<TransactionForm />} />
   <Route path={`/${value}/feedbackform`} element={<Feedbacks />} />
   <Route path={`/${value}/ingredientForm`} element={<IngredientForm />} />
   <Route path={`/${value}/admin/menuitem`} element={<MenuItem />} />
   <Route path={`/${value}/orderitem`} element={<OrderItem />} />
   <Route path={`/${value}/create_table`} element={<Table />} />
   <Route path={`/${value}/reservation`} element={<Reservation />} />
   <Route path={`/${value}`} element={<Resturant />} />
   <Route path={`/${value}/book-table`} element={<Book_Table />} />
   <Route path={`/${value}/admin/dashboard`} element={<Shop_owner_dashboard />} />
   <Route path={`/${value}/admin/users`} element={<Customer />} />
  
   <Route path={`/${value}/menu-display`} element={<Menudisplay />} />
   <Route path={`/user`} element={<User />} />
</Routes>
);
}





  // const [name,setname]=useState('');

//   const ShopRegistrationForm = () => {
//     const [formData, setFormData] = useState({
//       name: '',
//       shopName: '',
//       gstNo: '',
//       mobileNo: '',
//       logo: null,
//     });

//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     };



//   console.log(name);
//   function handleSubmit(e){
//     e.preventDefault();
//     axios.post('http://localhost:3001/api/v1/test',{name});
//   }
//   return(
//     <form onSubmit={(e)=>handleSubmit(e)}>
//       <label className="name"> Name : </label>
//       <input type="text" placeholder="Enter your name" onChange={(e)=>setname(e.target.value)} value={name} id="name" required />
//        <br/>
//        <label className="name"> Mobile : </label>
//       <input type="text" placeholder="Enter Mobile no" onChange={(e)=>setname(e.target.value)} value={name} id="mobile" required />
//        <br/>
      
//       <input type="submit" value="save" />
//     </form>
//   );
// }