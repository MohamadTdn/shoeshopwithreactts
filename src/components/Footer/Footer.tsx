import React from "react";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="Footer mt-15 bg-gray-100">
      <div className="*:pt-14 px-7 flex flex-col lg:flex-row justify-between">
        <div>
          <ul className="space-y-4">
            <h5 className="font-bold text-xl">Info</h5>
            <li>Track Your Order</li>
            <li>Our Blog</li>
            <li>Privacy policy</li>
            <li>Shipping</li>
            <li>Contact Us</li>
            <li>Help</li>
            <li>Community</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-4">
            <h5 className="font-bold text-xl">About</h5>
            <li>History</li>
            <li>Our Team</li>
            <li>Services</li>
            <li>Company</li>
            <li>Manufacture</li>
            <li>Wholesale</li>
            <li>Retail</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-4">
            <h5 className="font-bold text-xl">Women Shoes</h5>
            <li>Track Your Order</li>
            <li>Our Blog</li>
            <li>Privacy policy</li>
            <li>Shipping</li>
            <li>Contact Us</li>
            <li>Help</li>
            <li>Community</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-4">
            <h5 className="font-bold text-xl">Popular</h5>
            <li>Prices Drop</li>
            <li>New Products</li>
            <li>Best Sales</li>
            <li>Stores</li>
            <li>Login</li>
            <li>Cart</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-4">
            <h5 className="font-bold text-xl">Mens Collection</h5>
            <li>Delivery</li>
            <li>About Us</li>
            <li>Shoes</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <div className="space-y-4">
            <h5 className="font-bold text-xl">Get In Touch</h5>
            <p className="address w-55 leading-8">
              Stylish Online Store 123 Main Street, Toulouse - France. Call us:
              (+33) 800 456 789-987
            </p>
            <h5 className="email font-bold">contact@yourwebsite.com</h5>
          </div>
        </div>
      </div>
      <div className="copyright flex flex-col lg:flex-row justify-start lg:justify-between py-10 px-6">
        <h3>© Copyright Stylish 2023.</h3>
        <h3>Free HTML by TemplatesJungle</h3>
      </div>
    </footer>
  );
}
