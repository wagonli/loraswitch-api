var util = require("util");
var unirest = require("unirest");
var logger = require("winston");

var apiKey = process.env.LOMAPIKEY;
var deviceUid = process.env.DEVICEUID;

module.exports.switch = function(properties, switchValue, callback) {
    var serviceUri = util.format("%sapi/v0/vendors/lora/devices/%s/commands", properties["lom.uri"], deviceUid);
    logger.log("info", "SwitchValue : %s", switchValue);
    unirest.post(serviceUri)
         .headers({"X-API-KEY": apiKey, "Accept": "application/json"})
         .type("json")
         .send({"data": (switchValue == 1 ? "F1" : "F0"), "port": 5, "confirmed": true})
         .end(function(response) {
             callback(response.body);
         });
}