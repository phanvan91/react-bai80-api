import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';
import {Link} from 'react-router-dom';
import {actAddProductRequest} from './../../actions';
import {connect} from 'react-redux';
class ProductActionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            chkbStatus:false
        }
    }
    onChange = (e)=> {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]:value
        })
    }
    onSave = (e) => {
        e.preventDefault();
        var {history} = this.props;
        var {txtName,numberPrice,chkbStatus,id} = this.state;
        if(id){
            callApi(`products/${id}`,'put',{name:txtName,price:numberPrice,status:chkbStatus}).then(res =>{
                history.goBack();
            })
        }else{
            this.props.addProduct({id:id,name:txtName,price:numberPrice,status:chkbStatus});
            history.goBack();
            // callApi('products','post',{name:txtName,price:numberPrice,status:chkbStatus}).then(res =>{
            //     history.goBack();
            // })
        }

    }

    componentDidMount(){
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            callApi(`products/${id}`,'get',null).then(res =>{
                this.setState({
                    id:id,
                    txtName : res.data.name,
                    numberPrice :res.data.price,
                    chkbStatus :res.data.status
                })
            })
        }
    }
    render() {

        return (
            <div className={'row'}>
                <div className={'col-md-6'}>
                    <form onSubmit={this.onSave}>
                        <div className={'form-group'}>
                            <label htmlFor="">Tên sản phẩm</label>
                            <input type="text" className={'form-control'} value={this.state.txtName?this.state.txtName:''} name={'txtName'} onChange={this.onChange} />
                        </div>
                        <div className={'form-group'}>
                            <label htmlFor="">Giá</label>
                            <input type="number" className={'form-control'} name={'numberPrice'} value={this.state.numberPrice?this.state.numberPrice:''} onChange={this.onChange}  />
                        </div>
                        <div className="checkbox">
                            <label> <input type="checkbox" checked={this.state.chkbStatus?true:false} onChange={this.onChange}  name={'chkbStatus'}/>
                                Còn Hàng
                            </label>
                        </div>
                        <Link to={'/product-list'} className={'btn btn-primary'} >
                            Trở về
                        </Link> &ensp;
                        <button type={'submit'} className={'btn btn-info'}>Lưu lại</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        addProduct: (product) => {
            dispatch(actAddProductRequest(product));
        }
    }
}

export default connect(null,mapDispatchToProps)(ProductActionPage);
