<h1 align="center">
  <br>
  <a href="https://github.com/Amir-Battal">
    <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="ُTypeScript" width="200">
    <img src="https://blog.octo.com/pourquoi-sinteresser-a-react/image1.webp" alt="react.js" width="200">
  </a>
  <br>
  Order App // Frontend
  <br>
</h1>

  <h4 align="center">This project is related to the Project tutorial from <a href="https://www.youtube.com/@ChrisBlakely" target="_blank">Chris Blakely</a>.</h4>
<h4 align="center"><span>NOTE: </span>But everything was written by me and I got the general idea from this video.</h4>

<div align="center">
  
  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
</div>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#run-locally">Run Locally</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

<div align="center">
  
  ![mernOrder-vid1](https://github.com/user-attachments/assets/46c557f6-9b92-4388-b645-27cd44501f4a)
</div>

## Key Features

* Landing Page:
  - Navbar Contains:
      - Logo on the left.
      - If the user is logged in, the user’s email will appear, and next to it, a button called “Order Status” will take the user to a page containing all the orders that the user has requested.
      - Otherwise, a login button will appear.
  - Hero in the next section containes food image.
  - At the bottom of Hero there is a search box, Search for the restaurant by city or town name, and include reset button.
  - Below the above is a picture and a simple explanation of the program and how to download it.
  - At the end of this page there is a footer containing the application logo on the left and the terms and privacy on the right.

<div align="center">

  ![mernOrder-vid1](https://github.com/user-attachments/assets/46c557f6-9b92-4388-b645-27cd44501f4a)
</div>

 
* Login & SignUp:
  - A third party, <a href="https://auth0.com/" target="_blank">Auth0</a>, was used.
  - Sign up Using Email or Google Accout.
  - If the user is already registered, he can log in.
  - The authId, and email is stored in the MongoDB database.

<div align="center">

  ![Login-Signin](https://github.com/user-attachments/assets/2509b5c8-95da-4852-a7c0-7dc63d3946d2)
</div>

   
* User Profile:
  - On this page there are fields for:
    - Email
    - Name
    - Address Line 1
    - City
    - Country
  - The user can add or modify the following fields: Name, Address Line 1, City, Country.
  - and he can't modify Email.
 
<div align="center">

  ![UserProfile](https://github.com/user-attachments/assets/6c70221b-1ebb-4215-99ab-7ab03d01d7a0)
</div>

 
* Restaurants Page: After searching using the name of the city or town
  - Left section:
    - Filter by restaurant cuisine in the form of a list.
    - 7 cuisine are displayed and there is a Show More button to view more cuisine.
    - There is a button to reset the filter.
  - Right section:
    - At the top is a box to search for a restaurant using cuisines or the restaurant name, and include a reset button.
    - Below it is the number of restaurants that were searched for by city name at the beginning.
    - and it can be cahnge during the second search by restaurant cusinine.
    - There is a link named "Change Location" go to Home page (first search).
    - On the right side of this section there is a button to sort by Best match, Delivery price, Estimated delivery time.
    - Below the above are restaurant cards that contain:
      - The left side of the card contains a picture of the restaurant.
      - The middle section of the card contains the name of the restaurant and the restaurant's cuisine.
      - The right section of the card contains the estimated delivery time and delivery price.
    - This section contains Pagination feature:
      - Only the first 10 restaurants appear, and at the bottom there are numbers to show other restaurants.

<div align="center">

  ![RestaurantsPage](https://github.com/user-attachments/assets/1f72e087-ea0e-4c2c-9f36-9a6ac04da47a)
</div>   


* Restaurant Page: After selecting a specific restaurant
  - At first, the restaurant image appears.
  - Below is the restaurant's name, address and cuisines.
  - At the bottom of the restaurant name there is a menu, list of the restaurant's items and the price of each one.
  - To the right of the above there is a card where the items selected by the user are placed, contains:
    - Above is the Total amount of order for all items plus Delivery price.
    - Each item is listed with its own number and price.
    - Each selected item can be deleted.
    - There is also a delivery price.
    - At the bottom there is a button to go to checkout

<div align="center">

  ![RestaurantPage](https://github.com/user-attachments/assets/f2939529-02ad-4f28-ba19-b3b48eafa8d0)
</div>


* Checkout:
  - A third party, <a href="https://stripe.com/" target="_blank">Stripe</a>, was used.
  - The total price is sent to this party.
  - Before payment, the order status must be in the placed state.
  - After successful payment, the order status will be changed to paid but it is called Awaiting Restaurant Confirmation in the Order Status page.

<div algin="center">

  ![Checkout](https://github.com/user-attachments/assets/958ef219-ed30-4583-bb9e-875761a17a2a)
</div>

 
* Manage Restaurant section contains two sections:
  - First section: Manage Restuarant:
    - Add and Modify user's restaurant.
    - Restaurant Details is:
      - Restaurant Name
      - Restaurant Address: City, Country
      - Delivery Price from this Restaurant in (£)
      - Estimated Delivery Time From this Restaurant in minutes
      - Restaurant Food Cuisines (Select multiple options)
      - Restaurant Menu: add Name, and Price in (£) for each item, and user can remove any item.
      - Restaurant Image

<div align="center">

  ![ManageRestaurant](https://github.com/user-attachments/assets/42715abd-3cba-4134-8af1-e277bfb787eb)
</div>
        
  - Second section: Orders:
    - Active Orders Counter.
    - A card for each order placed from the user's restaurant, contains:
      - Card Header contains: Customer Name, Delivery Address, Time, Total Cost.
      - List of items and their number.
      - Order Status It can be controlled by the restaurant owner user contains many Select multiple options.

<div align="center">

  ![ManageRestaurantOrder](https://github.com/user-attachments/assets/51974291-bc80-4baf-a651-6fb5ff312476)
</div>


* Order Status: User order from multiple restaurants
  - User order card from multiple restaurants, contains:
    - Card Header containes: The order status is selected by the restaurant owner, Estimated delivery time.
    - Progress Bar It is filled based on the status of the request.
    - Delivery to, contains: Address Line 1, City, Country.
    - Your Order, Items selected by the user
    - On the right side there is a picture of the restaurant.
    - At the end there is the total amount including the delivery price and the price of the items.

<div align="center">
  
  ![OrderStatus](https://github.com/user-attachments/assets/bff7321f-f2a2-43f9-9e2c-e50fd51492ff)
</div>


## Run Locally

Clone the project

```bash
  git clone https://github.com/Amir-Battal/mern-order-app-frontend.git
```

Go to the project directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

To run this project, you will need to add the following environment variables to your .env file

General Variable
`VITE_API_BASE_URL`

Auth0 Variables
`VITE_AUTH0_DOMAIN`
`VITE_AUTH0_CLIENT_ID`
`VITE_AUTH0_CALLBACK_URL`
`VITE_AUTH0_AUDIENCE`

Example
```bash
VITE_API_BASE_URL=http://localhost:7001

VITE_AUTH0_DOMAIN=dev-sbpc2bue8v6q77b8.us.auth0.com
VITE_AUTH0_CLIENT_ID= ... // Secret :)
VITE_AUTH0_CALLBACK_URL=http://localhost:5173
VITE_AUTH0_AUDIENCE=mern-order-app-api
```

Start the app

```bash
  npm run dev
```

NOTE: Run Backend server also.




## How To Use

Project Deploy on <a href="https://render.com/" target="_blank">Render</a> platform,
You can use the project through the following link:
<a href="https://mern-order-app-frontend.onrender.com">Link</a>



## Credits

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [React.js](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [shadcn](https://ui.shadcn.com/)
- [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- [Tailwindcss](https://tailwindcss.com/)
- [Zod](https://zod.dev/)
- [Auth0](https://auth0.com/)



## License

Chris Blakely [Chris Blakely](https://www.youtube.com/@ChrisBlakely)

---

> Linkedin [Amir Battal](https://www.linkedin.com/in/amir-battal/) &nbsp;&middot;&nbsp;
> GitHub [@Amir-Battal](https://github.com/Amir-Battal) &nbsp;&middot;&nbsp;



