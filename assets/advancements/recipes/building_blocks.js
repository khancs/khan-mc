(function(global) {
  global.assets.advancements.recipes.building_blocks = {
    "brown_concrete_powder": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:brown_concrete_powder"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "brown_concrete_powder"
          }
        },
        "has_sand": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sand"
              }
            ]
          }
        },
        "has_gravel": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gravel"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_sand",
          "has_gravel"
        ]
      ]
    },
    "dark_oak_planks": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:dark_oak_planks"
        ]
      },
      "criteria": {
        "has_log2": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:log2",
                "data": 1
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "dark_oak_planks"
          }
        }
      },
      "requirements": [
        [
          "has_log2",
          "has_the_recipe"
        ]
      ]
    },
    "chiseled_red_sandstone": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:chiseled_red_sandstone"
        ]
      },
      "criteria": {
        "has_red_sandstone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:red_sandstone"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "chiseled_red_sandstone"
          }
        }
      },
      "requirements": [
        [
          "has_red_sandstone",
          "has_the_recipe"
        ]
      ]
    },
    "lapis_block": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:lapis_block",
          "minecraft:lapis_lazuli"
        ]
      },
      "criteria": {
        "has_at_least_9_lapis": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "count": {
                  "min": 9
                },
                "data": 4
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "lapis_block"
          }
        }
      },
      "requirements": [
        [
          "has_at_least_9_lapis",
          "has_the_recipe"
        ]
      ]
    },
    "orange_stained_hardened_clay": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:orange_stained_hardened_clay"
        ]
      },
      "criteria": {
        "has_hardened_clay": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:hardened_clay"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "orange_stained_hardened_clay"
          }
        }
      },
      "requirements": [
        [
          "has_hardened_clay",
          "has_the_recipe"
        ]
      ]
    },
    "light_gray_stained_hardened_clay": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_gray_stained_hardened_clay"
        ]
      },
      "criteria": {
        "has_hardened_clay": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:hardened_clay"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_gray_stained_hardened_clay"
          }
        }
      },
      "requirements": [
        [
          "has_hardened_clay",
          "has_the_recipe"
        ]
      ]
    },
    "jungle_stairs": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:jungle_stairs"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "jungle_stairs"
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
    "spruce_stairs": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:spruce_stairs"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "spruce_stairs"
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
    "light_gray_stained_glass": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_gray_stained_glass"
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
            "recipe": "light_gray_stained_glass"
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
    "purpur_block": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:purpur_block"
        ]
      },
      "criteria": {
        "has_chorus_fruit_popped": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:chorus_fruit_popped"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "purpur_block"
          }
        }
      },
      "requirements": [
        [
          "has_chorus_fruit_popped",
          "has_the_recipe"
        ]
      ]
    },
    "smooth_sandstone": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:smooth_sandstone"
        ]
      },
      "criteria": {
        "has_sandstone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sandstone",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "smooth_sandstone"
          }
        }
      },
      "requirements": [
        [
          "has_sandstone",
          "has_the_recipe"
        ]
      ]
    },
    "nether_brick_slab": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:nether_brick_slab"
        ]
      },
      "criteria": {
        "has_nether_brick": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:nether_brick"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "nether_brick_slab"
          }
        }
      },
      "requirements": [
        [
          "has_nether_brick",
          "has_the_recipe"
        ]
      ]
    },
    "purple_stained_hardened_clay": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:purple_stained_hardened_clay"
        ]
      },
      "criteria": {
        "has_hardened_clay": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:hardened_clay"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "purple_stained_hardened_clay"
          }
        }
      },
      "requirements": [
        [
          "has_hardened_clay",
          "has_the_recipe"
        ]
      ]
    },
    "yellow_concrete_powder": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:yellow_concrete_powder"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "yellow_concrete_powder"
          }
        },
        "has_sand": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sand"
              }
            ]
          }
        },
        "has_gravel": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gravel"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_sand",
          "has_gravel"
        ]
      ]
    },
    "coarse_dirt": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:coarse_dirt"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "coarse_dirt"
          }
        },
        "has_gravel": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gravel"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_gravel"
        ]
      ]
    },
    "andesite": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:andesite"
        ]
      },
      "criteria": {
        "has_stone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:stone",
                "data": 3
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "andesite"
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
    "brown_stained_glass": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:brown_stained_glass"
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
            "recipe": "brown_stained_glass"
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
    "cyan_concrete_powder": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:cyan_concrete_powder"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "cyan_concrete_powder"
          }
        },
        "has_sand": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sand"
              }
            ]
          }
        },
        "has_gravel": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gravel"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_sand",
          "has_gravel"
        ]
      ]
    },
    "stonebrick": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:stonebrick"
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
            "recipe": "stonebrick"
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
    "lime_wool": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:lime_wool"
        ]
      },
      "criteria": {
        "has_white_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "lime_wool"
          }
        }
      },
      "requirements": [
        [
          "has_white_wool",
          "has_the_recipe"
        ]
      ]
    },
    "cobblestone_slab": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:cobblestone_slab"
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
            "recipe": "cobblestone_slab"
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
    "red_sandstone_slab": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:red_sandstone_slab"
        ]
      },
      "criteria": {
        "has_red_sandstone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:red_sandstone"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "red_sandstone_slab"
          }
        }
      },
      "requirements": [
        [
          "has_red_sandstone",
          "has_the_recipe"
        ]
      ]
    },
    "orange_wool": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:orange_wool"
        ]
      },
      "criteria": {
        "has_white_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "orange_wool"
          }
        }
      },
      "requirements": [
        [
          "has_white_wool",
          "has_the_recipe"
        ]
      ]
    },
    "birch_wooden_slab": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:birch_wooden_slab"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "birch_wooden_slab"
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
    "sandstone_slab": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:sandstone_slab"
        ]
      },
      "criteria": {
        "has_sandstone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sandstone"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "sandstone_slab"
          }
        }
      },
      "requirements": [
        [
          "has_sandstone",
          "has_the_recipe"
        ]
      ]
    },
    "smooth_red_sandstone": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:smooth_red_sandstone"
        ]
      },
      "criteria": {
        "has_red_sandstone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:red_sandstone",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "smooth_red_sandstone"
          }
        }
      },
      "requirements": [
        [
          "has_red_sandstone",
          "has_the_recipe"
        ]
      ]
    },
    "brick_slab": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:brick_slab"
        ]
      },
      "criteria": {
        "has_brick_block": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:brick_block"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "brick_slab"
          }
        }
      },
      "requirements": [
        [
          "has_brick_block",
          "has_the_recipe"
        ]
      ]
    },
    "pink_stained_glass": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:pink_stained_glass"
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
            "recipe": "pink_stained_glass"
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
    "purpur_slab": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:purpur_slab"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "purpur_slab"
          }
        },
        "has_purpur_block": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:purpur_block"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_purpur_block"
        ]
      ]
    },
    "chiseled_quartz_block": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:chiseled_quartz_block"
        ]
      },
      "criteria": {
        "has_quartz_block": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:quartz_block"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "chiseled_quartz_block"
          }
        }
      },
      "requirements": [
        [
          "has_quartz_block",
          "has_the_recipe"
        ]
      ]
    },
    "birch_planks": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:birch_planks"
        ]
      },
      "criteria": {
        "has_log": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:log",
                "data": 2
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "birch_planks"
          }
        }
      },
      "requirements": [
        [
          "has_log",
          "has_the_recipe"
        ]
      ]
    },
    "diorite": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:diorite"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "diorite"
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
    "quartz_stairs": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:quartz_stairs"
        ]
      },
      "criteria": {
        "has_quartz_block": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:quartz_block"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "quartz_stairs"
          }
        }
      },
      "requirements": [
        [
          "has_quartz_block",
          "has_the_recipe"
        ]
      ]
    },
    "red_wool": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:red_wool"
        ]
      },
      "criteria": {
        "has_white_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "red_wool"
          }
        }
      },
      "requirements": [
        [
          "has_white_wool",
          "has_the_recipe"
        ]
      ]
    },
    "oak_wooden_slab": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:oak_wooden_slab"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "oak_wooden_slab"
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
    "sandstone_stairs": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:sandstone_stairs"
        ]
      },
      "criteria": {
        "has_sandstone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sandstone"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "sandstone_stairs"
          }
        }
      },
      "requirements": [
        [
          "has_sandstone",
          "has_the_recipe"
        ]
      ]
    },
    "clay": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:clay"
        ]
      },
      "criteria": {
        "has_clay_ball": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:clay_ball"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "clay"
          }
        }
      },
      "requirements": [
        [
          "has_clay_ball",
          "has_the_recipe"
        ]
      ]
    },
    "jungle_planks": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:jungle_planks"
        ]
      },
      "criteria": {
        "has_log": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:log",
                "data": 3
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "jungle_planks"
          }
        }
      },
      "requirements": [
        [
          "has_log",
          "has_the_recipe"
        ]
      ]
    },
    "chiseled_sandstone": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:chiseled_sandstone"
        ]
      },
      "criteria": {
        "has_stone_slab": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:stone_slab",
                "data": 1
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "chiseled_sandstone"
          }
        }
      },
      "requirements": [
        [
          "has_stone_slab",
          "has_the_recipe"
        ]
      ]
    },
    "purple_concrete_powder": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:purple_concrete_powder"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "purple_concrete_powder"
          }
        },
        "has_sand": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sand"
              }
            ]
          }
        },
        "has_gravel": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gravel"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_sand",
          "has_gravel"
        ]
      ]
    },
    "lime_stained_hardened_clay": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:lime_stained_hardened_clay"
        ]
      },
      "criteria": {
        "has_hardened_clay": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:hardened_clay"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "lime_stained_hardened_clay"
          }
        }
      },
      "requirements": [
        [
          "has_hardened_clay",
          "has_the_recipe"
        ]
      ]
    },
    "spruce_planks": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:spruce_planks"
        ]
      },
      "criteria": {
        "has_log": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:log",
                "data": 1
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "spruce_planks"
          }
        }
      },
      "requirements": [
        [
          "has_log",
          "has_the_recipe"
        ]
      ]
    },
    "cyan_stained_glass": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:cyan_stained_glass"
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
            "recipe": "cyan_stained_glass"
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
    "melon_block": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:melon_block"
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
            "recipe": "melon_block"
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
    "dark_oak_stairs": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:dark_oak_stairs"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "dark_oak_stairs"
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
    "black_stained_hardened_clay": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:black_stained_hardened_clay"
        ]
      },
      "criteria": {
        "has_hardened_clay": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:hardened_clay"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "black_stained_hardened_clay"
          }
        }
      },
      "requirements": [
        [
          "has_hardened_clay",
          "has_the_recipe"
        ]
      ]
    },
    "jungle_wooden_slab": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:jungle_wooden_slab"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "jungle_wooden_slab"
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
    "red_stained_glass": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:red_stained_glass"
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
            "recipe": "red_stained_glass"
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
    "light_gray_wool": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_gray_wool"
        ]
      },
      "criteria": {
        "has_white_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_gray_wool"
          }
        }
      },
      "requirements": [
        [
          "has_white_wool",
          "has_the_recipe"
        ]
      ]
    },
    "lit_pumpkin": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:lit_pumpkin"
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
            "recipe": "lit_pumpkin"
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
    "gray_stained_glass": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:gray_stained_glass"
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
            "recipe": "gray_stained_glass"
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
    "diamond_block": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:diamond_block",
          "minecraft:diamond"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "diamond_block"
          }
        },
        "has_at_least_9_diamond": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:diamond",
                "count": {
                  "min": 9
                }
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_at_least_9_diamond"
        ]
      ]
    },
    "purpur_pillar": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:purpur_pillar"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "purpur_pillar"
          }
        },
        "has_purpur_block": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:purpur_block"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_purpur_block"
        ]
      ]
    },
    "pink_stained_hardened_clay": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:pink_stained_hardened_clay"
        ]
      },
      "criteria": {
        "has_hardened_clay": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:hardened_clay"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "pink_stained_hardened_clay"
          }
        }
      },
      "requirements": [
        [
          "has_hardened_clay",
          "has_the_recipe"
        ]
      ]
    },
    "nether_wart_block": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:nether_wart_block"
        ]
      },
      "criteria": {
        "has_nether_wart": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:nether_wart"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "nether_wart_block"
          }
        }
      },
      "requirements": [
        [
          "has_nether_wart",
          "has_the_recipe"
        ]
      ]
    },
    "cyan_wool": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:cyan_wool"
        ]
      },
      "criteria": {
        "has_white_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "cyan_wool"
          }
        }
      },
      "requirements": [
        [
          "has_white_wool",
          "has_the_recipe"
        ]
      ]
    },
    "sea_lantern": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:sea_lantern"
        ]
      },
      "criteria": {
        "has_prismarine_crystals": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:prismarine_crystals"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "sea_lantern"
          }
        }
      },
      "requirements": [
        [
          "has_prismarine_crystals",
          "has_the_recipe"
        ]
      ]
    },
    "bookshelf": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:bookshelf"
        ]
      },
      "criteria": {
        "has_book": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:book"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "bookshelf"
          }
        }
      },
      "requirements": [
        [
          "has_book",
          "has_the_recipe"
        ]
      ]
    },
    "brick_block": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:brick_block"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "brick_block"
          }
        },
        "has_brick": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:brick"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_brick"
        ]
      ]
    },
    "orange_stained_glass": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:orange_stained_glass"
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
            "recipe": "orange_stained_glass"
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
    "polished_andesite": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:polished_andesite"
        ]
      },
      "criteria": {
        "has_stone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:stone",
                "data": 5
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "polished_andesite"
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
    "red_nether_brick": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:red_nether_brick"
        ]
      },
      "criteria": {
        "has_nether_wart": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:nether_wart"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "red_nether_brick"
          }
        }
      },
      "requirements": [
        [
          "has_nether_wart",
          "has_the_recipe"
        ]
      ]
    },
    "pillar_quartz_block": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:pillar_quartz_block"
        ]
      },
      "criteria": {
        "has_quartz_block": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:quartz_block"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "pillar_quartz_block"
          }
        }
      },
      "requirements": [
        [
          "has_quartz_block",
          "has_the_recipe"
        ]
      ]
    },
    "blue_wool": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:blue_wool"
        ]
      },
      "criteria": {
        "has_white_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "blue_wool"
          }
        }
      },
      "requirements": [
        [
          "has_white_wool",
          "has_the_recipe"
        ]
      ]
    },
    "magenta_stained_glass": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:magenta_stained_glass"
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
            "recipe": "magenta_stained_glass"
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
    "red_sandstone": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:red_sandstone"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "red_sandstone"
          }
        },
        "has_sand": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sand",
                "data": 1
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_sand"
        ]
      ]
    },
    "stone_stairs": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:stone_stairs"
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
            "recipe": "stone_stairs"
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
    "birch_stairs": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:birch_stairs"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "birch_stairs"
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
    "polished_granite": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:polished_granite"
        ]
      },
      "criteria": {
        "has_stone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:stone",
                "data": 1
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "polished_granite"
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
    "blue_stained_hardened_clay": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:blue_stained_hardened_clay"
        ]
      },
      "criteria": {
        "has_hardened_clay": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:hardened_clay"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "blue_stained_hardened_clay"
          }
        }
      },
      "requirements": [
        [
          "has_hardened_clay",
          "has_the_recipe"
        ]
      ]
    },
    "yellow_stained_hardened_clay": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:yellow_stained_hardened_clay"
        ]
      },
      "criteria": {
        "has_hardened_clay": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:hardened_clay"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "yellow_stained_hardened_clay"
          }
        }
      },
      "requirements": [
        [
          "has_hardened_clay",
          "has_the_recipe"
        ]
      ]
    },
    "dark_prismarine": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:dark_prismarine"
        ]
      },
      "criteria": {
        "has_prismarine_shard": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:prismarine_shard"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "dark_prismarine"
          }
        }
      },
      "requirements": [
        [
          "has_prismarine_shard",
          "has_the_recipe"
        ]
      ]
    },
    "stone_brick_stairs": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:stone_brick_stairs"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "stone_brick_stairs"
          }
        },
        "has_stonebrick": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:stonebrick"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_stonebrick"
        ]
      ]
    },
    "green_stained_glass": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:green_stained_glass"
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
            "recipe": "green_stained_glass"
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
    "gold_block": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:gold_ingot_from_block",
          "minecraft:gold_block"
        ]
      },
      "criteria": {
        "has_at_least_9_gold_ingot": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gold_ingot",
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
            "recipe": "gold_block"
          }
        }
      },
      "requirements": [
        [
          "has_at_least_9_gold_ingot",
          "has_the_recipe"
        ]
      ]
    },
    "cyan_stained_hardened_clay": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:cyan_stained_hardened_clay"
        ]
      },
      "criteria": {
        "has_hardened_clay": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:hardened_clay"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "cyan_stained_hardened_clay"
          }
        }
      },
      "requirements": [
        [
          "has_hardened_clay",
          "has_the_recipe"
        ]
      ]
    },
    "acacia_wooden_slab": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:acacia_wooden_slab"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "acacia_wooden_slab"
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
    "light_blue_stained_hardened_clay": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_blue_stained_hardened_clay"
        ]
      },
      "criteria": {
        "has_hardened_clay": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:hardened_clay"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_blue_stained_hardened_clay"
          }
        }
      },
      "requirements": [
        [
          "has_hardened_clay",
          "has_the_recipe"
        ]
      ]
    },
    "end_bricks": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:end_bricks"
        ]
      },
      "criteria": {
        "has_end_stone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:end_stone"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "end_bricks"
          }
        }
      },
      "requirements": [
        [
          "has_end_stone",
          "has_the_recipe"
        ]
      ]
    },
    "nether_brick": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:nether_brick"
        ]
      },
      "criteria": {
        "has_netherbrick": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:netherbrick"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "nether_brick"
          }
        }
      },
      "requirements": [
        [
          "has_netherbrick",
          "has_the_recipe"
        ]
      ]
    },
    "stone_brick_slab": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:stone_brick_slab"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "stone_brick_slab"
          }
        },
        "has_stonebrick": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:stonebrick"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_stonebrick"
        ]
      ]
    },
    "purple_stained_glass": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:purple_stained_glass"
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
            "recipe": "purple_stained_glass"
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
    "stone_slab": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:stone_slab"
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
            "recipe": "stone_slab"
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
    "red_stained_hardened_clay": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:red_stained_hardened_clay"
        ]
      },
      "criteria": {
        "has_hardened_clay": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:hardened_clay"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "red_stained_hardened_clay"
          }
        }
      },
      "requirements": [
        [
          "has_hardened_clay",
          "has_the_recipe"
        ]
      ]
    },
    "brick_stairs": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:brick_stairs"
        ]
      },
      "criteria": {
        "has_brick_block": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:brick_block"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "brick_stairs"
          }
        }
      },
      "requirements": [
        [
          "has_brick_block",
          "has_the_recipe"
        ]
      ]
    },
    "acacia_planks": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:acacia_planks"
        ]
      },
      "criteria": {
        "has_log2": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:log2",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "acacia_planks"
          }
        }
      },
      "requirements": [
        [
          "has_log2",
          "has_the_recipe"
        ]
      ]
    },
    "yellow_wool": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:yellow_wool"
        ]
      },
      "criteria": {
        "has_white_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "yellow_wool"
          }
        }
      },
      "requirements": [
        [
          "has_white_wool",
          "has_the_recipe"
        ]
      ]
    },
    "light_blue_concrete_powder": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_blue_concrete_powder"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_blue_concrete_powder"
          }
        },
        "has_sand": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sand"
              }
            ]
          }
        },
        "has_gravel": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gravel"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_sand",
          "has_gravel"
        ]
      ]
    },
    "mossy_cobblestone": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:mossy_cobblestone"
        ]
      },
      "criteria": {
        "has_vine": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:vine"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "mossy_cobblestone"
          }
        }
      },
      "requirements": [
        [
          "has_vine",
          "has_the_recipe"
        ]
      ]
    },
    "prismarine_bricks": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:prismarine_bricks"
        ]
      },
      "criteria": {
        "has_prismarine_shard": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:prismarine_shard"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "prismarine_bricks"
          }
        }
      },
      "requirements": [
        [
          "has_prismarine_shard",
          "has_the_recipe"
        ]
      ]
    },
    "oak_stairs": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:oak_stairs"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "oak_stairs"
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
    "green_wool": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:green_wool"
        ]
      },
      "criteria": {
        "has_white_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "green_wool"
          }
        }
      },
      "requirements": [
        [
          "has_white_wool",
          "has_the_recipe"
        ]
      ]
    },
    "chiseled_stonebrick": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:chiseled_stonebrick"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "chiseled_stonebrick"
          }
        },
        "has_stonebrick": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:stonebrick"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_stonebrick"
        ]
      ]
    },
    "pink_concrete_powder": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:pink_concrete_powder"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "pink_concrete_powder"
          }
        },
        "has_sand": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sand"
              }
            ]
          }
        },
        "has_gravel": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gravel"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_sand",
          "has_gravel"
        ]
      ]
    },
    "purple_wool": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:purple_wool"
        ]
      },
      "criteria": {
        "has_white_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "purple_wool"
          }
        }
      },
      "requirements": [
        [
          "has_white_wool",
          "has_the_recipe"
        ]
      ]
    },
    "polished_diorite": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:polished_diorite"
        ]
      },
      "criteria": {
        "has_stone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:stone",
                "data": 3
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "polished_diorite"
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
    "nether_brick_stairs": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:nether_brick_stairs"
        ]
      },
      "criteria": {
        "has_nether_brick": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:nether_brick"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "nether_brick_stairs"
          }
        }
      },
      "requirements": [
        [
          "has_nether_brick",
          "has_the_recipe"
        ]
      ]
    },
    "mossy_stonebrick": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:mossy_stonebrick"
        ]
      },
      "criteria": {
        "has_mossy_cobblestone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:mossy_cobblestone"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "mossy_stonebrick"
          }
        }
      },
      "requirements": [
        [
          "has_mossy_cobblestone",
          "has_the_recipe"
        ]
      ]
    },
    "orange_concrete_powder": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:orange_concrete_powder"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "orange_concrete_powder"
          }
        },
        "has_sand": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sand"
              }
            ]
          }
        },
        "has_gravel": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gravel"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_sand",
          "has_gravel"
        ]
      ]
    },
    "brown_wool": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:brown_wool"
        ]
      },
      "criteria": {
        "has_white_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "brown_wool"
          }
        }
      },
      "requirements": [
        [
          "has_white_wool",
          "has_the_recipe"
        ]
      ]
    },
    "prismarine": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:prismarine"
        ]
      },
      "criteria": {
        "has_prismarine_shard": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:prismarine_shard"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "prismarine"
          }
        }
      },
      "requirements": [
        [
          "has_prismarine_shard",
          "has_the_recipe"
        ]
      ]
    },
    "green_stained_hardened_clay": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:green_stained_hardened_clay"
        ]
      },
      "criteria": {
        "has_hardened_clay": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:hardened_clay"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "green_stained_hardened_clay"
          }
        }
      },
      "requirements": [
        [
          "has_hardened_clay",
          "has_the_recipe"
        ]
      ]
    },
    "gray_concrete_powder": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:gray_concrete_powder"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "gray_concrete_powder"
          }
        },
        "has_sand": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sand"
              }
            ]
          }
        },
        "has_gravel": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gravel"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_sand",
          "has_gravel"
        ]
      ]
    },
    "magenta_stained_hardened_clay": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:magenta_stained_hardened_clay"
        ]
      },
      "criteria": {
        "has_hardened_clay": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:hardened_clay"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "magenta_stained_hardened_clay"
          }
        }
      },
      "requirements": [
        [
          "has_hardened_clay",
          "has_the_recipe"
        ]
      ]
    },
    "hay_block": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:hay_block",
          "minecraft:wheat"
        ]
      },
      "criteria": {
        "has_at_least_9_wheat": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wheat",
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
            "recipe": "hay_block"
          }
        }
      },
      "requirements": [
        [
          "has_at_least_9_wheat",
          "has_the_recipe"
        ]
      ]
    },
    "lime_concrete_powder": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:lime_concrete_powder"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "lime_concrete_powder"
          }
        },
        "has_sand": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sand"
              }
            ]
          }
        },
        "has_gravel": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gravel"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_sand",
          "has_gravel"
        ]
      ]
    },
    "light_blue_stained_glass": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_blue_stained_glass"
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
            "recipe": "light_blue_stained_glass"
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
    "snow": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:snow"
        ]
      },
      "criteria": {
        "has_snowball": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:snowball"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "snow"
          }
        }
      },
      "requirements": [
        [
          "has_snowball",
          "has_the_recipe"
        ]
      ]
    },
    "red_concrete_powder": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:red_concrete_powder"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "red_concrete_powder"
          }
        },
        "has_sand": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sand"
              }
            ]
          }
        },
        "has_gravel": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gravel"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_sand",
          "has_gravel"
        ]
      ]
    },
    "sandstone": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:sandstone"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "sandstone"
          }
        },
        "has_sand": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sand",
                "data": 0
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_sand"
        ]
      ]
    },
    "dark_oak_wooden_slab": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:dark_oak_wooden_slab"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "dark_oak_wooden_slab"
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
    "magma": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:magma"
        ]
      },
      "criteria": {
        "has_magma_cream": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:magma_cream"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "magma"
          }
        }
      },
      "requirements": [
        [
          "has_magma_cream",
          "has_the_recipe"
        ]
      ]
    },
    "acacia_stairs": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:acacia_stairs"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "acacia_stairs"
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
    "emerald_block": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:emerald",
          "minecraft:emerald_block"
        ]
      },
      "criteria": {
        "has_at_least_9_emerald": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:emerald",
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
            "recipe": "emerald_block"
          }
        }
      },
      "requirements": [
        [
          "has_at_least_9_emerald",
          "has_the_recipe"
        ]
      ]
    },
    "quartz_block": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:quartz_block"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "quartz_block"
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
    "coal_block": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:coal_block",
          "minecraft:coal"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "coal_block"
          }
        },
        "has_at_least_9_coal": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:coal",
                "count": {
                  "min": 9
                },
                "data": 0
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_at_least_9_coal"
        ]
      ]
    },
    "yellow_stained_glass": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:yellow_stained_glass"
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
            "recipe": "yellow_stained_glass"
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
    "brown_stained_hardened_clay": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:brown_stained_hardened_clay"
        ]
      },
      "criteria": {
        "has_hardened_clay": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:hardened_clay"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "brown_stained_hardened_clay"
          }
        }
      },
      "requirements": [
        [
          "has_hardened_clay",
          "has_the_recipe"
        ]
      ]
    },
    "purpur_stairs": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:purpur_stairs"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "purpur_stairs"
          }
        },
        "has_purpur_block": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:purpur_block"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_purpur_block"
        ]
      ]
    },
    "lime_stained_glass": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:lime_stained_glass"
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
            "recipe": "lime_stained_glass"
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
    "pink_wool": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:pink_wool"
        ]
      },
      "criteria": {
        "has_white_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "pink_wool"
          }
        }
      },
      "requirements": [
        [
          "has_white_wool",
          "has_the_recipe"
        ]
      ]
    },
    "granite": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:granite"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "granite"
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
    "blue_concrete_powder": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:blue_concrete_powder"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "blue_concrete_powder"
          }
        },
        "has_sand": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sand"
              }
            ]
          }
        },
        "has_gravel": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gravel"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_sand",
          "has_gravel"
        ]
      ]
    },
    "green_concrete_powder": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:green_concrete_powder"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "green_concrete_powder"
          }
        },
        "has_sand": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sand"
              }
            ]
          }
        },
        "has_gravel": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gravel"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_sand",
          "has_gravel"
        ]
      ]
    },
    "red_sandstone_stairs": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:red_sandstone_stairs"
        ]
      },
      "criteria": {
        "has_red_sandstone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:red_sandstone"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "red_sandstone_stairs"
          }
        }
      },
      "requirements": [
        [
          "has_red_sandstone",
          "has_the_recipe"
        ]
      ]
    },
    "magenta_wool": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:magenta_wool"
        ]
      },
      "criteria": {
        "has_white_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "magenta_wool"
          }
        }
      },
      "requirements": [
        [
          "has_white_wool",
          "has_the_recipe"
        ]
      ]
    },
    "quartz_slab": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:quartz_slab"
        ]
      },
      "criteria": {
        "has_quartz_block": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:quartz_block"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "quartz_slab"
          }
        }
      },
      "requirements": [
        [
          "has_quartz_block",
          "has_the_recipe"
        ]
      ]
    },
    "light_blue_wool": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_blue_wool"
        ]
      },
      "criteria": {
        "has_white_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_blue_wool"
          }
        }
      },
      "requirements": [
        [
          "has_white_wool",
          "has_the_recipe"
        ]
      ]
    },
    "white_stained_glass": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:white_stained_glass"
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
            "recipe": "white_stained_glass"
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
    "oak_planks": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:oak_planks"
        ]
      },
      "criteria": {
        "has_log": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:log",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "oak_planks"
          }
        }
      },
      "requirements": [
        [
          "has_log",
          "has_the_recipe"
        ]
      ]
    },
    "glowstone": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:glowstone"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "glowstone"
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
    "white_concrete_powder": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:white_concrete_powder"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "white_concrete_powder"
          }
        },
        "has_sand": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sand"
              }
            ]
          }
        },
        "has_gravel": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gravel"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_sand",
          "has_gravel"
        ]
      ]
    },
    "spruce_wooden_slab": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:spruce_wooden_slab"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "spruce_wooden_slab"
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
    "light_gray_concrete_powder": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_gray_concrete_powder"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_gray_concrete_powder"
          }
        },
        "has_sand": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sand"
              }
            ]
          }
        },
        "has_gravel": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gravel"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_sand",
          "has_gravel"
        ]
      ]
    },
    "iron_block": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:iron_block",
          "minecraft:iron_ingot_from_block"
        ]
      },
      "criteria": {
        "has_at_least_9_iron_ingot": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:iron_ingot",
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
            "recipe": "iron_block"
          }
        }
      },
      "requirements": [
        [
          "has_at_least_9_iron_ingot",
          "has_the_recipe"
        ]
      ]
    },
    "magenta_concrete_powder": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:magenta_concrete_powder"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "magenta_concrete_powder"
          }
        },
        "has_sand": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sand"
              }
            ]
          }
        },
        "has_gravel": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gravel"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_sand",
          "has_gravel"
        ]
      ]
    },
    "string_to_wool": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:string_to_wool"
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
            "recipe": "string_to_wool"
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
    "white_stained_hardened_clay": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:white_stained_hardened_clay"
        ]
      },
      "criteria": {
        "has_hardened_clay": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:hardened_clay"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "white_stained_hardened_clay"
          }
        }
      },
      "requirements": [
        [
          "has_hardened_clay",
          "has_the_recipe"
        ]
      ]
    },
    "blue_stained_glass": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:blue_stained_glass"
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
            "recipe": "blue_stained_glass"
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
    "gray_wool": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:gray_wool"
        ]
      },
      "criteria": {
        "has_white_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "gray_wool"
          }
        }
      },
      "requirements": [
        [
          "has_white_wool",
          "has_the_recipe"
        ]
      ]
    },
    "black_concrete_powder": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:black_concrete_powder"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "black_concrete_powder"
          }
        },
        "has_sand": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:sand"
              }
            ]
          }
        },
        "has_gravel": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gravel"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_sand",
          "has_gravel"
        ]
      ]
    },
    "bone_block": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:bone_meal_from_block",
          "minecraft:bone_block"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "bone_block"
          }
        },
        "has_at_least_9_bonemeal": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "count": {
                  "min": 9
                },
                "data": 15
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_at_least_9_bonemeal"
        ]
      ]
    },
    "gray_stained_hardened_clay": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:gray_stained_hardened_clay"
        ]
      },
      "criteria": {
        "has_hardened_clay": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:hardened_clay"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "gray_stained_hardened_clay"
          }
        }
      },
      "requirements": [
        [
          "has_hardened_clay",
          "has_the_recipe"
        ]
      ]
    },
    "black_stained_glass": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:black_stained_glass"
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
            "recipe": "black_stained_glass"
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
    "black_wool": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:black_wool"
        ]
      },
      "criteria": {
        "has_white_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "black_wool"
          }
        }
      },
      "requirements": [
        [
          "has_white_wool",
          "has_the_recipe"
        ]
      ]
    }
  };
})(window);
