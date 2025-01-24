import React from 'react';
// import { Cards, Button } from 'react-bootstrap';

const ProductCard = ({ product , Cards , Button }) => {
  return (
    <Cards className="m-3">
      <Cards.Img variant="top" src={product.image} alt={product.title} />
      <Cards.Body>
        <Cards.Title>{product.title}</Cards.Title>
        <Cards.Text>{product.description}</Cards.Text>
        <Button variant="primary">Buy Now</Button>
      </Cards.Body>
    </Cards>
  );
};

const ProductPage = () => {
  const products = [
    {
      id: 1,
      title: 'Premium Cricket Bat',
      image: 'https://via.placeholder.com/150', // Replace with real image URLs
      description: 'A premium cricket bat made of top-grade English Willow for superior performance.',
    },
    {
      id: 2,
      title: 'Cricket Ball',
      image: 'https://via.placeholder.com/150', // Replace with real image URLs
      description: 'A high-quality cricket ball designed for durability and performance.',
    },
    {
      id: 3,
      title: 'Cricket Kit Bag',
      image: 'https://via.placeholder.com/150', // Replace with real image URLs
      description: 'A spacious and durable kit bag to store all your cricket gear.',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
