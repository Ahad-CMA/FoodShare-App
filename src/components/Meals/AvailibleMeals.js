import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import pizza from "./MealItem/pizza.webp";
import Burger from "./MealItem/burger.jpg";
import pasta from "./MealItem/pasta.jpg";
import sushi from "./MealItem/sushi.jpg";
import Maggie from "./MealItem/maggie.webp";
import fries from "./MealItem/fries.jpg";
import nuggets from "./MealItem/nuggets.avif";
import Franky from "./MealItem/franky.webp";




const AvailableMeals = () => {
  const foods = [
    {
    id: 1,
    name: "Burger",
    description: "Classic cheeseburger with fresh veggies and signature sauce.",
    price: 150,
    image:Burger,
  },
    {
    id: 2,
    name: "Pizza",
    description: "Hot, cheesy pizza with fresh toppings and a crispy crust.",
    price: 250,
    image: pizza,
  },
    {
    id: 3,
    name: "Pasta",
    description: "Delicious pasta in smooth, cheesy sauce—every bite is comfort in a bowl.",
    price: 200,
    image: pasta,
  },
    {
    id: 4,
    name: "Sushi",
    description: "Delicious hand-rolled sushi packed with flavor and freshness",
    price: 300,
    image : sushi,
  },
  {
    id: 5,
    name: "Maggie",
    description: "Instant noodles tossed with veggies and masala for a quick and tasty treat.",
    price: 100,
    image : Maggie,
  },
  {
  id: 6,
    name: "French Fries",
    description: "Crispy golden French fries, perfectly salted and served hot—everyone’s favorite snack!",
    price: 100,
    image : fries,
  },
  {
    id: 7,
    name: "Chicken Nuggets",
    description: "Crispy on the outside, tender on the inside—classic chicken nuggets that hit the spot every time.",
    price: 150,
    image : nuggets,
  },
   {
  id: 8,
    name: "Chicken Franky",
    description: "Juicy chicken, zesty chutneys, and pickled onions in a handheld delight.",
    price: 70,
    image : Franky, 
  },
];
  const [meals, setMeals] = useState(foods);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(false);


  // useEffect(() => {
  //   setIsLoading(true);
  //   const fetchMeals = async () => {
  //     const response = await fetch(
  //       "https://abbas-s-kitchen-default-rtdb.firebaseio.com/meals.json"
  //     );

  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }

  //     const responseData = await response.json();
  //     console.log(responseData);

  //     const loadedMeals = [...foods];

  //     for (const key in responseData) {
  //       loadedMeals.push({
  //         id: key,
  //         name: responseData[key].name,
  //         description: responseData[key].description,
  //         price: responseData[key].price,
  //       });
  //     }
  //     console.log(loadedMeals);
  //     setMeals(loadedMeals);
  //     setIsLoading(false);
  //   };

  //   fetchMeals().catch((error) => {
  //     setIsLoading(false);
  //     setHttpError(error.message);
  //   });
  // }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading ...</p>
      </section>
    );
  }

  // if (httpError) {
  //   return (
  //     <section className={classes.mealsError}>
  //       <p>{httpError}</p>
  //     </section>
  //   );
  // }
  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
