var converter = require('./converter');

var data = 
[
        {
                "info": {
                    "name": "Mike"
                },
                "coursesTaken": [["CS2500"], ["CS2510"]],
                "year": "Sophomore"
        },
        {
                "info": {
                    "name": "John"
                },
                "coursesTaken": [["ANTH1101"], ["POL2312", "MATH2142"], "POL3305", "LAW2100"],
                "year": "Senior"
        },
        {
                "info": {
                            "name": "Joe"
                },
                "coursesTaken": [],
                "year": "Freshman"
        }
];

var callback = function (err, csv) {
	if (err) {
		console.log(err);
	} else {
		console.log(csv);
	}
};

var opts = {
    DELIMITER: { FIELD: ',', ARRAY: '/' }
};

converter.json2csv(data, callback, opts);
