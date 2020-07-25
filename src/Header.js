import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue} from "./StateProvider";

function Header() {
    const [{basket}] = useStateValue();
    console.log(basket);

    return (
        <nav className="header">
            {/*Amazon Logo*/ }
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link> 

            {/*Search Bar*/ }
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" />
            </div>

            {/*3 Links*/ }
            <div className="header__nav">

                <Link to="login" className="header__link">
                    <div className="header__option">
                        <span class="header__optionLineOne">Hello Qazi</span>
                        <span class="header__optionLineTwo">Sign  In</span>
                    </div>
                </Link>

                <Link to="login" className="header__link">
                    <div className="header__option">
                        <span  class="header__optionLineOne">Returns</span>
                        <span class="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="login" className="header__link">
                    <div className="header__option">
                        <span class="header__optionLineOne">Your</span>
                        <span class="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                {/*4TH LINK BASKET  */}
                
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/**Shopping basket icon */}
                        <ShoppingBasketIcon/>
                        {/**Number of items in the basket */}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>

                    </div>
                </Link>
            </div>

            
        </nav>
    )
}

export default Header
