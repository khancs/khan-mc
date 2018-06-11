(function(global) {
  global.assets.advancements.husbandry = {
    "balanced_diet": {
      "display": {
        "icon": {
          "item": "minecraft:apple"
        },
        "title": {
          "translate": "advancements.husbandry.balanced_diet.title"
        },
        "description": {
          "translate": "advancements.husbandry.balanced_diet.description"
        },
        "frame": "challenge"
      },
      "parent": "minecraft:husbandry/plant_seed",
      "rewards": {
        "experience": 100
      },
      "criteria": {
        "apple": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:apple"
            }
          }
        },
        "mushroom_stew": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:mushroom_stew"
            }
          }
        },
        "bread": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:bread"
            }
          }
        },
        "porkchop": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:porkchop"
            }
          }
        },
        "cooked_porkchop": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:cooked_porkchop"
            }
          }
        },
        "golden_apple": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:golden_apple",
              "data": 0
            }
          }
        },
        "enchanted_golden_apple": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:golden_apple",
              "data": 1
            }
          }
        },
        "raw_cod": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:fish",
              "data": 0
            }
          }
        },
        "raw_salmon": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:fish",
              "data": 1
            }
          }
        },
        "clownfish": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:fish",
              "data": 2
            }
          }
        },
        "pufferfish": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:fish",
              "data": 3
            }
          }
        },
        "cooked_cod": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:cooked_fish",
              "data": 0
            }
          }
        },
        "cooked_salmon": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:cooked_fish",
              "data": 1
            }
          }
        },
        "cookie": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:cookie"
            }
          }
        },
        "melon": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:melon"
            }
          }
        },
        "beef": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:beef"
            }
          }
        },
        "cooked_beef": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:cooked_beef"
            }
          }
        },
        "chicken": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:chicken"
            }
          }
        },
        "cooked_chicken": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:cooked_chicken"
            }
          }
        },
        "rotten_flesh": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:rotten_flesh"
            }
          }
        },
        "spider_eye": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:spider_eye"
            }
          }
        },
        "carrot": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:carrot"
            }
          }
        },
        "potato": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:potato"
            }
          }
        },
        "baked_potato": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:baked_potato"
            }
          }
        },
        "poisonous_potato": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:poisonous_potato"
            }
          }
        },
        "golden_carrot": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:golden_carrot"
            }
          }
        },
        "pumpkin_pie": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:pumpkin_pie"
            }
          }
        },
        "rabbit": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:rabbit"
            }
          }
        },
        "cooked_rabbit": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:cooked_rabbit"
            }
          }
        },
        "rabbit_stew": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:rabbit_stew"
            }
          }
        },
        "mutton": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:mutton"
            }
          }
        },
        "cooked_mutton": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:cooked_mutton"
            }
          }
        },
        "chorus_fruit": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:chorus_fruit"
            }
          }
        },
        "beetroot": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:beetroot"
            }
          }
        },
        "beetroot_soup": {
          "trigger": "consume_item",
          "conditions": {
            "item": {
              "item": "minecraft:beetroot_soup"
            }
          }
        }
      }
    },
    "break_diamond_hoe": {
      "display": {
        "icon": {
          "item": "minecraft:diamond_hoe"
        },
        "title": {
          "translate": "advancements.husbandry.break_diamond_hoe.title"
        },
        "description": {
          "translate": "advancements.husbandry.break_diamond_hoe.description"
        },
        "frame": "challenge"
      },
      "parent": "minecraft:husbandry/plant_seed",
      "rewards": {
        "experience": 100
      },
      "criteria": {
        "broke_hoe": {
          "trigger": "minecraft:item_durability_changed",
          "conditions": {
            "item": {
              "item": "minecraft:diamond_hoe"
            },
            "durability": -1
          }
        }
      }
    },
    "bred_all_animals": {
      "display": {
        "icon": {
          "item": "minecraft:golden_carrot"
        },
        "title": {
          "translate": "advancements.husbandry.breed_all_animals.title"
        },
        "description": {
          "translate": "advancements.husbandry.breed_all_animals.description"
        },
        "frame": "challenge"
      },
      "parent": "husbandry/breed_an_animal",
      "rewards": {
        "experience": 100
      },
      "criteria": {
        "bred_horse": {
          "trigger": "bred_animals",
          "conditions": {
            "parent": {
              "type": "horse"
            }
          }
        },
        "bred_sheep": {
          "trigger": "bred_animals",
          "conditions": {
            "parent": {
              "type": "sheep"
            }
          }
        },
        "bred_cow": {
          "trigger": "bred_animals",
          "conditions": {
            "parent": {
              "type": "cow"
            }
          }
        },
        "bred_mooshroom": {
          "trigger": "bred_animals",
          "conditions": {
            "parent": {
              "type": "mooshroom"
            }
          }
        },
        "bred_pig": {
          "trigger": "bred_animals",
          "conditions": {
            "parent": {
              "type": "pig"
            }
          }
        },
        "bred_chicken": {
          "trigger": "bred_animals",
          "conditions": {
            "parent": {
              "type": "chicken"
            }
          }
        },
        "bred_wolf": {
          "trigger": "bred_animals",
          "conditions": {
            "parent": {
              "type": "wolf"
            }
          }
        },
        "bred_ocelot": {
          "trigger": "bred_animals",
          "conditions": {
            "parent": {
              "type": "ocelot"
            }
          }
        },
        "bred_rabbit": {
          "trigger": "bred_animals",
          "conditions": {
            "parent": {
              "type": "rabbit"
            }
          }
        },
        "bred_llama": {
          "trigger": "bred_animals",
          "conditions": {
            "parent": {
              "type": "llama"
            }
          }
        }
      }
    },
    "breed_an_animal": {
      "display": {
        "icon": {
          "item": "minecraft:wheat"
        },
        "title": {
          "translate": "advancements.husbandry.breed_an_animal.title"
        },
        "description": {
          "translate": "advancements.husbandry.breed_an_animal.description"
        }
      },
      "parent": "husbandry/root",
      "criteria": {
        "bred_horse": {
          "trigger": "bred_animals",
          "conditions": {
            "parent": {
              "type": "horse"
            }
          }
        },
        "bred_sheep": {
          "trigger": "bred_animals",
          "conditions": {
            "parent": {
              "type": "sheep"
            }
          }
        },
        "bred_cow": {
          "trigger": "bred_animals",
          "conditions": {
            "parent": {
              "type": "cow"
            }
          }
        },
        "bred_mooshroom": {
          "trigger": "bred_animals",
          "conditions": {
            "parent": {
              "type": "mooshroom"
            }
          }
        },
        "bred_pig": {
          "trigger": "bred_animals",
          "conditions": {
            "parent": {
              "type": "pig"
            }
          }
        },
        "bred_chicken": {
          "trigger": "bred_animals",
          "conditions": {
            "parent": {
              "type": "chicken"
            }
          }
        },
        "bred_wolf": {
          "trigger": "bred_animals",
          "conditions": {
            "parent": {
              "type": "wolf"
            }
          }
        },
        "bred_ocelot": {
          "trigger": "bred_animals",
          "conditions": {
            "parent": {
              "type": "ocelot"
            }
          }
        },
        "bred_rabbit": {
          "trigger": "bred_animals",
          "conditions": {
            "parent": {
              "type": "rabbit"
            }
          }
        },
        "bred_llama": {
          "trigger": "bred_animals",
          "conditions": {
            "parent": {
              "type": "llama"
            }
          }
        }
      },
      "requirements": [
        [
          "bred_horse",
          "bred_sheep",
          "bred_cow",
          "bred_mooshroom",
          "bred_pig",
          "bred_chicken",
          "bred_wolf",
          "bred_ocelot",
          "bred_rabbit",
          "bred_llama"
        ]
      ]
    },
    "plant_seed": {
      "display": {
        "icon": {
          "item": "minecraft:wheat"
        },
        "title": {
          "translate": "advancements.husbandry.plant_seed.title"
        },
        "description": {
          "translate": "advancements.husbandry.plant_seed.description"
        }
      },
      "parent": "husbandry/root",
      "criteria": {
        "wheat": {
          "trigger": "minecraft:placed_block",
          "conditions": {
            "block": "minecraft:wheat"
          }
        },
        "pumpkin_stem": {
          "trigger": "minecraft:placed_block",
          "conditions": {
            "block": "minecraft:pumpkin_stem"
          }
        },
        "melon_stem": {
          "trigger": "minecraft:placed_block",
          "conditions": {
            "block": "minecraft:melon_stem"
          }
        },
        "beetroots": {
          "trigger": "minecraft:placed_block",
          "conditions": {
            "block": "minecraft:beetroots"
          }
        },
        "nether_wart": {
          "trigger": "minecraft:placed_block",
          "conditions": {
            "block": "minecraft:nether_wart"
          }
        }
      },
      "requirements": [
        [
          "wheat",
          "pumpkin_stem",
          "melon_stem",
          "beetroots",
          "nether_wart"
        ]
      ]
    },
    "root": {
      "display": {
        "icon": {
          "item": "minecraft:hay_block"
        },
        "title": {
          "translate": "advancements.husbandry.root.title"
        },
        "description": {
          "translate": "advancements.husbandry.root.description"
        },
        "background": "minecraft:textures/gui/advancements/backgrounds/husbandry.png",
        "show_toast": false,
        "announce_to_chat": false
      },
      "criteria": {
        "consumed_item": {
          "trigger": "minecraft:consume_item"
        }
      }
    },
    "tame_an_animal": {
      "display": {
        "icon": {
          "item": "minecraft:lead"
        },
        "title": {
          "translate": "advancements.husbandry.tame_an_animal.title"
        },
        "description": {
          "translate": "advancements.husbandry.tame_an_animal.description"
        }
      },
      "parent": "husbandry/root",
      "criteria": {
        "tamed_animal": {
          "trigger": "minecraft:tame_animal"
        }
      }
    }
  };
})(window);
