var express = require('express');
var path = require('path');
var router = express.Router();
var gamePlanData = require('../models/gamePlan_models.js');

// Route to GET userID
router.post("/loginUser", function (req, res) {
  gamePlanData.getAllUsers([
    "user_name"
  ], [
      req.body.username
    ], function (result) {
      res.json(result);
})
});

// Route to get All Projects
router.post("/getAllProjects", function (req, res) {
  gamePlanData.getAllProjects([
    "id"
  ], [
      req.body.id
    ], function (result) {
      res.json(result);
    })
});

// Route to Add New Project
router.post("/insertNewProject", function (req, res) {
  gamePlanData.insertNewProject([
    "project_name"
  ], [
      req.body.project_name
    ], function (result) {
      res.json(result);
    })
});


// Route to get All Resources
router.post("/getAllResources", function (req, res) {
  gamePlanData.getAllResources([
    "id"
  ], [
      req.body.id
    ], function (result) {
      res.json(result);
    })
});

// Route to Add New Project
router.post("/insertNewResource", function (req, res) {
  gamePlanData.insertNewResource([
    "resource_name",
    "resource_role",
    "resource_location",
    "resource_runrate"
  ], [
      req.body.resource_name,
      req.body.resource_role,
      req.body.resource_location,
      req.body.resource_runrate
    ], function (result) {
      res.json(result);
    })
});

// Route to get a project's allocations
router.post("/getProjectAllocations", function (req, res) {
  gamePlanData.getProjectAllocations([
    "project_name"
  ], [
      req.body.project_name
    ], function (result) {
      res.json(result);
    })
});

// Route to get a project's allocations totals
router.post("/getProjectAllocationsTotals", function (req, res) {
  gamePlanData.getProjectAllocationsTotals([
    "project_name"
  ], [
      req.body.project_name
    ], function (result) {
      res.json(result);
    })
});


// Route to get 1 Resource's Details
router.post("/getResourceDetails", function (req, res) {
  gamePlanData.getResourceDetails([
    "resource_name"
  ], [
      req.body.resource_name
    ], function (result) {
      res.json(result);
    })
});

// Route to add new Allocation Record
router.post("/addNewAllocationRecord", function (req, res) {
  gamePlanData.addNewAllocationRecord([
    "project_name",
    "resource_name",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ], [
      req.body.project_name,
      req.body.resource_name,
      req.body.january,
      req.body.february,
      req.body.march,
      req.body.april,
      req.body.may,
      req.body.june,
      req.body.july,
      req.body.august,
      req.body.september,
      req.body.october,
      req.body.november,
      req.body.december
    ], function (result) {
      res.json(result);
    })
});

// Route to get a Monthly Allocation Sum
router.post("/getResourcesTotal", function (req, res) {
  gamePlanData.getResourcesTotal([
    "resource_name",
    "resource_role",
    "resource_location",
    "resource_runrate",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ], [
      req.body.resource_name,
      req.body.resource_role,
      req.body.resource_location,
      req.body.resource_runrate,
      req.body.january,
      req.body.february,
      req.body.march,
      req.body.april,
      req.body.may,
      req.body.june,
      req.body.july,
      req.body.august,
      req.body.september,
      req.body.october,
      req.body.november,
      req.body.december
    ], function (result) {
      res.json(result);
    })
});

// Route to get All Resources Monthly Totals
router.post("/getAllTotals", function (req, res) {
  gamePlanData.getAllTotals([
    "resource_name",
    "resource_role",
    "resource_location",
    "resource_runrate",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ], [
      req.body.resource_name,
      req.body.resource_role,
      req.body.resource_location,
      req.body.resource_runrate,
      req.body.janTotal,
      req.body.febTotal,
      req.body.marTotal,
      req.body.aprTotal,
      req.body.mayTotal,
      req.body.junTotal,
      req.body.julTotal,
      req.body.augTotal,
      req.body.sepTotal,
      req.body.octTotal,
      req.body.novTotal,
      req.body.decTotal,
      req.body.totalAllFTE
    ], function (result) {
      res.json(result);
    })
});

module.exports = router;

