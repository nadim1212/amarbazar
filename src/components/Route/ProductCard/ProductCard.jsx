import React, { useState } from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { Link, Router } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import { useEffect } from "react";
import { addTocart } from "../../../redux/actions/cart";
import { toast } from "react-toastify";
import Ratings from "../../Products/Ratings";

const ProductCard = ({ data,isEvent }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  return (
    <>
   

    <section className=" mx-auto grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-5 gap-x-5 mt-10 mb-5">
  {/*   ✅ Product card 1 - Starts Here 👇 */}
  <div className=" bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl card  card  ">
    <a href="#">
    
      <img
        src={`${data.images && data.images[0]?.url}`}
        alt="Product"
        className="h-80 w-72 object-cover rounded-t-xl images"
        onClick={() => setOpen(!open)}
      />
    
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">{data.shop.name}</span>
        <p className="text-lg font-bold text-black truncate block capitalize">
        {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
        </p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">
          {data.originalPrice === 0
                  ? data.originalPrice
                  : data.discountPrice}
                  ৳
          </p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2"> {data.originalPrice ? data.originalPrice + " ৳" : null}</p>
          </del>
       
          <div class="ml-auto cart" onClick={() => setOpen(!open)} ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
          
        </div>
      </div>
      
    </a>
  </div>
</section>
{open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
     
    </>




  
  );
};

export default ProductCard;
