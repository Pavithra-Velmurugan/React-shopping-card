import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Stars from "./rating";
import ReactDOM from "react-dom/client";

const productList = [
  {
    id: 1,
    title: "iPhone 13 (128GB)",
    images:
      "https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UY327_FMwebp_QL65_.jpg",
    price: "₹51,499",
    rating: 4.5,
    summary:
      "15 cm (6.1-inch) Super Retina XDR display. Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
  },

  {
    id: 2,
    title: "LG 80 cm (32 inches) HD Smart LED TV",
    images: "https://m.media-amazon.com/images/I/71kuqRw8L5L._SX522_.jpg",
    price: "₹13,490",
    rating: 4.3,
    summary:
      "Web OS Smart TV | Wi-Fi | Home Dashboard | Screen Mirroring | Mini TV Browser | Multi-Tasking ",
  },
  {
    id: 3,
    title: "LG 185 L Single Door Refrigerator",
    images: "https://m.media-amazon.com/images/I/714C5PDdPQL._SX679_.jpg",
    price: "₹16,990",
    rating: 4.3,
    summary:
      "Inverter Compressor, Base Stand with drawer, Stabilizer free operation, Door Lock, Adjustable Shelves",
  },
  {
    id: 4,
    title: "Samsung 7 kg Washing Machine",
    images: "https://m.media-amazon.com/images/I/61gbJJMLLEL._SY741_.jpg",
    price: " ₹15,490",
    rating: 4.4,
    summary:
      "Fully-automatic top load washing machine: Affordable with great wash quality Easy to use",
  },
  {
    id: 5,
    title: "Bajaj 20L Grill Microwave Oven",
    images: "https://m.media-amazon.com/images/I/71ITInjy-FL._SX679_.jpg",
    price: "₹5,799",
    rating: 4.3,
    summary: "20L Capacity: Suitable for bachelors or small families",
  },
  {
    id: 6,
    title: "AQUA D PURE Copper RO Water Purifier",
    images: "https://m.media-amazon.com/images/I/61qefdUzEEL._SX522_.jpg",
    price: "₹5,199",
    rating: 4.3,
    summary:
      "Elegant Design with Purified Water Level Indicator, Push Fit component for Leak Proof Performance",
  },
  {
    id: 7,
    title: "Crompton Amica 15-L Storage Water Heater",
    images: "https://m.media-amazon.com/images/I/51KJZ5ccJXL._SX679_.jpg",
    price: "₹6,820",
    rating: 4.2,
    summary:
      "TECHNICAL SPECIFICATIONS: Wattage: 2000 W; Capacity: 15L; Star Rating 5; Pressure 8 bar",
  },
  {
    id: 8,
    title: "Usha Bloom Goodbye Dust Ceiling Fan",
    images: "https://m.media-amazon.com/images/I/514PtfA3n7L._SX679_.jpg",
    price: "₹3,395",
    rating: 4.1,
    summary:
      "Blade Size: 1250 Mm, Color: Golden, Brown, Power Source: Corded Electric, Mounting Type: Ceiling Mount",
  },
  {
    id: 9,
    title: "Usha 1600 Watt Induction",
    images: "https://m.media-amazon.com/images/I/610yL--M0RL._SX679_.jpg",
    price: "₹2,299",
    rating: 4.3,
    summary:
      "Keep Warm Function :- This will keep food warm and ready-to-eat after it has been cooked",
  },
  {
    id: 10,
    title: "Acnos® Premium Women's Watch",
    images: "https://m.media-amazon.com/images/I/41P6EFEypDL._SY741_.jpg",
    price: "₹220",
    rating: 4.5,
    summary:
      "Warranty type: Manufacturer; 1 Years Warranty Against Only Manufacture Defects",
  },

  {
    id: 11,
    title: "Apple AirPods Pro (2nd Generation)",
    description: "An apple mobile which is nothing like apple",
    price: "$549",
    discountPercentage: 12.96,
    rating: 3.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "...",
    images: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg",
  },
  {
    id: 12,
    title: "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm",
    description: "An apple mobile which is nothing like apple",
    price: "$549",
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "...",
    images: "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg",
  },
];

export function ProductsPage() {
  return (
    <div>
      {/* <NavBar cartSize={cartSize}/>
      <Header/> */}
      <Products />
      <Footer />
    </div>
  );
}

let cartSize = 0;
const onProductCount = (count) => {
  cartSize = count;
  console.log("product size is ", cartSize);
  return <NavBar cartSize={cartSize} />;
};

function NavBar({ cartSize }) {
  console.log("Cart size", cartSize);

  const navigate = useNavigate();

  return (
    <Navbar id="navbar" expand="lg" className="bg-body-tertiary">
      <Container className="container1">
        <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                All Products
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/productspage">
                Popular Items
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                New Arrivals
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <Container className="container2">
        <form className="d-flex">
          <button
            onClick={() => navigate("/cart")}
            className="btn btn-outline-dark"
            type="submit"
          >
            <i className="fa-solid fa-cart-shopping fa-xs"></i>
            &nbsp; Cart &nbsp;
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              {cartSize}
            </span>
          </button>
        </form>
      </Container>
    </Navbar>
  );
}

function Header() {
  return (
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in style</h1>
          <p className="lead fw-normal text-white-50 mb-0">
            With this shop hompeage template
          </p>
        </div>
      </div>
    </header>
  );
}

function Products() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const onProductSelect = (value) => {
    console.log("value is ", value);

    setSelectedProducts((prevState) => {
      if (prevState.includes(value)) {
        return prevState.filter((item) => item !== value);
      } else {
        return [...prevState, value];
      }
    });
  };
  onProductCount(selectedProducts.length);
  console.log("selected produts list is ", selectedProducts);

  return (
    <div>
      <NavBar cartSize={cartSize} />
      <Header />
      <section className="py-5">
        <Container>
          <Row>
            {productList.map((eachProduct) => (
              <GetProductCards
                key={eachProduct.id}
                productID={eachProduct.id}
                onProductSelect={onProductSelect}
                imagelink={eachProduct.images}
                productname={eachProduct.title}
                productprice={eachProduct.price}
                productrating={eachProduct.rating}
              />
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
  //     productList=  getProducts();
  //    console.log(productList)
  //    productList.then((response)=>{
  //     console.log(response.products[0].id)
  //    })
  //    .catch((err)=>
  //     console.log("error")
  //    )
}

// async function getProducts(){
//     let res = await fetch("https://dummyjson.com/products")
//      data = await res.json();
//     console.log(data.products[0].id)
//     return data;
// }

function GetProductCards({
  imagelink,
  productname,
  productprice,
  productrating,
  productID,
  onProductSelect,
}) {
  // console.log("key is ",productID)
  const [cartButton, setCartButton] = useState(true);

  const buttonHandler = (productID) => {
    setCartButton(!cartButton);
    onProductSelect(productID);
  };
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          Sale
        </div>
        <Card.Img variant="top" src={imagelink} />
        <Card.Body>
          <Card.Title>{productname}</Card.Title>
          <Stars rating={productrating} />
          <Card.Text>{productprice}</Card.Text>
          <Button
            onClick={() => buttonHandler(productID)}
            id="button"
            style={{ width: cartButton === false ? "200px" : "117px" }}
            variant="primary"
          >
            {cartButton === true ? "Add to cart" : "Remove from cart"}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

function Footer() {
  return (
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">
          Copyright &copy; Your Website 2023
        </p>
      </div>
    </footer>
  );
}

export default Footer;
