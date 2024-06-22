import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const foods = [
    {
    id: 1,
    name: "Burger",
    description: "Cheese Burger",
    price: 2.5,
  },
    {
    id: 2,
    name: "Pizza",
    description: "Cheese Pizza",
    price: 5,
  },
    {
    id: 3,
    name: "Pasta",
    description: "White Cheese Pasta",
    price: 7,
  },
    {
    id: 4,
    name: "Sushi",
    description: "Delicious sushi",
    price: 10,
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
