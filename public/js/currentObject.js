// A class that creates an array of data objects based on local variables
class DataExchange {
  constructor(name, currency, letters, grapheme, ratio){
    this.objName = name;
    this.currency = currency;
    this.letters = letters;
    this.grapheme = grapheme;
    this.ratio = ratio;
    this.arrName = [];
    this.arrCurrency = [];
    this.arrLetters = [];
    this.arrGrapheme = [];
    this.arrRatio = [];
    this.currencyArrObj = [];
    this._init();
  }
  /**
   * The method starts creating a database of world currencies based on local variables
   */
  _init(){
    this.arrName = this._dataInArr(this.objName);
    this.arrCurrency = this._dataInArr(this.currency);
    this.arrLetters = this._dataInArr(this.letters);
    this.arrGrapheme = this._dataInArr(this.grapheme);
    this.arrRatio = this._dataInArr(this.ratio, '2000');

    this.currencyArrObj = this._createArrObject(this.arrName);
    this._addPropertyArrObj(this.currencyArrObj, this.arrCurrency, 'currency');
    this._addPropertyArrObj(this.currencyArrObj, this.arrLetters, 'letters');
    this._addPropertyArrObj(this.currencyArrObj, this.arrGrapheme, 'grapheme');
    this._addPropertyArrObj(this.currencyArrObj, this.arrRatio, 'ratio');
  }
  /**
   * Creates an array from a string 
   * @param {string} stringData - the string from which the array is created
   * @param {string | number} num - a separator that separates elements in an array from each other
   * @returns {array} returns an array based on stringData delimited by num
   */
  _dataInArr(stringData, num = 9) {
    let arr = stringData.split(num);
    return arr;
  }
  /**
   * Creates a new array whose elements are objects whose properties name are equal to the values of the original array
   * @param {array} arr - the original array on the basis of which the new array will be created
   * @returns {Object[]} returns an array of objects whose properties name are equal to the values of the original array
   */
  _createArrObject(arr) {
    let arrWithObj = [];
    for(let i = 0; i < arr.length; i++) {
      arrWithObj.push({name: arr[i]});
    }
    return arrWithObj;
  }
  /**
   * Creates in each array element 'arrObj' new property 'prop' based on array 'arr'
   * @param {Object[]} arrObj - source array of objects
   * @param {array} arr - an array whose elements are added as new properties to the array elements 'arrObj'
   * @param {string} prop - the name of the property that will be added to each element of the array 'arrObj'
   */
  _addPropertyArrObj(arrObj, arr, prop){
    if(arrObj.length !== arr.length) {
      return console.log(false);
    }
    for (let i = 0; i < arrObj.length; i++){
      arrObj[i][prop] = arr[i];
    }
  }

}

let objName = 'Madagascar9Afghanistan9Panama9Thailand9Venezuela9Bolivia9Ethiopia9Vanuatu9North Korea9South Korea9Ukraine9Paraguay9Netherlands Antilles9Haiti9Gambia9Northern Macedonia9Algeria9Bahrain9Jordan9Iraq9Kuwait9Libya9Serbia9Tunisia9Morocco9United Arab Emirates9Sao Tome and Principe9Australia9Bahamas9Barbados9Belize9Bermuda9Brunei9Guyana9Hong Kong9Cayman islands9Canada9Liberia9Namibia9new Zealand9Singapore9Solomon islands9USA9Suriname9Taiwan9Trinidad and Tobago9Fiji9Jamaica9Vietnam9Armenia9Eurozone Countries9Poland9Japan9Angola9Zambia9Malawi9Guatemala9Papua New Guinea9Laos9costa rica9Nicaragua9Denmark9Iceland9Norway9Faeroe islands9Czechia9Sweden9Croatia9Myanmar9Georgia9Bulgaria9Moldavia9Romania9Albania9Honduras9sierra leone9Swaziland9Turkey9Lesotho9Azerbaijan9Turkmenia9Bosnia and Herzegovina9Mozambique9Nigeria9Eritrea9Bhutan9Tonga9Macao9Argentina9Dominican Republic9Colombia9Cuba9Mexico9Uruguay9Philippines9Chile9Botswana9Brazil9Iran9Yemen9Qatar9Oman9Cambodia9Malaysia9Saudi Arabia9Byelorussia9Russia9India9Indonesia9Mauritius9Nepal9Pakistan9Seychelles9sri lanka9Maldives9SA9Ghana9Peru9Kyrgyzstan9Tajikistan9Uzbekistan9Bangladesh9Samoa9Kazakhstan9Mongolia9Mauritania9Aruba9Hungar9Burundi9Guinea9Djibouti9Comoros9Democratic Republic Of The Congo9Rwanda9Switzerland9Overseas possessions of France9UEMOA9CEMAC9Britain9Gibraltar9Egypt9Lebanon9Saint Helena9Syria9Sudan9Falkland islands9Israel9Kenya9Somalia9Tanzania9Uganda9Cape Verde9China';

