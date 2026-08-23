/* ==========================================================================
   foods.js — Low FODMAP "safe / avoid" product lists
   --------------------------------------------------------------------------
   Compiled: August 2026, from Monash University FODMAP guidance and
   Monash-aligned dietitian sources.

   IMPORTANT: portion sizes matter more than the food itself. Many foods are
   perfectly safe in a small serve and become high FODMAP in a large one.
   The Monash FODMAP app is the definitive source and is updated regularly —
   treat this list as a fast reference, not a replacement for it.

   TO EDIT: each category has a `safe` list and an `avoid` list.
   Copy an existing line, change the text, save. Nothing else to do.
   ========================================================================== */

const FOOD_LIST_UPDATED = "August 2026";

const FOODS = [
  {
    category: "Fruits",
    icon: "🍓",
    safe: [
      { name: "Strawberries",        portion: "10 medium (150 g)" },
      { name: "Blueberries",         portion: "¼ cup (40 g)",        note: "Larger serves add fructans" },
      { name: "Raspberries",         portion: "30 berries (60 g)" },
      { name: "Kiwifruit (green)",   portion: "2 medium (150 g)" },
      { name: "Orange",              portion: "1 medium (130 g)" },
      { name: "Mandarin",            portion: "2 medium (~180 g)" },
      { name: "Pineapple (fresh)",   portion: "1 cup chunks (140 g)" },
      { name: "Papaya",              portion: "1 cup cubes (140 g)" },
      { name: "Cantaloupe / rockmelon", portion: "¾ cup cubes (120 g)" },
      { name: "Honeydew melon",      portion: "½ cup cubes (90 g)" },
      { name: "Grapes",              portion: "1 cup (150 g)",       note: "Any colour" },
      { name: "Banana (firm, unripe)", portion: "1 medium (100 g)",  note: "Ripe banana: ⅓ only — ripening creates fructans" },
      { name: "Dragon fruit",        portion: "1 cup cubes (140 g)" },
      { name: "Passionfruit",        portion: "2 small (~50 g)" },
      { name: "Lemon & lime juice",  portion: "½ cup (125 ml)",      note: "Great for dressings and marinades" },
      { name: "Rhubarb",             portion: "1 cup diced (150 g)", note: "★ Tart and holds its shape when cooked — the tested stand-in for apple or quince" },
      { name: "Clementine",          portion: "1 medium (85 g)" },
      { name: "Starfruit",           portion: "1 medium (130 g)" }
    ],
    avoid: [
      { name: "Apples",            why: "Excess fructose + sorbitol" },
      { name: "Pears",             why: "Excess fructose + sorbitol" },
      { name: "Mango",             why: "Excess fructose" },
      { name: "Watermelon",        why: "Fructose, fructans & polyols — a triple hit" },
      { name: "Cherries",          why: "Fructose + sorbitol" },
      { name: "Peaches & nectarines", why: "Sorbitol" },
      { name: "Plums & prunes",    why: "Sorbitol" },
      { name: "Apricots",          why: "Sorbitol" },
      { name: "Blackberries",      why: "Sorbitol" },
      { name: "All dried fruit",   why: "Sugars concentrate — raisins, dates, figs, sultanas" },
      { name: "Apple & pear juice", why: "Concentrated fructose" },
      { name: "Avocado (>1/8)",    why: "Sorbitol — 1/8 of a whole avocado (30 g) is fine" },
      { name: "Persimmon",         why: "Fructans" },
      { name: "Quince",            why: "Untested by Monash; the paste is limited to tiny serves, and it is an apple relative — treat as unknown" },
      { name: "Boysenberries",     why: "Fructans" },
      { name: "Sea buckthorn",     why: "Excess fructose — Monash tested it and it came back high" },
      { name: "Blackcurrants",     why: "Sorbitol" }
    ]
  },

  {
    category: "Vegetables",
    icon: "🥕",
    safe: [
      { name: "Carrot",              portion: "1 medium (75 g)",   note: "No FODMAPs detected — eat freely" },
      { name: "Cucumber",            portion: "½ cup slices (75 g)" },
      { name: "Lettuce (all types)", portion: "Generous — no limit" },
      { name: "Baby spinach",        portion: "1½ cups raw (75 g)" },
      { name: "Kale",                portion: "1 cup chopped (75 g)" },
      { name: "Bok choy",            portion: "1 cup chopped (75 g)" },
      { name: "Green bell pepper",   portion: "½ cup strips (75 g)" },
      { name: "Red bell pepper",     portion: "⅓ cup (43 g)",      note: "Larger serves are high in mannitol" },
      { name: "Zucchini",            portion: "⅓ cup (65 g)",      note: "Over 100 g becomes high in fructans" },
      { name: "Eggplant / aubergine", portion: "1 cup cubes (75 g)" },
      { name: "Green beans",         portion: "15 beans (75 g)" },
      { name: "Tomato (common)",     portion: "1 medium (123 g)" },
      { name: "Cherry tomatoes",     portion: "5 (75 g)" },
      { name: "Potato",              portion: "1 medium (225 g)",  note: "Always safe — your best starch" },
      { name: "Sweet potato",        portion: "½ cup cubes (75 g)", note: "Larger serves are high in mannitol" },
      { name: "Parsnip",             portion: "½ cup (75 g)" },
      { name: "Broccoli heads only", portion: "¾ cup (75 g)",      note: "Stalks are high in fructans — use florets" },
      { name: "Cabbage (common/green)", portion: "¾ cup (75 g)" },
      { name: "Brussels sprouts",    portion: "2 sprouts (38 g)" },
      { name: "Corn on the cob",     portion: "½ cob (38 g)" },
      { name: "Canned corn kernels", portion: "⅓ cup (75 g)" },
      { name: "Snow peas / mangetout", portion: "5 pods (16 g)" },
      { name: "Beetroot",            portion: "2 slices (20 g)",   note: "Pickled: 2 slices; fresh is higher" },
      { name: "Butternut squash",    portion: "¼ cup (30 g)" },
      { name: "Pumpkin (Kent/Japanese)", portion: "⅓ cup (45 g)" },
      { name: "Spring onion — GREEN tops", portion: "Generous",    note: "★ Your onion substitute. Green part only" },
      { name: "Leek — GREEN leaves", portion: "⅔ cup (54 g)",      note: "★ Green part only — white bulb is high" },
      { name: "Chives",              portion: "Generous",          note: "★ Great fresh onion flavour" },
      { name: "Fennel bulb",         portion: "½ cup (48 g)" },
      { name: "Celery",              portion: "¼ stalk (10 g)",    note: "Very small serve — high in mannitol" },
      { name: "Radish",              portion: "2 radishes (38 g)" },
      { name: "Turnip",              portion: "½ cup (75 g)" },
      { name: "Bamboo shoots",       portion: "1 cup (75 g)" },
      { name: "Bean sprouts",        portion: "1 cup (75 g)" },
      { name: "Ginger",              portion: "Generous" },
      { name: "Olives",              portion: "15 small (45 g)" },
      { name: "Seaweed / nori",      portion: "2 sheets" },
      { name: "Swiss chard / silverbeet", portion: "1 cup (75 g)" },
      { name: "Okra",                portion: "½ cup (75 g)" },
      { name: "Water chestnuts",     portion: "½ cup (75 g)" }
    ],
    avoid: [
      { name: "Onion (all kinds)",   why: "★ The big one. Fructans. Includes shallots, red, white, brown" },
      { name: "Garlic",              why: "★ Fructans. Use garlic-infused oil instead — the FODMAPs don't dissolve in oil" },
      { name: "Leek — white bulb",   why: "Fructans" },
      { name: "Spring onion — white bulb", why: "Fructans" },
      { name: "Cauliflower",         why: "Mannitol" },
      { name: "Mushrooms (most)",    why: "Mannitol — canned champignon and oyster mushrooms are OK" },
      { name: "Asparagus",           why: "Excess fructose + fructans" },
      { name: "Artichoke",           why: "Fructans" },
      { name: "Green peas",          why: "GOS + fructans" },
      { name: "Sugar snap peas",     why: "Polyols" },
      { name: "Savoy cabbage (large serve)", why: "Fructans" },
      { name: "Sweetcorn (large serve)", why: "Sorbitol" },
      { name: "Onion & garlic powder", why: "Hides in stock cubes, crisps, spice mixes — read every label" }
    ]
  },

  {
    category: "Grains, Bread & Cereals",
    icon: "🌾",
    safe: [
      { name: "White rice",          portion: "1 cup cooked (190 g)", note: "Always safe" },
      { name: "Brown rice",          portion: "1 cup cooked (190 g)" },
      { name: "Quinoa",              portion: "1 cup cooked (155 g)" },
      { name: "Rolled oats",         portion: "½ cup dry (52 g)",   note: "Plain only — flavoured sachets hide FODMAPs" },
      { name: "Buckwheat",           portion: "1 cup cooked (168 g)", note: "Not wheat, despite the name" },
      { name: "Millet",              portion: "1 cup cooked (200 g)" },
      { name: "Polenta / cornmeal",  portion: "1 cup cooked (255 g)" },
      { name: "Gluten-free bread",   portion: "2 slices",           note: "Check for inulin/chicory root and apple juice" },
      { name: "Sourdough spelt bread", portion: "2 slices (52 g)",  note: "Traditional long-ferment only" },
      { name: "Rice noodles",        portion: "1 cup cooked (145 g)" },
      { name: "Gluten-free pasta",   portion: "1 cup cooked (145 g)", note: "Rice or corn based" },
      { name: "Soba noodles (100% buckwheat)", portion: "1 cup cooked (110 g)" },
      { name: "Rice cakes",          portion: "2 cakes" },
      { name: "Corn tortillas",      portion: "3 small (~90 g)" },
      { name: "Rice paper wrappers", portion: "Generous" },
      { name: "Cornflakes (plain)",  portion: "½ cup (15 g)" },
      { name: "Puffed rice cereal",  portion: "1 cup (17 g)" },
      { name: "Popcorn (plain)",     portion: "3 cups popped (36 g)" },
      { name: "Oat flour",           portion: "⅓ cup (30 g)" },
      { name: "Rice flour, corn flour, tapioca starch", portion: "Generous" },
      { name: "Potato gnocchi (GF)", portion: "1 cup (145 g)" }
    ],
    avoid: [
      { name: "Wheat bread & wraps", why: "★ Fructans" },
      { name: "Regular wheat pasta", why: "Fructans" },
      { name: "Rye bread",           why: "Fructans" },
      { name: "Barley",              why: "Fructans" },
      { name: "Couscous",            why: "Wheat — fructans" },
      { name: "Semolina",            why: "Wheat — fructans" },
      { name: "Muesli & granola",    why: "Usually dried fruit, honey, cashews, wheat" },
      { name: "Bran cereals",        why: "Fructans" },
      { name: "Wheat crackers & biscuits", why: "Fructans" },
      { name: "Inulin / chicory root fibre", why: "Added to many 'healthy' GF breads and bars — pure fructan" },
      { name: "Amaranth flour (large serve)", why: "GOS + fructans" },
      { name: "Savoiardi / ladyfingers", why: "Wheat — fructans. Gluten-free versions exist" },
      { name: "Sponge cake & most baked sweets", why: "Wheat flour — fructans" }
    ]
  },

  {
    category: "Protein & Legumes",
    icon: "🍗",
    safe: [
      { name: "Chicken (plain)",     portion: "Generous",           note: "Unmarinated — check for garlic/onion" },
      { name: "Beef, pork, lamb (plain)", portion: "Generous" },
      { name: "Fish & seafood (plain)", portion: "Generous" },
      { name: "Eggs",                portion: "Generous" },
      { name: "Firm tofu",           portion: "1 cup cubes (170 g)", note: "Firm/pressed only — silken is high" },
      { name: "Tempeh",              portion: "⅔ cup (100 g)" },
      { name: "Canned lentils",      portion: "46 g drained",       note: "★ Rinse well — the GOS leaches into the canning liquid. Boiled-from-dry lentils stop at ~23 g, half as much" },
      { name: "Canned chickpeas",    portion: "¼ cup (42 g)",       note: "★ Drained & rinsed well" },
      { name: "Prosciutto / plain ham", portion: "Check label",     note: "Many cured meats hide garlic & onion" },
      { name: "Canned tuna & salmon (in water/oil)", portion: "Generous" },
      { name: "Whey protein isolate", portion: "1 scoop",           note: "Isolate, not concentrate" },
      { name: "Egg white protein powder", portion: "1 scoop" }
    ],
    avoid: [
      { name: "Dried/boiled lentils & beans", why: "GOS — kidney, black, pinto, borlotti" },
      { name: "Baked beans",         why: "GOS + usually onion" },
      { name: "Silken tofu",         why: "GOS" },
      { name: "Soybeans",            why: "GOS" },
      { name: "Sausages & meatballs", why: "Almost always contain onion, garlic and wheat filler" },
      { name: "Marinated / seasoned meats", why: "Read the label — garlic and onion are everywhere" },
      { name: "Breaded or crumbed protein", why: "Wheat coating" },
      { name: "Whey protein concentrate", why: "Lactose" },
      { name: "Textured vegetable protein", why: "GOS" }
    ]
  },

  {
    category: "Dairy & Alternatives",
    icon: "🥛",
    safe: [
      { name: "Lactose-free milk",   portion: "1 cup (250 ml)" },
      { name: "Lactose-free yoghurt", portion: "¾ cup (170 g)" },
      { name: "Almond milk",         portion: "1 cup (250 ml)",     note: "Unsweetened, no inulin" },
      { name: "Rice milk",           portion: "¾ cup (200 ml)" },
      { name: "Macadamia milk",      portion: "1 cup (250 ml)" },
      { name: "Soy milk (soy PROTEIN)", portion: "1 cup (250 ml)",  note: "Protein-based only — whole-soybean is high" },
      { name: "Hard cheeses",        portion: "40 g",               note: "Cheddar, swiss, parmesan, pecorino — naturally low lactose" },
      { name: "Feta",                portion: "40 g" },
      { name: "Brie & camembert",    portion: "40 g" },
      { name: "Mozzarella",          portion: "40 g" },
      { name: "Halloumi",            portion: "50 g" },
      { name: "Butter",              portion: "Generous",           note: "Only trace lactose" },
      { name: "Ghee",                portion: "Generous" },
      { name: "Lactose-free cream",  portion: "½ cup (125 ml)" },
      { name: "Lactose-free ice cream", portion: "½ cup",           note: "Check it isn't sweetened with sorbitol" },
      { name: "Coconut milk (canned)", portion: "½ cup (125 ml)" },
      { name: "Coconut yoghurt",     portion: "⅓ cup (60 g)" }
    ],
    avoid: [
      { name: "Cow's milk",          why: "★ Lactose" },
      { name: "Goat & sheep milk",   why: "Lactose" },
      { name: "Regular yoghurt",     why: "Lactose" },
      { name: "Ricotta", why: "Lactose — cottage cheese is your exception, ricotta is not" },
      { name: "Cream cheese (large serve)", why: "Lactose — 2 tbsp is OK" },
      { name: "Regular ice cream",   why: "Lactose" },
      { name: "Custard",             why: "Lactose" },
      { name: "Condensed & evaporated milk", why: "Concentrated lactose" },
      { name: "Soy milk from whole soybeans", why: "GOS" },
      { name: "Oat milk (large serve)", why: "Fructans — ½ cup is generally OK" },
      { name: "Cashew milk",         why: "GOS + fructans" },
      { name: "Milk chocolate (large serve)", why: "Lactose — 30 g is fine" }
    ]
  },

  {
    category: "Nuts & Seeds",
    icon: "🥜",
    safe: [
      { name: "Peanuts",             portion: "32 nuts (28 g)" },
      { name: "Macadamias",          portion: "20 nuts (40 g)" },
      { name: "Walnuts",             portion: "10 halves (30 g)" },
      { name: "Pecans",              portion: "10 halves (20 g)" },
      { name: "Brazil nuts",         portion: "10 nuts (40 g)" },
      { name: "Peanut butter",       portion: "2 tbsp (50 g)",      note: "No added honey" },
      { name: "Almonds",             portion: "10 nuts (12 g)",     note: "Small serve only — more is high in GOS" },
      { name: "Hazelnuts",           portion: "10 nuts (15 g)",     note: "Small serve only" },
      { name: "Pine nuts",           portion: "1 tbsp (14 g)" },
      { name: "Chia seeds",          portion: "2 tbsp (24 g)" },
      { name: "Pumpkin seeds",       portion: "2 tbsp (23 g)" },
      { name: "Sunflower seeds",     portion: "2 tbsp (18 g)" },
      { name: "Sesame seeds & tahini", portion: "2 tbsp" },
      { name: "Flaxseed / linseed",  portion: "1 tbsp (15 g)" },
      { name: "Hemp seeds",          portion: "2 tbsp (20 g)" },
      { name: "Poppy seeds",         portion: "2 tbsp" },
      { name: "Coconut (shredded)",  portion: "¼ cup (25 g)" }
    ],
    avoid: [
      { name: "Cashews",             why: "★ GOS + fructans" },
      { name: "Pistachios",          why: "★ GOS + fructans" },
      { name: "Almonds (large serve)", why: "GOS — over ~20 nuts" },
      { name: "Cashew butter",       why: "GOS" },
      { name: "Nut mixes",           why: "Almost always contain cashews" }
    ]
  },

  {
    category: "Sweeteners & Sugars",
    icon: "🍯",
    safe: [
      { name: "Table sugar (sucrose)", portion: "1 tbsp (20 g)" },
      { name: "Maple syrup",         portion: "2 tbsp (40 g)",      note: "★ Your honey substitute" },
      { name: "Rice malt syrup",     portion: "2 tbsp (42 g)" },
      { name: "Brown sugar",         portion: "1 tbsp (20 g)" },
      { name: "Golden syrup",        portion: "1 tbsp (21 g)" },
      { name: "Dark chocolate",      portion: "5 squares (30 g)" },
      { name: "Stevia",              portion: "Generous" },
      { name: "Glucose / dextrose",  portion: "Generous" },
      { name: "Cocoa powder",        portion: "2 tbsp (16 g)",      note: "Unsweetened" },
      { name: "Aspartame & sucralose", portion: "As directed" },
      { name: "Allulose",            portion: "Build up gradually",  note: "Mostly absorbed and behaves well here, though Monash has not formally tested it" },
      { name: "Erythritol",          portion: "Moderate amounts",    note: "A polyol, but largely absorbed before the colon — usually the best-tolerated one" }
    ],
    avoid: [
      { name: "Honey",               why: "★ Excess fructose" },
      { name: "Agave nectar",        why: "Excess fructose" },
      { name: "High fructose corn syrup", why: "Excess fructose" },
      { name: "Sorbitol (E420)",     why: "Polyol" },
      { name: "Mannitol (E421)",     why: "Polyol" },
      { name: "Xylitol (E967)",      why: "Polyol" },
      { name: "Maltitol (E965)",     why: "Polyol" },
      { name: "Isomalt (E953)",      why: "Polyol" },
      { name: "Sugar-free gum & mints", why: "Polyols — a very common hidden trigger" },
      { name: "Molasses (large serve)", why: "Fructans" },
      { name: "Inulin / FOS",        why: "Marketed as prebiotic fibre — pure fructan" },
      { name: "Lactulose",           why: "★ Unabsorbed and deliberately fermentable — it's a laxative. Hides in 'prebiotic' sweeteners" },
      { name: "Prebiotic sweetener blends", why: "★ PrebioSweet and similar: every line contains lactulose or inulin. Check yours" },
      { name: "Polydextrose",        why: "Fermentable fibre used in zero-sugar sauces" },
    ]
  },

  {
    category: "Herbs, Spices & Condiments",
    icon: "🧂",
    safe: [
      { name: "Garlic-infused oil",  portion: "Generous",           note: "★★ The single most useful item on this list" },
      { name: "All fresh herbs",     portion: "Generous",           note: "Basil, parsley, coriander, mint, thyme, rosemary, dill, oregano" },
      { name: "Salt & black pepper", portion: "Generous" },
      { name: "Cumin, coriander, paprika, turmeric", portion: "Generous" },
      { name: "Cinnamon, nutmeg, cardamom, cloves", portion: "Generous" },
      { name: "Chilli flakes & fresh chilli", portion: "To taste" },
      { name: "Asafoetida (hing)",   portion: "¼ tsp",              note: "★ Tastes remarkably like onion. Buy the gluten-free kind" },
      { name: "Ginger (fresh & ground)", portion: "Generous" },
      { name: "Soy sauce / tamari",  portion: "2 tbsp (42 ml)",     note: "Tamari for gluten-free" },
      { name: "Fish sauce",          portion: "1 tbsp" },
      { name: "Oyster sauce",        portion: "1 tbsp (21 g)" },
      { name: "Rice wine vinegar",   portion: "2 tbsp" },
      { name: "Red & white wine vinegar", portion: "2 tbsp" },
      { name: "Balsamic vinegar",    portion: "1 tbsp (21 g)" },
      { name: "Mayonnaise",          portion: "2 tbsp",             note: "Garlic-free" },
      { name: "Dijon & yellow mustard", portion: "1 tbsp (17 g)" },
      { name: "Tomato paste",        portion: "2 tbsp (28 g)" },
      { name: "Ketchup",             portion: "1 sachet (13 g)",    note: "No HFCS" },
      { name: "Maple-sweetened jams (strawberry, raspberry)", portion: "1 tbsp" },
      { name: "Miso paste",          portion: "1 tbsp (12 g)" },
      { name: "Capers",              portion: "1 tbsp (28 g)" },
      { name: "Wasabi paste",        portion: "1 tsp" },
      { name: "Nutritional yeast",   portion: "2 tbsp" },
      { name: "Vanilla extract",     portion: "Generous" },
      { name: "Baking powder & soda", portion: "Generous" }
    ],
    avoid: [
      { name: "Garlic powder & granules", why: "★ Fructans — hides in almost every spice blend" },
      { name: "Onion powder",        why: "★ Fructans" },
      { name: "Stock cubes & bouillon", why: "Onion + garlic, always. Buy certified low FODMAP stock" },
      { name: "Pre-made curry pastes", why: "Onion + garlic" },
      { name: "Pesto",               why: "Garlic + cashews" },
      { name: "Hummus",              why: "GOS + garlic" },
      { name: "Tzatziki",            why: "Garlic + lactose" },
      { name: "Chutneys & relishes", why: "Onion, apple, dried fruit" },
      { name: "Gravy & pan sauces (packet)", why: "Wheat + onion" },
      { name: "Worcestershire sauce (large serve)", why: "Onion & garlic — 2 tbsp is generally OK" },
      { name: "Hoisin & most stir-fry sauces", why: "Garlic" },
      { name: "Sriracha (large serve)", why: "Garlic — 1 tsp is OK" },
      { name: "'Natural flavours' on a label", why: "Frequently onion or garlic derived" }
    ]
  },

  {
    category: "Drinks",
    icon: "☕",
    safe: [
      { name: "Water",               portion: "Generous" },
      { name: "Black coffee",        portion: "1 cup",              note: "Caffeine can irritate IBS separately from FODMAPs" },
      { name: "Coffee with lactose-free or almond milk", portion: "1 cup" },
      { name: "Black tea",           portion: "1 cup weak",         note: "Strong brew is higher in fructans" },
      { name: "Green tea",           portion: "1 cup" },
      { name: "White tea",           portion: "1 cup" },
      { name: "Peppermint tea",      portion: "1 cup",              note: "★ Also eases IBS cramping" },
      { name: "Ginger tea",          portion: "1 cup" },
      { name: "Rooibos tea",         portion: "1 cup" },
      { name: "Orange juice",        portion: "½ cup (125 ml)" },
      { name: "Cranberry juice",     portion: "½ cup (125 ml)" },
      { name: "Tomato juice",        portion: "⅔ cup (150 ml)" },
      { name: "Beer",                portion: "1 bottle",           note: "Alcohol is a gut irritant regardless" },
      { name: "Dry wine (red or white)", portion: "1 glass (150 ml)" },
      { name: "Gin, vodka, whiskey", portion: "1 shot (30 ml)",     note: "With soda water, not mixers" },
      { name: "Soda water & sparkling water", portion: "Generous" }
    ],
    avoid: [
      { name: "Apple & pear juice",  why: "Excess fructose" },
      { name: "Mango juice",         why: "Excess fructose" },
      { name: "Cow's milk drinks",   why: "Lactose" },
      { name: "Chai latte (from syrup)", why: "Lactose + fructans" },
      { name: "Chamomile tea",       why: "Fructans" },
      { name: "Fennel tea",          why: "Fructans" },
      { name: "Oolong tea",          why: "Fructans" },
      { name: "Dandelion & chicory 'coffee'", why: "Fructans" },
      { name: "Coconut water (>100 ml)", why: "Excess fructose + sorbitol" },
      { name: "Rum",                 why: "Excess fructose" },
      { name: "Sweet dessert wine",  why: "Excess fructose" },
      { name: "Regular soft drinks with HFCS", why: "Excess fructose" },
      { name: "Sugar-free soft drinks with polyols", why: "Polyols" },
      { name: "Kombucha (large serve)", why: "Fructans — 125 ml is usually OK" },
      { name: "Smoothies with apple, mango or honey", why: "Multiple FODMAPs stacked" }
    ]
  }
];

/* ==========================================================================
   PERSONAL EXCEPTIONS
   --------------------------------------------------------------------------
   Foods the standard low FODMAP diet restricts, that Aleksandra tolerates.
   The diet is meant to be personalised — the elimination list is a starting
   point, not a life sentence. Add to this as you learn what you handle.
   ========================================================================== */

const PERSONAL_OK = [
  {
    name: "Cottage cheese",
    portion: "Normal portions",
    note: "Standard advice restricts it for lactose. You tolerate it, so it stays — and it's a genuinely useful low-fat protein for both cooking and desserts."
  },
  {
    name: "Long-cook wheat pasta",
    portion: "Normal portions",
    note: "Standard advice cuts it for fructans. You tolerate it, so recipes use it rather than defaulting to gluten-free."
  }
];
