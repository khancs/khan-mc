(function(global) {
  global.assets.advancements.recipes.brewing = {
    "cauldron": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:cauldron"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "cauldron"
          }
        },
        "has_water_bucket": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:water_bucket"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_water_bucket"
        ]
      ]
    },
    "glass_bottle": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:glass_bottle"
        ]
      },
      "criteria": {
        "has_glass": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:glass"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "glass_bottle"
          }
        }
      },
      "requirements": [
        [
          "has_glass",
          "has_the_recipe"
        ]
      ]
    },
    "golden_carrot": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:golden_carrot"
        ]
      },
      "criteria": {
        "has_gold_nugget": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gold_nugget"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "golden_carrot"
          }
        }
      },
      "requirements": [
        [
          "has_gold_nugget",
          "has_the_recipe"
        ]
      ]
    },
    "blaze_powder": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:blaze_powder"
        ]
      },
      "criteria": {
        "has_blaze_rod": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:blaze_rod"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "blaze_powder"
          }
        }
      },
      "requirements": [
        [
          "has_blaze_rod",
          "has_the_recipe"
        ]
      ]
    },
    "speckled_melon": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:speckled_melon"
        ]
      },
      "criteria": {
        "has_melon": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:melon"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "speckled_melon"
          }
        }
      },
      "requirements": [
        [
          "has_melon",
          "has_the_recipe"
        ]
      ]
    },
    "fermented_spider_eye": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:fermented_spider_eye"
        ]
      },
      "criteria": {
        "has_spider_eye": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:spider_eye"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "fermented_spider_eye"
          }
        }
      },
      "requirements": [
        [
          "has_spider_eye",
          "has_the_recipe"
        ]
      ]
    },
    "brewing_stand": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:brewing_stand"
        ]
      },
      "criteria": {
        "has_blaze_rod": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:blaze_rod"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "brewing_stand"
          }
        }
      },
      "requirements": [
        [
          "has_blaze_rod",
          "has_the_recipe"
        ]
      ]
    },
    "magma_cream": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:magma_cream"
        ]
      },
      "criteria": {
        "has_blaze_powder": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:blaze_powder"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "magma_cream"
          }
        }
      },
      "requirements": [
        [
          "has_blaze_powder",
          "has_the_recipe"
        ]
      ]
    }
  };
})(window);
