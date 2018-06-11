(function(global) {
  global.assets.advancements.adventure = {
    "adventuring_time": {
      "display": {
        "icon": {
          "item": "minecraft:diamond_boots"
        },
        "title": {
          "translate": "advancements.adventure.adventuring_time.title"
        },
        "description": {
          "translate": "advancements.adventure.adventuring_time.description"
        },
        "frame": "challenge"
      },
      "parent": "adventure/sleep_in_bed",
      "rewards": {
        "experience": 500
      },
      "criteria": {
        "birch_forest_hills": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:birch_forest_hills"
          }
        },
        "river": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:river"
          }
        },
        "swampland": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:swampland"
          }
        },
        "desert": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:desert"
          }
        },
        "forest_hills": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:forest_hills"
          }
        },
        "redwood_taiga_hills": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:redwood_taiga_hills"
          }
        },
        "taiga_cold": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:taiga_cold"
          }
        },
        "mesa": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:mesa"
          }
        },
        "forest": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:forest"
          }
        },
        "stone_beach": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:stone_beach"
          }
        },
        "ice_flats": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:ice_flats"
          }
        },
        "taiga_hills": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:taiga_hills"
          }
        },
        "ice_mountains": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:ice_mountains"
          }
        },
        "mesa_rock": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:mesa_rock"
          }
        },
        "savanna": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:savanna"
          }
        },
        "plains": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:plains"
          }
        },
        "frozen_river": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:frozen_river"
          }
        },
        "redwood_taiga": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:redwood_taiga"
          }
        },
        "cold_beach": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:cold_beach"
          }
        },
        "deep_ocean": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:deep_ocean"
          }
        },
        "jungle_hills": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:jungle_hills"
          }
        },
        "jungle_edge": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:jungle_edge"
          }
        },
        "ocean": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:ocean"
          }
        },
        "mushroom_island_shore": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:mushroom_island_shore"
          }
        },
        "extreme_hills": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:extreme_hills"
          }
        },
        "desert_hills": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:desert_hills"
          }
        },
        "jungle": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:jungle"
          }
        },
        "beaches": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:beaches"
          }
        },
        "savanna_rock": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:savanna_rock"
          }
        },
        "taiga_cold_hills": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:taiga_cold_hills"
          }
        },
        "mesa_clear_rock": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:mesa_clear_rock"
          }
        },
        "roofed_forest": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:roofed_forest"
          }
        },
        "taiga": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:taiga"
          }
        },
        "birch_forest": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:birch_forest"
          }
        },
        "mushroom_island": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:mushroom_island"
          }
        },
        "extreme_hills_with_trees": {
          "trigger": "minecraft:location",
          "conditions": {
            "biome": "minecraft:extreme_hills_with_trees"
          }
        }
      }
    },
    "kill_a_mob": {
      "display": {
        "icon": {
          "item": "minecraft:iron_sword"
        },
        "title": {
          "translate": "advancements.adventure.kill_a_mob.title"
        },
        "description": {
          "translate": "advancements.adventure.kill_a_mob.description"
        }
      },
      "parent": "adventure/root",
      "criteria": {
        "cave_spider": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "cave_spider"
            }
          }
        },
        "spider": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "spider"
            }
          }
        },
        "zombie_pigman": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "zombie_pigman"
            }
          }
        },
        "enderman": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "enderman"
            }
          }
        },
        "polar_bear": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "polar_bear"
            }
          }
        },
        "blaze": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "blaze"
            }
          }
        },
        "creeper": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "creeper"
            }
          }
        },
        "evoker": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "evocation_illager"
            }
          }
        },
        "ghast": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "ghast"
            }
          }
        },
        "guardian": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "guardian"
            }
          }
        },
        "husk": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "husk"
            }
          }
        },
        "magma_cube": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "magma_cube"
            }
          }
        },
        "shulker": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "shulker"
            }
          }
        },
        "silverfish": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "silverfish"
            }
          }
        },
        "skeleton": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "skeleton"
            }
          }
        },
        "slime": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "slime"
            }
          }
        },
        "stray": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "stray"
            }
          }
        },
        "vindicator": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "vindication_illager"
            }
          }
        },
        "witch": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "witch"
            }
          }
        },
        "wither_skeleton": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "wither_skeleton"
            }
          }
        },
        "zombie": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "zombie"
            }
          }
        },
        "zombie_villager": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "zombie_villager"
            }
          }
        }
      },
      "requirements": [
        [
          "cave_spider",
          "spider",
          "zombie_pigman",
          "enderman",
          "polar_bear",
          "blaze",
          "creeper",
          "evoker",
          "ghast",
          "guardian",
          "husk",
          "magma_cube",
          "shulker",
          "silverfish",
          "skeleton",
          "slime",
          "stray",
          "vindicator",
          "witch",
          "wither_skeleton",
          "zombie",
          "zombie_villager"
        ]
      ]
    },
    "kill_all_mobs": {
      "display": {
        "icon": {
          "item": "minecraft:diamond_sword"
        },
        "title": {
          "translate": "advancements.adventure.kill_all_mobs.title"
        },
        "description": {
          "translate": "advancements.adventure.kill_all_mobs.description"
        },
        "frame": "challenge"
      },
      "parent": "adventure/kill_a_mob",
      "rewards": {
        "experience": 100
      },
      "criteria": {
        "cave_spider": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "cave_spider"
            }
          }
        },
        "spider": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "spider"
            }
          }
        },
        "zombie_pigman": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "zombie_pigman"
            }
          }
        },
        "enderman": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "enderman"
            }
          }
        },
        "polar_bear": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "polar_bear"
            }
          }
        },
        "blaze": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "blaze"
            }
          }
        },
        "creeper": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "creeper"
            }
          }
        },
        "evoker": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "evocation_illager"
            }
          }
        },
        "ghast": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "ghast"
            }
          }
        },
        "guardian": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "guardian"
            }
          }
        },
        "husk": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "husk"
            }
          }
        },
        "magma_cube": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "magma_cube"
            }
          }
        },
        "shulker": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "shulker"
            }
          }
        },
        "silverfish": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "silverfish"
            }
          }
        },
        "skeleton": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "skeleton"
            }
          }
        },
        "slime": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "slime"
            }
          }
        },
        "stray": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "stray"
            }
          }
        },
        "vindicator": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "vindication_illager"
            }
          }
        },
        "witch": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "witch"
            }
          }
        },
        "wither_skeleton": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "wither_skeleton"
            }
          }
        },
        "zombie": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "zombie"
            }
          }
        },
        "zombie_villager": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "zombie_villager"
            }
          }
        }
      }
    },
    "root": {
      "display": {
        "icon": {
          "item": "minecraft:map"
        },
        "title": {
          "translate": "advancements.adventure.root.title"
        },
        "description": {
          "translate": "advancements.adventure.root.description"
        },
        "background": "minecraft:textures/gui/advancements/backgrounds/adventure.png",
        "show_toast": false,
        "announce_to_chat": false
      },
      "criteria": {
        "killed_something": {
          "trigger": "minecraft:player_killed_entity"
        },
        "killed_by_something": {
          "trigger": "minecraft:entity_killed_player"
        }
      },
      "requirements": [
        [
          "killed_something",
          "killed_by_something"
        ]
      ]
    },
    "shoot_arrow": {
      "display": {
        "icon": {
          "item": "minecraft:bow"
        },
        "title": {
          "translate": "advancements.adventure.shoot_arrow.title"
        },
        "description": {
          "translate": "advancements.adventure.shoot_arrow.description"
        }
      },
      "parent": "adventure/kill_a_mob",
      "criteria": {
        "shot_arrow": {
          "trigger": "minecraft:player_hurt_entity",
          "conditions": {
            "damage": {
              "type": {
                "is_projectile": true,
                "direct_entity": {
                  "type": "minecraft:arrow"
                }
              }
            }
          }
        }
      }
    },
    "sleep_in_bed": {
      "display": {
        "icon": {
          "item": "minecraft:bed"
        },
        "title": {
          "translate": "advancements.adventure.sleep_in_bed.title"
        },
        "description": {
          "translate": "advancements.adventure.sleep_in_bed.description"
        }
      },
      "parent": "adventure/root",
      "criteria": {
        "slept_in_bed": {
          "trigger": "minecraft:slept_in_bed"
        }
      }
    },
    "sniper_duel": {
      "display": {
        "icon": {
          "item": "minecraft:arrow"
        },
        "title": {
          "translate": "advancements.adventure.sniper_duel.title"
        },
        "description": {
          "translate": "advancements.adventure.sniper_duel.description"
        },
        "frame": "challenge"
      },
      "parent": "adventure/shoot_arrow",
      "rewards": {
        "experience": 50
      },
      "criteria": {
        "killed_skeleton": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "killing_blow": {
              "is_projectile": true
            },
            "entity": {
              "type": "skeleton",
              "distance": {
                "horizontal": {
                  "min": 50
                }
              }
            }
          }
        }
      }
    },
    "summon_iron_golem": {
      "display": {
        "icon": {
          "item": "minecraft:pumpkin"
        },
        "title": {
          "translate": "advancements.adventure.summon_iron_golem.title"
        },
        "description": {
          "translate": "advancements.adventure.summon_iron_golem.description"
        },
        "frame": "goal"
      },
      "parent": "adventure/trade",
      "criteria": {
        "summoned_golem": {
          "trigger": "minecraft:summoned_entity",
          "conditions": {
            "entity": {
              "type": "minecraft:villager_golem"
            }
          }
        }
      }
    },
    "totem_of_undying": {
      "display": {
        "icon": {
          "item": "minecraft:totem_of_undying"
        },
        "title": {
          "translate": "advancements.adventure.totem_of_undying.title"
        },
        "description": {
          "translate": "advancements.adventure.totem_of_undying.description"
        },
        "frame": "goal"
      },
      "parent": "adventure/kill_a_mob",
      "criteria": {
        "used_totem": {
          "trigger": "minecraft:used_totem",
          "conditions": {
            "item": {
              "item": "minecraft:totem_of_undying"
            }
          }
        }
      }
    },
    "trade": {
      "display": {
        "icon": {
          "item": "minecraft:emerald"
        },
        "title": {
          "translate": "advancements.adventure.trade.title"
        },
        "description": {
          "translate": "advancements.adventure.trade.description"
        }
      },
      "parent": "adventure/root",
      "criteria": {
        "traded": {
          "trigger": "minecraft:villager_trade"
        }
      }
    }
  };
})(window);
