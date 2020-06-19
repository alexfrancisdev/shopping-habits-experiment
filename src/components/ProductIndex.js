import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ProductTile from './ProductTile';


const IndexPage = styled.div`
    margin: 0 50px;
    overflow-y: auto;
    height: 100%;
    padding-right: 15px;
`

const IndexTitle = styled.h1`
    padding: 10px 0;
    font-size: 40px;
`

const IndexGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1000px;
    height: 100%;
    justify-content: space-between;
`

const products = [
    {
        title: "Apple",
        description: "Lorem Ipsum",
        rating: 3,
        COI: "Spain",
        price: 0.25,
        quantity: 1
    },
    {
        title: "Apple",
        description: "Lorem Ipsum",
        rating: 5,
        COI: "England",
        price: 0.30,
        quantity: 1
    },
    {
        title: "Oranges",
        description: "Lorem Ipsum",
        rating: 2,
        COI: "Spain",
        price: 1.00,
        quantity: 4
    },
    {
        title: "Oranges",
        description: "Lorem Ipsum",
        rating: 1,
        COI: "Morocco",
        price: 1.20,
        quantity: 4
    },
    {
        title: "Pears",
        description: "Lorem Ipsum",
        rating: 4,
        COI: "France",
        price: 1.1,
        quantity: 3
    },
    {
        title: "Pears",
        description: "Lorem Ipsum",
        rating: 5,
        COI: "England",
        price: 1,
        quantity: 3
    },
    {
        title: "Banana",
        description: "Lorem Ipsum",
        rating: 3,
        COI: "Spain",
        price: 0.25,
        quantity: 1
    },
    {
        title: "Banana",
        description: "Lorem Ipsum",
        rating: 1,
        COI: "Costa Rica",
        price: 0.25,
        quantity: 1
    },
    {
        title: "Potato",
        description: "Lorem Ipsum",
        rating: 5,
        COI: "England",
        price: 0.08,
        quantity: 1
    },
    {
        title: "Potato",
        description: "Lorem Ipsum",
        rating: 4,
        COI: "Netherlands",
        price: 0.07,
        quantity: 1
    },
    {
        title: "Carrots",
        description: "Lorem Ipsum",
        rating: 5,
        COI: "England",
        price: 0.10,
        quantity: 1
    },
    {
        title: "Carrots",
        description: "Lorem Ipsum",
        rating: 4,
        COI: "Netherlands",
        price: 0.11,
        quantity: 1
    },
]

class ProductIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    abortController = new AbortController()

    componentDidMount() {
        this._isMounted = true;
        if (this.state.loading) {
            axios
                .get('http://localhost:3002/products/')
                .then(result => { this.setState({ products: result.data, loading: false }) })
                .catch(error => console.log(error))
        }
    }

    render() {
        return (
            <IndexPage>
                <IndexTitle>All Items</IndexTitle>
                {!this.state.loading ?
                    <React.Fragment>
                        <p>Showing <strong>1-12</strong> of <strong>12 items</strong></p>
                        <IndexGrid>
                            {this.state.products && this.state.products.map((product, i) => {
                                return <ProductTile key={i} product={product} />
                            })}

                        </IndexGrid>
                    </React.Fragment>
                    :
                    <p>Loading...</p>
                }
            </IndexPage>
        )
    }
}

export default ProductIndex;