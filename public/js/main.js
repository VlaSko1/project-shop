// Class, displays products on the page.
class ProductsList{
  constructor(currencyData) {
    this.currencyUser = '';
    this.currencyData = currencyData;
    this.dataRandom = [];
    this.IP = '';
  }
  /**
   * Gets the user's IP address
   * Gets the user's currency based on their IP address
   * Receives products from a third-party server and displays them on the page
   */
  _init() {
    this._getIp()
      .then(data => {
        this._getCurrency(data)
          .then(result => result.json())
          .then(({country, currency}) => {
            this.currencyUser = currency;
          })
          .catch(err => {
            console.log(err);
            this.currencyUser = 'RUB'
          });
      })
      .catch(err => {
        console.log(err);
        this.currencyUser = 'RUB'
      })
      .finally(() => {
        this._dataGet()
        .then(result => result.json())
        .then(data => {
          this.dataRandom = data;
          this._random(this.dataRandom)
        })
        .catch(error => console.log(error));
      })
  }
  /**
   * Sends a GET request to a third-party server to receive goods 
   */
  _dataGet(){
    console.log('Request to server sent!');
    return fetch(`https://sleepy-mountain-57756.herokuapp.com/api/request`, {
      method: 'GET',
      contentType: 'application/json',
      mode: 'cors'  
    }) 
  }

  /**
   * Creates html markup product as a string
   * @param {array} product - the object with the product data that you want to display on the page
   * @param {string} currency - the currency code of the user
   * @returns {string} - returns the html markup of the item as a string
   */
  _createProduct(product, currency){
    return `<div class="product">
              <h3 class="name">${product.name.toUpperCase()}</h3>
              <p class="description">${product.description}</p>
              <p class="price">${this._setCurrency(product.price, currency)}<span>${this._setGrapheme(currency)}</span></p> 
            </div>`
  }
  /**
   * Displays products on the page
   * @param {Object[]} arr - array of goods objects
   */
  _random(arr){
    let mainBlock = document.querySelector('.products');
    let tempVariable = ``;
    for (let i = 0; i < arr.length; i++) {
      tempVariable += this._createProduct(arr[i], this.currencyUser);
    }
    mainBlock.innerHTML = tempVariable;
  }
  
  /**
   * Returns the user's IP
   */
  _getIp() {
    return new Promise((resolve, reject) => {
      if(IP) {
        this.IP = IP;
        resolve(IP)
      } else {
        reject("error");
      }
    });
  }
  /**
   * Sends a request to a third-party server and receives the user's currency code
   * @param {string} data - User IP address
   */
  _getCurrency(data) {
     return fetch(`http://ip-api.com/json/${data}?fields=country,currency`, {
      method: 'GET',
      contentType: 'application/json',
      mode: 'cors'  
    })
  }
  /**
   * Displays the price of the product depending on the user's currency
   * @param {string} price - the price of the goods in the reference currency (Russian ruble)
   * @param {string} currencyUs - the currency code of the user
   * @returns {string} returns the price of the item in the user's currency
   */
  _setCurrency(price, currencyUs){
    let objData = this.currencyData.find(el => el.letters === currencyUs);
    let priceLocal = +price/(+objData.ratio);
    return priceLocal.toFixed(2);
  }
  /**
   * Displays the sign or currency code depending on the user's currency
   * @param {string} currencyUs - the currency code of the user
   * @returns {string} returns the sign or currency code of the user
   */
  _setGrapheme(currencyUs) {
    let objData = this.currencyData.find(el => el.letters === currencyUs);
    if(objData.grapheme !== 'no'){
      return objData.grapheme;
    } else {
      return objData.letters;
    }
  }
}

const products = new ProductsList(currencyData.currencyArrObj);

window.onload = products._init();