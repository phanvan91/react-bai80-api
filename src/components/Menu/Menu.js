import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';

const menus = [
    {
        name:'Trang chủ',
        exact:true,
        to:'/'
    },
    {
        name:'Quản lí sản phẩm',
        exact:false,
        to:'/product-list'
    }
]

const MenuLink = ({ label,to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact === true } children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={active}> <Link  to={to}> {label} </Link> </li>
            )
        }} />
    )
}
class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand" href="">Call API</a>
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </div>
        );
    }
    showMenus = (menus) => {
        var result = null;
        if(menus.length>0){
            // console.log(menus)
            result = menus.map((menu,index)=>{
                // console.log(menu)
                return (
                    <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
                )
            })
        }
        return result;
    }
}

export default Menu;
