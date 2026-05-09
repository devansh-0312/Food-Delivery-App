const images = {
  pizza: "/Pizza2.avif",
  pizza2: "/Pizza2.avif",
  pizza3: "/PizzaImg.avif",
  burger: "/Burger.avif",
  sushi: "/Sushi.avif",
  noodles: "/Noodles.avif",
  pasta: "/Pasta.avif",
  indian: "/IndianFood.avif",
  tacos: "/Tacos.avif",
  sandwich: "/Sandwich.avif",
  desserts: "/Cakes.avif",
  kebab: "/Kebab.avif",
  rice: "/Rice.avif",
  pancake: "/Pancake.avif",
  bbq: "/BBQ.avif"
};

const data = [
  {
    id: 1,
    name: "Fusion Feast",
    rating: 4.6,
    cuisine: "Pizza",
    menu: [
      { id: 101, name: "Cheese Pizza", price: 299, image: images.pizza },
      { id: 102, name: "Veg Burger", price: 149, image: images.burger },
      { id: 103, name: "Hakka Noodles", price: 219, image: images.noodles },
      { id: 104, name: "Chicken Biryani", price: 319, image: images.rice },
      { id: 105, name: "Chocolate Cake", price: 179, image: images.desserts }
    ]
  },
  {
    id: 2,
    name: "Urban Bites",
    rating: 4.4,
    cuisine: "Asian",
    menu: [
      { id: 106, name: "Farmhouse Pizza", price: 399, image: images.pizza },
      { id: 107, name: "Chicken Sandwich", price: 179, image: images.sandwich },
      { id: 108, name: "Pancakes", price: 199, image: images.pancake },
      { id: 109, name: "Grilled Chicken", price: 379, image: images.bbq }
    ]
  },
  {
    id: 3,
    name: "Global Platter",
    rating: 4.7,
    menu: [
      { id: 110, name: "Sushi Roll", price: 329, image: images.sushi },
      { id: 111, name: "Tacos", price: 159, image: images.tacos },
      { id: 112, name: "Pasta Alfredo", price: 349, image: images.pasta },
      { id: 113, name: "Kebab Skewers", price: 269, image: images.kebab }
    ]
  },
  {
    id: 4,
    name: "Street Spice",
    rating: 4.3,
    menu: [
      { id: 114, name: "Chole Bhature", price: 229, image: images.indian },
      { id: 115, name: "Veg Burger", price: 149, image: images.burger },
      { id: 116, name: "Fried Rice", price: 229, image: images.rice }
    ]
  },
  {
    id: 5,
    name: "Food Carnival",
    rating: 4.8,
    cuisine: "Snacks",
    menu: [
      { id: 117, name: "Pepperoni Pizza", price: 349, image: images.pizza },
      { id: 118, name: "Chicken Kebab", price: 249, image: images.kebab },
      { id: 119, name: "Noodles", price: 219, image: images.noodles },
      { id: 120, name: "Chocolate Pancake", price: 219, image: images.pancake },
      { id: 121, name: "Brownie", price: 149, image: images.desserts }
    ]
  },
  {
    id: 6,
    name: "Spice Junction",
    rating: 4.5,
    menu: [
      { id: 122, name: "Butter Chicken", price: 359, image: images.indian },
      { id: 123, name: "Pasta", price: 299, image: images.pasta },
      { id: 124, name: "Burger", price: 199, image: images.burger },
      { id: 125, name: "Cake Slice", price: 149, image: images.desserts }
    ]
  },
  {
    id: 7,
    name: "Snack Street",
    rating: 4.2,
    menu: [
      { id: 126, name: "Sandwich", price: 159, image: images.sandwich },
      { id: 127, name: "Tacos", price: 149, image: images.tacos },
      { id: 128, name: "Noodles", price: 219, image: images.noodles }
    ]
  },
  {
    id: 8,
    name: "Grill Nation",
    rating: 4.7,
    menu: [
      { id: 129, name: "BBQ Chicken", price: 379, image: images.bbq },
      { id: 130, name: "Kebab", price: 269, image: images.kebab },
      { id: 131, name: "Rice Bowl", price: 229, image: images.rice },
      { id: 132, name: "Burger", price: 199, image: images.burger }
    ]
  },
  {
    id: 9,
    name: "Sweet Cravings",
    rating: 4.8,
    menu: [
      { id: 133, name: "Chocolate Cake", price: 179, image: images.desserts },
      { id: 134, name: "Pancakes", price: 199, image: images.pancake },
      { id: 135, name: "Pizza Slice", price: 199, image: images.pizza }
    ]
  },
  {
    id: 10,
    name: "Rice Bowl Co.",
    rating: 4.3,
    menu: [
      { id: 136, name: "Fried Rice", price: 229, image: images.rice },
      { id: 137, name: "Noodles", price: 219, image: images.noodles },
      { id: 138, name: "Chicken Kebab", price: 249, image: images.kebab }
    ]
  },
  {
    id: 11,
    name: "Daily Deli",
    rating: 4.1,
    cuisine: "Desserts",
    menu: [
      { id: 139, name: "Club Sandwich", price: 199, image: images.sandwich },
      { id: 140, name: "Burger", price: 179, image: images.burger },
      { id: 141, name: "Cake", price: 149, image: images.desserts }
    ]
  },
  {
    id: 12,
    name: "BBQ Bliss",
    rating: 4.6,
    cuisine: "Asian",
    menu: [
      { id: 142, name: "BBQ Chicken", price: 379, image: images.bbq },
      { id: 143, name: "Pizza", price: 299, image: images.pizza2 },
      { id: 144, name: "Pasta", price: 329, image: images.pasta }
    ]
  },
  {
    id: 13,
    name: "Ocean Sushi",
    rating: 4.7,
    cuisine: "Snacks",
    menu: [
      { id: 145, name: "Sushi Roll", price: 329, image: images.sushi },
      { id: 146, name: "Rice Bowl", price: 249, image: images.rice },
      { id: 147, name: "Noodles", price: 219, image: images.noodles }
    ]
  },
  {
    id: 14,
    name: "Taco Town",
    rating: 4.2,
    cuisine: "Asian",
    menu: [
      { id: 148, name: "Tacos", price: 159, image: images.tacos },
      { id: 149, name: "Burger", price: 179, image: images.burger },
      { id: 150, name: "Pancake", price: 199, image: images.pancake }
    ]
  },
  {
    id: 15,
    name: "Pasta Point",
    rating: 4.5,
    cuisine: "Desserts",
    menu: [
      { id: 151, name: "Alfredo Pasta", price: 349, image: images.pasta },
      { id: 152, name: "Pizza", price: 299, image: images.pizza },
      { id: 153, name: "Cake", price: 149, image: images.desserts }
    ]
  },
  {
    id: 16,
    name: "Spice Route",
    rating: 4.4,
    cuisine: "Asian",
    menu: [
      { id: 154, name: "Paneer Curry", price: 299, image: images.indian },
      { id: 155, name: "Rice Bowl", price: 229, image: images.rice },
      { id: 156, name: "Kebab", price: 249, image: images.kebab }
    ]
  },
  {
    id: 17,
    name: "Burger Bros",
    rating: 4.3,
    cuisine: "Burgers",
    menu: [
      { id: 157, name: "Cheese Burger", price: 199, image: images.burger },
      { id: 158, name: "Fries + Burger Combo", price: 249, image: images.burger },
      { id: 159, name: "Cake", price: 149, image: images.desserts }
    ]
  },
  {
    id: 18,
    name: "Noodle House",
    rating: 4.5,
    cuisine: "Snacks",
    menu: [
      { id: 160, name: "Hakka Noodles", price: 219, image: images.noodles },
      { id: 161, name: "Fried Rice", price: 229, image: images.rice },
      { id: 162, name: "Kebab", price: 249, image: images.kebab }
    ]
  },
  {
    id: 19,
    name: "Dessert Delight",
    rating: 4.9,
    cuisine: "Pizza",
    menu: [
      { id: 163, name: "Chocolate Cake", price: 179, image: images.desserts },
      { id: 164, name: "Pancake", price: 199, image: images.pancake },
      { id: 165, name: "Pizza Slice", price: 199, image: images.pizza }
    ]
  },
  {
    id: 20,
    name: "Mega Meals",
    rating: 4.7,
    cuisine: "Burgers",
    menu: [
      { id: 166, name: "Pizza", price: 299, image: images.pizza },
      { id: 167, name: "Burger", price: 199, image: images.burger },
      { id: 168, name: "Pasta", price: 329, image: images.pasta },
      { id: 169, name: "BBQ Chicken", price: 379, image: images.bbq }
    ]
  },
  {
    id: 21,
    name: "Hotpot Haven",
    rating: 4.4,
    cuisine: "Asian",
    menu: [
      { id: 201, name: "Chicken Hotpot", price: 329, image: images.bbq },
      { id: 202, name: "Veg Noodles", price: 219, image: images.noodles },
      { id: 203, name: "Rice Bowl", price: 229, image: images.rice },
      { id: 204, name: "Chocolate Cake", price: 179, image: images.desserts }
    ]
  },
  {
    id: 22,
    name: "Snack Shack",
    rating: 4.0,
    cuisine: "Snacks",
    menu: [
      { id: 205, name: "Veg Burger", price: 149, image: images.burger },
      { id: 206, name: "Club Sandwich", price: 179, image: images.sandwich },
      { id: 207, name: "Fries Combo", price: 129, image: images.bbq }
    ]
  },
  {
    id: 23,
    name: "Kebab Kitchen",
    rating: 4.6,
    cuisine: "Asian",
    menu: [
      { id: 208, name: "Chicken Kebab", price: 249, image: images.kebab },
      { id: 209, name: "Pita Sandwich", price: 199, image: images.sandwich },
      { id: 210, name: "Rice Platter", price: 239, image: images.rice },
      { id: 211, name: "Brownie", price: 149, image: images.desserts }
    ]
  },
  {
    id: 24,
    name: "Smoothie Stop",
    rating: 4.7,
    cuisine: "Desserts",
    menu: [
      { id: 212, name: "Berry Pancake", price: 199, image: images.pancake },
      { id: 213, name: "Fruit Cake", price: 179, image: images.desserts },
      { id: 214, name: "Veg Sandwich", price: 159, image: images.sandwich }
    ]
  },
  {
    id: 25,
    name: "Crepe Corner",
    rating: 4.5,
    cuisine: "Desserts",
    menu: [
      { id: 215, name: "Nutella Pancake", price: 229, image: images.pancake },
      { id: 216, name: "Chocolate Cake", price: 179, image: images.desserts },
      { id: 217, name: "Mini Pizza", price: 199, image: images.pizza }
    ]
  },
  {
    id: 26,
    name: "Sushi Street",
    rating: 4.8,
    cuisine: "Asian",
    menu: [
      { id: 218, name: "Salmon Sushi", price: 339, image: images.sushi },
      { id: 219, name: "Rice Bowl", price: 249, image: images.rice },
      { id: 220, name: "Noodles", price: 219, image: images.noodles }
    ]
  },
  {
    id: 27,
    name: "Pizza Parade",
    rating: 4.3,
    cuisine: "Pizza",
    menu: [
      { id: 221, name: "Margherita Pizza", price: 279, image: images.pizza },
      { id: 222, name: "Garlic Bread Sandwich", price: 179, image: images.sandwich },
      { id: 223, name: "Brownie", price: 149, image: images.desserts }
    ]
  },
  {
    id: 28,
    name: "Burger Bazaar",
    rating: 4.4,
    cuisine: "Burgers",
    menu: [
      { id: 224, name: "Double Patty Burger", price: 249, image: images.burger },
      { id: 225, name: "BBQ Chicken", price: 379, image: images.bbq },
      { id: 226, name: "Fries Rice Bowl", price: 199, image: images.rice }
    ]
  },
  {
    id: 29,
    name: "Indian Inn",
    rating: 4.5,
    cuisine: "Asian",
    menu: [
      { id: 227, name: "Chole Bhature", price: 229, image: images.indian },
      { id: 228, name: "Paneer Curry", price: 299, image: images.indian },
      { id: 229, name: "Jeera Rice", price: 199, image: images.rice },
      { id: 230, name: "Gulab Jamun", price: 139, image: images.desserts }
    ]
  },
  {
    id: 30,
    name: "Thai Table",
    rating: 4.6,
    cuisine: "Asian",
    menu: [
      { id: 231, name: "Pad Thai Noodles", price: 279, image: images.noodles },
      { id: 232, name: "Green Curry Rice", price: 299, image: images.rice },
      { id: 233, name: "Chicken Satay", price: 249, image: images.bbq }
    ]
  }, {
    id: 31,
    name: "Mexican Mesa",
    rating: 4.2,
    menu: [
      { id: 234, name: "Burrito", price: 249, image: images.tacos },
      { id: 235, name: "Quesadilla", price: 229, image: images.sandwich },
      { id: 236, name: "Rice Bowl", price: 229, image: images.rice },
      { id: 237, name: "Churros", price: 179, image: images.desserts }
    ]
  },
  {
    id: 32,
    name: "Italian Isle",
    rating: 4.7,
    menu: [
      { id: 238, name: "Lasagna", price: 349, image: images.pasta },
      { id: 239, name: "Margherita Pizza", price: 279, image: images.pizza },
      { id: 240, name: "Garlic Bread", price: 179, image: images.sandwich },
      { id: 241, name: "Tiramisu", price: 199, image: images.desserts }
    ]
  },
  {
    id: 33,
    name: "Falafel Factory",
    rating: 4.1,
    menu: [
      { id: 242, name: "Falafel Wrap", price: 179, image: images.sandwich },
      { id: 243, name: "Hummus Plate", price: 199, image: images.indian },
      { id: 244, name: "Rice Platter", price: 229, image: images.rice },
      { id: 245, name: "Baklava", price: 189, image: images.desserts }
    ]
  },
  {
    id: 34,
    name: "Panini Plaza",
    rating: 4.3,
    menu: [
      { id: 246, name: "Chicken Panini", price: 219, image: images.sandwich },
      { id: 247, name: "Veg Panini", price: 199, image: images.sandwich },
      { id: 248, name: "Pasta", price: 299, image: images.pasta },
      { id: 249, name: "Chocolate Cake", price: 179, image: images.desserts }
    ]
  },
  {
    id: 35,
    name: "Waffle Works",
    rating: 4.5,
    menu: [
      { id: 250, name: "Belgian Waffle", price: 219, image: images.pancake },
      { id: 251, name: "Chocolate Waffle", price: 239, image: images.pancake },
      { id: 252, name: "Ice Cream Cake", price: 199, image: images.desserts }
    ]
  },
  {
    id: 36,
    name: "Brunch Barn",
    rating: 4.4,
    menu: [
      { id: 253, name: "Avocado Sandwich", price: 189, image: images.sandwich },
      { id: 254, name: "Pancakes", price: 199, image: images.pancake },
      { id: 255, name: "Grilled Chicken", price: 329, image: images.bbq },
      { id: 256, name: "Fruit Cake", price: 179, image: images.desserts }
    ]
  },
  {
    id: 37,
    name: "Poke Place",
    rating: 4.6,
    menu: [
      { id: 257, name: "Tuna Poke Bowl", price: 329, image: images.rice },
      { id: 258, name: "Salmon Sushi", price: 339, image: images.sushi },
      { id: 259, name: "Veg Noodles", price: 219, image: images.noodles }
    ]
  },
  {
    id: 38,
    name: "Bento Box",
    rating: 4.7,
    menu: [
      { id: 260, name: "Chicken Bento", price: 299, image: images.rice },
      { id: 261, name: "Tofu Bento", price: 279, image: images.indian },
      { id: 262, name: "Sushi Roll", price: 329, image: images.sushi },
      { id: 263, name: "Cake Slice", price: 149, image: images.desserts }
    ]
  },
  {
    id: 39,
    name: "Dumpling Den",
    rating: 4.5,
    menu: [
      { id: 264, name: "Veg Dumplings", price: 199, image: images.noodles },
      { id: 265, name: "Chicken Dumplings", price: 219, image: images.noodles },
      { id: 266, name: "Fried Rice", price: 229, image: images.rice },
      { id: 267, name: "Brownie", price: 149, image: images.desserts }
    ]
  },
  {
    id: 40,
    name: "Kebab Corner",
    rating: 4.2,
    menu: [
      { id: 268, name: "Shish Kebab", price: 289, image: images.kebab },
      { id: 269, name: "Lamb Kebab", price: 309, image: images.kebab },
      { id: 270, name: "Pita Sandwich", price: 199, image: images.sandwich },
      { id: 271, name: "Rice Platter", price: 239, image: images.rice }
    ]
  },
  {
    id: 31,
    name: "Mexican Mesa",
    rating: 4.2,
    menu: [
      { id: 234, name: "Burrito", price: 249, image: images.tacos },
      { id: 235, name: "Quesadilla", price: 229, image: images.sandwich },
      { id: 236, name: "Rice Bowl", price: 229, image: images.rice },
      { id: 237, name: "Churros", price: 179, image: images.desserts }
    ]
  },
  {
    id: 32,
    name: "Italian Isle",
    rating: 4.7,
    menu: [
      { id: 238, name: "Lasagna", price: 349, image: images.pasta },
      { id: 239, name: "Margherita Pizza", price: 279, image: images.pizza },
      { id: 240, name: "Garlic Bread", price: 179, image: images.sandwich },
      { id: 241, name: "Tiramisu", price: 199, image: images.desserts }
    ]
  },
  {
    id: 33,
    name: "Falafel Factory",
    rating: 4.1,
    menu: [
      { id: 242, name: "Falafel Wrap", price: 179, image: images.sandwich },
      { id: 243, name: "Hummus Plate", price: 199, image: images.indian },
      { id: 244, name: "Rice Platter", price: 229, image: images.rice },
      { id: 245, name: "Baklava", price: 189, image: images.desserts }
    ]
  },
  {
    id: 34,
    name: "Panini Plaza",
    rating: 4.3,
    menu: [
      { id: 246, name: "Chicken Panini", price: 219, image: images.sandwich },
      { id: 247, name: "Veg Panini", price: 199, image: images.sandwich },
      { id: 248, name: "Pasta", price: 299, image: images.pasta },
      { id: 249, name: "Chocolate Cake", price: 179, image: images.desserts }
    ]
  },
  {
    id: 35,
    name: "Waffle Works",
    rating: 4.5,
    cuisine: "Snacks",
    menu: [
      { id: 250, name: "Belgian Waffle", price: 219, image: images.pancake },
      { id: 251, name: "Chocolate Waffle", price: 239, image: images.pancake },
      { id: 252, name: "Ice Cream Cake", price: 199, image: images.desserts }
    ]
  },
  {
    id: 36,
    name: "Brunch Barn",
    rating: 4.4,
    menu: [
      { id: 253, name: "Avocado Sandwich", price: 189, image: images.sandwich },
      { id: 254, name: "Pancakes", price: 199, image: images.pancake },
      { id: 255, name: "Grilled Chicken", price: 329, image: images.bbq },
      { id: 256, name: "Fruit Cake", price: 179, image: images.desserts }
    ]
  },
  {
    id: 37,
    name: "Poke Place",
    rating: 4.6,
    menu: [
      { id: 257, name: "Tuna Poke Bowl", price: 329, image: images.rice },
      { id: 258, name: "Salmon Sushi", price: 339, image: images.sushi },
      { id: 259, name: "Veg Noodles", price: 219, image: images.noodles }
    ]
  },
  {
    id: 38,
    name: "Bento Box",
    rating: 4.7,
    menu: [
      { id: 260, name: "Chicken Bento", price: 299, image: images.rice },
      { id: 261, name: "Tofu Bento", price: 279, image: images.indian },
      { id: 262, name: "Sushi Roll", price: 329, image: images.sushi },
      { id: 263, name: "Cake Slice", price: 149, image: images.desserts }
    ]
  },
  {
    id: 39,
    name: "Dumpling Den",
    rating: 4.5,
    menu: [
      { id: 264, name: "Veg Dumplings", price: 199, image: images.noodles },
      { id: 265, name: "Chicken Dumplings", price: 219, image: images.noodles },
      { id: 266, name: "Fried Rice", price: 229, image: images.rice },
      { id: 267, name: "Brownie", price: 149, image: images.desserts }
    ]
  },
  {
    id: 40,
    name: "Kebab Corner",
    rating: 4.2,
    menu: [
      { id: 268, name: "Shish Kebab", price: 289, image: images.kebab },
      { id: 269, name: "Lamb Kebab", price: 309, image: images.kebab },
      { id: 270, name: "Pita Sandwich", price: 199, image: images.sandwich },
      { id: 271, name: "Rice Platter", price: 239, image: images.rice }
    ]
  }
];

export default data;