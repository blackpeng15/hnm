
/*
    화면 레이아웃, 반응형을 위해 부트스트랩 설치
*/

import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';


const ProductAll = () => {

    const [ ProductsList, setProductsList ] = useState([]);

    const getProducts = async () => {
        let url = 'http://localhost:5000/products';
        let response = await fetch(url);   // 브라우저는 네트워크에 요청을 보내고 프로미스 객체가 반환
        let data = await response.json();
        setProductsList(data);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <Container>
                <Row>
                    {ProductsList.map((menu) => (
                        <Col sm={6} lg={3}>
                            <ProductCard item={menu} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProductAll;

// npm install -g json-server
// json-server --watch db.json   <- 스타트 하는 방법
// json-server --watch db.json --port 5000   <- 포트 주소 변경 방법

// npm install react-bootstrap bootstrap