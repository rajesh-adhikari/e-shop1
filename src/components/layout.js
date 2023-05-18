import React from "react";
import { Outlet,Link,useNavigate} from "react-router-dom";
import {CartIcon,HomeIcon } from "./icons";
import Search from "./search";

const Layout = ({ categories }) => {
    const navigate=useNavigate();
    const renderCategories = () => {
        return categories.data.map((c) => (
            <li key={c.id}>
                <Link to={`/categories/${c.id}`}>{c.title}</Link>
            </li>
        ));
    };
    return(
    <>
      <header>
        <div id="headerHomeIcon">
            <HomeIcon onClick={()=>navigate('/')} width={40}/>
  
        </div>
        <Search/>
        <div id="headerTitle">E-shop</div>
        <div id="headerCartIcon">
            <CartIcon onClick={()=>navigate('/basket')} width={40}/>
        </div>
      </header>
        <section>
            <nav>
                {categories.errMessage && <div>Error:{categories.errMessage}</div>}
            
                <ul>
                  {
                 categories.data && renderCategories()}
                </ul>
              
            </nav>
            <main>
                <Outlet/>
            </main>

        </section>

        <footer><Link to="/">Home</Link> | <Link to="/basket">Cart</Link></footer>
    </>
    )
}
export default Layout;