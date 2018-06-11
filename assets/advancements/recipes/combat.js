(function(global) {
  global.assets.advancements.recipes.combat = {
    "leather_chestplate": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:leather_chestplate"
        ]
      },
      "criteria": {
        "has_leather": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:leather"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "leather_chestplate"
          }
        }
      },
      "requirements": [
        [
          "has_leather",
          "has_the_recipe"
        ]
      ]
    },
    "diamond_sword": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:diamond_sword"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "diamond_sword"
          }
        },
        "has_diamond": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:diamond"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_diamond"
        ]
      ]
    },
    "stone_sword": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:stone_sword"
        ]
      },
      "criteria": {
        "has_cobblestone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:cobblestone"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "stone_sword"
          }
        }
      },
      "requirements": [
        [
          "has_cobblestone",
          "has_the_recipe"
        ]
      ]
    },
    "diamond_chestplate": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:diamond_chestplate"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "diamond_chestplate"
          }
        },
        "has_diamond": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:diamond"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_diamond"
        ]
      ]
    },
    "leather_helmet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:leather_helmet"
        ]
      },
      "criteria": {
        "has_leather": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:leather"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "leather_helmet"
          }
        }
      },
      "requirements": [
        [
          "has_leather",
          "has_the_recipe"
        ]
      ]
    },
    "iron_chestplate": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:iron_chestplate"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "iron_chestplate"
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
    "golden_boots": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:golden_boots"
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
            "recipe": "golden_boots"
          }
        }
      },
      "requirements": [
        [
          "has_gold_ingot",
          "has_the_recipe"
        ]
      ]
    },
    "golden_leggings": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:golden_leggings"
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
            "recipe": "golden_leggings"
          }
        }
      },
      "requirements": [
        [
          "has_gold_ingot",
          "has_the_recipe"
        ]
      ]
    },
    "wooden_sword": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:wooden_sword"
        ]
      },
      "criteria": {
        "has_stick": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:stick"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "wooden_sword"
          }
        }
      },
      "requirements": [
        [
          "has_stick",
          "has_the_recipe"
        ]
      ]
    },
    "iron_boots": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:iron_boots"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "iron_boots"
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
    "shield": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:shield"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "shield"
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
    "arrow": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:arrow"
        ]
      },
      "criteria": {
        "has_feather": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:feather"
              }
            ]
          }
        },
        "has_flint": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:flint"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "arrow"
          }
        }
      },
      "requirements": [
        [
          "has_feather",
          "has_flint",
          "has_the_recipe"
        ]
      ]
    },
    "golden_helmet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:golden_helmet"
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
            "recipe": "golden_helmet"
          }
        }
      },
      "requirements": [
        [
          "has_gold_ingot",
          "has_the_recipe"
        ]
      ]
    },
    "golden_sword": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:golden_sword"
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
            "recipe": "golden_sword"
          }
        }
      },
      "requirements": [
        [
          "has_gold_ingot",
          "has_the_recipe"
        ]
      ]
    },
    "golden_chestplate": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:golden_chestplate"
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
            "recipe": "golden_chestplate"
          }
        }
      },
      "requirements": [
        [
          "has_gold_ingot",
          "has_the_recipe"
        ]
      ]
    },
    "iron_sword": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:iron_sword"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "iron_sword"
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
    "iron_leggings": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:iron_leggings"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "iron_leggings"
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
    "leather_leggings": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:leather_leggings"
        ]
      },
      "criteria": {
        "has_leather": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:leather"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "leather_leggings"
          }
        }
      },
      "requirements": [
        [
          "has_leather",
          "has_the_recipe"
        ]
      ]
    },
    "iron_helmet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:iron_helmet"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "iron_helmet"
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
    "bow": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:bow"
        ]
      },
      "criteria": {
        "has_string": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:string"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "bow"
          }
        }
      },
      "requirements": [
        [
          "has_string",
          "has_the_recipe"
        ]
      ]
    },
    "spectral_arrow": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:spectral_arrow"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "spectral_arrow"
          }
        },
        "has_glowstone_dust": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:glowstone_dust"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_glowstone_dust"
        ]
      ]
    },
    "diamond_boots": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:diamond_boots"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "diamond_boots"
          }
        },
        "has_diamond": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:diamond"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_diamond"
        ]
      ]
    },
    "leather_boots": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:leather_boots"
        ]
      },
      "criteria": {
        "has_leather": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:leather"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "leather_boots"
          }
        }
      },
      "requirements": [
        [
          "has_leather",
          "has_the_recipe"
        ]
      ]
    },
    "diamond_leggings": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:diamond_leggings"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "diamond_leggings"
          }
        },
        "has_diamond": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:diamond"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_diamond"
        ]
      ]
    },
    "diamond_helmet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:diamond_helmet"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "diamond_helmet"
          }
        },
        "has_diamond": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:diamond"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_diamond"
        ]
      ]
    }
  };
})(window);
