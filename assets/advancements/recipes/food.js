(function(global) {
  global.assets.advancements.recipes.food = {
    "mushroom_stew": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:mushroom_stew"
        ]
      },
      "criteria": {
        "has_bowl": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:bowl"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "mushroom_stew"
          }
        }
      },
      "requirements": [
        [
          "has_bowl",
          "has_the_recipe"
        ]
      ]
    },
    "cookie": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:cookie"
        ]
      },
      "criteria": {
        "has_cocoa": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 3
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "cookie"
          }
        }
      },
      "requirements": [
        [
          "has_cocoa",
          "has_the_recipe"
        ]
      ]
    },
    "beetroot_soup": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:beetroot_soup"
        ]
      },
      "criteria": {
        "has_beetroot": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:beetroot"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "beetroot_soup"
          }
        }
      },
      "requirements": [
        [
          "has_beetroot",
          "has_the_recipe"
        ]
      ]
    },
    "rabbit_stew_from_brown_mushroom": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:rabbit_stew_from_brown_mushroom"
        ]
      },
      "criteria": {
        "has_cooked_rabbit": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:cooked_rabbit"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "rabbit_stew_from_brown_mushroom"
          }
        }
      },
      "requirements": [
        [
          "has_cooked_rabbit",
          "has_the_recipe"
        ]
      ]
    },
    "pumpkin_pie": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:pumpkin_pie"
        ]
      },
      "criteria": {
        "has_pumpkin": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:pumpkin"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "pumpkin_pie"
          }
        }
      },
      "requirements": [
        [
          "has_pumpkin",
          "has_the_recipe"
        ]
      ]
    },
    "rabbit_stew_from_red_mushroom": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:rabbit_stew_from_red_mushroom"
        ]
      },
      "criteria": {
        "has_cooked_rabbit": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:cooked_rabbit"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "rabbit_stew_from_red_mushroom"
          }
        }
      },
      "requirements": [
        [
          "has_cooked_rabbit",
          "has_the_recipe"
        ]
      ]
    },
    "cake": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:cake"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "cake"
          }
        },
        "has_egg": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:egg"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_egg"
        ]
      ]
    },
    "bread": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:bread"
        ]
      },
      "criteria": {
        "has_wheat": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wheat"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "bread"
          }
        }
      },
      "requirements": [
        [
          "has_wheat",
          "has_the_recipe"
        ]
      ]
    },
    "golden_apple": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:golden_apple"
        ]
      },
      "criteria": {
        "has_gold_ingot": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gold_ingot"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "golden_apple"
          }
        }
      },
      "requirements": [
        [
          "has_gold_ingot",
          "has_the_recipe"
        ]
      ]
    }
  };
})(window);
