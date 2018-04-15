import React, { Component } from 'react';
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchAllProductsRequest,actDeleteProductRequest} from './../../actions';
class ProductListPage extends Component {

    componentWillMount (){
        this.props.fetchAllProduct();
    }
    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }

    render() {
        var {products} = this.props;
        // var products = [];
        return (
            <div>
                <div className={'col-md-12'}>
                    <Link to={'product/add'} className={'btn btn-info'}>Thêm Sản phẩm</Link>
                    <br/><br/>
                </div>
                <div className={'col-md-12'}>
                    <ProductList>
                        {this.showProduct(products)}
                    </ProductList>
                </div>
            </div>
        );
    }
    showProduct = (products) => {
        var result = null;
        if(products.length>0){
            result = products.map((product,index)=>{
                return (
                    <ProductItem onDelete={this.onDelete} key={index} product={product} index={index} />
                )
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        fetchAllProduct: () => {
            dispatch(fetchAllProductsRequest());
        },
        onDeleteProduct : (id) => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);
