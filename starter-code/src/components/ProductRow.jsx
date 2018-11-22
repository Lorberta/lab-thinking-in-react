import React, { Component } from 'react';

export default function ProductRow(props) {
    return (
        <tr>
            <tr>
                {props.product.name} {props.product.price}
            </tr>
        </tr>
    )
}
