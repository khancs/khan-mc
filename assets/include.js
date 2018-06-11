(function(global) {
  global.assets = {};
  global.include = function(name) {
    var el = document.createElement("script");
    el.setAttribute("async", false);
    el.setAttribute("src", name + ".js");
    document.head.insertBefore(el, document.head.firstChild);
  };
  (["advancements", "blockstates", "lang", "loot_tables", "models",
    "recipes", "structures", "texts", "textures"]).forEach(include);
})(window);
