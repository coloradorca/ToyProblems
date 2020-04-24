//Leetcode day 24 => https://leetcode.com/problems/lru-cache/

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.size = 0;
  this.limit = capacity;
  this.map = {};
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  //failed lookup
  if (!(key in this.map)) {
    //return null
    return null;
  }
  //otherwise move item to front of list
  var item = this.map[key];
  this.cache.moveToFront(item.node);
  //return value
  return item.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  //if the key exists
  if (key in this.map) {
    //replace value and move node to front
    item = this.map[key];
    item.value = value;
    this.cache.moveToFront(item.node);
    //else
  } else {
    //create node and add to front; increment size
    item = new LRUCache(key, value);
    item.node = this.cache.unshift(item);
    this.map[key] = item;
    this.size++;
    //if size > limit
    if (this.size > this.limit) {
      //remove node from cache, delete map reference
      var oldest = this.cache.pop();
      delete this.map[oldest.key];
      //decrement size
      this.size--;
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
