(function(global) {
  global.assets.advancements.story = {
    "cure_zombie_villager": {
      "display": {
        "icon": {
          "item": "minecraft:golden_apple"
        },
        "title": {
          "translate": "advancements.story.cure_zombie_villager.title"
        },
        "description": {
          "translate": "advancements.story.cure_zombie_villager.description"
        },
        "frame": "goal"
      },
      "parent": "minecraft:story/enter_the_nether",
      "criteria": {
        "cured_zombie": {
          "trigger": "minecraft:cured_zombie_villager"
        }
      }
    },
    "obtain_armor": {
      "display": {
        "icon": {
          "item": "minecraft:iron_chestplate"
        },
        "title": {
          "translate": "advancements.story.obtain_armor.title"
        },
        "description": {
          "translate": "advancements.story.obtain_armor.description"
        }
      },
      "parent": "minecraft:story/smelt_iron",
      "criteria": {
        "iron_helmet": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:iron_helmet"
              }
            ]
          }
        },
        "iron_chestplate": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:iron_chestplate"
              }
            ]
          }
        },
        "iron_leggings": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:iron_leggings"
              }
            ]
          }
        },
        "iron_boots": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:iron_boots"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "iron_helmet",
          "iron_chestplate",
          "iron_leggings",
          "iron_boots"
        ]
      ]
    },
    "mine_stone": {
      "display": {
        "icon": {
          "item": "minecraft:wooden_pickaxe"
        },
        "title": {
          "translate": "advancements.story.mine_stone.title"
        },
        "description": {
          "translate": "advancements.story.mine_stone.description"
        }
      },
      "parent": "minecraft:story/root",
      "criteria": {
        "get_stone": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:cobblestone"
              }
            ]
          }
        }
      }
    },
    "smelt_iron": {
      "display": {
        "icon": {
          "item": "minecraft:iron_ingot"
        },
        "title": {
          "translate": "advancements.story.smelt_iron.title"
        },
        "description": {
          "translate": "advancements.story.smelt_iron.description"
        }
      },
      "parent": "minecraft:story/upgrade_tools",
      "criteria": {
        "iron": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:iron_ingot"
              }
            ]
          }
        }
      }
    },
    "form_obsidian": {
      "display": {
        "icon": {
          "item": "minecraft:obsidian"
        },
        "title": {
          "translate": "advancements.story.form_obsidian.title"
        },
        "description": {
          "translate": "advancements.story.form_obsidian.description"
        }
      },
      "parent": "minecraft:story/lava_bucket",
      "criteria": {
        "obsidian": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:obsidian"
              }
            ]
          }
        }
      }
    },
    "enchant_item": {
      "display": {
        "icon": {
          "item": "minecraft:enchanted_book"
        },
        "title": {
          "translate": "advancements.story.enchant_item.title"
        },
        "description": {
          "translate": "advancements.story.enchant_item.description"
        }
      },
      "parent": "minecraft:story/mine_diamond",
      "criteria": {
        "enchanted_item": {
          "trigger": "minecraft:enchanted_item"
        }
      }
    },
    "lava_bucket": {
      "display": {
        "icon": {
          "item": "minecraft:lava_bucket"
        },
        "title": {
          "translate": "advancements.story.lava_bucket.title"
        },
        "description": {
          "translate": "advancements.story.lava_bucket.description"
        }
      },
      "parent": "minecraft:story/smelt_iron",
      "criteria": {
        "lava_bucket": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:lava_bucket"
              }
            ]
          }
        }
      }
    },
    "follow_ender_eye": {
      "display": {
        "icon": {
          "item": "minecraft:ender_eye"
        },
        "title": {
          "translate": "advancements.story.follow_ender_eye.title"
        },
        "description": {
          "translate": "advancements.story.follow_ender_eye.description"
        }
      },
      "parent": "minecraft:story/enter_the_nether",
      "criteria": {
        "in_stronghold": {
          "trigger": "minecraft:location",
          "conditions": {
            "feature": "Stronghold"
          }
        }
      }
    },
    "deflect_arrow": {
      "display": {
        "icon": {
          "item": "minecraft:shield"
        },
        "title": {
          "translate": "advancements.story.deflect_arrow.title"
        },
        "description": {
          "translate": "advancements.story.deflect_arrow.description"
        }
      },
      "parent": "minecraft:story/obtain_armor",
      "criteria": {
        "deflected_projectile": {
          "trigger": "minecraft:entity_hurt_player",
          "conditions": {
            "damage": {
              "type": {
                "is_projectile": true
              },
              "blocked": true
            }
          }
        }
      }
    },
    "enter_the_end": {
      "display": {
        "icon": {
          "item": "minecraft:end_stone"
        },
        "title": {
          "translate": "advancements.story.enter_the_end.title"
        },
        "description": {
          "translate": "advancements.story.enter_the_end.description"
        }
      },
      "parent": "minecraft:story/follow_ender_eye",
      "criteria": {
        "entered_end": {
          "trigger": "minecraft:changed_dimension",
          "conditions": {
            "to": "the_end"
          }
        }
      }
    },
    "iron_tools": {
      "display": {
        "icon": {
          "item": "minecraft:iron_pickaxe"
        },
        "title": {
          "translate": "advancements.story.iron_tools.title"
        },
        "description": {
          "translate": "advancements.story.iron_tools.description"
        }
      },
      "parent": "minecraft:story/smelt_iron",
      "criteria": {
        "iron_pickaxe": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:iron_pickaxe"
              }
            ]
          }
        }
      }
    },
    "enter_the_nether": {
      "display": {
        "icon": {
          "item": "minecraft:flint_and_steel"
        },
        "title": {
          "translate": "advancements.story.enter_the_nether.title"
        },
        "description": {
          "translate": "advancements.story.enter_the_nether.description"
        }
      },
      "parent": "minecraft:story/form_obsidian",
      "criteria": {
        "entered_nether": {
          "trigger": "minecraft:changed_dimension",
          "conditions": {
            "to": "the_nether"
          }
        }
      }
    },
    "shiny_gear": {
      "display": {
        "icon": {
          "item": "minecraft:diamond_chestplate"
        },
        "title": {
          "translate": "advancements.story.shiny_gear.title"
        },
        "description": {
          "translate": "advancements.story.shiny_gear.description"
        }
      },
      "parent": "minecraft:story/mine_diamond",
      "criteria": {
        "diamond_helmet": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:diamond_helmet"
              }
            ]
          }
        },
        "diamond_chestplate": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:diamond_chestplate"
              }
            ]
          }
        },
        "diamond_leggings": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:diamond_leggings"
              }
            ]
          }
        },
        "diamond_boots": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:diamond_boots"
              }
            ]
          }
        }
      },
      "requirements": [
        [
          "diamond_helmet",
          "diamond_chestplate",
          "diamond_leggings",
          "diamond_boots"
        ]
      ]
    },
    "mine_diamond": {
      "display": {
        "icon": {
          "item": "minecraft:diamond"
        },
        "title": {
          "translate": "advancements.story.mine_diamond.title"
        },
        "description": {
          "translate": "advancements.story.mine_diamond.description"
        }
      },
      "parent": "minecraft:story/iron_tools",
      "criteria": {
        "diamond": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:diamond"
              }
            ]
          }
        }
      }
    },
    "root": {
      "display": {
        "icon": {
          "item": "minecraft:grass"
        },
        "title": {
          "translate": "advancements.story.root.title"
        },
        "description": {
          "translate": "advancements.story.root.description"
        },
        "background": "minecraft:textures/gui/advancements/backgrounds/stone.png",
        "show_toast": false,
        "announce_to_chat": false
      },
      "criteria": {
        "crafting_table": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:crafting_table"
              }
            ]
          }
        }
      }
    },
    "upgrade_tools": {
      "display": {
        "icon": {
          "item": "minecraft:stone_pickaxe"
        },
        "title": {
          "translate": "advancements.story.upgrade_tools.title"
        },
        "description": {
          "translate": "advancements.story.upgrade_tools.description"
        }
      },
      "parent": "minecraft:story/mine_stone",
      "criteria": {
        "stone_pickaxe": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:stone_pickaxe"
              }
            ]
          }
        }
      }
    }
  };
})(window);
