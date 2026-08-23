/* ==========================================================================
   recipes.js — every recipe in the book lives here
   --------------------------------------------------------------------------
   TO ADD A RECIPE: copy one whole { ... } block, paste it below the last one,
   change the text. Keep the comma between blocks. Save. That's it.

   FIELD GUIDE
   -----------
   id          short unique name, lowercase-with-dashes. Never reuse one.
   title       what shows on the card
   category    must match a name in CATEGORIES below, exactly
   time        total minutes, as a number
   servings    number of people
   tags        quick, vegetarian, vegan, freezer, high-protein, low-fat,
               one-pan, no-cook, meal-prep, kid-friendly, gluten-free
   image       optional. "images/myphoto.jpg" — leave "" for no photo
   ingredients [{ item: "...", note: "..." }]   note is optional
               use { heading: "Sauce" } to start a labelled section
   steps       list of strings
   nutrition   { serveWeight, kcal, protein, carbs, fat }
                 → all PER SERVING, except serveWeight which is the finished
                   weight of one serving in grams. Per-100 g values are worked
                   out from these automatically — don't type them in.
   lfmNotes    the low FODMAP warnings and portion limits for this dish
   adaptedFrom optional — what was changed from the original recipe

   PHOTO-ONLY RECIPES
   ------------------
   For a recipe that's just a picture, set photoOnly: true and give it an
   image. Skip ingredients, steps and nutrition entirely:

     { id:"grandmas-plov", title:"Plov", category:"Dinner",
       photoOnly:true, image:"images/plov.jpg", tags:["gluten-free"] }
   ========================================================================== */

const CATEGORIES = [
  { name: "Breakfast",        icon: "🍳", blurb: "Mornings without the bloat" },
  { name: "Lunch",            icon: "🥗", blurb: "Light, portable, quick" },
  { name: "Dinner",           icon: "🍽️", blurb: "Proper meals" },
  { name: "Snacks",           icon: "🥨", blurb: "Between meals" },
  { name: "Easy & Fast Lunches", icon: "🍱", blurb: "Plate ideas, no recipe needed" },
  { name: "Desserts",         icon: "🍰", blurb: "Yes, you still can" },
  { name: "Sauces & Basics",  icon: "🥄", blurb: "The building blocks" },
  { name: "Drinks",           icon: "🥤", blurb: "Smoothies and sippers" }
];

