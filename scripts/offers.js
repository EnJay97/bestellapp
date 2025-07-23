let offers = [
    {
      "type": "Salat",
      "info": [  
        {
          "name": "Gemischter Salat",
          "description": "Eisbergsalat, Tomaten, Gurken, Paprika, Karotten, Balsamico-Dressing",
          "price": 4.50,
        },
        {
          "name": "Mediterraner Salat",
          "description": "Rucola, Oliven, getrocknete Tomaten, Artischocken, Zitronen-Olivenöl-Dressing",
          "price": 6.20,
        },
        {
          "name": "Kichererbsen-Salat",
          "description": "Kichererbsen, Gurken, Tomaten, Petersilie, Minze, Zitronen-Dressing",
          "price": 5.80,
        },
        {
          "name": "Linsensalat",
          "description": "Belugalinsen, Rucola, Paprika, Frühlingszwiebeln, Senf-Vinaigrette",
          "price": 6.00,
        },
        {
          "name": "Asia-Salat",
          "description": "Chinakohl, Karotten, Edamame, Sesam, Soja-Ingwer-Dressing",
          "price": 6.20,
        },
        {
          "name": "Avocado-Salat",
          "description": "Eisbergsalat, Avocado, Cherry-Tomaten, Gurke, Limetten-Dressing",
          "price": 6.90,
        }
      ]
    },
    {
      "type": "Pizza",
      "info": [
        {
          "name": "Pizza Magherita",
          "description": "Tomatensoße, veganer Pizzaschmelz, Basilikum",
          "price": 8.50,  
        },
        {
          "name": "Pizza Funghi",
          "description": "Tomatensauce, veganer Pizzaschmelz, Champignons",
          "price": 9.00,
        },
        {
          "name": "Pizza Verdura",
          "description": "Tomatensauce, veganer Pizzaschmelz, gegrilltes Gemüse, Rucola",
          "price": 9.50,
        },
        {
          "name": "Pizza Spinat",
          "description": "Tomatensauce, veganer Pizzaschmelz, Spinat, Knoblauch",
          "price": 9.20,
        },
        {
          "name": "Pizza BBQ Jackfruit",
          "description": "BBQ-Sauce, Jackfruit, Zwiebeln, veganer Pizzaschmelz",
          "price": 10.00,
        }
      ]
    },
    {
      "type": "Burger",
      "info": [
        {
          "name": "Not Hamburger",
          "description": "Gemüsepatty, veganer Scheibenkäse, Salat, Tomate, Gurke und veganer Mayo",
          "price": 9.50,
        },
        {
          "name": "BBQ Jackfruit Burger",
          "description": "Jackfruit in BBQ-Sauce, veganer Scheibenkäse, Cole Slaw und Röstzwiebeln",
          "price": 10.50,
        },
        {
          "name": "Spicy Chickpea Burger",
          "description": "Kichererbsenpatty, veganer Scheibenkäse, Jalapeños und Chili-Sauce",
          "price": 9.90,
        },
        {
          "name": "Avocado Mushroom Burger",
          "description": "Gegrillter Riesenchampignon, veganer Scheibenkäse, Avocado und vegane Aioli",
          "price": 9.20,
        },
        {
          "name": "No Chicken Burger",
          "description": "Knuspriges veganes Hähnchenpatty, veganer Scheibenkäse, Salat, Tomate, vegane Ranch-Soße",
          "price": 10.30,
        }
      ]
    },  
    {
      "type": "Pasta",
      "info": [
        {
          "name": "Spaghetti Pomodoro",
          "description": "Spaghetti mit Tomatensauce, Tomatenstücken und frischem Basilikum",
          "price": 7.50,
        },
        {
          "name": "Spaghetti Bolognese",
          "description": "Spaghetti mit veganer Bolognese aus Linsen und fein gehackten Walnüssen",
          "price": 8.50,
        },
        {
          "name": "Linguuine Pesto",
          "description": "Linguine mit hausgemachtem veganem Basilikumpesto und gerösteten Pinienkernen",
          "price": 8.20,
        },
        {
          "name": "Nudeln Funghi",
          "description": "Bandnudeln mit veganer Pilzrahmsauce",
          "price": 9.00,
        },
        {
          "name": "Penne Arrabbiata",
          "description": "Penne in scharfer Tomaten-Knoblauchsauce",
          "price": 7.80,
        },
        {
          "name": "Pasta Gemüse",
          "description": "Fussilli mit gegrilltem Gemüse in Tomatensauce",
          "price": 8.90,
        }
      ]
    },
    {
      "type": "Dessert",
      "info": [
        {
          "name": "Schoko-Mousse",
          "description": "Cremige Mousse aus Avocado, Kakao und Ahornsirup",
          "price": 4.50,
        },
        {
          "name": "Chia-Pudding",
          "description": "Chiasamen mit Kokosmilch getoppt Mangopüree",
          "price": 4.20,
        },
        {
          "name": "Veganes Tiramisu",
          "description": "Mit Espresso getränkter Biskuit, Cashewcreme, Kakaopulver",
          "price": 4.90,
        },
        {
          "name": "Obstsalat",
          "description": "Frisches Obst der Region mit Minze",
          "price": 3.80,
        }
      ]
    },
    {
      "type": "Getränke",
      "info": [
        {
          "name": "Cola",
          "description": "Erfrischendes koffeinhaltiges Getränk",
          "price": 2.50,
        },
        {
          "name": "Cola Zero",
          "description": "Koffeinhaltige Cola ohne Zucker",
          "price": 2.50,
        },
        {
          "name": "Zitronenlimonade",
          "description": "Hausgemachte Limonade mit frischer Zitrone",
          "price": 2.80,
        },
        {
          "name": "Eistee Pfirsich",
          "description": "Gekühlter schwarzer Tee mit Pfirsichgeschmack",
          "price": 2.70,
        },
        {
          "name": "Mineralwasser",
          "description": "Still oder Medium",
          "price": 2.00,
        },
        {
          "name": "Apfelschorle",
          "description": "Erfrischende Mischung aus Apfelsaft und Mineralwasser",
          "price": 2.60,
        }
      ]
    }   
];
