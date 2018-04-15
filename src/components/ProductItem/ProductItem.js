import React, { Component } from 'react';

import {Link} from 'react-router-dom';
class ProductItem extends Component {


    onDelete = (id) => {
       if(confirm('Bạn chắc muốn xóa hay không ?')){ //eslint-disable-line
           this.props.onDelete(id);
       }
    }
    render() {
        var {product,index} = this.props;
        var statusName = product.status ? 'còn hàng' : 'hết hàng';
        var statusClass = product.status ? 'warning' : 'danger';
        return (
            <tr>
                <td>{index+1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td> <span className={`label label-${statusClass}`}> {statusName} </span> </td>
                <td>
                    <Link to={`/product/${product.id}/edit`} className={'btn btn-info'}>Sửa</Link> &ensp;
                    <button onClick={()=>this.onDelete(product.id)} className={'btn btn-danger'}>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
