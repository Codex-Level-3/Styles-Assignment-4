"use client";

import RecipeCards from "./RecipeCards";

export default function Dashboard() {
  const recipeNames = [
    "Summer Salad",
    "Biryani",
    "Roasted Butternut Squash Soup",
    "Parfait",
    "Chilli",
    "Lava Cake",
  ];
  const description = [
    "A refreshing mix of crisp lettuce, in season fruit, and cajun seared shrimp tossed in a zesty vinaigrette, perfect for the hot summer days.",
    "Fragrant Indian rice dish layered with spiced meat or vegetables, garnished with fried onions, herbs, and nuts for a flavorful one-pot meal.",
    "Creamy soup made by roasting squash and blending it with spices, onions, garlic, and broth for a cozy and nutritious bowl.",
    "Layers fo yogurt, granola, and fresh fruits making a delightful and refreshing dessert.",
    "Hearty stew with ground beef, beans, tomatoes, onions, and spices simmered to bring out rich flavors.",
    "Decadent chocolate cake with a molten center, baked until the edges are set but the middle remains gooey. Serve with ice cream for a luxurious dessert experience.",
  ];
  const category = [
    "Salad",
    "Main Dish",
    "Soup",
    "Dessert",
    "Main Dish",
    "Dessert",
  ];
  const time = [
    "10 minutes",
    "1 hour 30 minutes",
    "45 minutes",
    "10 minutes",
    "1 hour 30 minutes",
    "20 minutes",
  ];
  const calories = ["150", "500", "175", "250", "400", "350"];
  return (
    <section className="flex flex-wrap gap-3 justify-center mb-3 ">
      {recipeNames.map((recipeName, index) => (
        <RecipeCards
          img={index + ".jpg"}
          recipeName={recipeName}
          description={description[index]}
          category={`Category: ${category[index]}`}
          time={`Cooking Time: ${time[index]}`}
          calories={`Calories: ${calories[index]} per serving`}
        />
      ))}
    </section>
  );
}
