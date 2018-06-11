(function(global) {
  global.assets.advancements.recipes.decorations = {
    "blue_stained_glass_pane": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:blue_stained_glass_pane"
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
            "recipe": "blue_stained_glass_pane"
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
    "white_banner": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:white_banner"
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
            "recipe": "white_banner"
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
    "cobblestone_wall": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:cobblestone_wall"
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
            "recipe": "cobblestone_wall"
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
    "purple_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:purple_bed"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "purple_bed"
          }
        },
        "has_purple_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 10
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_purple_wool"
        ]
      ]
    },
    "blue_bed_from_white_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:blue_bed_from_white_bed"
        ]
      },
      "criteria": {
        "has_bed": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:bed",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "blue_bed_from_white_bed"
          }
        }
      },
      "requirements": [
        [
          "has_bed",
          "has_the_recipe"
        ]
      ]
    },
    "brown_banner": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:brown_banner"
        ]
      },
      "criteria": {
        "has_brown_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 12
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "brown_banner"
          }
        }
      },
      "requirements": [
        [
          "has_brown_wool",
          "has_the_recipe"
        ]
      ]
    },
    "blue_banner": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:blue_banner"
        ]
      },
      "criteria": {
        "has_blue_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 11
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "blue_banner"
          }
        }
      },
      "requirements": [
        [
          "has_blue_wool",
          "has_the_recipe"
        ]
      ]
    },
    "light_blue_banner": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_blue_banner"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_blue_banner"
          }
        },
        "has_light_blue_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 3
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_light_blue_wool"
        ]
      ]
    },
    "pink_banner": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:pink_banner"
        ]
      },
      "criteria": {
        "has_pink_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 6
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "pink_banner"
          }
        }
      },
      "requirements": [
        [
          "has_pink_wool",
          "has_the_recipe"
        ]
      ]
    },
    "end_crystal": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:end_crystal"
        ]
      },
      "criteria": {
        "has_ender_eye": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:ender_eye"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "end_crystal"
          }
        }
      },
      "requirements": [
        [
          "has_ender_eye",
          "has_the_recipe"
        ]
      ]
    },
    "magenta_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:magenta_bed"
        ]
      },
      "criteria": {
        "has_magenta_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 2
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "magenta_bed"
          }
        }
      },
      "requirements": [
        [
          "has_magenta_wool",
          "has_the_recipe"
        ]
      ]
    },
    "light_gray_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_gray_bed"
        ]
      },
      "criteria": {
        "has_light_gray_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 8
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_gray_bed"
          }
        }
      },
      "requirements": [
        [
          "has_light_gray_wool",
          "has_the_recipe"
        ]
      ]
    },
    "spruce_fence": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:spruce_fence"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "spruce_fence"
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
    "orange_carpet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:orange_carpet"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "orange_carpet"
          }
        },
        "has_orange_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 1
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_orange_wool"
        ]
      ]
    },
    "ender_chest": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:ender_chest"
        ]
      },
      "criteria": {
        "has_ender_eye": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:ender_eye"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "ender_chest"
          }
        }
      },
      "requirements": [
        [
          "has_ender_eye",
          "has_the_recipe"
        ]
      ]
    },
    "pink_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:pink_bed"
        ]
      },
      "criteria": {
        "has_pink_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 6
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "pink_bed"
          }
        }
      },
      "requirements": [
        [
          "has_pink_wool",
          "has_the_recipe"
        ]
      ]
    },
    "purple_carpet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:purple_carpet"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "purple_carpet"
          }
        },
        "has_purple_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 10
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_purple_wool"
        ]
      ]
    },
    "light_blue_carpet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_blue_carpet"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_blue_carpet"
          }
        },
        "has_light_blue_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 3
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_light_blue_wool"
        ]
      ]
    },
    "blue_carpet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:blue_carpet"
        ]
      },
      "criteria": {
        "has_blue_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 11
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "blue_carpet"
          }
        }
      },
      "requirements": [
        [
          "has_blue_wool",
          "has_the_recipe"
        ]
      ]
    },
    "brown_carpet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:brown_carpet"
        ]
      },
      "criteria": {
        "has_brown_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 12
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "brown_carpet"
          }
        }
      },
      "requirements": [
        [
          "has_brown_wool",
          "has_the_recipe"
        ]
      ]
    },
    "pink_carpet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:pink_carpet"
        ]
      },
      "criteria": {
        "has_pink_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 6
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "pink_carpet"
          }
        }
      },
      "requirements": [
        [
          "has_pink_wool",
          "has_the_recipe"
        ]
      ]
    },
    "chest": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:chest"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "chest"
          }
        },
        "has_lots_of_items": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [],
            "slots": {
              "occupied": {
                "min": 10
              }
            }
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_lots_of_items"
        ]
      ]
    },
    "lime_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:lime_bed"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "lime_bed"
          }
        },
        "has_lime_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 5
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_lime_wool"
        ]
      ]
    },
    "black_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:black_bed"
        ]
      },
      "criteria": {
        "has_black_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 15
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "black_bed"
          }
        }
      },
      "requirements": [
        [
          "has_black_wool",
          "has_the_recipe"
        ]
      ]
    },
    "purple_stained_glass_pane": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:purple_stained_glass_pane"
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
            "recipe": "purple_stained_glass_pane"
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
    "red_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:red_bed"
        ]
      },
      "criteria": {
        "has_red_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 14
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "red_bed"
          }
        }
      },
      "requirements": [
        [
          "has_red_wool",
          "has_the_recipe"
        ]
      ]
    },
    "white_carpet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:white_carpet"
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
            "recipe": "white_carpet"
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
    "end_rod": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:end_rod"
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
            "recipe": "end_rod"
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
    "purple_bed_from_white_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:purple_bed_from_white_bed"
        ]
      },
      "criteria": {
        "has_bed": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:bed",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "purple_bed_from_white_bed"
          }
        }
      },
      "requirements": [
        [
          "has_bed",
          "has_the_recipe"
        ]
      ]
    },
    "brown_bed_from_white_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:brown_bed_from_white_bed"
        ]
      },
      "criteria": {
        "has_bed": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:bed",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "brown_bed_from_white_bed"
          }
        }
      },
      "requirements": [
        [
          "has_bed",
          "has_the_recipe"
        ]
      ]
    },
    "yellow_bed_from_white_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:yellow_bed_from_white_bed"
        ]
      },
      "criteria": {
        "has_bed": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:bed",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "yellow_bed_from_white_bed"
          }
        }
      },
      "requirements": [
        [
          "has_bed",
          "has_the_recipe"
        ]
      ]
    },
    "gray_stained_glass_pane": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:gray_stained_glass_pane"
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
            "recipe": "gray_stained_glass_pane"
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
    "iron_bars": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:iron_bars"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "iron_bars"
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
    "yellow_stained_glass_pane": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:yellow_stained_glass_pane"
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
            "recipe": "yellow_stained_glass_pane"
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
    "brown_stained_glass_pane": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:brown_stained_glass_pane"
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
            "recipe": "brown_stained_glass_pane"
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
    "gray_bed_from_white_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:gray_bed_from_white_bed"
        ]
      },
      "criteria": {
        "has_bed": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:bed",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "gray_bed_from_white_bed"
          }
        }
      },
      "requirements": [
        [
          "has_bed",
          "has_the_recipe"
        ]
      ]
    },
    "purple_banner": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:purple_banner"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "purple_banner"
          }
        },
        "has_purple_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 10
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_purple_wool"
        ]
      ]
    },
    "acacia_fence": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:acacia_fence"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "acacia_fence"
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
    "green_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:green_bed"
        ]
      },
      "criteria": {
        "has_green_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 13
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "green_bed"
          }
        }
      },
      "requirements": [
        [
          "has_green_wool",
          "has_the_recipe"
        ]
      ]
    },
    "purple_shulker_box": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:purple_shulker_box"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "purple_shulker_box"
          }
        },
        "has_shulker_shell": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:shulker_shell"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_shulker_shell"
        ]
      ]
    },
    "orange_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:orange_bed"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "orange_bed"
          }
        },
        "has_orange_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 1
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_orange_wool"
        ]
      ]
    },
    "gray_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:gray_bed"
        ]
      },
      "criteria": {
        "has_gray_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 7
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "gray_bed"
          }
        }
      },
      "requirements": [
        [
          "has_gray_wool",
          "has_the_recipe"
        ]
      ]
    },
    "mossy_cobblestone_wall": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:mossy_cobblestone_wall"
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
            "recipe": "mossy_cobblestone_wall"
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
    "orange_banner": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:orange_banner"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "orange_banner"
          }
        },
        "has_orange_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 1
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_orange_wool"
        ]
      ]
    },
    "red_banner": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:red_banner"
        ]
      },
      "criteria": {
        "has_red_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 14
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "red_banner"
          }
        }
      },
      "requirements": [
        [
          "has_red_wool",
          "has_the_recipe"
        ]
      ]
    },
    "lime_stained_glass_pane": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:lime_stained_glass_pane"
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
            "recipe": "lime_stained_glass_pane"
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
    "slime": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:slime_ball",
          "minecraft:slime"
        ]
      },
      "criteria": {
        "has_at_least_9_slime_ball": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:slime_ball",
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
            "recipe": "slime"
          }
        }
      },
      "requirements": [
        [
          "has_at_least_9_slime_ball",
          "has_the_recipe"
        ]
      ]
    },
    "blue_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:blue_bed"
        ]
      },
      "criteria": {
        "has_blue_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 11
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "blue_bed"
          }
        }
      },
      "requirements": [
        [
          "has_blue_wool",
          "has_the_recipe"
        ]
      ]
    },
    "jukebox": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:jukebox"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "jukebox"
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
    "magenta_banner": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:magenta_banner"
        ]
      },
      "criteria": {
        "has_magenta_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 2
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "magenta_banner"
          }
        }
      },
      "requirements": [
        [
          "has_magenta_wool",
          "has_the_recipe"
        ]
      ]
    },
    "lime_bed_from_white_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:lime_bed_from_white_bed"
        ]
      },
      "criteria": {
        "has_bed": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:bed",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "lime_bed_from_white_bed"
          }
        }
      },
      "requirements": [
        [
          "has_bed",
          "has_the_recipe"
        ]
      ]
    },
    "dark_oak_fence": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:dark_oak_fence"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "dark_oak_fence"
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
    "ladder": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:ladder"
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
            "recipe": "ladder"
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
    "fence": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:fence"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "fence"
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
    "orange_stained_glass_pane": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:orange_stained_glass_pane"
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
            "recipe": "orange_stained_glass_pane"
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
    "painting": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:painting"
        ]
      },
      "criteria": {
        "has_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "painting"
          }
        }
      },
      "requirements": [
        [
          "has_wool",
          "has_the_recipe"
        ]
      ]
    },
    "lime_carpet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:lime_carpet"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "lime_carpet"
          }
        },
        "has_lime_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 5
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_lime_wool"
        ]
      ]
    },
    "crafting_table": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:crafting_table"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "crafting_table"
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
    "jungle_fence": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:jungle_fence"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "jungle_fence"
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
    "black_banner": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:black_banner"
        ]
      },
      "criteria": {
        "has_black_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 15
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "black_banner"
          }
        }
      },
      "requirements": [
        [
          "has_black_wool",
          "has_the_recipe"
        ]
      ]
    },
    "gray_carpet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:gray_carpet"
        ]
      },
      "criteria": {
        "has_gray_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 7
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "gray_carpet"
          }
        }
      },
      "requirements": [
        [
          "has_gray_wool",
          "has_the_recipe"
        ]
      ]
    },
    "orange_bed_from_white_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:orange_bed_from_white_bed"
        ]
      },
      "criteria": {
        "has_bed": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:bed",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "orange_bed_from_white_bed"
          }
        }
      },
      "requirements": [
        [
          "has_bed",
          "has_the_recipe"
        ]
      ]
    },
    "light_gray_carpet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_gray_carpet"
        ]
      },
      "criteria": {
        "has_light_gray_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 8
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_gray_carpet"
          }
        }
      },
      "requirements": [
        [
          "has_light_gray_wool",
          "has_the_recipe"
        ]
      ]
    },
    "brown_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:brown_bed"
        ]
      },
      "criteria": {
        "has_brown_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 12
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "brown_bed"
          }
        }
      },
      "requirements": [
        [
          "has_brown_wool",
          "has_the_recipe"
        ]
      ]
    },
    "yellow_banner": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:yellow_banner"
        ]
      },
      "criteria": {
        "has_yellow_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 4
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "yellow_banner"
          }
        }
      },
      "requirements": [
        [
          "has_yellow_wool",
          "has_the_recipe"
        ]
      ]
    },
    "enchanting_table": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:enchanting_table"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "enchanting_table"
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
          "has_the_recipe",
          "has_obsidian"
        ]
      ]
    },
    "cyan_banner": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:cyan_banner"
        ]
      },
      "criteria": {
        "has_cyan_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 9
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "cyan_banner"
          }
        }
      },
      "requirements": [
        [
          "has_cyan_wool",
          "has_the_recipe"
        ]
      ]
    },
    "pink_stained_glass_pane": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:pink_stained_glass_pane"
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
            "recipe": "pink_stained_glass_pane"
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
    "green_carpet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:green_carpet"
        ]
      },
      "criteria": {
        "has_green_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 13
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "green_carpet"
          }
        }
      },
      "requirements": [
        [
          "has_green_wool",
          "has_the_recipe"
        ]
      ]
    },
    "flower_pot": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:flower_pot"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "flower_pot"
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
    "light_gray_bed_from_white_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_gray_bed_from_white_bed"
        ]
      },
      "criteria": {
        "has_bed": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:bed",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_gray_bed_from_white_bed"
          }
        }
      },
      "requirements": [
        [
          "has_bed",
          "has_the_recipe"
        ]
      ]
    },
    "cyan_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:cyan_bed"
        ]
      },
      "criteria": {
        "has_cyan_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 9
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "cyan_bed"
          }
        }
      },
      "requirements": [
        [
          "has_cyan_wool",
          "has_the_recipe"
        ]
      ]
    },
    "pink_bed_from_white_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:pink_bed_from_white_bed"
        ]
      },
      "criteria": {
        "has_bed": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:bed",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "pink_bed_from_white_bed"
          }
        }
      },
      "requirements": [
        [
          "has_bed",
          "has_the_recipe"
        ]
      ]
    },
    "light_gray_stained_glass_pane": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_gray_stained_glass_pane"
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
            "recipe": "light_gray_stained_glass_pane"
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
    "sign": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:sign"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "sign"
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
    "cyan_stained_glass_pane": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:cyan_stained_glass_pane"
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
            "recipe": "cyan_stained_glass_pane"
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
    "yellow_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:yellow_bed"
        ]
      },
      "criteria": {
        "has_yellow_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 4
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "yellow_bed"
          }
        }
      },
      "requirements": [
        [
          "has_yellow_wool",
          "has_the_recipe"
        ]
      ]
    },
    "birch_fence": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:birch_fence"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "birch_fence"
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
    "cyan_bed_from_white_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:cyan_bed_from_white_bed"
        ]
      },
      "criteria": {
        "has_bed": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:bed",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "cyan_bed_from_white_bed"
          }
        }
      },
      "requirements": [
        [
          "has_bed",
          "has_the_recipe"
        ]
      ]
    },
    "glass_pane": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:glass_pane"
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
            "recipe": "glass_pane"
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
    "furnace": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:furnace"
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
            "recipe": "furnace"
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
    "red_bed_from_white_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:red_bed_from_white_bed"
        ]
      },
      "criteria": {
        "has_bed": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:bed",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "red_bed_from_white_bed"
          }
        }
      },
      "requirements": [
        [
          "has_bed",
          "has_the_recipe"
        ]
      ]
    },
    "light_blue_bed_from_white_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_blue_bed_from_white_bed"
        ]
      },
      "criteria": {
        "has_bed": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:bed",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_blue_bed_from_white_bed"
          }
        }
      },
      "requirements": [
        [
          "has_bed",
          "has_the_recipe"
        ]
      ]
    },
    "green_bed_from_white_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:green_bed_from_white_bed"
        ]
      },
      "criteria": {
        "has_bed": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:bed",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "green_bed_from_white_bed"
          }
        }
      },
      "requirements": [
        [
          "has_bed",
          "has_the_recipe"
        ]
      ]
    },
    "lime_banner": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:lime_banner"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "lime_banner"
          }
        },
        "has_lime_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 5
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_lime_wool"
        ]
      ]
    },
    "light_gray_banner": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_gray_banner"
        ]
      },
      "criteria": {
        "has_light_gray_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 8
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_gray_banner"
          }
        }
      },
      "requirements": [
        [
          "has_light_gray_wool",
          "has_the_recipe"
        ]
      ]
    },
    "white_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:white_bed"
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
            "recipe": "white_bed"
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
    "gray_banner": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:gray_banner"
        ]
      },
      "criteria": {
        "has_gray_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 7
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "gray_banner"
          }
        }
      },
      "requirements": [
        [
          "has_gray_wool",
          "has_the_recipe"
        ]
      ]
    },
    "black_carpet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:black_carpet"
        ]
      },
      "criteria": {
        "has_black_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 15
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "black_carpet"
          }
        }
      },
      "requirements": [
        [
          "has_black_wool",
          "has_the_recipe"
        ]
      ]
    },
    "red_stained_glass_pane": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:red_stained_glass_pane"
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
            "recipe": "red_stained_glass_pane"
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
    "yellow_carpet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:yellow_carpet"
        ]
      },
      "criteria": {
        "has_yellow_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 4
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "yellow_carpet"
          }
        }
      },
      "requirements": [
        [
          "has_yellow_wool",
          "has_the_recipe"
        ]
      ]
    },
    "light_blue_stained_glass_pane": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_blue_stained_glass_pane"
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
            "recipe": "light_blue_stained_glass_pane"
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
    "green_stained_glass_pane": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:green_stained_glass_pane"
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
            "recipe": "green_stained_glass_pane"
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
    "red_carpet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:red_carpet"
        ]
      },
      "criteria": {
        "has_red_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 14
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "red_carpet"
          }
        }
      },
      "requirements": [
        [
          "has_red_wool",
          "has_the_recipe"
        ]
      ]
    },
    "torch": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:torch"
        ]
      },
      "criteria": {
        "has_stone_pickaxe": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:stone_pickaxe"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "torch"
          }
        }
      },
      "requirements": [
        [
          "has_stone_pickaxe",
          "has_the_recipe"
        ]
      ]
    },
    "light_blue_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_blue_bed"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_blue_bed"
          }
        },
        "has_light_blue_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 3
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_light_blue_wool"
        ]
      ]
    },
    "magenta_carpet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:magenta_carpet"
        ]
      },
      "criteria": {
        "has_magenta_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 2
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "magenta_carpet"
          }
        }
      },
      "requirements": [
        [
          "has_magenta_wool",
          "has_the_recipe"
        ]
      ]
    },
    "snow_layer": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:snow_layer"
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
            "recipe": "snow_layer"
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
    "anvil": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:anvil"
        ]
      },
      "criteria": {
        "has_iron_block": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:iron_block"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "anvil"
          }
        }
      },
      "requirements": [
        [
          "has_iron_block",
          "has_the_recipe"
        ]
      ]
    },
    "item_frame": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:item_frame"
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
            "recipe": "item_frame"
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
    "armor_stand": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:armor_stand"
        ]
      },
      "criteria": {
        "has_stone_slab": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:stone_slab",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "armor_stand"
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
    "green_banner": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:green_banner"
        ]
      },
      "criteria": {
        "has_green_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 13
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "green_banner"
          }
        }
      },
      "requirements": [
        [
          "has_green_wool",
          "has_the_recipe"
        ]
      ]
    },
    "black_stained_glass_pane": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:black_stained_glass_pane"
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
            "recipe": "black_stained_glass_pane"
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
    "cyan_carpet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:cyan_carpet"
        ]
      },
      "criteria": {
        "has_cyan_wool": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:wool",
                "data": 9
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "cyan_carpet"
          }
        }
      },
      "requirements": [
        [
          "has_cyan_wool",
          "has_the_recipe"
        ]
      ]
    },
    "nether_brick_fence": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:nether_brick_fence"
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
            "recipe": "nether_brick_fence"
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
    "magenta_bed_from_white_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:magenta_bed_from_white_bed"
        ]
      },
      "criteria": {
        "has_bed": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:bed",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "magenta_bed_from_white_bed"
          }
        }
      },
      "requirements": [
        [
          "has_bed",
          "has_the_recipe"
        ]
      ]
    },
    "black_bed_from_white_bed": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:black_bed_from_white_bed"
        ]
      },
      "criteria": {
        "has_bed": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:bed",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "black_bed_from_white_bed"
          }
        }
      },
      "requirements": [
        [
          "has_bed",
          "has_the_recipe"
        ]
      ]
    },
    "magenta_stained_glass_pane": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:magenta_stained_glass_pane"
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
            "recipe": "magenta_stained_glass_pane"
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
    "white_stained_glass_pane": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:white_stained_glass_pane"
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
            "recipe": "white_stained_glass_pane"
          }
        }
      },
      "requirements": [
        [
          "has_glass",
          "has_the_recipe"
        ]
      ]
    }
  };
})(window);
