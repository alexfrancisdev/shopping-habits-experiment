import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const IndexPage = styled.div`
    margin: 0 50px;
    overflow-y: auto;
    height: 100%;
    padding-right: 15px;
`

const ProductImage = styled.img`
    heigh: 50px;
    width: 50px;
`


class AdminProductIndex extends React.Component {
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
        if (!this.state.loading) {
            return (
                <IndexPage>
                    <h1>All Products</h1>
                    <table>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Origin</th>
                            <th>Rating</th>
                        </tr>
                        {this.state.products && this.state.products.map(
                            product => <tr key={product.id}>
                                <td><ProductImage src={product.image} /></td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                                <td>{product.origin}</td>
                                <td>{product.rating}</td>
                            </tr>

                        )}
                    </table>
                </IndexPage>
            )
        } else {
            return (
                <p>loading...</p>
            )
        }
    }
}

export default AdminProductIndex;