import React, { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdOutlineLogin } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
function ButtonHeader() {
  const navbarlist = [
    { title: "Home", link: "/" },
    { title: "About", link: "/About" },
    { title: "Accessories", link: "/Accessories" },
    { title: "Blog", link: "/Blog" },
    { title: "contact", link: "/contact" },
  ];
  const [catogres, setCatogry] = useState([]);
  const[active,setActive]=useState(false)
const[menuOpen,setMenuOpen]=useState(false)
  const location =useLocation()
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCatogry(data));
  }, []);

useEffect(()=>{
  setActive(false)
},[location])
  return (
    <div className="ButtonHeader">
    <div className="Button_Header">
      <div className="container">
        <div className="nav">
          <div className="catogry_nav">
            <div className="catogry_btn" onClick={()=>setActive(!active)}>
              <IoIosMenu />
              <p> catogry </p>
              <FaRegArrowAltCircleDown />
            </div>
            <div className={`catogry_list ${active?"active":""}`}>
              {catogres.map((category) => (
                <Link to={`category/${category.slug}`} key={category.slug}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

<div className="catogry_link relative">

  <div
    className="menu_icon text-2xl cursor-pointer hidden max-[800px]:block"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? "✖" : <IoIosMenu />}
  </div>

  <ul className="flex gap-6 items-center min-[801px]:flex max-[800px]:hidden">
    {navbarlist.map((item) => (
      <li key={item.link}>
        <Link to={item.link}>{item.title}</Link>
      </li>
    ))}
  </ul>

{menuOpen && (
  <ul
    className="
      flex-col absolute top-12 left-0 w-48 bg-white shadow-lg rounded-md py-2 z-50
      transition-all duration-300 ease-in-out animate-slideDown
      max-[800px]:flex
      min-[801px]:hidden
    "
  >


    {navbarlist.map((item) => (
      <li
        key={item.link}
        className="w-full text-center py-2 border-b last:border-none"
        onClick={() => setMenuOpen(false)}
      >

        <Link to={item.link}>{item.title}</Link>
      </li>
    ))}
  </ul>
)}

</div>
        </div>

        <div className="cart_user">

          <Link to={"/LoginRegister"}>
            <MdOutlineLogin />
          </Link>
        </div>
      </div>
    </div>

    </div>
  );
}

export default ButtonHeader;
