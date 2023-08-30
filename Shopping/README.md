# ShopVista - MERN E-commerce 

ShopVista is a modern E-commerce web application built using the MERN stack (MongoDB, Express, React, Node.js) with Redux for state management and Stripe for payment processing. It provides a seamless shopping experience for users, complete with user authentication, cart functionality, and a stylish interface.

- **Live Demo**: [shop-vista.netlify.app](https://shop-vista.netlify.app)

## Table of Contents

- [Features](#features)
- [WorkFlow](#workflow)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Future Plans](#future-plans)
- [Acknowledgments](#acknowledgments)

## Features

- User Authentication: Sign up and log in to access personalized shopping experience.
- Product Catalog: Browse a wide range of products with detailed descriptions.
- Cart Functionality: Add products to the cart, update quantities, and proceed to checkout.
- Secure Payments: Integrated with Stripe for secure and seamless payment processing.
- 404 Page: Custom error page for handling invalid routes.
- Use of react-helmet to add a custom HTML title for different pages.
- Implementation of Styled-components instead of Bootstrap or Libraries.

## WorkFlow

This app has been designed and built in a manner that makes it very easy to order items once they are added to the cart.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/shopvista.git`
2. Navigate to the project directory: `cd shopvista`
3. Install dependencies: `npm install`
4. Set up environment variables: Create a `.env` file based on `.env.example` and add your configuration.
5. Add your stripe key in form of React_Stripe_key.
6. Run the application: `npm start`

## Usage

1. Visit [shop-vista.netlify.app](https://shop-vista.netlify.app)
2. Sign up or log in to start shopping.
3. Browse products, add items to your cart, and proceed to checkout.
4. Enter payment details using Stripe's secure payment gateway.
5. Receive order confirmation.

## Technologies Used

- MongoDB
- Express.js
- React (with Redux)
- Node.js
- Stripe (for payment processing)
- Mongoose
- JSON web tokens
- Netlify
  

## Contributing

Contributions are welcome! If you encounter any issues or would like to suggest enhancements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Future Plans

- Implement product recommendations and wish lists.
- Enhance the user interface with animations and visual improvements.
- Integrate social media sharing options for products.
- Adding Admin panel for showcasing all the data and payments.
- Improve payment gateway with UPI payment and more.
- Improved Fuzzy Search implementation.
- Adding products as favorites for repeated orders.

Any more Suggestions are always welcome in the PRs!

---

*This README template was created with ❤️ by Ayush Panday.*
