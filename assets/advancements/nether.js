(function(global) {
  global.assets.advancements.nether = {
    "all_effects": {
      "display": {
        "icon": {
          "item": "minecraft:bucket"
        },
        "title": {
          "translate": "advancements.nether.all_effects.title"
        },
        "description": {
          "translate": "advancements.nether.all_effects.description"
        },
        "frame": "challenge",
        "hidden": true
      },
      "parent": "minecraft:nether/all_potions",
      "rewards": {
        "experience": 1000
      },
      "criteria": {
        "all_effects": {
          "trigger": "minecraft:effects_changed",
          "conditions": {
            "effects": {
              "minecraft:speed": {},
              "minecraft:slowness": {},
              "minecraft:strength": {},
              "minecraft:jump_boost": {},
              "minecraft:regeneration": {},
              "minecraft:fire_resistance": {},
              "minecraft:water_breathing": {},
              "minecraft:invisibility": {},
              "minecraft:night_vision": {},
              "minecraft:weakness": {},
              "minecraft:poison": {},
              "minecraft:wither": {},
              "minecraft:haste": {},
              "minecraft:mining_fatigue": {},
              "minecraft:levitation": {},
              "minecraft:glowing": {},
              "minecraft:absorption": {},
              "minecraft:hunger": {},
              "minecraft:nausea": {},
              "minecraft:resistance": {}
            }
          }
        }
      }
    },
    "all_potions": {
      "display": {
        "icon": {
          "item": "minecraft:milk_bucket"
        },
        "title": {
          "translate": "advancements.nether.all_potions.title"
        },
        "description": {
          "translate": "advancements.nether.all_potions.description"
        },
        "frame": "challenge"
      },
      "parent": "minecraft:nether/brew_potion",
      "rewards": {
        "experience": 100
      },
      "criteria": {
        "all_effects": {
          "trigger": "minecraft:effects_changed",
          "conditions": {
            "effects": {
              "minecraft:speed": {},
              "minecraft:slowness": {},
              "minecraft:strength": {},
              "minecraft:jump_boost": {},
              "minecraft:regeneration": {},
              "minecraft:fire_resistance": {},
              "minecraft:water_breathing": {},
              "minecraft:invisibility": {},
              "minecraft:night_vision": {},
              "minecraft:weakness": {},
              "minecraft:poison": {}
            }
          }
        }
      }
    },
    "brew_potion": {
      "display": {
        "icon": {
          "item": "minecraft:potion"
        },
        "title": {
          "translate": "advancements.nether.brew_potion.title"
        },
        "description": {
          "translate": "advancements.nether.brew_potion.description"
        }
      },
      "parent": "minecraft:nether/obtain_blaze_rod",
      "criteria": {
        "potion": {
          "trigger": "minecraft:brewed_potion"
        }
      }
    },
    "create_beacon": {
      "display": {
        "icon": {
          "item": "minecraft:beacon"
        },
        "title": {
          "translate": "advancements.nether.create_beacon.title"
        },
        "description": {
          "translate": "advancements.nether.create_beacon.description"
        }
      },
      "parent": "minecraft:nether/summon_wither",
      "criteria": {
        "beacon": {
          "trigger": "minecraft:construct_beacon",
          "conditions": {
            "level": {
              "min": 1
            }
          }
        }
      }
    },
    "create_full_beacon": {
      "display": {
        "icon": {
          "item": "minecraft:beacon"
        },
        "title": {
          "translate": "advancements.nether.create_full_beacon.title"
        },
        "description": {
          "translate": "advancements.nether.create_full_beacon.description"
        },
        "frame": "goal"
      },
      "parent": "minecraft:nether/create_beacon",
      "criteria": {
        "beacon": {
          "trigger": "minecraft:construct_beacon",
          "conditions": {
            "level": 4
          }
        }
      }
    },
    "fast_travel": {
      "display": {
        "icon": {
          "item": "minecraft:map"
        },
        "title": {
          "translate": "advancements.nether.fast_travel.title"
        },
        "description": {
          "translate": "advancements.nether.fast_travel.description"
        },
        "frame": "challenge"
      },
      "parent": "minecraft:nether/root",
      "rewards": {
        "experience": 100
      },
      "criteria": {
        "travelled": {
          "trigger": "minecraft:nether_travel",
          "conditions": {
            "distance": {
              "horizontal": {
                "min": 7000
              }
            }
          }
        }
      }
    },
    "find_fortress": {
      "display": {
        "icon": {
          "item": "minecraft:nether_brick"
        },
        "title": {
          "translate": "advancements.nether.find_fortress.title"
        },
        "description": {
          "translate": "advancements.nether.find_fortress.description"
        }
      },
      "parent": "minecraft:nether/root",
      "criteria": {
        "fortress": {
          "trigger": "minecraft:location",
          "conditions": {
            "feature": "Fortress"
          }
        }
      }
    },
    "get_wither_skull": {
      "display": {
        "icon": {
          "item": "minecraft:skull",
          "data": 1
        },
        "title": {
          "translate": "advancements.nether.get_wither_skull.title"
        },
        "description": {
          "translate": "advancements.nether.get_wither_skull.description"
        }
      },
      "parent": "minecraft:nether/find_fortress",
      "criteria": {
        "wither_skull": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:skull",
                "data": 1
              }
            ]
          }
        }
      }
    },
    "obtain_blaze_rod": {
      "display": {
        "icon": {
          "item": "minecraft:blaze_rod"
        },
        "title": {
          "translate": "advancements.nether.obtain_blaze_rod.title"
        },
        "description": {
          "translate": "advancements.nether.obtain_blaze_rod.description"
        }
      },
      "parent": "minecraft:nether/find_fortress",
      "criteria": {
        "blaze_rod": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:blaze_rod"
              }
            ]
          }
        }
      }
    },
    "return_to_sender": {
      "display": {
        "icon": {
          "item": "minecraft:fire_charge"
        },
        "title": {
          "translate": "advancements.nether.return_to_sender.title"
        },
        "description": {
          "translate": "advancements.nether.return_to_sender.description"
        },
        "frame": "challenge"
      },
      "parent": "minecraft:nether/root",
      "rewards": {
        "experience": 50
      },
      "criteria": {
        "killed_ghast": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "minecraft:ghast"
            },
            "killing_blow": {
              "is_projectile": true,
              "direct_entity": {
                "type": "minecraft:fireball"
              }
            }
          }
        }
      }
    },
    "root": {
      "display": {
        "icon": {
          "item": "minecraft:red_nether_brick"
        },
        "title": {
          "translate": "advancements.nether.root.title"
        },
        "description": {
          "translate": "advancements.nether.root.description"
        },
        "background": "minecraft:textures/gui/advancements/backgrounds/nether.png",
        "show_toast": false,
        "announce_to_chat": false
      },
      "criteria": {
        "entered_nether": {
          "trigger": "minecraft:changed_dimension",
          "conditions": {
            "to": "the_nether"
          }
        }
      }
    },
    "summon_wither": {
      "display": {
        "icon": {
          "item": "minecraft:nether_star"
        },
        "title": {
          "translate": "advancements.nether.summon_wither.title"
        },
        "description": {
          "translate": "advancements.nether.summon_wither.description"
        }
      },
      "parent": "minecraft:nether/get_wither_skull",
      "criteria": {
        "summoned": {
          "trigger": "minecraft:summoned_entity",
          "conditions": {
            "entity": {
              "type": "wither"
            }
          }
        }
      }
    },
    "uneasy_alliance": {
      "display": {
        "icon": {
          "item": "minecraft:ghast_tear"
        },
        "title": {
          "translate": "advancements.nether.uneasy_alliance.title"
        },
        "description": {
          "translate": "advancements.nether.uneasy_alliance.description"
        },
        "frame": "challenge"
      },
      "parent": "minecraft:nether/return_to_sender",
      "rewards": {
        "experience": 100
      },
      "criteria": {
        "killed_ghast": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "minecraft:ghast",
              "location": {
                "dimension": "overworld"
              }
            }
          }
        }
      }
    }
  };
})(window);
