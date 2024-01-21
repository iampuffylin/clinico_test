const Mock = require("mockjs");

// 格式： Mock.mock( url, 'post'|'get' , 返回的数据)
Mock.mock("/api/policyholders", "get", require("./data/policyholders.json"));
Mock.mock(
  "/api/policyholders/find",
  "get",
  require("./data/policyholders_2.json")
);
// Mock.mock("/api/test2", "post", require("/data/test2.json"));