let currency = `Ariary9Afghani9Balboa9Baht9Bolivar Fuerte9Boliviano9Birr9Cotton9Won9Won9Hryvnia9Guarani9Guilder9Gourde9Dalasi9Denar9Dinar9Dinar9Dinar9Dinar9Dinar9Dinar9Dinar9Dinar9Dirham9Dirham9Good9Dollar9Dollar9Dollar9Dollar9Dollar9Dollar9Dollar9Dollar9Dollar9Dollar new9Dollar9Dollar9Dollar9Dollar9Dollar9Dollar9Dollar9Dollar new9Dollar9Dollar9Dollar9Dong9Dram9Euro9PLN9Yen9Cuanza9Kwacha9Kwacha9Quetzal9Kina9Kip9Colon9Cordoba9Crown9Crown9Crown9Crown9Crown9Crown9Kuna9Kyat9Lari9Lion9LEU9Lay new9Lek9Lempira9Leone9Lilangeni9Lira9Loti9Manat9Manat9Bosnia and Herzegovina convertible Marka9Metical9Naira9Nakfa9Ngultrum9PA'anga9Pataca9Peso9Peso9Peso9Peso9Peso9Peso9Peso9Peso9Pools9Real9Rial9Rial9Rial9Rial9Riel9Ringgit9Riyal9Ruble9Ruble9Rupee9Rupee9Rupee9Rupee9Rupee9Rupee9Rupee9Rufio9Rand9Cedi9Salt new9Som9TJS9Sum9Taka9Tala9Tenge9Tugrik9Ouguiya9Florin9Forint9Franc9Franc9Franc9Franc9Franc9Franc9Franc9Frank KPF9CFA franc9CFA franc9Pound9Pound9Pound9Pound9Pound9Pound9Pound9Pound9Shekel new9Shilling9Shilling9Shilling9Shilling9Escudo9Yuan`;

let letters = `MGA9AFN9PAB9THB9VES9BOB9ETB9VUV9KPW9KRW9UAH9PYG9ANG9HTG9GMD9MKD9DZD9BHD9JOD9IQD9KWD9LYD9RSD9TND9MAD9AED9STN9AUD9BSD9BBD9BZD9BMD9BND9GYD9HKD9KYD9CAD9LRD9NAD9NZD9SGD9SBD9USD9SRD9TWD9TTD9FJD9JMD9VND9AMD9EUR9PLN9JPY9AOA9ZMW9MWK9GTQ9PGK9LAK9CRC9NIO9DKK9ISK9NOK9DKK9CZK9SEK9HRK9MMK9GEL9BGN9MDL9RON9ALL9HNL9SLL9SZL9TRY9LSL9AZN9TMT9BAM9MZN9NGN9ERN9BTN9TOP9MOP9ARS9DOP9COP9CUP9MXN9UYU9PHP9CLP9BWP9BRL9IRR9YER9QAR9OMR9KHR9MYR9SAR9BYN9RUB9INR9IDR9MUR9NPR9PKR9SCR9LKR9MVR9ZAR9GHS9PEN9KGS9TJS9UZS9BDT9WST9KZT9MNT9MRU9AWG9HUF9BIF9GNF9DJF9KMF9CDF9RWF9CHF9XPF9XOF9XAF9GBP9GIP9EGP9LBP9SHP9SYP9SDG9FKP9ILS9KES9SOS9TZS9UGX9CVE9CNY`;

let grapheme = `no9no9฿9no9$9no9no9₩9₩9₴9₲9ƒ9no9no9no9no9no9no9no9no9no9no9no9no9no9no9no9$9$9$9$9$9$9$9$9$9$9$9$9$9$9$9$9$9$9$9$9$9₫9no9€9no9¥9no9no9no9no9no9₭9₡9$9no9no9no9no9no9no9no9no9no9no9no9no9no9no9no9no9₺9no9₼9no9no9no9₦9no9no9$9$9$9$9$9$9$9$9₱9$9no9$9no9no9no9no9៛9no9no9no9₽9₹9Rs9Rs9Rs9Rs9no9Rs9no9no9₵9no9no9no9no9৳9$9₸9₮9no9ƒ9ƒ9no9no9no9no9no9no9no9no9no9no9£9£9£9£9£9£9£9£9₪9no9no9no9no9$9¥`;

let ratio = `0.017220000.82200064.4720002.120000.0030920009.3320002.1920000.5520000.071620000.053720002.6820000.0102200036.0220000.6720001.2820001.1420000.532000171.46200090.9320000.0542000211.88200045.6720000.6200022.4320006.64200017.5520002.88200043.59200064.47200032.23200031.99200064.47200046.6820000.3120008.22200078.62200048.6520000.3120004.25200040.58200046.6820008.05200064.47200046.6820002.0820009.51200029.3420000.4820000.0027820000.14200070.56200016.120000.620000.1720004.8920000.08820008.35200018.9520007.3220000.1120001.9220009.4520000.5220007.120009.4520002.7320006.5820009.5220000.0421200021.78200036.0820003.64200014.8420000.5820002.6220006.8620004.25200011.3620004.25200038200018.42200036.0820001.0420000.1820004.320000.91200027.8820007.9820001.1220009.5120000.018620002.4320003.2820001.7520001.2420000.088720005.84200015.5220000.0015420000.26200017.712000167.6720000.0157200015.37200017.19200031.072000120000.9120000.0045520001.7720000.5720000.4120004.7220000.3520004.1920004.25200011.92200019.0320000.9220006.6520000.0068420000.76200024.0220000.1720000.024220001.76200036.0220000.2120000.034920000.0069820000.3620000.1420000.038820000.0698200065.0120000.5920000.1120000.11200079.4200079.420003.9520000.0428200079.420000.1320001.43200079.4200018.5220000.6220000.1120000.028120000.017520000.6420009.05`;


const currencyData = new DataExchange(objName, currency, letters, grapheme, ratio);

