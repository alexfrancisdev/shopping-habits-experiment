import React from 'react'
import axios from 'axios';

import styled from 'styled-components';
import ProductTile from './ProductTile';

const ProductTitle = styled.h1`
    font-size: 40px;
`

const ProductPage = styled.div`
    margin: 50px;
    overflow-y: auto;
    height: 100%;
    padding-right: 15px;
`

const ProductContainer = styled.div`
    background-color: white;
    border-radius: 6px;
    border: 1px solid #b4b4b4;
    padding: 20px;
    display: flex;
`

const ImageContainer = styled.div`
    width: 40%;
`

const Image = styled.img`
    height: 300px;
    width: 300px;
    border: 1px solid black
`

const ContentContainer = styled.div`
    margin-left: 20px;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const LowerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const PriceInfo = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
`

const Price = styled.h3`
    font-size: 16px;
    margin-right: 10px;
`

const UnitPrice = styled.p`

`

const BuyBox = styled.div`

`

const Quantity = styled.input`
    background-color: #fff;
    height: 40px;
    font-size: 16px;
    margin: 5px 0;
    padding: 0 3px 0 10px;
    box-sizing: border-box;
    width: 50px;
    margin-right: 15px;
    border: 1px solid #ccc;
`

const Add = styled.button`
    background-color: white;
    color: #154734;
    border: 2px #154734 solid;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 600;
    height: 40px;
    min-width: 80px;
    box-sizing: border-box;
`

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        axios
            .get(`http://localhost:3002/products/${this.props.match.params.id}`)
            .then(result => this.setState({ product: result.data, loading: false }))
    }



    render() {
        const product = this.state.product;
        function pricePerUnit(price, quantity) {
            return (price / quantity).toFixed(2);
        }
        if (product) {
            console.log(product);
        }

        return (
            <ProductPage>
                <ProductContainer>
                    {!this.state.loading ?
                        <React.Fragment>
                            <ImageContainer>
                                <Image src={product.image} />
                            </ImageContainer>
                            <ContentContainer>
                                <ProductTitle>{product.name}</ProductTitle>
                                <LowerContainer>
                                    <PriceInfo>
                                        <Price>{product.price}</Price>
                                        <UnitPrice>{pricePerUnit(product.price, product.quantity)} / each</UnitPrice>
                                    </PriceInfo>
                                    <BuyBox>
                                        <Quantity />
                                        <Add>
                                            <span>Add</span>
                                        </Add>
                                    </BuyBox>
                                </LowerContainer>
                            </ContentContainer>
                        </React.Fragment>
                        :
                        <p>Loading...</p>}
                </ProductContainer>
            </ProductPage>
        )
    }
}

export default ProductShow