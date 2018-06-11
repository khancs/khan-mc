(function(global) {
  global.assets.advancements.recipes.transportation = {
    "furnace_minecart": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:furnace_minecart"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "furnace_minecart"
          }
        },
        "has_minecart": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:minecart"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_minecart"
        ]
      ]
    },
    "golden_rail": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:golden_rail"
        ]
      },
      "criteria": {
        "has_rail": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:rail"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "golden_rail"
          }
        }
      },
      "requirements": [
        [
          "has_rail",
          "has_the_recipe"
        ]
      ]
    },
    "hopper_minecart": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:hopper_minecart"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "hopper_minecart"
          }
        },
        "has_minecart": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:minecart"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_minecart"
        ]
      ]
    },
    "acacia_boat": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:acacia_boat"
        ]
      },
      "criteria": {
        "entered_water": {
          "trigger": "minecraft:enter_block",
          "conditions": {
            "block": "minecraft:water"
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "acacia_boat"
          }
        }
      },
      "requirements": [
        [
          "entered_water",
          "has_the_recipe"
        ]
      ]
    },
    "minecart": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:minecart"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "minecart"
          }
        },
        "has_iron_ingot": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:iron_ingot"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_iron_ingot"
        ]
      ]
    },
    "birch_boat": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:birch_boat"
        ]
      },
      "criteria": {
        "entered_water": {
          "trigger": "minecraft:enter_block",
          "conditions": {
            "block": "minecraft:water"
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "birch_boat"
          }
        }
      },
      "requirements": [
        [
          "entered_water",
          "has_the_recipe"
        ]
      ]
    },
    "tnt_minecart": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:tnt_minecart"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "tnt_minecart"
          }
        },
        "has_minecart": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:minecart"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_minecart"
        ]
      ]
    },
    "dark_oak_boat": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:dark_oak_boat"
        ]
      },
      "criteria": {
        "entered_water": {
          "trigger": "minecraft:enter_block",
          "conditions": {
            "block": "minecraft:water"
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "dark_oak_boat"
          }
        }
      },
      "requirements": [
        [
          "entered_water",
          "has_the_recipe"
        ]
      ]
    },
    "chest_minecart": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:chest_minecart"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "chest_minecart"
          }
        },
        "has_minecart": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:minecart"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_minecart"
        ]
      ]
    },
    "spruce_boat": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:spruce_boat"
        ]
      },
      "criteria": {
        "entered_water": {
          "trigger": "minecraft:enter_block",
          "conditions": {
            "block": "minecraft:water"
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "spruce_boat"
          }
        }
      },
      "requirements": [
        [
          "entered_water",
          "has_the_recipe"
        ]
      ]
    },
    "activator_rail": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:activator_rail"
        ]
      },
      "criteria": {
        "has_rail": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:rail"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "activator_rail"
          }
        }
      },
      "requirements": [
        [
          "has_rail",
          "has_the_recipe"
        ]
      ]
    },
    "carrot_on_a_stick": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:carrot_on_a_stick"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "carrot_on_a_stick"
          }
        },
        "has_carrot": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:carrot"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_carrot"
        ]
      ]
    },
    "detector_rail": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:detector_rail"
        ]
      },
      "criteria": {
        "has_rail": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:rail"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "detector_rail"
          }
        }
      },
      "requirements": [
        [
          "has_rail",
          "has_the_recipe"
        ]
      ]
    },
    "rail": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:rail"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "rail"
          }
        },
        "has_minecart": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:minecart"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_minecart"
        ]
      ]
    },
    "boat": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:boat"
        ]
      },
      "criteria": {
        "entered_water": {
          "trigger": "minecraft:enter_block",
          "conditions": {
            "block": "minecraft:water"
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "boat"
          }
        }
      },
      "requirements": [
        [
          "entered_water",
          "has_the_recipe"
        ]
      ]
    },
    "jungle_boat": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:jungle_boat"
        ]
      },
      "criteria": {
        "entered_water": {
          "trigger": "minecraft:enter_block",
          "conditions": {
            "block": "minecraft:water"
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "jungle_boat"
          }
        }
      },
      "requirements": [
        [
          "entered_water",
          "has_the_recipe"
        ]
      ]
    }
  };
})(window);
