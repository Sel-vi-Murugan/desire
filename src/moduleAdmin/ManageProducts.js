import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/Product.css';
import Sidebar from './Sidebar';
import AdminNav from './AdminNav';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [newProduct, setNewProduct] = useState({
      productName: '', proDescription: '', imgSrc: '', price: '', ratings: '', categoryId: ''
    });
    const [editingProduct, setEditingProduct] = useState(null);
    const [editForm, setEditForm] = useState({
      productName: '', proDescription: '', imgSrc: '', price: '', ratings: '', categoryId: ''
    });
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/products/getall');
          if (response.data && Array.isArray(response.data)) {
            const updatedProducts = response.data.map(product => ({
              ...product,
              imgSrc: product.imgSrc ? `data:image/png;base64,${product.imgSrc}` : ''
            }));
            setProducts(updatedProducts);
          }
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      const fetchCategories = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/categories/getall');
          if (response.data && Array.isArray(response.data)) {
            setCategories(response.data);
          }
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
  
      fetchProducts();
      fetchCategories();
    }, []);
  
    const handleFileUpload = (e, callback) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result.split(',')[1]);
      };
      reader.readAsDataURL(file);
    };
  
    const addProduct = async () => {
      try {
        const response = await axios.post('http://localhost:8080/api/products/add', newProduct);
        const addedProduct = response.data;
        addedProduct.imgSrc = addedProduct.imgSrc ? `data:image/png;base64,${addedProduct.imgSrc}` : '';

        setProducts([...products, addedProduct]);
        setNewProduct({
          productName: '', proDescription: '', imgSrc: '', price: '', ratings: '', categoryId: ''
        });
        setShowAddModal(false);
      } catch (error) {
        console.error('Error adding product:', error);
      }
    };
  
    const updateProduct = async () => {
      try {
        await axios.put(`http://localhost:8080/api/products/update/${editingProduct.productId}`, editForm);
        setProducts(products.map(product => 
          product.productId === editingProduct.productId ? { ...product, ...editForm } : product
        ));
        setEditingProduct(null);
        setEditForm({
          productName: '', proDescription: '', imgSrc: '', price: '', ratings: '', categoryId: ''
        });
        setShowEditModal(false);
      } catch (error) {
        console.error('Error updating product:', error);
      }
    };

    const deleteProduct = async (productId) => {
      try {
        await axios.delete(`http://localhost:8080/api/products/delete/${productId}`);
        setProducts(products.filter(product => product.productId !== productId));
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    };
      
    return (
      <div>
        <div className="admin-container">
      <Sidebar/>
      <div className="main-content">
        <AdminNav/>
        <div className="product-header-container">
          <h1>Manage Products</h1>
          <button onClick={() => setShowAddModal(true)} className="product-open-modal-button">Add Product</button>
        </div>
  
        {/* Add Product Modal */}
        {showAddModal && (
          <div className="product-modal-overlay" onClick={() => setShowAddModal(false)}>
            <div className="product-modal-content" onClick={e => e.stopPropagation()}>
              <h2>Add Product</h2>
              <div className="product-modal-grid">
                <input
                  type="text"
                  placeholder="Product Name"
                  value={newProduct.productName}
                  onChange={(e) => setNewProduct({ ...newProduct, productName: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={newProduct.proDescription}
                  onChange={(e) => setNewProduct({ ...newProduct, proDescription: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Ratings"
                  value={newProduct.ratings}
                  onChange={(e) => setNewProduct({ ...newProduct, ratings: e.target.value })}
                />
                <select
                  value={newProduct.categoryId}
                  onChange={(e) => setNewProduct({ ...newProduct, categoryId: e.target.value })}
                >
                  <option value="">Select Category</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, (base64) => setNewProduct({ ...newProduct, imgSrc: base64 }))}
                />
              </div>
              <button onClick={addProduct} className="product-action-button add">Add Product</button>
              <button onClick={() => setShowAddModal(false)} className="product-close-modal-button">Close</button>
            </div>
          </div>
        )}
  
        {/* Edit Product Modal */}
        {showEditModal && editingProduct && (
          <div className="product-modal-overlay" onClick={() => setShowEditModal(false)}>
            <div className="product-modal-content" onClick={e => e.stopPropagation()}>
              <h2>Edit Product</h2>
              <div className="product-modal-grid">
                <input
                  type="text"
                  placeholder="Product Name"
                  value={editForm.productName}
                  onChange={(e) => setEditForm({ ...editForm, productName: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={editForm.proDescription}
                  onChange={(e) => setEditForm({ ...editForm, proDescription: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={editForm.price}
                  onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Ratings"
                  value={editForm.ratings}
                  onChange={(e) => setEditForm({ ...editForm, ratings: e.target.value })}
                />
                <select
                  value={editForm.categoryId}
                  onChange={(e) => setEditForm({ ...editForm, categoryId: e.target.value })}
                >
                  <option value="">Select Category</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, (base64) => setEditForm({ ...editForm, imgSrc: base64 }))}
                />
              </div>
              <button onClick={updateProduct} className="product-action-button">Update Product</button>
              <button onClick={() => setShowEditModal(false)} className="product-close-modal-button">Close</button>
            </div>
          </div>
        )}
  
        <table className="product-table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Ratings</th>
              <th>Category</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(products) && products.map(product => (
              <tr key={product.productId}>
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>{product.proDescription}</td>
                <td>{product.price}</td>
                <td>{product.ratings}</td>
                <td>{product.category ? product.category.name : 'N/A'}</td>
                <td>
                  {product.imgSrc && <img src={product.imgSrc} alt={product.productName} className="product-img-preview" />}
                </td>
                <td>
                  <button
                    onClick={() => {
                      setEditingProduct(product);
                      setEditForm({
                        productName: product.productName,
                        proDescription: product.proDescription,
                        imgSrc: product.imgSrc,
                        price: product.price,
                        ratings: product.ratings,
                        categoryId: product.category ? product.category.id : ''
                      });
                      setShowEditModal(true);
                    }}
                    className="product-action-button"
                  >
                    Edit
                  </button>
                  <button onClick={() => deleteProduct(product.productId)} className="product-action-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
      </div>
    );
};

export default ManageProducts;
