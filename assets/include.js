(function(global) {
  global.assets = {};
  global.include = function(name) {
    var el = document.createElement("script");
    el.setAttribute("async", false);
    el.setAttribute("src", global.include.baseURL + name + ".js");
    document.head.insertBefore(el, document.head.firstChild);
  };
  var thisScript = document.getElementsByTagName("script");
  thisScript = thisScript[thisScript.length - 1].getAttribute("src");
  global.include.baseURL = thisScript.substring(0, thisScript.lastIndexOf("/") + 1);
  (["advancements", "blockstates", "lang", "loot_tables", "models",
    "recipes", "structures", "texts", "textures"]).forEach(include);
})(window);
