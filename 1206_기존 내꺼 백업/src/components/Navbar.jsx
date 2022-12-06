import React from 'react'
import { SlUser } from 'react-icons/sl';
import { CiSearch } from 'react-icons/ci';
import './Navbar.scss'

export default function Navbar() {

    const menuList = [ '여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', '스포츠', 'Sale', '지속가능성', ];

    return (
        <>
            <div className="loginBtn">
                <SlUser className="loginIcon"/> <span>로그인</span>
            </div>
            <h1 className="mainLogo">
                <img src="img/logo.png" alt="H&M 로고" />
            </h1>
            <nav>
                <ul className="menuList">
                    { menuList.map((menu) => ( <li>{menu}</li> )) }
                </ul>
            </nav>
            <div className="search">
                <CiSearch className="searchIcon" />
                <input type="text" placeholder="제품 검색" />
            </div>
        </>
    )
}

// $ npm install react-icons --save
// $ yarn add sass
