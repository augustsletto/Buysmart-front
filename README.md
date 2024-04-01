# Sneak - Your Ultimate Destination for Sneakers and Luxury Items

Sneak is an e-commerce website built with React, where users can explore and purchase a wide range of sneakers and luxury items such as bags and wallets. It offers a seamless shopping experience with features designed to enhance user engagement and satisfaction.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
  - [User Authentication](#user-authentication)
  - [Product Listings](#product-listings)
  - [Shopping Cart](#shopping-cart)
  - [User Profile Management](#user-profile-management)
  - [Admin Panel](#admin-panel)
  - [Responsive Design](#responsive-design)
- [Technologies Used](#technologies-used)
- [Components](#components)
- [Usage](#usage)
- [Deployment](#deployment)
- [Credits](#credits)
- [Media](#media)

## Introduction

Sneak is a React-based e-commerce platform catering to sneaker enthusiasts and luxury item aficionados. With a sleek and intuitive interface, users can seamlessly browse through a diverse collection of products, add them to their cart, and complete their purchase securely. The platform also provides personalized user profiles, allowing customers to manage their orders and preferences efficiently.

## Features

### User Authentication

- **Secure Login and Registration:** Users can create accounts or log in securely to access their personalized shopping experience.
- **Profile Management:** Registered users have access to their profile settings, where they can update personal information, manage addresses, and view order history.

### Product Listings

- **Extensive Product Catalog:** Sneak offers a wide range of sneakers and luxury items, curated from top brands and designers.
- **Detailed Product Pages:** Each product page provides comprehensive details, including images, descriptions, prices, and customer reviews.
- **Search Functionality:** Users can easily search for specific products using the search bar, facilitating quick navigation through the catalog.

### Shopping Cart

- **Seamless Checkout Process:** Users can add items to their cart and proceed to checkout effortlessly.
- **Cart Management:** The shopping cart allows users to review and edit their selected items before finalizing their purchase.

### Product Carousel
- **Highlighting Top-rated Products:**  The carousel dynamically displays products with ratings of 4 or higher, providing users with a visually appealing showcase of high-quality items.
- **Visual Appeal:** Each product displayed in the carousel is accompanied by an image, name, and price, enhancing the visual appeal and enticing users to explore further.
- - **Interactive Navigation:**  The carousel displays each item for a brief period before transitioning to the next one. Users can navigate through the carousel using intuitive controls, facilitating easy exploration of featured products.
- **Direct Access to Product Details:** Clicking on a product within the carousel directs users to the detailed product page, where they can view additional information and make a purchase if interested.

### User Profile Management

- **Order History:** Registered users can view their order history, including past purchases and order statuses.
- **Address Management:** Users can manage their shipping addresses, making it convenient for repeat purchases.

### Admin Panel

- **Admin Dashboard:** Administrators have access to an admin panel where they can manage products, users, and orders.
- **Product Management:** Admins can add, edit, and delete products from the catalog, ensuring accurate and up-to-date listings.
- **User Management:** Admins can view and manage user accounts, including user roles and permissions.

### Responsive Design

- **Mobile-Friendly Interface:** Sneak is built with responsive design principles, ensuring a seamless experience across devices, including desktops, tablets, and smartphones.
- **Optimized Performance:** The platform prioritizes fast load times and smooth interactions, providing users with a fluid browsing experience.

## Technologies Used

- **React:** Front-end framework for building user interfaces.
- **React Router:** Library for handling navigation and routing within the application.
- **React Bootstrap:** UI library for building responsive and mobile-first websites.
- **Redux:** State management tool for managing application state and data flow.
- **Node.js:** JavaScript runtime environment for server-side development.
- **Cloudinary:** Cloudinary database for storing product images.
- **Axios:** Used for making HTTP requests from the frontend to interact with the backend API.
- **React Paypal Button V2:** Integrated for handling PayPal payments securely within the application.
- **Redux Thunk:** Middleware for handling asynchronous logic in Redux applications.


## Color Theme

The color theme of the project is carefully chosen to provide a visually appealing and cohesive user interface. Here are the main colors used:

- **Primary Color (`#C9C9C9`):** This shade is primarily used for the navigation bar, creating a harmonious connection with the background of the product images. It adds a touch of elegance and consistency to the overall design.

- **Background Color (White):** The background color of the website is set to white, offering a clean and minimalist backdrop for the content. This choice ensures readability and focus on the main elements of the interface.

- **Button Color (`#1A1A1A`):** Buttons across the website feature a deep black color (`#1A1A1A`), providing contrast against the white background. This color choice adds a sense of sophistication and emphasizes interactive elements.

- **Delete Button Color (`#D9534F`):** In the admin panels, delete buttons are highlighted with a vibrant red color (`#D9534F`). This color signifies actions with potential consequences and ensures that users pay attention to critical operations.

By using these colors consistently throughout the project, the design maintains coherence and enhances the user experience.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928806/SneakReadMeImages/huemuokxppti7wqfpbnm.png)

## Components

### Header

- **Navigation:** Provides links for browsing different sections of the website, including user profile, and shopping cart, and admin panel for admins.
- **Search Box:** Allows users to search for specific products using keywords.

### Footer

- **Copyright Information:** Displays copyright details and acknowledgments.

### Form Container

- **Layout Component:** Renders a form container with centered content, suitable for login, registration, and other form-based interactions.

### Loader

- **Loading Indicator:** Displays a spinner animation to indicate loading or processing states.

### Message

- **Alert Component:** Renders an alert message with customizable variants (e.g., success, error, warning).

### Pagination

- **Pagination Component:** Allows users to navigate through multiple pages of product listings.

### Product

- **Product Page:** Displays product information, including name, image, rating, and price.

### Product Carousel

- **Carousel Component:** Presents a carousel of top-rated products, allowing users to view featured items easily.

### Rating

- **Rating Component:** Renders a star-based rating system for product reviews and ratings with comments.

### Search Box

- **Search Input:** Provides a search box for users to enter keywords and search for products within the catalog.

### Progress Indicator

**Progress Indicator:** Displays steps of the checkout process, indicating the current step and allowing users to navigate through the process seamlessly.



## Usage

#### Starting Shopping Experience
1. **Navigate to Website:** Users can access the website by entering the URL in their web browser or clicking on a provided link.
2. **Explore Categories:** Upon landing on the homepage, users can explore different product categories displayed prominently.

#### Browsing Products
- Users can browse through various products listed on the website, organized by categories such as sneakers, apparel, and accessories.
- Clicking on a specific category will display a selection of products within that category.

#### Product Details
- Selecting a product will redirect users to a detailed product page.
- Here, users can view comprehensive information about the product, including images, descriptions, prices, and customer reviews.

#### Adding to Cart
- Interested users can add the product to their shopping cart by clicking on the "Add to Cart" button on the product page.
- The selected item will then be added to their virtual shopping cart.

#### Viewing Cart
- Users can view their shopping cart by clicking on the cart icon located in the navigation bar.
- This will display a summary of the items currently in the cart, along with their quantities and prices.

#### Checkout Process
- To proceed with the purchase, users can click on the "Checkout" button from the shopping cart page.
- They will be guided through the checkout process, where they can enter shipping details, select payment methods, and review their order summary.

By following these steps, users can effectively browse, select, and purchase products from the website, enhancing their shopping experience.


## Using Sneak

### Exploring Products
1. **Visit the Homepage:** Open your web browser and enter the URL of Sneak to access the homepage.
2. **Browse Product Categories:** Explore various products by scrolling down the homepage or using the navigation menu. 
3. **Click on a Product:** Click on a product thumbnail or title to view more detailed information about the item you're interested in purchasing.

### Product Details
4. **View Product Information:** On the product page, examine the product description, and check the price and available sizes.
5. **Add to Cart:** If you decide to purchase the item, click the "Add to Cart" button. Either keep shopping or move on with your order.

### Shopping Cart
6. **Access Your Cart:** Navigate to your shopping cart by clicking on the cart icon located in the top right corner of the page.
7. **Review Cart Contents:** In the shopping cart, review the products you've added, including their quantities and total prices. Ensure that the items in your cart are correct.
8. **Update Quantity:** To adjust the quantity of a specific item, update the quantity field with your desired number and click the "Update" button.
9. **Remove Items:** If you wish to remove an item from your cart, locate the "Remove" or "Delete" option next to the product and click on it.
10. **Continue Shopping or Proceed to Checkout:** After reviewing your cart, choose to continue shopping or proceed to checkout by clicking the respective buttons.

### Checkout Process
11. **Enter Shipping Details:** If proceeding to checkout, you'll be prompted to enter your shipping information, including your name, address, and contact details.
12. **Select Payment Method:** Choose your preferred payment method from the available options, such as credit card, PayPal.
13. **Review Order Summary:** Check the order summary, which includes a list of items, shipping details, and the total cost of your purchase.
14. **Place Your Order:** Once you're satisfied with your order, click the 'PLACE ORDER' button to move on to payment and finalize your order.

### Order Confirmation
15. **Confirmation Page:** After successfully placing your order, you'll be displayed to a confirmation message displaying your order details and a confirmation number.

By following these detailed steps, you can effectively navigate through Sneak's website, browse products, add items to your cart, and complete the checkout process seamlessly.



## Testing

### Test Cases

| Test Case                | Expected Outcome          | Result  |
|--------------------------|---------------------------|---------|
| Adding product to cart   | Product added to cart     | Passed  |
| Removing product from cart | Product removed from cart | Passed  |
| Checkout process completion | Successful order placement | Passed  |
| Responsive design check  | Proper display on different devices | Passed |
| Editing user account details | Changes to user account details saved successfully | Passed  |
| Cross-browser compatibility | Consistent performance across browsers | Passed |
| Checkout process with different payment methods | Successful completion with selected payment method | Passed |
| Search functionality test | Relevant products displayed based on search query | Passed |
| User registration test | Successful registration and login functionality | Passed |
| Product reviews test | Ability to submit reviews and ratings for products | Passed |
| Admin login with correct credentials | Successful login and access to admin dashboard | Passed  |
| Adding a new product | Product successfully added to the database and displayed on the website | Passed  |
| Editing an existing product | Changes to product details reflected on the website | Passed  |
| Deleting a product | Product removed from the database and no longer visible on the website | Passed  |
| Viewing user accounts | Access to a list of user accounts with options to edit or delete | Passed  |
| Deleting user account | User account removed from the database | Passed  |
| Viewing order details | Access to a list of orders with detailed information | Passed  |
| Updating order status | Changes to order status reflected in the system and communicated to users | Passed  |


## Deployment

This project is efficiently deployed through GitHub Pages, allowing it to be accessible via a web URL. The following steps outline the process to deploy your own version of this project or to update an existing deployment.

### Initial Setup and Customization

1. **Fork or Clone the Repository**
   - **Forking:** Navigate to the original repository on GitHub and click the "Fork" button to create a copy under your GitHub account.
   - **Cloning:** Use the `git clone https://github.com/augustsletto/Buysmart-front.git` command to clone the repository to your local machine.

2. **Implement Changes**
   - Modify the code as required for your customizations or improvements.

3. **Commit and Push Changes**
   - Commit your changes locally with `git commit -m "Descriptive commit message"`.
   - Push the changes to your GitHub repository using `git push origin main`. Replace `main` with `master` if your repository uses the `master` branch.
     ### Running the Project Locally

4. **Navigate to Project Directory:**
   Change your current directory to the cloned project directory:
   ```bash
   cd buysmart-frontend
   npm install
   npm start
   ```
   **Create a Heroku App**
   - Log in to your Heroku account using the Heroku CLI: `heroku login`.
   - Create a new Heroku app with a unique name.
   - Connect the heroku app to your github repository.

5. **Commit Changes**
   - Commit your changes to Github: `git add .` followed by `git commit -m "Initial commit"`.

6. **Deploy to Heroku**
   - Push your code to Github: `git push main`. Replace `main` with the name of your main branch if it's different (e.g., `master`).

7. **Access Your Deployed Application**
   - After a successful deployment, Heroku will provide you with a URL where your application is accessible.
   - Open the provided URL in your web browser to view your deployed React application.

8. **Update Your Deployment**
   - To deploy updates, commit your changes to Git and push them to the Heroku remote repository: `git push heroku main`.
   - Heroku will automatically rebuild and deploy your application with the latest changes.

9. **Manage Your Heroku App**
   - You can manage your Heroku app, view logs, and configure settings through the Heroku Dashboard or CLI.

10. **Explore and Share**
    - Explore your deployed application to ensure that it functions as expected.
    - Share the URL with others to showcase your project or provide access to your application.

## Media

- The homepage showcases a sophisticated navigation bar, a dynamic carousel, and the latest product offerings.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928662/SneakReadMeImages/rwyfxkyxvb6onvip0qxh.jpg)
- The latest product section meticulously presents items with detailed information including names, prices, and customer reviews.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928663/SneakReadMeImages/rpqwizc0dqavnpppxaep.jpg)
- As users navigate beyond the first page, the carousel transitions out while maintaining an elegant display of product offerings.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928665/SneakReadMeImages/evwxbpglehtrds2qfm57.jpg)
- Product screens boast larger product images accompanied by essential details such as name, price, comprehensive reviews, and detailed descriptions. The availability status indicates whether the product is in stock, with corresponding actions disabled for out-of-stock items.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928664/SneakReadMeImages/u6yf5lrxx6jvh7zx5qjo.jpg)
- Products available for purchase feature interactive quantity options, providing users with flexibility in selecting desired quantities.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928664/SneakReadMeImages/kjbesx7rmobfkvizcxty.jpg)
- The shopping cart provides users with a concise overview of their selected items, allowing adjustments in quantity or removal. The subtotal dynamically updates as users modify their selections, ensuring transparency in the checkout process.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928666/SneakReadMeImages/debtayqiynoqo5bvtytq.jpg)
- Upon proceeding with an order, users are prompted to sign in to their accounts to streamline the checkout process and ensure security.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711931592/SneakReadMeImages/qapbd5tzehwvcoptnsyl.jpg)
- Users are guided through the checkout process, prompted to input shipping details to facilitate timely delivery of their orders.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928666/SneakReadMeImages/fg2ycie42ewaxs74e1uu.jpg)
- Paypal or Credit Card as payment methods are available, catering to diverse user preferences and ensuring a seamless checkout experience. (More to be added in the future)
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928666/SneakReadMeImages/r6fomi6zrji33pyarxnt.jpg)
- The order summary offers a comprehensive breakdown of the transaction, including shipping, payment, and order details, enabling users to review their purchase before finalizing.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928663/SneakReadMeImages/j8jq99vvu83iq9ryrihs.jpg)
- Upon order completion, users are presented with a confirmation message indicating the successful payment transaction. An informative notification highlights the payment status in a prominent color, ensuring clarity.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928664/SneakReadMeImages/hknjfdhf0yv0ukjlbva8.jpg)
- Following a successful payment transaction, users receive a confirmation message in green, indicating the payment date. For administrative users, additional options such as marking orders as delivered are available for streamlined order management. (The Mark As Delivered is not visible to customers, i was logged into my admin user when saving the image)
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928664/SneakReadMeImages/sxubpnsksuufl40rhowz.jpg)
- The user profile section empowers users with the ability to edit their profile information, ensuring accuracy and personalization. Order history provides users with insights into their past transactions and order statuses.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928666/SneakReadMeImages/otfaq16yzngw1f2ltj27.jpg)
- The administrative dashboard offers an overview of all orders, including key details such as order ID, customer information, dates, and payment status.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928661/SneakReadMeImages/rmyncrpohy7oufffuo3q.jpg)
- Administrative users have the authority to manage user accounts, with options to edit user details, change roles, and delete accounts as needed.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928661/SneakReadMeImages/eiuuut6nwcqas1ib3jus.jpg)
- The product management interface provides comprehensive tools for managing product listings, including options to edit, delete, and add new items to the catalog.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711932321/SneakReadMeImages/soyizevsmmzgbyyllk2d.jpg)
- The product editing form offers a structured interface for modifying product details, ensuring accuracy and consistency in product information.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928661/SneakReadMeImages/rf4tvquptwy8t9adqtxj.jpg)
- Upon submission, newly added products seamlessly integrate into the product catalog, instantly enriching the website's offerings and expanding user choice.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928663/SneakReadMeImages/zukefbrbaftqy0d5toll.jpg)
- Users can contribute to the community by submitting reviews, providing valuable insights and feedback on products. The rating system enables users to assign a score from 1 to 5, reflecting their satisfaction level.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928664/SneakReadMeImages/lqc9zl0g8zibcylsgc9i.jpg)
- Example reviews demonstrate the robustness of the review system, showcasing user feedback alongside corresponding ratings for product evaluation.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928667/SneakReadMeImages/bgaojvgwkmr91xroi2jr.jpg)
- Review comments include timestamps and user ratings, fostering transparency and accountability
in user-generated content.

