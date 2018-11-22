import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dataJson from './data.json';
import ProductRow from './components/ProductRow';
import ProductTable from './components/ProductTable';
import SearchBar from './components/SearchBar';
import ProductCatRow from './components/ProductCatRow';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Products:</h1>
        <SearchBar />
        <ProductTable
          dataJson={dataJson} />
      </div>
    );
  }
}
