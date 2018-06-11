(function(global) {
  window.assets.advancements.end = {
    "dragon_breath": {
      "display": {
        "icon": {
          "item": "minecraft:dragon_breath"
        },
        "title": {
          "translate": "advancements.end.dragon_breath.title"
        },
        "description": {
          "translate": "advancements.end.dragon_breath.description"
        },
        "frame": "goal"
      },
      "parent": "end/kill_dragon",
      "criteria": {
        "dragon_breath": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dragon_breath"
              }
            ]
          }
        }
      }
    },
    "dragon_egg": {
      "display": {
        "icon": {
          "item": "minecraft:dragon_egg"
        },
        "title": {
          "translate": "advancements.end.dragon_egg.title"
        },
        "description": {
          "translate": "advancements.end.dragon_egg.description"
        },
        "frame": "goal"
      },
      "parent": "end/kill_dragon",
      "criteria": {
        "dragon_egg": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:dragon_egg"
              }
            ]
          }
        }
      }
    },
    "elytra": {
      "display": {
        "icon": {
          "item": "minecraft:elytra"
        },
        "title": {
          "translate": "advancements.end.elytra.title"
        },
        "description": {
          "translate": "advancements.end.elytra.description"
        },
        "frame": "goal"
      },
      "parent": "minecraft:end/find_end_city",
      "criteria": {
        "elytra": {
          "trigger": "minecraft:inventory_changed",
          "conditions": {
            "items": [
              {
                "item": "minecraft:elytra"
              }
            ]
          }
        }
      }
    },
    "enter_end_gateway": {
      "display": {
        "icon": {
          "item": "minecraft:ender_pearl"
        },
        "title": {
          "translate": "advancements.end.enter_end_gateway.title"
        },
        "description": {
          "translate": "advancements.end.enter_end_gateway.description"
        }
      },
      "parent": "minecraft:end/kill_dragon",
      "criteria": {
        "entered_end_gateway": {
          "trigger": "minecraft:enter_block",
          "conditions": {
            "block": "minecraft:end_gateway"
          }
        }
      }
    },
    "find_end_city": {
      "display": {
        "icon": {
          "item": "minecraft:purpur_block"
        },
        "title": {
          "translate": "advancements.end.find_end_city.title"
        },
        "description": {
          "translate": "advancements.end.find_end_city.description"
        }
      },
      "parent": "minecraft:end/enter_end_gateway",
      "criteria": {
        "in_city": {
          "trigger": "minecraft:location",
          "conditions": {
            "feature": "EndCity"
          }
        }
      }
    },
    "kill_dragon": {
      "display": {
        "icon": {
          "item": "minecraft:skull",
          "data": 5
        },
        "title": {
          "translate": "advancements.end.kill_dragon.title"
        },
        "description": {
          "translate": "advancements.end.kill_dragon.description"
        }
      },
      "parent": "end/root",
      "criteria": {
        "killed_dragon": {
          "trigger": "minecraft:player_killed_entity",
          "conditions": {
            "entity": {
              "type": "ender_dragon"
            }
          }
        }
      }
    },
    "levitate": {
      "display": {
        "icon": {
          "item": "minecraft:shulker_shell"
        },
        "title": {
          "translate": "advancements.end.levitate.title"
        },
        "description": {
          "translate": "advancements.end.levitate.description"
        },
        "frame": "challenge"
      },
      "parent": "minecraft:end/find_end_city",
      "rewards": {
        "experience": 50
      },
      "criteria": {
        "levitated": {
          "trigger": "minecraft:levitation",
          "conditions": {
            "distance": {
              "y": {
                "min": 50
              }
            }
          }
        }
      }
    },
    "respawn_dragon": {
      "display": {
        "icon": {
          "item": "minecraft:end_crystal"
        },
        "title": {
          "translate": "advancements.end.respawn_dragon.title"
        },
        "description": {
          "translate": "advancements.end.respawn_dragon.description"
        },
        "frame": "goal"
      },
      "parent": "end/kill_dragon",
      "criteria": {
        "summoned_dragon": {
          "trigger": "minecraft:summoned_entity",
          "conditions": {
            "entity": {
              "type": "ender_dragon"
            }
          }
        }
      }
    },
    "root": {
      "display": {
        "icon": {
          "item": "minecraft:end_stone"
        },
        "title": {
          "translate": "advancements.end.root.title"
        },
        "description": {
          "translate": "advancements.end.root.description"
        },
        "background": "minecraft:textures/gui/advancements/backgrounds/end.png",
        "show_toast": false,
        "announce_to_chat": false
      },
      "criteria": {
        "entered_end": {
          "trigger": "minecraft:changed_dimension",
          "conditions": {
            "to": "the_end"
          }
        }
      }
    }
  };
})(window);