![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928665/SneakReadMeImages/grmw596vmvmjzhd3rlzd.jpg)
- The product carousel intelligently updates to include new items meeting the criteria of a 4-star rating or higher, ensuring that only top-rated products are showcased to users.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928662/SneakReadMeImages/qbiqjix8azxcxcmskrho.jpg)
- Users can easily find specific items by searching for "Jordans," filtering the results to display only the iconic Jordan brand sneakers.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928663/SneakReadMeImages/z0sjrqvw9vmitztn4ys8.jpg)
- For example, searching for the non-full name "loui" brings up a curated selection of Louis Vuitton bags, providing users with a streamlined shopping experience tailored to their preferences. 
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928663/SneakReadMeImages/ivirixtu8lbcf2rc8657.jpg)
- Products containing the term "suede" in their name are surfaced in search results, ensuring that users find relevant items matching their criteria.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928661/SneakReadMeImages/w704scshoeaevzmejrya.jpg)
- A search for "Dior Jordan" yields results featuring the coveted collaboration between Dior and Jordan, allowing users to explore and discover these exclusive products effortlessly.
![FrontPage](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711928662/SneakReadMeImages/e91chanc7ce0z4jalf02.jpg)

## Credits

Sneak was created by [Your Name] as a personal project. Special thanks to the developers of the libraries and tools used in this project, as well as the open-source community for their contributions.

## HTML, CSS and JS Validated

![HTML Validator](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711935044/SneakReadMeImages/gxkpv2ibohggoafxsb4k.jpg)
![CSS Validator](https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711935044/SneakReadMeImages/grbk59twtf3o3mfcy5bf.jpg)

Validated all HTML, CSS and JavaScript documents for standards compliance.
