//============Task1=====================
let city = {
    Zarephath: 728375,
    Reinerton: 864402,
    Spelter: 340533,
    Henrietta: 932557,
    Dyckesville: 421758,
    Yettem: 250492,
    Gracey: 551885,
    Floris: 216435,
    Davenport: 290139,
    Tioga: 653031,
    GetMostNumberofPeople: function(){
let max=0, cityname=0;
        for(let key in city){
         if(city[key]>max) {
             max=city[key];
             cityname=key;
            }
        }
        alert(cityname+':'+max);
    }
  }
  city.GetMostNumberofPeople();
 
  let users = [
    {
      index: 0,
      isActive: true,
      balance: 2226.60,
      name: "Eugenia Sawyer",
      gender: "female",
      phone: "+1 (840) 583-3207",
      address: "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
      index: 1,
      isActive: true,
      balance: 2613.77,
      name: "Pauline Gallegos",
      gender: "female",
      phone: "+1 (985) 593-3328",
      address: "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
      index: 2,
      isActive: false,
      balance: 3976.41,
      name: "Middleton Chaney",
      gender: "male",
      phone: "+1 (995) 591-2478",
      address: "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
      index: 3,
      isActive: true,
      balance: 1934.58,
      name: "Burns Poole",
      gender: "male",
      phone: "+1 (885) 559-3422",
      address: "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
      index: 4,
      isActive: true,
      balance: 3261.65,
      name: "Mcfadden Horne",
      gender: "male",
      phone: "+1 (942) 565-3988",
      address: "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
      index: 5,
      isActive: false,
      balance: 1790.56,
      name: "Suzette Lewis",
      gender: "female",
      phone: "+1 (837) 586-3283",
      address: "314 Dunne Place, Bawcomville, Guam, 9053"
    }
  ]
  function GetPhoneNumberAndSumaryBalance(users){
    let summarybalance=0;
    for(let i=0;i<users.length;i++){
         if (users[i].balance>2000) {
             console.log(users[i].phone);
             summarybalance +=users[i].balance;
            }
      }
      console.log("summarybalance="+summarybalance);

  }
  GetPhoneNumberAndSumaryBalance(users);
  //==========Task3================
  function Worker(name,surname, rate, days){
      this.name = name;
      this.surname= surname;
      this.rate = new Number(rate);
      this.days = new Number(days);
      this.getSalary = function (){
          let salary= new Number(0);
         return salary = this.days * this.rate;
      }
  }
  var worker = new Worker ('Іван', 'Іванов', 10, 31);

  console.log (worker.name);
  console.log (worker.surname);
  console.log (worker.rate); 
  console.log (worker.days);
  console.log (worker.getSalary ());
  