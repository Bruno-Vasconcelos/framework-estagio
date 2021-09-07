import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <AreaNavBar>
            <div className="container">
                <nav>
                    <ul>
                        <li><a><Link to="/">Menu Principal</Link></a></li>
                    </ul>
                </nav>
            </div>
        </AreaNavBar>
    );
}

const AreaNavBar = Styled.div`
    height: 60px;
    background-color: #791f94;
    color: #fff;
    display: flex;

    .container{
        padding: 5px 20px;
        display: flex;
        width: 100%;
    }

    nav{ul{
        display: flex; 
        margin-left: auto;
    }
    li{
        list-style: none;
        a{
            color: #fff;
            text-decoration: none;
            margin: auto;
            font-size: 20px;
        }
    }
    }
`;
export default Navbar;