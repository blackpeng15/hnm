import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ item }) => {
	return (
		<div className="productCard">
			<div className="imgContainer">
				<img src={item?.img} alt="" />
				<div className="item_box">
					<div className="event">Weakly Best Seller</div>
					<div className="new">new</div>
				</div>
			</div>

			<div className="title">{item?.title}</div>
			<div className="price">₩{item?.price}</div>
		</div>
	);
};

export default ProductCard;
