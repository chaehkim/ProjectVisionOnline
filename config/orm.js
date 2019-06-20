// Import MySQL connection.
var connection = require("../config/connection.js");
// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // Loop through the keys and push the key/value as a string into array
  for (var key in ob) {
    var value = ob[key];
    // Check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
  // Object for all our SQL statement functions.

  // Get User Login
  getAllUsers: function (tableName, columns, columnValues, cb) {
    var queryString = "SELECT * FROM " + tableName;
    connection.query(queryString, columnValues, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //  Get All Projects
  getAllProjects: function (tableName, columns, columnValues, cb) {
    var queryString = "SELECT * FROM " + tableName;

    connection.query(queryString, columnValues, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //  Get All Resources
  getAllResources: function (tableName, columns, columnValues, cb) {
    var queryString = "SELECT * FROM " + tableName;
    queryString += " order by case when resources.resource_role = 'PM' THEN 1 ELSE 2 END, resources.resource_role;"
    connection.query(queryString, columnValues, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // Insert into projects and resources
  insert: function (tableName, columns, columnValues, cb) {
    var queryString = "INSERT INTO " + tableName;
    queryString += " (";
    queryString += columns.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(columnValues.length);
    queryString += ") ";
    connection.query(queryString, columnValues, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //  Get a Project's Allocations
  getProjectAllocations: function (tableName, columns, columnValues, cb) {
    var queryString = "SELECT resources.resource_name, resources.resource_role, resources.resource_location, resources.resource_runrate, allocations.*, (january + february + march + april + may + june + july + august + september + october + november + december) as annualizedFTE FROM resources INNER JOIN allocations ON resources.resource_name=allocations.resource_name where allocations.project_name = "
    queryString += printQuestionMarks(columnValues.length);
    queryString += " order by case when resources.resource_role = 'PM' THEN 1 ELSE 2 END, resources.resource_role;"
    connection.query(queryString, columnValues, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //  Get a Project's Allocations Totals
  getProjectAllocationsTotals: function (tableName, columns, columnValues, cb) {
    var queryString = "SELECT sum(january) as janProjectTotal, sum(february) as febProjectTotal, sum(march) as marProjectTotal, sum(april) as aprProjectTotal, sum(may) as mayProjectTotal, sum(june) as junProjectTotal, sum(july) as julProjectTotal, sum(august) as augProjectTotal, sum(september) as sepProjectTotal, sum(october) as octProjectTotal, sum(november) as novProjectTotal, sum(december) as decProjectTotal, (sum(january) + sum(february) + sum(march) + sum(april) + sum(may) + sum(june) + sum(july) + sum(august) + sum(september) + sum(october) + sum(november) + sum(december)) as totalProjectFTE FROM allocations where allocations.project_name = "
    queryString += printQuestionMarks(columnValues.length);
    connection.query(queryString, columnValues, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //  Get Resource's Details
  getResourceDetails: function (tableName, columns, columnValues, cb) {
    var queryString = "SELECT * FROM " + tableName;
    queryString += " WHERE " + columns;
    queryString += " = ";
    queryString += printQuestionMarks(columnValues.length);
    connection.query(queryString, columnValues, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //  Get Monthly Allocation Sums
  getResourcesTotal: function (tableName, columns, columnValues, cb) {
    var queryString = "truncate table totalAllocations;"
    connection.query(queryString, columnValues, function (err, result) {
      if (err) {
        throw err;
      }
    });
    var queryString = "insert into totalAllocations (resource_name, resource_role, resource_location, resource_runrate, january, february, march, april, may, june, july, august, september, october, november, december) SELECT resources.resource_name, resources.resource_role, resources.resource_location, resources.resource_runrate, sum(january) as january, sum(february) as february, sum(march) as march, sum(april) as april, sum(may) as may, sum(june) as june, sum(july) as july, sum(august) as august, sum(september) as september, sum(october) as october, sum(november) as november, sum(december) as december FROM resources LEFT JOIN allocations ON resources.resource_name = allocations.resource_name group by resources.resource_name, resources.resource_role, resources.resource_location, resources.resource_runrate order by case when resources.resource_role = 'PM' THEN 1 ELSE 2 END, resources.resource_role;"
    connection.query(queryString, columnValues, function (err, result) {
      if (err) {
        throw err;
      }
    });
    var queryString = "SELECT *, (january + february + march + april + may + june + july + august + september + october + november + december) as totalFTE from totalAllocations;"
    connection.query(queryString, columnValues, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    })
  },

  //  Get Monthly Allocation Totals
  getAllTotals: function (tableName, columns, columnValues, cb) {
    var queryString = "SELECT sum(january) as janTotal, sum(february) as febTotal, sum(march) as marTotal, sum(april) as aprTotal, sum(may) as mayTotal, sum(june) as junTotal, sum(july) as julTotal, sum(august) as augTotal, sum(september) as sepTotal, sum(october) as octTotal, sum(november) as novTotal, sum(december) as decTotal, (sum(january) + sum(february) + sum(march) + sum(april) + sum(may) + sum(june) + sum(july) + sum(august) + sum(september) + sum(october) + sum(november) + sum(december)) as totalAllFTE from totalAllocations;"
    connection.query(queryString, columnValues, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    })
  },

}

module.exports = orm;