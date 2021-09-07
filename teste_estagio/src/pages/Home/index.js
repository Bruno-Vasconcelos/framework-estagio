
import * as React from 'react';
import styled from 'styled-components';

import Navbar from "../../components/navbar";
import {Button} from "../../components/button"


function Home() {

  return (
    <>
      <Navbar/>
      <Container>
        <Button title="Postagens" redirect="/posts"/>
        <Button title="Albuns" redirect="/albuns"/>
        <Button title="To-dos" redirect="/todos"/>
      </Container>
    </>
  );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    justify-content: center;
    padding-top: 200px;
`;
export default Home;
