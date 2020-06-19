import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Page = styled.div`
    margin: 50px;
    overflow-y: auto;
    padding-right: 15px;
`
const FormContainer = styled.div`
    background-color: white;
    border-radius: 6px;
    border: 1px solid #b4b4b4;
    padding: 20px;
    display: flex;
    flex-direction: column;
`

const LabelInputContainer = styled.div`
    padding: 10px;
`

const InputLabel = styled.label`
    font-size: 20px;
    font-weight: 400;

`

const InputBox = styled.input`
    height: 30px;
    font-size: 16px;
    width: 100%;
    margin-top: 5px;
`

const Textarea = styled.textarea`
    height: 60px;
    font-size: 16px;
    width: 100%;
    margin-top: 5px;
`

const InputButton = styled.button`
    background-color: white;
    color: #154734;
    border: 2px #154734 solid;
    border-radius: 3px;
    font-size: 20px;
    font-weight: 600;
    height: 40px;
    min-width: 120px;
    box-sizing: border-box;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
    display: block
`;


class AdminProductAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3002/products/', this.state)
            .then(result => {
                this.props.history.push(`/products/${result.data.id}`);
            });
    }

    handleChange({ target: { name, value } }) {
        this.setState({ [name]: value });
    }

    render() {

        return (
            <Page>
                <FormContainer>
                    <h1>Add a Product</h1>
                    <form onSubmit={this.handleSubmit}>
                        <LabelInputContainer>
                            <InputLabel>Name</InputLabel>
                            <div>
                                <InputBox onChange={this.handleChange} value={this.state.name || ''} name="name" ></InputBox>
                            </div>
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <InputLabel>Description</InputLabel>
                            <div>
                                <Textarea onChange={this.handleChange} value={this.state.description || ''} name="description" ></Textarea>
                            </div>
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <InputLabel>Category</InputLabel>
                            <div>
                                <InputBox onChange={this.handleChange} value={this.state.category || ''} name="category" ></InputBox>
                            </div>
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <InputLabel>Image URL</InputLabel>
                            <div>
                                <InputBox onChange={this.handleChange} value={this.state.image || ''} name="image" ></InputBox>
                            </div>
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <InputLabel>Quantity</InputLabel>
                            <div>
                                <InputBox onChange={this.handleChange} value={this.state.quantity || ''} name="quantity" ></InputBox>
                            </div>
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <InputLabel>Price</InputLabel>
                            <div>
                                <InputBox onChange={this.handleChange} value={this.state.price || ''} name="price" ></InputBox>
                            </div>
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <InputLabel>Country of Origin</InputLabel>
                            <div>
                                <InputBox onChange={this.handleChange} value={this.state.coi || ''} name="coi" ></InputBox>
                            </div>
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <InputLabel>Ranking</InputLabel>
                            <div>
                                <InputBox onChange={this.handleChange} value={this.state.ranking || ''} name="ranking" ></InputBox>
                            </div>
                        </LabelInputContainer>
                        <InputButton>Add Product</InputButton>
                    </form>
                </FormContainer>

            </Page>
        )
    }
}

export default AdminProductAdd;