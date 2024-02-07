const products = [
    {
      id: 1,
      name: "Apple",
      category: "Fruit",
      description: "A round fruit with a red, green, or yellow ",
      price: 89,
      rating: 5,
      discount: 0,
      images: [
        "../assets/images/products/1.png",
        "../assets/images/products/2.png",
        "../assets/images/products/3.png",
        "../assets/images/products/4.png",
      ],
    },
    {
      id: 2,
      name: "Banana",
      category: "Fruit",
      description:
        "A long, curved fruit with a yellow skin and sweet, creamy white flesh.",
      price: 71,
      rating: 5,
      discount: 20,
      images: [
        "../assets/images/products/2.png",
        "../assets/images/products/3.png",
        "../assets/images/products/4.png",
        "../assets/images/products/5.png",
      ],
    },
    {
      id: 3,
      name: "Bread",
      category: "Bakery",
      description:
        "A staple food made from flour, water, and yeast, baked into a loaf.",
      price: 88,
      rating: 5,
      discount: 20,
      images: [
        "../assets/images/products/3.png",
        "../assets/images/products/4.png",
        "../assets/images/products/5.png",
        "../assets/images/products/6.png",
      ],
    },
    {
      id: 4,
      name: "Broccoli",
      category: "Vegetable",
      description:
        "A green vegetable with a tree-like appearance, known for its high nutrient content.",
      price: 94,
      rating: 4.5,
      discount: 20,
      images: [
        "../assets/images/products/4.png",
        "../assets/images/products/5.png",
        "../assets/images/products/6.png",
        "../assets/images/products/7.png",
      ],
    },
    {
      id: 5,
      name: "Carrot",
      category: "Vegetable",
      description:
        "A root vegetable with a crunchy texture and a sweet, earthy flavor.",
      price: 82,
      rating: 5,
      discount: 20,
      images: [
        "../assets/images/products/5.png",
        "../assets/images/products/6.png",
        "../assets/images/products/7.png",
        "../assets/images/products/8.png",
      ],
    },
    {
      id: 6,
      name: "Cheese",
      category: "Dairy",
      description:
        "A dairy product made from milk, with a variety of textures and flavors.",
      price: 91,
      rating: 3.5,
      discount: 50,
      images: [
        "../assets/images/products/6.png",
        "../assets/images/products/7.png",
        "../assets/images/products/8.png",
        "../assets/images/products/9.png",
      ],
    },
    {
      id: 7,
      name: "Chicken",
      category: "Meat",
      description:
        "A type of poultry, often used as a source of protein in meals.",
      price: 68,
      rating: 3.5,
      discount: 20,
      images: [
        "../assets/images/products/7.png",
        "../assets/images/products/8.png",
        "../assets/images/products/9.png",
        "../assets/images/products/10.png",
      ],
    },
    {
      id: 8,
      name: "Chocolate",
      category: "Dessert",
      description:
        "A sweet food made from cacao beans, used in a variety of desserts and confections.",
      price: 61,
      rating: 4.5,
      discount: 20,
      images: [
        "../assets/images/products/8.png",
        "../assets/images/products/9.png",
        "../assets/images/products/10.png",
        "../assets/images/products/11.png",
      ],
    },
    {
      id: 9,
      name: "Coffee",
      category: "Dessert",
      description:
        "A dark, bitter beverage made from roasted coffee beans, typically used as a pick-me-up.",
      price: 98,
      rating: 5,
      discount: 20,
      images: [
        "../assets/images/products/9.png",
        "../assets/images/products/10.png",
        "../assets/images/products/11.png",
        "../assets/images/products/12.png",
      ],
    },
    {
      id: 10,
      name: "Egg",
      category: "Dairy",
      description:
        "A oval-shaped reproductive body produced by birds, often used as a source of protein in meals.",
      price: 79,
      rating: 4.5,
      discount: 0,
      images: [
        "../assets/images/products/10.png",
        "../assets/images/products/11.png",
        "../assets/images/products/12.png",
        "../assets/images/products/13.png",
      ],
    },
    {
      id: 11,
      name: "Fish",
      category: "Meat",
      description:
        "A type of seafood, known for its omega-3 fatty acids and high protein content.",
      price: 89,
      rating: 3.5,
      discount: 50,
      images: [
        "../assets/images/products/11.png",
        "../assets/images/products/12.png",
        "../assets/images/products/13.png",
        "../assets/images/products/14.png",
      ],
    },
    {
      id: 12,
      name: "Grapes",
      category: "Fruit",
      description:
        "A small, sweet fruit that grows in clusters, often used in wine-making.",
      price: 61,
      rating: 4,
      discount: 20,
      images: [
        "../assets/images/products/12.png",
        "../assets/images/products/13.png",
        "../assets/images/products/14.png",
        "../assets/images/products/15.png",
      ],
    },
    {
      id: 13,
      name: "Hamburger",
      category: "Fast food",
      description:
        "A sandwich made with a patty of ground beef, served on a bun with various toppings.",
      price: 87,
      rating: 5,
      discount: 0,
      images: [
        "../assets/images/products/13.png",
        "../assets/images/products/14.png",
        "../assets/images/products/15.png",
        "../assets/images/products/16.png",
      ],
    },
    {
      id: 14,
      name: "Hot dog",
      category: "Fast food",
      description:
        "A type of sausage served in a long roll, often used as a quick and convenient food.",
      price: 84,
      rating: 4.5,
      discount: 50,
      images: [
        "../assets/images/products/14.png",
        "../assets/images/products/15.png",
        "../assets/images/products/16.png",
        "../assets/images/products/17.png",
      ],
    },
    {
      id: 15,
      name: "Ice cream",
      category: "Dessert",
      description:
        "A frozen dessert made from cream, sugar, and flavorings, available in a variety of flavors.",
      price: 68,
      rating: 4.5,
      discount: 0,
      images: [
        "../assets/images/products/15.png",
        "../assets/images/products/16.png",
        "../assets/images/products/17.png",
        "../assets/images/products/18.png",
      ],
    },
    {
      id: 16,
      name: "Lemon",
      category: "Fruit",
      description:
        "A yellow citrus fruit with a tart, acidic flavor, often used in cooking and baking.",
      price: 74,
      rating: 3.5,
      discount: 0,
      images: [
        "../assets/images/products/16.png",
        "../assets/images/products/17.png",
        "../assets/images/products/18.png",
        "../assets/images/products/19.png",
      ],
    },
    {
      id: 17,
      name: "Eggs",
      category: "Dairy",
      description:
        "Eggs are oval-shaped reproductive structures produced by female birds and some reptiles.",
      price: 70,
      rating: 4.5,
      discount: 50,
      images: [
        "../assets/images/products/17.png",
        "../assets/images/products/18.png",
        "../assets/images/products/19.png",
        "../assets/images/products/20.png",
      ],
    },
    {
      id: 18,
      name: "Honey",
      category: "Dairy",
      description:
        "Honey is a sweet, sticky liquid made by bees from the nectar of flowers.",
      price: 87,
      rating: 4,
      discount: 0,
      images: [
        "../assets/images/products/18.png",
        "../assets/images/products/19.png",
        "../assets/images/products/20.png",
        "../assets/images/products/21.png",
      ],
    },
    {
      id: 19,
      name: "Ice Cream",
      category: "Dessert",
      description:
        "Ice cream is a frozen dessert made from cream, sugar, and flavorings.",
      price: 83,
      rating: 4.5,
      discount: 0,
      images: [
        "../assets/images/products/19.png",
        "../assets/images/products/20.png",
        "../assets/images/products/21.png",
        "../assets/images/products/22.png",
      ],
    },
    {
      id: 20,
      name: "Jelly",
      category: "Fruit",
      description:
        "Jelly is a sweet spread made from fruit juice and sugar, often used as a topping for toast or pastries.",
      price: 76,
      rating: 5,
      discount: 0,
      images: [
        "../assets/images/products/20.png",
        "../assets/images/products/21.png",
        "../assets/images/products/22.png",
        "../assets/images/products/23.png",
      ],
    },
    {
      id: 21,
      name: "Ketchup",
      category: "Dairy",
      description:
        "Ketchup is a tangy sauce made from tomatoes, vinegar, sugar, and spices.",
      price: 77,
      rating: 5,
      discount: 0,
      images: [
        "../assets/images/products/21.png",
        "../assets/images/products/22.png",
        "../assets/images/products/23.png",
        "../assets/images/products/24.png",
      ],
    },
    {
      id: 22,
      name: "Mango",
      category: "Fruit",
      description:
        "Mangoes are juicy, sweet tropical fruits with a fleshy interior and a large, oblong seed in the center.",
      price: 80,
      rating: 5,
      discount: 20,
      images: [
        "../assets/images/products/22.png",
        "../assets/images/products/23.png",
        "../assets/images/products/24.png",
        "../assets/images/products/25.png",
      ],
    },
    {
      id: 23,
      name: "Noodles",
      category: "Meat",
      description:
        "Noodles are a type of pasta made from wheat flour and water, often used in Asian cuisine.",
      price: 93,
      rating: 3.5,
      discount: 20,
      images: [
        "../assets/images/products/23.png",
        "../assets/images/products/24.png",
        "../assets/images/products/25.png",
        "../assets/images/products/26.png",
      ],
    },
    {
      id: 24,
      name: "Oatmeal",
      category: "Breakfast",
      description:
        "Oatmeal is a type of porridge made from oats that is often served for breakfast.",
      price: 94,
      rating: 4.5,
      discount: 0,
      images: [
        "../assets/images/products/24.png",
        "../assets/images/products/25.png",
        "../assets/images/products/26.png",
        "../assets/images/products/27.png",
      ],
    },
    {
      id: 25,
      name: "Bacon",
      category: "Breakfast",
      description:
        "Bacon is a popular breakfast food made from cured pork belly, it is newly delivered.",
      price: 71,
      rating: 3.5,
      discount: 20,
      images: [
        "../assets/images/products/25.png",
        "../assets/images/products/26.png",
        "../assets/images/products/27.png",
        "../assets/images/products/28.png",
      ],
    },
    {
      id: 26,
      name: "Pancakes",
      category: "Breakfast",
      description:
        "Pancakes are a popular breakfast food made from flour, eggs, and milk.",
      price: 63,
      rating: 4,
      discount: 0,
      images: [
        "../assets/images/products/26.png",
        "../assets/images/products/27.png",
        "../assets/images/products/28.png",
        "../assets/images/products/29.png",
      ],
    },
    {
      id: 27,
      name: "Waffles",
      category: "Breakfast",
      description:
        "Waffles are a type of breakfast food made from batter cooked in a waffle iron.",
      price: 97,
      rating: 4.5,
      discount: 20,
      images: [
        "../assets/images/products/27.png",
        "../assets/images/products/28.png",
        "../assets/images/products/29.png",
        "../assets/images/products/30.png",
      ],
    },
    {
      id: 28,
      name: "Fried Rice",
      category: "Lunch",
      description:
        "Fried Rice is a type of rice dish that is stir-fried in a pan with oil and other ingredients.",
      price: 81,
      rating: 4,
      discount: 20,
      images: [
        "../assets/images/products/28.png",
        "../assets/images/products/29.png",
        "../assets/images/products/30.png",
        "../assets/images/products/31.png",
      ],
    },
    {
      id: 29,
      name: "Spaghetti",
      category: "Lunch",
      description:
        "Spaghetti is a type of pasta made from wheat flour and water, usually served with sauce.",
      price: 96,
      rating: 3,
      discount: 50,
      images: [
        "../assets/images/products/29.png",
        "../assets/images/products/30.png",
        "../assets/images/products/31.png",
        "../assets/images/products/32.png",
      ],
    },
    {
      id: 30,
      name: "Pizza",
      category: "Lunch",
      description:
        "Pizza is a popular dish made from dough, sauce, cheese, and toppings.",
      price: 95,
      rating: 4,
      discount: 0,
      images: [
        "../assets/images/products/30.png",
        "../assets/images/products/31.png",
        "../assets/images/products/32.png",
        "../assets/images/products/33.png",
      ],
    },
    {
      id: 31,
      name: "Grilled Cheese",
      category: "Lunch",
      description:
        "A grilled cheese sandwich is a hot sandwich made from cheese and bread.",
      price: 100,
      rating: 5,
      discount: 50,
      images: [
        "../assets/images/products/31.png",
        "../assets/images/products/32.png",
        "../assets/images/products/33.png",
        "../assets/images/products/34.png",
      ],
    },
    {
      id: 32,
      name: "Steak",
      category: "Dinner",
      description:
        "Steak is a popular dinner dish made from a cut of beef that is usually grilled or pan-fried.",
      price: 63,
      rating: 4.5,
      discount: 20,
      images: [
        "../assets/images/products/32.png",
        "../assets/images/products/33.png",
        "../assets/images/products/34.png",
        "../assets/images/products/35.png",
      ],
    },
    {
      id: 33,
      name: "Salmon",
      category: "Dinner",
      description:
        "Salmon is a type of fish that is often grilled or baked and served as a main course.",
      price: 82,
      rating: 4.5,
      discount: 20,
      images: [
        "../assets/images/products/33.png",
        "../assets/images/products/34.png",
        "../assets/images/products/35.png",
        "../assets/images/products/36.png",
      ],
    },
    {
      id: 34,
      name: "Chicken Alfredo",
      category: "Dinner",
      description:
        "Chicken Alfredo is a pasta dish made with chicken, alsjfkdlkasdfhlkjh.",
      price: 94,
      rating: 4,
      discount: 20,
      images: [
        "../assets/images/products/34.png",
        "../assets/images/products/35.png",
        "../assets/images/products/36.png",
        "../assets/images/products/1.png",
      ],
    },
    {
      id: 35,
      name: "Lasagna",
      category: "Dinner",
      description:
        "Lasagna is a type of pasta dish made with layers of pasta, sauce, cheese, and meat or vegetables.",
      price: 70,
      rating: 1,
      discount: 0,
      images: [
        "../assets/images/products/35.png",
        "../assets/images/products/36.png",
        "../assets/images/products/1.png",
        "../assets/images/products/2.png",
      ],
    },
    {
      id: 36,
      name: "Chocolate Chip Cookies",
      category: "Dessert",
      description:
        "Chocolate Chip Cookies are a type of cookie made from flour, sugar, butter, and chocolate chips.",
      price: 98,
      rating: 3.5,
      discount: 0,
      images: [
        "../assets/images/products/36.png",
        "../assets/images/products/1.png",
        "../assets/images/products/2.png",
        "../assets/images/products/3.png",
      ],
    },
  ];

const cardAll=document.querySelector('.cards')

function displayCards(products){
  let str='';
  products.forEach((product) => {
    str+=`
    <div class="card">
    <img src="${product.images[0]}"
    <div class="inner_card">
    <h1>${product.name}</h1>
    <p>${product.category}</p>
    <h1>${product.description}</h1>
    <span>${product.price}</span>
    </div>
    </div>
    `
    
  });
  cardAll.innerHTML=str;

}

displayCards(products)