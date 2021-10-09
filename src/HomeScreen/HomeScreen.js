import React, { Component, useContext } from "react";
import "./style/HomeScreen.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { Redirect, Link } from "react-router-dom";
import { Button } from "./Button";

export default class HomeScreen extends Component {
  constructor() {
    super();

    this.state = {
      columnDefs: [
        { headerName: "ID", field: "_id" },
        { headerName: "Nombre", field: "name" },
        { headerName: "Stock", field: "stock" },
        { headerName: "Precio Unitario", field: "price" },
      ],
      productsData: [
        {
          _id: 1,
          name: "Samsung X8",
          stock: 19,
          price: 1888,
        },
        {
          _id: 2,
          name: "Samsung X8",
          stock: 19,
          price: 1888,
        },
      ],
      rowSelection: "single",
      productIdSelected: "",
    };
  }

  onSelectionChanged = () => {
    let selectedRows = this.gridApi.getSelectedRows();
    console.log(selectedRows[0]._id);
    this.setState({ productIdSelected: selectedRows[0]._id });
  };

  onGridReady = (params) => {
    console.log(params);
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  render() {
    return (
      <section className="HomeScreen">
        <h1 className="HomeScreen__title">Dashboard</h1>
        <div className="HomeScreen__buttons">
          <button className="HomeScreen__button">Inicio</button>
          <button className="HomeScreen__button">Refrescar los datos</button>
          <Link className="HomeScreen__button" to="/add">Agregar producto</Link>
          <Button />
        </div>
        <div className="HomeScreen__products">
          <div className="table-container">
            <div className="ag-theme-balham">
              <AgGridReact
                pagination={true}
                paginationAutoPageSize={true}
                columnDefs={this.state.columnDefs}
                rowData={this.state.productsData}
                onGridReady={this.onGridReady}
                rowSelection={this.state.rowSelection}
                onSelectionChanged={this.onSelectionChanged.bind(this)}
              ></AgGridReact>
            </div>
          </div>
        </div>
        {this.state.productIdSelected ? (
          <Redirect to={`/product/${this.state.productIdSelected}`} />
        ) : null}
      </section>
    );
  }
}
