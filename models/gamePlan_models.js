var orm = require("../config/orm.js");

var gamePlanData = {

  getAllUsers: function (columns, columnValues, cb) {
    orm.getAllUsers("users", columns, columnValues, function (res) {
      cb(res)
    })
  },

  getAllProjects: function (columns, columnValues, cb) {
    orm.getAllProjects("projects", columns, columnValues, function (res) {
      cb(res)
    })
  },

  insertNewProject: function (columns, columnValues, cb) {
    orm.insert("projects", columns, columnValues, function (res) {
      cb(res)
    })
  },

  getAllResources: function (columns, columnValues, cb) {
    orm.getAllResources("resources", columns, columnValues, function (res) {
      cb(res)
    })
  },

  insertNewResource: function (columns, columnValues, cb) {
    orm.insert("resources", columns, columnValues, function (res) {
      cb(res)
    })
  },

  getProjectAllocations: function (columns, columnValues, cb) {
    orm.getProjectAllocations("allocations", columns, columnValues, function (res) {
      cb(res)
    })
  },

  getProjectAllocationsTotals: function (columns, columnValues, cb) {
    orm.getProjectAllocationsTotals("allocations", columns, columnValues, function (res) {
      cb(res)
    })
  },

  getResourceDetails: function (columns, columnValues, cb) {
    orm.getResourceDetails("resources", columns, columnValues, function (res) {
      cb(res)
    })
  },

  addNewAllocationRecord: function (columns, columnValues, cb) {
    orm.insert("allocations", columns, columnValues, function (res) {
      cb(res)
    })
  },

  getResourcesTotal: function (columns, columnValues, cb) {
    orm.getResourcesTotal("allocations", columns, columnValues, function (res) {
      cb(res)
    })
  },

  getAllTotals: function (columns, columnValues, cb) {
    orm.getAllTotals("allocations", columns, columnValues, function (res) {
      cb(res)
    })
  }

}

module.exports = gamePlanData;
