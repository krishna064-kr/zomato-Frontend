//feature card icons
import saftyIcon from '../src/assets/icons/safetyIcon.png'
import offerIcon from '../src/assets/icons/offerIcon.png'
import trendingPlacesIcon from '../src/assets/icons/trendingPlace.png'
import netArrivalsIcon from '../src/assets/icons/netArrivalsIcon.png'
import expressDeliveryIcon from '../src/assets/icons/expressDeliveryIcon.png'

// footer icons
import orderIcon from '../src/assets/icons/order-icon-png-22.jpg'
import goldIcon from '../src/assets/icons/goldIcon.png'
import goOutIcon from '../src/assets/icons/goOutIcon.png'
import sneakpeekIcon from '../src/assets/icons/sneakpeekIcon.png'

//header logo
import map from '../src/assets/icons/vecteezy_map-pointer-png-art-icons-and-graphics_16314482_178.png'
import searchIcon from '../src/assets/icons/searchIcon.png'

const featureCardDetails = [
    {
      icon: expressDeliveryIcon,
      name: `Express \nDelivery`,
    },
    {
      icon: saftyIcon,
      name: `Safely \nSealed`,
    },
    {
      icon: offerIcon,
      name: `Great \nOffers`,
    },
    {
      icon: netArrivalsIcon,
      name: `Net \nArrivals`,
    },
    {
      icon: trendingPlacesIcon,
      name: `Trending \nPlaces`,
    },
  ];

  const restroCardDetails = [
    {
      restaurantImgUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      RestroName: 'Le Tavern Grill',
      cuisine: 'Fast food, cafe, chinese',
      address:"South Delhi INN, Burger king ,Hari Nagar Ashram,New Delhi",
      cost: '60',
      offer: '10',
      rating: '4.6',
    },
    {
      restaurantImgUrl: 'https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2019/10/IMG_0774_copy.jpg',
      RestroName: 'Choice Foodsl',
      cuisine: 'Signature Surf and Turf',
      address:"South Delhi INN, Burger king ,Hari Nagar Ashram,New Delhi",
      cost: '75',
      offer: '20',
      rating: '4.5',
    },
    {
      restaurantImgUrl: 'https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2019/10/Blog-10-1030x538.jpg',
      RestroName: 'King of Meat',
      cuisine: 'Thai Red Curry with Shrimp',
      address:"South Delhi INN, Burger king ,Hari Nagar Ashram,New Delhi",
      cost: '30',
      offer: '30',
      rating: '4.0',
    },
    {
      restaurantImgUrl: 'https://www.awesomealpharetta.com/wp-content/uploads/2017/09/Amma-Kitchen-400x260.jpg',
      RestroName: 'The Hungry Chef',
      cuisine: 'Gourmet Burger Trio',
      address:"South Delhi INN, Burger king ,Hari Nagar Ashram,New Delhi",
      cost: '12',
      offer: '60',
      rating: '4.2',
    },
    {
      restaurantImgUrl: 'https://www.awesomealpharetta.com/wp-content/uploads/2020/11/zyka_alpharetta-400x260.jpg',
      RestroName: 'Zestful Zestaurant',
      cuisine: 'Decadent Chocolate Lava Cake',
      address:"South Delhi INN, Burger king ,Hari Nagar Ashram,New Delhi",
      cost: '12',
      offer: '20',
      rating: '3.9',
    },
  ];

  const footerIcons = {
        orderIcon,
        goldIcon,
        goOutIcon,
        sneakpeekIcon

    };

  const headerLogo = {
    map,
    searchIcon
  }
  const UI_Data = {
    Food_Orders : ['Your orders','Favorite order', 'Address book', 'Hidden Restaurants', 'online orddering help'],
    Coupons:['Collected coupons'],
    Money:['Buy Gift Card', 'Claim Gift Card', 'Gift Card order history', 'Zomato Credits', 'Gift Cards help'],
    More:['Choose language', 'About', 'Send feedback', 'Get Feeding India recipt', 'Report a safity emergency', 'Log out' ]
  }
  export {featureCardDetails,restroCardDetails, footerIcons,headerLogo,UI_Data};