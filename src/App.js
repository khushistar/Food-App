import "./App.css";
import React, { useState } from "react";

const cuisines = {
  Indian: [
    {
      img: "https://www.vegrecipesofindia.com/wp-content/uploads/2013/07/naan-recipe-2-500x500.jpg",
      description: "Butter nan",
      rating: "4/5",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0846/4264/files/shutterstock_1081707725.jpg?v=1536674085",
      description: "Chicken Biryani",
      rating: "5/5",
    },
    {
      img: "https://www.holidify.com/blog/wp-content/uploads/2015/11/Mini_Uttappam.jpg",
      description: "Dosa",
      rating: "1/5",
    },
  ],
  Chinese: [
    {
      img: "https://www.cookwithmanali.com/wp-content/uploads/2021/08/Schezwan-Noodles-500x375.jpg",
      description: "Noodels",
      rating: "4/5",
    },
    {
      img: "https://tastesbetterfromscratch.com/wp-content/uploads/2023/10/Chow-Mein-1.jpg",
      description: "Chow Mein",
      rating: "5/5",
    },
    {
      img: "https://holycowvegan.net/wp-content/uploads/2020/03/veg-manchurian-7.jpg",
      description: "Manchurian",
      rating: "2/5",
    },
  ],
  Italian: [
    {
      img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Burger",
      rating: "3/5",
    },
    {
      img: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
      description: "Pizza",
      rating: "2/5",
    },
    {
      img: "https://static01.nyt.com/images/2023/08/31/multimedia/RS-Lasagna-hkjl/RS-Lasagna-hkjl-superJumbo.jpg",
      description: "Lasagna",
      rating: "4/5",
    },
  ],
};

const categories = Object.keys(cuisines);

function App() {
  const [category, setCategory] = useState("Indian");

  const handlechangecategory = (category) => {
    setCategory(category);
  };
  return (
    <div className="App">
      <h1>🍽 GoodFood GoodLife</h1>
      <hr />

      <div className="buttons">
        {categories.map((item, index) => (
          <button
            key={index}
            className={item === category ? "active" : ""}
            onClick={() => handlechangecategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="items-container">
        {cuisines[category].map((item, index) => (
          <div className="category-items" key={index}>
            <img src={item.img} alt="foodimg" />
            <h4>{item.description}</h4>
            <p>{item.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
