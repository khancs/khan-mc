(function(global) {
  global.assets.blockstates = {
    "dropper": {
      "variants": {
        "facing=down": {
          "model": "dropper_vertical",
          "x": 180
        },
        "facing=up": {
          "model": "dropper_vertical"
        },
        "facing=north": {
          "model": "dropper"
        },
        "facing=south": {
          "model": "dropper",
          "y": 180
        },
        "facing=west": {
          "model": "dropper",
          "y": 270
        },
        "facing=east": {
          "model": "dropper",
          "y": 90
        }
      }
    },
    "jungle_fence_gate": {
      "variants": {
        "facing=south,in_wall=false,open=false": {
          "model": "jungle_fence_gate_closed",
          "uvlock": true
        },
        "facing=west,in_wall=false,open=false": {
          "model": "jungle_fence_gate_closed",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=false,open=false": {
          "model": "jungle_fence_gate_closed",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=false,open=false": {
          "model": "jungle_fence_gate_closed",
          "uvlock": true,
          "y": 270
        },
        "facing=south,in_wall=false,open=true": {
          "model": "jungle_fence_gate_open",
          "uvlock": true
        },
        "facing=west,in_wall=false,open=true": {
          "model": "jungle_fence_gate_open",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=false,open=true": {
          "model": "jungle_fence_gate_open",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=false,open=true": {
          "model": "jungle_fence_gate_open",
          "uvlock": true,
          "y": 270
        },
        "facing=south,in_wall=true,open=false": {
          "model": "jungle_wall_gate_closed",
          "uvlock": true
        },
        "facing=west,in_wall=true,open=false": {
          "model": "jungle_wall_gate_closed",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=true,open=false": {
          "model": "jungle_wall_gate_closed",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=true,open=false": {
          "model": "jungle_wall_gate_closed",
          "uvlock": true,
          "y": 270
        },
        "facing=south,in_wall=true,open=true": {
          "model": "jungle_wall_gate_open",
          "uvlock": true
        },
        "facing=west,in_wall=true,open=true": {
          "model": "jungle_wall_gate_open",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=true,open=true": {
          "model": "jungle_wall_gate_open",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=true,open=true": {
          "model": "jungle_wall_gate_open",
          "uvlock": true,
          "y": 270
        }
      }
    },
    "stone_pressure_plate": {
      "variants": {
        "powered=false": {
          "model": "stone_pressure_plate_up"
        },
        "powered=true": {
          "model": "stone_pressure_plate_down"
        }
      }
    },
    "spruce_double_slab": {
      "variants": {
        "normal": {
          "model": "spruce_planks"
        }
      }
    },
    "acacia_door": {
      "variants": {
        "facing=east,half=lower,hinge=left,open=false": {
          "model": "acacia_door_bottom"
        },
        "facing=south,half=lower,hinge=left,open=false": {
          "model": "acacia_door_bottom",
          "y": 90
        },
        "facing=west,half=lower,hinge=left,open=false": {
          "model": "acacia_door_bottom",
          "y": 180
        },
        "facing=north,half=lower,hinge=left,open=false": {
          "model": "acacia_door_bottom",
          "y": 270
        },
        "facing=east,half=lower,hinge=right,open=false": {
          "model": "acacia_door_bottom_rh"
        },
        "facing=south,half=lower,hinge=right,open=false": {
          "model": "acacia_door_bottom_rh",
          "y": 90
        },
        "facing=west,half=lower,hinge=right,open=false": {
          "model": "acacia_door_bottom_rh",
          "y": 180
        },
        "facing=north,half=lower,hinge=right,open=false": {
          "model": "acacia_door_bottom_rh",
          "y": 270
        },
        "facing=east,half=lower,hinge=left,open=true": {
          "model": "acacia_door_bottom_rh",
          "y": 90
        },
        "facing=south,half=lower,hinge=left,open=true": {
          "model": "acacia_door_bottom_rh",
          "y": 180
        },
        "facing=west,half=lower,hinge=left,open=true": {
          "model": "acacia_door_bottom_rh",
          "y": 270
        },
        "facing=north,half=lower,hinge=left,open=true": {
          "model": "acacia_door_bottom_rh"
        },
        "facing=east,half=lower,hinge=right,open=true": {
          "model": "acacia_door_bottom",
          "y": 270
        },
        "facing=south,half=lower,hinge=right,open=true": {
          "model": "acacia_door_bottom"
        },
        "facing=west,half=lower,hinge=right,open=true": {
          "model": "acacia_door_bottom",
          "y": 90
        },
        "facing=north,half=lower,hinge=right,open=true": {
          "model": "acacia_door_bottom",
          "y": 180
        },
        "facing=east,half=upper,hinge=left,open=false": {
          "model": "acacia_door_top"
        },
        "facing=south,half=upper,hinge=left,open=false": {
          "model": "acacia_door_top",
          "y": 90
        },
        "facing=west,half=upper,hinge=left,open=false": {
          "model": "acacia_door_top",
          "y": 180
        },
        "facing=north,half=upper,hinge=left,open=false": {
          "model": "acacia_door_top",
          "y": 270
        },
        "facing=east,half=upper,hinge=right,open=false": {
          "model": "acacia_door_top_rh"
        },
        "facing=south,half=upper,hinge=right,open=false": {
          "model": "acacia_door_top_rh",
          "y": 90
        },
        "facing=west,half=upper,hinge=right,open=false": {
          "model": "acacia_door_top_rh",
          "y": 180
        },
        "facing=north,half=upper,hinge=right,open=false": {
          "model": "acacia_door_top_rh",
          "y": 270
        },
        "facing=east,half=upper,hinge=left,open=true": {
          "model": "acacia_door_top_rh",
          "y": 90
        },
        "facing=south,half=upper,hinge=left,open=true": {
          "model": "acacia_door_top_rh",
          "y": 180
        },
        "facing=west,half=upper,hinge=left,open=true": {
          "model": "acacia_door_top_rh",
          "y": 270
        },
        "facing=north,half=upper,hinge=left,open=true": {
          "model": "acacia_door_top_rh"
        },
        "facing=east,half=upper,hinge=right,open=true": {
          "model": "acacia_door_top",
          "y": 270
        },
        "facing=south,half=upper,hinge=right,open=true": {
          "model": "acacia_door_top"
        },
        "facing=west,half=upper,hinge=right,open=true": {
          "model": "acacia_door_top",
          "y": 90
        },
        "facing=north,half=upper,hinge=right,open=true": {
          "model": "acacia_door_top",
          "y": 180
        }
      }
    },
    "gray_concrete": {
      "variants": {
        "normal": {
          "model": "gray_concrete"
        }
      }
    },
    "spruce_slab": {
      "variants": {
        "half=bottom": {
          "model": "half_slab_spruce"
        },
        "half=top": {
          "model": "upper_slab_spruce"
        }
      }
    },
    "command_block": {
      "variants": {
        "conditional=false,facing=down": {
          "model": "command_block",
          "x": 90
        },
        "conditional=false,facing=up": {
          "model": "command_block",
          "x": 270
        },
        "conditional=false,facing=north": {
          "model": "command_block"
        },
        "conditional=false,facing=south": {
          "model": "command_block",
          "y": 180
        },
        "conditional=false,facing=west": {
          "model": "command_block",
          "y": 270
        },
        "conditional=false,facing=east": {
          "model": "command_block",
          "y": 90
        },
        "conditional=true,facing=down": {
          "model": "command_block_conditional",
          "x": 90
        },
        "conditional=true,facing=up": {
          "model": "command_block_conditional",
          "x": 270
        },
        "conditional=true,facing=north": {
          "model": "command_block_conditional"
        },
        "conditional=true,facing=south": {
          "model": "command_block_conditional",
          "y": 180
        },
        "conditional=true,facing=west": {
          "model": "command_block_conditional",
          "y": 270
        },
        "conditional=true,facing=east": {
          "model": "command_block_conditional",
          "y": 90
        }
      }
    },
    "red_glazed_terracotta": {
      "variants": {
        "facing=south": {
          "model": "red_glazed_terracotta"
        },
        "facing=west": {
          "model": "red_glazed_terracotta",
          "y": 90
        },
        "facing=north": {
          "model": "red_glazed_terracotta",
          "y": 180
        },
        "facing=east": {
          "model": "red_glazed_terracotta",
          "y": 270
        }
      }
    },
    "brown_concrete_powder": {
      "variants": {
        "normal": [
          {
            "model": "brown_concrete_powder"
          },
          {
            "model": "brown_concrete_powder",
            "y": 90
          },
          {
            "model": "brown_concrete_powder",
            "y": 180
          },
          {
            "model": "brown_concrete_powder",
            "y": 270
          }
        ]
      }
    },
    "dandelion": {
      "variants": {
        "normal": {
          "model": "dandelion"
        }
      }
    },
    "double_fern": {
      "variants": {
        "half=lower": {
          "model": "double_fern_bottom"
        },
        "half=upper": {
          "model": "double_fern_top"
        }
      }
    },
    "dark_oak_planks": {
      "variants": {
        "normal": {
          "model": "dark_oak_planks"
        }
      }
    },
    "blue_stained_glass_pane": {
      "multipart": [
        {
          "apply": {
            "model": "blue_stained_glass_pane_post"
          }
        },
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "blue_stained_glass_pane_side"
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "blue_stained_glass_pane_side",
            "y": 90
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "blue_stained_glass_pane_side_alt"
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "blue_stained_glass_pane_side_alt",
            "y": 90
          }
        },
        {
          "when": {
            "north": false
          },
          "apply": {
            "model": "blue_stained_glass_pane_noside"
          }
        },
        {
          "when": {
            "east": false
          },
          "apply": {
            "model": "blue_stained_glass_pane_noside_alt"
          }
        },
        {
          "when": {
            "south": false
          },
          "apply": {
            "model": "blue_stained_glass_pane_noside_alt",
            "y": 90
          }
        },
        {
          "when": {
            "west": false
          },
          "apply": {
            "model": "blue_stained_glass_pane_noside",
            "y": 270
          }
        }
      ]
    },
    "mossy_brick_monster_egg": {
      "variants": {
        "normal": {
          "model": "stonebrick_mossy"
        }
      }
    },
    "cobblestone_monster_egg": {
      "variants": {
        "normal": {
          "model": "cobblestone"
        }
      }
    },
    "chiseled_red_sandstone": {
      "variants": {
        "normal": {
          "model": "red_sandstone_chiseled"
        }
      }
    },
    "lapis_block": {
      "variants": {
        "normal": {
          "model": "lapis_block"
        }
      }
    },
    "emerald_ore": {
      "variants": {
        "normal": {
          "model": "emerald_ore"
        }
      }
    },
    "double_grass": {
      "variants": {
        "half=lower": {
          "model": "double_grass_bottom"
        },
        "half=upper": {
          "model": "double_grass_top"
        }
      }
    },
    "orange_stained_hardened_clay": {
      "variants": {
        "normal": {
          "model": "hardened_clay_orange"
        }
      }
    },
    "cobblestone_wall": {
      "multipart": [
        {
          "when": {
            "up": "true"
          },
          "apply": {
            "model": "cobblestone_wall_post"
          }
        },
        {
          "when": {
            "north": "true"
          },
          "apply": {
            "model": "cobblestone_wall_side",
            "uvlock": true
          }
        },
        {
          "when": {
            "east": "true"
          },
          "apply": {
            "model": "cobblestone_wall_side",
            "y": 90,
            "uvlock": true
          }
        },
        {
          "when": {
            "south": "true"
          },
          "apply": {
            "model": "cobblestone_wall_side",
            "y": 180,
            "uvlock": true
          }
        },
        {
          "when": {
            "west": "true"
          },
          "apply": {
            "model": "cobblestone_wall_side",
            "y": 270,
            "uvlock": true
          }
        }
      ]
    },
    "cauldron": {
      "variants": {
        "level=0": {
          "model": "cauldron_empty"
        },
        "level=1": {
          "model": "cauldron_level1"
        },
        "level=2": {
          "model": "cauldron_level2"
        },
        "level=3": {
          "model": "cauldron_level3"
        }
      }
    },
    "jungle_stairs": {
      "variants": {
        "facing=east,half=bottom,shape=straight": {
          "model": "jungle_stairs"
        },
        "facing=west,half=bottom,shape=straight": {
          "model": "jungle_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=straight": {
          "model": "jungle_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=straight": {
          "model": "jungle_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_right": {
          "model": "jungle_outer_stairs"
        },
        "facing=west,half=bottom,shape=outer_right": {
          "model": "jungle_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_right": {
          "model": "jungle_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=outer_right": {
          "model": "jungle_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_left": {
          "model": "jungle_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=outer_left": {
          "model": "jungle_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_left": {
          "model": "jungle_outer_stairs"
        },
        "facing=north,half=bottom,shape=outer_left": {
          "model": "jungle_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_right": {
          "model": "jungle_inner_stairs"
        },
        "facing=west,half=bottom,shape=inner_right": {
          "model": "jungle_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_right": {
          "model": "jungle_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=inner_right": {
          "model": "jungle_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_left": {
          "model": "jungle_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=inner_left": {
          "model": "jungle_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_left": {
          "model": "jungle_inner_stairs"
        },
        "facing=north,half=bottom,shape=inner_left": {
          "model": "jungle_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=straight": {
          "model": "jungle_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=straight": {
          "model": "jungle_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=straight": {
          "model": "jungle_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=straight": {
          "model": "jungle_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_right": {
          "model": "jungle_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_right": {
          "model": "jungle_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_right": {
          "model": "jungle_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_right": {
          "model": "jungle_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_left": {
          "model": "jungle_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_left": {
          "model": "jungle_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_left": {
          "model": "jungle_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_left": {
          "model": "jungle_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_right": {
          "model": "jungle_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_right": {
          "model": "jungle_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_right": {
          "model": "jungle_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_right": {
          "model": "jungle_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_left": {
          "model": "jungle_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_left": {
          "model": "jungle_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_left": {
          "model": "jungle_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_left": {
          "model": "jungle_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        }
      }
    },
    "spruce_stairs": {
      "variants": {
        "facing=east,half=bottom,shape=straight": {
          "model": "spruce_stairs"
        },
        "facing=west,half=bottom,shape=straight": {
          "model": "spruce_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=straight": {
          "model": "spruce_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=straight": {
          "model": "spruce_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_right": {
          "model": "spruce_outer_stairs"
        },
        "facing=west,half=bottom,shape=outer_right": {
          "model": "spruce_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_right": {
          "model": "spruce_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=outer_right": {
          "model": "spruce_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_left": {
          "model": "spruce_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=outer_left": {
          "model": "spruce_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_left": {
          "model": "spruce_outer_stairs"
        },
        "facing=north,half=bottom,shape=outer_left": {
          "model": "spruce_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_right": {
          "model": "spruce_inner_stairs"
        },
        "facing=west,half=bottom,shape=inner_right": {
          "model": "spruce_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_right": {
          "model": "spruce_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=inner_right": {
          "model": "spruce_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_left": {
          "model": "spruce_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=inner_left": {
          "model": "spruce_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_left": {
          "model": "spruce_inner_stairs"
        },
        "facing=north,half=bottom,shape=inner_left": {
          "model": "spruce_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=straight": {
          "model": "spruce_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=straight": {
          "model": "spruce_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=straight": {
          "model": "spruce_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=straight": {
          "model": "spruce_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_right": {
          "model": "spruce_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_right": {
          "model": "spruce_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_right": {
          "model": "spruce_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_right": {
          "model": "spruce_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_left": {
          "model": "spruce_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_left": {
          "model": "spruce_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_left": {
          "model": "spruce_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_left": {
          "model": "spruce_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_right": {
          "model": "spruce_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_right": {
          "model": "spruce_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_right": {
          "model": "spruce_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_right": {
          "model": "spruce_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_left": {
          "model": "spruce_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_left": {
          "model": "spruce_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_left": {
          "model": "spruce_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_left": {
          "model": "spruce_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        }
      }
    },
    "spruce_fence_gate": {
      "variants": {
        "facing=south,in_wall=false,open=false": {
          "model": "spruce_fence_gate_closed",
          "uvlock": true
        },
        "facing=west,in_wall=false,open=false": {
          "model": "spruce_fence_gate_closed",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=false,open=false": {
          "model": "spruce_fence_gate_closed",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=false,open=false": {
          "model": "spruce_fence_gate_closed",
          "uvlock": true,
          "y": 270
        },
        "facing=south,in_wall=false,open=true": {
          "model": "spruce_fence_gate_open",
          "uvlock": true
        },
        "facing=west,in_wall=false,open=true": {
          "model": "spruce_fence_gate_open",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=false,open=true": {
          "model": "spruce_fence_gate_open",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=false,open=true": {
          "model": "spruce_fence_gate_open",
          "uvlock": true,
          "y": 270
        },
        "facing=south,in_wall=true,open=false": {
          "model": "spruce_wall_gate_closed",
          "uvlock": true
        },
        "facing=west,in_wall=true,open=false": {
          "model": "spruce_wall_gate_closed",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=true,open=false": {
          "model": "spruce_wall_gate_closed",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=true,open=false": {
          "model": "spruce_wall_gate_closed",
          "uvlock": true,
          "y": 270
        },
        "facing=south,in_wall=true,open=true": {
          "model": "spruce_wall_gate_open",
          "uvlock": true
        },
        "facing=west,in_wall=true,open=true": {
          "model": "spruce_wall_gate_open",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=true,open=true": {
          "model": "spruce_wall_gate_open",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=true,open=true": {
          "model": "spruce_wall_gate_open",
          "uvlock": true,
          "y": 270
        }
      }
    },
    "wooden_button": {
      "variants": {
        "facing=up,powered=false": {
          "model": "wooden_button",
          "uvlock": true
        },
        "facing=down,powered=false": {
          "model": "wooden_button",
          "uvlock": true,
          "x": 180
        },
        "facing=east,powered=false": {
          "model": "wooden_button",
          "uvlock": true,
          "x": 90,
          "y": 90
        },
        "facing=west,powered=false": {
          "model": "wooden_button",
          "uvlock": true,
          "x": 90,
          "y": 270
        },
        "facing=south,powered=false": {
          "model": "wooden_button",
          "uvlock": true,
          "x": 90,
          "y": 180
        },
        "facing=north,powered=false": {
          "model": "wooden_button",
          "uvlock": true,
          "x": 90
        },
        "facing=up,powered=true": {
          "model": "wooden_button_pressed",
          "uvlock": true
        },
        "facing=down,powered=true": {
          "model": "wooden_button_pressed",
          "uvlock": true,
          "x": 180
        },
        "facing=east,powered=true": {
          "model": "wooden_button_pressed",
          "uvlock": true,
          "x": 90,
          "y": 90
        },
        "facing=west,powered=true": {
          "model": "wooden_button_pressed",
          "uvlock": true,
          "x": 90,
          "y": 270
        },
        "facing=south,powered=true": {
          "model": "wooden_button_pressed",
          "uvlock": true,
          "x": 90,
          "y": 180
        },
        "facing=north,powered=true": {
          "model": "wooden_button_pressed",
          "uvlock": true,
          "x": 90
        }
      }
    },
    "magenta_glazed_terracotta": {
      "variants": {
        "facing=south": {
          "model": "magenta_glazed_terracotta"
        },
        "facing=west": {
          "model": "magenta_glazed_terracotta",
          "y": 90
        },
        "facing=north": {
          "model": "magenta_glazed_terracotta",
          "y": 180
        },
        "facing=east": {
          "model": "magenta_glazed_terracotta",
          "y": 270
        }
      }
    },
    "nether_wart": {
      "variants": {
        "age=0": {
          "model": "nether_wart_stage0"
        },
        "age=1": {
          "model": "nether_wart_stage1"
        },
        "age=2": {
          "model": "nether_wart_stage1"
        },
        "age=3": {
          "model": "nether_wart_stage2"
        }
      }
    },
    "golden_rail": {
      "variants": {
        "powered=false,shape=north_south": {
          "model": "golden_rail_flat"
        },
        "powered=false,shape=east_west": {
          "model": "golden_rail_flat",
          "y": 90
        },
        "powered=false,shape=ascending_east": {
          "model": "golden_rail_raised_ne",
          "y": 90
        },
        "powered=false,shape=ascending_west": {
          "model": "golden_rail_raised_sw",
          "y": 90
        },
        "powered=false,shape=ascending_north": {
          "model": "golden_rail_raised_ne"
        },
        "powered=false,shape=ascending_south": {
          "model": "golden_rail_raised_sw"
        },
        "powered=true,shape=north_south": {
          "model": "golden_rail_active_flat"
        },
        "powered=true,shape=east_west": {
          "model": "golden_rail_active_flat",
          "y": 90
        },
        "powered=true,shape=ascending_east": {
          "model": "golden_rail_active_raised_ne",
          "y": 90
        },
        "powered=true,shape=ascending_west": {
          "model": "golden_rail_active_raised_sw",
          "y": 90
        },
        "powered=true,shape=ascending_north": {
          "model": "golden_rail_active_raised_ne"
        },
        "powered=true,shape=ascending_south": {
          "model": "golden_rail_active_raised_sw"
        }
      }
    },
    "redstone_lamp": {
      "variants": {
        "normal": {
          "model": "unlit_redstone_lamp"
        }
      }
    },
    "podzol": {
      "variants": {
        "snowy=false": {
          "model": "podzol"
        },
        "snowy=true": {
          "model": "grass_snowed"
        }
      }
    },
    "purpur_block": {
      "variants": {
        "normal": {
          "model": "purpur_block"
        }
      }
    },
    "structure_block": {
      "variants": {
        "mode=save": {
          "model": "structure_block_save"
        },
        "mode=load": {
          "model": "structure_block_load"
        },
        "mode=corner": {
          "model": "structure_block_corner"
        },
        "mode=data": {
          "model": "structure_block_data"
        }
      }
    },
    "sand": {
      "variants": {
        "normal": [
          {
            "model": "sand"
          },
          {
            "model": "sand",
            "y": 90
          },
          {
            "model": "sand",
            "y": 180
          },
          {
            "model": "sand",
            "y": 270
          }
        ]
      }
    },
    "observer": {
      "variants": {
        "facing=up,powered=false": {
          "model": "observer",
          "x": 270
        },
        "facing=down,powered=false": {
          "model": "observer",
          "x": 90
        },
        "facing=north,powered=false": {
          "model": "observer"
        },
        "facing=south,powered=false": {
          "model": "observer",
          "y": 180
        },
        "facing=west,powered=false": {
          "model": "observer",
          "y": 270
        },
        "facing=east,powered=false": {
          "model": "observer",
          "y": 90
        },
        "facing=up,powered=true": {
          "model": "observer_powered",
          "x": 270
        },
        "facing=down,powered=true": {
          "model": "observer_powered",
          "x": 90
        },
        "facing=north,powered=true": {
          "model": "observer_powered"
        },
        "facing=south,powered=true": {
          "model": "observer_powered",
          "y": 180
        },
        "facing=west,powered=true": {
          "model": "observer_powered",
          "y": 270
        },
        "facing=east,powered=true": {
          "model": "observer_powered",
          "y": 90
        }
      }
    },
    "frosted_ice": {
      "variants": {
        "age=0": {
          "model": "frosted_ice_0"
        },
        "age=1": {
          "model": "frosted_ice_1"
        },
        "age=2": {
          "model": "frosted_ice_2"
        },
        "age=3": {
          "model": "frosted_ice_3"
        }
      }
    },
    "smooth_sandstone": {
      "variants": {
        "normal": {
          "model": "sandstone_smooth"
        }
      }
    },
    "light_weighted_pressure_plate": {
      "variants": {
        "power=0": {
          "model": "light_pressure_plate_up"
        },
        "power=1": {
          "model": "light_pressure_plate_down"
        },
        "power=2": {
          "model": "light_pressure_plate_down"
        },
        "power=3": {
          "model": "light_pressure_plate_down"
        },
        "power=4": {
          "model": "light_pressure_plate_down"
        },
        "power=5": {
          "model": "light_pressure_plate_down"
        },
        "power=6": {
          "model": "light_pressure_plate_down"
        },
        "power=7": {
          "model": "light_pressure_plate_down"
        },
        "power=8": {
          "model": "light_pressure_plate_down"
        },
        "power=9": {
          "model": "light_pressure_plate_down"
        },
        "power=10": {
          "model": "light_pressure_plate_down"
        },
        "power=11": {
          "model": "light_pressure_plate_down"
        },
        "power=12": {
          "model": "light_pressure_plate_down"
        },
        "power=13": {
          "model": "light_pressure_plate_down"
        },
        "power=14": {
          "model": "light_pressure_plate_down"
        },
        "power=15": {
          "model": "light_pressure_plate_down"
        }
      }
    },
    "sunflower": {
      "variants": {
        "half=lower": {
          "model": "double_sunflower_bottom"
        },
        "half=upper": {
          "model": "double_sunflower_top"
        }
      }
    },
    "nether_brick_slab": {
      "variants": {
        "half=bottom": {
          "model": "half_slab_nether_brick"
        },
        "half=top": {
          "model": "upper_slab_nether_brick"
        }
      }
    },
    "purple_stained_hardened_clay": {
      "variants": {
        "normal": {
          "model": "hardened_clay_purple"
        }
      }
    },
    "tall_grass": {
      "variants": {
        "normal": {
          "model": "tall_grass"
        }
      }
    },
    "yellow_concrete_powder": {
      "variants": {
        "normal": [
          {
            "model": "yellow_concrete_powder"
          },
          {
            "model": "yellow_concrete_powder",
            "y": 90
          },
          {
            "model": "yellow_concrete_powder",
            "y": 180
          },
          {
            "model": "yellow_concrete_powder",
            "y": 270
          }
        ]
      }
    },
    "wood_old_double_slab": {
      "variants": {
        "normal": {
          "model": "oak_planks"
        },
        "all": {
          "model": "oak_planks"
        }
      }
    },
    "coarse_dirt": {
      "variants": {
        "normal": {
          "model": "coarse_dirt"
        }
      }
    },
    "cracked_brick_monster_egg": {
      "variants": {
        "normal": {
          "model": "stonebrick_cracked"
        }
      }
    },
    "dark_oak_log": {
      "variants": {
        "axis=y": {
          "model": "dark_oak_log"
        },
        "axis=z": {
          "model": "dark_oak_log",
          "x": 90
        },
        "axis=x": {
          "model": "dark_oak_log",
          "x": 90,
          "y": 90
        },
        "axis=none": {
          "model": "dark_oak_bark"
        }
      }
    },
    "andesite": {
      "variants": {
        "normal": {
          "model": "andesite"
        }
      }
    },
    "end_stone": {
      "variants": {
        "normal": {
          "model": "end_stone"
        }
      }
    },
    "brown_stained_glass": {
      "variants": {
        "normal": {
          "model": "glass_brown"
        }
      }
    },
    "cyan_concrete_powder": {
      "variants": {
        "normal": [
          {
            "model": "cyan_concrete_powder"
          },
          {
            "model": "cyan_concrete_powder",
            "y": 90
          },
          {
            "model": "cyan_concrete_powder",
            "y": 180
          },
          {
            "model": "cyan_concrete_powder",
            "y": 270
          }
        ]
      }
    },
    "stonebrick": {
      "variants": {
        "normal": {
          "model": "stonebrick_normal"
        }
      }
    },
    "birch_door": {
      "variants": {
        "facing=east,half=lower,hinge=left,open=false": {
          "model": "birch_door_bottom"
        },
        "facing=south,half=lower,hinge=left,open=false": {
          "model": "birch_door_bottom",
          "y": 90
        },
        "facing=west,half=lower,hinge=left,open=false": {
          "model": "birch_door_bottom",
          "y": 180
        },
        "facing=north,half=lower,hinge=left,open=false": {
          "model": "birch_door_bottom",
          "y": 270
        },
        "facing=east,half=lower,hinge=right,open=false": {
          "model": "birch_door_bottom_rh"
        },
        "facing=south,half=lower,hinge=right,open=false": {
          "model": "birch_door_bottom_rh",
          "y": 90
        },
        "facing=west,half=lower,hinge=right,open=false": {
          "model": "birch_door_bottom_rh",
          "y": 180
        },
        "facing=north,half=lower,hinge=right,open=false": {
          "model": "birch_door_bottom_rh",
          "y": 270
        },
        "facing=east,half=lower,hinge=left,open=true": {
          "model": "birch_door_bottom_rh",
          "y": 90
        },
        "facing=south,half=lower,hinge=left,open=true": {
          "model": "birch_door_bottom_rh",
          "y": 180
        },
        "facing=west,half=lower,hinge=left,open=true": {
          "model": "birch_door_bottom_rh",
          "y": 270
        },
        "facing=north,half=lower,hinge=left,open=true": {
          "model": "birch_door_bottom_rh"
        },
        "facing=east,half=lower,hinge=right,open=true": {
          "model": "birch_door_bottom",
          "y": 270
        },
        "facing=south,half=lower,hinge=right,open=true": {
          "model": "birch_door_bottom"
        },
        "facing=west,half=lower,hinge=right,open=true": {
          "model": "birch_door_bottom",
          "y": 90
        },
        "facing=north,half=lower,hinge=right,open=true": {
          "model": "birch_door_bottom",
          "y": 180
        },
        "facing=east,half=upper,hinge=left,open=false": {
          "model": "birch_door_top"
        },
        "facing=south,half=upper,hinge=left,open=false": {
          "model": "birch_door_top",
          "y": 90
        },
        "facing=west,half=upper,hinge=left,open=false": {
          "model": "birch_door_top",
          "y": 180
        },
        "facing=north,half=upper,hinge=left,open=false": {
          "model": "birch_door_top",
          "y": 270
        },
        "facing=east,half=upper,hinge=right,open=false": {
          "model": "birch_door_top_rh"
        },
        "facing=south,half=upper,hinge=right,open=false": {
          "model": "birch_door_top_rh",
          "y": 90
        },
        "facing=west,half=upper,hinge=right,open=false": {
          "model": "birch_door_top_rh",
          "y": 180
        },
        "facing=north,half=upper,hinge=right,open=false": {
          "model": "birch_door_top_rh",
          "y": 270
        },
        "facing=east,half=upper,hinge=left,open=true": {
          "model": "birch_door_top_rh",
          "y": 90
        },
        "facing=south,half=upper,hinge=left,open=true": {
          "model": "birch_door_top_rh",
          "y": 180
        },
        "facing=west,half=upper,hinge=left,open=true": {
          "model": "birch_door_top_rh",
          "y": 270
        },
        "facing=north,half=upper,hinge=left,open=true": {
          "model": "birch_door_top_rh"
        },
        "facing=east,half=upper,hinge=right,open=true": {
          "model": "birch_door_top",
          "y": 270
        },
        "facing=south,half=upper,hinge=right,open=true": {
          "model": "birch_door_top"
        },
        "facing=west,half=upper,hinge=right,open=true": {
          "model": "birch_door_top",
          "y": 90
        },
        "facing=north,half=upper,hinge=right,open=true": {
          "model": "birch_door_top",
          "y": 180
        }
      }
    },
    "redstone_block": {
      "variants": {
        "normal": {
          "model": "redstone_block"
        }
      }
    },
    "noteblock": {
      "variants": {
        "normal": {
          "model": "noteblock"
        }
      }
    },
    "brown_glazed_terracotta": {
      "variants": {
        "facing=south": {
          "model": "brown_glazed_terracotta"
        },
        "facing=west": {
          "model": "brown_glazed_terracotta",
          "y": 90
        },
        "facing=north": {
          "model": "brown_glazed_terracotta",
          "y": 180
        },
        "facing=east": {
          "model": "brown_glazed_terracotta",
          "y": 270
        }
      }
    },
    "lime_wool": {
      "variants": {
        "normal": {
          "model": "lime_wool"
        }
      }
    },
    "cobblestone_slab": {
      "variants": {
        "half=bottom": {
          "model": "half_slab_cobblestone"
        },
        "half=top": {
          "model": "upper_slab_cobblestone"
        }
      }
    },
    "red_sandstone_slab": {
      "variants": {
        "half=bottom": {
          "model": "half_slab_red_sandstone"
        },
        "half=top": {
          "model": "upper_slab_red_sandstone"
        }
      }
    },
    "orange_wool": {
      "variants": {
        "normal": {
          "model": "orange_wool"
        }
      }
    },
    "grass": {
      "variants": {
        "snowy=false": [
          {
            "model": "grass_normal"
          },
          {
            "model": "grass_normal",
            "y": 90
          },
          {
            "model": "grass_normal",
            "y": 180
          },
          {
            "model": "grass_normal",
            "y": 270
          }
        ],
        "snowy=true": {
          "model": "grass_snowed"
        }
      }
    },
    "spruce_fence": {
      "multipart": [
        {
          "apply": {
            "model": "spruce_fence_post"
          }
        },
        {
          "when": {
            "north": "true"
          },
          "apply": {
            "model": "spruce_fence_side",
            "uvlock": true
          }
        },
        {
          "when": {
            "east": "true"
          },
          "apply": {
            "model": "spruce_fence_side",
            "y": 90,
            "uvlock": true
          }
        },
        {
          "when": {
            "south": "true"
          },
          "apply": {
            "model": "spruce_fence_side",
            "y": 180,
            "uvlock": true
          }
        },
        {
          "when": {
            "west": "true"
          },
          "apply": {
            "model": "spruce_fence_side",
            "y": 270,
            "uvlock": true
          }
        }
      ]
    },
    "orange_carpet": {
      "variants": {
        "normal": {
          "model": "carpet_orange"
        }
      }
    },
    "oak_leaves": {
      "variants": {
        "normal": {
          "model": "oak_leaves"
        }
      }
    },
    "trapdoor": {
      "variants": {
        "facing=north,half=bottom,open=false": {
          "model": "wooden_trapdoor_bottom"
        },
        "facing=south,half=bottom,open=false": {
          "model": "wooden_trapdoor_bottom"
        },
        "facing=east,half=bottom,open=false": {
          "model": "wooden_trapdoor_bottom"
        },
        "facing=west,half=bottom,open=false": {
          "model": "wooden_trapdoor_bottom"
        },
        "facing=north,half=top,open=false": {
          "model": "wooden_trapdoor_top"
        },
        "facing=south,half=top,open=false": {
          "model": "wooden_trapdoor_top"
        },
        "facing=east,half=top,open=false": {
          "model": "wooden_trapdoor_top"
        },
        "facing=west,half=top,open=false": {
          "model": "wooden_trapdoor_top"
        },
        "facing=north,half=bottom,open=true": {
          "model": "wooden_trapdoor_open"
        },
        "facing=south,half=bottom,open=true": {
          "model": "wooden_trapdoor_open",
          "y": 180
        },
        "facing=east,half=bottom,open=true": {
          "model": "wooden_trapdoor_open",
          "y": 90
        },
        "facing=west,half=bottom,open=true": {
          "model": "wooden_trapdoor_open",
          "y": 270
        },
        "facing=north,half=top,open=true": {
          "model": "wooden_trapdoor_open"
        },
        "facing=south,half=top,open=true": {
          "model": "wooden_trapdoor_open",
          "y": 180
        },
        "facing=east,half=top,open=true": {
          "model": "wooden_trapdoor_open",
          "y": 90
        },
        "facing=west,half=top,open=true": {
          "model": "wooden_trapdoor_open",
          "y": 270
        }
      }
    },
    "sticky_piston": {
      "variants": {
        "extended=false,facing=down": {
          "model": "sticky_piston",
          "x": 90
        },
        "extended=false,facing=up": {
          "model": "sticky_piston",
          "x": 270
        },
        "extended=false,facing=north": {
          "model": "sticky_piston"
        },
        "extended=false,facing=south": {
          "model": "sticky_piston",
          "y": 180
        },
        "extended=false,facing=west": {
          "model": "sticky_piston",
          "y": 270
        },
        "extended=false,facing=east": {
          "model": "sticky_piston",
          "y": 90
        },
        "extended=true,facing=down": {
          "model": "piston_extended_normal",
          "x": 90
        },
        "extended=true,facing=up": {
          "model": "piston_extended_normal",
          "x": 270
        },
        "extended=true,facing=north": {
          "model": "piston_extended_normal"
        },
        "extended=true,facing=south": {
          "model": "piston_extended_normal",
          "y": 180
        },
        "extended=true,facing=west": {
          "model": "piston_extended_normal",
          "y": 270
        },
        "extended=true,facing=east": {
          "model": "piston_extended_normal",
          "y": 90
        }
      }
    },
    "dark_oak_fence_gate": {
      "variants": {
        "facing=south,in_wall=false,open=false": {
          "model": "dark_oak_fence_gate_closed",
          "uvlock": true
        },
        "facing=west,in_wall=false,open=false": {
          "model": "dark_oak_fence_gate_closed",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=false,open=false": {
          "model": "dark_oak_fence_gate_closed",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=false,open=false": {
          "model": "dark_oak_fence_gate_closed",
          "uvlock": true,
          "y": 270
        },
        "facing=south,in_wall=false,open=true": {
          "model": "dark_oak_fence_gate_open",
          "uvlock": true
        },
        "facing=west,in_wall=false,open=true": {
          "model": "dark_oak_fence_gate_open",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=false,open=true": {
          "model": "dark_oak_fence_gate_open",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=false,open=true": {
          "model": "dark_oak_fence_gate_open",
          "uvlock": true,
          "y": 270
        },
        "facing=south,in_wall=true,open=false": {
          "model": "dark_oak_wall_gate_closed",
          "uvlock": true
        },
        "facing=west,in_wall=true,open=false": {
          "model": "dark_oak_wall_gate_closed",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=true,open=false": {
          "model": "dark_oak_wall_gate_closed",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=true,open=false": {
          "model": "dark_oak_wall_gate_closed",
          "uvlock": true,
          "y": 270
        },
        "facing=south,in_wall=true,open=true": {
          "model": "dark_oak_wall_gate_open",
          "uvlock": true
        },
        "facing=west,in_wall=true,open=true": {
          "model": "dark_oak_wall_gate_open",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=true,open=true": {
          "model": "dark_oak_wall_gate_open",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=true,open=true": {
          "model": "dark_oak_wall_gate_open",
          "uvlock": true,
          "y": 270
        }
      }
    },
    "sandstone_slab": {
      "variants": {
        "half=bottom": {
          "model": "half_slab_sandstone"
        },
        "half=top": {
          "model": "upper_slab_sandstone"
        }
      }
    },
    "magenta_concrete": {
      "variants": {
        "normal": {
          "model": "magenta_concrete"
        }
      }
    },
    "smooth_red_sandstone": {
      "variants": {
        "normal": {
          "model": "red_sandstone_smooth"
        }
      }
    },
    "brick_slab": {
      "variants": {
        "half=bottom": {
          "model": "half_slab_brick"
        },
        "half=top": {
          "model": "upper_slab_brick"
        }
      }
    },
    "pink_stained_glass": {
      "variants": {
        "normal": {
          "model": "glass_pink"
        }
      }
    },
    "purpur_slab": {
      "variants": {
        "half=bottom,variant=default": {
          "model": "half_slab_purpur"
        },
        "half=top,variant=default": {
          "model": "upper_slab_purpur"
        }
      }
    },
    "fire": {
      "multipart": [
        {
          "when": {
            "north": false,
            "east": false,
            "south": false,
            "west": false,
            "up": false
          },
          "apply": [
            {
              "model": "fire_floor0"
            },
            {
              "model": "fire_floor1"
            }
          ]
        },
        {
          "when": {
            "OR": [
              {
                "north": true
              },
              {
                "north": false,
                "east": false,
                "south": false,
                "west": false,
                "up": false
              }
            ]
          },
          "apply": [
            {
              "model": "fire_side0"
            },
            {
              "model": "fire_side1"
            },
            {
              "model": "fire_side_alt0"
            },
            {
              "model": "fire_side_alt1"
            }
          ]
        },
        {
          "when": {
            "OR": [
              {
                "east": true
              },
              {
                "north": false,
                "east": false,
                "south": false,
                "west": false,
                "up": false
              }
            ]
          },
          "apply": [
            {
              "model": "fire_side0",
              "y": 90
            },
            {
              "model": "fire_side1",
              "y": 90
            },
            {
              "model": "fire_side_alt0",
              "y": 90
            },
            {
              "model": "fire_side_alt1",
              "y": 90
            }
          ]
        },
        {
          "when": {
            "OR": [
              {
                "south": true
              },
              {
                "north": false,
                "east": false,
                "south": false,
                "west": false,
                "up": false
              }
            ]
          },
          "apply": [
            {
              "model": "fire_side0",
              "y": 180
            },
            {
              "model": "fire_side1",
              "y": 180
            },
            {
              "model": "fire_side_alt0",
              "y": 180
            },
            {
              "model": "fire_side_alt1",
              "y": 180
            }
          ]
        },
        {
          "when": {
            "OR": [
              {
                "west": true
              },
              {
                "north": false,
                "east": false,
                "south": false,
                "west": false,
                "up": false
              }
            ]
          },
          "apply": [
            {
              "model": "fire_side0",
              "y": 270
            },
            {
              "model": "fire_side1",
              "y": 270
            },
            {
              "model": "fire_side_alt0",
              "y": 270
            },
            {
              "model": "fire_side_alt1",
              "y": 270
            }
          ]
        },
        {
          "when": {
            "up": true
          },
          "apply": [
            {
              "model": "fire_up0"
            },
            {
              "model": "fire_up1"
            },
            {
              "model": "fire_up_alt0"
            },
            {
              "model": "fire_up_alt1"
            }
          ]
        }
      ]
    },
    "unpowered_comparator": {
      "variants": {
        "facing=south,mode=compare,powered=false": {
          "model": "comparator_unlit"
        },
        "facing=west,mode=compare,powered=false": {
          "model": "comparator_unlit",
          "y": 90
        },
        "facing=north,mode=compare,powered=false": {
          "model": "comparator_unlit",
          "y": 180
        },
        "facing=east,mode=compare,powered=false": {
          "model": "comparator_unlit",
          "y": 270
        },
        "facing=south,mode=subtract,powered=false": {
          "model": "comparator_unlit_subtract"
        },
        "facing=west,mode=subtract,powered=false": {
          "model": "comparator_unlit_subtract",
          "y": 90
        },
        "facing=north,mode=subtract,powered=false": {
          "model": "comparator_unlit_subtract",
          "y": 180
        },
        "facing=east,mode=subtract,powered=false": {
          "model": "comparator_unlit_subtract",
          "y": 270
        },
        "facing=south,mode=compare,powered=true": {
          "model": "comparator_lit"
        },
        "facing=west,mode=compare,powered=true": {
          "model": "comparator_lit",
          "y": 90
        },
        "facing=north,mode=compare,powered=true": {
          "model": "comparator_lit",
          "y": 180
        },
        "facing=east,mode=compare,powered=true": {
          "model": "comparator_lit",
          "y": 270
        },
        "facing=south,mode=subtract,powered=true": {
          "model": "comparator_lit_subtract"
        },
        "facing=west,mode=subtract,powered=true": {
          "model": "comparator_lit_subtract",
          "y": 90
        },
        "facing=north,mode=subtract,powered=true": {
          "model": "comparator_lit_subtract",
          "y": 180
        },
        "facing=east,mode=subtract,powered=true": {
          "model": "comparator_lit_subtract",
          "y": 270
        }
      }
    },
    "orange_glazed_terracotta": {
      "variants": {
        "facing=south": {
          "model": "orange_glazed_terracotta"
        },
        "facing=west": {
          "model": "orange_glazed_terracotta",
          "y": 90
        },
        "facing=north": {
          "model": "orange_glazed_terracotta",
          "y": 180
        },
        "facing=east": {
          "model": "orange_glazed_terracotta",
          "y": 270
        }
      }
    },
    "smooth_diorite": {
      "variants": {
        "normal": {
          "model": "diorite_smooth"
        }
      }
    },
    "chiseled_quartz_block": {
      "variants": {
        "normal": {
          "model": "quartz_chiseled"
        }
      }
    },
    "birch_planks": {
      "variants": {
        "normal": {
          "model": "birch_planks"
        }
      }
    },
    "gravel": {
      "variants": {
        "normal": {
          "model": "gravel"
        }
      }
    },
    "dispenser": {
      "variants": {
        "facing=down": {
          "model": "dispenser_vertical",
          "x": 180
        },
        "facing=up": {
          "model": "dispenser_vertical"
        },
        "facing=north": {
          "model": "dispenser"
        },
        "facing=south": {
          "model": "dispenser",
          "y": 180
        },
        "facing=west": {
          "model": "dispenser",
          "y": 270
        },
        "facing=east": {
          "model": "dispenser",
          "y": 90
        }
      }
    },
    "purple_carpet": {
      "variants": {
        "normal": {
          "model": "carpet_purple"
        }
      }
    },
    "quartz_column": {
      "variants": {
        "axis=y": {
          "model": "quartz_lines"
        },
        "axis=z": {
          "model": "quartz_lines",
          "x": 90
        },
        "axis=x": {
          "model": "quartz_lines",
          "x": 90,
          "y": 90
        }
      }
    },
    "acacia_sapling": {
      "variants": {
        "stage=0": {
          "model": "acacia_sapling"
        },
        "stage=1": {
          "model": "acacia_sapling"
        }
      }
    },
    "diorite": {
      "variants": {
        "normal": {
          "model": "diorite"
        }
      }
    },
    "quartz_stairs": {
      "variants": {
        "facing=east,half=bottom,shape=straight": {
          "model": "quartz_stairs"
        },
        "facing=west,half=bottom,shape=straight": {
          "model": "quartz_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=straight": {
          "model": "quartz_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=straight": {
          "model": "quartz_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_right": {
          "model": "quartz_outer_stairs"
        },
        "facing=west,half=bottom,shape=outer_right": {
          "model": "quartz_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_right": {
          "model": "quartz_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=outer_right": {
          "model": "quartz_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_left": {
          "model": "quartz_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=outer_left": {
          "model": "quartz_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_left": {
          "model": "quartz_outer_stairs"
        },
        "facing=north,half=bottom,shape=outer_left": {
          "model": "quartz_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_right": {
          "model": "quartz_inner_stairs"
        },
        "facing=west,half=bottom,shape=inner_right": {
          "model": "quartz_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_right": {
          "model": "quartz_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=inner_right": {
          "model": "quartz_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_left": {
          "model": "quartz_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=inner_left": {
          "model": "quartz_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_left": {
          "model": "quartz_inner_stairs"
        },
        "facing=north,half=bottom,shape=inner_left": {
          "model": "quartz_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=straight": {
          "model": "quartz_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=straight": {
          "model": "quartz_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=straight": {
          "model": "quartz_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=straight": {
          "model": "quartz_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_right": {
          "model": "quartz_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_right": {
          "model": "quartz_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_right": {
          "model": "quartz_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_right": {
          "model": "quartz_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_left": {
          "model": "quartz_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_left": {
          "model": "quartz_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_left": {
          "model": "quartz_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_left": {
          "model": "quartz_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_right": {
          "model": "quartz_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_right": {
          "model": "quartz_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_right": {
          "model": "quartz_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_right": {
          "model": "quartz_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_left": {
          "model": "quartz_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_left": {
          "model": "quartz_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_left": {
          "model": "quartz_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_left": {
          "model": "quartz_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        }
      }
    },
    "soul_sand": {
      "variants": {
        "normal": {
          "model": "soul_sand"
        }
      }
    },
    "red_wool": {
      "variants": {
        "normal": {
          "model": "red_wool"
        }
      }
    },
    "sandstone_stairs": {
      "variants": {
        "facing=east,half=bottom,shape=straight": {
          "model": "sandstone_stairs"
        },
        "facing=west,half=bottom,shape=straight": {
          "model": "sandstone_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=straight": {
          "model": "sandstone_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=straight": {
          "model": "sandstone_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_right": {
          "model": "sandstone_outer_stairs"
        },
        "facing=west,half=bottom,shape=outer_right": {
          "model": "sandstone_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_right": {
          "model": "sandstone_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=outer_right": {
          "model": "sandstone_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_left": {
          "model": "sandstone_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=outer_left": {
          "model": "sandstone_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_left": {
          "model": "sandstone_outer_stairs"
        },
        "facing=north,half=bottom,shape=outer_left": {
          "model": "sandstone_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_right": {
          "model": "sandstone_inner_stairs"
        },
        "facing=west,half=bottom,shape=inner_right": {
          "model": "sandstone_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_right": {
          "model": "sandstone_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=inner_right": {
          "model": "sandstone_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_left": {
          "model": "sandstone_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=inner_left": {
          "model": "sandstone_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_left": {
          "model": "sandstone_inner_stairs"
        },
        "facing=north,half=bottom,shape=inner_left": {
          "model": "sandstone_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=straight": {
          "model": "sandstone_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=straight": {
          "model": "sandstone_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=straight": {
          "model": "sandstone_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=straight": {
          "model": "sandstone_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_right": {
          "model": "sandstone_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_right": {
          "model": "sandstone_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_right": {
          "model": "sandstone_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_right": {
          "model": "sandstone_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_left": {
          "model": "sandstone_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_left": {
          "model": "sandstone_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_left": {
          "model": "sandstone_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_left": {
          "model": "sandstone_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_right": {
          "model": "sandstone_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_right": {
          "model": "sandstone_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_right": {
          "model": "sandstone_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_right": {
          "model": "sandstone_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_left": {
          "model": "sandstone_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_left": {
          "model": "sandstone_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_left": {
          "model": "sandstone_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_left": {
          "model": "sandstone_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        }
      }
    },
    "double_rose": {
      "variants": {
        "half=lower": {
          "model": "double_rose_bottom"
        },
        "half=upper": {
          "model": "double_rose_top"
        }
      }
    },
    "light_blue_carpet": {
      "variants": {
        "normal": {
          "model": "carpet_light_blue"
        }
      }
    },
    "clay": {
      "variants": {
        "normal": {
          "model": "clay"
        }
      }
    },
    "cactus": {
      "variants": {
        "normal": {
          "model": "cactus"
        }
      }
    },
    "blue_carpet": {
      "variants": {
        "normal": {
          "model": "carpet_blue"
        }
      }
    },
    "stone": {
      "variants": {
        "normal": [
          {
            "model": "stone"
          },
          {
            "model": "stone_mirrored"
          },
          {
            "model": "stone",
            "y": 180
          },
          {
            "model": "stone_mirrored",
            "y": 180
          }
        ]
      }
    },
    "brown_carpet": {
      "variants": {
        "normal": {
          "model": "carpet_brown"
        }
      }
    },
    "pink_carpet": {
      "variants": {
        "normal": {
          "model": "carpet_pink"
        }
      }
    },
    "wooden_door": {
      "variants": {
        "facing=east,half=lower,hinge=left,open=false": {
          "model": "wooden_door_bottom"
        },
        "facing=south,half=lower,hinge=left,open=false": {
          "model": "wooden_door_bottom",
          "y": 90
        },
        "facing=west,half=lower,hinge=left,open=false": {
          "model": "wooden_door_bottom",
          "y": 180
        },
        "facing=north,half=lower,hinge=left,open=false": {
          "model": "wooden_door_bottom",
          "y": 270
        },
        "facing=east,half=lower,hinge=right,open=false": {
          "model": "wooden_door_bottom_rh"
        },
        "facing=south,half=lower,hinge=right,open=false": {
          "model": "wooden_door_bottom_rh",
          "y": 90
        },
        "facing=west,half=lower,hinge=right,open=false": {
          "model": "wooden_door_bottom_rh",
          "y": 180
        },
        "facing=north,half=lower,hinge=right,open=false": {
          "model": "wooden_door_bottom_rh",
          "y": 270
        },
        "facing=east,half=lower,hinge=left,open=true": {
          "model": "wooden_door_bottom_rh",
          "y": 90
        },
        "facing=south,half=lower,hinge=left,open=true": {
          "model": "wooden_door_bottom_rh",
          "y": 180
        },
        "facing=west,half=lower,hinge=left,open=true": {
          "model": "wooden_door_bottom_rh",
          "y": 270
        },
        "facing=north,half=lower,hinge=left,open=true": {
          "model": "wooden_door_bottom_rh"
        },
        "facing=east,half=lower,hinge=right,open=true": {
          "model": "wooden_door_bottom",
          "y": 270
        },
        "facing=south,half=lower,hinge=right,open=true": {
          "model": "wooden_door_bottom"
        },
        "facing=west,half=lower,hinge=right,open=true": {
          "model": "wooden_door_bottom",
          "y": 90
        },
        "facing=north,half=lower,hinge=right,open=true": {
          "model": "wooden_door_bottom",
          "y": 180
        },
        "facing=east,half=upper,hinge=left,open=false": {
          "model": "wooden_door_top"
        },
        "facing=south,half=upper,hinge=left,open=false": {
          "model": "wooden_door_top",
          "y": 90
        },
        "facing=west,half=upper,hinge=left,open=false": {
          "model": "wooden_door_top",
          "y": 180
        },
        "facing=north,half=upper,hinge=left,open=false": {
          "model": "wooden_door_top",
          "y": 270
        },
        "facing=east,half=upper,hinge=right,open=false": {
          "model": "wooden_door_top_rh"
        },
        "facing=south,half=upper,hinge=right,open=false": {
          "model": "wooden_door_top_rh",
          "y": 90
        },
        "facing=west,half=upper,hinge=right,open=false": {
          "model": "wooden_door_top_rh",
          "y": 180
        },
        "facing=north,half=upper,hinge=right,open=false": {
          "model": "wooden_door_top_rh",
          "y": 270
        },
        "facing=east,half=upper,hinge=left,open=true": {
          "model": "wooden_door_top_rh",
          "y": 90
        },
        "facing=south,half=upper,hinge=left,open=true": {
          "model": "wooden_door_top_rh",
          "y": 180
        },
        "facing=west,half=upper,hinge=left,open=true": {
          "model": "wooden_door_top_rh",
          "y": 270
        },
        "facing=north,half=upper,hinge=left,open=true": {
          "model": "wooden_door_top_rh"
        },
        "facing=east,half=upper,hinge=right,open=true": {
          "model": "wooden_door_top",
          "y": 270
        },
        "facing=south,half=upper,hinge=right,open=true": {
          "model": "wooden_door_top"
        },
        "facing=west,half=upper,hinge=right,open=true": {
          "model": "wooden_door_top",
          "y": 90
        },
        "facing=north,half=upper,hinge=right,open=true": {
          "model": "wooden_door_top",
          "y": 180
        }
      }
    },
    "jungle_planks": {
      "variants": {
        "normal": {
          "model": "jungle_planks"
        }
      }
    },
    "chiseled_sandstone": {
      "variants": {
        "normal": {
          "model": "sandstone_chiseled"
        }
      }
    },
    "purple_glazed_terracotta": {
      "variants": {
        "facing=south": {
          "model": "purple_glazed_terracotta"
        },
        "facing=west": {
          "model": "purple_glazed_terracotta",
          "y": 90
        },
        "facing=north": {
          "model": "purple_glazed_terracotta",
          "y": 180
        },
        "facing=east": {
          "model": "purple_glazed_terracotta",
          "y": 270
        }
      }
    },
    "purple_concrete_powder": {
      "variants": {
        "normal": [
          {
            "model": "purple_concrete_powder"
          },
          {
            "model": "purple_concrete_powder",
            "y": 90
          },
          {
            "model": "purple_concrete_powder",
            "y": 180
          },
          {
            "model": "purple_concrete_powder",
            "y": 270
          }
        ]
      }
    },
    "lime_stained_hardened_clay": {
      "variants": {
        "normal": {
          "model": "hardened_clay_lime"
        }
      }
    },
    "spruce_planks": {
      "variants": {
        "normal": {
          "model": "spruce_planks"
        }
      }
    },
    "cyan_stained_glass": {
      "variants": {
        "normal": {
          "model": "glass_cyan"
        }
      }
    },
    "lit_redstone_ore": {
      "variants": {
        "normal": {
          "model": "lit_redstone_ore"
        }
      }
    },
    "mob_spawner": {
      "variants": {
        "normal": {
          "model": "mob_spawner_cage"
        }
      }
    },
    "melon_block": {
      "variants": {
        "normal": {
          "model": "melon"
        }
      }
    },
    "yellow_glazed_terracotta": {
      "variants": {
        "facing=south": {
          "model": "yellow_glazed_terracotta"
        },
        "facing=west": {
          "model": "yellow_glazed_terracotta",
          "y": 90
        },
        "facing=north": {
          "model": "yellow_glazed_terracotta",
          "y": 180
        },
        "facing=east": {
          "model": "yellow_glazed_terracotta",
          "y": 270
        }
      }
    },
    "repeating_command_block": {
      "variants": {
        "conditional=false,facing=down": {
          "model": "repeating_command_block",
          "x": 90
        },
        "conditional=false,facing=up": {
          "model": "repeating_command_block",
          "x": 270
        },
        "conditional=false,facing=north": {
          "model": "repeating_command_block"
        },
        "conditional=false,facing=south": {
          "model": "repeating_command_block",
          "y": 180
        },
        "conditional=false,facing=west": {
          "model": "repeating_command_block",
          "y": 270
        },
        "conditional=false,facing=east": {
          "model": "repeating_command_block",
          "y": 90
        },
        "conditional=true,facing=down": {
          "model": "repeating_command_block_conditional",
          "x": 90
        },
        "conditional=true,facing=up": {
          "model": "repeating_command_block_conditional",
          "x": 270
        },
        "conditional=true,facing=north": {
          "model": "repeating_command_block_conditional"
        },
        "conditional=true,facing=south": {
          "model": "repeating_command_block_conditional",
          "y": 180
        },
        "conditional=true,facing=west": {
          "model": "repeating_command_block_conditional",
          "y": 270
        },
        "conditional=true,facing=east": {
          "model": "repeating_command_block_conditional",
          "y": 90
        }
      }
    },
    "heavy_weighted_pressure_plate": {
      "variants": {
        "power=0": {
          "model": "heavy_pressure_plate_up"
        },
        "power=1": {
          "model": "heavy_pressure_plate_down"
        },
        "power=2": {
          "model": "heavy_pressure_plate_down"
        },
        "power=3": {
          "model": "heavy_pressure_plate_down"
        },
        "power=4": {
          "model": "heavy_pressure_plate_down"
        },
        "power=5": {
          "model": "heavy_pressure_plate_down"
        },
        "power=6": {
          "model": "heavy_pressure_plate_down"
        },
        "power=7": {
          "model": "heavy_pressure_plate_down"
        },
        "power=8": {
          "model": "heavy_pressure_plate_down"
        },
        "power=9": {
          "model": "heavy_pressure_plate_down"
        },
        "power=10": {
          "model": "heavy_pressure_plate_down"
        },
        "power=11": {
          "model": "heavy_pressure_plate_down"
        },
        "power=12": {
          "model": "heavy_pressure_plate_down"
        },
        "power=13": {
          "model": "heavy_pressure_plate_down"
        },
        "power=14": {
          "model": "heavy_pressure_plate_down"
        },
        "power=15": {
          "model": "heavy_pressure_plate_down"
        }
      }
    },
    "red_mushroom_block": {
      "variants": {
        "variant=north_west": {
          "model": "red_mushroom_block_nw"
        },
        "variant=north": {
          "model": "red_mushroom_block_n"
        },
        "variant=north_east": {
          "model": "red_mushroom_block_ne"
        },
        "variant=west": {
          "model": "red_mushroom_block_w"
        },
        "variant=center": {
          "model": "red_mushroom_block_c"
        },
        "variant=east": {
          "model": "red_mushroom_block_e"
        },
        "variant=south_west": {
          "model": "red_mushroom_block_sw"
        },
        "variant=south": {
          "model": "red_mushroom_block_s"
        },
        "variant=south_east": {
          "model": "red_mushroom_block_se"
        },
        "variant=stem": {
          "model": "red_mushroom_block_stem"
        },
        "variant=all_stem": {
          "model": "red_mushroom_block_stem_all"
        },
        "variant=all_outside": {
          "model": "red_mushroom_block_cap_all"
        },
        "variant=all_inside": {
          "model": "red_mushroom_block_inside_all"
        }
      }
    },
    "fern": {
      "variants": {
        "normal": {
          "model": "fern"
        }
      }
    },
    "dark_oak_stairs": {
      "variants": {
        "facing=east,half=bottom,shape=straight": {
          "model": "dark_oak_stairs"
        },
        "facing=west,half=bottom,shape=straight": {
          "model": "dark_oak_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=straight": {
          "model": "dark_oak_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=straight": {
          "model": "dark_oak_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_right": {
          "model": "dark_oak_outer_stairs"
        },
        "facing=west,half=bottom,shape=outer_right": {
          "model": "dark_oak_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_right": {
          "model": "dark_oak_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=outer_right": {
          "model": "dark_oak_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_left": {
          "model": "dark_oak_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=outer_left": {
          "model": "dark_oak_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_left": {
          "model": "dark_oak_outer_stairs"
        },
        "facing=north,half=bottom,shape=outer_left": {
          "model": "dark_oak_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_right": {
          "model": "dark_oak_inner_stairs"
        },
        "facing=west,half=bottom,shape=inner_right": {
          "model": "dark_oak_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_right": {
          "model": "dark_oak_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=inner_right": {
          "model": "dark_oak_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_left": {
          "model": "dark_oak_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=inner_left": {
          "model": "dark_oak_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_left": {
          "model": "dark_oak_inner_stairs"
        },
        "facing=north,half=bottom,shape=inner_left": {
          "model": "dark_oak_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=straight": {
          "model": "dark_oak_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=straight": {
          "model": "dark_oak_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=straight": {
          "model": "dark_oak_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=straight": {
          "model": "dark_oak_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_right": {
          "model": "dark_oak_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_right": {
          "model": "dark_oak_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_right": {
          "model": "dark_oak_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_right": {
          "model": "dark_oak_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_left": {
          "model": "dark_oak_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_left": {
          "model": "dark_oak_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_left": {
          "model": "dark_oak_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_left": {
          "model": "dark_oak_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_right": {
          "model": "dark_oak_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_right": {
          "model": "dark_oak_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_right": {
          "model": "dark_oak_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_right": {
          "model": "dark_oak_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_left": {
          "model": "dark_oak_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_left": {
          "model": "dark_oak_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_left": {
          "model": "dark_oak_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_left": {
          "model": "dark_oak_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        }
      }
    },
    "quartz_double_slab": {
      "variants": {
        "normal": {
          "model": "quartz_normal"
        },
        "all": {
          "model": "quartz_top"
        }
      }
    },
    "silver_glazed_terracotta": {
      "variants": {
        "facing=south": {
          "model": "silver_glazed_terracotta"
        },
        "facing=west": {
          "model": "silver_glazed_terracotta",
          "y": 90
        },
        "facing=north": {
          "model": "silver_glazed_terracotta",
          "y": 180
        },
        "facing=east": {
          "model": "silver_glazed_terracotta",
          "y": 270
        }
      }
    },
    "black_stained_hardened_clay": {
      "variants": {
        "normal": {
          "model": "hardened_clay_black"
        }
      }
    },
    "silver_stained_hardened_clay": {
      "variants": {
        "normal": {
          "model": "hardened_clay_silver"
        }
      }
    },
    "lapis_ore": {
      "variants": {
        "normal": {
          "model": "lapis_ore"
        }
      }
    },
    "gold_ore": {
      "variants": {
        "normal": {
          "model": "gold_ore"
        }
      }
    },
    "purple_stained_glass_pane": {
      "multipart": [
        {
          "apply": {
            "model": "purple_stained_glass_pane_post"
          }
        },
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "purple_stained_glass_pane_side"
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "purple_stained_glass_pane_side",
            "y": 90
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "purple_stained_glass_pane_side_alt"
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "purple_stained_glass_pane_side_alt",
            "y": 90
          }
        },
        {
          "when": {
            "north": false
          },
          "apply": {
            "model": "purple_stained_glass_pane_noside"
          }
        },
        {
          "when": {
            "east": false
          },
          "apply": {
            "model": "purple_stained_glass_pane_noside_alt"
          }
        },
        {
          "when": {
            "south": false
          },
          "apply": {
            "model": "purple_stained_glass_pane_noside_alt",
            "y": 90
          }
        },
        {
          "when": {
            "west": false
          },
          "apply": {
            "model": "purple_stained_glass_pane_noside",
            "y": 270
          }
        }
      ]
    },
    "unpowered_repeater": {
      "variants": {
        "delay=1,facing=south,locked=false": {
          "model": "repeater_1tick"
        },
        "delay=1,facing=west,locked=false": {
          "model": "repeater_1tick",
          "y": 90
        },
        "delay=1,facing=north,locked=false": {
          "model": "repeater_1tick",
          "y": 180
        },
        "delay=1,facing=east,locked=false": {
          "model": "repeater_1tick",
          "y": 270
        },
        "delay=2,facing=south,locked=false": {
          "model": "repeater_2tick"
        },
        "delay=2,facing=west,locked=false": {
          "model": "repeater_2tick",
          "y": 90
        },
        "delay=2,facing=north,locked=false": {
          "model": "repeater_2tick",
          "y": 180
        },
        "delay=2,facing=east,locked=false": {
          "model": "repeater_2tick",
          "y": 270
        },
        "delay=3,facing=south,locked=false": {
          "model": "repeater_3tick"
        },
        "delay=3,facing=west,locked=false": {
          "model": "repeater_3tick",
          "y": 90
        },
        "delay=3,facing=north,locked=false": {
          "model": "repeater_3tick",
          "y": 180
        },
        "delay=3,facing=east,locked=false": {
          "model": "repeater_3tick",
          "y": 270
        },
        "delay=4,facing=south,locked=false": {
          "model": "repeater_4tick"
        },
        "delay=4,facing=west,locked=false": {
          "model": "repeater_4tick",
          "y": 90
        },
        "delay=4,facing=north,locked=false": {
          "model": "repeater_4tick",
          "y": 180
        },
        "delay=4,facing=east,locked=false": {
          "model": "repeater_4tick",
          "y": 270
        },
        "delay=1,facing=south,locked=true": {
          "model": "repeater_locked_1tick"
        },
        "delay=1,facing=west,locked=true": {
          "model": "repeater_locked_1tick",
          "y": 90
        },
        "delay=1,facing=north,locked=true": {
          "model": "repeater_locked_1tick",
          "y": 180
        },
        "delay=1,facing=east,locked=true": {
          "model": "repeater_locked_1tick",
          "y": 270
        },
        "delay=2,facing=south,locked=true": {
          "model": "repeater_locked_2tick"
        },
        "delay=2,facing=west,locked=true": {
          "model": "repeater_locked_2tick",
          "y": 90
        },
        "delay=2,facing=north,locked=true": {
          "model": "repeater_locked_2tick",
          "y": 180
        },
        "delay=2,facing=east,locked=true": {
          "model": "repeater_locked_2tick",
          "y": 270
        },
        "delay=3,facing=south,locked=true": {
          "model": "repeater_locked_3tick"
        },
        "delay=3,facing=west,locked=true": {
          "model": "repeater_locked_3tick",
          "y": 90
        },
        "delay=3,facing=north,locked=true": {
          "model": "repeater_locked_3tick",
          "y": 180
        },
        "delay=3,facing=east,locked=true": {
          "model": "repeater_locked_3tick",
          "y": 270
        },
        "delay=4,facing=south,locked=true": {
          "model": "repeater_locked_4tick"
        },
        "delay=4,facing=west,locked=true": {
          "model": "repeater_locked_4tick",
          "y": 90
        },
        "delay=4,facing=north,locked=true": {
          "model": "repeater_locked_4tick",
          "y": 180
        },
        "delay=4,facing=east,locked=true": {
          "model": "repeater_locked_4tick",
          "y": 270
        }
      }
    },
    "red_stained_glass": {
      "variants": {
        "normal": {
          "model": "glass_red"
        }
      }
    },
    "lit_pumpkin": {
      "variants": {
        "facing=north": {
          "model": "lit_pumpkin"
        },
        "facing=south": {
          "model": "lit_pumpkin",
          "y": 180
        },
        "facing=west": {
          "model": "lit_pumpkin",
          "y": 270
        },
        "facing=east": {
          "model": "lit_pumpkin",
          "y": 90
        }
      }
    },
    "gray_stained_glass": {
      "variants": {
        "normal": {
          "model": "glass_gray"
        }
      }
    },
    "blue_concrete": {
      "variants": {
        "normal": {
          "model": "blue_concrete"
        }
      }
    },
    "silver_concrete": {
      "variants": {
        "normal": {
          "model": "silver_concrete"
        }
      }
    },
    "gray_glazed_terracotta": {
      "variants": {
        "facing=south": {
          "model": "gray_glazed_terracotta"
        },
        "facing=west": {
          "model": "gray_glazed_terracotta",
          "y": 90
        },
        "facing=north": {
          "model": "gray_glazed_terracotta",
          "y": 180
        },
        "facing=east": {
          "model": "gray_glazed_terracotta",
          "y": 270
        }
      }
    },
    "smooth_andesite": {
      "variants": {
        "normal": {
          "model": "andesite_smooth"
        }
      }
    },
    "white_carpet": {
      "variants": {
        "normal": {
          "model": "carpet_white"
        }
      }
    },
    "black_glazed_terracotta": {
      "variants": {
        "facing=south": {
          "model": "black_glazed_terracotta"
        },
        "facing=west": {
          "model": "black_glazed_terracotta",
          "y": 90
        },
        "facing=north": {
          "model": "black_glazed_terracotta",
          "y": 180
        },
        "facing=east": {
          "model": "black_glazed_terracotta",
          "y": 270
        }
      }
    },
    "tnt": {
      "variants": {
        "normal": {
          "model": "tnt"
        }
      }
    },
    "diamond_block": {
      "variants": {
        "normal": {
          "model": "diamond_block"
        }
      }
    },
    "end_rod": {
      "variants": {
        "facing=up": {
          "model": "end_rod"
        },
        "facing=down": {
          "model": "end_rod",
          "x": 180
        },
        "facing=east": {
          "model": "end_rod",
          "y": 90,
          "x": 90
        },
        "facing=south": {
          "model": "end_rod",
          "y": 180,
          "x": 90
        },
        "facing=west": {
          "model": "end_rod",
          "y": 270,
          "x": 90
        },
        "facing=north": {
          "model": "end_rod",
          "y": 0,
          "x": 90
        }
      }
    },
    "dark_oak_double_slab": {
      "variants": {
        "normal": {
          "model": "dark_oak_planks"
        }
      }
    },
    "pumpkin": {
      "variants": {
        "facing=north": {
          "model": "pumpkin"
        },
        "facing=south": {
          "model": "pumpkin",
          "y": 180
        },
        "facing=west": {
          "model": "pumpkin",
          "y": 270
        },
        "facing=east": {
          "model": "pumpkin",
          "y": 90
        }
      }
    },
    "purpur_pillar": {
      "variants": {
        "axis=y": {
          "model": "purpur_pillar_top"
        },
        "axis=z": {
          "model": "purpur_pillar_top",
          "x": 90
        },
        "axis=x": {
          "model": "purpur_pillar_top",
          "x": 90,
          "y": 90
        }
      }
    },
    "silver_stained_glass": {
      "variants": {
        "normal": {
          "model": "glass_silver"
        }
      }
    },
    "pink_stained_hardened_clay": {
      "variants": {
        "normal": {
          "model": "hardened_clay_pink"
        }
      }
    },
    "hardened_clay": {
      "variants": {
        "normal": {
          "model": "hardened_clay"
        }
      }
    },
    "spruce_sapling": {
      "variants": {
        "stage=0": {
          "model": "spruce_sapling"
        },
        "stage=1": {
          "model": "spruce_sapling"
        }
      }
    },
    "stone_brick_monster_egg": {
      "variants": {
        "normal": {
          "model": "stonebrick_normal"
        }
      }
    },
    "nether_wart_block": {
      "variants": {
        "normal": {
          "model": "nether_wart_block"
        }
      }
    },
    "glass": {
      "variants": {
        "normal": {
          "model": "glass"
        }
      }
    },
    "cyan_wool": {
      "variants": {
        "normal": {
          "model": "cyan_wool"
        }
      }
    },
    "poppy": {
      "variants": {
        "normal": {
          "model": "poppy"
        }
      }
    },
    "sea_lantern": {
      "variants": {
        "normal": {
          "model": "sea_lantern"
        }
      }
    },
    "oak_sapling": {
      "variants": {
        "stage=0": {
          "model": "oak_sapling"
        },
        "stage=1": {
          "model": "oak_sapling"
        }
      }
    },
    "powered_comparator": {
      "variants": {
        "facing=north,mode=compare,powered=false": {
          "model": "comparator_unlit"
        },
        "facing=east,mode=compare,powered=false": {
          "model": "comparator_unlit",
          "y": 90
        },
        "facing=south,mode=compare,powered=false": {
          "model": "comparator_unlit",
          "y": 180
        },
        "facing=west,mode=compare,powered=false": {
          "model": "comparator_unlit",
          "y": 270
        },
        "facing=north,mode=subtract,powered=false": {
          "model": "comparator_unlit_subtract"
        },
        "facing=east,mode=subtract,powered=false": {
          "model": "comparator_unlit_subtract",
          "y": 90
        },
        "facing=south,mode=subtract,powered=false": {
          "model": "comparator_unlit_subtract",
          "y": 180
        },
        "facing=west,mode=subtract,powered=false": {
          "model": "comparator_unlit_subtract",
          "y": 270
        },
        "facing=north,mode=compare,powered=true": {
          "model": "comparator_lit"
        },
        "facing=east,mode=compare,powered=true": {
          "model": "comparator_lit",
          "y": 90
        },
        "facing=south,mode=compare,powered=true": {
          "model": "comparator_lit",
          "y": 180
        },
        "facing=west,mode=compare,powered=true": {
          "model": "comparator_lit",
          "y": 270
        },
        "facing=north,mode=subtract,powered=true": {
          "model": "comparator_lit_subtract"
        },
        "facing=east,mode=subtract,powered=true": {
          "model": "comparator_lit_subtract",
          "y": 90
        },
        "facing=south,mode=subtract,powered=true": {
          "model": "comparator_lit_subtract",
          "y": 180
        },
        "facing=west,mode=subtract,powered=true": {
          "model": "comparator_lit_subtract",
          "y": 270
        }
      }
    },
    "red_sand": {
      "variants": {
        "normal": [
          {
            "model": "red_sand"
          },
          {
            "model": "red_sand",
            "y": 90
          },
          {
            "model": "red_sand",
            "y": 180
          },
          {
            "model": "red_sand",
            "y": 270
          }
        ]
      }
    },
    "bookshelf": {
      "variants": {
        "normal": {
          "model": "bookshelf"
        }
      }
    },
    "brick_block": {
      "variants": {
        "normal": {
          "model": "brick"
        }
      }
    },
    "orange_stained_glass": {
      "variants": {
        "normal": {
          "model": "glass_orange"
        }
      }
    },
    "gray_stained_glass_pane": {
      "multipart": [
        {
          "apply": {
            "model": "gray_stained_glass_pane_post"
          }
        },
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "gray_stained_glass_pane_side"
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "gray_stained_glass_pane_side",
            "y": 90
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "gray_stained_glass_pane_side_alt"
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "gray_stained_glass_pane_side_alt",
            "y": 90
          }
        },
        {
          "when": {
            "north": false
          },
          "apply": {
            "model": "gray_stained_glass_pane_noside"
          }
        },
        {
          "when": {
            "east": false
          },
          "apply": {
            "model": "gray_stained_glass_pane_noside_alt"
          }
        },
        {
          "when": {
            "south": false
          },
          "apply": {
            "model": "gray_stained_glass_pane_noside_alt",
            "y": 90
          }
        },
        {
          "when": {
            "west": false
          },
          "apply": {
            "model": "gray_stained_glass_pane_noside",
            "y": 270
          }
        }
      ]
    },
    "lime_concrete": {
      "variants": {
        "normal": {
          "model": "lime_concrete"
        }
      }
    },
    "acacia_double_slab": {
      "variants": {
        "normal": {
          "model": "acacia_planks"
        }
      }
    },
    "iron_bars": {
      "multipart": [
        {
          "apply": {
            "model": "iron_bars_post_ends"
          }
        },
        {
          "when": {
            "north": false,
            "east": false,
            "south": false,
            "west": false
          },
          "apply": {
            "model": "iron_bars_post"
          }
        },
        {
          "when": {
            "north": true,
            "east": false,
            "south": false,
            "west": false
          },
          "apply": {
            "model": "iron_bars_cap"
          }
        },
        {
          "when": {
            "north": false,
            "east": true,
            "south": false,
            "west": false
          },
          "apply": {
            "model": "iron_bars_cap",
            "y": 90
          }
        },
        {
          "when": {
            "north": false,
            "east": false,
            "south": true,
            "west": false
          },
          "apply": {
            "model": "iron_bars_cap_alt"
          }
        },
        {
          "when": {
            "north": false,
            "east": false,
            "south": false,
            "west": true
          },
          "apply": {
            "model": "iron_bars_cap_alt",
            "y": 90
          }
        },
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "iron_bars_side"
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "iron_bars_side",
            "y": 90
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "iron_bars_side_alt"
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "iron_bars_side_alt",
            "y": 90
          }
        }
      ]
    },
    "red_nether_brick": {
      "variants": {
        "normal": {
          "model": "red_nether_brick"
        }
      }
    },
    "yellow_stained_glass_pane": {
      "multipart": [
        {
          "apply": {
            "model": "yellow_stained_glass_pane_post"
          }
        },
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "yellow_stained_glass_pane_side"
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "yellow_stained_glass_pane_side",
            "y": 90
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "yellow_stained_glass_pane_side_alt"
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "yellow_stained_glass_pane_side_alt",
            "y": 90
          }
        },
        {
          "when": {
            "north": false
          },
          "apply": {
            "model": "yellow_stained_glass_pane_noside"
          }
        },
        {
          "when": {
            "east": false
          },
          "apply": {
            "model": "yellow_stained_glass_pane_noside_alt"
          }
        },
        {
          "when": {
            "south": false
          },
          "apply": {
            "model": "yellow_stained_glass_pane_noside_alt",
            "y": 90
          }
        },
        {
          "when": {
            "west": false
          },
          "apply": {
            "model": "yellow_stained_glass_pane_noside",
            "y": 270
          }
        }
      ]
    },
    "brown_stained_glass_pane": {
      "multipart": [
        {
          "apply": {
            "model": "brown_stained_glass_pane_post"
          }
        },
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "brown_stained_glass_pane_side"
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "brown_stained_glass_pane_side",
            "y": 90
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "brown_stained_glass_pane_side_alt"
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "brown_stained_glass_pane_side_alt",
            "y": 90
          }
        },
        {
          "when": {
            "north": false
          },
          "apply": {
            "model": "brown_stained_glass_pane_noside"
          }
        },
        {
          "when": {
            "east": false
          },
          "apply": {
            "model": "brown_stained_glass_pane_noside_alt"
          }
        },
        {
          "when": {
            "south": false
          },
          "apply": {
            "model": "brown_stained_glass_pane_noside_alt",
            "y": 90
          }
        },
        {
          "when": {
            "west": false
          },
          "apply": {
            "model": "brown_stained_glass_pane_noside",
            "y": 270
          }
        }
      ]
    },
    "coal_ore": {
      "variants": {
        "normal": {
          "model": "coal_ore"
        }
      }
    },
    "jungle_slab": {
      "variants": {
        "half=bottom": {
          "model": "half_slab_jungle"
        },
        "half=top": {
          "model": "upper_slab_jungle"
        }
      }
    },
    "lever": {
      "variants": {
        "facing=down_z,powered=false": {
          "model": "lever_off",
          "x": 180,
          "y": 180
        },
        "facing=down_x,powered=false": {
          "model": "lever_off",
          "x": 180,
          "y": 90
        },
        "facing=up_z,powered=false": {
          "model": "lever_off"
        },
        "facing=up_x,powered=false": {
          "model": "lever_off",
          "y": 270
        },
        "facing=east,powered=false": {
          "model": "lever_off",
          "x": 90,
          "y": 90
        },
        "facing=west,powered=false": {
          "model": "lever_off",
          "x": 90,
          "y": 270
        },
        "facing=south,powered=false": {
          "model": "lever_off",
          "x": 90,
          "y": 180
        },
        "facing=north,powered=false": {
          "model": "lever_off",
          "x": 90
        },
        "facing=down_z,powered=true": {
          "model": "lever",
          "x": 180,
          "y": 180
        },
        "facing=down_x,powered=true": {
          "model": "lever",
          "x": 180,
          "y": 90
        },
        "facing=up_z,powered=true": {
          "model": "lever"
        },
        "facing=up_x,powered=true": {
          "model": "lever",
          "y": 270
        },
        "facing=east,powered=true": {
          "model": "lever",
          "x": 90,
          "y": 90
        },
        "facing=west,powered=true": {
          "model": "lever",
          "x": 90,
          "y": 270
        },
        "facing=south,powered=true": {
          "model": "lever",
          "x": 90,
          "y": 180
        },
        "facing=north,powered=true": {
          "model": "lever",
          "x": 90
        }
      }
    },
    "jungle_log": {
      "variants": {
        "axis=y": {
          "model": "jungle_log"
        },
        "axis=z": {
          "model": "jungle_log",
          "x": 90
        },
        "axis=x": {
          "model": "jungle_log",
          "x": 90,
          "y": 90
        },
        "axis=none": {
          "model": "jungle_bark"
        }
      }
    },
    "cobblestone": {
      "variants": {
        "normal": {
          "model": "cobblestone"
        }
      }
    },
    "acacia_fence": {
      "multipart": [
        {
          "apply": {
            "model": "acacia_fence_post"
          }
        },
        {
          "when": {
            "north": "true"
          },
          "apply": {
            "model": "acacia_fence_side",
            "uvlock": true
          }
        },
        {
          "when": {
            "east": "true"
          },
          "apply": {
            "model": "acacia_fence_side",
            "y": 90,
            "uvlock": true
          }
        },
        {
          "when": {
            "south": "true"
          },
          "apply": {
            "model": "acacia_fence_side",
            "y": 180,
            "uvlock": true
          }
        },
        {
          "when": {
            "west": "true"
          },
          "apply": {
            "model": "acacia_fence_side",
            "y": 270,
            "uvlock": true
          }
        }
      ]
    },
    "spruce_log": {
      "variants": {
        "axis=y": {
          "model": "spruce_log"
        },
        "axis=z": {
          "model": "spruce_log",
          "x": 90
        },
        "axis=x": {
          "model": "spruce_log",
          "x": 90,
          "y": 90
        },
        "axis=none": {
          "model": "spruce_bark"
        }
      }
    },
    "blue_wool": {
      "variants": {
        "normal": {
          "model": "blue_wool"
        }
      }
    },
    "magenta_stained_glass": {
      "variants": {
        "normal": {
          "model": "glass_magenta"
        }
      }
    },
    "dark_oak_door": {
      "variants": {
        "facing=east,half=lower,hinge=left,open=false": {
          "model": "dark_oak_door_bottom"
        },
        "facing=south,half=lower,hinge=left,open=false": {
          "model": "dark_oak_door_bottom",
          "y": 90
        },
        "facing=west,half=lower,hinge=left,open=false": {
          "model": "dark_oak_door_bottom",
          "y": 180
        },
        "facing=north,half=lower,hinge=left,open=false": {
          "model": "dark_oak_door_bottom",
          "y": 270
        },
        "facing=east,half=lower,hinge=right,open=false": {
          "model": "dark_oak_door_bottom_rh"
        },
        "facing=south,half=lower,hinge=right,open=false": {
          "model": "dark_oak_door_bottom_rh",
          "y": 90
        },
        "facing=west,half=lower,hinge=right,open=false": {
          "model": "dark_oak_door_bottom_rh",
          "y": 180
        },
        "facing=north,half=lower,hinge=right,open=false": {
          "model": "dark_oak_door_bottom_rh",
          "y": 270
        },
        "facing=east,half=lower,hinge=left,open=true": {
          "model": "dark_oak_door_bottom_rh",
          "y": 90
        },
        "facing=south,half=lower,hinge=left,open=true": {
          "model": "dark_oak_door_bottom_rh",
          "y": 180
        },
        "facing=west,half=lower,hinge=left,open=true": {
          "model": "dark_oak_door_bottom_rh",
          "y": 270
        },
        "facing=north,half=lower,hinge=left,open=true": {
          "model": "dark_oak_door_bottom_rh"
        },
        "facing=east,half=lower,hinge=right,open=true": {
          "model": "dark_oak_door_bottom",
          "y": 270
        },
        "facing=south,half=lower,hinge=right,open=true": {
          "model": "dark_oak_door_bottom"
        },
        "facing=west,half=lower,hinge=right,open=true": {
          "model": "dark_oak_door_bottom",
          "y": 90
        },
        "facing=north,half=lower,hinge=right,open=true": {
          "model": "dark_oak_door_bottom",
          "y": 180
        },
        "facing=east,half=upper,hinge=left,open=false": {
          "model": "dark_oak_door_top"
        },
        "facing=south,half=upper,hinge=left,open=false": {
          "model": "dark_oak_door_top",
          "y": 90
        },
        "facing=west,half=upper,hinge=left,open=false": {
          "model": "dark_oak_door_top",
          "y": 180
        },
        "facing=north,half=upper,hinge=left,open=false": {
          "model": "dark_oak_door_top",
          "y": 270
        },
        "facing=east,half=upper,hinge=right,open=false": {
          "model": "dark_oak_door_top_rh"
        },
        "facing=south,half=upper,hinge=right,open=false": {
          "model": "dark_oak_door_top_rh",
          "y": 90
        },
        "facing=west,half=upper,hinge=right,open=false": {
          "model": "dark_oak_door_top_rh",
          "y": 180
        },
        "facing=north,half=upper,hinge=right,open=false": {
          "model": "dark_oak_door_top_rh",
          "y": 270
        },
        "facing=east,half=upper,hinge=left,open=true": {
          "model": "dark_oak_door_top_rh",
          "y": 90
        },
        "facing=south,half=upper,hinge=left,open=true": {
          "model": "dark_oak_door_top_rh",
          "y": 180
        },
        "facing=west,half=upper,hinge=left,open=true": {
          "model": "dark_oak_door_top_rh",
          "y": 270
        },
        "facing=north,half=upper,hinge=left,open=true": {
          "model": "dark_oak_door_top_rh"
        },
        "facing=east,half=upper,hinge=right,open=true": {
          "model": "dark_oak_door_top",
          "y": 270
        },
        "facing=south,half=upper,hinge=right,open=true": {
          "model": "dark_oak_door_top"
        },
        "facing=west,half=upper,hinge=right,open=true": {
          "model": "dark_oak_door_top",
          "y": 90
        },
        "facing=north,half=upper,hinge=right,open=true": {
          "model": "dark_oak_door_top",
          "y": 180
        }
      }
    },
    "red_sandstone": {
      "variants": {
        "normal": {
          "model": "red_sandstone_normal"
        }
      }
    },
    "stone_stairs": {
      "variants": {
        "facing=east,half=bottom,shape=straight": {
          "model": "stone_stairs"
        },
        "facing=west,half=bottom,shape=straight": {
          "model": "stone_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=straight": {
          "model": "stone_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=straight": {
          "model": "stone_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_right": {
          "model": "stone_outer_stairs"
        },
        "facing=west,half=bottom,shape=outer_right": {
          "model": "stone_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_right": {
          "model": "stone_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=outer_right": {
          "model": "stone_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_left": {
          "model": "stone_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=outer_left": {
          "model": "stone_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_left": {
          "model": "stone_outer_stairs"
        },
        "facing=north,half=bottom,shape=outer_left": {
          "model": "stone_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_right": {
          "model": "stone_inner_stairs"
        },
        "facing=west,half=bottom,shape=inner_right": {
          "model": "stone_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_right": {
          "model": "stone_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=inner_right": {
          "model": "stone_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_left": {
          "model": "stone_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=inner_left": {
          "model": "stone_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_left": {
          "model": "stone_inner_stairs"
        },
        "facing=north,half=bottom,shape=inner_left": {
          "model": "stone_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=straight": {
          "model": "stone_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=straight": {
          "model": "stone_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=straight": {
          "model": "stone_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=straight": {
          "model": "stone_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_right": {
          "model": "stone_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_right": {
          "model": "stone_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_right": {
          "model": "stone_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_right": {
          "model": "stone_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_left": {
          "model": "stone_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_left": {
          "model": "stone_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_left": {
          "model": "stone_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_left": {
          "model": "stone_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_right": {
          "model": "stone_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_right": {
          "model": "stone_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_right": {
          "model": "stone_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_right": {
          "model": "stone_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_left": {
          "model": "stone_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_left": {
          "model": "stone_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_left": {
          "model": "stone_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_left": {
          "model": "stone_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        }
      }
    },
    "birch_stairs": {
      "variants": {
        "facing=east,half=bottom,shape=straight": {
          "model": "birch_stairs"
        },
        "facing=west,half=bottom,shape=straight": {
          "model": "birch_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=straight": {
          "model": "birch_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=straight": {
          "model": "birch_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_right": {
          "model": "birch_outer_stairs"
        },
        "facing=west,half=bottom,shape=outer_right": {
          "model": "birch_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_right": {
          "model": "birch_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=outer_right": {
          "model": "birch_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_left": {
          "model": "birch_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=outer_left": {
          "model": "birch_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_left": {
          "model": "birch_outer_stairs"
        },
        "facing=north,half=bottom,shape=outer_left": {
          "model": "birch_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_right": {
          "model": "birch_inner_stairs"
        },
        "facing=west,half=bottom,shape=inner_right": {
          "model": "birch_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_right": {
          "model": "birch_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=inner_right": {
          "model": "birch_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_left": {
          "model": "birch_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=inner_left": {
          "model": "birch_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_left": {
          "model": "birch_inner_stairs"
        },
        "facing=north,half=bottom,shape=inner_left": {
          "model": "birch_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=straight": {
          "model": "birch_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=straight": {
          "model": "birch_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=straight": {
          "model": "birch_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=straight": {
          "model": "birch_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_right": {
          "model": "birch_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_right": {
          "model": "birch_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_right": {
          "model": "birch_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_right": {
          "model": "birch_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_left": {
          "model": "birch_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_left": {
          "model": "birch_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_left": {
          "model": "birch_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_left": {
          "model": "birch_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_right": {
          "model": "birch_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_right": {
          "model": "birch_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_right": {
          "model": "birch_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_right": {
          "model": "birch_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_left": {
          "model": "birch_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_left": {
          "model": "birch_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_left": {
          "model": "birch_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_left": {
          "model": "birch_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        }
      }
    },
    "mossy_cobblestone_wall": {
      "multipart": [
        {
          "when": {
            "up": true
          },
          "apply": {
            "model": "mossy_cobblestone_wall_post"
          }
        },
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "mossy_cobblestone_wall_side",
            "uvlock": true
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "mossy_cobblestone_wall_side",
            "y": 90,
            "uvlock": true
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "mossy_cobblestone_wall_side",
            "y": 180,
            "uvlock": true
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "mossy_cobblestone_wall_side",
            "y": 270,
            "uvlock": true
          }
        }
      ]
    },
    "blue_stained_hardened_clay": {
      "variants": {
        "normal": {
          "model": "hardened_clay_blue"
        }
      }
    },
    "cyan_concrete": {
      "variants": {
        "normal": {
          "model": "cyan_concrete"
        }
      }
    },
    "yellow_stained_hardened_clay": {
      "variants": {
        "normal": {
          "model": "hardened_clay_yellow"
        }
      }
    },
    "dark_prismarine": {
      "variants": {
        "normal": {
          "model": "prismarine_dark"
        }
      }
    },
    "acacia_fence_gate": {
      "variants": {
        "facing=south,in_wall=false,open=false": {
          "model": "acacia_fence_gate_closed",
          "uvlock": true
        },
        "facing=west,in_wall=false,open=false": {
          "model": "acacia_fence_gate_closed",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=false,open=false": {
          "model": "acacia_fence_gate_closed",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=false,open=false": {
          "model": "acacia_fence_gate_closed",
          "uvlock": true,
          "y": 270
        },
        "facing=south,in_wall=false,open=true": {
          "model": "acacia_fence_gate_open",
          "uvlock": true
        },
        "facing=west,in_wall=false,open=true": {
          "model": "acacia_fence_gate_open",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=false,open=true": {
          "model": "acacia_fence_gate_open",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=false,open=true": {
          "model": "acacia_fence_gate_open",
          "uvlock": true,
          "y": 270
        },
        "facing=south,in_wall=true,open=false": {
          "model": "acacia_wall_gate_closed",
          "uvlock": true
        },
        "facing=west,in_wall=true,open=false": {
          "model": "acacia_wall_gate_closed",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=true,open=false": {
          "model": "acacia_wall_gate_closed",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=true,open=false": {
          "model": "acacia_wall_gate_closed",
          "uvlock": true,
          "y": 270
        },
        "facing=south,in_wall=true,open=true": {
          "model": "acacia_wall_gate_open",
          "uvlock": true
        },
        "facing=west,in_wall=true,open=true": {
          "model": "acacia_wall_gate_open",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=true,open=true": {
          "model": "acacia_wall_gate_open",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=true,open=true": {
          "model": "acacia_wall_gate_open",
          "uvlock": true,
          "y": 270
        }
      }
    },
    "powered_repeater": {
      "variants": {
        "delay=1,facing=south,locked=false": {
          "model": "repeater_on_1tick"
        },
        "delay=1,facing=west,locked=false": {
          "model": "repeater_on_1tick",
          "y": 90
        },
        "delay=1,facing=north,locked=false": {
          "model": "repeater_on_1tick",
          "y": 180
        },
        "delay=1,facing=east,locked=false": {
          "model": "repeater_on_1tick",
          "y": 270
        },
        "delay=2,facing=south,locked=false": {
          "model": "repeater_on_2tick"
        },
        "delay=2,facing=west,locked=false": {
          "model": "repeater_on_2tick",
          "y": 90
        },
        "delay=2,facing=north,locked=false": {
          "model": "repeater_on_2tick",
          "y": 180
        },
        "delay=2,facing=east,locked=false": {
          "model": "repeater_on_2tick",
          "y": 270
        },
        "delay=3,facing=south,locked=false": {
          "model": "repeater_on_3tick"
        },
        "delay=3,facing=west,locked=false": {
          "model": "repeater_on_3tick",
          "y": 90
        },
        "delay=3,facing=north,locked=false": {
          "model": "repeater_on_3tick",
          "y": 180
        },
        "delay=3,facing=east,locked=false": {
          "model": "repeater_on_3tick",
          "y": 270
        },
        "delay=4,facing=south,locked=false": {
          "model": "repeater_on_4tick"
        },
        "delay=4,facing=west,locked=false": {
          "model": "repeater_on_4tick",
          "y": 90
        },
        "delay=4,facing=north,locked=false": {
          "model": "repeater_on_4tick",
          "y": 180
        },
        "delay=4,facing=east,locked=false": {
          "model": "repeater_on_4tick",
          "y": 270
        },
        "delay=1,facing=south,locked=true": {
          "model": "repeater_on_locked_1tick"
        },
        "delay=1,facing=west,locked=true": {
          "model": "repeater_on_locked_1tick",
          "y": 90
        },
        "delay=1,facing=north,locked=true": {
          "model": "repeater_on_locked_1tick",
          "y": 180
        },
        "delay=1,facing=east,locked=true": {
          "model": "repeater_on_locked_1tick",
          "y": 270
        },
        "delay=2,facing=south,locked=true": {
          "model": "repeater_on_locked_2tick"
        },
        "delay=2,facing=west,locked=true": {
          "model": "repeater_on_locked_2tick",
          "y": 90
        },
        "delay=2,facing=north,locked=true": {
          "model": "repeater_on_locked_2tick",
          "y": 180
        },
        "delay=2,facing=east,locked=true": {
          "model": "repeater_on_locked_2tick",
          "y": 270
        },
        "delay=3,facing=south,locked=true": {
          "model": "repeater_on_locked_3tick"
        },
        "delay=3,facing=west,locked=true": {
          "model": "repeater_on_locked_3tick",
          "y": 90
        },
        "delay=3,facing=north,locked=true": {
          "model": "repeater_on_locked_3tick",
          "y": 180
        },
        "delay=3,facing=east,locked=true": {
          "model": "repeater_on_locked_3tick",
          "y": 270
        },
        "delay=4,facing=south,locked=true": {
          "model": "repeater_on_locked_4tick"
        },
        "delay=4,facing=west,locked=true": {
          "model": "repeater_on_locked_4tick",
          "y": 90
        },
        "delay=4,facing=north,locked=true": {
          "model": "repeater_on_locked_4tick",
          "y": 180
        },
        "delay=4,facing=east,locked=true": {
          "model": "repeater_on_locked_4tick",
          "y": 270
        }
      }
    },
    "nether_brick_double_slab": {
      "variants": {
        "normal": {
          "model": "nether_brick"
        },
        "all": {
          "model": "nether_brick"
        }
      }
    },
    "obsidian": {
      "variants": {
        "normal": {
          "model": "obsidian"
        }
      }
    },
    "stone_double_slab": {
      "variants": {
        "normal": {
          "model": "double_stone"
        },
        "all": {
          "model": "double_stone_top"
        }
      }
    },
    "stone_brick_stairs": {
      "variants": {
        "facing=east,half=bottom,shape=straight": {
          "model": "stone_brick_stairs"
        },
        "facing=west,half=bottom,shape=straight": {
          "model": "stone_brick_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=straight": {
          "model": "stone_brick_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=straight": {
          "model": "stone_brick_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_right": {
          "model": "stone_brick_outer_stairs"
        },
        "facing=west,half=bottom,shape=outer_right": {
          "model": "stone_brick_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_right": {
          "model": "stone_brick_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=outer_right": {
          "model": "stone_brick_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_left": {
          "model": "stone_brick_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=outer_left": {
          "model": "stone_brick_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_left": {
          "model": "stone_brick_outer_stairs"
        },
        "facing=north,half=bottom,shape=outer_left": {
          "model": "stone_brick_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_right": {
          "model": "stone_brick_inner_stairs"
        },
        "facing=west,half=bottom,shape=inner_right": {
          "model": "stone_brick_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_right": {
          "model": "stone_brick_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=inner_right": {
          "model": "stone_brick_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_left": {
          "model": "stone_brick_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=inner_left": {
          "model": "stone_brick_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_left": {
          "model": "stone_brick_inner_stairs"
        },
        "facing=north,half=bottom,shape=inner_left": {
          "model": "stone_brick_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=straight": {
          "model": "stone_brick_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=straight": {
          "model": "stone_brick_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=straight": {
          "model": "stone_brick_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=straight": {
          "model": "stone_brick_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_right": {
          "model": "stone_brick_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_right": {
          "model": "stone_brick_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_right": {
          "model": "stone_brick_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_right": {
          "model": "stone_brick_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_left": {
          "model": "stone_brick_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_left": {
          "model": "stone_brick_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_left": {
          "model": "stone_brick_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_left": {
          "model": "stone_brick_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_right": {
          "model": "stone_brick_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_right": {
          "model": "stone_brick_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_right": {
          "model": "stone_brick_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_right": {
          "model": "stone_brick_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_left": {
          "model": "stone_brick_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_left": {
          "model": "stone_brick_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_left": {
          "model": "stone_brick_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_left": {
          "model": "stone_brick_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        }
      }
    },
    "green_stained_glass": {
      "variants": {
        "normal": {
          "model": "glass_green"
        }
      }
    },
    "jungle_sapling": {
      "variants": {
        "stage=0": {
          "model": "jungle_sapling"
        },
        "stage=1": {
          "model": "jungle_sapling"
        }
      }
    },
    "gold_block": {
      "variants": {
        "normal": {
          "model": "gold_block"
        }
      }
    },
    "mycelium": {
      "variants": {
        "snowy=false": {
          "model": "mycelium"
        },
        "snowy=true": {
          "model": "grass_snowed"
        }
      }
    },
    "acacia_leaves": {
      "variants": {
        "normal": {
          "model": "acacia_leaves"
        }
      }
    },
    "cyan_stained_hardened_clay": {
      "variants": {
        "normal": {
          "model": "hardened_clay_cyan"
        }
      }
    },
    "green_glazed_terracotta": {
      "variants": {
        "facing=south": {
          "model": "green_glazed_terracotta"
        },
        "facing=west": {
          "model": "green_glazed_terracotta",
          "y": 90
        },
        "facing=north": {
          "model": "green_glazed_terracotta",
          "y": 180
        },
        "facing=east": {
          "model": "green_glazed_terracotta",
          "y": 270
        }
      }
    },
    "spruce_door": {
      "variants": {
        "facing=east,half=lower,hinge=left,open=false": {
          "model": "spruce_door_bottom"
        },
        "facing=south,half=lower,hinge=left,open=false": {
          "model": "spruce_door_bottom",
          "y": 90
        },
        "facing=west,half=lower,hinge=left,open=false": {
          "model": "spruce_door_bottom",
          "y": 180
        },
        "facing=north,half=lower,hinge=left,open=false": {
          "model": "spruce_door_bottom",
          "y": 270
        },
        "facing=east,half=lower,hinge=right,open=false": {
          "model": "spruce_door_bottom_rh"
        },
        "facing=south,half=lower,hinge=right,open=false": {
          "model": "spruce_door_bottom_rh",
          "y": 90
        },
        "facing=west,half=lower,hinge=right,open=false": {
          "model": "spruce_door_bottom_rh",
          "y": 180
        },
        "facing=north,half=lower,hinge=right,open=false": {
          "model": "spruce_door_bottom_rh",
          "y": 270
        },
        "facing=east,half=lower,hinge=left,open=true": {
          "model": "spruce_door_bottom_rh",
          "y": 90
        },
        "facing=south,half=lower,hinge=left,open=true": {
          "model": "spruce_door_bottom_rh",
          "y": 180
        },
        "facing=west,half=lower,hinge=left,open=true": {
          "model": "spruce_door_bottom_rh",
          "y": 270
        },
        "facing=north,half=lower,hinge=left,open=true": {
          "model": "spruce_door_bottom_rh"
        },
        "facing=east,half=lower,hinge=right,open=true": {
          "model": "spruce_door_bottom",
          "y": 270
        },
        "facing=south,half=lower,hinge=right,open=true": {
          "model": "spruce_door_bottom"
        },
        "facing=west,half=lower,hinge=right,open=true": {
          "model": "spruce_door_bottom",
          "y": 90
        },
        "facing=north,half=lower,hinge=right,open=true": {
          "model": "spruce_door_bottom",
          "y": 180
        },
        "facing=east,half=upper,hinge=left,open=false": {
          "model": "spruce_door_top"
        },
        "facing=south,half=upper,hinge=left,open=false": {
          "model": "spruce_door_top",
          "y": 90
        },
        "facing=west,half=upper,hinge=left,open=false": {
          "model": "spruce_door_top",
          "y": 180
        },
        "facing=north,half=upper,hinge=left,open=false": {
          "model": "spruce_door_top",
          "y": 270
        },
        "facing=east,half=upper,hinge=right,open=false": {
          "model": "spruce_door_top_rh"
        },
        "facing=south,half=upper,hinge=right,open=false": {
          "model": "spruce_door_top_rh",
          "y": 90
        },
        "facing=west,half=upper,hinge=right,open=false": {
          "model": "spruce_door_top_rh",
          "y": 180
        },
        "facing=north,half=upper,hinge=right,open=false": {
          "model": "spruce_door_top_rh",
          "y": 270
        },
        "facing=east,half=upper,hinge=left,open=true": {
          "model": "spruce_door_top_rh",
          "y": 90
        },
        "facing=south,half=upper,hinge=left,open=true": {
          "model": "spruce_door_top_rh",
          "y": 180
        },
        "facing=west,half=upper,hinge=left,open=true": {
          "model": "spruce_door_top_rh",
          "y": 270
        },
        "facing=north,half=upper,hinge=left,open=true": {
          "model": "spruce_door_top_rh"
        },
        "facing=east,half=upper,hinge=right,open=true": {
          "model": "spruce_door_top",
          "y": 270
        },
        "facing=south,half=upper,hinge=right,open=true": {
          "model": "spruce_door_top"
        },
        "facing=west,half=upper,hinge=right,open=true": {
          "model": "spruce_door_top",
          "y": 90
        },
        "facing=north,half=upper,hinge=right,open=true": {
          "model": "spruce_door_top",
          "y": 180
        }
      }
    },
    "acacia_slab": {
      "variants": {
        "half=bottom": {
          "model": "half_slab_acacia"
        },
        "half=top": {
          "model": "upper_slab_acacia"
        }
      }
    },
    "stone_button": {
      "variants": {
        "facing=up,powered=false": {
          "model": "stone_button",
          "uvlock": true
        },
        "facing=down,powered=false": {
          "model": "stone_button",
          "uvlock": true,
          "x": 180
        },
        "facing=east,powered=false": {
          "model": "stone_button",
          "uvlock": true,
          "x": 90,
          "y": 90
        },
        "facing=west,powered=false": {
          "model": "stone_button",
          "uvlock": true,
          "x": 90,
          "y": 270
        },
        "facing=south,powered=false": {
          "model": "stone_button",
          "uvlock": true,
          "x": 90,
          "y": 180
        },
        "facing=north,powered=false": {
          "model": "stone_button",
          "uvlock": true,
          "x": 90
        },
        "facing=up,powered=true": {
          "model": "stone_button_pressed",
          "uvlock": true
        },
        "facing=down,powered=true": {
          "model": "stone_button_pressed",
          "uvlock": true,
          "x": 180
        },
        "facing=east,powered=true": {
          "model": "stone_button_pressed",
          "uvlock": true,
          "x": 90,
          "y": 90
        },
        "facing=west,powered=true": {
          "model": "stone_button_pressed",
          "uvlock": true,
          "x": 90,
          "y": 270
        },
        "facing=south,powered=true": {
          "model": "stone_button_pressed",
          "uvlock": true,
          "x": 90,
          "y": 180
        },
        "facing=north,powered=true": {
          "model": "stone_button_pressed",
          "uvlock": true,
          "x": 90
        }
      }
    },
    "light_blue_stained_hardened_clay": {
      "variants": {
        "normal": {
          "model": "hardened_clay_light_blue"
        }
      }
    },
    "lit_redstone_lamp": {
      "variants": {
        "normal": {
          "model": "lit_redstone_lamp"
        }
      }
    },
    "lime_stained_glass_pane": {
      "multipart": [
        {
          "apply": {
            "model": "lime_stained_glass_pane_post"
          }
        },
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "lime_stained_glass_pane_side"
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "lime_stained_glass_pane_side",
            "y": 90
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "lime_stained_glass_pane_side_alt"
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "lime_stained_glass_pane_side_alt",
            "y": 90
          }
        },
        {
          "when": {
            "north": false
          },
          "apply": {
            "model": "lime_stained_glass_pane_noside"
          }
        },
        {
          "when": {
            "east": false
          },
          "apply": {
            "model": "lime_stained_glass_pane_noside_alt"
          }
        },
        {
          "when": {
            "south": false
          },
          "apply": {
            "model": "lime_stained_glass_pane_noside_alt",
            "y": 90
          }
        },
        {
          "when": {
            "west": false
          },
          "apply": {
            "model": "lime_stained_glass_pane_noside",
            "y": 270
          }
        }
      ]
    },
    "end_bricks": {
      "variants": {
        "normal": {
          "model": "end_bricks"
        }
      }
    },
    "nether_brick": {
      "variants": {
        "normal": {
          "model": "nether_brick"
        }
      }
    },
    "stone_brick_slab": {
      "variants": {
        "half=bottom": {
          "model": "half_slab_stone_brick"
        },
        "half=top": {
          "model": "upper_slab_stone_brick"
        }
      }
    },
    "iron_ore": {
      "variants": {
        "normal": {
          "model": "iron_ore"
        }
      }
    },
    "slime": {
      "variants": {
        "normal": {
          "model": "slime"
        }
      }
    },
    "waterlily": {
      "variants": {
        "normal": [
          {
            "model": "waterlily"
          },
          {
            "model": "waterlily",
            "y": 90
          },
          {
            "model": "waterlily",
            "y": 180
          },
          {
            "model": "waterlily",
            "y": 270
          }
        ]
      }
    },
    "cobblestone_double_slab": {
      "variants": {
        "normal": {
          "model": "cobblestone"
        },
        "all": {
          "model": "cobblestone"
        }
      }
    },
    "purple_stained_glass": {
      "variants": {
        "normal": {
          "model": "glass_purple"
        }
      }
    },
    "stone_slab": {
      "variants": {
        "half=bottom": {
          "model": "half_slab_stone"
        },
        "half=top": {
          "model": "upper_slab_stone"
        }
      }
    },
    "red_stained_hardened_clay": {
      "variants": {
        "normal": {
          "model": "hardened_clay_red"
        }
      }
    },
    "jukebox": {
      "variants": {
        "normal": {
          "model": "jukebox"
        }
      }
    },
    "brick_stairs": {
      "variants": {
        "facing=east,half=bottom,shape=straight": {
          "model": "brick_stairs"
        },
        "facing=west,half=bottom,shape=straight": {
          "model": "brick_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=straight": {
          "model": "brick_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=straight": {
          "model": "brick_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_right": {
          "model": "brick_outer_stairs"
        },
        "facing=west,half=bottom,shape=outer_right": {
          "model": "brick_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_right": {
          "model": "brick_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=outer_right": {
          "model": "brick_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_left": {
          "model": "brick_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=outer_left": {
          "model": "brick_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_left": {
          "model": "brick_outer_stairs"
        },
        "facing=north,half=bottom,shape=outer_left": {
          "model": "brick_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_right": {
          "model": "brick_inner_stairs"
        },
        "facing=west,half=bottom,shape=inner_right": {
          "model": "brick_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_right": {
          "model": "brick_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=inner_right": {
          "model": "brick_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_left": {
          "model": "brick_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=inner_left": {
          "model": "brick_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_left": {
          "model": "brick_inner_stairs"
        },
        "facing=north,half=bottom,shape=inner_left": {
          "model": "brick_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=straight": {
          "model": "brick_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=straight": {
          "model": "brick_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=straight": {
          "model": "brick_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=straight": {
          "model": "brick_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_right": {
          "model": "brick_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_right": {
          "model": "brick_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_right": {
          "model": "brick_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_right": {
          "model": "brick_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_left": {
          "model": "brick_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_left": {
          "model": "brick_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_left": {
          "model": "brick_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_left": {
          "model": "brick_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_right": {
          "model": "brick_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_right": {
          "model": "brick_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_right": {
          "model": "brick_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_right": {
          "model": "brick_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_left": {
          "model": "brick_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_left": {
          "model": "brick_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_left": {
          "model": "brick_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_left": {
          "model": "brick_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        }
      }
    },
    "chiseled_brick_monster_egg": {
      "variants": {
        "normal": {
          "model": "stonebrick_chiseled"
        }
      }
    },
    "web": {
      "variants": {
        "normal": {
          "model": "web"
        }
      }
    },
    "acacia_planks": {
      "variants": {
        "normal": {
          "model": "acacia_planks"
        }
      }
    },
    "redstone_ore": {
      "variants": {
        "normal": {
          "model": "redstone_ore"
        }
      }
    },
    "allium": {
      "variants": {
        "normal": {
          "model": "allium"
        }
      }
    },
    "dark_oak_fence": {
      "multipart": [
        {
          "apply": {
            "model": "dark_oak_fence_post"
          }
        },
        {
          "when": {
            "north": "true"
          },
          "apply": {
            "model": "dark_oak_fence_side",
            "uvlock": true
          }
        },
        {
          "when": {
            "east": "true"
          },
          "apply": {
            "model": "dark_oak_fence_side",
            "y": 90,
            "uvlock": true
          }
        },
        {
          "when": {
            "south": "true"
          },
          "apply": {
            "model": "dark_oak_fence_side",
            "y": 180,
            "uvlock": true
          }
        },
        {
          "when": {
            "west": "true"
          },
          "apply": {
            "model": "dark_oak_fence_side",
            "y": 270,
            "uvlock": true
          }
        }
      ]
    },
    "diamond_ore": {
      "variants": {
        "normal": {
          "model": "diamond_ore"
        }
      }
    },
    "green_concrete": {
      "variants": {
        "normal": {
          "model": "green_concrete"
        }
      }
    },
    "ladder": {
      "variants": {
        "facing=north": {
          "model": "ladder"
        },
        "facing=east": {
          "model": "ladder",
          "y": 90
        },
        "facing=south": {
          "model": "ladder",
          "y": 180
        },
        "facing=west": {
          "model": "ladder",
          "y": 270
        }
      }
    },
    "portal": {
      "variants": {
        "axis=z": {
          "model": "portal_ew"
        },
        "axis=x": {
          "model": "portal_ns"
        }
      }
    },
    "yellow_wool": {
      "variants": {
        "normal": {
          "model": "yellow_wool"
        }
      }
    },
    "light_blue_concrete_powder": {
      "variants": {
        "normal": [
          {
            "model": "light_blue_concrete_powder"
          },
          {
            "model": "light_blue_concrete_powder",
            "y": 90
          },
          {
            "model": "light_blue_concrete_powder",
            "y": 180
          },
          {
            "model": "light_blue_concrete_powder",
            "y": 270
          }
        ]
      }
    },
    "mossy_cobblestone": {
      "variants": {
        "normal": {
          "model": "mossy_cobblestone"
        }
      }
    },
    "prismarine_bricks": {
      "variants": {
        "normal": {
          "model": "prismarine_bricks"
        }
      }
    },
    "melon_stem": {
      "variants": {
        "age=0,facing=up": {
          "model": "melon_stem_growth0"
        },
        "age=1,facing=up": {
          "model": "melon_stem_growth1"
        },
        "age=2,facing=up": {
          "model": "melon_stem_growth2"
        },
        "age=3,facing=up": {
          "model": "melon_stem_growth3"
        },
        "age=4,facing=up": {
          "model": "melon_stem_growth4"
        },
        "age=5,facing=up": {
          "model": "melon_stem_growth5"
        },
        "age=6,facing=up": {
          "model": "melon_stem_growth6"
        },
        "age=7,facing=up": {
          "model": "melon_stem_growth7"
        },
        "facing=west": {
          "model": "melon_stem_fruit"
        },
        "facing=east": {
          "model": "melon_stem_fruit",
          "y": 180
        },
        "facing=north": {
          "model": "melon_stem_fruit",
          "y": 90
        },
        "facing=south": {
          "model": "melon_stem_fruit",
          "y": 270
        }
      }
    },
    "fence": {
      "multipart": [
        {
          "apply": {
            "model": "oak_fence_post"
          }
        },
        {
          "when": {
            "north": "true"
          },
          "apply": {
            "model": "oak_fence_side",
            "uvlock": true
          }
        },
        {
          "when": {
            "east": "true"
          },
          "apply": {
            "model": "oak_fence_side",
            "y": 90,
            "uvlock": true
          }
        },
        {
          "when": {
            "south": "true"
          },
          "apply": {
            "model": "oak_fence_side",
            "y": 180,
            "uvlock": true
          }
        },
        {
          "when": {
            "west": "true"
          },
          "apply": {
            "model": "oak_fence_side",
            "y": 270,
            "uvlock": true
          }
        }
      ]
    },
    "orange_stained_glass_pane": {
      "multipart": [
        {
          "apply": {
            "model": "orange_stained_glass_pane_post"
          }
        },
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "orange_stained_glass_pane_side"
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "orange_stained_glass_pane_side",
            "y": 90
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "orange_stained_glass_pane_side_alt"
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "orange_stained_glass_pane_side_alt",
            "y": 90
          }
        },
        {
          "when": {
            "north": false
          },
          "apply": {
            "model": "orange_stained_glass_pane_noside"
          }
        },
        {
          "when": {
            "east": false
          },
          "apply": {
            "model": "orange_stained_glass_pane_noside_alt"
          }
        },
        {
          "when": {
            "south": false
          },
          "apply": {
            "model": "orange_stained_glass_pane_noside_alt",
            "y": 90
          }
        },
        {
          "when": {
            "west": false
          },
          "apply": {
            "model": "orange_stained_glass_pane_noside",
            "y": 270
          }
        }
      ]
    },
    "ice": {
      "variants": {
        "normal": {
          "model": "ice"
        }
      }
    },
    "oak_stairs": {
      "variants": {
        "facing=east,half=bottom,shape=straight": {
          "model": "oak_stairs"
        },
        "facing=west,half=bottom,shape=straight": {
          "model": "oak_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=straight": {
          "model": "oak_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=straight": {
          "model": "oak_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_right": {
          "model": "oak_outer_stairs"
        },
        "facing=west,half=bottom,shape=outer_right": {
          "model": "oak_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_right": {
          "model": "oak_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=outer_right": {
          "model": "oak_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_left": {
          "model": "oak_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=outer_left": {
          "model": "oak_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_left": {
          "model": "oak_outer_stairs"
        },
        "facing=north,half=bottom,shape=outer_left": {
          "model": "oak_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_right": {
          "model": "oak_inner_stairs"
        },
        "facing=west,half=bottom,shape=inner_right": {
          "model": "oak_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_right": {
          "model": "oak_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=inner_right": {
          "model": "oak_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_left": {
          "model": "oak_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=inner_left": {
          "model": "oak_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_left": {
          "model": "oak_inner_stairs"
        },
        "facing=north,half=bottom,shape=inner_left": {
          "model": "oak_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=straight": {
          "model": "oak_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=straight": {
          "model": "oak_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=straight": {
          "model": "oak_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=straight": {
          "model": "oak_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_right": {
          "model": "oak_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_right": {
          "model": "oak_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_right": {
          "model": "oak_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_right": {
          "model": "oak_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_left": {
          "model": "oak_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_left": {
          "model": "oak_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_left": {
          "model": "oak_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_left": {
          "model": "oak_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_right": {
          "model": "oak_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_right": {
          "model": "oak_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_right": {
          "model": "oak_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_right": {
          "model": "oak_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_left": {
          "model": "oak_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_left": {
          "model": "oak_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_left": {
          "model": "oak_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_left": {
          "model": "oak_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        }
      }
    },
    "green_wool": {
      "variants": {
        "normal": {
          "model": "green_wool"
        }
      }
    },
    "lime_carpet": {
      "variants": {
        "normal": {
          "model": "carpet_lime"
        }
      }
    },
    "pink_glazed_terracotta": {
      "variants": {
        "facing=south": {
          "model": "pink_glazed_terracotta"
        },
        "facing=west": {
          "model": "pink_glazed_terracotta",
          "y": 90
        },
        "facing=north": {
          "model": "pink_glazed_terracotta",
          "y": 180
        },
        "facing=east": {
          "model": "pink_glazed_terracotta",
          "y": 270
        }
      }
    },
    "chiseled_stonebrick": {
      "variants": {
        "normal": {
          "model": "stonebrick_chiseled"
        }
      }
    },
    "pink_concrete_powder": {
      "variants": {
        "normal": [
          {
            "model": "pink_concrete_powder"
          },
          {
            "model": "pink_concrete_powder",
            "y": 90
          },
          {
            "model": "pink_concrete_powder",
            "y": 180
          },
          {
            "model": "pink_concrete_powder",
            "y": 270
          }
        ]
      }
    },
    "beetroots": {
      "variants": {
        "age=0": {
          "model": "beetroots_stage0"
        },
        "age=1": {
          "model": "beetroots_stage1"
        },
        "age=2": {
          "model": "beetroots_stage2"
        },
        "age=3": {
          "model": "beetroots_stage3"
        }
      }
    },
    "crafting_table": {
      "variants": {
        "normal": {
          "model": "crafting_table"
        }
      }
    },
    "jungle_fence": {
      "multipart": [
        {
          "apply": {
            "model": "jungle_fence_post"
          }
        },
        {
          "when": {
            "north": "true"
          },
          "apply": {
            "model": "jungle_fence_side",
            "uvlock": true
          }
        },
        {
          "when": {
            "east": "true"
          },
          "apply": {
            "model": "jungle_fence_side",
            "y": 90,
            "uvlock": true
          }
        },
        {
          "when": {
            "south": "true"
          },
          "apply": {
            "model": "jungle_fence_side",
            "y": 180,
            "uvlock": true
          }
        },
        {
          "when": {
            "west": "true"
          },
          "apply": {
            "model": "jungle_fence_side",
            "y": 270,
            "uvlock": true
          }
        }
      ]
    },
    "cracked_stonebrick": {
      "variants": {
        "normal": {
          "model": "stonebrick_cracked"
        }
      }
    },
    "purple_wool": {
      "variants": {
        "normal": {
          "model": "purple_wool"
        }
      }
    },
    "gray_carpet": {
      "variants": {
        "normal": {
          "model": "carpet_gray"
        }
      }
    },
    "birch_fence_gate": {
      "variants": {
        "facing=south,in_wall=false,open=false": {
          "model": "birch_fence_gate_closed",
          "uvlock": true
        },
        "facing=west,in_wall=false,open=false": {
          "model": "birch_fence_gate_closed",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=false,open=false": {
          "model": "birch_fence_gate_closed",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=false,open=false": {
          "model": "birch_fence_gate_closed",
          "uvlock": true,
          "y": 270
        },
        "facing=south,in_wall=false,open=true": {
          "model": "birch_fence_gate_open",
          "uvlock": true
        },
        "facing=west,in_wall=false,open=true": {
          "model": "birch_fence_gate_open",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=false,open=true": {
          "model": "birch_fence_gate_open",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=false,open=true": {
          "model": "birch_fence_gate_open",
          "uvlock": true,
          "y": 270
        },
        "facing=south,in_wall=true,open=false": {
          "model": "birch_wall_gate_closed",
          "uvlock": true
        },
        "facing=west,in_wall=true,open=false": {
          "model": "birch_wall_gate_closed",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=true,open=false": {
          "model": "birch_wall_gate_closed",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=true,open=false": {
          "model": "birch_wall_gate_closed",
          "uvlock": true,
          "y": 270
        },
        "facing=south,in_wall=true,open=true": {
          "model": "birch_wall_gate_open",
          "uvlock": true
        },
        "facing=west,in_wall=true,open=true": {
          "model": "birch_wall_gate_open",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=true,open=true": {
          "model": "birch_wall_gate_open",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=true,open=true": {
          "model": "birch_wall_gate_open",
          "uvlock": true,
          "y": 270
        }
      }
    },
    "carrots": {
      "variants": {
        "age=0": {
          "model": "carrots_stage0"
        },
        "age=1": {
          "model": "carrots_stage0"
        },
        "age=2": {
          "model": "carrots_stage1"
        },
        "age=3": {
          "model": "carrots_stage1"
        },
        "age=4": {
          "model": "carrots_stage2"
        },
        "age=5": {
          "model": "carrots_stage2"
        },
        "age=6": {
          "model": "carrots_stage2"
        },
        "age=7": {
          "model": "carrots_stage3"
        }
      }
    },
    "pink_concrete": {
      "variants": {
        "normal": {
          "model": "pink_concrete"
        }
      }
    },
    "black_concrete": {
      "variants": {
        "normal": {
          "model": "black_concrete"
        }
      }
    },
    "nether_brick_stairs": {
      "variants": {
        "facing=east,half=bottom,shape=straight": {
          "model": "nether_brick_stairs"
        },
        "facing=west,half=bottom,shape=straight": {
          "model": "nether_brick_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=straight": {
          "model": "nether_brick_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=straight": {
          "model": "nether_brick_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_right": {
          "model": "nether_brick_outer_stairs"
        },
        "facing=west,half=bottom,shape=outer_right": {
          "model": "nether_brick_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_right": {
          "model": "nether_brick_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=outer_right": {
          "model": "nether_brick_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_left": {
          "model": "nether_brick_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=outer_left": {
          "model": "nether_brick_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_left": {
          "model": "nether_brick_outer_stairs"
        },
        "facing=north,half=bottom,shape=outer_left": {
          "model": "nether_brick_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_right": {
          "model": "nether_brick_inner_stairs"
        },
        "facing=west,half=bottom,shape=inner_right": {
          "model": "nether_brick_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_right": {
          "model": "nether_brick_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=inner_right": {
          "model": "nether_brick_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_left": {
          "model": "nether_brick_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=inner_left": {
          "model": "nether_brick_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_left": {
          "model": "nether_brick_inner_stairs"
        },
        "facing=north,half=bottom,shape=inner_left": {
          "model": "nether_brick_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=straight": {
          "model": "nether_brick_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=straight": {
          "model": "nether_brick_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=straight": {
          "model": "nether_brick_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=straight": {
          "model": "nether_brick_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_right": {
          "model": "nether_brick_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_right": {
          "model": "nether_brick_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_right": {
          "model": "nether_brick_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_right": {
          "model": "nether_brick_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_left": {
          "model": "nether_brick_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_left": {
          "model": "nether_brick_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_left": {
          "model": "nether_brick_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_left": {
          "model": "nether_brick_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_right": {
          "model": "nether_brick_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_right": {
          "model": "nether_brick_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_right": {
          "model": "nether_brick_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_right": {
          "model": "nether_brick_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_left": {
          "model": "nether_brick_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_left": {
          "model": "nether_brick_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_left": {
          "model": "nether_brick_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_left": {
          "model": "nether_brick_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        }
      }
    },
    "mossy_stonebrick": {
      "variants": {
        "normal": {
          "model": "stonebrick_mossy"
        }
      }
    },
    "enchanting_table": {
      "variants": {
        "normal": {
          "model": "enchanting_table_base"
        }
      }
    },
    "silver_stained_glass_pane": {
      "multipart": [
        {
          "apply": {
            "model": "silver_stained_glass_pane_post"
          }
        },
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "silver_stained_glass_pane_side"
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "silver_stained_glass_pane_side",
            "y": 90
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "silver_stained_glass_pane_side_alt"
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "silver_stained_glass_pane_side_alt",
            "y": 90
          }
        },
        {
          "when": {
            "north": false
          },
          "apply": {
            "model": "silver_stained_glass_pane_noside"
          }
        },
        {
          "when": {
            "east": false
          },
          "apply": {
            "model": "silver_stained_glass_pane_noside_alt"
          }
        },
        {
          "when": {
            "south": false
          },
          "apply": {
            "model": "silver_stained_glass_pane_noside_alt",
            "y": 90
          }
        },
        {
          "when": {
            "west": false
          },
          "apply": {
            "model": "silver_stained_glass_pane_noside",
            "y": 270
          }
        }
      ]
    },
    "orange_concrete_powder": {
      "variants": {
        "normal": [
          {
            "model": "orange_concrete_powder"
          },
          {
            "model": "orange_concrete_powder",
            "y": 90
          },
          {
            "model": "orange_concrete_powder",
            "y": 180
          },
          {
            "model": "orange_concrete_powder",
            "y": 270
          }
        ]
      }
    },
    "white_tulip": {
      "variants": {
        "normal": {
          "model": "white_tulip"
        }
      }
    },
    "pink_stained_glass_pane": {
      "multipart": [
        {
          "apply": {
            "model": "pink_stained_glass_pane_post"
          }
        },
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "pink_stained_glass_pane_side"
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "pink_stained_glass_pane_side",
            "y": 90
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "pink_stained_glass_pane_side_alt"
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "pink_stained_glass_pane_side_alt",
            "y": 90
          }
        },
        {
          "when": {
            "north": false
          },
          "apply": {
            "model": "pink_stained_glass_pane_noside"
          }
        },
        {
          "when": {
            "east": false
          },
          "apply": {
            "model": "pink_stained_glass_pane_noside_alt"
          }
        },
        {
          "when": {
            "south": false
          },
          "apply": {
            "model": "pink_stained_glass_pane_noside_alt",
            "y": 90
          }
        },
        {
          "when": {
            "west": false
          },
          "apply": {
            "model": "pink_stained_glass_pane_noside",
            "y": 270
          }
        }
      ]
    },
    "brown_wool": {
      "variants": {
        "normal": {
          "model": "brown_wool"
        }
      }
    },
    "prismarine": {
      "variants": {
        "normal": {
          "model": "prismarine_rough"
        }
      }
    },
    "green_carpet": {
      "variants": {
        "normal": {
          "model": "carpet_green"
        }
      }
    },
    "flower_pot": {
      "variants": {
        "contents=empty": {
          "model": "flower_pot"
        },
        "contents=rose": {
          "model": "flower_pot_rose"
        },
        "contents=blue_orchid": {
          "model": "flower_pot_orchid"
        },
        "contents=allium": {
          "model": "flower_pot_allium"
        },
        "contents=houstonia": {
          "model": "flower_pot_houstonia"
        },
        "contents=red_tulip": {
          "model": "flower_pot_tulip_red"
        },
        "contents=orange_tulip": {
          "model": "flower_pot_tulip_orange"
        },
        "contents=white_tulip": {
          "model": "flower_pot_tulip_white"
        },
        "contents=pink_tulip": {
          "model": "flower_pot_tulip_pink"
        },
        "contents=oxeye_daisy": {
          "model": "flower_pot_daisy"
        },
        "contents=dandelion": {
          "model": "flower_pot_dandelion"
        },
        "contents=oak_sapling": {
          "model": "flower_pot_oak"
        },
        "contents=spruce_sapling": {
          "model": "flower_pot_spruce"
        },
        "contents=birch_sapling": {
          "model": "flower_pot_birch"
        },
        "contents=jungle_sapling": {
          "model": "flower_pot_jungle"
        },
        "contents=acacia_sapling": {
          "model": "flower_pot_acacia"
        },
        "contents=dark_oak_sapling": {
          "model": "flower_pot_dark_oak"
        },
        "contents=mushroom_red": {
          "model": "flower_pot_mushroom_red"
        },
        "contents=mushroom_brown": {
          "model": "flower_pot_mushroom_brown"
        },
        "contents=dead_bush": {
          "model": "flower_pot_dead_bush"
        },
        "contents=fern": {
          "model": "flower_pot_fern"
        },
        "contents=cactus": {
          "model": "flower_pot_cactus"
        }
      }
    },
    "birch_slab": {
      "variants": {
        "half=bottom": {
          "model": "half_slab_birch"
        },
        "half=top": {
          "model": "upper_slab_birch"
        }
      }
    },
    "green_stained_hardened_clay": {
      "variants": {
        "normal": {
          "model": "hardened_clay_green"
        }
      }
    },
    "acacia_log": {
      "variants": {
        "axis=y": {
          "model": "acacia_log"
        },
        "axis=z": {
          "model": "acacia_log",
          "x": 90
        },
        "axis=x": {
          "model": "acacia_log",
          "x": 90,
          "y": 90
        },
        "axis=none": {
          "model": "acacia_bark"
        }
      }
    },
    "houstonia": {
      "variants": {
        "normal": {
          "model": "houstonia"
        }
      }
    },
    "gray_concrete_powder": {
      "variants": {
        "normal": [
          {
            "model": "gray_concrete_powder"
          },
          {
            "model": "gray_concrete_powder",
            "y": 90
          },
          {
            "model": "gray_concrete_powder",
            "y": 180
          },
          {
            "model": "gray_concrete_powder",
            "y": 270
          }
        ]
      }
    },
    "activator_rail": {
      "variants": {
        "powered=false,shape=north_south": {
          "model": "activator_rail_flat"
        },
        "powered=false,shape=east_west": {
          "model": "activator_rail_flat",
          "y": 90
        },
        "powered=false,shape=ascending_east": {
          "model": "activator_rail_raised_ne",
          "y": 90
        },
        "powered=false,shape=ascending_west": {
          "model": "activator_rail_raised_sw",
          "y": 90
        },
        "powered=false,shape=ascending_north": {
          "model": "activator_rail_raised_ne"
        },
        "powered=false,shape=ascending_south": {
          "model": "activator_rail_raised_sw"
        },
        "powered=true,shape=north_south": {
          "model": "activator_rail_active_flat"
        },
        "powered=true,shape=east_west": {
          "model": "activator_rail_active_flat",
          "y": 90
        },
        "powered=true,shape=ascending_east": {
          "model": "activator_rail_active_raised_ne",
          "y": 90
        },
        "powered=true,shape=ascending_west": {
          "model": "activator_rail_active_raised_sw",
          "y": 90
        },
        "powered=true,shape=ascending_north": {
          "model": "activator_rail_active_raised_ne"
        },
        "powered=true,shape=ascending_south": {
          "model": "activator_rail_active_raised_sw"
        }
      }
    },
    "yellow_concrete": {
      "variants": {
        "normal": {
          "model": "yellow_concrete"
        }
      }
    },
    "red_mushroom": {
      "variants": {
        "normal": {
          "model": "red_mushroom"
        }
      }
    },
    "light_blue_concrete": {
      "variants": {
        "normal": {
          "model": "light_blue_concrete"
        }
      }
    },
    "oak_double_slab": {
      "variants": {
        "normal": {
          "model": "oak_planks"
        }
      }
    },
    "jungle_double_slab": {
      "variants": {
        "normal": {
          "model": "jungle_planks"
        }
      }
    },
    "brown_concrete": {
      "variants": {
        "normal": {
          "model": "brown_concrete"
        }
      }
    },
    "farmland": {
      "variants": {
        "moisture=0": {
          "model": "farmland_dry"
        },
        "moisture=1": {
          "model": "farmland_dry"
        },
        "moisture=2": {
          "model": "farmland_dry"
        },
        "moisture=3": {
          "model": "farmland_dry"
        },
        "moisture=4": {
          "model": "farmland_dry"
        },
        "moisture=5": {
          "model": "farmland_dry"
        },
        "moisture=6": {
          "model": "farmland_dry"
        },
        "moisture=7": {
          "model": "farmland_moist"
        }
      }
    },
    "dragon_egg": {
      "variants": {
        "normal": {
          "model": "dragon_egg"
        }
      }
    },
    "magenta_stained_hardened_clay": {
      "variants": {
        "normal": {
          "model": "hardened_clay_magenta"
        }
      }
    },
    "hay_block": {
      "variants": {
        "axis=y": {
          "model": "hay"
        },
        "axis=z": {
          "model": "hay",
          "x": 90
        },
        "axis=x": {
          "model": "hay",
          "x": 90,
          "y": 90
        }
      }
    },
    "potatoes": {
      "variants": {
        "age=0": {
          "model": "potatoes_stage0"
        },
        "age=1": {
          "model": "potatoes_stage0"
        },
        "age=2": {
          "model": "potatoes_stage1"
        },
        "age=3": {
          "model": "potatoes_stage1"
        },
        "age=4": {
          "model": "potatoes_stage2"
        },
        "age=5": {
          "model": "potatoes_stage2"
        },
        "age=6": {
          "model": "potatoes_stage2"
        },
        "age=7": {
          "model": "potatoes_stage3"
        }
      }
    },
    "lime_concrete_powder": {
      "variants": {
        "normal": [
          {
            "model": "lime_concrete_powder"
          },
          {
            "model": "lime_concrete_powder",
            "y": 90
          },
          {
            "model": "lime_concrete_powder",
            "y": 180
          },
          {
            "model": "lime_concrete_powder",
            "y": 270
          }
        ]
      }
    },
    "cyan_stained_glass_pane": {
      "multipart": [
        {
          "apply": {
            "model": "cyan_stained_glass_pane_post"
          }
        },
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "cyan_stained_glass_pane_side"
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "cyan_stained_glass_pane_side",
            "y": 90
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "cyan_stained_glass_pane_side_alt"
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "cyan_stained_glass_pane_side_alt",
            "y": 90
          }
        },
        {
          "when": {
            "north": false
          },
          "apply": {
            "model": "cyan_stained_glass_pane_noside"
          }
        },
        {
          "when": {
            "east": false
          },
          "apply": {
            "model": "cyan_stained_glass_pane_noside_alt"
          }
        },
        {
          "when": {
            "south": false
          },
          "apply": {
            "model": "cyan_stained_glass_pane_noside_alt",
            "y": 90
          }
        },
        {
          "when": {
            "west": false
          },
          "apply": {
            "model": "cyan_stained_glass_pane_noside",
            "y": 270
          }
        }
      ]
    },
    "light_blue_stained_glass": {
      "variants": {
        "normal": {
          "model": "glass_light_blue"
        }
      }
    },
    "wood_old_slab": {
      "variants": {
        "half=bottom": {
          "model": "half_slab_oak"
        },
        "half=top": {
          "model": "upper_slab_oak"
        }
      }
    },
    "jungle_leaves": {
      "variants": {
        "normal": {
          "model": "jungle_leaves"
        }
      }
    },
    "snow": {
      "variants": {
        "normal": {
          "model": "snow"
        }
      }
    },
    "spruce_leaves": {
      "variants": {
        "normal": {
          "model": "spruce_leaves"
        }
      }
    },
    "brick_double_slab": {
      "variants": {
        "normal": {
          "model": "brick"
        },
        "all": {
          "model": "brick"
        }
      }
    },
    "cake": {
      "variants": {
        "bites=0": {
          "model": "cake_uneaten"
        },
        "bites=1": {
          "model": "cake_slice1"
        },
        "bites=2": {
          "model": "cake_slice2"
        },
        "bites=3": {
          "model": "cake_slice3"
        },
        "bites=4": {
          "model": "cake_slice4"
        },
        "bites=5": {
          "model": "cake_slice5"
        },
        "bites=6": {
          "model": "cake_slice6"
        }
      }
    },
    "fence_gate": {
      "variants": {
        "facing=south,in_wall=false,open=false": {
          "model": "oak_fence_gate_closed",
          "uvlock": true
        },
        "facing=west,in_wall=false,open=false": {
          "model": "oak_fence_gate_closed",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=false,open=false": {
          "model": "oak_fence_gate_closed",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=false,open=false": {
          "model": "oak_fence_gate_closed",
          "uvlock": true,
          "y": 270
        },
        "facing=south,in_wall=false,open=true": {
          "model": "oak_fence_gate_open",
          "uvlock": true
        },
        "facing=west,in_wall=false,open=true": {
          "model": "oak_fence_gate_open",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=false,open=true": {
          "model": "oak_fence_gate_open",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=false,open=true": {
          "model": "oak_fence_gate_open",
          "uvlock": true,
          "y": 270
        },
        "facing=south,in_wall=true,open=false": {
          "model": "oak_wall_gate_closed",
          "uvlock": true
        },
        "facing=west,in_wall=true,open=false": {
          "model": "oak_wall_gate_closed",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=true,open=false": {
          "model": "oak_wall_gate_closed",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=true,open=false": {
          "model": "oak_wall_gate_closed",
          "uvlock": true,
          "y": 270
        },
        "facing=south,in_wall=true,open=true": {
          "model": "oak_wall_gate_open",
          "uvlock": true
        },
        "facing=west,in_wall=true,open=true": {
          "model": "oak_wall_gate_open",
          "uvlock": true,
          "y": 90
        },
        "facing=north,in_wall=true,open=true": {
          "model": "oak_wall_gate_open",
          "uvlock": true,
          "y": 180
        },
        "facing=east,in_wall=true,open=true": {
          "model": "oak_wall_gate_open",
          "uvlock": true,
          "y": 270
        }
      }
    },
    "birch_fence": {
      "multipart": [
        {
          "apply": {
            "model": "birch_fence_post"
          }
        },
        {
          "when": {
            "north": "true"
          },
          "apply": {
            "model": "birch_fence_side",
            "uvlock": true
          }
        },
        {
          "when": {
            "east": "true"
          },
          "apply": {
            "model": "birch_fence_side",
            "y": 90,
            "uvlock": true
          }
        },
        {
          "when": {
            "south": "true"
          },
          "apply": {
            "model": "birch_fence_side",
            "y": 180,
            "uvlock": true
          }
        },
        {
          "when": {
            "west": "true"
          },
          "apply": {
            "model": "birch_fence_side",
            "y": 270,
            "uvlock": true
          }
        }
      ]
    },
    "red_concrete_powder": {
      "variants": {
        "normal": [
          {
            "model": "red_concrete_powder"
          },
          {
            "model": "red_concrete_powder",
            "y": 90
          },
          {
            "model": "red_concrete_powder",
            "y": 180
          },
          {
            "model": "red_concrete_powder",
            "y": 270
          }
        ]
      }
    },
    "dead_bush": {
      "variants": {
        "normal": {
          "model": "dead_bush"
        }
      }
    },
    "vine": {
      "variants": {
        "east=false,north=false,south=false,up=false,west=false": {
          "model": "vine_1"
        },
        "east=false,north=false,south=true,up=false,west=false": {
          "model": "vine_1"
        },
        "east=false,north=false,south=false,up=false,west=true": {
          "model": "vine_1",
          "y": 90
        },
        "east=false,north=true,south=false,up=false,west=false": {
          "model": "vine_1",
          "y": 180
        },
        "east=true,north=false,south=false,up=false,west=false": {
          "model": "vine_1",
          "y": 270
        },
        "east=true,north=true,south=false,up=false,west=false": {
          "model": "vine_2"
        },
        "east=true,north=false,south=true,up=false,west=false": {
          "model": "vine_2",
          "y": 90
        },
        "east=false,north=false,south=true,up=false,west=true": {
          "model": "vine_2",
          "y": 180
        },
        "east=false,north=true,south=false,up=false,west=true": {
          "model": "vine_2",
          "y": 270
        },
        "east=true,north=false,south=false,up=false,west=true": {
          "model": "vine_2_opposite"
        },
        "east=false,north=true,south=true,up=false,west=false": {
          "model": "vine_2_opposite",
          "y": 90
        },
        "east=true,north=true,south=true,up=false,west=false": {
          "model": "vine_3"
        },
        "east=true,north=false,south=true,up=false,west=true": {
          "model": "vine_3",
          "y": 90
        },
        "east=false,north=true,south=true,up=false,west=true": {
          "model": "vine_3",
          "y": 180
        },
        "east=true,north=true,south=false,up=false,west=true": {
          "model": "vine_3",
          "y": 270
        },
        "east=true,north=true,south=true,up=false,west=true": {
          "model": "vine_4"
        },
        "east=false,north=false,south=false,up=true,west=false": {
          "model": "vine_u"
        },
        "east=false,north=false,south=true,up=true,west=false": {
          "model": "vine_1u"
        },
        "east=false,north=false,south=false,up=true,west=true": {
          "model": "vine_1u",
          "y": 90
        },
        "east=false,north=true,south=false,up=true,west=false": {
          "model": "vine_1u",
          "y": 180
        },
        "east=true,north=false,south=false,up=true,west=false": {
          "model": "vine_1u",
          "y": 270
        },
        "east=true,north=true,south=false,up=true,west=false": {
          "model": "vine_2u"
        },
        "east=true,north=false,south=true,up=true,west=false": {
          "model": "vine_2u",
          "y": 90
        },
        "east=false,north=false,south=true,up=true,west=true": {
          "model": "vine_2u",
          "y": 180
        },
        "east=false,north=true,south=false,up=true,west=true": {
          "model": "vine_2u",
          "y": 270
        },
        "east=true,north=false,south=false,up=true,west=true": {
          "model": "vine_2u_opposite"
        },
        "east=false,north=true,south=true,up=true,west=false": {
          "model": "vine_2u_opposite",
          "y": 90
        },
        "east=true,north=true,south=true,up=true,west=false": {
          "model": "vine_3u"
        },
        "east=true,north=false,south=true,up=true,west=true": {
          "model": "vine_3u",
          "y": 90
        },
        "east=false,north=true,south=true,up=true,west=true": {
          "model": "vine_3u",
          "y": 180
        },
        "east=true,north=true,south=false,up=true,west=true": {
          "model": "vine_3u",
          "y": 270
        },
        "east=true,north=true,south=true,up=true,west=true": {
          "model": "vine_4u"
        }
      }
    },
    "blue_glazed_terracotta": {
      "variants": {
        "facing=south": {
          "model": "blue_glazed_terracotta"
        },
        "facing=west": {
          "model": "blue_glazed_terracotta",
          "y": 90
        },
        "facing=north": {
          "model": "blue_glazed_terracotta",
          "y": 180
        },
        "facing=east": {
          "model": "blue_glazed_terracotta",
          "y": 270
        }
      }
    },
    "unlit_redstone_torch": {
      "variants": {
        "facing=up": {
          "model": "unlit_redstone_torch"
        },
        "facing=east": {
          "model": "unlit_redstone_torch_wall"
        },
        "facing=south": {
          "model": "unlit_redstone_torch_wall",
          "y": 90
        },
        "facing=west": {
          "model": "unlit_redstone_torch_wall",
          "y": 180
        },
        "facing=north": {
          "model": "unlit_redstone_torch_wall",
          "y": 270
        }
      }
    },
    "glass_pane": {
      "multipart": [
        {
          "apply": {
            "model": "glass_pane_post"
          }
        },
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "glass_pane_side"
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "glass_pane_side",
            "y": 90
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "glass_pane_side_alt"
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "glass_pane_side_alt",
            "y": 90
          }
        },
        {
          "when": {
            "north": false
          },
          "apply": {
            "model": "glass_pane_noside"
          }
        },
        {
          "when": {
            "east": false
          },
          "apply": {
            "model": "glass_pane_noside_alt"
          }
        },
        {
          "when": {
            "south": false
          },
          "apply": {
            "model": "glass_pane_noside_alt",
            "y": 90
          }
        },
        {
          "when": {
            "west": false
          },
          "apply": {
            "model": "glass_pane_noside",
            "y": 270
          }
        }
      ]
    },
    "daylight_detector_inverted": {
      "variants": {
        "power=0": {
          "model": "daylight_detector_inverted"
        },
        "power=1": {
          "model": "daylight_detector_inverted"
        },
        "power=2": {
          "model": "daylight_detector_inverted"
        },
        "power=3": {
          "model": "daylight_detector_inverted"
        },
        "power=4": {
          "model": "daylight_detector_inverted"
        },
        "power=5": {
          "model": "daylight_detector_inverted"
        },
        "power=6": {
          "model": "daylight_detector_inverted"
        },
        "power=7": {
          "model": "daylight_detector_inverted"
        },
        "power=8": {
          "model": "daylight_detector_inverted"
        },
        "power=9": {
          "model": "daylight_detector_inverted"
        },
        "power=10": {
          "model": "daylight_detector_inverted"
        },
        "power=11": {
          "model": "daylight_detector_inverted"
        },
        "power=12": {
          "model": "daylight_detector_inverted"
        },
        "power=13": {
          "model": "daylight_detector_inverted"
        },
        "power=14": {
          "model": "daylight_detector_inverted"
        },
        "power=15": {
          "model": "daylight_detector_inverted"
        }
      }
    },
    "sandstone": {
      "variants": {
        "normal": {
          "model": "sandstone_normal"
        }
      }
    },
    "chain_command_block": {
      "variants": {
        "conditional=false,facing=down": {
          "model": "chain_command_block",
          "x": 90
        },
        "conditional=false,facing=up": {
          "model": "chain_command_block",
          "x": 270
        },
        "conditional=false,facing=north": {
          "model": "chain_command_block"
        },
        "conditional=false,facing=south": {
          "model": "chain_command_block",
          "y": 180
        },
        "conditional=false,facing=west": {
          "model": "chain_command_block",
          "y": 270
        },
        "conditional=false,facing=east": {
          "model": "chain_command_block",
          "y": 90
        },
        "conditional=true,facing=down": {
          "model": "chain_command_block_conditional",
          "x": 90
        },
        "conditional=true,facing=up": {
          "model": "chain_command_block_conditional",
          "x": 270
        },
        "conditional=true,facing=north": {
          "model": "chain_command_block_conditional"
        },
        "conditional=true,facing=south": {
          "model": "chain_command_block_conditional",
          "y": 180
        },
        "conditional=true,facing=west": {
          "model": "chain_command_block_conditional",
          "y": 270
        },
        "conditional=true,facing=east": {
          "model": "chain_command_block_conditional",
          "y": 90
        }
      }
    },
    "beacon": {
      "variants": {
        "normal": {
          "model": "beacon"
        }
      }
    },
    "brown_mushroom_block": {
      "variants": {
        "variant=north_west": {
          "model": "brown_mushroom_block_nw"
        },
        "variant=north": {
          "model": "brown_mushroom_block_n"
        },
        "variant=north_east": {
          "model": "brown_mushroom_block_ne"
        },
        "variant=west": {
          "model": "brown_mushroom_block_w"
        },
        "variant=center": {
          "model": "brown_mushroom_block_c"
        },
        "variant=east": {
          "model": "brown_mushroom_block_e"
        },
        "variant=south_west": {
          "model": "brown_mushroom_block_sw"
        },
        "variant=south": {
          "model": "brown_mushroom_block_s"
        },
        "variant=south_east": {
          "model": "brown_mushroom_block_se"
        },
        "variant=stem": {
          "model": "brown_mushroom_block_stem"
        },
        "variant=all_stem": {
          "model": "brown_mushroom_block_stem_all"
        },
        "variant=all_outside": {
          "model": "brown_mushroom_block_cap_all"
        },
        "variant=all_inside": {
          "model": "brown_mushroom_block_inside_all"
        }
      }
    },
    "magma": {
      "variants": {
        "normal": {
          "model": "magma"
        }
      }
    },
    "brewing_stand": {
      "multipart": [
        {
          "apply": {
            "model": "brewing_stand"
          }
        },
        {
          "when": {
            "has_bottle_0": "true"
          },
          "apply": {
            "model": "brewing_stand_bottle0"
          }
        },
        {
          "when": {
            "has_bottle_1": "true"
          },
          "apply": {
            "model": "brewing_stand_bottle1"
          }
        },
        {
          "when": {
            "has_bottle_2": "true"
          },
          "apply": {
            "model": "brewing_stand_bottle2"
          }
        },
        {
          "when": {
            "has_bottle_0": "false"
          },
          "apply": {
            "model": "brewing_stand_empty0"
          }
        },
        {
          "when": {
            "has_bottle_1": "false"
          },
          "apply": {
            "model": "brewing_stand_empty1"
          }
        },
        {
          "when": {
            "has_bottle_2": "false"
          },
          "apply": {
            "model": "brewing_stand_empty2"
          }
        }
      ]
    },
    "redstone_wire": {
      "multipart": [
        {
          "when": {
            "OR": [
              {
                "north": "none",
                "east": "none",
                "south": "none",
                "west": "none"
              },
              {
                "north": "side|up",
                "east": "side|up"
              },
              {
                "east": "side|up",
                "south": "side|up"
              },
              {
                "south": "side|up",
                "west": "side|up"
              },
              {
                "west": "side|up",
                "north": "side|up"
              }
            ]
          },
          "apply": {
            "model": "redstone_dot"
          }
        },
        {
          "when": {
            "OR": [
              {
                "north": "side|up"
              },
              {
                "north": "none",
                "east": "none",
                "south": "side|up",
                "west": "none"
              }
            ]
          },
          "apply": {
            "model": "redstone_side0"
          }
        },
        {
          "when": {
            "OR": [
              {
                "south": "side|up"
              },
              {
                "north": "side|up",
                "east": "none",
                "south": "none",
                "west": "none"
              }
            ]
          },
          "apply": {
            "model": "redstone_side_alt0"
          }
        },
        {
          "when": {
            "OR": [
              {
                "east": "side|up"
              },
              {
                "north": "none",
                "east": "none",
                "south": "none",
                "west": "side|up"
              }
            ]
          },
          "apply": {
            "model": "redstone_side_alt1",
            "y": 270
          }
        },
        {
          "when": {
            "OR": [
              {
                "west": "side|up"
              },
              {
                "north": "none",
                "east": "side|up",
                "south": "none",
                "west": "none"
              }
            ]
          },
          "apply": {
            "model": "redstone_side1",
            "y": 270
          }
        },
        {
          "when": {
            "north": "up"
          },
          "apply": {
            "model": "redstone_up"
          }
        },
        {
          "when": {
            "east": "up"
          },
          "apply": {
            "model": "redstone_up",
            "y": 90
          }
        },
        {
          "when": {
            "south": "up"
          },
          "apply": {
            "model": "redstone_up",
            "y": 180
          }
        },
        {
          "when": {
            "west": "up"
          },
          "apply": {
            "model": "redstone_up",
            "y": 270
          }
        }
      ]
    },
    "furnace": {
      "variants": {
        "facing=north": {
          "model": "furnace"
        },
        "facing=south": {
          "model": "furnace",
          "y": 180
        },
        "facing=west": {
          "model": "furnace",
          "y": 270
        },
        "facing=east": {
          "model": "furnace",
          "y": 90
        }
      }
    },
    "dirt": {
      "variants": {
        "normal": [
          {
            "model": "dirt"
          },
          {
            "model": "dirt",
            "y": 90
          },
          {
            "model": "dirt",
            "y": 180
          },
          {
            "model": "dirt",
            "y": 270
          }
        ]
      }
    },
    "dark_oak_sapling": {
      "variants": {
        "stage=0": {
          "model": "dark_oak_sapling"
        },
        "stage=1": {
          "model": "dark_oak_sapling"
        }
      }
    },
    "acacia_stairs": {
      "variants": {
        "facing=east,half=bottom,shape=straight": {
          "model": "acacia_stairs"
        },
        "facing=west,half=bottom,shape=straight": {
          "model": "acacia_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=straight": {
          "model": "acacia_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=straight": {
          "model": "acacia_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_right": {
          "model": "acacia_outer_stairs"
        },
        "facing=west,half=bottom,shape=outer_right": {
          "model": "acacia_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_right": {
          "model": "acacia_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=outer_right": {
          "model": "acacia_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_left": {
          "model": "acacia_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=outer_left": {
          "model": "acacia_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_left": {
          "model": "acacia_outer_stairs"
        },
        "facing=north,half=bottom,shape=outer_left": {
          "model": "acacia_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_right": {
          "model": "acacia_inner_stairs"
        },
        "facing=west,half=bottom,shape=inner_right": {
          "model": "acacia_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_right": {
          "model": "acacia_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=inner_right": {
          "model": "acacia_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_left": {
          "model": "acacia_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=inner_left": {
          "model": "acacia_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_left": {
          "model": "acacia_inner_stairs"
        },
        "facing=north,half=bottom,shape=inner_left": {
          "model": "acacia_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=straight": {
          "model": "acacia_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=straight": {
          "model": "acacia_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=straight": {
          "model": "acacia_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=straight": {
          "model": "acacia_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_right": {
          "model": "acacia_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_right": {
          "model": "acacia_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_right": {
          "model": "acacia_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_right": {
          "model": "acacia_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_left": {
          "model": "acacia_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_left": {
          "model": "acacia_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_left": {
          "model": "acacia_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_left": {
          "model": "acacia_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_right": {
          "model": "acacia_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_right": {
          "model": "acacia_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_right": {
          "model": "acacia_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_right": {
          "model": "acacia_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_left": {
          "model": "acacia_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_left": {
          "model": "acacia_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_left": {
          "model": "acacia_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_left": {
          "model": "acacia_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        }
      }
    },
    "emerald_block": {
      "variants": {
        "normal": {
          "model": "emerald_block"
        }
      }
    },
    "white_glazed_terracotta": {
      "variants": {
        "facing=south": {
          "model": "white_glazed_terracotta"
        },
        "facing=west": {
          "model": "white_glazed_terracotta",
          "y": 90
        },
        "facing=north": {
          "model": "white_glazed_terracotta",
          "y": 180
        },
        "facing=east": {
          "model": "white_glazed_terracotta",
          "y": 270
        }
      }
    },
    "light_blue_glazed_terracotta": {
      "variants": {
        "facing=south": {
          "model": "light_blue_glazed_terracotta"
        },
        "facing=west": {
          "model": "light_blue_glazed_terracotta",
          "y": 90
        },
        "facing=north": {
          "model": "light_blue_glazed_terracotta",
          "y": 180
        },
        "facing=east": {
          "model": "light_blue_glazed_terracotta",
          "y": 270
        }
      }
    },
    "syringa": {
      "variants": {
        "half=lower": {
          "model": "double_syringa_bottom"
        },
        "half=upper": {
          "model": "double_syringa_top"
        }
      }
    },
    "quartz_block": {
      "variants": {
        "normal": {
          "model": "quartz_normal"
        }
      }
    },
    "birch_log": {
      "variants": {
        "axis=y": {
          "model": "birch_log"
        },
        "axis=z": {
          "model": "birch_log",
          "x": 90
        },
        "axis=x": {
          "model": "birch_log",
          "x": 90,
          "y": 90
        },
        "axis=none": {
          "model": "birch_bark"
        }
      }
    },
    "blue_orchid": {
      "variants": {
        "normal": {
          "model": "orchid"
        }
      }
    },
    "oak_log": {
      "variants": {
        "axis=y": {
          "model": "oak_log"
        },
        "axis=z": {
          "model": "oak_log",
          "x": 90
        },
        "axis=x": {
          "model": "oak_log",
          "x": 90,
          "y": 90
        },
        "axis=none": {
          "model": "oak_bark"
        }
      }
    },
    "birch_double_slab": {
      "variants": {
        "normal": {
          "model": "birch_planks"
        }
      }
    },
    "birch_leaves": {
      "variants": {
        "normal": {
          "model": "birch_leaves"
        }
      }
    },
    "lit_furnace": {
      "variants": {
        "facing=north": {
          "model": "lit_furnace"
        },
        "facing=south": {
          "model": "lit_furnace",
          "y": 180
        },
        "facing=west": {
          "model": "lit_furnace",
          "y": 270
        },
        "facing=east": {
          "model": "lit_furnace",
          "y": 90
        }
      }
    },
    "coal_block": {
      "variants": {
        "normal": {
          "model": "coal_block"
        }
      }
    },
    "sandstone_double_slab": {
      "variants": {
        "normal": {
          "model": "sandstone_normal"
        },
        "all": {
          "model": "sandstone_all"
        }
      }
    },
    "hopper": {
      "variants": {
        "facing=down": {
          "model": "hopper_down"
        },
        "facing=north": {
          "model": "hopper_side"
        },
        "facing=south": {
          "model": "hopper_side",
          "y": 180
        },
        "facing=west": {
          "model": "hopper_side",
          "y": 270
        },
        "facing=east": {
          "model": "hopper_side",
          "y": 90
        }
      }
    },
    "yellow_stained_glass": {
      "variants": {
        "normal": {
          "model": "glass_yellow"
        }
      }
    },
    "black_carpet": {
      "variants": {
        "normal": {
          "model": "carpet_black"
        }
      }
    },
    "brown_stained_hardened_clay": {
      "variants": {
        "normal": {
          "model": "hardened_clay_brown"
        }
      }
    },
    "red_stained_glass_pane": {
      "multipart": [
        {
          "apply": {
            "model": "red_stained_glass_pane_post"
          }
        },
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "red_stained_glass_pane_side"
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "red_stained_glass_pane_side",
            "y": 90
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "red_stained_glass_pane_side_alt"
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "red_stained_glass_pane_side_alt",
            "y": 90
          }
        },
        {
          "when": {
            "north": false
          },
          "apply": {
            "model": "red_stained_glass_pane_noside"
          }
        },
        {
          "when": {
            "east": false
          },
          "apply": {
            "model": "red_stained_glass_pane_noside_alt"
          }
        },
        {
          "when": {
            "south": false
          },
          "apply": {
            "model": "red_stained_glass_pane_noside_alt",
            "y": 90
          }
        },
        {
          "when": {
            "west": false
          },
          "apply": {
            "model": "red_stained_glass_pane_noside",
            "y": 270
          }
        }
      ]
    },
    "piston_head": {
      "variants": {
        "facing=down,short=false,type=normal": {
          "model": "piston_head_normal",
          "x": 90
        },
        "facing=up,short=false,type=normal": {
          "model": "piston_head_normal",
          "x": 270
        },
        "facing=north,short=false,type=normal": {
          "model": "piston_head_normal"
        },
        "facing=south,short=false,type=normal": {
          "model": "piston_head_normal",
          "y": 180
        },
        "facing=west,short=false,type=normal": {
          "model": "piston_head_normal",
          "y": 270
        },
        "facing=east,short=false,type=normal": {
          "model": "piston_head_normal",
          "y": 90
        },
        "facing=down,short=false,type=sticky": {
          "model": "piston_head_sticky",
          "x": 90
        },
        "facing=up,short=false,type=sticky": {
          "model": "piston_head_sticky",
          "x": 270
        },
        "facing=north,short=false,type=sticky": {
          "model": "piston_head_sticky"
        },
        "facing=south,short=false,type=sticky": {
          "model": "piston_head_sticky",
          "y": 180
        },
        "facing=west,short=false,type=sticky": {
          "model": "piston_head_sticky",
          "y": 270
        },
        "facing=east,short=false,type=sticky": {
          "model": "piston_head_sticky",
          "y": 90
        },
        "facing=down,short=true,type=normal": {
          "model": "piston_head_short_normal",
          "x": 90
        },
        "facing=up,short=true,type=normal": {
          "model": "piston_head_short_normal",
          "x": 270
        },
        "facing=north,short=true,type=normal": {
          "model": "piston_head_short_normal"
        },
        "facing=south,short=true,type=normal": {
          "model": "piston_head_short_normal",
          "y": 180
        },
        "facing=west,short=true,type=normal": {
          "model": "piston_head_short_normal",
          "y": 270
        },
        "facing=east,short=true,type=normal": {
          "model": "piston_head_short_normal",
          "y": 90
        },
        "facing=down,short=true,type=sticky": {
          "model": "piston_head_short_sticky",
          "x": 90
        },
        "facing=up,short=true,type=sticky": {
          "model": "piston_head_short_sticky",
          "x": 270
        },
        "facing=north,short=true,type=sticky": {
          "model": "piston_head_short_sticky"
        },
        "facing=south,short=true,type=sticky": {
          "model": "piston_head_short_sticky",
          "y": 180
        },
        "facing=west,short=true,type=sticky": {
          "model": "piston_head_short_sticky",
          "y": 270
        },
        "facing=east,short=true,type=sticky": {
          "model": "piston_head_short_sticky",
          "y": 90
        }
      }
    },
    "purpur_stairs": {
      "variants": {
        "facing=east,half=bottom,shape=straight": {
          "model": "purpur_stairs"
        },
        "facing=west,half=bottom,shape=straight": {
          "model": "purpur_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=straight": {
          "model": "purpur_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=straight": {
          "model": "purpur_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_right": {
          "model": "purpur_outer_stairs"
        },
        "facing=west,half=bottom,shape=outer_right": {
          "model": "purpur_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_right": {
          "model": "purpur_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=outer_right": {
          "model": "purpur_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_left": {
          "model": "purpur_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=outer_left": {
          "model": "purpur_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_left": {
          "model": "purpur_outer_stairs"
        },
        "facing=north,half=bottom,shape=outer_left": {
          "model": "purpur_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_right": {
          "model": "purpur_inner_stairs"
        },
        "facing=west,half=bottom,shape=inner_right": {
          "model": "purpur_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_right": {
          "model": "purpur_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=inner_right": {
          "model": "purpur_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_left": {
          "model": "purpur_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=inner_left": {
          "model": "purpur_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_left": {
          "model": "purpur_inner_stairs"
        },
        "facing=north,half=bottom,shape=inner_left": {
          "model": "purpur_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=straight": {
          "model": "purpur_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=straight": {
          "model": "purpur_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=straight": {
          "model": "purpur_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=straight": {
          "model": "purpur_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_right": {
          "model": "purpur_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_right": {
          "model": "purpur_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_right": {
          "model": "purpur_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_right": {
          "model": "purpur_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_left": {
          "model": "purpur_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_left": {
          "model": "purpur_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_left": {
          "model": "purpur_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_left": {
          "model": "purpur_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_right": {
          "model": "purpur_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_right": {
          "model": "purpur_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_right": {
          "model": "purpur_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_right": {
          "model": "purpur_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_left": {
          "model": "purpur_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_left": {
          "model": "purpur_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_left": {
          "model": "purpur_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_left": {
          "model": "purpur_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        }
      }
    },
    "lime_stained_glass": {
      "variants": {
        "normal": {
          "model": "glass_lime"
        }
      }
    },
    "pink_wool": {
      "variants": {
        "normal": {
          "model": "pink_wool"
        }
      }
    },
    "yellow_carpet": {
      "variants": {
        "normal": {
          "model": "carpet_yellow"
        }
      }
    },
    "light_blue_stained_glass_pane": {
      "multipart": [
        {
          "apply": {
            "model": "light_blue_stained_glass_pane_post"
          }
        },
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "light_blue_stained_glass_pane_side"
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "light_blue_stained_glass_pane_side",
            "y": 90
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "light_blue_stained_glass_pane_side_alt"
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "light_blue_stained_glass_pane_side_alt",
            "y": 90
          }
        },
        {
          "when": {
            "north": false
          },
          "apply": {
            "model": "light_blue_stained_glass_pane_noside"
          }
        },
        {
          "when": {
            "east": false
          },
          "apply": {
            "model": "light_blue_stained_glass_pane_noside_alt"
          }
        },
        {
          "when": {
            "south": false
          },
          "apply": {
            "model": "light_blue_stained_glass_pane_noside_alt",
            "y": 90
          }
        },
        {
          "when": {
            "west": false
          },
          "apply": {
            "model": "light_blue_stained_glass_pane_noside",
            "y": 270
          }
        }
      ]
    },
    "red_sandstone_double_slab": {
      "variants": {
        "normal": {
          "model": "red_sandstone_normal"
        },
        "all": {
          "model": "red_sandstone_all"
        }
      }
    },
    "green_stained_glass_pane": {
      "multipart": [
        {
          "apply": {
            "model": "green_stained_glass_pane_post"
          }
        },
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "green_stained_glass_pane_side"
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "green_stained_glass_pane_side",
            "y": 90
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "green_stained_glass_pane_side_alt"
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "green_stained_glass_pane_side_alt",
            "y": 90
          }
        },
        {
          "when": {
            "north": false
          },
          "apply": {
            "model": "green_stained_glass_pane_noside"
          }
        },
        {
          "when": {
            "east": false
          },
          "apply": {
            "model": "green_stained_glass_pane_noside_alt"
          }
        },
        {
          "when": {
            "south": false
          },
          "apply": {
            "model": "green_stained_glass_pane_noside_alt",
            "y": 90
          }
        },
        {
          "when": {
            "west": false
          },
          "apply": {
            "model": "green_stained_glass_pane_noside",
            "y": 270
          }
        }
      ]
    },
    "tripwire": {
      "variants": {
        "attached=false,east=false,north=false,south=false,west=false": {
          "model": "tripwire_ns"
        },
        "attached=false,east=false,north=true,south=false,west=false": {
          "model": "tripwire_n"
        },
        "attached=false,east=false,north=false,south=true,west=false": {
          "model": "tripwire_n",
          "y": 180
        },
        "attached=false,east=true,north=false,south=false,west=false": {
          "model": "tripwire_n",
          "y": 90
        },
        "attached=false,east=false,north=false,south=false,west=true": {
          "model": "tripwire_n",
          "y": 270
        },
        "attached=false,east=true,north=true,south=false,west=false": {
          "model": "tripwire_ne"
        },
        "attached=false,east=true,north=false,south=true,west=false": {
          "model": "tripwire_ne",
          "y": 90
        },
        "attached=false,east=false,north=false,south=true,west=true": {
          "model": "tripwire_ne",
          "y": 180
        },
        "attached=false,east=false,north=true,south=false,west=true": {
          "model": "tripwire_ne",
          "y": 270
        },
        "attached=false,east=false,north=true,south=true,west=false": {
          "model": "tripwire_ns"
        },
        "attached=false,east=true,north=false,south=false,west=true": {
          "model": "tripwire_ns",
          "y": 90
        },
        "attached=false,east=true,north=true,south=true,west=false": {
          "model": "tripwire_nse"
        },
        "attached=false,east=true,north=false,south=true,west=true": {
          "model": "tripwire_nse",
          "y": 90
        },
        "attached=false,east=false,north=true,south=true,west=true": {
          "model": "tripwire_nse",
          "y": 180
        },
        "attached=false,east=true,north=true,south=false,west=true": {
          "model": "tripwire_nse",
          "y": 270
        },
        "attached=false,east=true,north=true,south=true,west=true": {
          "model": "tripwire_nsew"
        },
        "attached=true,east=false,north=false,south=false,west=false": {
          "model": "tripwire_attached_ns"
        },
        "attached=true,east=false,north=true,south=false,west=false": {
          "model": "tripwire_attached_n"
        },
        "attached=true,east=false,north=false,south=true,west=false": {
          "model": "tripwire_attached_n",
          "y": 180
        },
        "attached=true,east=true,north=false,south=false,west=false": {
          "model": "tripwire_attached_n",
          "y": 90
        },
        "attached=true,east=false,north=false,south=false,west=true": {
          "model": "tripwire_attached_n",
          "y": 270
        },
        "attached=true,east=true,north=true,south=false,west=false": {
          "model": "tripwire_attached_ne"
        },
        "attached=true,east=true,north=false,south=true,west=false": {
          "model": "tripwire_attached_ne",
          "y": 90
        },
        "attached=true,east=false,north=false,south=true,west=true": {
          "model": "tripwire_attached_ne",
          "y": 180
        },
        "attached=true,east=false,north=true,south=false,west=true": {
          "model": "tripwire_attached_ne",
          "y": 270
        },
        "attached=true,east=false,north=true,south=true,west=false": {
          "model": "tripwire_attached_ns"
        },
        "attached=true,east=true,north=false,south=false,west=true": {
          "model": "tripwire_attached_ns",
          "y": 90
        },
        "attached=true,east=true,north=true,south=true,west=false": {
          "model": "tripwire_attached_nse"
        },
        "attached=true,east=true,north=false,south=true,west=true": {
          "model": "tripwire_attached_nse",
          "y": 90
        },
        "attached=true,east=false,north=true,south=true,west=true": {
          "model": "tripwire_attached_nse",
          "y": 180
        },
        "attached=true,east=true,north=true,south=false,west=true": {
          "model": "tripwire_attached_nse",
          "y": 270
        },
        "attached=true,east=true,north=true,south=true,west=true": {
          "model": "tripwire_attached_nsew"
        }
      }
    },
    "granite": {
      "variants": {
        "normal": {
          "model": "granite"
        }
      }
    },
    "blue_concrete_powder": {
      "variants": {
        "normal": [
          {
            "model": "blue_concrete_powder"
          },
          {
            "model": "blue_concrete_powder",
            "y": 90
          },
          {
            "model": "blue_concrete_powder",
            "y": 180
          },
          {
            "model": "blue_concrete_powder",
            "y": 270
          }
        ]
      }
    },
    "stone_brick_double_slab": {
      "variants": {
        "normal": {
          "model": "stonebrick_normal"
        },
        "all": {
          "model": "stonebrick_normal"
        }
      }
    },
    "red_carpet": {
      "variants": {
        "normal": {
          "model": "carpet_red"
        }
      }
    },
    "torch": {
      "variants": {
        "facing=up": {
          "model": "normal_torch"
        },
        "facing=east": {
          "model": "normal_torch_wall"
        },
        "facing=south": {
          "model": "normal_torch_wall",
          "y": 90
        },
        "facing=west": {
          "model": "normal_torch_wall",
          "y": 180
        },
        "facing=north": {
          "model": "normal_torch_wall",
          "y": 270
        }
      }
    },
    "green_concrete_powder": {
      "variants": {
        "normal": [
          {
            "model": "green_concrete_powder"
          },
          {
            "model": "green_concrete_powder",
            "y": 90
          },
          {
            "model": "green_concrete_powder",
            "y": 180
          },
          {
            "model": "green_concrete_powder",
            "y": 270
          }
        ]
      }
    },
    "smooth_granite": {
      "variants": {
        "normal": {
          "model": "granite_smooth"
        }
      }
    },
    "red_sandstone_stairs": {
      "variants": {
        "facing=east,half=bottom,shape=straight": {
          "model": "red_sandstone_stairs"
        },
        "facing=west,half=bottom,shape=straight": {
          "model": "red_sandstone_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=straight": {
          "model": "red_sandstone_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=straight": {
          "model": "red_sandstone_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_right": {
          "model": "red_sandstone_outer_stairs"
        },
        "facing=west,half=bottom,shape=outer_right": {
          "model": "red_sandstone_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_right": {
          "model": "red_sandstone_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=outer_right": {
          "model": "red_sandstone_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=outer_left": {
          "model": "red_sandstone_outer_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=outer_left": {
          "model": "red_sandstone_outer_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=outer_left": {
          "model": "red_sandstone_outer_stairs"
        },
        "facing=north,half=bottom,shape=outer_left": {
          "model": "red_sandstone_outer_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_right": {
          "model": "red_sandstone_inner_stairs"
        },
        "facing=west,half=bottom,shape=inner_right": {
          "model": "red_sandstone_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_right": {
          "model": "red_sandstone_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=bottom,shape=inner_right": {
          "model": "red_sandstone_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=bottom,shape=inner_left": {
          "model": "red_sandstone_inner_stairs",
          "y": 270,
          "uvlock": true
        },
        "facing=west,half=bottom,shape=inner_left": {
          "model": "red_sandstone_inner_stairs",
          "y": 90,
          "uvlock": true
        },
        "facing=south,half=bottom,shape=inner_left": {
          "model": "red_sandstone_inner_stairs"
        },
        "facing=north,half=bottom,shape=inner_left": {
          "model": "red_sandstone_inner_stairs",
          "y": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=straight": {
          "model": "red_sandstone_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=straight": {
          "model": "red_sandstone_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=straight": {
          "model": "red_sandstone_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=straight": {
          "model": "red_sandstone_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_right": {
          "model": "red_sandstone_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_right": {
          "model": "red_sandstone_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_right": {
          "model": "red_sandstone_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_right": {
          "model": "red_sandstone_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=outer_left": {
          "model": "red_sandstone_outer_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=outer_left": {
          "model": "red_sandstone_outer_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=outer_left": {
          "model": "red_sandstone_outer_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=outer_left": {
          "model": "red_sandstone_outer_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_right": {
          "model": "red_sandstone_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_right": {
          "model": "red_sandstone_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_right": {
          "model": "red_sandstone_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_right": {
          "model": "red_sandstone_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=east,half=top,shape=inner_left": {
          "model": "red_sandstone_inner_stairs",
          "x": 180,
          "uvlock": true
        },
        "facing=west,half=top,shape=inner_left": {
          "model": "red_sandstone_inner_stairs",
          "x": 180,
          "y": 180,
          "uvlock": true
        },
        "facing=south,half=top,shape=inner_left": {
          "model": "red_sandstone_inner_stairs",
          "x": 180,
          "y": 90,
          "uvlock": true
        },
        "facing=north,half=top,shape=inner_left": {
          "model": "red_sandstone_inner_stairs",
          "x": 180,
          "y": 270,
          "uvlock": true
        }
      }
    },
    "white_wool": {
      "variants": {
        "normal": {
          "model": "white_wool"
        }
      }
    },
    "purple_concrete": {
      "variants": {
        "normal": {
          "model": "purple_concrete"
        }
      }
    },
    "detector_rail": {
      "variants": {
        "powered=false,shape=north_south": {
          "model": "detector_rail_flat"
        },
        "powered=false,shape=east_west": {
          "model": "detector_rail_flat",
          "y": 90
        },
        "powered=false,shape=ascending_east": {
          "model": "detector_rail_raised_ne",
          "y": 90
        },
        "powered=false,shape=ascending_west": {
          "model": "detector_rail_raised_sw",
          "y": 90
        },
        "powered=false,shape=ascending_north": {
          "model": "detector_rail_raised_ne"
        },
        "powered=false,shape=ascending_south": {
          "model": "detector_rail_raised_sw"
        },
        "powered=true,shape=north_south": {
          "model": "detector_rail_powered_flat"
        },
        "powered=true,shape=east_west": {
          "model": "detector_rail_powered_flat",
          "y": 90
        },
        "powered=true,shape=ascending_east": {
          "model": "detector_rail_powered_raised_ne",
          "y": 90
        },
        "powered=true,shape=ascending_west": {
          "model": "detector_rail_powered_raised_sw",
          "y": 90
        },
        "powered=true,shape=ascending_north": {
          "model": "detector_rail_powered_raised_ne"
        },
        "powered=true,shape=ascending_south": {
          "model": "detector_rail_powered_raised_sw"
        }
      }
    },
    "magenta_wool": {
      "variants": {
        "normal": {
          "model": "magenta_wool"
        }
      }
    },
    "quartz_slab": {
      "variants": {
        "half=bottom": {
          "model": "half_slab_quartz"
        },
        "half=top": {
          "model": "upper_slab_quartz"
        }
      }
    },
    "iron_trapdoor": {
      "variants": {
        "facing=north,half=bottom,open=false": {
          "model": "iron_trapdoor_bottom"
        },
        "facing=south,half=bottom,open=false": {
          "model": "iron_trapdoor_bottom"
        },
        "facing=east,half=bottom,open=false": {
          "model": "iron_trapdoor_bottom"
        },
        "facing=west,half=bottom,open=false": {
          "model": "iron_trapdoor_bottom"
        },
        "facing=north,half=top,open=false": {
          "model": "iron_trapdoor_top"
        },
        "facing=south,half=top,open=false": {
          "model": "iron_trapdoor_top"
        },
        "facing=east,half=top,open=false": {
          "model": "iron_trapdoor_top"
        },
        "facing=west,half=top,open=false": {
          "model": "iron_trapdoor_top"
        },
        "facing=north,half=bottom,open=true": {
          "model": "iron_trapdoor_open"
        },
        "facing=south,half=bottom,open=true": {
          "model": "iron_trapdoor_open",
          "y": 180
        },
        "facing=east,half=bottom,open=true": {
          "model": "iron_trapdoor_open",
          "y": 90
        },
        "facing=west,half=bottom,open=true": {
          "model": "iron_trapdoor_open",
          "y": 270
        },
        "facing=north,half=top,open=true": {
          "model": "iron_trapdoor_open"
        },
        "facing=south,half=top,open=true": {
          "model": "iron_trapdoor_open",
          "y": 180
        },
        "facing=east,half=top,open=true": {
          "model": "iron_trapdoor_open",
          "y": 90
        },
        "facing=west,half=top,open=true": {
          "model": "iron_trapdoor_open",
          "y": 270
        }
      }
    },
    "light_blue_wool": {
      "variants": {
        "normal": {
          "model": "light_blue_wool"
        }
      }
    },
    "white_stained_glass": {
      "variants": {
        "normal": {
          "model": "glass_white"
        }
      }
    },
    "magenta_carpet": {
      "variants": {
        "normal": {
          "model": "carpet_magenta"
        }
      }
    },
    "daylight_detector": {
      "variants": {
        "power=0": {
          "model": "daylight_detector"
        },
        "power=1": {
          "model": "daylight_detector"
        },
        "power=2": {
          "model": "daylight_detector"
        },
        "power=3": {
          "model": "daylight_detector"
        },
        "power=4": {
          "model": "daylight_detector"
        },
        "power=5": {
          "model": "daylight_detector"
        },
        "power=6": {
          "model": "daylight_detector"
        },
        "power=7": {
          "model": "daylight_detector"
        },
        "power=8": {
          "model": "daylight_detector"
        },
        "power=9": {
          "model": "daylight_detector"
        },
        "power=10": {
          "model": "daylight_detector"
        },
        "power=11": {
          "model": "daylight_detector"
        },
        "power=12": {
          "model": "daylight_detector"
        },
        "power=13": {
          "model": "daylight_detector"
        },
        "power=14": {
          "model": "daylight_detector"
        },
        "power=15": {
          "model": "daylight_detector"
        }
      }
    },
    "pink_tulip": {
      "variants": {
        "normal": {
          "model": "pink_tulip"
        }
      }
    },
    "rail": {
      "variants": {
        "shape=north_south": {
          "model": "normal_rail_flat"
        },
        "shape=east_west": {
          "model": "normal_rail_flat",
          "y": 90
        },
        "shape=ascending_east": {
          "model": "normal_rail_raised_ne",
          "y": 90
        },
        "shape=ascending_west": {
          "model": "normal_rail_raised_sw",
          "y": 90
        },
        "shape=ascending_north": {
          "model": "normal_rail_raised_ne"
        },
        "shape=ascending_south": {
          "model": "normal_rail_raised_sw"
        },
        "shape=south_east": {
          "model": "normal_rail_curved"
        },
        "shape=south_west": {
          "model": "normal_rail_curved",
          "y": 90
        },
        "shape=north_west": {
          "model": "normal_rail_curved",
          "y": 180
        },
        "shape=north_east": {
          "model": "normal_rail_curved",
          "y": 270
        }
      }
    },
    "snow_layer": {
      "variants": {
        "layers=1": {
          "model": "snow_height2"
        },
        "layers=2": {
          "model": "snow_height4"
        },
        "layers=3": {
          "model": "snow_height6"
        },
        "layers=4": {
          "model": "snow_height8"
        },
        "layers=5": {
          "model": "snow_height10"
        },
        "layers=6": {
          "model": "snow_height12"
        },
        "layers=7": {
          "model": "snow_height14"
        },
        "layers=8": {
          "model": "snow"
        }
      }
    },
    "pumpkin_stem": {
      "variants": {
        "age=0,facing=up": {
          "model": "pumpkin_stem_growth0"
        },
        "age=1,facing=up": {
          "model": "pumpkin_stem_growth1"
        },
        "age=2,facing=up": {
          "model": "pumpkin_stem_growth2"
        },
        "age=3,facing=up": {
          "model": "pumpkin_stem_growth3"
        },
        "age=4,facing=up": {
          "model": "pumpkin_stem_growth4"
        },
        "age=5,facing=up": {
          "model": "pumpkin_stem_growth5"
        },
        "age=6,facing=up": {
          "model": "pumpkin_stem_growth6"
        },
        "age=7,facing=up": {
          "model": "pumpkin_stem_growth7"
        },
        "facing=west": {
          "model": "pumpkin_stem_fruit"
        },
        "facing=east": {
          "model": "pumpkin_stem_fruit",
          "y": 180
        },
        "facing=north": {
          "model": "pumpkin_stem_fruit",
          "y": 90
        },
        "facing=south": {
          "model": "pumpkin_stem_fruit",
          "y": 270
        }
      }
    },
    "oak_planks": {
      "variants": {
        "normal": {
          "model": "oak_planks"
        }
      }
    },
    "bedrock": {
      "variants": {
        "normal": [
          {
            "model": "bedrock"
          },
          {
            "model": "bedrock_mirrored"
          },
          {
            "model": "bedrock",
            "y": 180
          },
          {
            "model": "bedrock_mirrored",
            "y": 180
          }
        ]
      }
    },
    "end_portal_frame": {
      "variants": {
        "eye=false,facing=south": {
          "model": "end_portal_frame_empty"
        },
        "eye=false,facing=west": {
          "model": "end_portal_frame_empty",
          "y": 90
        },
        "eye=false,facing=north": {
          "model": "end_portal_frame_empty",
          "y": 180
        },
        "eye=false,facing=east": {
          "model": "end_portal_frame_empty",
          "y": 270
        },
        "eye=true,facing=south": {
          "model": "end_portal_frame_filled"
        },
        "eye=true,facing=west": {
          "model": "end_portal_frame_filled",
          "y": 90
        },
        "eye=true,facing=north": {
          "model": "end_portal_frame_filled",
          "y": 180
        },
        "eye=true,facing=east": {
          "model": "end_portal_frame_filled",
          "y": 270
        }
      }
    },
    "orange_tulip": {
      "variants": {
        "normal": {
          "model": "orange_tulip"
        }
      }
    },
    "tripwire_hook": {
      "variants": {
        "attached=false,facing=north,powered=false": {
          "model": "tripwire_hook"
        },
        "attached=false,facing=south,powered=false": {
          "model": "tripwire_hook",
          "y": 180
        },
        "attached=false,facing=west,powered=false": {
          "model": "tripwire_hook",
          "y": 270
        },
        "attached=false,facing=east,powered=false": {
          "model": "tripwire_hook",
          "y": 90
        },
        "attached=true,facing=north,powered=false": {
          "model": "tripwire_hook_attached"
        },
        "attached=true,facing=south,powered=false": {
          "model": "tripwire_hook_attached",
          "y": 180
        },
        "attached=true,facing=west,powered=false": {
          "model": "tripwire_hook_attached",
          "y": 270
        },
        "attached=true,facing=east,powered=false": {
          "model": "tripwire_hook_attached",
          "y": 90
        },
        "attached=false,facing=north,powered=true": {
          "model": "tripwire_hook_powered"
        },
        "attached=false,facing=south,powered=true": {
          "model": "tripwire_hook_powered",
          "y": 180
        },
        "attached=false,facing=west,powered=true": {
          "model": "tripwire_hook_powered",
          "y": 270
        },
        "attached=false,facing=east,powered=true": {
          "model": "tripwire_hook_powered",
          "y": 90
        },
        "attached=true,facing=north,powered=true": {
          "model": "tripwire_hook_attached_powered"
        },
        "attached=true,facing=south,powered=true": {
          "model": "tripwire_hook_attached_powered",
          "y": 180
        },
        "attached=true,facing=west,powered=true": {
          "model": "tripwire_hook_attached_powered",
          "y": 270
        },
        "attached=true,facing=east,powered=true": {
          "model": "tripwire_hook_attached_powered",
          "y": 90
        }
      }
    },
    "oak_slab": {
      "variants": {
        "half=bottom": {
          "model": "half_slab_oak"
        },
        "half=top": {
          "model": "upper_slab_oak"
        }
      }
    },
    "redstone_torch": {
      "variants": {
        "facing=up": {
          "model": "lit_redstone_torch"
        },
        "facing=east": {
          "model": "lit_redstone_torch_wall"
        },
        "facing=south": {
          "model": "lit_redstone_torch_wall",
          "y": 90
        },
        "facing=west": {
          "model": "lit_redstone_torch_wall",
          "y": 180
        },
        "facing=north": {
          "model": "lit_redstone_torch_wall",
          "y": 270
        }
      }
    },
    "paeonia": {
      "variants": {
        "half=lower": {
          "model": "double_paeonia_bottom"
        },
        "half=upper": {
          "model": "double_paeonia_top"
        }
      }
    },
    "red_concrete": {
      "variants": {
        "normal": {
          "model": "red_concrete"
        }
      }
    },
    "glowstone": {
      "variants": {
        "normal": {
          "model": "glowstone"
        }
      }
    },
    "chorus_plant": {
      "multipart": [
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "chorus_plant_side"
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "chorus_plant_side",
            "y": 90,
            "uvlock": true
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "chorus_plant_side",
            "y": 180,
            "uvlock": true
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "chorus_plant_side",
            "y": 270,
            "uvlock": true
          }
        },
        {
          "when": {
            "up": true
          },
          "apply": {
            "model": "chorus_plant_side",
            "x": 270,
            "uvlock": true
          }
        },
        {
          "when": {
            "down": true
          },
          "apply": {
            "model": "chorus_plant_side",
            "x": 90,
            "uvlock": true
          }
        },
        {
          "when": {
            "north": false
          },
          "apply": [
            {
              "model": "chorus_plant_noside",
              "weight": 2
            },
            {
              "model": "chorus_plant_noside1"
            },
            {
              "model": "chorus_plant_noside2"
            },
            {
              "model": "chorus_plant_noside3"
            }
          ]
        },
        {
          "when": {
            "east": false
          },
          "apply": [
            {
              "model": "chorus_plant_noside1",
              "y": 90,
              "uvlock": true
            },
            {
              "model": "chorus_plant_noside2",
              "y": 90,
              "uvlock": true
            },
            {
              "model": "chorus_plant_noside3",
              "y": 90,
              "uvlock": true
            },
            {
              "model": "chorus_plant_noside",
              "weight": 2,
              "y": 90,
              "uvlock": true
            }
          ]
        },
        {
          "when": {
            "south": false
          },
          "apply": [
            {
              "model": "chorus_plant_noside2",
              "y": 180,
              "uvlock": true
            },
            {
              "model": "chorus_plant_noside3",
              "y": 180,
              "uvlock": true
            },
            {
              "model": "chorus_plant_noside",
              "weight": 2,
              "y": 180,
              "uvlock": true
            },
            {
              "model": "chorus_plant_noside1",
              "y": 180,
              "uvlock": true
            }
          ]
        },
        {
          "when": {
            "west": false
          },
          "apply": [
            {
              "model": "chorus_plant_noside3",
              "y": 270,
              "uvlock": true
            },
            {
              "model": "chorus_plant_noside",
              "weight": 2,
              "y": 270,
              "uvlock": true
            },
            {
              "model": "chorus_plant_noside1",
              "y": 270,
              "uvlock": true
            },
            {
              "model": "chorus_plant_noside2",
              "y": 270,
              "uvlock": true
            }
          ]
        },
        {
          "when": {
            "up": false
          },
          "apply": [
            {
              "model": "chorus_plant_noside",
              "weight": 2,
              "x": 270,
              "uvlock": true
            },
            {
              "model": "chorus_plant_noside3",
              "x": 270,
              "uvlock": true
            },
            {
              "model": "chorus_plant_noside1",
              "x": 270,
              "uvlock": true
            },
            {
              "model": "chorus_plant_noside2",
              "x": 270,
              "uvlock": true
            }
          ]
        },
        {
          "when": {
            "down": false
          },
          "apply": [
            {
              "model": "chorus_plant_noside3",
              "x": 90,
              "uvlock": true
            },
            {
              "model": "chorus_plant_noside2",
              "x": 90,
              "uvlock": true
            },
            {
              "model": "chorus_plant_noside1",
              "x": 90,
              "uvlock": true
            },
            {
              "model": "chorus_plant_noside",
              "weight": 2,
              "x": 90,
              "uvlock": true
            }
          ]
        }
      ]
    },
    "silver_concrete_powder": {
      "variants": {
        "normal": [
          {
            "model": "silver_concrete_powder"
          },
          {
            "model": "silver_concrete_powder",
            "y": 90
          },
          {
            "model": "silver_concrete_powder",
            "y": 180
          },
          {
            "model": "silver_concrete_powder",
            "y": 270
          }
        ]
      }
    },
    "orange_concrete": {
      "variants": {
        "normal": {
          "model": "orange_concrete"
        }
      }
    },
    "chorus_flower": {
      "variants": {
        "age=0": {
          "model": "chorus_flower"
        },
        "age=1": {
          "model": "chorus_flower"
        },
        "age=2": {
          "model": "chorus_flower"
        },
        "age=3": {
          "model": "chorus_flower"
        },
        "age=4": {
          "model": "chorus_flower"
        },
        "age=5": {
          "model": "chorus_flower_dead"
        }
      }
    },
    "white_concrete_powder": {
      "variants": {
        "normal": [
          {
            "model": "white_concrete_powder"
          },
          {
            "model": "white_concrete_powder",
            "y": 90
          },
          {
            "model": "white_concrete_powder",
            "y": 180
          },
          {
            "model": "white_concrete_powder",
            "y": 270
          }
        ]
      }
    },
    "anvil": {
      "variants": {
        "damage=0,facing=south": {
          "model": "anvil_undamaged"
        },
        "damage=0,facing=west": {
          "model": "anvil_undamaged",
          "y": 90
        },
        "damage=0,facing=north": {
          "model": "anvil_undamaged",
          "y": 180
        },
        "damage=0,facing=east": {
          "model": "anvil_undamaged",
          "y": 270
        },
        "damage=1,facing=south": {
          "model": "anvil_slightly_damaged"
        },
        "damage=1,facing=west": {
          "model": "anvil_slightly_damaged",
          "y": 90
        },
        "damage=1,facing=north": {
          "model": "anvil_slightly_damaged",
          "y": 180
        },
        "damage=1,facing=east": {
          "model": "anvil_slightly_damaged",
          "y": 270
        },
        "damage=2,facing=south": {
          "model": "anvil_very_damaged"
        },
        "damage=2,facing=west": {
          "model": "anvil_very_damaged",
          "y": 90
        },
        "damage=2,facing=north": {
          "model": "anvil_very_damaged",
          "y": 180
        },
        "damage=2,facing=east": {
          "model": "anvil_very_damaged",
          "y": 270
        }
      }
    },
    "birch_sapling": {
      "variants": {
        "stage=0": {
          "model": "birch_sapling"
        },
        "stage=1": {
          "model": "birch_sapling"
        }
      }
    },
    "silver_carpet": {
      "variants": {
        "normal": {
          "model": "carpet_silver"
        }
      }
    },
    "item_frame": {
      "variants": {
        "normal": {
          "model": "item_frame"
        },
        "map": {
          "model": "item_frame_map"
        }
      }
    },
    "oxeye_daisy": {
      "variants": {
        "normal": {
          "model": "daisy"
        }
      }
    },
    "iron_block": {
      "variants": {
        "normal": {
          "model": "iron_block"
        }
      }
    },
    "sponge": {
      "variants": {
        "wet=false": {
          "model": "sponge"
        },
        "wet=true": {
          "model": "sponge_wet"
        }
      }
    },
    "brown_mushroom": {
      "variants": {
        "normal": {
          "model": "brown_mushroom"
        }
      }
    },
    "jungle_door": {
      "variants": {
        "facing=east,half=lower,hinge=left,open=false": {
          "model": "jungle_door_bottom"
        },
        "facing=south,half=lower,hinge=left,open=false": {
          "model": "jungle_door_bottom",
          "y": 90
        },
        "facing=west,half=lower,hinge=left,open=false": {
          "model": "jungle_door_bottom",
          "y": 180
        },
        "facing=north,half=lower,hinge=left,open=false": {
          "model": "jungle_door_bottom",
          "y": 270
        },
        "facing=east,half=lower,hinge=right,open=false": {
          "model": "jungle_door_bottom_rh"
        },
        "facing=south,half=lower,hinge=right,open=false": {
          "model": "jungle_door_bottom_rh",
          "y": 90
        },
        "facing=west,half=lower,hinge=right,open=false": {
          "model": "jungle_door_bottom_rh",
          "y": 180
        },
        "facing=north,half=lower,hinge=right,open=false": {
          "model": "jungle_door_bottom_rh",
          "y": 270
        },
        "facing=east,half=lower,hinge=left,open=true": {
          "model": "jungle_door_bottom_rh",
          "y": 90
        },
        "facing=south,half=lower,hinge=left,open=true": {
          "model": "jungle_door_bottom_rh",
          "y": 180
        },
        "facing=west,half=lower,hinge=left,open=true": {
          "model": "jungle_door_bottom_rh",
          "y": 270
        },
        "facing=north,half=lower,hinge=left,open=true": {
          "model": "jungle_door_bottom_rh"
        },
        "facing=east,half=lower,hinge=right,open=true": {
          "model": "jungle_door_bottom",
          "y": 270
        },
        "facing=south,half=lower,hinge=right,open=true": {
          "model": "jungle_door_bottom"
        },
        "facing=west,half=lower,hinge=right,open=true": {
          "model": "jungle_door_bottom",
          "y": 90
        },
        "facing=north,half=lower,hinge=right,open=true": {
          "model": "jungle_door_bottom",
          "y": 180
        },
        "facing=east,half=upper,hinge=left,open=false": {
          "model": "jungle_door_top"
        },
        "facing=south,half=upper,hinge=left,open=false": {
          "model": "jungle_door_top",
          "y": 90
        },
        "facing=west,half=upper,hinge=left,open=false": {
          "model": "jungle_door_top",
          "y": 180
        },
        "facing=north,half=upper,hinge=left,open=false": {
          "model": "jungle_door_top",
          "y": 270
        },
        "facing=east,half=upper,hinge=right,open=false": {
          "model": "jungle_door_top_rh"
        },
        "facing=south,half=upper,hinge=right,open=false": {
          "model": "jungle_door_top_rh",
          "y": 90
        },
        "facing=west,half=upper,hinge=right,open=false": {
          "model": "jungle_door_top_rh",
          "y": 180
        },
        "facing=north,half=upper,hinge=right,open=false": {
          "model": "jungle_door_top_rh",
          "y": 270
        },
        "facing=east,half=upper,hinge=left,open=true": {
          "model": "jungle_door_top_rh",
          "y": 90
        },
        "facing=south,half=upper,hinge=left,open=true": {
          "model": "jungle_door_top_rh",
          "y": 180
        },
        "facing=west,half=upper,hinge=left,open=true": {
          "model": "jungle_door_top_rh",
          "y": 270
        },
        "facing=north,half=upper,hinge=left,open=true": {
          "model": "jungle_door_top_rh"
        },
        "facing=east,half=upper,hinge=right,open=true": {
          "model": "jungle_door_top",
          "y": 270
        },
        "facing=south,half=upper,hinge=right,open=true": {
          "model": "jungle_door_top"
        },
        "facing=west,half=upper,hinge=right,open=true": {
          "model": "jungle_door_top",
          "y": 90
        },
        "facing=north,half=upper,hinge=right,open=true": {
          "model": "jungle_door_top",
          "y": 180
        }
      }
    },
    "iron_door": {
      "variants": {
        "facing=east,half=lower,hinge=left,open=false": {
          "model": "iron_door_bottom"
        },
        "facing=south,half=lower,hinge=left,open=false": {
          "model": "iron_door_bottom",
          "y": 90
        },
        "facing=west,half=lower,hinge=left,open=false": {
          "model": "iron_door_bottom",
          "y": 180
        },
        "facing=north,half=lower,hinge=left,open=false": {
          "model": "iron_door_bottom",
          "y": 270
        },
        "facing=east,half=lower,hinge=right,open=false": {
          "model": "iron_door_bottom_rh"
        },
        "facing=south,half=lower,hinge=right,open=false": {
          "model": "iron_door_bottom_rh",
          "y": 90
        },
        "facing=west,half=lower,hinge=right,open=false": {
          "model": "iron_door_bottom_rh",
          "y": 180
        },
        "facing=north,half=lower,hinge=right,open=false": {
          "model": "iron_door_bottom_rh",
          "y": 270
        },
        "facing=east,half=lower,hinge=left,open=true": {
          "model": "iron_door_bottom_rh",
          "y": 90
        },
        "facing=south,half=lower,hinge=left,open=true": {
          "model": "iron_door_bottom_rh",
          "y": 180
        },
        "facing=west,half=lower,hinge=left,open=true": {
          "model": "iron_door_bottom_rh",
          "y": 270
        },
        "facing=north,half=lower,hinge=left,open=true": {
          "model": "iron_door_bottom_rh"
        },
        "facing=east,half=lower,hinge=right,open=true": {
          "model": "iron_door_bottom",
          "y": 270
        },
        "facing=south,half=lower,hinge=right,open=true": {
          "model": "iron_door_bottom"
        },
        "facing=west,half=lower,hinge=right,open=true": {
          "model": "iron_door_bottom",
          "y": 90
        },
        "facing=north,half=lower,hinge=right,open=true": {
          "model": "iron_door_bottom",
          "y": 180
        },
        "facing=east,half=upper,hinge=left,open=false": {
          "model": "iron_door_top"
        },
        "facing=south,half=upper,hinge=left,open=false": {
          "model": "iron_door_top",
          "y": 90
        },
        "facing=west,half=upper,hinge=left,open=false": {
          "model": "iron_door_top",
          "y": 180
        },
        "facing=north,half=upper,hinge=left,open=false": {
          "model": "iron_door_top",
          "y": 270
        },
        "facing=east,half=upper,hinge=right,open=false": {
          "model": "iron_door_top_rh"
        },
        "facing=south,half=upper,hinge=right,open=false": {
          "model": "iron_door_top_rh",
          "y": 90
        },
        "facing=west,half=upper,hinge=right,open=false": {
          "model": "iron_door_top_rh",
          "y": 180
        },
        "facing=north,half=upper,hinge=right,open=false": {
          "model": "iron_door_top_rh",
          "y": 270
        },
        "facing=east,half=upper,hinge=left,open=true": {
          "model": "iron_door_top_rh",
          "y": 90
        },
        "facing=south,half=upper,hinge=left,open=true": {
          "model": "iron_door_top_rh",
          "y": 180
        },
        "facing=west,half=upper,hinge=left,open=true": {
          "model": "iron_door_top_rh",
          "y": 270
        },
        "facing=north,half=upper,hinge=left,open=true": {
          "model": "iron_door_top_rh"
        },
        "facing=east,half=upper,hinge=right,open=true": {
          "model": "iron_door_top",
          "y": 270
        },
        "facing=south,half=upper,hinge=right,open=true": {
          "model": "iron_door_top"
        },
        "facing=west,half=upper,hinge=right,open=true": {
          "model": "iron_door_top",
          "y": 90
        },
        "facing=north,half=upper,hinge=right,open=true": {
          "model": "iron_door_top",
          "y": 180
        }
      }
    },
    "magenta_concrete_powder": {
      "variants": {
        "normal": [
          {
            "model": "magenta_concrete_powder"
          },
          {
            "model": "magenta_concrete_powder",
            "y": 90
          },
          {
            "model": "magenta_concrete_powder",
            "y": 180
          },
          {
            "model": "magenta_concrete_powder",
            "y": 270
          }
        ]
      }
    },
    "piston": {
      "variants": {
        "extended=false,facing=down": {
          "model": "piston_normal",
          "x": 90
        },
        "extended=false,facing=up": {
          "model": "piston_normal",
          "x": 270
        },
        "extended=false,facing=north": {
          "model": "piston_normal"
        },
        "extended=false,facing=south": {
          "model": "piston_normal",
          "y": 180
        },
        "extended=false,facing=west": {
          "model": "piston_normal",
          "y": 270
        },
        "extended=false,facing=east": {
          "model": "piston_normal",
          "y": 90
        },
        "extended=true,facing=down": {
          "model": "piston_extended_normal",
          "x": 90
        },
        "extended=true,facing=up": {
          "model": "piston_extended_normal",
          "x": 270
        },
        "extended=true,facing=north": {
          "model": "piston_extended_normal"
        },
        "extended=true,facing=south": {
          "model": "piston_extended_normal",
          "y": 180
        },
        "extended=true,facing=west": {
          "model": "piston_extended_normal",
          "y": 270
        },
        "extended=true,facing=east": {
          "model": "piston_extended_normal",
          "y": 90
        }
      }
    },
    "lime_glazed_terracotta": {
      "variants": {
        "facing=south": {
          "model": "lime_glazed_terracotta"
        },
        "facing=west": {
          "model": "lime_glazed_terracotta",
          "y": 90
        },
        "facing=north": {
          "model": "lime_glazed_terracotta",
          "y": 180
        },
        "facing=east": {
          "model": "lime_glazed_terracotta",
          "y": 270
        }
      }
    },
    "dark_oak_slab": {
      "variants": {
        "half=bottom": {
          "model": "half_slab_dark_oak"
        },
        "half=top": {
          "model": "upper_slab_dark_oak"
        }
      }
    },
    "white_stained_hardened_clay": {
      "variants": {
        "normal": {
          "model": "hardened_clay_white"
        }
      }
    },
    "black_stained_glass_pane": {
      "multipart": [
        {
          "apply": {
            "model": "black_stained_glass_pane_post"
          }
        },
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "black_stained_glass_pane_side"
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "black_stained_glass_pane_side",
            "y": 90
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "black_stained_glass_pane_side_alt"
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "black_stained_glass_pane_side_alt",
            "y": 90
          }
        },
        {
          "when": {
            "north": false
          },
          "apply": {
            "model": "black_stained_glass_pane_noside"
          }
        },
        {
          "when": {
            "east": false
          },
          "apply": {
            "model": "black_stained_glass_pane_noside_alt"
          }
        },
        {
          "when": {
            "south": false
          },
          "apply": {
            "model": "black_stained_glass_pane_noside_alt",
            "y": 90
          }
        },
        {
          "when": {
            "west": false
          },
          "apply": {
            "model": "black_stained_glass_pane_noside",
            "y": 270
          }
        }
      ]
    },
    "cyan_carpet": {
      "variants": {
        "normal": {
          "model": "carpet_cyan"
        }
      }
    },
    "nether_brick_fence": {
      "multipart": [
        {
          "apply": {
            "model": "nether_brick_fence_post"
          }
        },
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "nether_brick_fence_side",
            "uvlock": true
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "nether_brick_fence_side",
            "y": 90,
            "uvlock": true
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "nether_brick_fence_side",
            "y": 180,
            "uvlock": true
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "nether_brick_fence_side",
            "y": 270,
            "uvlock": true
          }
        }
      ]
    },
    "netherrack": {
      "variants": {
        "normal": [
          {
            "model": "netherrack"
          },
          {
            "model": "netherrack",
            "x": 90
          },
          {
            "model": "netherrack",
            "x": 180
          },
          {
            "model": "netherrack",
            "x": 270
          },
          {
            "model": "netherrack",
            "y": 90
          },
          {
            "model": "netherrack",
            "y": 90,
            "x": 90
          },
          {
            "model": "netherrack",
            "y": 90,
            "x": 180
          },
          {
            "model": "netherrack",
            "y": 90,
            "x": 270
          },
          {
            "model": "netherrack",
            "y": 180
          },
          {
            "model": "netherrack",
            "y": 180,
            "x": 90
          },
          {
            "model": "netherrack",
            "y": 180,
            "x": 180
          },
          {
            "model": "netherrack",
            "y": 180,
            "x": 270
          },
          {
            "model": "netherrack",
            "y": 270
          },
          {
            "model": "netherrack",
            "y": 270,
            "x": 90
          },
          {
            "model": "netherrack",
            "y": 270,
            "x": 180
          },
          {
            "model": "netherrack",
            "y": 270,
            "x": 270
          }
        ]
      }
    },
    "stone_monster_egg": {
      "variants": {
        "normal": {
          "model": "stone"
        }
      }
    },
    "silver_wool": {
      "variants": {
        "normal": {
          "model": "silver_wool"
        }
      }
    },
    "packed_ice": {
      "variants": {
        "normal": {
          "model": "packed_ice"
        }
      }
    },
    "dark_oak_leaves": {
      "variants": {
        "normal": {
          "model": "dark_oak_leaves"
        }
      }
    },
    "purpur_double_slab": {
      "variants": {
        "variant=default": {
          "model": "purpur_block"
        }
      }
    },
    "reeds": {
      "variants": {
        "normal": {
          "model": "reeds"
        }
      }
    },
    "blue_stained_glass": {
      "variants": {
        "normal": {
          "model": "glass_blue"
        }
      }
    },
    "white_concrete": {
      "variants": {
        "normal": {
          "model": "white_concrete"
        }
      }
    },
    "gray_wool": {
      "variants": {
        "normal": {
          "model": "gray_wool"
        }
      }
    },
    "wheat": {
      "variants": {
        "age=0": {
          "model": "wheat_stage0"
        },
        "age=1": {
          "model": "wheat_stage1"
        },
        "age=2": {
          "model": "wheat_stage2"
        },
        "age=3": {
          "model": "wheat_stage3"
        },
        "age=4": {
          "model": "wheat_stage4"
        },
        "age=5": {
          "model": "wheat_stage5"
        },
        "age=6": {
          "model": "wheat_stage6"
        },
        "age=7": {
          "model": "wheat_stage7"
        }
      }
    },
    "black_concrete_powder": {
      "variants": {
        "normal": [
          {
            "model": "black_concrete_powder"
          },
          {
            "model": "black_concrete_powder",
            "y": 90
          },
          {
            "model": "black_concrete_powder",
            "y": 180
          },
          {
            "model": "black_concrete_powder",
            "y": 270
          }
        ]
      }
    },
    "bone_block": {
      "variants": {
        "axis=y": {
          "model": "bone_block"
        },
        "axis=z": {
          "model": "bone_block",
          "x": 90
        },
        "axis=x": {
          "model": "bone_block",
          "x": 90,
          "y": 90
        }
      }
    },
    "cyan_glazed_terracotta": {
      "variants": {
        "facing=south": {
          "model": "cyan_glazed_terracotta"
        },
        "facing=west": {
          "model": "cyan_glazed_terracotta",
          "y": 90
        },
        "facing=north": {
          "model": "cyan_glazed_terracotta",
          "y": 180
        },
        "facing=east": {
          "model": "cyan_glazed_terracotta",
          "y": 270
        }
      }
    },
    "quartz_ore": {
      "variants": {
        "normal": {
          "model": "quartz_ore"
        }
      }
    },
    "grass_path": {
      "variants": {
        "normal": {
          "model": "grass_path"
        }
      }
    },
    "wooden_pressure_plate": {
      "variants": {
        "powered=false": {
          "model": "wooden_pressure_plate_up"
        },
        "powered=true": {
          "model": "wooden_pressure_plate_down"
        }
      }
    },
    "gray_stained_hardened_clay": {
      "variants": {
        "normal": {
          "model": "hardened_clay_gray"
        }
      }
    },
    "black_stained_glass": {
      "variants": {
        "normal": {
          "model": "glass_black"
        }
      }
    },
    "cocoa": {
      "variants": {
        "age=0,facing=south": {
          "model": "cocoa_age0_s"
        },
        "age=0,facing=west": {
          "model": "cocoa_age0_s",
          "y": 90
        },
        "age=0,facing=north": {
          "model": "cocoa_age0_s",
          "y": 180
        },
        "age=0,facing=east": {
          "model": "cocoa_age0_s",
          "y": 270
        },
        "age=1,facing=south": {
          "model": "cocoa_age1_s"
        },
        "age=1,facing=west": {
          "model": "cocoa_age1_s",
          "y": 90
        },
        "age=1,facing=north": {
          "model": "cocoa_age1_s",
          "y": 180
        },
        "age=1,facing=east": {
          "model": "cocoa_age1_s",
          "y": 270
        },
        "age=2,facing=south": {
          "model": "cocoa_age2_s"
        },
        "age=2,facing=west": {
          "model": "cocoa_age2_s",
          "y": 90
        },
        "age=2,facing=north": {
          "model": "cocoa_age2_s",
          "y": 180
        },
        "age=2,facing=east": {
          "model": "cocoa_age2_s",
          "y": 270
        }
      }
    },
    "magenta_stained_glass_pane": {
      "multipart": [
        {
          "apply": {
            "model": "magenta_stained_glass_pane_post"
          }
        },
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "magenta_stained_glass_pane_side"
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "magenta_stained_glass_pane_side",
            "y": 90
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "magenta_stained_glass_pane_side_alt"
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "magenta_stained_glass_pane_side_alt",
            "y": 90
          }
        },
        {
          "when": {
            "north": false
          },
          "apply": {
            "model": "magenta_stained_glass_pane_noside"
          }
        },
        {
          "when": {
            "east": false
          },
          "apply": {
            "model": "magenta_stained_glass_pane_noside_alt"
          }
        },
        {
          "when": {
            "south": false
          },
          "apply": {
            "model": "magenta_stained_glass_pane_noside_alt",
            "y": 90
          }
        },
        {
          "when": {
            "west": false
          },
          "apply": {
            "model": "magenta_stained_glass_pane_noside",
            "y": 270
          }
        }
      ]
    },
    "black_wool": {
      "variants": {
        "normal": {
          "model": "black_wool"
        }
      }
    },
    "white_stained_glass_pane": {
      "multipart": [
        {
          "apply": {
            "model": "white_stained_glass_pane_post"
          }
        },
        {
          "when": {
            "north": true
          },
          "apply": {
            "model": "white_stained_glass_pane_side"
          }
        },
        {
          "when": {
            "east": true
          },
          "apply": {
            "model": "white_stained_glass_pane_side",
            "y": 90
          }
        },
        {
          "when": {
            "south": true
          },
          "apply": {
            "model": "white_stained_glass_pane_side_alt"
          }
        },
        {
          "when": {
            "west": true
          },
          "apply": {
            "model": "white_stained_glass_pane_side_alt",
            "y": 90
          }
        },
        {
          "when": {
            "north": false
          },
          "apply": {
            "model": "white_stained_glass_pane_noside"
          }
        },
        {
          "when": {
            "east": false
          },
          "apply": {
            "model": "white_stained_glass_pane_noside_alt"
          }
        },
        {
          "when": {
            "south": false
          },
          "apply": {
            "model": "white_stained_glass_pane_noside_alt",
            "y": 90
          }
        },
        {
          "when": {
            "west": false
          },
          "apply": {
            "model": "white_stained_glass_pane_noside",
            "y": 270
          }
        }
      ]
    },
    "red_tulip": {
      "variants": {
        "normal": {
          "model": "red_tulip"
        }
      }
    }
  };
})(window);
