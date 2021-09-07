
import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

export function Button({ title, redirect } ) {
    return(
        <Link to={redirect} >
            <Botao>
                {title}
            </Botao>
        </Link>
    ); 
}
const Botao = styled.button`

	color:  #791f94 !important;
	text-transform: uppercase;
	background: #ffffff;
	padding: 20px 150px;
	border: 4px solid  #791f94 !important;
	border-radius: 6px;
	display: inline-block;
	transition: all 0.3s ease 0s;
    margin: 20px;
    font-size: 20px;
    min-width: 450px;


    :hover {
	color: #494949 !important;
	border-radius: 50px;
	border-color: #494949 !important;
	transition: all 0.3s ease 0s;
    }
`;