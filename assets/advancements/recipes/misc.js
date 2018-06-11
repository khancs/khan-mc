(function(global) {
  global.assets.advancements.recipes.misc = {
    "bucket": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:bucket"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "bucket"
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
    "gold_nugget": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:gold_nugget"
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
            "recipe": "gold_nugget"
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
    "light_gray_dye_from_oxeye_daisy": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_gray_dye_from_oxeye_daisy"
        ]
      },
      "criteria": {
        "has_red_flower": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:red_flower",
                "data": 8
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_gray_dye_from_oxeye_daisy"
          }
        }
      },
      "requirements": [
        [
          "has_red_flower",
          "has_the_recipe"
        ]
      ]
    },
    "lapis_lazuli": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:lapis_lazuli"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "lapis_lazuli"
          }
        },
        "has_lapis_block": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:lapis_block"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_lapis_block"
        ]
      ]
    },
    "purple_dye": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:purple_dye"
        ]
      },
      "criteria": {
        "has_lapis": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 4
              }
            ]
          }
        },
        "has_red_dye": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 1
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "purple_dye"
          }
        }
      },
      "requirements": [
        [
          "has_lapis",
          "has_red_dye",
          "has_the_recipe"
        ]
      ]
    },
    "slime_ball": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:slime_ball"
        ]
      },
      "criteria": {
        "has_slime": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:slime"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "slime_ball"
          }
        }
      },
      "requirements": [
        [
          "has_slime",
          "has_the_recipe"
        ]
      ]
    },
    "light_blue_dye_from_lapis_bonemeal": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_blue_dye_from_lapis_bonemeal"
        ]
      },
      "criteria": {
        "has_lapis": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 4
              }
            ]
          }
        },
        "has_bonemeal": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 15
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_blue_dye_from_lapis_bonemeal"
          }
        }
      },
      "requirements": [
        [
          "has_lapis",
          "has_bonemeal",
          "has_the_recipe"
        ]
      ]
    },
    "light_blue_dye_from_blue_orchid": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_blue_dye_from_blue_orchid"
        ]
      },
      "criteria": {
        "has_red_flower": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:red_flower",
                "data": 1
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_blue_dye_from_blue_orchid"
          }
        }
      },
      "requirements": [
        [
          "has_red_flower",
          "has_the_recipe"
        ]
      ]
    },
    "emerald": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:emerald"
        ]
      },
      "criteria": {
        "has_emerald_block": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:emerald_block"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "emerald"
          }
        }
      },
      "requirements": [
        [
          "has_emerald_block",
          "has_the_recipe"
        ]
      ]
    },
    "magenta_dye_from_lapis_red_pink": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:magenta_dye_from_lapis_red_pink"
        ]
      },
      "criteria": {
        "has_pink_dye": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 9
              }
            ]
          }
        },
        "has_lapis": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 4
              }
            ]
          }
        },
        "has_red_dye": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 1
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "magenta_dye_from_lapis_red_pink"
          }
        }
      },
      "requirements": [
        [
          "has_pink_dye",
          "has_lapis",
          "has_red_dye",
          "has_the_recipe"
        ]
      ]
    },
    "magenta_dye_from_lapis_ink_bonemeal": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:magenta_dye_from_lapis_ink_bonemeal"
        ]
      },
      "criteria": {
        "has_lapis": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 4
              }
            ]
          }
        },
        "has_bonemeal": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 15
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "magenta_dye_from_lapis_ink_bonemeal"
          }
        },
        "has_black_dye": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 0
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_lapis",
          "has_bonemeal",
          "has_the_recipe",
          "has_black_dye"
        ]
      ]
    },
    "iron_nugget": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:iron_nugget"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "iron_nugget"
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
    "writable_book": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:writable_book"
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
            "recipe": "writable_book"
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
    "light_gray_dye_from_gray_bonemeal": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_gray_dye_from_gray_bonemeal"
        ]
      },
      "criteria": {
        "has_gray_dye": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 8
              }
            ]
          }
        },
        "has_bonemeal": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 15
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_gray_dye_from_gray_bonemeal"
          }
        }
      },
      "requirements": [
        [
          "has_gray_dye",
          "has_bonemeal",
          "has_the_recipe"
        ]
      ]
    },
    "magenta_dye_from_allium": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:magenta_dye_from_allium"
        ]
      },
      "criteria": {
        "has_red_flower": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:red_flower",
                "data": 2
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "magenta_dye_from_allium"
          }
        }
      },
      "requirements": [
        [
          "has_red_flower",
          "has_the_recipe"
        ]
      ]
    },
    "pumpkin_seeds": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:pumpkin_seeds"
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
            "recipe": "pumpkin_seeds"
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
    "ender_eye": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:ender_eye"
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
            "recipe": "ender_eye"
          }
        }
      },
      "requirements": [
        [
          "has_blaze_powder",
          "has_the_recipe"
        ]
      ]
    },
    "magenta_dye_from_purple_and_pink": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:magenta_dye_from_purple_and_pink"
        ]
      },
      "criteria": {
        "has_pink_dye": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 9
              }
            ]
          }
        },
        "has_purple_dye": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 5
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "magenta_dye_from_purple_and_pink"
          }
        }
      },
      "requirements": [
        [
          "has_pink_dye",
          "has_purple_dye",
          "has_the_recipe"
        ]
      ]
    },
    "light_gray_dye_from_white_tulip": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_gray_dye_from_white_tulip"
        ]
      },
      "criteria": {
        "has_red_flower": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:red_flower",
                "data": 6
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_gray_dye_from_white_tulip"
          }
        }
      },
      "requirements": [
        [
          "has_red_flower",
          "has_the_recipe"
        ]
      ]
    },
    "iron_ingot_from_block": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:iron_ingot_from_block"
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
            "recipe": "iron_ingot_from_block"
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
    "yellow_dye_from_dandelion": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:yellow_dye_from_dandelion"
        ]
      },
      "criteria": {
        "has_yellow_flower": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:yellow_flower",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "yellow_dye_from_dandelion"
          }
        }
      },
      "requirements": [
        [
          "has_yellow_flower",
          "has_the_recipe"
        ]
      ]
    },
    "pink_dye_from_red_bonemeal": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:pink_dye_from_red_bonemeal"
        ]
      },
      "criteria": {
        "has_bonemeal": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 15
              }
            ]
          }
        },
        "has_red_dye": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 1
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "pink_dye_from_red_bonemeal"
          }
        }
      },
      "requirements": [
        [
          "has_bonemeal",
          "has_red_dye",
          "has_the_recipe"
        ]
      ]
    },
    "fire_charge": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:fire_charge"
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
            "recipe": "fire_charge"
          }
        }
      },
      "requirements": [
        [
          "has_blaze_powder",
          "has_the_recipe"
        ]
      ]
    },
    "lime_dye": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:lime_dye"
        ]
      },
      "criteria": {
        "has_green_dye": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 2
              }
            ]
          }
        },
        "has_bonemeal": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 15
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "lime_dye"
          }
        }
      },
      "requirements": [
        [
          "has_green_dye",
          "has_bonemeal",
          "has_the_recipe"
        ]
      ]
    },
    "yellow_dye_from_sunflower": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:yellow_dye_from_sunflower"
        ]
      },
      "criteria": {
        "has_double_plant": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:double_plant",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "yellow_dye_from_sunflower"
          }
        }
      },
      "requirements": [
        [
          "has_double_plant",
          "has_the_recipe"
        ]
      ]
    },
    "book": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:book"
        ]
      },
      "criteria": {
        "has_paper": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:paper"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "book"
          }
        }
      },
      "requirements": [
        [
          "has_paper",
          "has_the_recipe"
        ]
      ]
    },
    "gray_dye": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:gray_dye"
        ]
      },
      "criteria": {
        "has_bonemeal": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 15
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "gray_dye"
          }
        },
        "has_black_dye": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 0
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_bonemeal",
          "has_the_recipe",
          "has_black_dye"
        ]
      ]
    },
    "red_dye_from_rose_bush": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:red_dye_from_rose_bush"
        ]
      },
      "criteria": {
        "has_double_plant": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:double_plant",
                "data": 4
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "red_dye_from_rose_bush"
          }
        }
      },
      "requirements": [
        [
          "has_double_plant",
          "has_the_recipe"
        ]
      ]
    },
    "stick": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:stick"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "stick"
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
    "sugar": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:sugar"
        ]
      },
      "criteria": {
        "has_reeds": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:reeds"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "sugar"
          }
        }
      },
      "requirements": [
        [
          "has_reeds",
          "has_the_recipe"
        ]
      ]
    },
    "red_dye_from_poppy": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:red_dye_from_poppy"
        ]
      },
      "criteria": {
        "has_red_flower": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:red_flower",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "red_dye_from_poppy"
          }
        }
      },
      "requirements": [
        [
          "has_red_flower",
          "has_the_recipe"
        ]
      ]
    },
    "paper": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:paper"
        ]
      },
      "criteria": {
        "has_reeds": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:reeds"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "paper"
          }
        }
      },
      "requirements": [
        [
          "has_reeds",
          "has_the_recipe"
        ]
      ]
    },
    "bowl": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:bowl"
        ]
      },
      "criteria": {
        "has_brown_mushroom": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:brown_mushroom"
              }
            ]
          }
        },
        "has_red_mushroom": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:red_mushroom"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "bowl"
          }
        }
      },
      "requirements": [
        [
          "has_brown_mushroom",
          "has_red_mushroom",
          "has_the_recipe"
        ]
      ]
    },
    "red_dye_from_beetroot": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:red_dye_from_beetroot"
        ]
      },
      "criteria": {
        "has_beetroot": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:beetroot",
                "data": 0
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "red_dye_from_beetroot"
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
    "diamond": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:diamond"
        ]
      },
      "criteria": {
        "has_diamond_block": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:diamond_block"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "diamond"
          }
        }
      },
      "requirements": [
        [
          "has_diamond_block",
          "has_the_recipe"
        ]
      ]
    },
    "pink_dye_from_peony": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:pink_dye_from_peony"
        ]
      },
      "criteria": {
        "has_double_plant": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:double_plant",
                "data": 5
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "pink_dye_from_peony"
          }
        }
      },
      "requirements": [
        [
          "has_double_plant",
          "has_the_recipe"
        ]
      ]
    },
    "iron_ingot_from_nuggets": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:iron_nugget",
          "minecraft:iron_ingot_from_nuggets"
        ]
      },
      "criteria": {
        "has_at_least_9_iron_nugget": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:iron_nugget",
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
            "recipe": "iron_ingot_from_nuggets"
          }
        }
      },
      "requirements": [
        [
          "has_at_least_9_iron_nugget",
          "has_the_recipe"
        ]
      ]
    },
    "leather": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:leather"
        ]
      },
      "criteria": {
        "has_rabbit_hide": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:rabbit_hide"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "leather"
          }
        }
      },
      "requirements": [
        [
          "has_rabbit_hide",
          "has_the_recipe"
        ]
      ]
    },
    "bone_meal_from_block": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:bone_meal_from_block"
        ]
      },
      "criteria": {
        "has_bone_block": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:bone_block"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "bone_meal_from_block"
          }
        }
      },
      "requirements": [
        [
          "has_bone_block",
          "has_the_recipe"
        ]
      ]
    },
    "gold_ingot_from_nuggets": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:gold_nugget",
          "minecraft:gold_ingot_from_nuggets"
        ]
      },
      "criteria": {
        "has_at_least_9_gold_nugget": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gold_nugget",
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
            "recipe": "gold_ingot_from_nuggets"
          }
        }
      },
      "requirements": [
        [
          "has_at_least_9_gold_nugget",
          "has_the_recipe"
        ]
      ]
    },
    "melon_seeds": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:melon_seeds"
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
            "recipe": "melon_seeds"
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
    "light_gray_dye_from_ink_bonemeal": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_gray_dye_from_ink_bonemeal"
        ]
      },
      "criteria": {
        "has_bonemeal": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 15
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_gray_dye_from_ink_bonemeal"
          }
        },
        "has_black_dye": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 0
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_bonemeal",
          "has_the_recipe",
          "has_black_dye"
        ]
      ]
    },
    "pink_dye_from_pink_tulip": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:pink_dye_from_pink_tulip"
        ]
      },
      "criteria": {
        "has_red_flower": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:red_flower",
                "data": 7
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "pink_dye_from_pink_tulip"
          }
        }
      },
      "requirements": [
        [
          "has_red_flower",
          "has_the_recipe"
        ]
      ]
    },
    "orange_dye_from_red_yellow": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:orange_dye_from_red_yellow"
        ]
      },
      "criteria": {
        "has_red_dye": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 1
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "orange_dye_from_red_yellow"
          }
        },
        "has_yellow_dye": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 11
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_red_dye",
          "has_the_recipe",
          "has_yellow_dye"
        ]
      ]
    },
    "magenta_dye_from_lilac": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:magenta_dye_from_lilac"
        ]
      },
      "criteria": {
        "has_double_plant": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:double_plant",
                "data": 1
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "magenta_dye_from_lilac"
          }
        }
      },
      "requirements": [
        [
          "has_double_plant",
          "has_the_recipe"
        ]
      ]
    },
    "cyan_dye": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:cyan_dye"
        ]
      },
      "criteria": {
        "has_green_dye": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 2
              }
            ]
          }
        },
        "has_lapis": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dye",
                "data": 4
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "cyan_dye"
          }
        }
      },
      "requirements": [
        [
          "has_green_dye",
          "has_lapis",
          "has_the_recipe"
        ]
      ]
    },
    "beacon": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:beacon"
        ]
      },
      "criteria": {
        "has_nether_star": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:nether_star"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "beacon"
          }
        }
      },
      "requirements": [
        [
          "has_nether_star",
          "has_the_recipe"
        ]
      ]
    },
    "bone_meal_from_bone": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:bone_meal_from_bone"
        ]
      },
      "criteria": {
        "has_bone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:bone"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "bone_meal_from_bone"
          }
        }
      },
      "requirements": [
        [
          "has_bone",
          "has_the_recipe"
        ]
      ]
    },
    "red_dye_from_tulip": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:red_dye_from_tulip"
        ]
      },
      "criteria": {
        "has_red_flower": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:red_flower",
                "data": 4
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "red_dye_from_tulip"
          }
        }
      },
      "requirements": [
        [
          "has_red_flower",
          "has_the_recipe"
        ]
      ]
    },
    "coal": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:coal"
        ]
      },
      "criteria": {
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "coal"
          }
        },
        "has_coal_block": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:coal_block"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "has_the_recipe",
          "has_coal_block"
        ]
      ]
    },
    "gold_ingot_from_block": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:gold_ingot_from_block"
        ]
      },
      "criteria": {
        "has_gold_block": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:gold_block"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "gold_ingot_from_block"
          }
        }
      },
      "requirements": [
        [
          "has_gold_block",
          "has_the_recipe"
        ]
      ]
    },
    "map": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:map"
        ]
      },
      "criteria": {
        "has_compass": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:compass"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "map"
          }
        }
      },
      "requirements": [
        [
          "has_compass",
          "has_the_recipe"
        ]
      ]
    },
    "orange_dye_from_orange_tulip": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:orange_dye_from_orange_tulip"
        ]
      },
      "criteria": {
        "has_red_flower": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:red_flower",
                "data": 5
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "orange_dye_from_orange_tulip"
          }
        }
      },
      "requirements": [
        [
          "has_red_flower",
          "has_the_recipe"
        ]
      ]
    },
    "light_gray_dye_from_azure_bluet": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:light_gray_dye_from_azure_bluet"
        ]
      },
      "criteria": {
        "has_red_flower": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:red_flower",
                "data": 3
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "light_gray_dye_from_azure_bluet"
          }
        }
      },
      "requirements": [
        [
          "has_red_flower",
          "has_the_recipe"
        ]
      ]
    },
    "wheat": {
      "parent": "minecraft:recipes/root",
      "rewards": {
        "recipes": [
          "minecraft:wheat"
        ]
      },
      "criteria": {
        "has_hay_block": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:hay_block"
              }
            ]
          }
        },
        "has_the_recipe": {
          "trigger": "minecraft:recipe_unlocked",
          "conditions": {
            "recipe": "wheat"
          }
        }
      },
      "requirements": [
        [
          "has_hay_block",
          "has_the_recipe"
        ]
      ]
    }
  };
})(window);
