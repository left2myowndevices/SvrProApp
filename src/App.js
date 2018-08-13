import React, { Component } from 'react';
import './App.css';
import ReactTable from "react-table/lib";
import 'react-table/react-table.css'

class App extends React.Component{
constructor(props)
{
  super(props);

  this.state ={
    data: [], //sets data state to null
    search: ''
  };
  this.getData(); //calls function to get data

}

//grabs json object 
getData(){
  fetch('https://servicepros-test-api.herokuapp.com/api/v1/books')
  .then((resp) =>{resp.json()
    .then((res) =>{
   
    this.setState({data: res})
    console.log(res);
  
  })
})
}
//updateSearch(event){
//  this.setState({search: event.target.value.bind(this)});
//}
  render() {
    const data = this.state.data
    const columns = [{
      Header: 'Title',
      accessor: 'title'
    },{
      Header: 'Author',
      accessor: 'author'
    },{
      Header: 'Year',
      accessor: 'year'
    },{
      Header: 'ISBN',
      accessor: 'isbn'
    }]
   return(

    <div>
    <h1>Book List</h1>
    <p>Filter the list by typing into the form fields, or sort the colums by clicking the table header. Unfortunately, the filter is case sensitive. Navigate to a specific page using the controls at the bottom</p>
    <ReactTable
    data = {this.state.data}
    columns = {columns}
     filterable={true}

    />    
  </div>
    );
    } 
  }     
export default App;
