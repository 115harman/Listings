var i;


var states = [
    { "name": "Alabama", "abbreviation": "AL" },
    { "name": "Montana", "abbreviation": "MT" },
    { "name": "Alaska", "abbreviation": "AK" },
    { "name": "Nebraska", "abbreviation": "NE" },
    { "name": "Arizona", "abbreviation": "AZ" },
    { "name": "Nevada", "abbreviation": "NV" },
    { "name": "Arkansas", "abbreviation": "AR" },
    { "name": "New Hampshire", "abbreviation": "NH" },
    { "name": "California", "abbreviation": "CA" },
    { "name": "New Jersey", "abbreviation": "NJ" },
    { "name": "Colorado", "abbreviation": "CO" },
    { "name": "New Mexico", "abbreviation": "NM" },
    { "name": "Connecticut", "abbreviation": "CT" },
    { "name": "New York", "abbreviation": "NY" },
    { "name": "Delaware", "abbreviation": "DE" },
    { "name": "North Carolina", "abbreviation": "NC" },
    { "name": "Florida", "abbreviation": "FL" },
    { "name": "North Dakota", "abbreviation": "ND" },
    { "name": "Georgia", "abbreviation": "GA" },
    { "name": "Ohio", "abbreviation": "OH" },
    { "name": "Hawaii", "abbreviation": "HI" },
    { "name": "Oklahoma", "abbreviation": "OK" },
    { "name": "Idaho", "abbreviation": "ID" },
    { "name": "Oregon", "abbreviation": "OR" },
    { "name": "Illinois", "abbreviation": "IL" },
    { "name": "Pennsylvania", "abbreviation": "PA" },
    { "name": "Indiana", "abbreviation": "IN" },
    { "name": "Rhode Island", "abbreviation": "RI" },
    { "name": "Iowa", "abbreviation": "IA" },
    { "name": "South Carolina", "abbreviation": "SC" },
    { "name": "Kansas", "abbreviation": "KS" },
    { "name": "South Dakota", "abbreviation": "SD" },
    { "name": "Kentucky", "abbreviation": "KY" },
    { "name": "Tennessee", "abbreviation": "TN" },
    { "name": "Louisiana", "abbreviation": "LA" },
    { "name": "Texas", "abbreviation": "TX" },
    { "name": "Maine", "abbreviation": "ME" },
    { "name": "Utah", "abbreviation": "UT" },
    { "name": "Maryland", "abbreviation": "MD" },
    { "name": "Vermont", "abbreviation": "VT" },
    { "name": "Massachusetts", "abbreviation": "MA" },
    { "name": "Virginia", "abbreviation": "VA" },
    { "name": "Michigan", "abbreviation": "MI" },
    { "name": "Washington", "abbreviation": "WA" },
    { "name": "Minnesota", "abbreviation": "MN" },
    { "name": "West Virginia", "abbreviation": "WV" },
    { "name": "Mississippi", "abbreviation": "MS" },
    { "name": "Wisconsin", "abbreviation": "WI" },
    { "name": "Missouri", "abbreviation": "MO" },
    { "name": "Wyoming", "abbreviation": "WY" }
    ];

    var l = states.length;
    for (i = 0; i < l; i++) {
        states[i].id = i + 1;
    }

    var valid_baths =  [
        
               { id : 1, name : '1 Bathroom', description : '1+', bathCount : '1' },
        
               { id : 2, name : '2 Bathroom', description : '2+', bathCount : '2' },
        
               { id : 3, name : '3 Bathroom', description : '3+', bathCount : '3' },
        
               { id : 4, name : '4 Bathroom', description : '4+', bathCount : '4' }
        
        ];
        
         
        
     var valid_beds =  [
        
               { id : 1, name : '1 Bedroom', description : '1+', bedCount : '1'},
        
               { id : 2, name : '2 Bedroom', description : '2+', bedCount : '2'},
        
               { id : 3, name : '3 Bedroom', description : '3+', bedCount : '3'},
        
               { id : 4, name : '4 Bedroom', description : '4+', bedCount : '4'},
        
               { id : 5, name : '5 Bedroom', description : '5+', bedCount : '5'}
        
        ];
        
         
        
       var valid_price_dictionary = [
        
               { id : 1,  name : '$0 - $50K',           description : '$0 - $50K',               startPrice : 0.0000,   endPrice : 50.0000  },
        
               { id : 2,  name : '$50K - $75K',  description : '$50K - $75K',             startPrice : 50.0000,  endPrice : 75.0000  },
        
               { id : 3,  name : '$75K - $100K', description : '$75K - $100K',            startPrice : 75.0000,  endPrice : 100.0000 },
        
               { id : 4,  name : '$100K - $125K', description : '$100K - $125K',           startPrice : 100.0000, endPrice : 125.0000 },
        
               { id : 5,  name : '$125 - $150K', description : '$125 - $150K',            startPrice : 125.0000, endPrice : 150.0000 },
        
               { id : 6,  name : '$150K - $175K', description : '$150K - $175K',           startPrice : 150.0000, endPrice : 175.0000 },
        
               { id : 7,  name : '$175K - $200K', description : '$175K - $200K',           startPrice : 175.0000, endPrice : 200.0000 },
        
               { id : 8,  name : '$200K - $250K', description : '$200K - $250K',           startPrice : 200.0000, endPrice : 250.0000 },
        
               { id : 9,  name : '$250 - $300K', description : '$250 - $300K',            startPrice : 250.0000, endPrice : 300.0000 },
        
               { id : 10, name : '$300K - $350K', description : '$300K - $350K',           startPrice : 300.0000, endPrice : 350.0000 },
        
               { id : 11, name : '$350K - $400K', description : '$350K - $400K',           startPrice : 350.0000, endPrice : 400.0000 },
        
               { id : 12, name : '$400K - $450K', description : '$400K - $450K',           startPrice : 400.0000, endPrice : 450.0000 },
        
               { id : 13, name : '$450 - $500K', description : '$450 - $500K',            startPrice : 450.0000, endPrice : 500.0000 },
        
               { id : 14, name : '$500K+',              description : '$500K+',                         startPrice : 500.0000, endPrice : ''      }
        
        ]
        
         

module.exports = {
    valid_beds,
    states,
    valid_baths,
    valid_price_dictionary
}