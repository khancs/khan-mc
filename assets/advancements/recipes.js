(function(global) {
  global.assets.advancements.recipes = {};
  global.assets.advancements.recipes.root = {
    "criteria": {
      "impossible": {
        "trigger": "minecraft:impossible"
      }
    }
  };
  (["advancements/recipes/brewing", "advancements/recipes/building_blocks", "advancements/recipes/combat",
    "advancements/recipes/decorations", "advancements/recipes/food", "advancements/recipes/misc",
    "advancements/recipes/redstone", "advancements/recipes/tools", "advancements/recipes/transportation"]).forEach(include);
})(window);
