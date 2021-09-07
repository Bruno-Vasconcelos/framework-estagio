
import { useEffect, useState } from "react";
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import  StyledComponent  from "styled-components";


import Navbar from "../../components/navbar";


function Posts() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setDados(data);
      });
  }, []);
  
  const columns = [
    { field: 'userId', headerName: 'userId', flex: 1 },
    { field: 'id', headerName: 'id',  flex: 1 },
    { field: 'title', headerName: 'title',  flex: 4 },
    { field: 'body', headerName: 'body', flex: 8 },
  ];
  
  const rows = [...dados]

  

  return (
    <>
      <Navbar/>
      <Tabela>
      <DataGrid 
        rows={rows}
        columns={columns}
        pageSize={15}
      />
      </Tabela>
    </>
  );
}
const Tabela = StyledComponent.div`
    height: 900px;
    width: 95%;
    margin: 20px auto;
    background-color: #fff;
    padding: 5px;
    border-radius: 5px;
`;

export default Posts;