const RECIPES = [

  {
    id: "ef-quinoa-shrimp-bowl",
    title: "Quinoa Bowl with Shrimp & Egg",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-quinoa-shrimp-bowl.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-chicken-cutlets-sweet-potato",
    title: "Chicken Cutlets with Sweet Potato Fries",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-chicken-cutlets-sweet-potato.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-tuna-rice-bowl",
    title: "Tuna & Rice Bowl with Egg",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-tuna-rice-bowl.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-turkey-greens-bowl",
    title: "Turkey & Greens Bowl with Yoghurt Dressing",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-turkey-greens-bowl.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-curd-waffles-salmon",
    title: "Curd Waffles with Avocado & Salmon",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-curd-waffles-salmon.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-zucchini-curd-waffles",
    title: "Zucchini, Curd & Cheese Waffles",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-zucchini-curd-waffles.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-chicken-broccoli-sweet-potato",
    title: "Chicken with Broccoli & Sweet Potato",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-chicken-broccoli-sweet-potato.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-grapefruit-avocado-salad",
    title: "Grapefruit, Avocado & Walnut Salad",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-grapefruit-avocado-salad.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-salmon-avocado-omelette",
    title: "Salmon & Avocado Omelette",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-salmon-avocado-omelette.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-pasta-egg-whites-strawberries",
    title: "Pasta with Egg Whites & Strawberries",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-pasta-egg-whites-strawberries.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-chicken-green-beans-prep",
    title: "Chicken & Green Beans Prep",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-chicken-green-beans-prep.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-one-pot-tuna-egg-avocado",
    title: "One-Pot Tuna, Egg & Avocado Bowl",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-one-pot-tuna-egg-avocado.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-oatmeal-egg-whites",
    title: "Oatmeal with Boiled Egg Whites",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-oatmeal-egg-whites.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-salmon-roast-potatoes-arugula",
    title: "Salmon with Roast Potatoes & Arugula",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-salmon-roast-potatoes-arugula.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-buckwheat-tuna-avocado",
    title: "Buckwheat, Tuna & Avocado Bowl",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-buckwheat-tuna-avocado.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-basmati-salmon-truffle",
    title: "Basmati, Salmon & Avocado with Truffle Oil",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-basmati-salmon-truffle.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-pasta-beef-mince",
    title: "Pasta with Beef Mince",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-pasta-beef-mince.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-salmon-rice-caviar",
    title: "Salmon & Rice Bowl with Caviar",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-salmon-rice-caviar.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-rice-tuna-egg-plate",
    title: "Rice, Tuna & Egg Plate",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-rice-tuna-egg-plate.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-salmon-avocado-crispbreads",
    title: "Salmon & Avocado Crispbreads with Potatoes",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-salmon-avocado-crispbreads.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-eggs-avocado-sweet-potato",
    title: "Eggs, Avocado & Roast Sweet Potato",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-eggs-avocado-sweet-potato.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-cottage-cheese-strawberries-pasta",
    title: "Cottage Cheese, Strawberries & Pasta",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-cottage-cheese-strawberries-pasta.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-spinach-omelette-potatoes",
    title: "Spinach & Cherry Tomato Omelette with Potatoes",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-spinach-omelette-potatoes.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-lunchbox-salmon-beans",
    title: "Lunchbox: Salmon, Green Beans & Raspberries",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-lunchbox-salmon-beans.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-fried-egg-cod-liver",
    title: "Fried Egg with Cod Liver Crispbreads",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-fried-egg-cod-liver.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-spinach-omelette-airfryer-potatoes",
    title: "Spinach Omelette with Air-Fryer Potatoes",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-spinach-omelette-airfryer-potatoes.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-salmon-broccoli-potatoes",
    title: "Salmon, Broccoli & Roast Potatoes",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-salmon-broccoli-potatoes.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-steak-broccoli",
    title: "Steak with Broccoli",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-steak-broccoli.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-white-fish-broccoli-potatoes",
    title: "White Fish with Broccoli & Potatoes",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-white-fish-broccoli-potatoes.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-veal-potatoes-salad",
    title: "Veal with Potatoes & Salad",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-veal-potatoes-salad.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-yoghurt-banana-vanilla",
    title: "Yoghurt with Banana & Vanilla",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-yoghurt-banana-vanilla.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-steak-rice-broccoli",
    title: "Steak, Rice & Broccoli",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-steak-rice-broccoli.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-buckwheat-egg-breakfast",
    title: "Buckwheat & Egg Breakfast with Avocado",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-buckwheat-egg-breakfast.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-roasted-zucchini-potatoes",
    title: "Roasted Zucchini & Potatoes",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-roasted-zucchini-potatoes.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-wholegrain-crepes-apricot",
    title: "Wholegrain Crepes with Apricot",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-wholegrain-crepes-apricot.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-oat-muffins",
    title: "Oat Muffins",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-oat-muffins.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-chicken-guacamole-buckwheat",
    title: "Chicken with Guacamole & Buckwheat",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-chicken-guacamole-buckwheat.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-turkey-iceberg-buckwheat",
    title: "Turkey with Iceberg & Buckwheat",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-turkey-iceberg-buckwheat.jpg",
    tags: ["quick"]
  },

  {
    id: "ef-crepe-cake-slice",
    title: "Crepe Cake Slice",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/ef-crepe-cake-slice.jpg",
    tags: ["quick"]
  },

  {
    id: "buckwheat-mini-pancakes",
    title: "3-Ingredient Buckwheat Mini Pancakes",
    category: "Breakfast",
    time: 13,
    servings: 1,
    tags: ["quick", "high-protein", "low-fat", "vegetarian", "gluten-free"],
    image: "images/buckwheat-mini-pancakes.jpg",
    ingredients: [
      { item: "50 g buckwheat groats, ground to flour", note: "or buckwheat flour" },
      { item: "1 large whole egg" },
      { item: "2 large egg whites" },
      { item: "30 ml lactose-free milk", note: "or water" },
      { item: "½ tsp gluten-free baking powder" },
      { item: "Pinch of sea salt" },
      { item: "Stevia, FitParad 7, or up to 1 tbsp maple syrup", note: "optional" }
    ],
    steps: [
      "Grind the dry buckwheat groats in a high-speed blender or coffee grinder until you have a fine flour.",
      "Whisk the buckwheat flour, whole egg, egg whites, milk, baking powder, salt and sweetener until smooth. Rest the batter 2 minutes to thicken slightly.",
      "Heat a dry non-stick pan over medium-low — no oil needed. Spoon in small silver-dollar portions.",
      "Cook 2 minutes until bubbles form and the edges look set, then flip and give them another 1–2 minutes until golden.",
      "Stack and eat plain, or serve with lactose-free Greek yoghurt or cottage cheese."
    ],
    nutrition: { serveWeight: 170, kcal: 277, protein: 19.1, carbs: 37.4, fat: 5.5 }
  },

  {
    id: "quick-bowl-ideas",
    title: "Six Quick Bowl Ideas",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/quick-bowl-ideas.jpg",
    tags: ["quick", "high-protein", "gluten-free"]
  },

  {
    id: "halloumi-shrimp-quinoa-plate",
    title: "Halloumi, Shrimp & Quinoa Plate",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/halloumi-shrimp-quinoa-plate.jpg",
    tags: ["quick", "high-protein", "gluten-free"]
  },

  {
    id: "chicken-avocado-ricecake-plate",
    title: "Chicken & Avocado Rice Cake Plate",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/chicken-avocado-ricecake-plate.jpg",
    tags: ["quick", "high-protein", "gluten-free"]
  },

  {
    id: "light-late-dinner-plate",
    title: "Light Late Dinner Plate",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/light-late-dinner-plate.jpg",
    tags: ["quick", "high-protein", "low-fat", "no-cook"]
  },

  {
    id: "egg-omelette-buckwheat-plate",
    title: "Egg White Omelette with Buckwheat",
    category: "Easy & Fast Lunches",
    photoOnly: true,
    image: "images/egg-omelette-buckwheat-plate.jpg",
    tags: ["quick", "high-protein", "low-fat", "gluten-free"]
  },

  {
    id: "chicken-avocado-rice-cakes",
    title: "Chicken & Avocado Rice Cakes with Eggs",
    category: "Breakfast",
    time: 16,
    servings: 1,
    tags: ["quick", "high-protein", "low-fat", "gluten-free"],
    image: "images/chicken-avocado-rice-cakes.jpg",
    ingredients: [
      { item: "1 large whole egg + 1 large egg white" },
      { item: "2 plain puffed rice cakes" },
      { item: "60 g cooked chicken breast, sliced or shredded" },
      { item: "30 g avocado, mashed or thinly sliced" },
      { item: "75 g green beans or zucchini spears", note: "replaces asparagus" },
      { item: "2 small baby cucumbers, halved lengthways" },
      { item: "30 g cherry tomatoes, halved", note: "about 3" },
      { item: "1 tsp olive oil or ghee" },
      { item: "Sea salt · black pepper" }
    ],
    steps: [
      "Heat ½ tsp of the oil in a non-stick pan over medium. Sauté the green beans or zucchini 4–5 minutes until tender-crisp and lightly browned. Season and set aside.",
      "Add the remaining ½ tsp of oil to the pan and cook the whole egg and the egg white side by side to your preferred firmness. Season with salt and pepper.",
      "Spread 15 g of avocado onto each rice cake and top each with 30 g of the chicken.",
      "Arrange the rice cakes, eggs, sautéed beans, halved cucumbers and cherry tomatoes on a large plate."
    ],
    nutrition: { serveWeight: 332, kcal: 358, protein: 35.8, carbs: 26.8, fat: 11.9 }
  },

  {
    id: "lemony-shrimp-avocado-salad",
    title: "Lemony Shrimp, Avocado & Tomato Salad",
    category: "Lunch",
    time: 15,
    servings: 1,
    tags: ["quick", "high-protein", "gluten-free"],
    image: "images/lemony-shrimp-avocado-salad.jpg",
    ingredients: [
      { item: "150 g large shrimp, peeled and deveined" },
      { item: "30 g avocado, diced", note: "about ⅛ of a medium avocado" },
      { item: "30 g mixed red and yellow cherry tomatoes, halved", note: "about 3" },
      { item: "10 g fresh coriander, roughly chopped" },
      { item: "15 ml garlic-infused olive oil" },
      { item: "15 ml fresh lemon or lime juice" },
      { item: "¼ tsp chilli flakes", note: "optional" },
      { item: "¼ tsp sea salt · cracked black pepper" }
    ],
    steps: [
      "Heat 1 tsp of the infused oil in a skillet over medium-high. Add the shrimp, season with salt and pepper, and sauté 3–4 minutes until pink and opaque. Take off the heat and cool slightly.",
      "Combine the shrimp, diced avocado, halved tomatoes and chopped coriander in a bowl.",
      "Drizzle with the remaining oil, the citrus juice and the chilli flakes, and toss gently so you do not mash the avocado.",
      "Serve immediately with extra lemon wedges."
    ],
    nutrition: { serveWeight: 242, kcal: 310, protein: 35.8, carbs: 6.8, fat: 15.5 }
  },

  {
    id: "baked-salmon-potatoes-beans",
    title: "Baked Salmon with Crispy Baby Potatoes & Green Beans",
    category: "Dinner",
    time: 30,
    servings: 1,
    tags: ["high-protein", "gluten-free", "one-pan"],
    image: "images/baked-salmon-potatoes-beans.jpg",
    ingredients: [
      { item: "150 g salmon fillet", note: "skin on or off" },
      { item: "120 g baby potatoes, halved" },
      { item: "75 g green beans, trimmed", note: "or zucchini spears — replaces asparagus" },
      { item: "20 g fresh arugula" },
      { item: "30 g cherry tomatoes, halved", note: "about 3" },
      { item: "15 ml garlic-infused olive oil", note: "divided" },
      { item: "1 tsp fresh lemon juice" },
      { item: "Sea salt · black pepper" }
    ],
    steps: [
      "Heat the oven to 200 °C. Toss the halved potatoes with 2 tsp of the infused oil, salt and pepper. Lay them cut-side down on a parchment-lined baking sheet and roast 10 minutes.",
      "Pull the sheet out. Season the salmon with salt, pepper and a brush of the infused oil, and lay it on the sheet with the green beans alongside.",
      "Return to the oven for another 10–12 minutes, until the salmon flakes, the potatoes are crisp and the beans are tender.",
      "Plate the salmon, potatoes and beans, and serve with a side salad of arugula and halved cherry tomatoes dressed with the last of the oil and the lemon juice."
    ],
    nutrition: { serveWeight: 405, kcal: 522, protein: 37.8, carbs: 33.7, fat: 26.1 }
  },

  {
    id: "blue-cheese-pear-pizza",
    title: "Blue Cheese, Pear & Almond Personal Pizza",
    category: "Lunch",
    time: 25,
    servings: 1,
    tags: ["quick", "high-protein", "vegetarian", "gluten-free"],
    image: "images/blue-cheese-pear-pizza.jpg",
    ingredients: [
      { heading: "Gluten-free quick crust" },
      { item: "50 g fine white rice flour", note: "or a gluten-free 1-to-1 blend" },
      { item: "40 g lactose-free yoghurt", note: "or lactose-free sour cream" },
      { item: "1 small egg" },
      { item: "2 g gluten-free baking powder" },
      { item: "Pinch of sea salt" },
      { item: "1 tsp olive oil", note: "for the parchment" },
      { heading: "Toppings" },
      { item: "30 g aged blue cheese, crumbled", note: "gorgonzola or roquefort" },
      { item: "20 g firm unripe green pear, cored and sliced very thin" },
      { item: "10 g sliced almonds" },
      { item: "1 tsp pure maple syrup", note: "optional, drizzled after baking" }
    ],
    steps: [
      "Heat the oven to 200 °C. Line a baking sheet with parchment and brush lightly with olive oil.",
      "Whisk the egg, yoghurt and a pinch of salt. Stir in the rice flour and baking powder until you have a sticky cohesive dough.",
      "Turn it onto the parchment and, with wet fingers or a spatula, press it into a 15–18 cm round with a slightly raised edge.",
      "Pre-bake the bare crust 5 minutes, until it begins to set.",
      "Scatter the crumbled blue cheese over the base, arrange the very thin pear slices on top and scatter the almonds over.",
      "Bake another 7–8 minutes, until the cheese is bubbling and the crust edges are golden.",
      "Drizzle lightly with maple syrup if using, slice and serve warm."
    ],
    nutrition: { serveWeight: 189, kcal: 385, protein: 16.8, carbs: 38.1, fat: 18.3 }
  },

  {
    id: "strawberry-pecan-salad",
    title: "Strawberry, Pecan & Whipped Cheese Salad",
    category: "Lunch",
    time: 5,
    servings: 1,
    tags: ["quick", "vegetarian", "gluten-free", "no-cook"],
    image: "images/strawberry-pecan-salad.jpg",
    ingredients: [
      { item: "75 g mixed salad greens", note: "butterhead, iceberg or baby spinach" },
      { item: "60 g strawberries, hulled and quartered", note: "about 4–5 berries" },
      { item: "60 g lactose-free cottage cheese, whipped smooth", note: "or lactose-free feta" },
      { item: "15 g pecan halves, toasted" },
      { item: "15 ml extra virgin olive oil" },
      { item: "5 ml pure maple syrup" },
      { item: "5 ml lemon juice", note: "or red wine vinegar" },
      { item: "½ tsp Dijon mustard" },
      { item: "Sea salt · black pepper" }
    ],
    steps: [
      "Whisk the olive oil, maple syrup, lemon juice, mustard, salt and pepper in a small glass until emulsified.",
      "Put the washed greens in a wide bowl and scatter the quartered strawberries and toasted pecans over them.",
      "Dollop the whipped cottage cheese, or crumbled feta, around the salad.",
      "Drizzle the dressing over just before serving."
    ],
    nutrition: { serveWeight: 235, kcal: 315, protein: 9.0, carbs: 14.6, fat: 24.5 }
  },

  {
    id: "microwave-mug-bread",
    title: "5-Minute Microwave Mug Bread",
    category: "Sauces & Basics",
    time: 6,
    servings: 2,
    tags: ["quick", "high-protein", "vegetarian", "gluten-free"],
    image: "images/microwave-mug-bread.jpg",
    ingredients: [
      { item: "1 large egg" },
      { item: "30 g ground gluten-free rolled oats", note: "ground oats, not bran" },
      { item: "30 ml lactose-free kefir", note: "or lactose-free yoghurt" },
      { item: "2 g gluten-free baking powder" },
      { item: "Pinch of sea salt" },
      { item: "10 g pumpkin or chia seeds", note: "optional" }
    ],
    steps: [
      "Whisk the egg, kefir, ground oats, baking powder, salt and seeds together in a small microwave-safe mug or ramekin until smooth.",
      "Microwave on high for 3–4 minutes, until cooked through and firm to the touch.",
      "Invert the mug to release the loaf onto a plate, cool 2 minutes, then slice in half to toast or build a sandwich."
    ],
    nutrition: { serveWeight: 60, kcal: 114, protein: 6.5, carbs: 10.1, fat: 5.3 }
  },

  {
    id: "high-protein-breakfast-plate",
    title: "High-Protein Breakfast Plate & Berry Protein Oatmeal",
    category: "Breakfast",
    time: 20,
    servings: 1,
    tags: ["quick", "high-protein", "gluten-free"],
    image: "images/high-protein-breakfast-plate.jpg",
    ingredients: [
      { heading: "Berry protein oatmeal" },
      { item: "40 g gluten-free rolled oats" },
      { item: "150 ml water", note: "or lactose-free milk" },
      { item: "25 g unflavoured whey protein isolate", note: "1 scoop" },
      { item: "20 g pitted sour cherries", note: "about 3 — or 50 g fresh strawberries" },
      { item: "1 tsp stevia or FitParad 7", note: "optional" },
      { heading: "Egg & veggie plate" },
      { item: "4 large egg whites + 1 egg yolk" },
      { item: "2 plain buckwheat or rice crispbreads" },
      { item: "30 g avocado, sliced" },
      { item: "50 g cucumber, cut into sticks" },
      { item: "30 g cherry tomatoes", note: "about 3" },
      { item: "½ tsp ghee or olive oil", note: "for the eggs" },
      { item: "Sea salt · black pepper" }
    ],
    steps: [
      "Combine the oats and water in a small pan or microwave and cook 3–5 minutes until soft. Off the heat, cool for a minute, then whisk in the protein isolate and sweetener until smooth. Top with the cherries or strawberries.",
      "Heat the ghee in a non-stick pan over medium-low. Add the 4 egg whites and the yolk and cook to your preferred firmness. Season with salt and pepper.",
      "Arrange the eggs, crispbreads, avocado, cucumber sticks and cherry tomatoes on a large plate.",
      "Serve the warm oatmeal alongside the savoury plate."
    ],
    nutrition: { serveWeight: 480, kcal: 502, protein: 49.5, carbs: 44.3, fat: 14.0 }
  },

  {
    id: "turkey-zucchini-cutlets",
    title: "Turkey & Zucchini Spring Cutlets",
    category: "Dinner",
    time: 30,
    servings: 4,
    tags: ["quick", "high-protein", "low-fat", "gluten-free", "meal-prep", "freezer"],
    image: "images/turkey-zucchini-cutlets.jpg",
    ingredients: [
      { item: "300 g ground turkey breast", note: "or ground chicken" },
      { item: "120 g zucchini, coarsely grated" },
      { item: "1 large egg" },
      { item: "20 g gluten-free oat flour", note: "or fine white rice flour" },
      { item: "15 g spring onion — green tops only, finely chopped" },
      { item: "10 g fresh dill, finely chopped" },
      { item: "1 tbsp garlic-infused olive oil", note: "for seasoning and cooking" },
      { item: "½ tsp sea salt · ¼ tsp black pepper" }
    ],
    steps: [
      "Grate the zucchini, sprinkle with a pinch of salt and leave 5 minutes. Squeeze out all the excess liquid in a clean kitchen towel.",
      "Combine the turkey, squeezed zucchini, egg, oat flour, scallion tops, dill, 1 tsp of the infused oil, salt and pepper. Mix until smooth and cohesive.",
      "Divide into 4 thick round cutlets.",
      "Heat the remaining infused oil in a non-stick pan over medium-low. Cook under a lid 6–7 minutes a side, until lightly browned and cooked through (74 °C internal)."
    ],
    nutrition: { serveWeight: 114, kcal: 134, protein: 18.9, carbs: 3.3, fat: 5.0 }
  },

  {
    id: "maasdam-tomato-rice-cakes",
    title: "Maasdam & Tomato Rice Cake Open-Sandwiches",
    category: "Snacks",
    time: 5,
    servings: 1,
    tags: ["quick", "vegetarian", "gluten-free", "no-cook"],
    image: "images/maasdam-tomato-rice-cakes.jpg",
    ingredients: [
      { item: "2 plain rice cakes", note: "gluten-free puffed rice" },
      { item: "50 g Maasdam cheese, thinly sliced", note: "about 2 slices" },
      { item: "80 g ripe tomato, sliced", note: "about 40 g per sandwich" },
      { item: "¼ tsp sea salt · pinch of cracked black pepper" },
      { item: "60 g fresh blueberries", note: "to serve alongside" }
    ],
    steps: [
      "Lay the two rice cakes on a plate.",
      "Slice the tomato and arrange it evenly across both, about 40 g each.",
      "Season the tomato directly with sea salt and a pinch of pepper.",
      "Cover with the thin slices of Maasdam.",
      "Serve immediately, with the blueberries alongside."
    ],
    nutrition: { serveWeight: 249, kcal: 321, protein: 16.3, carbs: 31.9, fat: 14.7 }
  },

  {
    id: "lazy-cabbage-rolls",
    title: "Lazy Cabbage Rolls",
    category: "Dinner",
    time: 40,
    servings: 4,
    tags: ["high-protein", "low-fat", "gluten-free", "meal-prep", "freezer"],
    image: "images/lazy-cabbage-rolls.jpg",
    ingredients: [
      { item: "300 g ground chicken breast" },
      { item: "120 g Napa cabbage, finely shredded and blanched" },
      { item: "80 g cooked white rice, cooled" },
      { item: "40 g carrot, finely grated" },
      { item: "20 g spring onion — green tops only, finely chopped" },
      { item: "10 ml garlic-infused olive oil" },
      { item: "1 large egg", note: "to bind" },
      { item: "½ tsp sea salt · ¼ tsp cracked black pepper" }
    ],
    steps: [
      "Finely shred the Napa cabbage, pour boiling water over it and leave 3 minutes to soften. Drain completely and squeeze out all the excess water.",
      "Combine the ground chicken, blanched cabbage, cooked rice, grated carrot, scallion tops, egg, infused oil, salt and pepper in a large bowl.",
      "Mix thoroughly by hand until uniform and cohesive. Divide into 4 and shape into oval patties.",
      "Steam: sit them in a steamer basket over boiling water, cover, and steam 20–22 minutes until cooked through.",
      "Or pan-sauté: cook under a lid in a non-stick pan over low-medium heat with a spray of oil, 6–7 minutes a side, until golden and cooked through (74 °C internal).",
      "Serve hot, with a spoonful of lactose-free sour cream or Greek yoghurt if you like."
    ],
    nutrition: { serveWeight: 146, kcal: 158, protein: 20.8, carbs: 8.6, fat: 4.5 }
  },

  {
    id: "chicken-cutlets-mash",
    title: "Chicken Cutlets with Mash & Creamy Cucumber Salad",
    category: "Dinner",
    time: 45,
    servings: 2,
    tags: ["high-protein", "gluten-free", "meal-prep"],
    image: "images/chicken-cutlets-mash.jpg",
    ingredients: [
      { heading: "Herb chicken cutlets" },
      { item: "250 g lean ground chicken breast or turkey mince" },
      { item: "1 large egg" },
      { item: "15 g fine white rice flour" },
      { item: "15 g spring onion — green tops only, finely chopped" },
      { item: "10 g fresh dill, finely chopped" },
      { item: "1 tbsp garlic-infused olive oil", note: "for seasoning and frying" },
      { item: "½ tsp sea salt · black pepper" },
      { heading: "Creamy mashed potatoes" },
      { item: "300 g Yukon Gold or yellow potatoes, peeled and quartered" },
      { item: "40 ml warm lactose-free milk" },
      { item: "15 g ghee or lactose-free butter" },
      { item: "Sea salt to taste" },
      { heading: "Cucumber & tomato salad" },
      { item: "120 g common tomatoes, chopped" },
      { item: "120 g English cucumber, peeled and sliced" },
      { item: "50 g lactose-free sour cream", note: "or lactose-free Greek yoghurt" },
      { item: "5 g fresh dill, chopped" },
      { item: "½ tsp lemon juice · sea salt · black pepper" }
    ],
    steps: [
      "Put the peeled, quartered potatoes in salted water, bring to the boil and cook 15–18 minutes until fork-tender.",
      "Mix the ground chicken, egg, rice flour, scallion tops, dill, 1 tsp of the infused oil, salt and pepper. Shape into 4 patties.",
      "Heat the remaining infused oil in a non-stick pan over medium heat. Fry the cutlets 5–6 minutes a side under a lid, until golden and cooked through (74 °C internal).",
      "Drain the potatoes thoroughly. Add the ghee and warm milk and mash until completely smooth and fluffy. Season with salt.",
      "Toss the tomatoes, cucumber, dill, sour cream, lemon juice, salt and pepper together.",
      "Divide the mash, cutlets and salad across 2 plates and serve warm."
    ],
    nutrition: { serveWeight: 419, kcal: 453, protein: 36.8, carbs: 37.7, fat: 17.3 }
  },

  {
    id: "oat-pancake-brie-kiwi",
    title: "Oatmeal Pancake with Brie, Kiwi & Maple",
    category: "Breakfast",
    time: 15,
    servings: 1,
    tags: ["quick", "high-protein", "vegetarian", "gluten-free"],
    image: "images/oat-pancake-brie-kiwi.jpg",
    ingredients: [
      { heading: "Oatmeal pancake base" },
      { item: "40 g gluten-free rolled oats" },
      { item: "1 large egg" },
      { item: "30 ml lactose-free milk", note: "or unsweetened almond milk" },
      { item: "Pinch of sea salt" },
      { item: "1 tsp ghee or coconut oil", note: "for the pan" },
      { heading: "Toppings" },
      { item: "30 g lactose-free cream cheese", note: "or thick lactose-free Greek yoghurt" },
      { item: "35 g brie or camembert, thinly sliced" },
      { item: "100 g green kiwi, peeled and sliced", note: "about 1 kiwi" },
      { item: "10 g pure maple syrup", note: "or rice malt syrup" }
    ],
    steps: [
      "Mix the oats, egg, milk and salt until smooth — leave the oats whole for texture, or blend briefly for a smoother pancake.",
      "Heat the ghee in a non-stick pan over medium-low. Pour in the batter and spread into a round. Cover and cook 3–4 minutes until the surface sets.",
      "Flip carefully and cook the second side 2–3 minutes until golden. Transfer to a plate.",
      "Spread the cream cheese across the warm pancake.",
      "Arrange the kiwi along one side and the brie across the other, and drizzle the maple over both just before serving."
    ],
    nutrition: { serveWeight: 245, kcal: 417, protein: 19.4, carbs: 43.0, fat: 18.6 }
  },

  {
    id: "bounty-coconut-cake",
    title: "Bounty Coconut-Chocolate Cake",
    category: "Desserts",
    time: 60,
    servings: 6,
    tags: ["high-protein", "vegetarian", "gluten-free"],
    image: "images/bounty-coconut-cake.jpg",
    ingredients: [
      { heading: "Chocolate sponge" },
      { item: "50 g fine white rice flour" },
      { item: "30 g unsweetened cocoa powder" },
      { item: "70 ml lactose-free milk" },
      { item: "4 large eggs, separated" },
      { item: "30 ml water, room temperature" },
      { item: "1 tsp vanilla extract · pinch of sea salt" },
      { item: "5 g gluten-free baking powder" },
      { item: "Pure stevia to taste (~½ tsp)", note: "replaces 100 g syrup" },
      { item: "7 g FitParad 7" },
      { heading: "Coconut custard cream" },
      { item: "400 g lactose-free cream cheese", note: "or lactose-free curd cheese" },
      { item: "250 ml lactose-free milk" },
      { item: "30 g cornflour" },
      { item: "30 g lactose-free milk powder", note: "or unflavoured lactose-free whey isolate" },
      { item: "50 g fine unsweetened shredded coconut" },
      { item: "Pure stevia to taste (~¼ tsp)", note: "replaces 50 g syrup" },
      { item: "15 g FitParad 7" }
    ],
    steps: [
      "Whisk the 250 ml milk, cornflour, milk powder, 15 g FitParad and stevia in a small saucepan. Cook over medium heat, stirring constantly, until thickened into a smooth custard. Off the heat, stir in the shredded coconut and cool completely.",
      "Whip the cream cheese until smooth, then fold it into the cooled coconut custard until thick and uniform. Refrigerate while you make the sponges.",
      "Whip the egg whites with a pinch of salt to firm stiff peaks.",
      "In another bowl whisk the yolks, 70 ml milk, water, 7 g FitParad, stevia and vanilla. Sift in the rice flour, cocoa and baking powder and whisk smooth.",
      "Fold the whites into the chocolate mixture in 2–3 batches.",
      "Heat a non-stick skillet over low heat, greasing lightly if needed. Cook 3–4 thin flat sponge layers under a closed lid, 3–4 minutes a side, flipping carefully. Cool completely.",
      "Layer sponge and coconut cream alternately, then coat the sides and top with the remaining cream.",
      "Chill at least 2 hours so the cream firms and soaks into the sponges before slicing."
    ],
    nutrition: { serveWeight: 155, kcal: 239, protein: 12.1, carbs: 15.1, fat: 14.6 }
  },

  {
    id: "kartoshka-protein-truffles",
    title: "Chocolate Kartoshka Protein Truffles",
    category: "Desserts",
    time: 45,
    servings: 4,
    tags: ["vegetarian", "gluten-free", "no-cook", "meal-prep"],
    image: "images/kartoshka-protein-truffles.jpg",
    ingredients: [
      { item: "100 g gluten-free rolled oats" },
      { item: "100 g lactose-free cottage cheese 5%" },
      { item: "80 g firm yellow banana, peeled and mashed" },
      { item: "35 g dark chocolate chips 70%+, finely chopped" },
      { item: "15 ml strong espresso or liquid instant coffee, cooled" },
      { item: "10 g unsweetened cocoa powder", note: "for rolling" },
      { item: "2 g ground cinnamon" },
      { item: "Stevia or erythritol to taste" }
    ],
    steps: [
      "Toast the oats with the cinnamon in a dry pan over medium heat for about 5 minutes, until fragrant and lightly golden. Cool completely, then grind to a coarse meal in a blender or coffee grinder.",
      "Combine the ground oats, cottage cheese, mashed banana, coffee, chopped chocolate and sweetener in a food processor or bowl.",
      "Pulse or mix thoroughly until you have a cohesive, thick, mouldable dough. Taste and adjust the sweetness.",
      "Divide into 4. Dust a plate with the cocoa and roll each portion into the traditional cylinder shape, coating all sides generously.",
      "Chill on parchment for at least 30 minutes to firm up before serving."
    ],
    nutrition: { serveWeight: 85, kcal: 193, protein: 7.7, carbs: 25.5, fat: 6.7 }
  },

  {
    id: "green-salad-mozzarella",
    title: "Green Salad with Mozzarella & Sesame Dressing",
    category: "Lunch",
    time: 10,
    servings: 2,
    tags: ["quick", "vegetarian", "gluten-free", "no-cook"],
    image: "images/green-salad-mozzarella.jpg",
    ingredients: [
      { item: "75 g arugula and radicchio mix" },
      { item: "75 g canned sweet corn", note: "drained and rinsed well" },
      { item: "75 g cherry tomatoes, halved", note: "about 5–6" },
      { item: "100 g English or Persian cucumber, sliced" },
      { item: "100 g lactose-free mozzarella", note: "mini balls or diced" },
      { item: "20 g toasted sesame oil" },
      { item: "Sea salt · cracked black pepper" }
    ],
    steps: [
      "Wash and dry the leaves. Slice the cucumber into half-moons and halve the cherry tomatoes.",
      "Drain the corn and rinse thoroughly under cold water — rinsing leaches out soluble polyols. Weigh out exactly 75 g.",
      "Combine the leaves, cucumber, tomatoes and corn in a large bowl.",
      "Fold in the diced mozzarella.",
      "Drizzle with the sesame oil, season generously, and toss gently right before serving."
    ],
    nutrition: { serveWeight: 220, kcal: 264, protein: 10.8, carbs: 9.5, fat: 20.3 }
  },

  {
    id: "savory-cottage-waffles-salmon",
    title: "Savoury Cottage Cheese Waffles with Smoked Salmon",
    category: "Lunch",
    time: 20,
    servings: 2,
    tags: ["quick", "high-protein", "gluten-free"],
    image: "images/savory-cottage-waffles-salmon.jpg",
    ingredients: [
      { heading: "Waffle batter" },
      { item: "120 g lactose-free cottage cheese" },
      { item: "1 large egg" },
      { item: "30 g fine white rice flour" },
      { item: "2 g gluten-free baking powder" },
      { item: "Pinch of sea salt" },
      { item: "1 tsp neutral oil or ghee", note: "for the waffle iron" },
      { heading: "Toppings" },
      { item: "40 g lactose-free cream cheese", note: "or thick lactose-free Greek yoghurt" },
      { item: "60 g smoked or hot-smoked salmon, flaked" },
      { item: "20 g blue cheese, crumbled", note: "gorgonzola or stilton" },
      { item: "½ tsp dried dill or mixed green herbs" }
    ],
    steps: [
      "Heat the waffle iron to medium-high and grease lightly with the oil or ghee.",
      "Blend or whisk the cottage cheese, egg, rice flour, baking powder and salt vigorously into a thick smooth batter.",
      "Divide between two portions on the hot iron, close the lid, and cook 4–6 minutes until crisp, golden and releasing easily.",
      "Spread 20 g of cream cheese over each hot waffle.",
      "Layer the flaked salmon across both, crumble the blue cheese over, and scatter the dill before serving immediately."
    ],
    nutrition: { serveWeight: 137, kcal: 255, protein: 19.1, carbs: 11.0, fat: 15.0 }
  },

  {
    id: "cottage-cheese-pizza",
    title: "Cottage Cheese Protein Pizza",
    category: "Lunch",
    time: 30,
    servings: 2,
    tags: ["high-protein", "low-fat", "gluten-free"],
    image: "images/cottage-cheese-pizza.jpg",
    ingredients: [
      { heading: "Dough" },
      { item: "150 g lactose-free cottage cheese" },
      { item: "35 g fine white rice flour", note: "or a gluten-free baking blend" },
      { item: "1 large egg" },
      { item: "¼ tsp sea salt" },
      { item: "½ tsp Italian herb blend", note: "oregano, basil, thyme — no garlic or onion" },
      { heading: "Toppings" },
      { item: "30 g tomato paste + 1 tsp garlic-infused olive oil", note: "plain paste, no added garlic or onion" },
      { item: "40 g lactose-free shredded mozzarella or hard aged cheese" },
      { item: "30 g diced lean ham or cooked chicken breast", note: "garlic- and onion-free" },
      { item: "35 g canned sweet corn, rinsed well" },
      { item: "45 g yellow cherry tomatoes, halved" },
      { item: "A handful of microgreens or arugula", note: "to garnish" }
    ],
    steps: [
      "Heat the oven to 200 °C and line a baking sheet with parchment.",
      "Blend the cottage cheese, egg, rice flour, salt and herbs into a thick smooth dough.",
      "Spread it onto the lined sheet with a spatula into a thin round about ½ cm thick.",
      "Par-bake the base alone for 12–15 minutes, until firm and lightly golden at the edges.",
      "Mix the tomato paste with the infused oil and spread over the crust, then layer on the mozzarella, ham, corn and cherry tomatoes.",
      "Return to the oven for 6–8 minutes, until the cheese is melted and bubbling.",
      "Scatter the microgreens over before slicing."
    ],
    nutrition: { serveWeight: 193, kcal: 258, protein: 21.5, carbs: 20.5, fat: 10.0 }
  },

  {
    id: "protein-pancakes",
    title: "Fluffy Protein Pancakes",
    category: "Breakfast",
    time: 15,
    servings: 1,
    tags: ["quick", "high-protein", "vegetarian", "gluten-free"],
    image: "images/protein-pancakes.jpg",
    ingredients: [
      { item: "45 g fine white rice flour" },
      { item: "1 large whole egg" },
      { item: "1 large egg white" },
      { item: "25 ml lactose-free milk", note: "or unsweetened almond milk" },
      { item: "10 ml coconut oil", note: "or melted butter" },
      { item: "2 g gluten-free baking powder" },
      { item: "Pinch of sea salt" },
      { item: "Stevia or erythritol to taste" },
      { item: "30 g fresh blueberries", note: "optional topping" }
    ],
    steps: [
      "In a clean dry bowl, whip the single egg white with a pinch of salt to stiff peaks.",
      "In another bowl, whisk the whole egg, milk, rice flour, baking powder and sweetener until smooth.",
      "Fold the whipped white into the batter with a spatula until just combined, then let it rest 5 minutes to thicken.",
      "Heat the coconut oil in a non-stick pan over medium-low. Spoon in small circles of batter.",
      "Cook 2–3 minutes until bubbles form on the surface and the bottoms are golden, then flip and give them another 1–2 minutes.",
      "Serve warm, with blueberries if using."
    ],
    nutrition: { serveWeight: 150, kcal: 341, protein: 13.0, carbs: 37.3, fat: 15.3 }
  },

  {
    id: "strawberry-layer-cake",
    title: "Strawberry Layer Mini-Cake",
    category: "Desserts",
    time: 60,
    servings: 4,
    tags: ["high-protein", "vegetarian", "gluten-free"],
    image: "images/strawberry-layer-cake.jpg",
    ingredients: [
      { heading: "Sponge base" },
      { item: "3 large eggs, separated" },
      { item: "50 g lactose-free kefir", note: "or lactose-free milk + ½ tsp lemon juice" },
      { item: "80 g fine white rice flour" },
      { item: "15 g cornflour" },
      { item: "3 g baking powder · pinch of bicarbonate of soda · pinch of sea salt" },
      { item: "Stevia or erythritol to taste" },
      { item: "¼ tsp vanilla extract or pure vanillin" },
      { heading: "Cream frosting" },
      { item: "150 g lactose-free cream cheese", note: "or whipped lactose-free quark or ricotta" },
      { item: "Stevia or erythritol to taste" },
      { item: "½ tsp vanilla extract" },
      { heading: "Strawberry confit" },
      { item: "100 g strawberries, chopped", note: "fresh or frozen" },
      { item: "15 g cornflour" },
      { item: "Stevia or erythritol to taste" },
      { heading: "Soak" },
      { item: "30 ml lactose-free milk" },
      { item: "Stevia or erythritol to taste" }
    ],
    steps: [
      "Heat the oven to 180 °C and line a large baking sheet with silicone parchment.",
      "Warm the kefir slightly, stir in the bicarbonate and set aside to activate.",
      "Whip the egg whites with the salt and sweetener to stiff peaks.",
      "In another bowl whisk the yolks, kefir mixture, rice flour, cornflour, baking powder and vanilla until smooth.",
      "Fold the whites into the yolk mixture in 2–3 batches until uniform.",
      "Spread evenly onto the lined tray as a thin rectangle and bake 12–15 minutes until light golden. Cool completely, then cut out 4 round mini discs.",
      "For the confit, heat the strawberries, cornflour and sweetener over medium-low, stirring continuously, until it thickens to a jam. Cool completely.",
      "Whip the cream cheese, sweetener and vanilla until smooth and fluffy, then transfer to a piping bag.",
      "Brush each disc with the sweetened milk soak. Pipe dots of cream around the outer ring and centre of the bottom disc and fill the gaps with confit.",
      "Repeat the stacking — sponge, soak, cream and confit — and chill at least 1 hour before serving."
    ],
    nutrition: { serveWeight: 125, kcal: 202, protein: 8.5, carbs: 23.0, fat: 8.5 }
  },

  {
    id: "green-onion-egg-pie",
    title: "Green Onion & Egg Jellied Pie",
    category: "Lunch",
    time: 55,
    servings: 4,
    tags: ["high-protein", "vegetarian", "gluten-free", "meal-prep"],
    image: "images/green-onion-egg-pie.jpg",
    ingredients: [
      { heading: "Dough" },
      { item: "100 g lactose-free sour cream 10–12%" },
      { item: "2 large eggs (~100 g)" },
      { item: "70 g fine white rice flour" },
      { item: "½ tsp baking powder" },
      { item: "Sea salt to taste" },
      { heading: "Filling" },
      { item: "2 large eggs, hard-boiled and chopped (~100 g)" },
      { item: "30 g spring onion — green tops only, finely chopped", note: "weighed after separating from the white" },
      { item: "Sea salt to taste" },
      { heading: "Topping" },
      { item: "1 tsp neutral oil", note: "for greasing — avocado oil works" },
      { item: "5 g white sesame seeds" }
    ],
    steps: [
      "Hard-boil 2 eggs, cool, peel and dice. Combine with the chopped green scallion tops and season with salt.",
      "Heat the oven to 180 °C and grease a small baking dish — a 15 cm round tin or small loaf pan — with the oil.",
      "Whisk the 2 fresh eggs, sour cream, rice flour, baking powder and salt into a smooth thin batter, about the consistency of pancake batter.",
      "Pour half the batter into the dish, scatter the egg and scallion filling evenly over it, then pour the rest of the batter over to cover completely.",
      "Scatter the sesame seeds across the surface and bake 35–40 minutes, until puffed and deeply golden and a toothpick comes out clean.",
      "Cool in the dish at least 15 minutes before turning out. Serve warm or at room temperature."
    ],
    nutrition: { serveWeight: 103, kcal: 170, protein: 11.2, carbs: 10.4, fat: 9.3 }
  },

  {
    id: "banana-cinnamon-muffins",
    title: "Banana Cinnamon Muffins",
    category: "Breakfast",
    time: 35,
    servings: 8,
    tags: ["quick", "low-fat", "vegetarian", "vegan", "gluten-free", "meal-prep", "kid-friendly"],
    image: "images/banana-cinnamon-muffins.jpg",
    ingredients: [
      { item: "177 g firm yellow bananas", note: "peeled weight" },
      { item: "90 g low FODMAP flour blend", note: "e.g. 50 g fine rice flour + 40 g oat flour" },
      { item: "3 g ground cinnamon" },
      { item: "3 g psyllium husk powder" },
      { item: "3 g baking powder" },
      { item: "Pinch of sea salt" },
      { item: "Stevia or erythritol to taste" }
    ],
    steps: [
      "Purée the firm bananas with a fork or blender until smooth.",
      "Add the flour blend, cinnamon, psyllium, baking powder, salt and sweetener, and mix thoroughly into a uniform thick batter.",
      "Divide between 8 mini silicone muffin moulds and bake at 180 °C for 20–25 minutes, until firm and golden."
    ],
    nutrition: { serveWeight: 40, kcal: 58, protein: 1.7, carbs: 12.6, fat: 0.3 }
  },

  {
    id: "chocolate-berry-cake",
    title: "Chocolate Berry Cake",
    category: "Desserts",
    time: 45,
    servings: 4,
    tags: ["low-fat", "vegetarian", "gluten-free"],
    image: "images/chocolate-berry-cake.jpg",
    ingredients: [
      { item: "3 large eggs (~165 g)" },
      { item: "70 g fine rice flour" },
      { item: "20 g defatted cocoa powder" },
      { item: "1 tsp baking powder" },
      { item: "Pinch of sea salt" },
      { item: "60 g red currants, strawberries or blueberries", note: "15–20 g per slice if using black currants" },
      { item: "Stevia, erythritol or FitParad to taste" }
    ],
    steps: [
      "Separate the egg whites from the yolks.",
      "Whisk the yolks with the sweetener, rice flour, cocoa and baking powder until smooth, adding a tiny splash of water if it needs it.",
      "In a clean bowl, whip the whites with a pinch of salt to stiff peaks.",
      "Fold the whites into the cocoa mixture with a spatula until combined — the batter will be light and fluffy.",
      "Pour into a silicone loaf pan, scatter the berries evenly over the top, and bake at 180 °C for 30 minutes. Cool completely before slicing."
    ],
    nutrition: { serveWeight: 75, kcal: 97, protein: 5.3, carbs: 12.0, fat: 2.9 }
  },

  {
    id: "potato-cheese-waffles",
    title: "Flourless Potato Cheese Waffles",
    category: "Lunch",
    time: 20,
    servings: 2,
    tags: ["quick", "high-protein", "vegetarian", "gluten-free"],
    image: "images/potato-cheese-waffles.jpg",
    ingredients: [
      { item: "150 g raw potatoes, peeled" },
      { item: "2 large eggs (~100 g)" },
      { item: "30 g sulguni or mozzarella, grated" },
      { item: "30 g cheddar or gouda, grated", note: "replaces Adyghe cheese" },
      { item: "10 g fresh coriander or green spring onion tops", note: "green tops only" },
      { item: "½ tsp sea salt · black pepper to taste" }
    ],
    steps: [
      "Peel and coarsely chop the potatoes, then blend with the eggs until you have a smooth liquid batter.",
      "Transfer to a bowl and fold in the grated cheeses, chopped herbs, salt and pepper.",
      "Heat the waffle maker and grease lightly if needed. Pour in half the batter per serving and cook 7–8 minutes, until the lid lifts easily and the waffles are crisp and golden."
    ],
    nutrition: { serveWeight: 140, kcal: 203, protein: 12.3, carbs: 13.5, fat: 11.1 }
  },

  {
    id: "cinnamon-rolls",
    title: "Microwave Cottage Cheese Cinnamon Rolls",
    category: "Breakfast",
    time: 15,
    servings: 1,
    tags: ["quick", "high-protein", "vegetarian", "gluten-free"],
    image: "images/cinnamon-rolls.jpg",
    ingredients: [
      { heading: "Dough" },
      { item: "100 g lactose-free dry curd cheese 5%" },
      { item: "1 egg yolk (~18 g)" },
      { item: "50 g fine rice flour" },
      { item: "½ tsp baking powder" },
      { item: "Pinch of sea salt" },
      { item: "Stevia or erythritol to taste" },
      { heading: "Filling" },
      { item: "2 g ground cinnamon" },
      { item: "10–15 g melted coconut oil or coconut butter" },
      { item: "Sweetener to taste" },
      { heading: "Topping" },
      { item: "20 g lactose-free soft curd cheese 0–5%" },
      { item: "10 g dark chocolate 85%+, melted" },
      { item: "Sweetener to taste" }
    ],
    steps: [
      "Mix the curd cheese, egg yolk, rice flour, baking powder, salt and sweetener into a pliable dough.",
      "Roll out into a rectangle on parchment. Mix the melted coconut oil, cinnamon and sweetener, and spread it evenly over the dough.",
      "Cut into strips, or roll into a log and slice into 2–3 mini rolls. Sit them side by side in a microwave-safe dish.",
      "Microwave on high for 3.5–4 minutes.",
      "Mix the topping curd with sweetener, spread over the warm rolls, and drizzle with the melted dark chocolate."
    ],
    nutrition: { serveWeight: 210, kcal: 468, protein: 24.5, carbs: 44.8, fat: 21.2 }
  },

  {
    id: "chocolate-crepe-cake",
    title: "Chocolate Crepe Cake",
    category: "Desserts",
    time: 45,
    servings: 4,
    tags: ["high-protein", "vegetarian", "gluten-free"],
    image: "images/chocolate-crepe-cake.jpg",
    ingredients: [
      { heading: "Chocolate crepes" },
      { item: "2 large eggs (~110 g)" },
      { item: "100 ml almond or lactose-free milk" },
      { item: "20 g cocoa powder" },
      { item: "30 g fine rice flour" },
      { item: "½ tsp baking powder" },
      { item: "60 ml water" },
      { item: "Pinch of vanillin · FitParad, stevia or erythritol to taste" },
      { item: "1 tsp coconut oil", note: "for the pan" },
      { heading: "Lactose-free cream" },
      { item: "200 g lactose-free soft curd cheese" },
      { item: "150 g lactose-free cream cheese" },
      { item: "FitParad or stevia to taste" },
      { heading: "Chocolate glaze" },
      { item: "40 g dark chocolate 85%+", note: "or stevia-sweetened" },
      { item: "15 g pine nuts" },
      { item: "1 tsp coconut oil", note: "melted with the chocolate for shine" }
    ],
    steps: [
      "Whisk the eggs, milk, water, rice flour, cocoa, baking powder, vanillin and sweetener until smooth.",
      "Lightly grease a non-stick pan with coconut oil over medium heat. Ladle in small amounts and cook 5–6 thin crepes, 1–2 minutes a side. Cool completely.",
      "Whisk the soft curd, cream cheese and sweetener until smooth and fluffy.",
      "Layer the crepes, spreading an even layer of cream between each.",
      "Melt the chocolate with the coconut oil over a water bath or in short microwave bursts, stir in the pine nuts, and pour over the top.",
      "Refrigerate at least 1–2 hours before slicing."
    ],
    nutrition: { serveWeight: 150, kcal: 267, protein: 13.2, carbs: 14.7, fat: 17.3 }
  },

  {
    id: "salmon-basmati-bowl",
    title: "Baked Salmon & Basmati Bowl",
    category: "Dinner",
    time: 20,
    servings: 1,
    tags: ["quick", "high-protein", "gluten-free"],
    image: "images/salmon-basmati-bowl.jpg",
    ingredients: [
      { item: "130 g salmon fillet", note: "baked or pan-seared" },
      { item: "150 g cooked basmati rice" },
      { item: "30 g avocado, diced" },
      { item: "25 g fresh arugula" },
      { item: "5 ml truffle oil", note: "to drizzle" },
      { item: "1 tsp garlic-free seasoning blend", note: "nutritional yeast, sea salt, pepper, dried herbs" }
    ],
    steps: [
      "Season the salmon with sea salt and black pepper. Bake at 200 °C for 12–15 minutes, or pan-sear over medium-high heat, until tender and flaky. Flake coarsely with a fork.",
      "Arrange the warm basmati, flaked salmon, avocado and arugula in sections in a shallow bowl.",
      "Drizzle the truffle oil over and scatter the seasoning blend."
    ],
    nutrition: { serveWeight: 340, kcal: 525, protein: 33.4, carbs: 46.5, fat: 22.8 }
  },

  {
    id: "grilled-shrimp-pineapple-salad",
    title: "Grilled Shrimp & Pineapple Salad",
    category: "Lunch",
    time: 15,
    servings: 1,
    tags: ["quick", "high-protein", "gluten-free"],
    image: "images/grilled-shrimp-pineapple-salad.jpg",
    ingredients: [
      { item: "120 g large shrimp, peeled and deveined" },
      { item: "100 g fresh pineapple, sliced into rings" },
      { item: "40 g brie or camembert, cubed", note: "40 g is the limit — see notes" },
      { item: "15 g walnut halves" },
      { item: "30 g fresh arugula" },
      { item: "5 ml olive oil", note: "for the grill pan" },
      { item: "5 ml lemon juice or white balsamic vinegar" },
      { item: "Red pepper flakes · sea salt · black pepper" }
    ],
    steps: [
      "Heat the oil in a grill pan over medium-high. Sear the pineapple rings 2–3 minutes a side until they take on char marks.",
      "Season the shrimp with salt, pepper and chilli flakes and grill 2 minutes a side, until pink and opaque.",
      "Lay a bed of arugula in a shallow bowl and arrange the pineapple and shrimp over it.",
      "Scatter the cheese and walnuts over, dress with the lemon juice or vinegar, and finish with salt and more chilli flakes."
    ],
    nutrition: { serveWeight: 320, kcal: 385, protein: 30.2, carbs: 16.5, fat: 22.4 },
    lfmNotes: [
      "I trimmed the brie from 50 g to 40 g, which is its serve. Soft white-rind cheeses are lower in lactose than they look, but not unlimited — and 40 g also takes about 33 kcal and 3 g of fat off the plate.",
      "Pineapple 100 g against a 140 g limit, walnuts 15 g against 30 g, arugula free. Grilling the pineapple concentrates the sugars but does not change the FODMAP maths.",
      "5 ml of oil is exactly the one-teaspoon budget, and it is doing real work here — a grill pan needs it for the char.",
      "22.4 g of fat makes this the richest savoury dish in the book, ahead of the green power bowl. It is the cheese and the walnuts, both whole foods, so it is a portion question rather than an ingredient one."
    ],
    adaptedFrom: "Brie reduced from 50 g to 40 g to stay inside the serve. Everything else as you sent it."
  },

  {
    id: "fit-brownie",
    title: "Fit Brownie",
    category: "Desserts",
    time: 45,
    servings: 6,
    tags: ["quick", "high-protein", "low-fat", "vegetarian", "gluten-free"],
    image: "images/fit-brownie.jpg",
    ingredients: [
      { heading: "Brownie base" },
      { item: "4 large eggs (~220 g)" },
      { item: "1 firm yellow banana (~100 g), mashed" },
      { item: "70 g fine rice flour" },
      { item: "60 g cocoa powder" },
      { item: "100 ml lactose-free milk", note: "or almond milk" },
      { item: "100 ml water" },
      { item: "Stevia or erythritol to taste" },
      { heading: "Chocolate glaze" },
      { item: "15 g cocoa powder" },
      { item: "2–3 tbsp boiling water" },
      { item: "Stevia or erythritol to taste" }
    ],
    steps: [
      "Blend the eggs, mashed banana, rice flour, cocoa, milk, water and sweetener until smooth. The batter will be very liquid — that is correct.",
      "Oven: pour into a parchment-lined dish and bake at 180 °C for 30–35 minutes. Multicooker: the Bake setting for 35 minutes.",
      "Whisk the glaze cocoa, sweetener and boiling water together until it looks like melted chocolate.",
      "Cool the brownie completely, spread the glaze over, and cut into 6."
    ],
    nutrition: { serveWeight: 92, kcal: 115, protein: 7.0, carbs: 11.7, fat: 4.4 },
    lfmNotes: [
      "Cocoa is the only thing worth watching: 60 g in the batter plus 15 g in the glaze is 12.5 g a slice, just under the 2 tbsp serve. One slice is comfortable, two puts you over — the glaze is easy to forget when you are counting.",
      "Banana at 17 g a slice, the most relaxed banana portion in the book. Rice flour has no limit.",
      "115 kcal and 7 g of protein for a brownie, with no butter or oil anywhere in it. The eggs are doing all the structural work."
    ]
  },

  {
    id: "banana-zapekanka",
    title: "Banana Cottage Cheese Zapekanka",
    category: "Breakfast",
    time: 55,
    servings: 4,
    tags: ["high-protein", "low-fat", "vegetarian", "gluten-free", "meal-prep"],
    image: "images/banana-zapekanka.jpg",
    ingredients: [
      { heading: "Banana base" },
      { item: "120 g firm yellow banana, mashed", note: "green-tipped, not ripe" },
      { item: "50 g lactose-free kefir" },
      { item: "80 g fine rice flour", note: "replaces spelt flour" },
      { item: "15 g dark chocolate 85%+, chopped" },
      { item: "1 large egg (~55 g)" },
      { item: "A pinch of bicarbonate of soda" },
      { heading: "Curd layer" },
      { item: "340 g lactose-free soft curd cheese" },
      { item: "160 g lactose-free thick Greek yoghurt" },
      { item: "1 large egg (~55 g)" },
      { item: "20 g cornflour" },
      { item: "Stevia or erythritol to taste" },
      { heading: "Topping" },
      { item: "70 g lactose-free soft curd cheese" },
      { item: "Stevia or erythritol to taste" }
    ],
    steps: [
      "Mash the banana with a fork. Whisk it with the kefir, egg, rice flour and bicarbonate until smooth, then fold in the chopped chocolate.",
      "In a separate bowl whisk the curd, yoghurt, egg, cornflour and sweetener until smooth and creamy.",
      "Spread the banana base evenly in a lined or greased dish and pour the curd layer straight over it.",
      "Bake at 180 °C for 40–45 minutes, until the centre is set and lightly golden.",
      "Mix the topping curd with sweetener and spread over the cooled casserole before slicing."
    ],
    nutrition: { serveWeight: 208, kcal: 282, protein: 21.4, carbs: 36.1, fat: 5.8 },
    lfmNotes: [
      "Nothing to change — you did all four swaps yourself and gave the right reason for each. Firm banana for fructans, lactose-free dairy throughout, rice flour for the spelt, and real dark chocolate instead of the sugar-free kind because those are usually built on maltitol or sorbitol.",
      "That last one is the least obvious and the one most people get wrong. 'Sugar-free' on a chocolate wrapper almost always means polyols, which is worse for this diet than the sugar would have been.",
      "Portions are all comfortable: banana 30 g a serving, chocolate under 4 g, curd 102 g, yoghurt 40 g. Rice flour and cornflour have no limits.",
      "21.4 g of protein at 5.8 g of fat. Sits alongside the pineapple zapekanka as a breakfast that behaves like a meal."
    ]
  },

  {
    id: "lentil-waffles",
    title: "Crispy Lentil Waffles",
    category: "Lunch",
    time: 20,
    servings: 2,
    tags: ["quick", "vegetarian", "vegan", "gluten-free", "meal-prep"],
    image: "images/lentil-waffles.jpg",
    ingredients: [
      { item: "90 g CANNED red lentils, drained and well rinsed", note: "★ canned, not home-boiled — see notes" },
      { item: "5 g ground flaxseed" },
      { item: "½ tsp baking powder" },
      { item: "¼ tsp sea salt · black pepper" },
      { item: "20 ml water" },
      { item: "20 ml olive oil", note: "10 ml makes them much leaner — see notes" },
      { item: "30 g cherry tomatoes, finely diced", note: "or 8 g sun-dried tomatoes in oil, drained" },
      { item: "20 g spring onion — green tops only" }
    ],
    steps: [
      "Blend the lentils, flaxseed, baking powder, salt, pepper, water and oil into a thick smooth batter.",
      "Stir in the diced tomatoes and chopped spring onion tops.",
      "Heat the waffle iron, grease lightly if needed, and cook 5–8 minutes until crisp and golden."
    ],
    nutrition: { serveWeight: 90, kcal: 155, protein: 4.7, carbs: 10.1, fat: 10.6 },
    lfmNotes: [
      "★ Canned and rinsed, not boiled from dry — the distinction matters more than it sounds. Canned lentils have a safe serve of about 46 g because the GOS leaches out into the canning liquid and you pour it away. Lentils boiled from dry stop at roughly 23 g. At 45 g a waffle you are right on the canned limit and at double the boiled one.",
      "Rinse them properly. That rinse is doing the actual work here, not just washing off brine.",
      "The oil is worth a thought: 20 ml across 2 waffles is 10 ml each, double your teaspoon ceiling, and it makes this the fattiest thing per calorie in the book — 10.6 g of fat in a 155 kcal waffle. Halving it to 10 ml total gives you about 110 kcal and 5.5 g of fat, and a waffle iron crisps these fine without much oil.",
      "Sun-dried tomatoes at 8 g is exactly the 4-piece serve, so that alternative is correctly sized. Green spring onion tops only, as you have it."
    ]
  },

  {
    id: "lazy-cottage-cheese-dumplings",
    title: "Lazy Cottage Cheese Dumplings",
    category: "Breakfast",
    time: 25,
    servings: 2,
    tags: ["quick", "high-protein", "vegetarian", "gluten-free"],
    image: "images/lazy-cottage-cheese-dumplings.jpg",
    ingredients: [
      { heading: "Dumplings" },
      { item: "300 g lactose-free dry curd cheese 5–9%" },
      { item: "1 large egg (~55 g)" },
      { item: "30 g wholegrain rice flour" },
      { item: "15 ml sunflower oil", note: "for the boiling water — mostly stays behind" },
      { item: "A pinch of sea salt" },
      { item: "Stevia or erythritol to taste" },
      { heading: "Topping" },
      { item: "40 g lactose-free sour cream 10%", note: "or lactose-free Greek yoghurt" },
      { item: "15 ml pure maple syrup", note: "replaces honey" },
      { item: "50 g seedless grapes, halved" },
      { item: "A few sprigs of fresh mint" }
    ],
    steps: [
      "Mash the curd, egg, rice flour, salt and sweetener into a cohesive smooth dough.",
      "Divide into 2–3 portions, roll each into a long rope on a lightly floured surface, and cut into bite-sized pieces.",
      "Bring a pot of water to the boil with a pinch of salt and a drop of oil. Drop the dumplings in gently; once they float, give them 1–2 minutes more, then lift out with a slotted spoon.",
      "Serve warm with the sour cream spooned over, the maple drizzled on, and the grape halves and mint scattered."
    ],
    nutrition: { serveWeight: 225, kcal: 342, protein: 29.3, carbs: 20.3, fat: 15.8 },
    lfmNotes: [
      "Nothing here needed changing. Grapes at 25 g a serving against a 150 g limit is the most relaxed fruit portion in the book — you could triple it. Maple at 7.5 g against 40 g, sour cream 20 g.",
      "Rice flour and lactose-free curd both have no limit, so the dumplings themselves are unrestricted.",
      "The oil goes into the boiling water rather than into you, so the real fat is a little under the 15.8 g stated.",
      "Maple rather than stevia is right for the drizzle — it is a syrup doing a syrup's job, and 7.5 g is a rounding error against the diet."
    ]
  },

  {
    id: "chicken-rice-avocado-plate",
    title: "Chicken, Rice & Avocado Plate",
    category: "Dinner",
    time: 20,
    servings: 1,
    tags: ["quick", "high-protein", "gluten-free", "meal-prep"],
    image: "images/chicken-rice-avocado-plate.jpg",
    ingredients: [
      { heading: "Main plate" },
      { item: "120 g poached or shredded chicken breast" },
      { item: "150 g cooked jasmine or basmati rice" },
      { item: "3 large egg whites (~100 g), hard-boiled and chopped" },
      { item: "30 g avocado, diced" },
      { item: "5 ml extra virgin olive or flaxseed oil", note: "over the rice" },
      { heading: "Side salad" },
      { item: "70 g cucumber, sliced" },
      { item: "40 g cherry tomatoes, halved" },
      { item: "20 g radishes, thinly sliced" },
      { item: "5 g fresh dill, chopped" },
      { item: "5 ml oil or lemon juice, to dress" },
      { item: "Sea salt · black pepper" }
    ],
    steps: [
      "Put the warm rice on one side of the plate, top with the diced avocado and drizzle the oil over the rice.",
      "Arrange the shredded chicken and chopped egg whites alongside.",
      "Toss the cucumber, cherry tomatoes, radishes and dill with salt, pepper and the oil or lemon juice, and serve alongside."
    ],
    nutrition: { serveWeight: 580, kcal: 528, protein: 48.5, carbs: 49.3, fat: 15.2 },
    lfmNotes: [
      "Clean the whole way through. Avocado 30 g exactly — third recipe running you have hit that number. Cucumber 70 g against 75 g, cherry tomatoes 40 g against 75 g, radishes 20 g against 38 g. Rice, chicken, egg whites and dill are all free.",
      "The only thing to mention is the oil, and it is a calorie question rather than a gut one: 5 ml on the rice plus 5 ml on the salad is 10 ml, double the one-teaspoon-per-serving ceiling you set. That is about 45 extra kcal. You wrote 'oil essential' on the photo, so I have left both in — worth knowing it is there rather than discovering it later.",
      "48.5 g of protein. Second only to the savoury chicken waffle."
    ]
  },

  {
    id: "tuna-crab-poke-bowl",
    title: "Tuna & Crab Poke Bowl",
    category: "Lunch",
    time: 20,
    servings: 1,
    tags: ["quick", "high-protein", "gluten-free", "no-cook"],
    image: "images/tuna-crab-poke-bowl.jpg",
    ingredients: [
      { item: "100 g sushi-grade raw tuna, cubed" },
      { item: "60 g real crab meat", note: "★ real crab rather than surimi — see notes" },
      { item: "15 g garlic-free mayonnaise", note: "or lactose-free Greek yoghurt with 1 tsp soy sauce" },
      { item: "120 g cooked sushi rice", note: "seasoned with rice vinegar, salt and sweetener" },
      { item: "75 g broccoli florets, blanched" },
      { item: "60 g shelled edamame, steamed" },
      { item: "30 g avocado, diced" },
      { item: "10 g unsweetened coconut flakes" },
      { item: "3 g black and white sesame seeds" },
      { item: "15 ml gluten-free tamari" }
    ],
    steps: [
      "Put the seasoned sushi rice in the bottom of a bowl, warm or cooled.",
      "Mix the shredded crab with the mayonnaise and a pinch of salt until creamy.",
      "Steam or blanch the broccoli florets and edamame 2 minutes until vibrant green. Drain well.",
      "Arrange the tuna, crab mixture, broccoli, edamame and avocado in sections over the rice.",
      "Finish with the coconut flakes and sesame seeds, and serve the tamari alongside."
    ],
    nutrition: { serveWeight: 480, kcal: 512, protein: 38.4, carbs: 48.6, fat: 18.2 },
    lfmNotes: [
      "★ Real crab, not imitation, and this is worth knowing generally: surimi is routinely made with sorbitol as a cryoprotectant, on top of the wheat starch and the garlic or onion flavouring. It is one of the least obvious sorbitol sources in a supermarket. If you do use imitation, the label needs to clear all three.",
      "This is your second bowl built at several ceilings at once — avocado 30 g exactly, broccoli 75 g exactly, edamame 60 g. Sorbitol, fructans and GOS in one sitting again. All individually legal; together it is a lot of different fermentables in one bowl.",
      "Sushi rice, tuna and tamari are all free. Coconut flakes at 10 g against a 25 g limit, sesame seeds trivial.",
      "Check the mayonnaise for garlic. Japanese mayo in particular often has more in it than the name suggests."
    ]
  },

  {
    id: "cottage-cheese-bagels",
    title: "Cottage Cheese Bagels",
    category: "Sauces & Basics",
    time: 35,
    servings: 2,
    tags: ["quick", "high-protein", "vegetarian", "gluten-free", "meal-prep"],
    image: "images/cottage-cheese-bagels.jpg",
    ingredients: [
      { item: "180 g lactose-free dry curd cheese 5%", note: "0.1% cuts the fat — see notes" },
      { item: "1 large egg (~55 g) + 1 egg yolk (~18 g)", note: "keep ½ tsp of yolk back for glazing" },
      { item: "80 g fine rice flour" },
      { item: "40 g hard cheese, finely grated", note: "parmesan or cheddar" },
      { item: "½ tsp sesame seeds" },
      { item: "½ tsp baking powder · pinch of sea salt" }
    ],
    steps: [
      "Blend the curd, whole egg, most of the yolk, grated hard cheese, rice flour, baking powder and salt into a pliable dough.",
      "Divide into 2 large or 3 medium portions. Roll each into a rope on parchment and join the ends into a ring.",
      "Brush the tops with the reserved yolk and scatter the sesame seeds over.",
      "Bake at 180 °C for 20–25 minutes until golden with a crisp crust."
    ],
    nutrition: { serveWeight: 160, kcal: 352, protein: 24.5, carbs: 29.4, fat: 14.4 },
    lfmNotes: [
      "No portion limits anywhere in this. Rice flour has none, lactose-free curd has none, hard cheese comes to 20 g a bagel against a 40 g allowance. Nothing to weigh.",
      "The 14.4 g of fat is the 5% curd, the hard cheese and the yolk. Switching to 0.1% curd takes off about 5 g a bagel and barely changes the texture, since the rice flour and cheese are doing the structural work.",
      "Filed under Basics alongside the rice flake pancakes — this is bread you build something on. Split one and it takes the pastrami, curd and tomato from the zucchini sandwich straight across.",
      "A real bagel is wheat, so this is one of the more useful things in the book: it puts a bread-shaped object back on the table."
    ]
  },

  {
    id: "turkey-patties",
    title: "Turkey Patties",
    category: "Dinner",
    time: 25,
    servings: 4,
    tags: ["quick", "high-protein", "low-fat", "gluten-free", "meal-prep", "one-pan"],
    image: "images/turkey-patties.jpg",
    ingredients: [
      { item: "250 g turkey breast, ground" },
      { item: "100 g zucchini", note: "grated and squeezed dry" },
      { item: "50 g carrot, finely grated" },
      { item: "1 large egg (~55 g)" },
      { item: "20 ml olive oil", note: "5 ml a patty — exactly the oil budget" },
      { item: "15 g spring onion — green tops only", note: "replaces onion" },
      { item: "½ tsp asafoetida or dried chives", note: "replaces garlic — gluten-free asafoetida" },
      { item: "A handful of dill or parsley" },
      { item: "Sea salt · black pepper" }
    ],
    steps: [
      "Grate the zucchini, sprinkle with a pinch of salt, leave 3 minutes and squeeze out all the liquid. Finely grate the carrot; chop the spring onion tops and herbs.",
      "Combine the turkey, squeezed zucchini, carrot, egg, spring onion tops, herbs, asafoetida, salt and pepper. Mix thoroughly until it binds.",
      "Heat the oil in a non-stick pan over medium heat. Shape into 4 patties and cook 4–5 minutes a side with the lid on, until golden and cooked through."
    ],
    nutrition: { serveWeight: 100, kcal: 133, protein: 15.4, carbs: 2.4, fat: 6.5 },
    lfmNotes: [
      "You are right that pure olive oil is FODMAP-free — the fructans in garlic and onion are water-soluble, which is the whole basis of infused oils. And 20 ml across 4 patties is 5 ml each, landing exactly on the one-teaspoon-per-serving budget.",
      "If you want them leaner, these bake well: 200 °C for 20–25 minutes, no oil, which takes them from 6.5 g of fat to about 2 g. You lose the fried crust, which may or may not be a trade you want.",
      "Zucchini is only 16 g a patty here, unusually relaxed for this book. Carrot has no detectable FODMAPs.",
      "Green spring onion tops and gluten-free asafoetida in place of onion and garlic — both correct. Most commercial hing is cut with wheat flour, so the packet matters.",
      "2.4 g of carbs a patty. These freeze well and reheat without going rubbery."
    ]
  },

  {
    id: "chocolate-coffee-cake",
    title: "Chocolate Coffee Cake",
    category: "Desserts",
    time: 25,
    servings: 4,
    tags: ["quick", "high-protein", "low-fat", "vegetarian", "gluten-free"],
    image: "images/chocolate-coffee-cake.jpg",
    ingredients: [
      { heading: "Cake layers" },
      { item: "2 large eggs (~110 g)" },
      { item: "100 g mashed ripe banana", note: "replaces the applesauce — ripe is fine here, see notes" },
      { item: "40 g fine rice flour" },
      { item: "10 g Dutch-process cocoa powder" },
      { item: "5 g baking powder" },
      { item: "Stevia or erythritol to taste" },
      { heading: "Cream filling" },
      { item: "250 g lactose-free soft curd 0.1–4%" },
      { item: "10 g Dutch-process cocoa powder" },
      { item: "Stevia or erythritol to taste" },
      { heading: "Coffee soak" },
      { item: "2 tsp instant coffee" },
      { item: "100 ml boiling water" },
      { item: "Stevia or erythritol to taste" }
    ],
    steps: [
      "Whisk the eggs, mashed banana, rice flour, 10 g cocoa, baking powder and sweetener until smooth.",
      "Pour into a small parchment-lined dish. Microwave on high 3–4 minutes, or bake at 180 °C for 15–18 minutes, until set. Cool, then slice horizontally into 2–3 layers.",
      "Dissolve the coffee and sweetener in the boiling water and let it cool. Whisk the curd with the second 10 g of cocoa and sweetener until smooth.",
      "Brush each layer generously with the coffee soak, spread cream between the layers and over the outside, and refrigerate 1–2 hours before serving."
    ],
    nutrition: { serveWeight: 128, kcal: 114, protein: 10.1, carbs: 9.3, fat: 4.6 },
    lfmNotes: [
      "Replacing applesauce with banana was the right instinct — apples carry both excess fructose and sorbitol.",
      "This is the one recipe where ripe banana is the correct call. Ripening turns starch into fructans, which is why every other banana recipe here says firm; but 100 g across 4 slices is 25 g a serving, inside even the stricter ripe-banana limit, and you need the sweetness because there is no sugar doing that job.",
      "Rice flour has no limit. Cocoa comes to 5 g a slice across both components. Curd is lactose-free.",
      "89 kcal per 100 g makes this the lightest cake in the book. Worth knowing the coffee itself can irritate IBS independently of FODMAPs, so if a soaked cake ever disagrees with you, suspect the caffeine before the recipe."
    ]
  },

  {
    id: "blueberry-curd-tarts",
    title: "Blueberry & Curd Cheese Tarts",
    category: "Desserts",
    time: 40,
    servings: 4,
    tags: ["quick", "high-protein", "low-fat", "vegetarian", "gluten-free"],
    image: "images/blueberry-curd-tarts.jpg",
    ingredients: [
      { item: "250 g lactose-free dry curd cheese 0–5%" },
      { item: "100 g lactose-free soft curd 0.1%" },
      { item: "70 g gluten-free flour blend", note: "keep 5 g back for the berries" },
      { item: "1 large egg (~55 g)" },
      { item: "150 g fresh blueberries" },
      { item: "1 tbsp fresh lemon juice" },
      { item: "3 g baking powder" },
      { item: "Stevia or erythritol to taste" }
    ],
    steps: [
      "Heat the oven to 180 °C and line a baking sheet.",
      "Combine the dry curd, 65 g of the flour, the egg, baking powder, sweetener and lemon juice into a cohesive dough.",
      "Divide into 4 balls, place on the sheet, flatten slightly, then press the base of a glass into each centre to make a well.",
      "Mix the soft curd with sweetener and spoon it into the wells. Toss the blueberries with the reserved 5 g of flour and pile them on top.",
      "Bake 25–30 minutes until the edges are golden. Cool slightly before serving."
    ],
    nutrition: { serveWeight: 138, kcal: 193, protein: 20.1, carbs: 21.6, fat: 3.2 },
    lfmNotes: [
      "Blueberries work out at 37.5 g a tart, just under the 40 g limit — so one at a time. Two tarts is 75 g, getting on for double.",
      "Both curds lactose-free, and you specified stevia or erythritol yourself. Nothing here needed changing.",
      "20.1 g of protein at 3.2 g of fat per tart. The best ratio of any of the pastries in the book.",
      "Tossing the berries in flour before piling them on is what stops them bleeding into the curd — worth not skipping."
    ]
  },

  {
    id: "green-power-bowl",
    title: "Green Power Bowl & Cheese Toast",
    category: "Lunch",
    time: 15,
    servings: 1,
    tags: ["quick", "high-protein", "vegetarian", "gluten-free"],
    image: "images/green-power-bowl.jpg",
    ingredients: [
      { item: "30 g avocado, sliced", note: "one eighth — the ceiling, not a starting point" },
      { item: "75 g broccoli florets", note: "florets only, no thick stalks" },
      { item: "80 g shelled edamame, steamed or thawed" },
      { item: "40 g mixed greens", note: "arugula and baby spinach" },
      { item: "2 slices (~60 g) gluten-free sourdough or seeded bread" },
      { item: "40 g hard cheese, sliced", note: "swiss, cheddar or gouda" },
      { item: "10 g pumpkin seeds, toasted" },
      { item: "Juice of ½ lemon · sea salt · black pepper" }
    ],
    steps: [
      "Steam the broccoli florets and edamame 3–4 minutes until bright green and tender-crisp. Drain well.",
      "Toast the bread and lay the sliced cheese over the warm slices.",
      "Arrange the greens, broccoli, edamame and avocado in a large bowl and set the cheese toasts on top.",
      "Scatter the pumpkin seeds over, then dress the whole bowl with lemon juice, salt and pepper."
    ],
    nutrition: { serveWeight: 335, kcal: 448, protein: 26.5, carbs: 38.2, fat: 20.8 },
    lfmNotes: [
      "Every individual portion here is right: avocado at 30 g exactly, broccoli florets at 75 g with the stalks left out, edamame at 80 g against a 90 g limit, cheese at 40 g exactly. You have clearly internalised the numbers.",
      "★ But this is the one plate in the book where I would mention stacking. Three different FODMAP groups are each sitting at or near their ceiling in the same meal — sorbitol from the avocado, GOS from the edamame, fructans from the broccoli. Each is compliant alone; together they are the busiest plate you have. If a day is going to go wrong, it would be this one. Halving any single element gives you a lot of margin back.",
      "Check the gluten-free bread for inulin or chicory root fibre. Seeded and sourdough GF loaves are among the most common places it hides.",
      "20.8 g of fat, the highest of the savoury dishes — avocado, cheese and seeds together. All of it is whole-food fat rather than added oil, so it is a portion question, not an ingredient one."
    ]
  },

  {
    id: "zucchini-sandwich",
    title: "Zucchini Sandwich",
    category: "Lunch",
    time: 25,
    servings: 2,
    tags: ["quick", "high-protein", "low-fat", "gluten-free", "meal-prep"],
    image: "images/zucchini-sandwich.jpg",
    ingredients: [
      { heading: "Zucchini buns" },
      { item: "130 g zucchini", note: "grated and thoroughly squeezed dry" },
      { item: "1 large egg (~55 g) + 2 egg whites (~65 g)" },
      { item: "25 g gluten-free flour blend", note: "or oat flour — fine at this amount, see notes" },
      { item: "½ tsp baking powder" },
      { item: "½ tsp flaxseeds and sesame seeds", note: "for the tops" },
      { item: "Sea salt · black pepper" },
      { heading: "Filling" },
      { item: "70 g lean turkey breast or chicken pastrami, sliced", note: "the Chicken Pastrami recipe in Snacks works perfectly here" },
      { item: "40 g lactose-free soft curd 0.1%", note: "or lactose-free cream cheese" },
      { item: "2 lettuce leaves" },
      { item: "40 g tomato, sliced" },
      { item: "30 g cucumber, sliced lengthways" }
    ],
    steps: [
      "Grate the zucchini, sprinkle with a pinch of salt, leave 3 minutes, then squeeze out all the liquid in a clean cloth.",
      "Whisk the egg, egg whites, squeezed zucchini, flour, baking powder, salt and pepper together.",
      "Spread into two thick bun shapes on a parchment-lined tray and scatter the seeds over the tops. Bake at 180 °C for 15–18 minutes until firm and golden. Cool.",
      "Spread the curd on the inside of one bun, layer on the lettuce, cucumber, tomato and turkey, and top with the second bun. Cut in half to serve."
    ],
    nutrition: { serveWeight: 185, kcal: 146, protein: 16.2, carbs: 13.3, fat: 3.1 },
    lfmNotes: [
      "130 g of zucchini again, the same figure you used in the vegetable roll. Squeezed down it is about 42 g a half, comfortable; the whole sandwich lands around 85 g, marginally over the 75 g ceiling. So half at a time is the easy read.",
      "Oat flour is fine here, unlike in the savoury chicken waffle. The difference is quantity: 25 g total across two buns versus 100 g in one waffle. Same ingredient, same 'or oat flour' note, completely different answer.",
      "Nice to see this pointing at your own pastrami. Shop deli turkey is nearly always cured with garlic and onion, so making your own is what lets this sandwich exist.",
      "Tomato 20 g a half, cucumber 15 g, curd 20 g. All well inside. Lettuce is free."
    ]
  },

  {
    id: "rice-flake-pancake-base",
    title: "Rice Flake Pancake Base",
    category: "Sauces & Basics",
    time: 12,
    servings: 1,
    tags: ["quick", "low-fat", "vegetarian", "gluten-free", "meal-prep"],
    image: "images/rice-flake-pancake-base.jpg",
    ingredients: [
      { item: "60 g rice flakes" },
      { item: "100 ml warm water" },
      { item: "2 large egg whites (~65 g)" },
      { item: "A pinch of sea salt" },
      { item: "Erythritol or stevia, for a sweet version", note: "or herbs and spices for a savoury one" }
    ],
    steps: [
      "Put the rice flakes in a bowl, pour the warm water over, cover with a plate and leave 5–7 minutes until the liquid is absorbed and the flakes soften.",
      "Add the egg whites, salt and either sweetener or seasoning. Stir thoroughly into a thick, uniform batter.",
      "Heat a contact grill or non-stick pan — no oil needed. Spread the batter evenly and cook 3–5 minutes until set and lightly golden."
    ],
    nutrition: { serveWeight: 225, kcal: 252, protein: 12.8, carbs: 48.0, fat: 0.8 },
    lfmNotes: [
      "0.8 g of fat in a whole meal. This is the leanest thing in the book by a wide margin, and it has no portion limits anywhere — rice has none, egg whites have none.",
      "Filed under Basics because it goes either way: sweeten it and it is a pancake, season it and it is bread for melted cheese, as in your photo.",
      "One note on the photo: cherry tomatoes cap at 5 (75 g) a serving, and there are about ten on that plate. Not a disaster, but the tomatoes are the only thing there with a limit.",
      "48 g of carbs, so this is a fuel dish rather than a light one — good before a long day, less so late at night."
    ]
  },

  {
    id: "ricotta-omelet-sweet-potato",
    title: "Ricotta Omelette with Sweet Potato Fries",
    category: "Breakfast",
    time: 25,
    servings: 1,
    tags: ["quick", "high-protein", "vegetarian", "gluten-free", "one-pan"],
    image: "images/ricotta-omelet-sweet-potato.jpg",
    ingredients: [
      { item: "75 g sweet potato, peeled and cut into fries", note: "weigh it — 75 g is the ceiling" },
      { item: "2 large eggs (~110 g)" },
      { item: "30 ml water or lactose-free milk" },
      { item: "40 g lactose-free ricotta", note: "or lactose-free cream cheese" },
      { item: "1 tsp mixed seeds", note: "sesame, black sesame or chia" },
      { item: "1 tbsp chopped herbs", note: "chives, dill or parsley" },
      { item: "Sea salt · cracked black pepper" }
    ],
    steps: [
      "Heat the oven or air fryer to 200 °C. Toss the sweet potato fries with salt and pepper, spread in a single layer on parchment, and cook 15–18 minutes until golden and tender.",
      "Whisk the eggs with the water or milk, the herbs, salt and pepper. Pour into a heated non-stick pan over medium-low heat, cover, and cook 2–3 minutes until set.",
      "Spread the ricotta over one half, fold the other half over it, then fold again into a quarter.",
      "Serve alongside the fries with the seeds scattered over."
    ],
    nutrition: { serveWeight: 260, kcal: 268, protein: 18.2, carbs: 14.8, fat: 15.1 },
    lfmNotes: [
      "75 g of sweet potato is exactly the safe serve, and you have it right on the number. Larger portions turn high in mannitol, so this is one to weigh rather than eyeball — it is the single most common place people quietly go over.",
      "Chives, dill and parsley are all free, so be generous with them. Sesame and chia seeds too, at a teaspoon.",
      "The 15 g of fat is the two eggs and the ricotta, not added oil — nothing to trim here without losing the dish.",
      "Nothing else in this needs watching. A clean, weighable breakfast."
    ]
  },

  {
    id: "zucchini-salmon-waffles",
    title: "Zucchini, Salmon & Cheese Waffles",
    category: "Lunch",
    time: 20,
    servings: 3,
    tags: ["quick", "high-protein", "low-fat", "gluten-free"],
    image: "images/zucchini-salmon-waffles.jpg",
    ingredients: [
      { heading: "Batter" },
      { item: "200 g zucchini", note: "grated and squeezed dry" },
      { item: "60 g lactose-free dry curd or cottage cheese 0–5%" },
      { item: "1 large egg (~55 g)" },
      { item: "25 g hard cheese, grated", note: "parmesan, cheddar or swiss" },
      { item: "20 g gluten-free flour blend", note: "or rice flour, to bind" },
      { item: "A pinch of sea salt" },
      { item: "½ tsp asafoetida or dried chives", note: "★ replaces the dry garlic — gluten-free asafoetida only" },
      { heading: "Toppings" },
      { item: "90 g smoked salmon or salted trout", note: "30 g per waffle" },
      { item: "30 g lactose-free cream cheese or soft curd" },
      { item: "10 g spring onion — green tops only, sliced" }
    ],
    steps: [
      "Grate the zucchini, sprinkle with a tiny pinch of salt and leave 5 minutes. Wrap in a clean towel and squeeze out as much liquid as you can.",
      "Mix the squeezed zucchini with the egg, curd, grated hard cheese, flour, salt and asafoetida until well combined.",
      "Heat a non-stick waffle iron. Spoon the batter in — it makes about 3 small waffles — and cook 5–7 minutes until golden and firm.",
      "Top each warm waffle with 10 g cream cheese, 30 g smoked salmon and a scatter of green spring onion tops."
    ],
    nutrition: { serveWeight: 120, kcal: 148, protein: 14.8, carbs: 6.0, fat: 7.2 },
    lfmNotes: [
      "Compare this with the earlier Zucchini Waffles: same vegetable, but there the whole batch drained to 120–130 g in one serving, and here 200 g is spread across three waffles — about 43 g each. One waffle is comfortable; two puts you around 85 g, just over the 75 g ceiling. So two is the practical limit and three is a stretch.",
      "★ Swapping dry garlic for asafoetida is exactly right, and buy the gluten-free kind — most commercial hing is bulked out with wheat flour.",
      "Green spring onion tops only, which you had already. Hard cheese 8 g a waffle, cream cheese 10 g, both well inside.",
      "Smoked salmon has no FODMAPs. Check the packet only if it is a flavoured or marinated one."
    ]
  },

  {
    id: "savory-chicken-herb-waffle",
    title: "Savoury Chicken & Herb Waffle",
    category: "Lunch",
    time: 25,
    servings: 1,
    tags: ["quick", "high-protein", "low-fat", "gluten-free"],
    image: "images/savory-chicken-herb-waffle.jpg",
    ingredients: [
      { heading: "Waffle batter" },
      { item: "100 g gluten-free flour blend", note: "★ the blend, not oat flour — see notes" },
      { item: "115 g lactose-free soft curd 0.1%" },
      { item: "1 large egg (~55 g)" },
      { item: "60 ml unsweetened almond milk", note: "or lactose-free milk" },
      { item: "4 g baking powder · salt · black pepper" },
      { heading: "Toppings" },
      { item: "120 g roasted or pan-seared chicken breast, sliced" },
      { item: "1 medium tomato (~120 g), sliced" },
      { item: "15 g garlic-free pesto", note: "recipe in the steps below" },
      { item: "15 g parmesan, finely grated" },
      { item: "Fresh coriander, dill and mint sprigs" }
    ],
    steps: [
      "Whisk the egg, curd, milk, salt and pepper. Fold in the flour and baking powder to a thick batter.",
      "Cook in a preheated non-stick waffle iron until golden and crisp.",
      "For the pesto, blend fresh basil, toasted pine nuts, grated parmesan, lemon juice, a pinch of salt and 1–2 tbsp water until smooth. No oil, no garlic.",
      "Spread the pesto thinly over the warm waffle, layer on the chicken and tomato, tuck in the herb sprigs, and finish with the grated parmesan."
    ],
    nutrition: { serveWeight: 450, kcal: 445, protein: 52.5, carbs: 34.2, fat: 10.8 },
    lfmNotes: [
      "★ Do not take the oat flour alternative on this one. 100 g of oat flour in a single serving is over three times its limit — fine spread across a six-slice cake, not fine in one waffle. The rice or corn based GF blend has no limit, so use that.",
      "Your garlic-free, oil-free pesto is the best fix in the book. Shop pesto is out twice over — garlic and cashews — and this version loses neither the basil nor the parmesan. Worth making a jar of it separately.",
      "Tomato at 120 g is right on its serve, so one medium is the ceiling rather than a starting point.",
      "Parmesan 15 g against a 40 g limit. Coriander, dill and mint are all free — pile them on.",
      "52.5 g of protein in one plate, and 10.8 g of fat. The most protein of anything in the book."
    ]
  },

  {
    id: "stuffed-turkey-roll",
    title: "Stuffed Turkey Roll",
    category: "Dinner",
    time: 60,
    servings: 5,
    tags: ["high-protein", "low-fat", "gluten-free", "meal-prep", "one-pan"],
    image: "images/stuffed-turkey-roll.jpg",
    ingredients: [
      { item: "500 g turkey breast" },
      { item: "100 g feta", note: "or Sirtaki 35%, or hard goat cheese" },
      { item: "25 g dried cranberries" },
      { item: "15 g walnuts, roughly chopped" },
      { item: "Sea salt · black pepper" },
      { item: "Dried thyme, rosemary or paprika", note: "to taste" }
    ],
    steps: [
      "Put the turkey breast on a board and slice horizontally through the middle, parallel to the board, opening it out like a book. Cover with cling film and pound with a rolling pin or mallet until evenly thin.",
      "Season the inside with salt and pepper. Crumble the feta along one edge, then scatter the cranberries and walnuts over it.",
      "Roll up tightly from the filled edge and tie along its length with kitchen twine to hold the shape. Season the outside with more salt, pepper and herbs.",
      "Bake at 180 °C for 40–45 minutes until cooked through. Snip the twine off before slicing."
    ],
    nutrition: { serveWeight: 110, kcal: 184, protein: 23.1, carbs: 5.5, fat: 7.7 },
    lfmNotes: [
      "The cranberries land at 5 g a serving here, under the 9 g tested serve — a much easier ratio than the kulich, where the same ingredient was the pressure point. Still worth checking the packet for apple juice concentrate or HFCS.",
      "Feta 20 g a serving against a 40 g limit; walnuts 3 g against 30 g. Both very comfortable.",
      "Thyme, rosemary and paprika are all clean. This is one of the few savoury dishes where you do not need to interrogate a spice blend, because there is no blend.",
      "Turkey, feta, cranberry and walnut is a festive combination that happens to be almost entirely low FODMAP by accident — worth remembering when you need something for a table full of other people."
    ]
  },

  {
    id: "shrimp-kiwi-arugula-salad",
    title: "Shrimp, Kiwi & Arugula Salad",
    category: "Lunch",
    time: 15,
    servings: 1,
    tags: ["quick", "high-protein", "low-fat", "gluten-free", "no-cook"],
    image: "images/shrimp-kiwi-arugula-salad.jpg",
    ingredients: [
      { item: "150 g large shrimp, peeled and deveined" },
      { item: "60 g fresh arugula" },
      { item: "75 g cucumber, diced", note: "weigh it — see notes" },
      { item: "1 medium kiwi (~75 g), peeled and diced" },
      { item: "10 g pine nuts, toasted" },
      { item: "Juice of ½ lemon" },
      { item: "A handful of fresh basil, finely chopped" },
      { item: "Sea salt · cracked black pepper" },
      { item: "¼ tsp paprika or chilli powder", note: "optional, for the shrimp" }
    ],
    steps: [
      "Season the shrimp lightly with salt, pepper and paprika. Dry-sear in a non-stick pan over medium-high heat, 2–3 minutes a side, until pink and cooked through. No oil needed.",
      "Toast the pine nuts in a small dry pan over low heat for 1–2 minutes until golden and fragrant. Set aside.",
      "Combine the arugula, cucumber, kiwi and shrimp in a large bowl.",
      "Whisk the lemon juice with salt, pepper and the chopped basil, pour over, and toss gently. Scatter the pine nuts on top."
    ],
    nutrition: { serveWeight: 320, kcal: 235, protein: 28.5, carbs: 15.8, fat: 7.2 },
    lfmNotes: [
      "I put a weight on the cucumber. The safe serve is 75 g, and 'one medium cucumber' can be anything from 100 g to well over 200 g depending on the variety — the only ingredient here where guessing could take you over.",
      "Everything else has room: kiwi 75 g against a 150 g limit, pine nuts 10 g against 14 g, arugula and basil effectively free.",
      "Dry-searing the shrimp with no oil is why this comes in at 7.2 g of fat, and most of that is the pine nuts. If you do want the basil-infused oil from the photo, infused oils are fine on this diet — just add it to the macros.",
      "28.5 g of protein for 235 kcal. The best ratio of any savoury dish in the book."
    ]
  },

  {
    id: "kiwi-charlotte",
    title: "Kiwi Charlotte",
    category: "Desserts",
    time: 50,
    servings: 6,
    tags: ["quick", "low-fat", "vegetarian", "gluten-free"],
    image: "images/kiwi-charlotte.jpg",
    ingredients: [
      { item: "3–4 firm unripe kiwis (~300 g)" },
      { item: "3 large eggs (~165 g)" },
      { item: "140 g gluten-free flour blend", note: "or rice flour with a little cornflour" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet — see notes on the sugar option" },
      { item: "5 g baking powder · pinch of salt" },
      { item: "5 g oil or butter, to grease the tin" }
    ],
    steps: [
      "Peel the kiwis and cut out any tough central core if they are very green. Slice into half-moons or small cubes.",
      "Grease a baking dish, dust it lightly with GF flour, and lay the kiwi evenly across the bottom.",
      "Whip the eggs, salt and sweetener on high for 4–5 minutes until pale, light and voluminous.",
      "Sift in the flour and baking powder and fold gently with a spatula, upward motions only, to keep the air in.",
      "Pour the batter over the kiwi and bake at 180 °C for 35–40 minutes until golden. Test with a toothpick and cool before slicing."
    ],
    nutrition: { serveWeight: 90, kcal: 133, protein: 5.0, carbs: 20.5, fat: 3.4 },
    lfmNotes: [
      "Kiwi is an excellent choice for a charlotte — green kiwi is safe up to 2 medium fruit, so at 50 g a slice you have a lot of headroom. It also happens to help with motility, which is a bonus on this diet.",
      "On your sugar option: 50 g of table sugar across 6 slices is 8 g each, which is actually inside the low FODMAP limit. So sugar would not break the diet here — it only breaks your own stevia rule. Your call, and now you know it is a calorie decision rather than a gut one.",
      "GF flour at 23 g a slice. Nothing else in this needs watching.",
      "Firm, unripe kiwis matter for texture more than FODMAPs here — ripe ones collapse into the batter."
    ]
  },

  {
    id: "caramel-cake",
    title: "Caramel Cake",
    category: "Desserts",
    time: 40,
    servings: 8,
    tags: ["high-protein", "low-fat", "vegetarian", "gluten-free", "meal-prep"],
    image: "images/caramel-cake.jpg",
    ingredients: [
      { heading: "Sponge layers" },
      { item: "80 g whole egg (~1 large)" },
      { item: "170 g liquid egg whites" },
      { item: "100 g fine corn flour", note: "or GF oat flour" },
      { item: "20 g gluten-free flour blend" },
      { item: "115 g lactose-free soft curd 0.1%" },
      { item: "20 g lactose-free micellar casein", note: "or extra GF flour" },
      { item: "35 g maple or rice malt syrup", note: "replaces the honey" },
      { item: "6 g baking powder · 1 tsp bicarbonate of soda" },
      { heading: "Caramel cream & topping" },
      { item: "235 g lactose-free soft curd 0.1%" },
      { item: "140 g lactose-free cream cheese" },
      { item: "50 ml salted caramel syrup", note: "★ check the label — or use the Salted Caramel Sauce in Sauces & Basics" },
      { item: "23.5 g gluten-free cinnamon or gingersnap biscuits, crushed", note: "replaces Biscoff" }
    ],
    steps: [
      "Whisk the egg, egg whites, the 115 g of curd and the maple syrup until combined. Sift in the corn flour, GF flour, casein, baking powder and bicarbonate, and mix to a smooth batter.",
      "Pour onto a lined baking tray and bake at 180 °C for 12–15 minutes. Cool and cut into equal squares.",
      "Whip the remaining curd, the cream cheese and the caramel syrup together until thick and creamy.",
      "Layer the sponge squares with cream, then coat the top and sides smoothly with the rest.",
      "Scatter the crushed biscuit crumbs over and chill at least 4 hours, or overnight, to set."
    ],
    nutrition: { serveWeight: 108, kcal: 168, protein: 13.2, carbs: 19.6, fat: 3.8 },
    lfmNotes: [
      "★ The Mr. Djemius Zero caramel syrup is the one thing here I would not take on trust. Zero-calorie caramels are usually built on maltitol, sorbitol or polydextrose — all fermentable. Read the label, and if it lists any of those, use the Salted Caramel Sauce recipe from Sauces & Basics instead. It is allulose and lactose-free milk, and it does the same job.",
      "Swapping Biscoff for gluten-free gingersnaps was right — Biscoff is wheat plus glucose-fructose syrup. Check the new biscuits for inulin or chicory root while you are reading labels.",
      "Maple at 4.4 g a slice, nowhere near the 40 g limit. Corn flour has no limit.",
      "Macros are for 8 slices. All three dairies lactose-free, casein included."
    ]
  },

  {
    id: "quince-pineapple-roll",
    title: "Quince & Pineapple Roll",
    category: "Desserts",
    time: 40,
    servings: 10,
    tags: ["low-fat", "vegetarian", "gluten-free", "meal-prep"],
    image: "images/quince-pineapple-roll.jpg",
    ingredients: [
      { heading: "Fruit base" },
      { item: "420 g quince, peeled, cored and finely grated", note: "or rhubarb — see notes" },
      { item: "420 g fresh pineapple, finely chopped or pulsed" },
      { item: "6 g ground cinnamon" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet — adjust to how sweet the pineapple is" },
      { heading: "Sponge batter" },
      { item: "4 eggs (~235 g)" },
      { item: "110 g gluten-free flour blend or GF oat flour" },
      { item: "20 g lactose-free micellar casein", note: "or 30 g extra GF flour" },
      { item: "8 g baking powder" },
      { item: "Erythritol or stevia to taste · pinch of salt" }
    ],
    steps: [
      "Mix the grated quince, pulsed pineapple, cinnamon and sweetener. Press firmly into a uniform rectangular sheet on siliconised parchment.",
      "Whip the eggs, salt and sweetener for 2 minutes until light and airy, then fold in the flour, casein and baking powder until smooth.",
      "Spread the batter evenly over the fruit layer and bake at 180 °C for 20 minutes.",
      "Invert onto fresh parchment, strip the baking parchment away, and roll tightly while warm.",
      "Chill overnight before dusting with powdered erythritol."
    ],
    nutrition: { serveWeight: 105, kcal: 115, protein: 5.8, carbs: 17.2, fat: 2.5 },
    lfmNotes: [
      "★ The quince is a genuine unknown. Monash has never tested the whole fruit — only quince paste, which is low FODMAP in very small portions only, with fructans as the suspected problem. And quince is a close relative of apple and pear, both of which are high. So swapping apples for quince may not have fixed what it looks like it fixed.",
      "The tested alternative is rhubarb: tart, fibrous, holds its shape when cooked exactly as quince does, and low FODMAP up to about a cup. At 420 g across 10 slices you would be at 42 g a serving, well inside.",
      "If you want to keep the quince, 42 g a serving is a modest amount — have one slice on a settled day and see how it goes rather than making it for guests first.",
      "The pineapple half is fine: 42 g a serving against a 140 g limit.",
      "PrebioSweet swapped in both places. Casein must be the lactose-free kind."
    ],
    adaptedFrom: "Apple roll — apples replaced with quince and pineapple by you. The pineapple half is a clean swap; the quince half is untested rather than proven safe, so rhubarb is offered alongside it."
  },

  {
    id: "prague-roll",
    title: "Prague Roll",
    category: "Desserts",
    time: 50,
    servings: 2,
    tags: ["high-protein", "low-fat", "vegetarian", "gluten-free"],
    image: "images/prague-roll.jpg",
    ingredients: [
      { heading: "Sponge" },
      { item: "2 egg yolks (~32 g)" },
      { item: "70 ml liquid egg whites + 2 egg whites (~62 g)" },
      { item: "40 g gluten-free flour blend or GF oat flour" },
      { item: "12 g cocoa powder" },
      { item: "75 ml lactose-free milk 1% or skim" },
      { item: "4 g baking powder" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet" },
      { item: "1 g vanillin · pinch of salt" },
      { heading: "Berry confiture" },
      { item: "250 g strawberries", note: "★ strawberries, not raspberries — see notes" },
      { item: "10 g cornflour + 30 ml cold water" },
      { item: "Erythritol or stevia to taste" },
      { heading: "Cream & glaze" },
      { item: "200 g lactose-free curd cheese 5%" },
      { item: "80 g lactose-free ricotta or cream cheese" },
      { item: "18 g cocoa powder" },
      { item: "Erythritol or stevia to taste · 1 g vanillin" },
      { item: "50 g low FODMAP chocolate drizzle", note: "or the Salted Caramel Sauce from Sauces & Basics" }
    ],
    steps: [
      "Whisk the yolks with the milk. Sift in the flour, 12 g cocoa, baking powder, sweetener and vanillin, and whisk smooth.",
      "In a clean bowl whip all the egg whites with a pinch of salt to soft peaks, then fold them into the batter in three batches.",
      "Spread evenly on siliconised parchment and bake at 180 °C for 15–18 minutes. Roll it up tightly inside the parchment while hot and leave it to cool completely rolled — that is what stops it cracking later.",
      "Chop the berries finely, simmer with sweetener 3–4 minutes until the juices release, then pour in the cornflour slurry and cook 1 minute until thick. Cool completely.",
      "Blend the curd, ricotta, 18 g cocoa, sweetener and vanillin until smooth. Set aside a third for the outside.",
      "Unroll the cooled sponge, spread two thirds of the cream over it, top with the confiture and roll up tightly. Wrap and chill 2–3 hours.",
      "Coat the outside with the reserved cream and finish with the chocolate drizzle."
    ],
    nutrition: { serveWeight: 215, kcal: 236, protein: 19.3, carbs: 24.1, fat: 6.9 },
    lfmNotes: [
      "★ Use strawberries, not raspberries. Your recipe offers either, but 250 g across half a roll each is 125 g a serving — fine for strawberries at a 150 g limit, and double the limit for raspberries. If you want raspberries, drop the confiture to 120 g total.",
      "Swapping out the apricots was the right call, and you spotted it yourself — apricots are one of the higher-sorbitol fruits.",
      "Cocoa comes to 15 g a serving across the sponge and cream together, right at the 2 tbsp mark. Worth knowing since it is easy to miss that both components carry it.",
      "Oat flour 20 g a serving, comfortably inside. All three dairies lactose-free.",
      "PrebioSweet swapped in all three components."
    ]
  },

  {
    id: "pistachio-style-raspberry-cake",
    title: "Pistachio-Style Raspberry Cake",
    category: "Desserts",
    time: 70,
    servings: 8,
    tags: ["high-protein", "low-fat", "vegetarian", "gluten-free"],
    image: "images/pistachio-style-raspberry-cake.jpg",
    ingredients: [
      { heading: "Sponge" },
      { item: "200 ml liquid egg whites + 1 whole egg (~52 g)" },
      { item: "20 ml lactose-free milk", note: "or water" },
      { item: "50 g gluten-free oat flour" },
      { item: "15 g white rice flour" },
      { item: "15 g psyllium husk" },
      { item: "35 g lactose-free skim milk powder", note: "or extra rice flour" },
      { item: "25 g pumpkin seed or almond flour", note: "★ replaces pistachio flour — see notes" },
      { item: "8 g baking powder" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet" },
      { item: "1 g vanillin · pinch of salt" },
      { item: "10 drops green food colouring", note: "or ½ tsp matcha" },
      { heading: "Raspberry confiture" },
      { item: "60 g frozen raspberries" },
      { item: "3 g cornflour + 15 ml water" },
      { item: "Erythritol or stevia to taste" },
      { heading: "Cream & assembly" },
      { item: "120 g lactose-free cream cheese" },
      { item: "240 g lactose-free soft cottage cheese", note: "or thick lactose-free Greek yoghurt" },
      { item: "15 g pumpkin seed or almond butter", note: "or finely chopped pumpkin seeds" },
      { item: "Erythritol or stevia to taste · 1 g vanillin" }
    ],
    steps: [
      "Put all the sponge ingredients in a blender and blend 30–40 seconds until smooth. Pour into a 16 cm silicone mould and bake at 180 °C for 40–45 minutes until firm. Cool completely.",
      "Heat the raspberries with sweetener until simmering, stir in the cornflour slurry, and simmer 1 minute until thickened. Cool completely.",
      "Blend the cream cheese, cottage cheese, seed or nut butter, sweetener and vanillin until smooth.",
      "Slice the cooled sponge into 3 layers and blitz the domed top layer into fine crumbs for coating.",
      "Lay down the first layer, spread cream over it, pipe a ring of cream around the edge and fill the centre with the confiture. Add the second sponge layer.",
      "Cover the top and sides with the remaining cream and press the crumbs all over.",
      "Chill 3–4 hours, or overnight, to set."
    ],
    nutrition: { serveWeight: 98, kcal: 132, protein: 12.3, carbs: 9.7, fat: 4.9 },
    lfmNotes: [
      "Swapping pistachio flour for pumpkin seed or almond flour was essential, and you got there yourself. Pistachios and cashews are the two nuts with no safe serve at all — GOS plus fructans.",
      "Take the 8 servings rather than the half-cake option. Half a cake puts 7.5 g of psyllium in you in one sitting; at 8 slices it is under 2 g. Psyllium is not a FODMAP, but that much fibre at once will make itself known.",
      "Everything else is generous at 8 slices: oat flour 6 g, raspberries 7.5 g, almond flour 3 g, cream cheese 15 g.",
      "PrebioSweet swapped in all three components. Milk powder must be the lactose-free kind.",
      "Matcha rather than food colouring is the nicer choice if you have it — and it is FODMAP-free."
    ]
  },

  {
    id: "chicken-pastrami",
    title: "Chicken Pastrami",
    category: "Snacks",
    time: 30,
    servings: 5,
    tags: ["high-protein", "low-fat", "gluten-free", "meal-prep", "one-pan"],
    image: "images/chicken-pastrami.jpg",
    ingredients: [
      { heading: "Brine" },
      { item: "590 g raw chicken breast", note: "2 fillets" },
      { item: "500 ml cold water" },
      { item: "20–25 g salt" },
      { heading: "Marinade" },
      { item: "5 ml garlic-infused oil", note: "or plain vegetable oil" },
      { item: "Black pepper, smoked paprika, herbes de Provence", note: "to taste" },
      { item: "A tiny pinch of asafoetida", note: "optional — buy the gluten-free kind, see notes" }
    ],
    steps: [
      "Dissolve the salt completely in the cold water. Rinse the chicken, submerge it, and refrigerate 2–3 hours or overnight — the brine breaks down the protein structure and is what makes it juicy.",
      "Heat the oven as high as it goes, 200–220 °C.",
      "Lift the breasts out and pat them thoroughly dry. Mix the oil and spices into a paste and rub it all over.",
      "Tie each fillet tightly with kitchen twine or pure cotton string into a compact shape so it cooks evenly. Put them on a lined baking sheet.",
      "Bake exactly 15 minutes at 200–220 °C — 12 if the breasts are on the small side.",
      "Turn the oven off immediately and do not open the door. Leave them inside the cooling oven 2–3 hours, until completely cool. This step is the whole recipe.",
      "Remove the string and chill a couple of hours before slicing into thin ribbons.",
      "Air fryer: preheat the empty basket at 200 °C for 5 minutes, cook the tied fillets 12–15 minutes, then leave them sealed inside the switched-off unit for 2 hours."
    ],
    nutrition: { serveWeight: 100, kcal: 141, protein: 27.0, carbs: 0.0, fat: 2.5 },
    lfmNotes: [
      "Check the asafoetida packet. It is the best onion substitute there is, but most commercial hing is bulked out with wheat flour — buy a gluten-free one or it undoes the point.",
      "Same warning as the vegetable roll on herbes de Provence: the traditional blend is clean, supermarket versions sometimes contain garlic.",
      "Salt, pepper, paprika and garlic-infused oil are all free. This dish has no FODMAPs at all.",
      "2.5 g of fat per 100 g. The leanest thing in the book, and a far better sandwich filling than any shop-bought deli meat — those are almost always cured with garlic and onion."
    ]
  },

  {
    id: "japanese-cotton-cheesecake",
    title: "Japanese Cotton Cheesecake",
    category: "Desserts",
    time: 80,
    servings: 4,
    tags: ["high-protein", "low-fat", "vegetarian", "gluten-free"],
    image: "images/japanese-cotton-cheesecake.jpg",
    ingredients: [
      { item: "350 g lactose-free Greek yoghurt 2%" },
      { item: "4 eggs (~200 g), separated" },
      { item: "50 g rice flour", note: "or a 1:1 GF blend" },
      { item: "15 g cornflour" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet" },
      { item: "2 g vanillin" },
      { item: "A pinch of citric acid" },
      { item: "Powdered erythritol, to dust", note: "optional" }
    ],
    steps: [
      "Heat the oven to 140 °C.",
      "Whisk the yolks with the yoghurt until smooth. Sift in the rice flour, cornflour and vanillin and whisk again, then add the sweetener and mix until completely lump-free.",
      "In a clean bowl, add the citric acid to the egg whites and whip to stiff peaks.",
      "Fold the whites into the yolk mixture in three batches, moving the spatula bottom to top so you keep the air in.",
      "Pour into a parchment-lined 19 cm tin and stand it on a baking tray holding about 1 cm of warm water. Bake at 140 °C for 60 minutes.",
      "Turn the oven off, crack the door, and leave it inside 20 minutes. Cool completely at room temperature, then refrigerate overnight to set. Dust with powdered erythritol to serve."
    ],
    nutrition: { serveWeight: 155, kcal: 192, protein: 15.2, carbs: 15.7, fat: 7.2 },
    lfmNotes: [
      "Nothing here needed changing but the sweetener. Rice flour and cornflour have no portion limits, the yoghurt is lactose-free, and eggs and citric acid are free — so this is one of the cleanest recipes in the book.",
      "PrebioSweet swapped for erythritol or stevia. Powdered erythritol is right for the dusting; icing sugar would not be.",
      "Because there is no bran or oat flour, you can have two slices without doing any arithmetic."
    ]
  },

  {
    id: "vegetable-roll",
    title: "Vegetable Roll",
    category: "Lunch",
    time: 45,
    servings: 2,
    tags: ["high-protein", "gluten-free", "meal-prep"],
    image: "images/vegetable-roll.jpg",
    ingredients: [
      { heading: "Vegetable sheet" },
      { item: "130 g zucchini", note: "grated and squeezed dry" },
      { item: "200 g carrot, grated" },
      { item: "220 g potato, grated", note: "replaces the excess zucchini" },
      { item: "2 eggs (~100 g)" },
      { item: "50 g light hard cheese, grated" },
      { item: "Salt, black pepper, herbes de Provence" },
      { heading: "Filling" },
      { item: "80 g lactose-free cream cheese" },
      { item: "100 g cooked chicken breast", note: "seasoned with salt and herbs" },
      { item: "A handful of iceberg lettuce or baby spinach" }
    ],
    steps: [
      "Coarsely grate the zucchini, carrot and potato. Squeeze out as much liquid as you can through a sieve or cheesecloth — the zucchini especially.",
      "Combine the squeezed vegetables with the grated cheese, eggs, salt, pepper and herbs.",
      "Spread evenly into a rectangle on siliconised parchment and bake at 180 °C for 25–30 minutes, until golden on top. Cool slightly.",
      "Invert the sheet onto fresh parchment and gently peel the baking paper away.",
      "Spread the cream cheese over the surface, layer the lettuce or spinach across it, and lay the chicken slices along one edge.",
      "Roll tightly, using the parchment to guide it. Slice and serve, or chill to set first."
    ],
    nutrition: { serveWeight: 430, kcal: 383.5, protein: 32.0, carbs: 25.55, fat: 17.75 },
    lfmNotes: [
      "You cut the zucchini to 130 g and made up the bulk with potato — that lands at exactly 65 g a serving, right on the safe serve. Precisely the fix the zucchini waffles needed.",
      "Carrot has no detectable FODMAPs, so 100 g a serving is free. Potato is always safe. Between them they carry this dish.",
      "Hard cheese 25 g a serving and lactose-free cream cheese 40 g — both inside their limits.",
      "Check the herbes de Provence jar. The traditional blend is just thyme, rosemary, savory, oregano and marjoram, but supermarket versions sometimes slip garlic in.",
      "17.75 g of fat a serving, the highest of the savoury dishes — it is the two cheeses and the eggs. A lower-fat cream cheese would take a few grams off without changing the roll."
    ]
  },

  {
    id: "waffle-rolls",
    title: "Waffle Rolls",
    category: "Snacks",
    time: 25,
    servings: 5,
    tags: ["quick", "high-protein", "low-fat", "vegetarian", "gluten-free", "meal-prep"],
    image: "images/waffle-rolls.jpg",
    ingredients: [
      { item: "400 g lactose-free cottage cheese 5%", note: "dry and well drained" },
      { item: "1 egg (~50 g)" },
      { item: "80 g rice flour", note: "or a gluten-free blend" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet" },
      { item: "1 g caramel or vanilla extract" },
      { item: "5 g baking powder" },
      { item: "Lactose-free condensed milk or caramel", note: "15–20 g per roll — or the Salted Caramel Sauce from Sauces & Basics" }
    ],
    steps: [
      "Mix the cottage cheese, egg, rice flour, sweetener, vanilla and baking powder thoroughly into a thick smooth dough — about the consistency of thick sour cream.",
      "Heat a contact grill or waffle maker to 230 °C until the indicator goes green, and brush the plates lightly with oil.",
      "Spoon portions of dough onto the hot plates, close, and bake 2–4 minutes. Do not open early — under 2–3 minutes and they tear. Longer gives you a crunchier waffle.",
      "Put a spoonful of condensed milk or caramel onto each waffle straight off the heat and roll it tightly into a tube while it is still hot."
    ],
    nutrition: { serveWeight: 112, kcal: 171, protein: 16.0, carbs: 15.0, fat: 5.0 },
    lfmNotes: [
      "Macros are for an unfilled roll, as you gave them. The filling adds roughly 25–50 kcal a roll depending on what you use.",
      "Rice flour has no portion limit, and the cottage cheese here is both your exception and lactose-free — so these are unusually relaxed for a bake.",
      "16 g of protein in a hand-held roll. Good for taking out with you.",
      "PrebioSweet swapped for erythritol or stevia."
    ]
  },

  {
    id: "sancho-pancho-cake",
    title: "Sancho Pancho Cake",
    category: "Desserts",
    time: 80,
    servings: 4,
    tags: ["high-protein", "vegetarian", "gluten-free"],
    image: "images/sancho-pancho-cake.jpg",
    ingredients: [
      { heading: "Sponge base" },
      { item: "100 g firm banana", note: "slightly green" },
      { item: "1 whole egg (~48 g) + 80 ml egg whites" },
      { item: "35 g gluten-free oat flour" },
      { item: "15 g rice flour" },
      { item: "14 g low-fat cocoa powder" },
      { item: "10 g baking powder" },
      { item: "Erythritol or stevia to taste · 1 g vanilla extract", note: "not PrebioSweet" },
      { heading: "Custard cream" },
      { item: "300 ml lactose-free milk 1.5%" },
      { item: "2 egg yolks (~32 g)" },
      { item: "10 g cornflour" },
      { item: "40 g lactose-free micellar casein" },
      { item: "120 g lactose-free light ricotta" },
      { item: "Erythritol or stevia to taste · 1 g vanilla extract" },
      { heading: "Filling" },
      { item: "190 g canned pineapple in juice, drained" },
      { item: "25 g walnuts" },
      { heading: "Frosting & decoration" },
      { item: "100 g lactose-free cottage cheese 5%" },
      { item: "125 g lactose-free soft tvorog 0%" },
      { item: "Erythritol or stevia to taste" },
      { item: "20 g dark chocolate 85%+" },
      { item: "5 g walnuts" }
    ],
    steps: [
      "Blend the banana, egg, egg whites, both flours, cocoa, baking powder, sweetener and vanilla until smooth. Rest the batter 5 minutes.",
      "Pour into a 16 cm round silicone mould and bake at 180 °C for 45–50 minutes. Turn the oven off and cool completely inside.",
      "For the custard, whisk the milk, yolks, cornflour, casein, sweetener and vanilla over low heat until thickened. Cool completely, then blend in the ricotta.",
      "Slice the cooled sponge into 3 layers. Keep one whole as the base and dice the other two into small cubes.",
      "Spread custard on the base. Toss the sponge cubes, diced pineapple and chopped walnuts through the remaining cream and pile it into a mound. Wrap in cling film and chill 4 hours or overnight.",
      "Blend the cottage cheese, tvorog and sweetener until smooth. Unwrap, frost the outside, drizzle with melted dark chocolate and finish with walnuts."
    ],
    nutrition: { serveWeight: 300, kcal: 391, protein: 31.0, carbs: 35.2, fat: 15.0 },
    lfmNotes: [
      "You had already made the swaps I would have: oat bran flour to oat flour, corn bran to rice flour. Nothing left to change there.",
      "Everything sits well inside its limit — walnuts 7.5 g a serving against 30 g, pineapple 47.5 g, oat flour 8.75 g, banana 25 g, chocolate 5 g.",
      "Casein must be the lactose-free kind, and all four dairies here are.",
      "PrebioSweet swapped in all three places."
    ]
  },

  {
    id: "snickers-quick-dessert",
    title: "5-Minute Snickers Dessert",
    category: "Desserts",
    time: 10,
    servings: 2,
    tags: ["quick", "high-protein", "vegetarian", "gluten-free", "meal-prep"],
    image: "images/snickers-quick-dessert.jpg",
    ingredients: [
      { heading: "Sponge base" },
      { item: "100 g firm banana", note: "slightly green" },
      { item: "1 egg (~50 g)" },
      { item: "20 g low-fat cocoa powder" },
      { item: "4 g baking powder" },
      { item: "Liquid stevia to taste", note: "not PrebioSweet" },
      { item: "1 g vanilla extract · pinch of salt" },
      { heading: "Cream layer" },
      { item: "235 g lactose-free Greek yoghurt 2%" },
      { item: "30 g lactose-free protein powder", note: "chocolate, vanilla or peanut" },
      { item: "4 drops caramel stevia or FitParad" },
      { heading: "Topping" },
      { item: "30 g natural peanut butter", note: "replaces Biscoff spread" },
      { item: "10 g roasted peanuts" }
    ],
    steps: [
      "Mash the banana with a fork in a microwave-safe dish. Add the egg, cocoa, baking powder, sweetener, vanilla and salt, and mix thoroughly until smooth.",
      "Microwave on high for 4 minutes. Cool slightly.",
      "Whisk the yoghurt, protein powder and caramel sweetener until smooth.",
      "Poke holes in the cooled sponge with a fork so the cream soaks in, then pour the cream over evenly.",
      "Melt the peanut butter for 10–15 seconds, drizzle it over, and scatter the peanuts.",
      "Chill 1–2 hours, or overnight, before serving."
    ],
    nutrition: { serveWeight: 274, kcal: 383, protein: 28.8, carbs: 35.8, fat: 14.9 },
    lfmNotes: [
      "Swapping Biscoff for peanut butter was the right call — Biscoff is wheat flour plus glucose-fructose syrup, so it fails on two counts.",
      "Banana 50 g a serving, peanut butter 15 g, peanuts 5 g. All comfortably inside.",
      "Protein powder must be lactose-free isolate with no added inulin.",
      "Ten minutes and 28.8 g of protein. The fastest thing in the book by a distance."
    ]
  },

  {
    id: "twix-cake",
    title: "Twix Cake",
    category: "Desserts",
    time: 90,
    servings: 4,
    tags: ["high-protein", "vegetarian", "gluten-free"],
    image: "images/twix-cake.jpg",
    ingredients: [
      { heading: "Shortcrust" },
      { item: "75 g rice flour", note: "or corn flour" },
      { item: "60 g lactose-free micellar casein", note: "or extra rice flour" },
      { item: "30 g softened butter 72.5%" },
      { item: "70 g lactose-free soft tvorog 0%" },
      { item: "1 egg (~53 g)" },
      { item: "80 ml cold water" },
      { item: "4 g baking powder" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet" },
      { item: "1 g caramel vanilla · pinch of salt" },
      { heading: "Fit caramel" },
      { item: "50 g lactose-free skimmed milk powder" },
      { item: "220 ml lactose-free milk 1.5%" },
      { item: "10 g cornflour" },
      { item: "7 g gelatin + 35 ml water" },
      { item: "Erythritol or stevia to taste" },
      { item: "1 g caramel vanilla · ⅓ tsp salt" },
      { heading: "Chocolate ganache" },
      { item: "50 g dark chocolate 85%+" },
      { item: "25 ml lactose-free milk 1.5%" },
      { item: "190 g lactose-free light ricotta" },
      { item: "90 g lactose-free soft tvorog 0%" },
      { item: "10 g low-fat cocoa powder" },
      { item: "Erythritol or stevia to taste" }
    ],
    steps: [
      "Rub the softened butter into the rice flour, casein and sweetener. Mix in the egg, tvorog, baking powder, vanilla and salt, then add the cold water gradually until you have a pliable dough. Wrap and chill 40–50 minutes.",
      "Roll out to 4–5 mm on parchment, prick all over with a fork, and bake at 180 °C for 10–12 minutes until golden. Cut 2–3 circles of 16 cm while it is still hot, and blitz the trimmings into crumbs.",
      "For the caramel, toast the milk powder in a dry pan until it turns caramel-coloured. Whisk in the cornflour, sweetener, vanilla, salt and milk, and cook on low until it thickens to condensed-milk consistency. Blend with the bloomed gelatin until smooth and runny, like liquid toffee.",
      "For the ganache, melt the chocolate in the hot milk, then blend smooth with the room-temperature ricotta, tvorog, cocoa and sweetener. Chill 20 minutes.",
      "In a pastry ring, build: crust, a ganache border with caramel in the centre, crust, ganache border, caramel. Chill 4 hours to set.",
      "Frost the outside with the reserved ganache and cover completely in the shortcrust crumbs."
    ],
    nutrition: { serveWeight: 228, kcal: 404, protein: 33.0, carbs: 35.0, fat: 15.0 },
    lfmNotes: [
      "Rice flour rather than oat flour, so no need to cut this into 8 — 4 portions is fine here.",
      "Lactose-free milk powder is doing the caramel work. Ordinary milk powder would be a lot of concentrated lactose in one place, so this substitution matters more than it looks.",
      "Dark chocolate at 12.5 g a portion, under the 30 g limit. Butter is only trace lactose.",
      "PrebioSweet swapped in all three components.",
      "15 g of fat a portion, from the butter and chocolate. On the higher side for this book, though it is still a Twix cake at 404 kcal with 33 g of protein."
    ]
  },

  {
    id: "chocolate-banana-muffins",
    title: "Chocolate Banana Muffins",
    category: "Breakfast",
    time: 50,
    servings: 4,
    tags: ["vegetarian", "low-fat", "gluten-free", "meal-prep", "kid-friendly"],
    image: "images/chocolate-banana-muffins.jpg",
    ingredients: [
      { heading: "Batter" },
      { item: "2 firm bananas (~164 g)", note: "slightly green" },
      { item: "1 whole egg + 50 ml egg whites" },
      { item: "100 ml lactose-free milk", note: "or unsweetened almond milk" },
      { item: "100 g gluten-free oat flour" },
      { item: "10 g low-fat cocoa powder" },
      { item: "10 g natural peanut butter" },
      { item: "5 g baking powder" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet" },
      { item: "1 g caramel vanilla · pinch of salt" },
      { heading: "Swirl topping" },
      { item: "15 g natural peanut butter" },
      { item: "15 ml lactose-free milk 1.5%" }
    ],
    steps: [
      "Blend the milk, egg, egg whites and bananas until smooth. Add the oat flour, cocoa, 10 g of peanut butter, baking powder, sweetener, vanilla and salt, and mix to a smooth batter.",
      "Divide between 4 muffin moulds, filling each about three-quarters.",
      "Whisk the 15 g of peanut butter with the 15 ml of milk, spoon over the muffins and swirl with a toothpick.",
      "Bake at 180 °C for 35–40 minutes. Turn the oven off, crack the door, and let them cool inside so they do not deflate."
    ],
    nutrition: { serveWeight: 130, kcal: 207, protein: 8.9, carbs: 32.0, fat: 5.0 },
    lfmNotes: [
      "One at a time on these. The oat flour works out at 25 g a muffin, which is inside its ~30 g limit — but two in a sitting is 50 g and over. The banana is fine either way at 41 g each.",
      "Firm bananas only. Peanut butter is safe and there is only 6 g a muffin here.",
      "PrebioSweet swapped for erythritol or stevia."
    ]
  },

  {
    id: "chocolate-medovik",
    title: "Chocolate Medovik",
    category: "Desserts",
    time: 60,
    servings: 8,
    tags: ["high-protein", "low-fat", "vegetarian", "gluten-free"],
    image: "images/chocolate-medovik.jpg",
    ingredients: [
      { heading: "Sponge" },
      { item: "180 g gluten-free oat flour" },
      { item: "40 g lactose-free micellar casein", note: "or extra oat flour" },
      { item: "35 g low-fat cocoa powder" },
      { item: "4 eggs" },
      { item: "300 g lactose-free soft tvorog 0%" },
      { item: "120 g pure maple syrup", note: "replaces the honey" },
      { item: "60 ml water" },
      { item: "10 g bicarbonate of soda · 5 g baking powder" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet" },
      { item: "1 g caramel vanilla · pinch of salt" },
      { heading: "Cream & filling" },
      { item: "664 g lactose-free light ricotta" },
      { item: "50 g chocolate protein powder", note: "low FODMAP isolate" },
      { item: "30 g low-fat cocoa powder" },
      { item: "Erythritol or stevia to taste · 1 g caramel vanilla" },
      { item: "75 g lactose-free condensed milk", note: "or the Salted Caramel Sauce from Sauces & Basics" }
    ],
    steps: [
      "Mix the dry ingredients: oat flour, casein, cocoa, baking powder, sweetener, vanilla and salt.",
      "In another bowl whisk the eggs, warmed maple syrup, tvorog, water and bicarbonate. Combine the two into a thick batter.",
      "Bake on parchment at 180 °C for 20–25 minutes. Cool completely.",
      "Mix the ricotta, protein powder, cocoa, sweetener and vanilla until smooth.",
      "Trim the sponge edges — blitz them into crumbs — and cut into 4 layers. Build: sponge, cream with a small well pressed into it, condensed milk in the well, sponge.",
      "Frost the outside with the remaining cream, coat in the crumbs, and chill overnight."
    ],
    nutrition: { serveWeight: 217, kcal: 296, protein: 29.0, carbs: 27.0, fat: 8.5 },
    lfmNotes: [
      "8 slices, not 4 — the third cake in a row where this matters. At 4 portions the oat flour reaches 45 g a serving, well over its ~30 g limit. At 8 it is 22.5 g. Macros above are the 8-slice figures.",
      "Maple at 15 g a slice, comfortably inside the 40 g limit.",
      "Micellar casein must be the lactose-free kind. Same for the chocolate protein powder — isolate, no added inulin.",
      "PrebioSweet swapped in both places.",
      "29 g of protein a slice. This is the highest-protein cake in the book."
    ],
    adaptedFrom: "Chocolate honey cake — honey replaced with maple syrup. Renamed Chocolate Medovik so the book does not list a honey cake, and so it sits alongside the strawberry and blueberry versions."
  },

  {
    id: "snickers-cake",
    title: "Snickers Cake",
    category: "Desserts",
    time: 80,
    servings: 8,
    tags: ["high-protein", "low-fat", "vegetarian", "gluten-free"],
    image: "images/snickers-cake.jpg",
    ingredients: [
      { heading: "Sponge" },
      { item: "2 firm bananas (~209 g)", note: "slightly green" },
      { item: "120 ml egg whites + 1 whole egg" },
      { item: "105 ml lactose-free kefir 2.5%" },
      { item: "40 g defatted peanut flour" },
      { item: "55 g gluten-free oat bran", note: "in place of corn bran — see notes" },
      { item: "12 g cocoa powder" },
      { item: "10 g baking powder" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet" },
      { item: "1 g vanilla extract · pinch of salt" },
      { heading: "Cream" },
      { item: "300 g lactose-free light ricotta" },
      { item: "230 g lactose-free Greek yoghurt 2%" },
      { item: "33 g chocolate or caramel protein powder", note: "low FODMAP isolate" },
      { item: "5 g gelatin + 20 ml water" },
      { item: "Erythritol or stevia to taste" },
      { heading: "Filling & garnish" },
      { item: "30 g roasted salted peanuts" },
      { item: "45 g lactose-free condensed milk", note: "or the Salted Caramel Sauce from Sauces & Basics" },
      { item: "Lactose-free milk + PB2 glaze" },
      { item: "85%+ dark chocolate, shaved · extra peanuts" }
    ],
    steps: [
      "Blend all the sponge ingredients for 40 seconds until smooth. Pour into a 16 cm tin and bake at 180 °C for 50 minutes.",
      "Cool it inside the oven, then chill overnight before slicing into 2 layers.",
      "Bloom the gelatin in 20 ml water and melt it in 5-second microwave bursts. Whisk into the ricotta, yoghurt, protein powder and sweetener.",
      "Mix the peanuts with the condensed milk.",
      "In a springform ring, build: sponge, cream, peanut-caramel centre, sponge, cream. Chill 4 hours to set.",
      "Remove the ring, frost the outside with the last third of the cream, and finish with the glaze and chocolate shavings."
    ],
    nutrition: { serveWeight: 150, kcal: 190, protein: 17.3, carbs: 17.7, fat: 6.4 },
    lfmNotes: [
      "Macros are for 8 standard slices, not the 4 large portions. Same reason as the blueberry medovik: at 4 portions the bran lands at about 14 g a serving, just over the oat bran limit. At 8 it is 7 g.",
      "Corn bran swapped for the oat bran you offered as the alternative — corn bran has never been FODMAP tested.",
      "The Snickers bars in your photo are not in the recipe. Shop bars are milk chocolate and glucose syrup — lactose plus likely excess fructose. Your written garnish (PB2 glaze, 85% chocolate, peanuts) is the compliant version.",
      "Bananas 26 g a slice, peanuts under 4 g. Both trivial. Peanuts are one of the safe nuts.",
      "PrebioSweet swapped in both places."
    ]
  },

  {
    id: "blueberry-medovik",
    title: "Blueberry Medovik",
    category: "Desserts",
    time: 60,
    servings: 8,
    tags: ["high-protein", "low-fat", "vegetarian", "gluten-free"],
    image: "images/blueberry-medovik.jpg",
    ingredients: [
      { heading: "Sponge layers" },
      { item: "3 eggs" },
      { item: "135 g pure maple syrup", note: "replaces the honey" },
      { item: "165 g lactose-free Greek yoghurt 2%" },
      { item: "200 g gluten-free oat flour" },
      { item: "9 g bicarbonate of soda" },
      { heading: "Berry confiture" },
      { item: "115 g frozen blueberries" },
      { item: "100 g fresh strawberries, chopped" },
      { item: "17 g cornflour + 20 ml water" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet" },
      { heading: "Cream" },
      { item: "500 g lactose-free light ricotta" },
      { item: "200 g lactose-free Greek yoghurt 2%" },
      { item: "25 g defatted peanut powder (PB2)" },
      { item: "2 g caramel vanilla" },
      { item: "Erythritol or stevia to taste" }
    ],
    steps: [
      "Lightly beat the eggs, then stir in the warmed maple syrup, bicarbonate, yoghurt and oat flour until you have a smooth batter.",
      "Spread onto parchment and bake at 180 °C for 15–20 minutes, until golden caramel. Cool completely.",
      "Simmer the berries with sweetener. Stir the cornflour into 20 ml water, pour it in, and stir 1 minute until thickened. Cool.",
      "Mix the ricotta, yoghurt, peanut powder, vanilla and sweetener until smooth.",
      "Trim the sponge edges — blitz the trimmings into crumbs — and divide into 4 layers. Build: sponge, cream, confiture, sponge.",
      "Coat the outside with the remaining cream, press the crumbs all over, and chill overnight."
    ],
    nutrition: { serveWeight: 204, kcal: 261, protein: 17.5, carbs: 33.5, fat: 7.5 },
    lfmNotes: [
      "Cut this into 8, not 4. At 4 large portions the oat flour works out at 50 g a serving, over its ~30 g limit; at 8 slices it is 25 g and comfortably inside. Your macros above are the 8-slice figures.",
      "The maple is fine here — 17 g a slice against a 40 g limit. Much easier than the strawberry medovik, which sits right on the line.",
      "Blueberries 14 g a slice and strawberries 12.5 g. Both well under.",
      "PrebioSweet swapped in both places. PB2 is peanut, which is safe."
    ],
    adaptedFrom: "Honey medovik — honey replaced with maple syrup, which is the low FODMAP equivalent. Titled Blueberry Medovik so it does not sit in the book promising honey, and so it is distinct from the Strawberry Medovik."
  },

  {
    id: "lemon-cake",
    title: "Lemon Cake",
    category: "Desserts",
    time: 40,
    servings: 4,
    tags: ["quick", "high-protein", "low-fat", "vegetarian", "gluten-free"],
    image: "images/lemon-cake.jpg",
    ingredients: [
      { heading: "Sponge" },
      { item: "2 eggs" },
      { item: "80 g lactose-free Greek yoghurt 2%" },
      { item: "15 ml lemon juice · 1 tsp lemon zest" },
      { item: "80 g rice flour" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet" },
      { item: "5 g baking powder" },
      { heading: "Cream & topping" },
      { item: "125 g lactose-free soft tvorog 0%" },
      { item: "9 g defatted peanut powder (PB2)" },
      { item: "2 drops caramel liquid sweetener", note: "e.g. FitParad" },
      { item: "1 tsp lemon zest" },
      { item: "6 g maple-coated pecans", note: "to garnish" }
    ],
    steps: [
      "Whisk the eggs, yoghurt, lemon juice and 1 tsp of zest until smooth. Stir in the rice flour, baking powder and sweetener.",
      "Pour into a 14 cm tin and bake at 180 °C for 25–30 minutes. Cool completely.",
      "Mix the tvorog, peanut powder, caramel drops and the second teaspoon of zest until smooth.",
      "Spread the cream over the cooled sponge and top with the chopped maple pecans."
    ],
    nutrition: { serveWeight: 80, kcal: 163, protein: 11.3, carbs: 17.3, fat: 5.0 },
    lfmNotes: [
      "Rice flour has no portion limit, which makes this one of the more forgiving sponges in the book.",
      "Pecans at 1.5 g a slice — nothing. Pecans are safe to about 20 g anyway.",
      "Lemon juice and zest are both free. PB2 is peanut, which is one of the safe nuts.",
      "PrebioSweet swapped for erythritol or stevia."
    ]
  },

  {
    id: "banana-chocolate-cake",
    title: "Banana Chocolate Cake",
    category: "Desserts",
    time: 50,
    servings: 6,
    tags: ["quick", "vegetarian", "low-fat", "gluten-free", "kid-friendly"],
    image: "images/banana-chocolate-cake.jpg",
    ingredients: [
      { item: "300 g firm bananas, mashed", note: "unripe or slightly green" },
      { item: "2 large eggs (~100 g)" },
      { item: "160 g gluten-free 1-to-1 baking flour" },
      { item: "6 g baking powder" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet" },
      { item: "1 g caramel or vanilla extract" },
      { item: "30 g dark chocolate 85%+, chopped" },
      { item: "15 g flaked almonds", note: "for the top" }
    ],
    steps: [
      "Mash the bananas with a fork, then whisk in the eggs, flour, baking powder, sweetener and vanilla until smooth.",
      "Fold in the chopped chocolate. Pour into a 16 cm tin and scatter the flaked almonds over the top.",
      "Bake at 180 °C for 40 minutes, in the oven or an air fryer. Cool before slicing."
    ],
    nutrition: { serveWeight: 102, kcal: 172, protein: 4.8, carbs: 27.2, fat: 4.9 },
    lfmNotes: [
      "50 g of banana a slice — half the limit, so two slices is still fine. Firm bananas only; ripe ones turn starch into fructans.",
      "Almonds at 2.5 g a slice and chocolate at 5 g. Both trivial.",
      "PrebioSweet swapped for erythritol or stevia."
    ]
  },

  {
    id: "pineapple-zapekanka",
    title: "Pineapple Zapekanka",
    category: "Breakfast",
    time: 60,
    servings: 4,
    tags: ["high-protein", "low-fat", "vegetarian", "gluten-free", "meal-prep"],
    image: "images/pineapple-zapekanka.jpg",
    ingredients: [
      { item: "650 g lactose-free tvorog 5%" },
      { item: "200 g lactose-free fat-free tvorog" },
      { item: "3 eggs" },
      { item: "100 g fine cornmeal", note: "or gluten-free oat flour" },
      { item: "200 g canned pineapple in juice", note: "drained and chopped" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet" },
      { item: "2 g caramel or vanilla extract" }
    ],
    steps: [
      "Whisk the tvorog and eggs together in a large bowl. Add the cornmeal, sweetener and vanilla, then blend with an immersion blender until completely smooth and lump-free.",
      "Fold in the drained pineapple and pour into a lined or greased 18 cm baking dish.",
      "Bake at 180 °C for 45 minutes. Turn the oven off and let it cool completely inside.",
      "Refrigerate overnight — that is what gives it the firm sliceable texture."
    ],
    nutrition: { serveWeight: 330, kcal: 386, protein: 45.3, carbs: 27.0, fat: 10.8 },
    lfmNotes: [
      "Canned pineapple in juice at 50 g a serving is comfortably inside the limit. Drain it properly — the syrup versions are a different matter.",
      "Both tvorogs lactose-free, and the whole thing leans on your cottage cheese exception.",
      "PrebioSweet swapped for erythritol or stevia. Cornmeal has no limit."
    ]
  },

  {
    id: "vatrushki-tarts",
    title: "High-Protein Vatrushki Tarts",
    category: "Desserts",
    time: 60,
    servings: 8,
    tags: ["high-protein", "low-fat", "vegetarian", "gluten-free", "meal-prep"],
    image: "images/vatrushki-tarts.jpg",
    ingredients: [
      { heading: "Crust base" },
      { item: "350 g lactose-free tvorog 5%" },
      { item: "120 g gluten-free 1-to-1 baking flour" },
      { item: "60 g vanilla protein powder", note: "low FODMAP isolate" },
      { item: "1 egg" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet" },
      { item: "1 g caramel or vanilla extract · pinch of salt" },
      { heading: "Cream filling" },
      { item: "250 g lactose-free tvorog 5%" },
      { item: "200 g lactose-free Greek yoghurt 2%" },
      { item: "1 egg" },
      { item: "Erythritol or stevia to taste" },
      { item: "1 g caramel or vanilla extract" }
    ],
    steps: [
      "Heat the oven to 200 °C. Beat all the base ingredients with a mixer until smooth.",
      "Press the dough evenly into 8 tartlet moulds, using a wet spoon to raise the edges.",
      "Drop the oven to 180 °C and pre-bake the crusts with top heat for 10 minutes, until slightly darkened.",
      "Blend all the filling ingredients until silky smooth and pour into the pre-baked bases.",
      "Bake at 180 °C for 25 minutes, then drop to 150 °C for another 15 until the bases turn chewy and shortbread-like."
    ],
    nutrition: { serveWeight: 135, kcal: 204, protein: 23.1, carbs: 14.0, fat: 6.2 },
    lfmNotes: [
      "Macros are the tracker figures for a 135 g tart, since you flagged those as the precise ones. Your recipe table gave 183 kcal for a lighter tart — both work out to about 150 kcal per 100 g, so they agree; it is only the tart size that differs.",
      "Protein powder must be a low FODMAP isolate. Concentrate carries lactose, and fibre-boosted powders carry inulin.",
      "Tvorog and yoghurt both lactose-free. PrebioSweet swapped in both places."
    ]
  },

  {
    id: "royal-vatrushka",
    title: "Royal Vatrushka",
    category: "Desserts",
    time: 55,
    servings: 4,
    tags: ["high-protein", "low-fat", "vegetarian", "gluten-free", "meal-prep"],
    image: "images/royal-vatrushka.jpg",
    ingredients: [
      { item: "400 g lactose-free high-protein fat-free tvorog", note: "or lactose-free cottage cheese" },
      { item: "3 eggs, separated" },
      { item: "85 g gluten-free 1-to-1 baking flour" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet — split between filling and crumble" },
      { item: "2 g caramel or vanilla extract" }
    ],
    steps: [
      "Heat the oven to 200 °C and line a baking dish with silicone parchment.",
      "Blend the egg whites, tvorog, most of the sweetener and the vanilla until smooth.",
      "Rub the egg yolks, flour and the remaining sweetener together into a coarse crumble.",
      "Press a third to a half of the crumble into the base of the dish. Pour the curd filling over, then scatter the rest of the crumble on top.",
      "Drop the oven to 180 °C and bake 40 minutes. Cool completely — overnight in the fridge is best — before slicing."
    ],
    nutrition: { serveWeight: 130, kcal: 230, protein: 28.0, carbs: 18.0, fat: 4.8 },
    lfmNotes: [
      "28 g of protein per slice at 4.8 g of fat — the best ratio of anything in the book, dessert or otherwise.",
      "Tvorog is your cottage cheese exception doing the heavy lifting again, and this one is lactose-free on top of that.",
      "PrebioSweet swapped for erythritol or stevia. Most of it goes in the filling, a little in the crumble."
    ]
  },

  {
    id: "easter-kulich",
    title: "Easter Kulich",
    category: "Desserts",
    time: 75,
    servings: 4,
    tags: ["vegetarian", "gluten-free"],
    image: "images/easter-kulich.jpg",
    ingredients: [
      { heading: "Kulich batter" },
      { item: "3 eggs, separated" },
      { item: "150 ml lactose-free kefir 1%" },
      { item: "140 g gluten-free 1-to-1 baking flour" },
      { item: "50 g dried cranberries", note: "cranberries not raisins — see notes" },
      { item: "7 g baking powder" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet" },
      { item: "2 g caramel or vanilla extract · pinch of salt" },
      { heading: "Meringue glaze" },
      { item: "30 ml egg white", note: "about 1 white" },
      { item: "Erythritol or stevia to taste" },
      { item: "Pinch of citric acid", note: "or 10 ml fresh lemon juice" },
      { item: "Gluten-free sprinkles" }
    ],
    steps: [
      "Soak the cranberries in boiling water 5–10 minutes, drain thoroughly and pat dry.",
      "Whisk the yolks with the sweetener and kefir. Sift in the flour, baking powder and vanilla, stir to combine, then fold in the dried fruit.",
      "In a clean bowl whip the whites with a pinch of salt to soft peaks. Fold them into the batter in three batches.",
      "Pour into the paper mould (134 × 95 mm) and bake at 180 °C for 45–55 minutes, until a toothpick comes out dry. Turn the oven off, crack the door, and leave it 10 minutes before cooling completely in the mould.",
      "For the glaze, whip the egg white 1.5 minutes, add the citric acid or lemon juice and whip another minute, then add sweetener and whip to stiff glossy peaks — 4–5 minutes in total.",
      "Peel the paper off the cooled kulich, spread the glaze over the top and add the sprinkles."
    ],
    nutrition: { serveWeight: 123, kcal: 206, protein: 7.6, carbs: 33.1, fat: 4.8 },
    lfmNotes: [
      "The dried fruit is the pressure point. Dried cranberry has a tested serve of about 1 tbsp — 9 g — and 50 g across 4 slices gives you 12.5 g each. Slightly over, not dramatically. I have left it as you wrote it because this is a once-a-year cake; drop it to 36 g if you want to be strictly inside.",
      "Do not use the raisin alternative. Raisins are high in fructans and concentrate as they dry, so they are a worse choice than cranberries at the same weight.",
      "Check the cranberry packet. Most dried cranberries are sweetened, and some use apple juice concentrate or HFCS.",
      "PrebioSweet swapped in both places. Sprinkles gluten-free, as you had them.",
      "The glaze uses raw egg white. Pasteurised white works identically if you would rather not."
    ]
  },

  {
    id: "lemon-ricotta-muffins",
    title: "Lemon Ricotta Muffins",
    category: "Breakfast",
    time: 40,
    servings: 4,
    tags: ["quick", "vegetarian", "low-fat", "high-protein", "gluten-free", "meal-prep"],
    image: "images/lemon-ricotta-muffins.jpg",
    ingredients: [
      { item: "250 g lactose-free ricotta" },
      { item: "1 egg (~50 g)" },
      { item: "70 g gluten-free 1-to-1 baking flour" },
      { item: "10 ml fresh lemon juice" },
      { item: "Zest of ½ lemon" },
      { item: "30 g fresh blueberries", note: "about 12 — 3 per muffin" },
      { item: "6 g baking powder" },
      { item: "Powdered erythritol or stevia to taste", note: "not PrebioSweet" },
      { item: "Pinch of salt" }
    ],
    steps: [
      "Whisk the ricotta and egg together until smooth.",
      "Sift in the flour and baking powder, then add the lemon zest, lemon juice, sweetener and salt. Stir thoroughly with a fork until fully combined.",
      "Divide between 4 muffin moulds, filling them three-quarters full, and press 3 blueberries into each top.",
      "Bake at 180 °C for 30–35 minutes. Dust with powdered erythritol before serving, warm or cold."
    ],
    nutrition: { serveWeight: 102, kcal: 141, protein: 9.2, carbs: 15.7, fat: 4.5 },
    lfmNotes: [
      "Blueberries at 7.5 g a muffin — a long way under the 40 g limit, so you could have two of these without worrying.",
      "Lemon juice and zest are both free. Citrus zest carries almost no FODMAPs, which is why it does so much work in this book.",
      "PrebioSweet swapped for powdered erythritol or stevia.",
      "Lactose-free ricotta is essential here. Regular ricotta is one of the higher-lactose cheeses."
    ]
  },

  {
    id: "strawberry-medovik",
    title: "Strawberry Medovik",
    category: "Desserts",
    time: 90,
    servings: 8,
    tags: ["vegetarian", "gluten-free"],
    image: "images/strawberry-medovik.jpg",
    ingredients: [
      { heading: "Cake layers" },
      { item: "270 g gluten-free 1-to-1 baking flour" },
      { item: "3 eggs" },
      { item: "240 ml pure maple syrup", note: "or rice malt syrup — see notes" },
      { item: "35 g ghee, melted" },
      { item: "50 ml beetroot juice", note: "for the pink colour" },
      { item: "40 ml lactose-free milk 1.5%" },
      { item: "15 g baking powder · 1 g salt" },
      { item: "1 g caramel or vanilla extract" },
      { heading: "Pink custard cream" },
      { item: "250 ml canned light coconut milk" },
      { item: "200 g lactose-free Greek yoghurt 2%" },
      { item: "30 ml beetroot juice" },
      { item: "20 g cornflour" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet" },
      { item: "1 g caramel vanilla" },
      { heading: "Fruit layer" },
      { item: "250 g frozen strawberries or raspberries", note: "not cherries — see notes" },
      { item: "20 ml water" },
      { item: "Erythritol or stevia to taste" },
      { item: "3 g agar-agar" },
      { heading: "Frosting & decoration" },
      { item: "200 g lactose-free ricotta" },
      { item: "110 g lactose-free soft cottage cheese 1.5%" },
      { item: "Erythritol or stevia to taste" },
      { item: "Freeze-dried strawberries or raspberries" }
    ],
    steps: [
      "Whisk the eggs with the maple syrup, melted ghee, milk, beetroot juice and vanilla. Sift in the flour, baking powder and salt.",
      "Spread onto a baking sheet lined with silicone parchment and bake at 170 °C for 10–12 minutes. Cool, trim the uneven edges — keep the trimmings for the crumb coating — and cut into 4 equal sheets.",
      "For the cream, whisk the coconut milk, cornflour, sweetener and vanilla in a saucepan over medium heat until it thickens to a pudding. Cool completely, then blend with the yoghurt and 30 ml of beetroot juice until smooth and pink.",
      "For the fruit layer, simmer the frozen fruit with sweetener until soft and blend smooth. Return to the heat, whisk in the agar dissolved in 20 ml water, boil 60 seconds, then pour onto parchment to set as a thin sheet. Cut to match the cake.",
      "Layer: sponge, pink cream, fruit sheet, cream, sponge. Wrap tightly and refrigerate overnight.",
      "Blend the frosting ingredients smooth. Coat the top and sides, press the sponge crumbs all over, and scatter the freeze-dried fruit."
    ],
    nutrition: { serveWeight: 206, kcal: 368, protein: 12.8, carbs: 52.2, fat: 12.0 },
    lfmNotes: [
      "Renamed from Cherry Medovik, and the cherries are out. Cherries carry both excess fructose and sorbitol, and unlike most fruits there is no comfortable small serve — splitting them across 6 portions does not fix it. Strawberries or raspberries give you the same colour and sharpness.",
      "The maple syrup is the thing to watch. 240 ml across 8 servings works out at exactly 30 ml each, which is the ceiling — so this is a one-slice cake, and a second slice takes you over on fructose. It is structural here, holding the layers, so it cannot simply be swapped for stevia.",
      "Beetroot juice is worth knowing about: beetroot is high in fructans and the safe serve is only about 2 slices. 80 ml across 8 servings is roughly 10 ml each, which should be fine, but it is another small deposit in the same account.",
      "PrebioSweet swapped in all three places. Coconut milk at 31 ml a serving is well under its limit.",
      "This is the richest thing in the book — 368 kcal and 52 g of carbs a slice, against 100–250 for everything else. Worth knowing before you cut it."
    ]
  },

  {
    id: "peanut-sponge-cake",
    title: "Peanut Sponge Cake",
    category: "Desserts",
    time: 60,
    servings: 4,
    tags: ["high-protein", "low-fat", "vegetarian", "gluten-free", "meal-prep"],
    image: "images/peanut-sponge-cake.jpg",
    ingredients: [
      { item: "2 firm yellow bananas", note: "about 180 g peeled" },
      { item: "1 whole egg + 125 ml egg whites", note: "3–4 whites" },
      { item: "110 ml lactose-free kefir", note: "or lactose-free yoghurt" },
      { item: "50 g oat bran", note: "or corn bran — see notes" },
      { item: "50 g peanut flour", note: "or PB2 powdered peanut butter" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet" },
      { item: "10 g baking powder" },
      { item: "~1 g caramel vanilla · pinch of salt" },
      { item: "20 g dark chocolate, melted", note: "to drizzle" }
    ],
    steps: [
      "Put all the base ingredients into a blender and process until completely smooth.",
      "Let the batter rest 5 minutes so the bran absorbs the moisture.",
      "Pour into a 16 cm silicone mould and bake at 155–160 °C for about 50 minutes, in the oven or an air fryer.",
      "Cool completely in the mould before turning out. Drizzle with the melted chocolate and cut into 4 generous slices.",
      "Chocolate version: swap the 50 g of peanut flour for 30 g cocoa powder plus 15 g extra bran."
    ],
    nutrition: { serveWeight: 120, kcal: 156, protein: 13.8, carbs: 17.5, fat: 3.2 },
    lfmNotes: [
      "I put oat bran first rather than corn bran. Corn bran has never been FODMAP tested, so it is an unknown rather than a known problem — oat bran is tested and safe. At 50 g across 4 slices you get 12.5 g each, which sits right at the oat bran limit, so do not have two slices back to back.",
      "Peanut flour and PB2 are both fine. Peanuts are one of the safe nuts.",
      "Bananas firm, not brown: 45 g a slice, well under the 100 g limit.",
      "5 g of dark chocolate a slice. PrebioSweet swapped for erythritol or stevia."
    ]
  },

  {
    id: "shrimp-olivier-salad",
    title: "Shrimp Olivier Salad",
    category: "Lunch",
    time: 35,
    servings: 2,
    tags: ["high-protein", "gluten-free", "meal-prep"],
    image: "images/shrimp-olivier-salad.jpg",
    ingredients: [
      { item: "150 g boiled potatoes, peeled and diced" },
      { item: "140 g boiled carrots, peeled and diced" },
      { item: "100 g fresh cucumber, diced" },
      { item: "60 g pickled cucumbers, diced", note: "garlic- and onion-free" },
      { item: "30 g diced edamame", note: "or 30 g canned green peas, rinsed — see notes" },
      { item: "140 g peeled shrimp" },
      { item: "2 hard-boiled eggs, diced" },
      { item: "Green onion tops only, or chives", note: "a small bunch" },
      { item: "Lactose-free Greek yoghurt or garlic-free mayonnaise", note: "yoghurt is the low-fat option" },
      { item: "Salt to taste" },
      { item: "Red caviar", note: "optional garnish" }
    ],
    steps: [
      "Dice the boiled potatoes, boiled carrots, fresh cucumber, pickled cucumbers and eggs into uniform small cubes and put them in a large bowl.",
      "Finely chop the green onion tops and add them with the edamame or rinsed peas.",
      "Pan-fry the shrimp with a drop of oil, 2 minutes a side. Keep 6 whole for the top and chop the rest into the salad.",
      "Dress with the yoghurt or mayonnaise, season with salt and toss gently.",
      "Divide between 2 bowls and finish with the reserved shrimp and caviar."
    ],
    nutrition: { serveWeight: 465, kcal: 390, protein: 39.0, carbs: 24.0, fat: 15.5 },
    lfmNotes: [
      "I cut the peas from 45 g to 30 g. Green peas are high in GOS and fructans, and the safe serve is only about 15 g — 45 g across two bowls put you just over. Edamame is the better swap: it is low FODMAP up to 90 g shelled, so you can be generous with it.",
      "Everything else lands well inside its limit: potato 75 g a serve, cucumber 50 g, pickled cucumber 30 g. Carrot has no detectable FODMAPs.",
      "Green onion tops only — you had this right in the original.",
      "Check the pickle jar and the mayonnaise for garlic and onion. Pickles are one of the sneakiest places they hide.",
      "On the fat: 15.5 g a serving is mostly the dressing. Lactose-free Greek yoghurt instead of mayonnaise takes it down to about 5 g without touching the protein."
    ],
    adaptedFrom: "Peas reduced from 45 g to 30 g and edamame made the first option, to stay under the GOS threshold. Everything else is as you sent it."
  },

  {
    id: "red-velvet-cake",
    title: "Red Velvet Cake",
    category: "Desserts",
    time: 90,
    servings: 12,
    tags: ["high-protein", "low-fat", "vegetarian", "gluten-free"],
    image: "images/red-velvet-cake.jpg",
    ingredients: [
      { heading: "Sponge" },
      { item: "6 egg whites (~198 g)" },
      { item: "3 egg yolks (~51 g)" },
      { item: "210 g lactose-free Greek yoghurt 2%" },
      { item: "120 ml lactose-free milk 1.5%" },
      { item: "170 g gluten-free 1-to-1 flour blend" },
      { item: "40 g cornflour" },
      { item: "20 g cocoa powder" },
      { item: "15 g baking powder · 1 tsp bicarbonate of soda" },
      { item: "10 g apple cider vinegar" },
      { item: "2 tsp red gel food colouring" },
      { item: "Erythritol + stevia", note: "to the sweetness the 18 g of PrebioSweet gave — see notes" },
      { item: "~1 g caramel vanilla · pinch of salt" },
      { heading: "Filling cream" },
      { item: "480 g lactose-free light ricotta" },
      { item: "180 g lactose-free Greek yoghurt 2%" },
      { item: "25 g sponge cake flavour paste", note: "optional" },
      { item: "Erythritol + stevia to taste" },
      { item: "1 packet caramel vanilla" },
      { heading: "Soak" },
      { item: "50 ml lactose-free milk 1.5%" },
      { item: "6 drops liquid caramel sweetener", note: "e.g. FitParad" },
      { heading: "Frosting & decoration" },
      { item: "200 g lactose-free light ricotta" },
      { item: "3 g instant gelatin + 20 ml water" },
      { item: "Erythritol + stevia to taste" },
      { item: "Blueberries, mint leaves, powdered erythritol" }
    ],
    steps: [
      "Whisk the yolks with the yoghurt, milk, food colouring and vinegar. Sift in the flour, cornflour, cocoa, bicarbonate, baking powder and vanilla.",
      "Beat the egg whites with a pinch of salt to stiff peaks, adding the sweetener gradually. Fold the whites into the batter in three stages.",
      "Pour into a foil-lined 18 cm ring and bake at 160 °C for 55–70 minutes, until a toothpick comes out clean. Cool completely, wrap in cling film and chill overnight.",
      "Slice into 3 layers and trim the edges and top — blitz the trimmings into fine red crumbs and keep them.",
      "Blend the filling cream ingredients until smooth. Layer sponge, milk soak and cream inside the ring, then chill overnight again.",
      "Bloom the gelatin in 20 ml water, melt it in the microwave and blend with the 200 g of ricotta and sweetener.",
      "Unmould, smooth the gelatin cream over the outside, coat completely in the red crumbs, and finish with blueberries and mint."
    ],
    nutrition: { serveWeight: 138, kcal: 156, protein: 12.1, carbs: 16.2, fat: 4.5 },
    lfmNotes: [
      "PrebioSweet appears four times in the original — around 33 g in total. All of it swapped: every PrebioSweet line contains lactulose or inulin.",
      "On the swap: erythritol is only about 70% as sweet as sugar, so you need more of it by weight, and the sponge does want some bulk in with the whites. Use erythritol for body and a few stevia drops to bring the sweetness up, rather than trying to do it all with one.",
      "Blueberries cap at 40 g per serving. Spread across 12 slices the decoration in the photo is fine.",
      "Everything dairy is lactose-free. Gel food colouring and the flavour pastes are FODMAP-free."
    ]
  },

  {
    id: "flourless-chocolate-sponge",
    title: "Flourless Chocolate Sponge Cake",
    category: "Desserts",
    time: 50,
    servings: 6,
    tags: ["quick", "vegetarian", "low-fat", "gluten-free", "meal-prep"],
    image: "images/flourless-chocolate-sponge.jpg",
    ingredients: [
      { item: "2 firm yellow bananas", note: "about 180 g peeled" },
      { item: "2 eggs" },
      { item: "150 ml lactose-free kefir", note: "or lactose-free yoghurt" },
      { item: "30 g oat bran", note: "or GF oat flour" },
      { item: "20 g cocoa powder" },
      { item: "10 g baking powder" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet — see notes" },
      { item: "~1 g caramel vanilla or vanilla extract · pinch of salt" },
      { item: "40–50 ml lactose-free milk", note: "only if the batter looks too thick" },
      { item: "Lactose-free cottage cheese cream & blueberries", note: "optional topping, as in the photo" }
    ],
    steps: [
      "Put everything except the optional milk into a blender and blend 30–40 seconds until completely smooth.",
      "Let the batter stand 10 minutes so the oat bran absorbs the liquid — it should end up like a light mousse. If it looks dense, stir in the 40–50 ml of milk or water.",
      "Pour into an 18 cm silicone mould. Bake at 160 °C — 30 minutes in an air fryer, 35–40 in a standard oven. A toothpick should come out clean or with a few moist crumbs, never wet batter.",
      "Cool completely, top with the cottage cheese cream and blueberries if using, and cut into 6."
    ],
    nutrition: { serveWeight: 75, kcal: 83, protein: 4.2, carbs: 10.8, fat: 2.5 },
    lfmNotes: [
      "Firm bananas — 180 g across 6 slices is 30 g each, well inside the limit. Brown bananas would push the fructans up.",
      "Oat bran works out at 5 g a slice, nowhere near the ceiling.",
      "PrebioSweet swapped for erythritol or stevia.",
      "Blueberries cap at 40 g per serving, so a few on top is right — do not turn it into a berry cake."
    ]
  },

  {
    id: "cottage-banana-waffles",
    title: "Cottage Cheese & Banana Waffles",
    category: "Breakfast",
    time: 25,
    servings: 8,
    tags: ["quick", "vegetarian", "low-fat", "gluten-free", "meal-prep", "kid-friendly"],
    image: "images/cottage-banana-waffles.jpg",
    ingredients: [
      { item: "2 firm yellow bananas", note: "not brown or overripe" },
      { item: "200 g lactose-free cottage cheese 5%" },
      { item: "2 eggs" },
      { item: "140 g gluten-free flour blend", note: "or GF oat flour" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet — see notes" },
      { item: "~1 g caramel vanilla or vanilla extract" },
      { item: "½ tsp baking powder · pinch of salt" }
    ],
    steps: [
      "Blend the bananas, cottage cheese and eggs until completely smooth.",
      "Pour into a bowl and sift in the flour, baking powder, sweetener, vanilla and salt. Whisk until thoroughly combined.",
      "Heat and lightly grease a waffle iron. Cook until crisp and golden.",
      "Serve with lactose-free Greek yoghurt, a drop of liquid stevia or caramel, and toasted almond flakes."
    ],
    nutrition: { serveWeight: 70, kcal: 128, protein: 5.3, carbs: 19.5, fat: 3.2 },
    lfmNotes: [
      "Firm bananas only. Two across 8 waffles is roughly 30 g of banana each, so three waffles still sits under the 100 g limit. A brown banana would change that — ripening turns starch into fructans.",
      "PrebioSweet swapped for erythritol or stevia. Every line of it contains lactulose or inulin.",
      "Almond flakes: keep the garnish to about 10 almonds' worth per serving."
    ]
  },

  {
    id: "papaya-cream-tart",
    title: "Papaya & Cream Tart",
    category: "Desserts",
    time: 60,
    servings: 8,
    tags: ["high-protein", "low-fat", "vegetarian", "gluten-free"],
    image: "images/papaya-cream-tart.jpg",
    ingredients: [
      { heading: "Base" },
      { item: "250 g lactose-free cottage cheese 5%" },
      { item: "1 egg" },
      { item: "30 g PB2 powdered peanut butter", note: "or almond flour" },
      { item: "45 g gluten-free flour blend", note: "or GF oat flour" },
      { item: "1 g caramel or vanilla extract" },
      { item: "Erythritol or stevia to taste", note: "not PrebioSweet — see notes" },
      { item: "Pinch of salt" },
      { heading: "Cream filling" },
      { item: "280 g lactose-free light ricotta" },
      { item: "120 g lactose-free cottage cheese 5%" },
      { item: "2 eggs" },
      { item: "20 g coconut milk powder", note: "or lactose-free skim milk powder" },
      { item: "20 g cornflour" },
      { item: "1 g caramel vanilla" },
      { item: "Erythritol or stevia to taste" },
      { item: "220 g fruit, sliced thin", note: "firm papaya, canned rhubarb or berries — not pear" },
      { item: "10 g flaked almonds", note: "optional garnish" }
    ],
    steps: [
      "Mix the wet base ingredients, then fold in the dry. Spread evenly over the base and slightly up the sides of a 20 cm ring, using a damp spoon. Pre-bake at 180 °C for 10 minutes.",
      "Blend the ricotta, cottage cheese, eggs, milk powder, cornflour, vanilla and sweetener until completely smooth.",
      "Pour the cream into the pre-baked base. Lay the fruit slices over and scatter the almonds.",
      "Bake at 170 °C for 35–40 minutes until set. Cool completely, then chill before slicing."
    ],
    nutrition: { serveWeight: 106, kcal: 128, protein: 10.2, carbs: 11.0, fat: 4.8 },
    lfmNotes: [
      "The original called this a pear tart, but pears are high FODMAP — excess fructose plus sorbitol — so there is no pear in it. Renamed to match what is actually in the tin.",
      "PrebioSweet swapped for erythritol or stevia. Every PrebioSweet line contains lactulose or inulin; see the Foods page.",
      "10 g of flaked almonds across 8 slices is fine. Almonds are only a problem in larger amounts.",
      "Papaya is safe to 1 cup. Rhubarb to 1 cup diced. Berries follow their own limits — strawberries 150 g, raspberries 60 g, blueberries 40 g."
    ]
  },

  {
    id: "caramel-popcorn-cheesecake",
    title: "Salted Caramel & Popcorn Cheesecake",
    category: "Desserts",
    time: 60,
    servings: 8,
    tags: ["high-protein", "low-fat", "vegetarian", "gluten-free", "meal-prep"],
    image: "images/caramel-popcorn-cheesecake.jpg",
    ingredients: [
      { heading: "Cheesecake base" },
      { item: "500 g lactose-free light ricotta" },
      { item: "160 g lactose-free soft quark or cottage cheese 0%" },
      { item: "2 eggs" },
      { item: "20 g cornflour" },
      { item: "100 g allulose" },
      { item: "Vanillin or vanilla extract to taste" },
      { heading: "Topping" },
      { item: "1 batch Salted Caramel Sauce", note: "the recipe in Sauces & Basics" },
      { item: "15 g plain air-popped popcorn" }
    ],
    steps: [
      "Heat the oven to 180 °C. Line the base of a 19 cm springform ring tightly with foil — 16 cm if you want a taller cheesecake.",
      "Whisk the liquid ingredients together gently first, then stir in the dry ones until completely smooth. Use a spoon or fork rather than an electric mixer, so you do not beat air into it.",
      "Pour into the ring and bake at 180 °C for about 40 minutes.",
      "Turn the oven off, crack the door and leave it inside 20 minutes. Cool to room temperature, then chill overnight to stabilise.",
      "Pour the caramel over the chilled cheesecake and ring the edge with popcorn just before serving."
    ],
    nutrition: { serveWeight: 138, kcal: 109, protein: 10.1, carbs: 6.5, fat: 4.8 },
    lfmNotes: [
      "Both cheeses lactose-free, and the caramel is the allulose one from Sauces & Basics — no shop-bought sauce anywhere in this.",
      "Plain air-popped popcorn is low FODMAP to about 3 cups. 15 g across a whole cheesecake is nothing.",
      "Decorate at the last minute. Popcorn softens within the hour once it touches the caramel."
    ]
  },

  {
    id: "salted-caramel-sauce",
    title: "Salted Caramel Sauce",
    category: "Sauces & Basics",
    time: 25,
    servings: 5,
    tags: ["quick", "vegetarian", "low-fat", "gluten-free", "meal-prep"],
    image: "images/salted-caramel-sauce.jpg",
    ingredients: [
      { item: "100 g allulose" },
      { item: "200 ml lactose-free milk 1.5%", note: "or light lactose-free cream" },
      { item: "Pinch of sea salt" },
      { item: "Vanilla extract to taste", note: "optional" }
    ],
    steps: [
      "Put the allulose in a saucepan over medium heat. Let it start melting at the edges without stirring, then stir gently with a heatproof spatula until fully melted and deep amber.",
      "Warm the milk until hot. Pour it into the caramel very slowly, in a thin steady stream, stirring constantly — it will bubble and steam aggressively, so keep your hands clear.",
      "Add the salt, drop the heat to low, and simmer 5–7 minutes, stirring occasionally, until it thickens slightly.",
      "Cool 10–15 minutes; it thickens to a glossy, elastic sauce as it goes. Keeps in a glass jar in the fridge for up to 7 days — loosen with 5-second bursts in the microwave."
    ],
    nutrition: { serveWeight: 40, kcal: 18, protein: 1.2, carbs: 1.8, fat: 0.6 },
    lfmNotes: [
      "This is the answer to the shop-bought zero caramel problem. Those are usually built on maltitol, sorbitol or polydextrose; this is allulose and lactose-free milk, and nothing else.",
      "Allulose is a rare sugar that is mostly absorbed in the small intestine and behaves well on this diet, though Monash has not formally tested it. Large amounts can loosen the bowel in some people, so build up rather than starting with half a jar.",
      "Macros are for a 40 g drizzle — about 2 tablespoons."
    ]
  },

  {
    id: "zucchini-waffles",
    title: "Zucchini Waffles",
    category: "Lunch",
    time: 20,
    servings: 1,
    tags: ["quick", "vegetarian", "low-fat", "gluten-free"],
    image: "images/zucchini-waffles.jpg",
    ingredients: [
      { item: "200–250 g zucchini", note: "coarsely grated and squeezed well — about 120–130 g drained" },
      { item: "40 g gluten-free flour blend", note: "or gluten-free oat flour" },
      { item: "1 small egg (~40 g)" },
      { item: "Salt to taste" },
      { item: "Oil or cooking spray for the iron" }
    ],
    steps: [
      "Coarsely grate the zucchini and squeeze the moisture out thoroughly — a fine sieve, cheesecloth, or pressing under a plate all work.",
      "Beat the egg with a pinch of salt, then stir in the squeezed zucchini and the flour until you have a medium-thick batter.",
      "Heat and lightly grease a waffle iron (a grill pan or skillet also works). Spoon in the batter and cook until golden and crisp.",
      "Serve with lactose-free sour cream or Greek yoghurt, and smoked salmon."
    ],
    nutrition: { serveWeight: 200, kcal: 220, protein: 10.4, carbs: 30.6, fat: 6.2 },
    lfmNotes: [
      "Zucchini is the thing to watch here. The safe serve is 65–75 g, and this batch drains down to 120–130 g — so eating the whole lot in one sitting is over the line. Split it into two, or start from about 150 g of zucchini.",
      "Squeezing does help: fructans are water-soluble, so discarding the liquid takes some of them with it. How much is not measured, though, so treat it as a bonus rather than a licence.",
      "Smoked salmon, cucumber and lactose-free sour cream are all fine. Red pepper caps at ⅓ cup — the amount on the plate in the photo is about right."
    ]
  },

  {
    id: "honey-kartoshka-truffles",
    title: "Honey-Style Kartoshka Truffles",
    category: "Desserts",
    time: 70,
    servings: 10,
    tags: ["high-protein", "vegetarian", "gluten-free", "meal-prep"],
    image: "images/honey-kartoshka-truffles.jpg",
    ingredients: [
      { heading: "Sponge base" },
      { item: "4 large eggs" },
      { item: "80 g lactose-free vanilla protein powder" },
      { item: "10 g cocoa powder" },
      { item: "40 g powdered erythritol" },
      { item: "3 g baking powder" },
      { item: "60 ml lactose-free milk", note: "or almond milk" },
      { item: "2 g vanilla extract · pinch of salt" },
      { heading: "Honey cream & coating" },
      { item: "500 g lactose-free ricotta" },
      { item: "60 g powdered erythritol" },
      { item: "Liquid stevia to taste", note: "about 10–15 drops" },
      { item: "½ tsp honey or caramel extract", note: "optional — extract only, not honey" }
    ],
    steps: [
      "Separate the eggs. Whip the whites with salt to stiff peaks, adding the 40 g of erythritol halfway through.",
      "Whisk the yolks with the cocoa, protein powder, milk, baking powder and vanilla until smooth.",
      "Fold the yolk mixture into the whites in three stages with a spatula.",
      "Pour into a 16 cm tin and bake at 170 °C for 40–45 minutes. Cool completely.",
      "Blend the ricotta, erythritol, stevia and honey extract until smooth. Taste and adjust.",
      "Grind the cooled sponge into fine crumbs, reserving 2–3 tbsp for coating. Stir the rest into the cream.",
      "Divide into 10, shape into ovals with damp hands, roll in the reserved crumbs and chill before serving."
    ],
    nutrition: { serveWeight: 91, kcal: 105, protein: 13.8, carbs: 0.6, fat: 5.3 },
    lfmNotes: [
      "The honey flavour comes from extract, not honey. Real honey is high in excess fructose and would undo the whole recipe.",
      "Ricotta and milk both lactose-free; protein powder must be isolate or egg white, with no added inulin.",
      "0.6 g of carbs per truffle — the lowest-carb thing in the book."
    ]
  },

  {
    id: "birds-milk-souffle",
    title: "Birds\u2019 Milk Souffl\u00e9",
    category: "Desserts",
    time: 30,
    servings: 2,
    tags: ["high-protein", "vegetarian", "gluten-free", "no-cook"],
    image: "images/birds-milk-souffle.jpg",
    ingredients: [
      { heading: "Souffl\u00e9 base" },
      { item: "120 g egg whites", note: "about 4 large whites, or pasteurised whites" },
      { item: "300 ml lactose-free milk 2.5%" },
      { item: "6 g agar-agar" },
      { item: "10 g powdered erythritol or allulose" },
      { item: "1 g vanilla extract · pinch of salt" },
      { heading: "Chocolate glaze" },
      { item: "18 g dark chocolate", note: "85%+ or erythritol-sweetened" },
      { item: "40 ml lactose-free milk 2.5%" },
      { item: "5 g cocoa powder" },
      { item: "3 g gelatin powder" },
      { item: "1–2 g powdered erythritol", note: "optional" }
    ],
    steps: [
      "Stir the agar-agar, erythritol and vanilla into the 300 ml of milk. Bring to a boil over medium heat, stirring constantly, then simmer 3 minutes. Take off the heat.",
      "Whip the room-temperature egg whites with a pinch of salt to soft peaks. Still whipping, pour the hot milk in a thin stream and whip 30 seconds more until combined.",
      "Divide between 2 ramekins and chill 1 hour to set.",
      "For the glaze, whisk the cocoa into the 40 ml of milk, add the chopped chocolate and sweetener, and microwave in short bursts until melted. Stir the gelatin through until fully dissolved.",
      "Cool 5 minutes, pour over the set soufflé, and chill 1–2 hours."
    ],
    nutrition: { serveWeight: 246, kcal: 184, protein: 14.2, carbs: 14.3, fat: 7.7 },
    lfmNotes: [
      "Both the base and the glaze use lactose-free milk. Almond milk works in the base if you prefer.",
      "9 g of dark chocolate per serving — nowhere near the 30 g limit.",
      "Agar-agar and gelatin are both free of FODMAPs."
    ]
  },

  {
    id: "kartoshka-truffles",
    title: "Flourless Chocolate Kartoshka Truffles",
    category: "Desserts",
    time: 70,
    servings: 10,
    tags: ["high-protein", "vegetarian", "gluten-free", "meal-prep"],
    image: "images/kartoshka-truffles.jpg",
    ingredients: [
      { heading: "Flourless sponge base" },
      { item: "4 large eggs" },
      { item: "80 g lactose-free protein powder", note: "Raffaello, vanilla or chocolate" },
      { item: "20 g cocoa powder" },
      { item: "40 g powdered erythritol" },
      { item: "3 g baking powder" },
      { item: "60 ml lactose-free milk", note: "or almond milk" },
      { item: "4 g vanilla extract · pinch of salt" },
      { heading: "Cream & shaping" },
      { item: "450 g lactose-free ricotta" },
      { item: "5–15 g cocoa powder" },
      { item: "20 g lactose-free protein powder" },
      { item: "30 g powdered erythritol" },
      { item: "2 g vanilla extract" }
    ],
    steps: [
      "Separate the eggs. Whip the whites with salt to stiff peaks, adding the erythritol after about 3 minutes.",
      "Mix the yolks with the cocoa, 30 g of the protein powder, the milk, baking powder and vanilla.",
      "Fold the yolk mixture into the whites in three batches, then sift in the remaining 50 g of protein powder and fold that through.",
      "Bake in a 16 cm tin at 170 °C for 40–45 minutes. Cool completely.",
      "Whisk the ricotta, cocoa, protein powder, erythritol and vanilla until smooth.",
      "Blitz the cooled sponge into fine crumbs, holding back a small handful for coating. Mix the rest into the cream.",
      "Shape into 10 ovals, roll in the reserved crumbs, and serve."
    ],
    nutrition: { serveWeight: 75, kcal: 120, protein: 14.6, carbs: 1.8, fat: 5.6 },
    lfmNotes: [
      "Ricotta and milk both lactose-free.",
      "Protein powder must be whey isolate, egg white or rice protein — concentrate carries lactose, and anything sold on added fibre usually carries inulin.",
      "1.8 g of carbs and 14.6 g of protein per truffle. This is closer to a protein bar than a dessert."
    ]
  },

  {
    id: "strawberry-pavlova-roll",
    title: "Strawberry Pavlova Roll",
    category: "Desserts",
    time: 60,
    servings: 6,
    tags: ["high-protein", "low-fat", "vegetarian", "gluten-free"],
    image: "images/strawberry-pavlova-roll.jpg",
    ingredients: [
      { heading: "Meringue" },
      { item: "200 ml egg whites", note: "about 6 large whites" },
      { item: "45 g cornflour" },
      { item: "100 g powdered erythritol or allulose" },
      { item: "300 g fresh strawberries, diced" },
      { item: "Pinch of salt" },
      { heading: "Cream" },
      { item: "300 g lactose-free Greek yoghurt" },
      { item: "150 g lactose-free ricotta", note: "or firm tofu, or lactose-free cream cheese" },
      { item: "40 g powdered erythritol or allulose" },
      { item: "1 tsp caramel or vanilla extract" }
    ],
    steps: [
      "Heat the oven to 160 °C / 320 °F and line a baking sheet with silicone-coated parchment.",
      "Whip the egg whites with a pinch of salt to stiff peaks, 5–7 minutes, then whip in the 100 g of powdered sweetener gradually.",
      "Sift the cornflour over and fold it in gently with a spatula, then fold through the diced strawberries.",
      "Spread onto the parchment. Bake 15–20 minutes at 160 °C, then drop to 110 °C / 230 °F for another 20 minutes. Cool slightly.",
      "Blend all the cream ingredients until smooth.",
      "Flip the meringue onto fresh parchment and peel the baking sheet away. Spread three quarters of the cream over it, roll tightly, and finish with the rest on top.",
      "Chill at least 2 hours before serving."
    ],
    nutrition: { serveWeight: 183, kcal: 114, protein: 9.9, carbs: 13.2, fat: 2.2 },
    lfmNotes: [
      "Green apples out, strawberries in — apples carry both excess fructose and sorbitol. At 300 g across 6 servings that is 50 g each, under the 65 g limit for this kind of dessert.",
      "Both dairies lactose-free. Firm tofu works in place of the ricotta if you want the protein higher and the fat lower still.",
      "Erythritol and allulose are the sweeteners here rather than stevia, which is right — a meringue needs bulk, and stevia has none."
    ]
  },

  {
    id: "chocolate-protein-cake",
    title: "Chocolate Protein Cake",
    category: "Desserts",
    time: 55,
    servings: 4,
    tags: ["high-protein", "vegetarian", "gluten-free", "meal-prep"],
    image: "images/chocolate-protein-cake.jpg",
    ingredients: [
      { item: "100 g gluten-free flour blend", note: "1:1 blend" },
      { item: "30 g protein powder or casein", note: "chocolate, mocaccino or unflavoured \u2014 lactose-free" },
      { item: "30 g Dutch-process cocoa powder" },
      { item: "10 g baking powder" },
      { item: "235 g lactose-free Greek yoghurt", note: "or strained matsoni" },
      { item: "1 large egg" },
      { item: "30 ml lactose-free milk", note: "or almond or macadamia milk" },
      { item: "40 g dark chocolate, chopped", note: "85%+ cocoa" },
      { item: "10 g ghee, melted" },
      { item: "Sweetener to taste · pinch of vanilla", note: "e.g. liquid FitParad" }
    ],
    steps: [
      "Heat the oven to 180 °C / 350 °F.",
      "Whisk the flour, protein powder, cocoa and baking powder together.",
      "Add the yoghurt, egg, sweetener and vanilla. Mix in the milk gradually until the batter reaches a thick sour-cream consistency, then stir through the melted ghee.",
      "Pour half the batter into a loaf tin, scatter the chocolate pieces over, and cover with the rest.",
      "Bake 40–45 minutes."
    ],
    nutrition: { serveWeight: 113, kcal: 227, protein: 15.1, carbs: 23.4, fat: 8.1 },
    lfmNotes: [
      "Wheat flour swapped for a gluten-free blend; Greek yoghurt and milk both lactose-free.",
      "Protein powder must be an isolate or casein with no lactose and no added inulin or chicory root — check the label, since 'high fibre' protein powders are a common hidden fructan source.",
      "Dark chocolate at 85%+ keeps this within the lactose and fructose limits. 40 g across 4 portions is 10 g each, well under the 30 g serve."
    ]
  },

  {
    id: "banana-muffins",
    title: "Quick Banana Muffins",
    category: "Breakfast",
    time: 45,
    servings: 6,
    tags: ["quick", "vegetarian", "low-fat", "meal-prep", "gluten-free", "kid-friendly"],
    image: "images/banana-muffins.jpg",
    ingredients: [
      { item: "230 g firm bananas", note: "slightly green \u2014 ripe ones turn fructan-heavy" },
      { item: "1 large egg" },
      { item: "100 g gluten-free flour blend", note: "or oat flour" },
      { item: "5 g baking powder" },
      { item: "12 g pumpkin seeds", note: "2 g per muffin, for the tops" },
      { item: "Low FODMAP sweetener to taste", note: "e.g. 10 drops caramel FitParad" },
      { item: "Pinch of salt · ½ tsp vanilla extract" }
    ],
    steps: [
      "Heat the oven to 170 °C / 340 °F.",
      "Mash the bananas with a fork, then mix thoroughly with the egg, flour, baking powder, sweetener, salt and vanilla. A quick blitz in a blender also works.",
      "Fill 6 muffin moulds halfway and scatter 2 g of pumpkin seeds over each.",
      "Bake 25–35 minutes until golden."
    ],
    nutrition: { serveWeight: 57, kcal: 106, protein: 3.4, carbs: 17.5, fat: 2.5 },
    lfmNotes: [
      "Firm, slightly green bananas only. At about 38 g of banana per muffin you are well under the 100 g limit — but ripening converts starch to fructans, so a spotty banana changes the maths.",
      "Wheat flour swapped for a gluten-free blend or oat flour.",
      "Two muffins in a sitting is still comfortably within the banana limit."
    ]
  },

  {
    id: "slow-roasted-pulled-beef",
    title: "Slow-Roasted Pulled Beef",
    category: "Dinner",
    time: 210,
    servings: 3,
    tags: ["high-protein", "low-fat", "meal-prep", "freezer", "gluten-free", "one-pan"],
    image: "images/slow-roasted-pulled-beef.jpg",
    ingredients: [
      { item: "670 g lean raw beef roast", note: "tenderloin, eye of round or top round, trimmed of fat" },
      { item: "Salt, to taste" },
      { item: "Black pepper, to taste" }
    ],
    steps: [
      "Dry the beef thoroughly with paper towels — do not wash it. Season generously all over with salt and pepper.",
      "Wrap extremely tightly in foil so no steam or juices can escape. Leave on the counter 1–2 hours to come to room temperature. Straight from the fridge it needs a full 2 hours; roasting it cold makes it tough.",
      "Heat the oven to 150 °C / 300 °F and bake 3.5 hours for a 670 g cut. Scale up to 5 hours for a 1 kg cut.",
      "Open the foil carefully and shred with two forks."
    ],
    nutrition: { serveWeight: 137, kcal: 279, protein: 47, carbs: 0, fat: 8 },
    lfmNotes: [
      "Plain seasoned beef has no FODMAPs at all — just salt and pepper, no marinade, no stock cube, no spice blend.",
      "Worth keeping a batch in the fridge. It goes with jasmine rice or quinoa bowls, gluten-free wraps, or straight into a stir-fry."
    ]
  },

  {
    id: "strawberry-tiramisu",
    title: "Strawberry Tiramisu",
    category: "Desserts",
    time: 20,
    servings: 1,
    tags: ["quick", "high-protein", "low-fat", "vegetarian", "no-cook"],
    image: "images/strawberry-tiramisu.jpg",
    ingredients: [
      { item: "50 g gluten-free ladyfingers", note: "about 6 \u2014 wheat savoiardi are out, see notes" },
      { item: "150 g lactose-free Greek yoghurt 0%" },
      { item: "150 g soft cottage cheese 0.1%", note: "replaces the ricotta" },
      { item: "150 g strawberries", note: "weigh them \u2014 150 g is the ceiling" },
      { item: "2 g cornflour" },
      { item: "2 tsp coffee brewed in 150 ml boiling water" },
      { item: "3 g cocoa powder, to dust" },
      { item: "Pure stevia, to taste", note: "for the berries, the cream and the coffee" }
    ],
    steps: [
      "Simmer the strawberries with a little stevia and the cornflour over low heat for about 5 minutes, until they release their juice and it thickens. Cook them down properly — the less loose liquid, the better the layers hold. Cool completely.",
      "Brew the coffee, sweeten it if you like, and let it cool.",
      "Blend the cottage cheese and yoghurt with stevia until completely smooth. Use a blender — a mixer leaves curd grains.",
      "Spread half the cream in the dish. Dip the ladyfingers in the coffee quickly and lay them straight down — they are fragile and fall apart if they soak.",
      "Spoon the strawberries over, then cover with the rest of the cream.",
      "Chill 1–2 hours.",
      "Dust with cocoa through a sieve just before serving, not before chilling, or it goes damp."
    ],
    nutrition: { serveWeight: 545, kcal: 450, protein: 44, carbs: 64, fat: 4 },
    lfmNotes: [
      "Savoiardi are wheat, and 50 g of biscuit is a real fructan load. Gluten-free ladyfingers are the swap; failing that, slices of a plain gluten-free sponge. Your pasta exception is for pasta — I have not stretched it to wheat biscuits without asking. Say the word if you want me to.",
      "Ricotta and Greek yoghurt are both high in lactose. The yoghurt becomes lactose-free; the ricotta becomes cottage cheese, which is your exception and takes almost all the fat out at the same time.",
      "Strawberries stop at 150 g. Your app logged 173 g, which is over the line — weigh them rather than eyeballing.",
      "Coffee and 3 g of cocoa are both fine. Sweeten with pure stevia, not PrebioSweet.",
      "This is 545 g of dessert in one sitting. Every ingredient is individually within limits, but FODMAPs stack — splitting it across two days is gentler if your gut is having a delicate week."
    ],
    adaptedFrom: "Strawberry tiramisu, one-person portion. Wheat savoiardi → gluten-free; Greek yoghurt → lactose-free; ricotta → 0.1% cottage cheese; strawberries trimmed from 173 g to the 150 g limit; sweetener switched to pure stevia. Fat drops from 12.8 g to about 4 g, protein rises from 34 g to 44 g, and calories come down from 515 to 450."
  },

  {
    id: "chocolate-orange-cheesecake-brownie",
    title: "Chocolate Orange Cheesecake Brownie",
    category: "Desserts",
    time: 45,
    servings: 4,
    tags: ["high-protein", "low-fat", "vegetarian", "meal-prep"],
    image: "images/chocolate-orange-cheesecake-brownie.jpg",
    ingredients: [
      { heading: "Chocolate base" },
      { item: "95 ml egg white" },
      { item: "1 small egg (40 g)" },
      { item: "115 g soft cottage cheese 0.1%" },
      { item: "30 g oat bran flour" },
      { item: "25 g rice flour", note: "replaces corn bran \u2014 rice flour has no portion limit" },
      { item: "8 g psyllium husk" },
      { item: "12 g cocoa powder" },
      { item: "15 g orange zest, finely grated" },
      { item: "7 g baking powder" },
      { item: "Pure stevia", note: "to the sweetness of about 60 g sugar" },
      { item: "1 g vanillin · pinch of salt" },
      { heading: "Cheesecake layer" },
      { item: "100 g passionfruit pulp", note: "about 5 fruit \u2014 replaces the sea buckthorn, see notes" },
      { item: "315 g soft cottage cheese 0.1%", note: "replaces the cream cheese" },
      { item: "60 ml orange juice" },
      { item: "10 g orange zest" },
      { item: "10 g gelatin + 45 ml cold water" },
      { item: "Pure stevia", note: "to the sweetness of about 80 g sugar \u2014 the fruit is sharp" },
      { heading: "Topping" },
      { item: "180 g soft cottage cheese 0.1%" },
      { item: "Pure stevia, to taste" },
      { item: "50 g salted caramel sauce", note: "check the label first \u2014 see notes" }
    ],
    steps: [
      "Heat the oven to 180 \u00b0C. Whisk all the base ingredients together until smooth — a whisk is fine, a blender is faster.",
      "Pour into a lined 19 × 17 cm square tin and bake 20–25 minutes. Turn it out straight away and cool to room temperature.",
      "Soak the gelatin in 45 ml cold water. Simmer the passionfruit pulp with 15 ml water for 2–3 minutes, cool, then press through a sieve to lose the seeds.",
      "Blend the sieved pulp with the cottage cheese, orange juice, zest and stevia until completely silky. Use a blender, not a mixer — a mixer leaves curd grains.",
      "Melt the soaked gelatin in short microwave bursts and blend it through.",
      "Put the cooled base back in the tin, press it flat, pour the filling over. Chill at least 4–5 hours, ideally overnight. Stand the tin on a plate first so you can move it without damage.",
      "To release from silicone: freeze 1–1.5 hours after chilling, pop it out, then thaw 1 hour in the fridge. From a springform ring: just run a knife round the edge.",
      "Beat the remaining cottage cheese with stevia, spread over the top, drizzle the caramel and swirl it with a skewer."
    ],
    nutrition: { serveWeight: 260, kcal: 250, protein: 34, carbs: 28, fat: 3 },
    lfmNotes: [
      "Sea buckthorn had to go. Monash tested it and found high excess fructose — it is a high FODMAP berry. Passionfruit and extra orange give you the same sharp, resinous tartness and the same golden colour.",
      "PrebioSweet had to go too, and this matters beyond this cake: every line of it contains either lactulose or inulin. Both are deliberately fermentable prebiotics, which is the exact opposite of what this diet is doing. Use pure stevia, or an erythritol-and-stevia blend.",
      "Oat bran is capped at 30 g across the whole cake, which is 7.5 g a serving — comfortably under the limit. The corn bran is swapped for rice flour, which has no limit.",
      "Cottage cheese carries all three layers. That only works because you tolerate it — this recipe is not low FODMAP for most people.",
      "Check the caramel label. Zero-sugar sauces are usually built on maltitol, sorbitol or inulin. If yours is, warm 1 tbsp of maple syrup with a pinch of salt instead — that is low FODMAP and adds about 13 kcal a serving.",
      "8 g of psyllium is a lot of fibre in one sitting. It is not a FODMAP, but if your gut is having a bad week, a smaller slice is the sensible move."
    ],
    adaptedFrom: "Chocolate sea buckthorn cake with orange (Russian original, ~880 g). Sea buckthorn → passionfruit and orange; PrebioSweet → pure stevia; corn bran → rice flour; and the 200 g of light cream cheese → cottage cheese, which cuts about 24 g of fat from the cake and adds roughly 20 g of protein. The photo is the original bake."
  },

  {
    id: "cinnamon-oats-strawberries",
    title: "Cinnamon Oats with Strawberries",
    category: "Breakfast",
    time: 10,
    servings: 1,
    tags: ["quick", "vegetarian", "low-fat", "meal-prep"],
    image: "",
    ingredients: [
      { item: "50 g rolled oats", note: "plain, not flavoured sachets" },
      { item: "250 ml skimmed lactose-free milk" },
      { item: "Stevia to taste", note: "start with the equivalent of 2 tsp sugar" },
      { item: "½ tsp ground cinnamon" },
      { item: "Pinch of salt" },
      { item: "150 g strawberries, halved", note: "about 10 medium" },
      { item: "10 g pumpkin seeds" }
    ],
    steps: [
      "Put the oats, milk, cinnamon and salt in a small pan over medium heat.",
      "Stir often for 5–6 minutes until thick and creamy. Add a splash more milk if it tightens too much.",
      "Take off the heat and stir in the stevia. Taste before adding more — stevia is far sweeter than sugar and turns bitter if you overdo it.",
      "Top with the strawberries and pumpkin seeds."
    ],
    nutrition: { serveWeight: 440, kcal: 380, protein: 19, carbs: 58, fat: 9 },
    lfmNotes: [
      "Oats are safe at 50 g dry. A full cup pushes into high-fructan territory.",
      "Strawberries cap at 150 g per serve.",
      "Skimmed lactose-free milk instead of whole keeps the fat down without touching the protein."
    ],
    adaptedFrom: "Standard porridge — cow's milk to skimmed lactose-free, sugar and honey to stevia, and the peanut butter topping dropped to cut 12 g of fat."
  },

  {
    id: "baked-lemon-herb-chicken",
    title: "Baked Lemon Herb Chicken with Rice",
    category: "Dinner",
    time: 40,
    servings: 2,
    tags: ["high-protein", "low-fat", "one-pan", "gluten-free"],
    image: "",
    ingredients: [
      { item: "400 g skinless chicken breast", note: "trim any visible fat" },
      { item: "2 tsp garlic-infused olive oil", note: "1 tsp per serving — this is the whole fat budget" },
      { item: "Juice of 1 lemon" },
      { item: "1 tsp dried oregano" },
      { item: "2 tbsp fresh parsley, chopped" },
      { item: "3 spring onions — green tops only, sliced" },
      { item: "185 g white rice, uncooked" },
      { item: "75 g green beans, trimmed" },
      { item: "75 g carrot, sliced" },
      { item: "Salt and black pepper" }
    ],
    steps: [
      "Heat the oven to 200 °C / 400 °F.",
      "Mix 1 tsp of the infused oil with the lemon juice, oregano, salt and pepper. Rub it over the chicken and leave 10 minutes.",
      "Put the chicken in a baking dish, cover with foil and bake 20 minutes. Uncover and give it 5 more to colour. Rest 5 minutes before slicing.",
      "Meanwhile cook the rice — 185 g rice to 370 ml water, boil, cover, low heat 12 minutes, then rest off the heat 5 minutes.",
      "Steam the green beans and carrot 4–5 minutes until just tender. Toss with the last teaspoon of infused oil.",
      "Slice the chicken and serve over the rice, scattered with parsley and the green spring onion tops."
    ],
    nutrition: { serveWeight: 475, kcal: 635, protein: 54, carbs: 80, fat: 8 },
    lfmNotes: [
      "Garlic-infused oil works because fructans are water-soluble, not oil-soluble — the flavour crosses over but the FODMAPs stay behind. Never substitute fresh garlic.",
      "Green tops of spring onions only. The white bulb is high in fructans.",
      "Green beans: 75 g per serve. Carrot has no detectable FODMAPs, so be generous."
    ],
    adaptedFrom: "Classic lemon garlic chicken — fresh garlic to infused oil, onion to spring onion greens, and pan-frying in 3 tbsp oil swapped for baking in 2 tsp, which takes the dish from about 32 g of fat down to 8 g."
  },

  {
    id: "cottage-cheese-chocolate-mousse",
    title: "Cottage Cheese Chocolate Mousse",
    category: "Desserts",
    time: 10,
    servings: 4,
    tags: ["quick", "vegetarian", "no-cook", "high-protein", "low-fat", "gluten-free"],
    image: "",
    ingredients: [
      { item: "500 g low-fat cottage cheese", note: "2% — your personal exception, and it makes this work" },
      { item: "40 g unsweetened cocoa powder" },
      { item: "Stevia to taste", note: "start with the equivalent of 4 tbsp sugar" },
      { item: "1 tsp vanilla extract" },
      { item: "100 ml skimmed lactose-free milk", note: "to loosen" },
      { item: "120 g raspberries, to serve" }
    ],
    steps: [
      "Put the cottage cheese, cocoa, vanilla and half the milk in a blender or food processor.",
      "Blend a full 2 minutes — longer than feels necessary. This is what turns the curds silky; stop early and it stays grainy.",
      "Add stevia a little at a time, blending and tasting between additions.",
      "Loosen with the rest of the milk until it falls slowly off the spoon.",
      "Spoon into 4 glasses and chill at least 1 hour. Top with raspberries just before serving."
    ],
    nutrition: { serveWeight: 190, kcal: 150, protein: 19, carbs: 14, fat: 4 },
    lfmNotes: [
      "Cottage cheese is normally limited on low FODMAP for its lactose — it's here because you tolerate it well. Cut the portion if a day ever goes badly.",
      "Raspberries cap at 60 g per serve; this recipe works out at 30 g each.",
      "Cocoa powder is safe to 2 tbsp per serve. At 40 g across 4 servings you're comfortably under."
    ],
    adaptedFrom: "Classic chocolate mousse — 300 ml cream and 150 g dark chocolate replaced with blended cottage cheese and cocoa, sugar replaced with stevia. Drops it from roughly 480 kcal and 40 g fat per serving to 150 kcal and 4 g fat, and takes protein from 4 g to 19 g."
  }

];
