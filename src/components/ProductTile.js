import React from 'react';
import styled from 'styled-components';

const Tile = styled.div`
    margin: 10px 0;
    height: 230px;
    width: 20%;
    min-width: 200px;
    background-color: white;
    border: 1px solid #b4b4b4;
    display: flex;
    flex-direction: column;
`

const ProductImageContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
`
const ProductImage = styled.img`
    height: 135px;
    width: 135px;
    border: 1px solid #b4b4b4;
    margin: 0 auto;
    margin-top: 10px;
    border-bottom-color: ${({ color }) => color};
    border-bottom-width: 5px;
`

const ProductInfo = styled.div`
    padding: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ProductTitle = styled.h2`

`

const PriceInfo = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
`

const Price = styled.h3`
    font-size: 16px;
`

const UnitPrice = styled.p`

`

function colorRating(score) {
    switch (score) {
        case 5:
            return '#e84c19';
        case 4:
            return '#f8ad13';
        case 3:
            return '#f9d716';
        case 2:
            return '#e2de09';
        case 1:
            return '#66b52d';
        default:
            return '#999999';
    }
}

function pricePerUnit(price, quantity) {
    return (price / quantity).toFixed(2);
}

const ProductTile = (props) => {
    const product = props.product;


    return (
        <Tile>
            <ProductImageContainer>
                <ProductImage src={product.image} color={colorRating(parseInt(product.rating))} />
            </ProductImageContainer>
            <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <PriceInfo>
                    <Price>£{product.price}</Price>
                    <UnitPrice>£{pricePerUnit(product.price, product.quantity)} / each</UnitPrice>
                </PriceInfo>

            </ProductInfo>
        </Tile>
    )
}

export default ProductTile;