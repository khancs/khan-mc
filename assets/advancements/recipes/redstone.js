(function(global) {
  global.assets.advancements.recipes.redstone = {
    "dropper": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:dropper"
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
            "recipe": "dropper"
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
    "jungle_fence_gate": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:jungle_fence_gate"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "jungle_fence_gate"
          }
        },
        "has_planks": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:planks",
                "data": 3
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_planks"
        ]
      ]
    },
    "stone_pressure_plate": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:stone_pressure_plate"
        ]
      },
      "criteria": {
        "has_stone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:stone",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "stone_pressure_plate"
          }
        }
      },
      "requirements": [
        [
          "has_stone",
          "has_the_recipe"
        ]
      ]
    },
    "acacia_door": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:acacia_door"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "acacia_door"
          }
        },
        "has_planks": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:planks",
                "data": 4
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_planks"
        ]
      ]
    },
    "spruce_fence_gate": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:spruce_fence_gate"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "spruce_fence_gate"
          }
        },
        "has_planks": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:planks",
                "data": 1
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_planks"
        ]
      ]
    },
    "wooden_button": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:wooden_button"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "wooden_button"
          }
        },
        "has_planks": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:planks"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_planks"
        ]
      ]
    },
    "redstone_lamp": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:redstone_lamp"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "redstone_lamp"
          }
        },
        "has_glowstone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:glowstone"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_glowstone"
        ]
      ]
    },
    "observer": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:observer"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "observer"
          }
        },
        "has_quartz": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:quartz"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_quartz"
        ]
      ]
    },
    "light_weighted_pressure_plate": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_weighted_pressure_plate"
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
            "recipe": "light_weighted_pressure_plate"
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
    "birch_door": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:birch_door"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "birch_door"
          }
        },
        "has_planks": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:planks",
                "data": 2
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_planks"
        ]
      ]
    },
    "redstone_block": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:redstone_block",
          "minecraft:redstone"
        ]
      },
      "criteria": {
        "has_at_least_9_redstone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:redstone",
                "count": {
                  "min": 9
                }
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "redstone_block"
          }
        }
      },
      "requirements": [
        [
          "has_at_least_9_redstone",
          "has_the_recipe"
        ]
      ]
    },
    "comparator": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:comparator"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "comparator"
          }
        },
        "has_quartz": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:quartz"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_quartz"
        ]
      ]
    },
    "noteblock": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:noteblock"
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
            "recipe": "noteblock"
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
    "trapdoor": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:trapdoor"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "trapdoor"
          }
        },
        "has_planks": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:planks"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_planks"
        ]
      ]
    },
    "sticky_piston": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:sticky_piston"
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
            "recipe": "sticky_piston"
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
    "trapped_chest": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:trapped_chest"
        ]
      },
      "criteria": {
        "has_tripwire_hook": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:tripwire_hook"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "trapped_chest"
          }
        }
      },
      "requirements": [
        [
          "has_tripwire_hook",
          "has_the_recipe"
        ]
      ]
    },
    "dark_oak_fence_gate": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:dark_oak_fence_gate"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "dark_oak_fence_gate"
          }
        },
        "has_planks": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:planks",
                "data": 5
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_planks"
        ]
      ]
    },
    "dispenser": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:dispenser"
        ]
      },
      "criteria": {
        "has_bow": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:bow"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "dispenser"
          }
        }
      },
      "requirements": [
        [
          "has_bow",
          "has_the_recipe"
        ]
      ]
    },
    "wooden_door": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:wooden_door"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "wooden_door"
          }
        },
        "has_planks": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:planks",
                "data": 0
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_planks"
        ]
      ]
    },
    "heavy_weighted_pressure_plate": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:heavy_weighted_pressure_plate"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "heavy_weighted_pressure_plate"
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
    "tnt": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:tnt"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "tnt"
          }
        },
        "has_gunpowder": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gunpowder"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_gunpowder"
        ]
      ]
    },
    "lever": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:lever"
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
            "recipe": "lever"
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
    "dark_oak_door": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:dark_oak_door"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "dark_oak_door"
          }
        },
        "has_planks": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:planks",
                "data": 5
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_planks"
        ]
      ]
    },
    "acacia_fence_gate": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:acacia_fence_gate"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "acacia_fence_gate"
          }
        },
        "has_planks": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:planks",
                "data": 4
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_planks"
        ]
      ]
    },
    "spruce_door": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:spruce_door"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "spruce_door"
          }
        },
        "has_planks": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:planks",
                "data": 1
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_planks"
        ]
      ]
    },
    "stone_button": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:stone_button"
        ]
      },
      "criteria": {
        "has_stone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:stone",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "stone_button"
          }
        }
      },
      "requirements": [
        [
          "has_stone",
          "has_the_recipe"
        ]
      ]
    },
    "birch_fence_gate": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:birch_fence_gate"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "birch_fence_gate"
          }
        },
        "has_planks": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:planks",
                "data": 2
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_planks"
        ]
      ]
    },
    "fence_gate": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:fence_gate"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "fence_gate"
          }
        },
        "has_planks": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:planks",
                "data": 0
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_planks"
        ]
      ]
    },
    "hopper": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:hopper"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "hopper"
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
    "redstone": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:redstone"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "redstone"
          }
        },
        "has_redstone_block": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:redstone_block"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_redstone_block"
        ]
      ]
    },
    "iron_trapdoor": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:iron_trapdoor"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "iron_trapdoor"
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
    "daylight_detector": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:daylight_detector"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "daylight_detector"
          }
        },
        "has_quartz": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:quartz"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_quartz"
        ]
      ]
    },
    "tripwire_hook": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:tripwire_hook"
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
            "recipe": "tripwire_hook"
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
    "redstone_torch": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:redstone_torch"
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
            "recipe": "redstone_torch"
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
    "jungle_door": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:jungle_door"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "jungle_door"
          }
        },
        "has_planks": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:planks",
                "data": 3
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_planks"
        ]
      ]
    },
    "iron_door": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:iron_door"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "iron_door"
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
    "piston": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:piston"
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
            "recipe": "piston"
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
    "repeater": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:repeater"
        ]
      },
      "criteria": {
        "has_redstone_torch": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:redstone_torch"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "repeater"
          }
        }
      },
      "requirements": [
        [
          "has_redstone_torch",
          "has_the_recipe"
        ]
      ]
    },
    "wooden_pressure_plate": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:wooden_pressure_plate"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "wooden_pressure_plate"
          }
        },
        "has_planks": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:planks"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_planks"
        ]
      ]
    }
  };
})(window);
