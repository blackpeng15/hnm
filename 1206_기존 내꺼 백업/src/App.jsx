import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './components/Navbar';

/*
  1. 전체 상품 페이지(대문 페이지), 로그인, 상품 상세 페이지 / (전체 상품 페이지(대문 페이지) : 전체상품을 쭉 나열)
  2. 네비게이션바
  3. 로그인 버튼을 클릭하면 로그인 페이지가 나옴
  4. 상품 디테일을 클릭하면 : 
      * 로그인이 안 되어있을 때 = 로그인 페이지가 나옴
      * 로그인이 되어 있을 때 = 상품 디테일 페이지를 볼 수 있음
  5. 로그아웃 기능 : 로그아웃 상태에서는 다시 디테일 페이지 X, 로그인 페이지가 나옴
  6. 로그인, 로그아웃 버튼은 토글 버튼
  7. 상품 검색기능
*/

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='login' element={<Login />} />
        <Route path='product/:id' element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;

// Routes는 Route를 감싸주고, 스위치 해주는 역할
