(function(global) {
  global.assets.advancements.recipes.tools = {
    "stone_shovel": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:stone_shovel"
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
            "recipe": "stone_shovel"
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
    "clock": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:clock"
        ]
      },
      "criteria": {
        "has_redstone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:redstone"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "clock"
          }
        }
      },
      "requirements": [
        [
          "has_redstone",
          "has_the_recipe"
        ]
      ]
    },
    "fishing_rod": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:fishing_rod"
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
            "recipe": "fishing_rod"
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
    "shears": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:shears"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "shears"
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
    "compass": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:compass"
        ]
      },
      "criteria": {
        "has_redstone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:redstone"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "compass"
          }
        }
      },
      "requirements": [
        [
          "has_redstone",
          "has_the_recipe"
        ]
      ]
    },
    "iron_axe": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:iron_axe"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "iron_axe"
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
    "diamond_axe": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:diamond_axe"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "diamond_axe"
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
    "diamond_hoe": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:diamond_hoe"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "diamond_hoe"
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
    "iron_hoe": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:iron_hoe"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "iron_hoe"
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
    "wooden_hoe": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:wooden_hoe"
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
            "recipe": "wooden_hoe"
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
    "wooden_axe": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:wooden_axe"
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
            "recipe": "wooden_axe"
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
    "wooden_shovel": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:wooden_shovel"
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
            "recipe": "wooden_shovel"
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
    "stone_hoe": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:stone_hoe"
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
            "recipe": "stone_hoe"
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
    "wooden_pickaxe": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:wooden_pickaxe"
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
            "recipe": "wooden_pickaxe"
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
    "diamond_shovel": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:diamond_shovel"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "diamond_shovel"
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
    "stone_pickaxe": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:stone_pickaxe"
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
            "recipe": "stone_pickaxe"
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
    "golden_pickaxe": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:golden_pickaxe"
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
            "recipe": "golden_pickaxe"
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
    "lead": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:lead"
        ]
      },
      "criteria": {
        "has_slime_ball": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:slime_ball"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "lead"
          }
        }
      },
      "requirements": [
        [
          "has_slime_ball",
          "has_the_recipe"
        ]
      ]
    },
    "stone_axe": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:stone_axe"
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
            "recipe": "stone_axe"
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
    "flint_and_steel": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:flint_and_steel"
        ]
      },
      "criteria": {
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
            "recipe": "flint_and_steel"
          }
        },
        "has_obsidian": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:obsidian"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_flint",
          "has_the_recipe",
          "has_obsidian"
        ]
      ]
    },
    "diamond_pickaxe": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:diamond_pickaxe"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "diamond_pickaxe"
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
    "iron_shovel": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:iron_shovel"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "iron_shovel"
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
    "iron_pickaxe": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:iron_pickaxe"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "iron_pickaxe"
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
    "golden_hoe": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:golden_hoe"
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
            "recipe": "golden_hoe"
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
    "golden_shovel": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:golden_shovel"
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
            "recipe": "golden_shovel"
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
    "golden_axe": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:golden_axe"
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
            "recipe": "golden_axe"
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
