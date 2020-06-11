import React, { useState, useEffect, useRef } from 'react'
import { Select, Button, Form } from 'antd';
import { loadCategories, loadSubCategories, loadProducts, addProduct } from '../redux/thunks';
import { withRouter } from 'react-router-dom';
const { Option } = Select;
const formDefaultValue = {
    categories: [],
    subcategories: [],
    products: [],
}
function AddItem({ billId, onDataSave }) {
    const [isFormLoading, setIsFormLoading] = useState(false);
    const [formData, setFormData] = useState(formDefaultValue);
    const formSubmitData = useRef({});

    const onSubmit = (e) => {
        e.preventDefault();
        //const { id } = match.params;
        const product = {
            billId: billId,
            productId: formSubmitData.current.product,
            quantity: formSubmitData.current.quantity,
        }
        addProduct(product).then(() => {
            alert("Product added")
            onDataSave();
        }).catch((e) => {
            alert("error adding product");
        });
    }

    useEffect(() => {
        async function fetchCategories() {
            setIsFormLoading(true);
            const categories = await loadCategories();
            setFormData({ ...formData, categories })
            setIsFormLoading(false);
        }
        fetchCategories();
    }, [])
    const onCategoryChange = (value) => {
        async function fetchSubCategories() {
            setIsFormLoading(true);
            const subcategories = await loadSubCategories(value);
            setFormData({ ...formData, subcategories })
            setIsFormLoading(false);
        }
        fetchSubCategories();
    }
    const onSubCategoryChange = (value) => {
        async function fetchProducts() {
            setIsFormLoading(true);
            const products = await loadProducts(value);
            setFormData({ ...formData, products })
            setIsFormLoading(false);
        }
        fetchProducts();
    }
    const onProductChange = (value) => {
        formSubmitData.current = {
            ...formSubmitData.current,
            product: value,
        }
    }
    const onQuantityChange = (value) => {
        formSubmitData.current = {
            ...formSubmitData.current,
            quantity: value,
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <Form.Item>
                <div>Category</div>
                <Select disabled={isFormLoading} style={{ width: '100%' }} onChange={onCategoryChange}>
                    {formData.categories.map(category => {
                        return (
                            <Option value={category.Id}>{category.Name}</Option>
                        )
                    })}
                </Select>
            </Form.Item>
            <Form.Item>
                <div>Subcategory</div>
                <Select disabled={isFormLoading} style={{ width: '100%' }} onChange={onSubCategoryChange}>
                    {formData.subcategories.map(subcategory => {
                        return (
                            <Option value={subcategory.Id}>{subcategory.Name}</Option>
                        )
                    })}
                </Select>
            </Form.Item>
            <Form.Item>


                <div>Products</div>
                <Select disabled={isFormLoading} style={{ width: '100%' }} onChange={onProductChange}>
                    {formData.products.map(product => {
                        return (
                            <Option value={product.Id}>{product.Name}</Option>
                        )
                    })}
                </Select>
            </Form.Item>
            <Form.Item>
                <div>Quantity</div>
                <Select defaultValue={1} disabled={isFormLoading} style={{ width: '100%' }} onChange={onQuantityChange}>
                    <Option value={1}>1</Option>
                    <Option value={2}>2</Option>
                    <Option value={3}>3</Option>
                    <Option value={4}>4</Option>
                    <Option value={5}>5</Option>
                    <Option value={6}>6</Option>
                    <Option value={7}>7</Option>
                    <Option value={8}>8</Option>
                    <Option value={9}>9</Option>
                    <Option value={10}>10</Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type="primary" disabled={isFormLoading} htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </form>
    )
}

export default withRouter(AddItem);
