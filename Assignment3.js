class restaurantManager{

    restaurantList= [{ 
        id: 1,
        restaurantName: 'KFC',
        address: 'Grand Majestic Mall',
        city: 'Bangalore'
    },
    {
        id: 2,
        restaurantName: 'Dominos',
        address: 'Lulu Mall, Edapally',
        city: 'Kochi'
    },
    {
        id: 3,
        restaurantName: 'Burger King',
        address: 'Center Square',
        city: 'Kochi'
    },
    {
        id: 4,
        restaurantName: 'Subway',
        address: 'Phoenix Marketcity',
        city: 'Mumbai'
    }];
       
    
    printAllRestaurantNames = () => {
        return this. restaurantList.map(restaurant =>restaurant.restaurantName);
    }
    
    filterRestaurantByCity = (cityname) => {
        return this.restaurantList.filter(restaurant =>restaurant.city==cityname)
    }
 }

 var restaurantObject= new restaurantManager();

 console.log(restaurantObject.printAllRestaurantNames());
 console.log(restaurantObject.filterRestaurantByCity("Kochi"));

 orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
    };
//calculate total  number of orders
    var values  = Object.values(orderData)
    console.log(values);
    var total= values.reduce((first,second)=>first+second)
    console.log(total);

//Calculate the number of order proportion options
    var data= Object.keys(orderData);
    console.log(data);

//Calculate the percentage of each proportion
var arr = [];
const response = data.map((item, index) => {
      const obj = {
          'id' : index + 1,
          'order': item,
          'orderpercentage' : ((orderData[item]/total )*100).toFixed(2),  
          'restaurant': 'Punjabi Tadka'
      }
      arr.push(obj);
})

console.log(arr);




