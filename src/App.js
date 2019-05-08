import React, { Component } from 'react';
import './App.css';
//import NewComponent from './component/NewComponent';
import ProductList from './component/ProductList';
import ProductDetails from './component/ProductDetails';
import {fruitsAndVegetables} from './mock/mock';

class App extends Component {

  state={
    selectedItem: null
  }

  selectItem=id=>{
    const selectedItem=fruitsAndVegetables.find(item=>item.id===id);
    this.setState({selectedItem});
  }

  deselectItem=()=>{
    this.setState({selectedItem: null})
  }

  render() {
    return (
     <div>
     {
       this.state.selectedItem ? 
       <ProductDetails product={this.state.selectedItem} closeDetails={this.deselectItem}/> : 
       <ProductList  products={fruitsAndVegetables} selectItem={this.selectItem}/> 
       }
     </div>
    );
  }
}

export default App;
