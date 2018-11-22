import React, { Component } from 'react';
import ProductRow from './ProductRow';
import ProductCatRow from './ProductCatRow';

export default function ProductTable(props) {

    let allData = props.dataJson.data.sort((a, b) => (b.category > a.category ? 1 : -1))
    let rows = []
    for (let i = 0; i < allData.length; i++) {
        if (i === 0 || allData[i].category !== allData[i - 1].category)
            rows.push(<ProductCatRow category={allData[i].category} />)
        rows.push(<ProductRow product={allData[i]} />)
    }


    return (
        <table>
            <tr>
                <th>Name</th>
            </tr>
            <tr>
                <th>Price</th>
            </tr>
            {rows}
        </table>
    )
}