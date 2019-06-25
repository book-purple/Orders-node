var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getOrderId() {
  var length = 8;
  var timestamp = +new Date();
  var ts = timestamp.toString();
  var parts = ts.split("").reverse();
  var orderId = "BP";
  for (var i = 0; i < length; i++) {
    var index = getRandomInt(0, parts.length - 1);
    orderId += parts[index];
  }
  return orderId;
}

module.exports.getOrderId = getOrderId;
