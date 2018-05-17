require('dotenv').config();

const fs = require('fs');
var Geocodio = require('geocodio');

var config = {
  api_key: process.env.API_KEY
};
var geocodio = new Geocodio(config);

const FOOD_LION = 'Food Lion';

// Place store name before address with a comma immediately after
// i.e. 'Food Lion, 435 test address'
let foodLionLocations = [
  '1499 NEW WALKERTOWN ROAD		WINSTON-SALEM	NC	27101',
  '21 SPARTA ROAD		NORTH WILKESBORO	NC	28659',
  '1210 HWY 70 WEST		MARION	NC	28752',
  '1072 N MAIN ST.		WALNUT COVE	NC	27052',
  '1605 Way St, Reidsville, NC 27320',
  '120 BOST ROAD		MORGANTON	NC	28655',
  '110 E. FAIRFIELD DR, UNIT 101		HIGH POINT	NC	27263',
  '616 S. STATE STREET		YADKINVILLE	NC	27055',
  '7760 N. POINT BLVD.		WINSTON-SALEM	NC	27106',
  '629 S ANDY GRIFFITH PARKWAY	SUITE 112	MOUNT AIRY	NC	27030',
  '1526 NORTH BRIDGE STREET		ELKIN	NC	28621',
  '4615 YADKINVILLE ROAD		PFAFFTOWN	NC	27040',
  '4548 US HWY 220		SUMMERFIELD	NC	27358',
  '980 SOUTH MAIN STREET		KERNERSVILLE	NC	27284',
  '4653 MARKET STREET		GREENSBORO	NC	27402',
  '5200 US-29 BUS, Reidsville, NC 27320',
  '614 BURTON STREET		MADISON	NC	27025',
  '350 WATAUGA VILLAGE DRIVE		BOONE	NC	28607',
  '3800 REYNOLDA ROAD, SUITE 80		WINSTON-SALEM	NC	27106',
  '1050 HIGHWAY 65		RURAL HALL	NC	27045',
  '110 Fiddlers Run Blvd, Morganton, NC 28655',
  '733 EAST MAIN STREET		JEFFERSON	NC	28640',
  '2116 MORGANTON BLVD		LENOIR	NC	28645',
  '576 EAST FLEMING		MORGANTON	NC	28655',
  '2931 NC Hwy 16, Millers Creek, NC 28651',
  '600 E ATKINS STREET		DOBSON	NC	27017',
  '7605 NC HWY 68 N, SUITE C		OAK RIDGE	NC	27310',
  '205 E MEADOW RD SUITE 131		EDEN	NC	27288',
  '3935 BRIAN JORDAN PLACE		HIGH POINT	NC	27265',
  '118 W MAIN STREET		JAMESTOWN	NC	27282',
  '2380 W North Carolina 10, Newton, NC 28658',
  '1300 WESTWOOD LANE		WILKESBORO	NC	28697',
  '2316 E. MARKET STREET		GREENSBORO	NC	27401',
  '1864 OLD 421 S, SUITE D		BOONE	NC	28607',
  '6370 NC HWY 66		KING	NC	27021',
  '511 US HWY 70 EAST		HILDEBRAN	NC	28637',
  '3008 OLD HOLLOW RD.		WALKERTOWN	NC	27051',
  '4709 LAWNDALE DRIVE		GREENSBORO	NC	27408',
  '1136 W. PINE STREET		MOUNT AIRY	NC	27030',
  '2208 GOLDEN GATE DRIVE		GREENSBORO	NC	27405',
  '617 NORTH MAIN STREET		KERNERSVILLE	NC	27284',
  '1911 COLISEUM BLVD		GREENSBORO	NC	27403',
  '3078 HICKORY BLVD.		HUDSON	NC	28638',
  '3555 TYNECASTLE HIGHWAY		BANNER ELK	NC	28604',
  '705 SOUTH MAIN STREET, UNIT P		KING	NC	27021',
  '1023 ALAMANCE CHURCH ROAD		GREENSBORO	NC	27406',
  '1215 W Lebanon St, Mt Airy, NC 27030',
  '827 MAIN STREET SW		VALDESE	NC	28690',
  '104 THORNBURG DRIVE SE UNIT J		CONOVER	NC	28613',
  '3505 PATTERSON AVENUE		WINSTON-SALEM	NC	27105',
  '3206 NC-127, Hickory, NC 28602',
  '381 SOUTH MAIN ST, SUITE 508		SPARTA	NC	28675',
  '1316 LEES CHAPEL ROAD		GREENSBORO	NC	27405',
  '1107 E LEXINGTON AVE		HIGH POINT	NC	27262',
  '3220 SPRINGS ROAD NE		HICKORY	NC	28601',
  '1390 N Old North Carolina Hwy 16, Newton, NC 28658',
  '1130 FREEWAY DR.		REIDSVILLE	NC	27320',
  '101 VALLEY DRIVE		JONESVILLE	NC	28642',
  '120 W. MEADOWVIEW ROAD		GREENSBORO	NC	27406',
  '2720 2ND AVE. NW		HICKORY	NC	28601',
  '4634 HICONE ROAD, UNIT H		GREENSBORO	NC	27405',
  '2217 FLEMING ROAD		GREENSBORO	NC	27410',
  '1230 BURKEMONT AVE		MORGANTON	NC	28655',
  '847 WILKSBORO BLVD N		LENOIR	NC	28645',
  '10102-F SOUTH MAIN ST.		ARCHDALE	NC	27263',
  '7533 VALLEY BLVD		BLOWING ROCK	NC	28605',
  '2705 N MAIN ST, SUITE 103		HIGH POINT	NC	27260',
  '647E S. KEY STREET, SUITE E		PILOT MOUNTAIN	NC	27041',
  '824 S VAN BUREN ROAD, UNIT E		EDEN	NC	27288',
  '2625 N CENTER ST		HICKORY	NC	28601',
  '799 W MAIN AVENUE		TAYLORSVILLE	NC	28681'
];

(function() {
  foodLionLocations = foodLionLocations.map(
    location => `${location.replace(/\s+/g, ' ')}`
  );

  // const locations = foodLionLocations.concat([
  //   'Virginia Carolina Enterprises, 16125 Fancy Gap Hwy, Cana, VA 24317'
  // ]);

  geocodio.post('geocode', foodLionLocations, function(err, response) {
    if (err) throw err;
    const locationInfo = [];

    response.results.forEach(item => {
      if (
        item.response &&
        item.response.results &&
        item.response.results.length &&
        item.response.results[0].formatted_address
      ) {
        const resultObj = item.response.results[0];

        const location = {
          address: resultObj.formatted_address,
          geometry: resultObj.location,
          storeName: item.query.substr(0, item.query.indexOf(','))
        };

        locationInfo.push(location);
      }
    });

    if (locationInfo.length === foodLionLocations.length) {
      fs.writeFile(
        './src/utils/locations.json',
        JSON.stringify(locationInfo),
        function(err) {
          if (err) {
            return console.log(err);
          }
          console.log('The file was saved!');
        }
      );
    }
  });
})();
