import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css'

// const ProductCard = ({ product , Cards , Button }) => {
//   return (
//     <Cards className="m-3">
//       <Cards.Img variant="top" src={product.image} alt={product.title} />
//       <Cards.Body>
//         <Cards.Title>{product.title}</Cards.Title>
//         <Cards.Text>{product.description}</Cards.Text>
//         <Button vari">Buy Now</Button>
//       </Cards.Body>
//     </Cards>
//   );
// };

const ProductPage = ({image2,title2,content1}) => {
  const products = [
    {
      id: 1,
      title: 'Premium Cricket Bat',
      image: 'E:\Mywebsite\firstwebsite\public\image\bat 4.jpg', // Replace with real image URLs
      description: 'A premium cricket bat made of top-grade English Willow for superior performance.',
    },
    {
      id: 2,
      title: 'Cricket Ball',
      image: 'E:\Mywebsite\firstwebsite\public\image\bat 4.jpg', // Replace with real image URLs
      description: 'A high-quality cricket ball designed for durability and performance.',
    },
    {
      id: 3,
      title: 'Cricket Kit Bag',
      image: 'E:\Mywebsite\firstwebsite\public\image\bat 4.jpg', // Replace with real image URLs
      description: 'A spacious and durable kit bag to store all your cricket gear.',
    },
  ];

  return (
    <>
    <div className="card10">
    <div className="card-body" >
    <img src="./image/limited gloves.jpg" className="card-img-top" alt="..." width={290} height={270} />
    <div className="">
      <h1 className="card-title">Gloves </h1>
      <p className="card-text">₹540</p>
     <button type="button" className="btn btn-success"><a href="#" >Buy Now</a></button>
    </div>
    </div>

    <div className="card-body" >
    <img src="./image/limited gloves.jpg" className="card-img-top" alt="..." width={190} height={170} />
    <div className="">
      <h2 className="card-title">English Willow Bats</h2>
      <p className="card-text">₹9000</p>
     <button> <a href="#" className="btn">Buy Now</a></button>
    </div>
    </div>

    <div className="card-body" >
    <img src="./image/limited gloves.jpg" className="card-img-top" alt="..." width={190} height={170} />
    <div className="">
      <h2 className="card-title">English Willow Bats</h2>
      <p className="card-text">₹9000</p>
     <button> <a href="#" className="btn">Buy Now</a></button>
    </div>
    </div>

    <div className="card-body" >
    <img src="./image/limited gloves.jpg" className="card-img-top" alt="..." width={190} height={170} />
    <div className="">
      <h2 className="card-title">English Willow Bats</h2>
      <p className="card-text">₹9000</p>
     <button> <a href="#" className="btn">Buy Now</a></button>
    </div>
    </div>

    <div className="card-body" >
    <img src="./image/limited gloves.jpg" className="card-img-top" alt="..." width={190} height={170} />
    <div className="">
      <h2 className="card-title">English Willow Bats</h2>
      <p className="card-text">₹9000</p>
     <button> <a href="#" className="btn">Buy Now</a></button>
    </div>
    </div>

    <div className="card-body" >
    <img src="./image/limited gloves.jpg" className="card-img-top" alt="..." width={190} height={170} />
    <div className="">
      <h2 className="card-title">English Willow Bats</h2>
      <p className="card-text">₹9000</p>
     <button> <a href="#" className="btn">Buy Now</a></button>
    </div>
    </div>

    <div className="card-body" >
    <img src="./image/limited gloves.jpg" className="card-img-top" alt="..." width={190} height={170} />
    <div className="">
      <h2 className="card-title">English Willow Bats</h2>
      <p className="card-text">₹9000</p>
     <button> <a href="#" className="btn">Buy Now</a></button>
    </div>
    </div>

    <div className="card-body" >
    <img src="./image/limited gloves.jpg" className="card-img-top" alt="..." width={190} height={170} />
    <div className="">
      <h2 className="card-title">English Willow Bats</h2>
      <p className="card-text">₹9000</p>
     <button> <a href="#" className="btn">Buy Now</a></button>
    </div>
    </div>

    <div className="card-body" >
    <img src="./image/limited gloves.jpg" className="card-img-top" alt="..." width={190} height={170} />
    <div className="">
      <h2 className="card-title">English Willow Bats</h2>
      <p className="card-text">₹9000</p>
     <button> <a href="#" className="btn">Buy Now</a></button>
    </div>
    </div>

    <div className="card-body" >
    <img src="./image/limited gloves.jpg" className="card-img-top" alt="..." width={190} height={170} />
    <div className="">
      <h2 className="card-title">English Willow Bats</h2>
      <p className="card-text">₹9000</p>
     <button> <a href="#" className="btn">Buy Now</a></button>
    </div>
    </div>

    <div className="card-body" >
    <img src="./image/limited gloves.jpg" className="card-img-top" alt="..." width={190} height={170} />
    <div className="">
      <h2 className="card-title">English Willow Bats</h2>
      <p className="card-text">₹9000</p>
     <button> <a href="#" className="btn">Buy Now</a></button>
    </div>
    </div>

    <div className="card-body" >
    <img src="./image/limited gloves.jpg" className="card-img-top" alt="..." width={190} height={170} />
    <div className="">
      <h2 className="card-title">English Willow Bats</h2>
      <p className="card-text">₹9000</p>
     <button> <a href="#" className="btn">Buy Now</a></button>
    </div>
    </div>

    <div className="card-body" >
    <img src="./image/limited gloves.jpg" className="card-img-top" alt="..." width={190} height={170} />
    <div className="">
      <h2 className="card-title">English Willow Bats</h2>
      <p className="card-text">₹9000</p>
     <button> <a href="#" className="btn">Buy Now</a></button>
    </div>
    </div>

    <div className="card-body" >
    <img src="./image/limited gloves.jpg" className="card-img-top" alt="..." width={190} height={170} />
    <div className="">
      <h2 className="card-title">English Willow Bats</h2>
      <p className="card-text">₹9000</p>
     <button> <a href="#" className="btn">Buy Now</a></button>
    </div>
    </div>
    <div className="card-body" >
    <img src="./image/limited gloves.jpg" className="card-img-top" alt="..." width={190} height={170} />
    <div className="">
      <h2 className="card-title">English Willow Bats</h2>
      <p className="card-text">₹9000</p>
     <button> <a href="#" className="btn">Buy Now</a></button>
    </div>
    </div>

    <div className="card-body" >
    <img src="./image/limited gloves.jpg" className="card-img-top" alt="..." width={190} height={170} />
    <div className="">
      <h2 className="card-title">English Willow Bats</h2>
      <p className="card-text">₹9000</p>
     <button> <a href="#" className="btn">Buy Now</a></button>
    </div>
    </div>

    <div className="card-body" >
    <img src="./image/limited gloves.jpg" className="card-img-top" alt="..." width={190} height={170} />
    <div className="">
      <h2 className="card-title">English Willow Bats</h2>
      <p className="card-text">₹9000</p>
     <button> <a href="#" className="btn">Buy Now</a></button>
    </div>
    </div>

    <div className="card-body" >
    <img src="./image/limited gloves.jpg" className="card-img-top" alt="..." width={190} height={170} />
    <div className="">
      <h2 className="card-title">English Willow Bats</h2>
      <p className="card-text">₹9000</p>
     <button> <a href="#" className="btn">Buy Now</a></button>
    </div>
    </div>

    </div>
    </>
  );
};

export default ProductPage;
