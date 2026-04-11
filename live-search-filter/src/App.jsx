import { useState } from 'react'
import Search from './assets/components/Search'
import CityItem from './assets/components/CityItem';

function App() {

  const cities = [
                    "Tokyo","Delhi","Shanghai","São Paulo","Mexico City","Cairo","Mumbai","Beijing","Dhaka","Osaka",
                    "New York","Karachi","Buenos Aires","Chongqing","Istanbul","Kolkata","Manila","Lagos","Rio de Janeiro","Tianjin",
                    "Kinshasa","Guangzhou","Los Angeles","Moscow","Shenzhen","Lahore","Bangalore","Paris","Bogotá","Jakarta",
                    "Chennai","Lima","Bangkok","Seoul","Nagoya","Hyderabad","London","Tehran","Chicago","Chengdu",
                    "Nanjing","Wuhan","Ho Chi Minh City","Luanda","Ahmedabad","Kuala Lumpur","Xi'an","Hong Kong","Dongguan","Hangzhou",
                    "Foshan","Shenyang","Riyadh","Baghdad","Santiago","Surat","Madrid","Suzhou","Pune","Harbin",
                    "Houston","Dallas","Toronto","Dar es Salaam","Miami","Belo Horizonte","Singapore","Philadelphia","Atlanta","Fukuoka",
                    "Khartoum","Barcelona","Johannesburg","Saint Petersburg","Qingdao","Dalian","Washington","Yangon","Alexandria","Jinan",
                    "Guadalajara","Boston","Sydney","Melbourne","Monterrey","Brasília","Phoenix","Detroit","Berlin","Rome",
                    "Abidjan","Addis Ababa","San Francisco","Casablanca","Cape Town","San Diego","Brasov","Lisbon","Accra","Kabul",
                    "Ankara","Nairobi","Hanoi","Havana","Perth","Brisbane","Doha","Auckland","Oslo","Stockholm",
                    "Copenhagen","Helsinki","Dublin","Zurich","Geneva","Vienna","Prague","Budapest","Warsaw","Krakow",
                    "Brussels","Amsterdam","Rotterdam","The Hague","Antwerp","Luxembourg","Reykjavik","Tallinn","Riga","Vilnius",
                    "Minsk","Kiev","Odessa","Kharkiv","Tbilisi","Yerevan","Baku","Almaty","Astana","Tashkent",
                    "Bishkek","Dushanbe","Ashgabat","Ulaanbaatar","Kathmandu","Thimphu","Colombo","Male","Islamabad","Rawalpindi",
                    "Peshawar","Quetta","Multan","Faisalabad","Sialkot","Gujranwala","Amritsar","Jaipur","Lucknow","Kanpur",
                    "Nagpur","Indore","Bhopal","Patna","Ranchi","Guwahati","Shillong","Imphal","Aizawl","Kohima",
                    "Agartala","Itanagar","Dehradun","Chandigarh","Shimla","Srinagar","Jammu","Panaji","Raipur","Bilaspur",
                    "Jabalpur","Gwalior","Ujjain","Varanasi","Allahabad","Bareilly","Moradabad","Aligarh","Meerut","Ghaziabad",
                    "Noida","Faridabad","Gurgaon","Sonipat","Rohtak","Hisar","Karnal","Ambala","Ludhiana","Jalandhar",
                    "Bathinda","Patiala","Hoshiarpur","Amravati","Aurangabad","Nashik","Solapur","Kolhapur","Sangli","Satara",
                    "Ratnagiri","Karwar","Mangalore","Udupi","Mysore","Hubli","Belgaum","Dharwad","Bijapur","Gulbarga",
                    "Raichur","Bellary","Tirupati","Vijayawada","Visakhapatnam","Guntur","Nellore","Kakinada","Rajahmundry","Warangal",
                    "Karimnagar","Nizamabad","Adilabad","Mahbubnagar","Kurnool","Anantapur","Kadapa","Chittoor","Madurai","Coimbatore",
                    "Tiruchirappalli","Salem","Erode","Vellore","Tirunelveli","Thoothukudi","Nagercoil","Dindigul","Thanjavur","Kanchipuram",
                    "Puducherry","Kozhikode","Thrissur","Kannur","Kollam","Alappuzha","Palakkad","Malappuram","Kottayam","Pathanamthitta",
                    "Shillong","Agra","Mathura","Firozabad","Etawah","Mainpuri","Banda","Chitrakoot","Jhansi","Lalitpur",
                    "Rewa","Satna","Sagar","Damoh","Chhindwara","Seoni","Balaghat","Betul","Hoshangabad","Khandwa",
                    "Burhanpur","Dewas","Mandsaur","Neemuch","Ratlam","Shivpuri","Guna","Ashoknagar","Datia","Tikamgarh",
                    "Chhatarpur","Panna","Katni","Umaria","Shahdol","Anuppur","Singrauli","Sidhi","Sehore","Raisen",
                    "Vidisha","Narsinghpur","Jammu","Udhampur","Kathua","Rajouri","Poonch","Kupwara","Baramulla","Anantnag",
                    "Pulwama","Shopian","Kulgam","Budgam","Ganderbal","Bandipora","Leh","Kargil"
                  ];

  const [query, setQuery] = useState('')

  const filteredCities = cities.filter(city => city.toLowerCase().includes(query.toLowerCase()))

  return (
    <>
    <div className="h-[100vh] w-[100vw] gap-5 flex flex-col items-center justify-center">
      <Search setQuery={setQuery}></Search>
      <section className='bg-white h-[500px] w-[500px] rounded-sm shadow-[0px_4px_10px_rgba(0,0,0,0.2)] flex flex-col items-center justify-start font-mono pt-3 overflow-y-scroll pb-3'>
        {filteredCities.map((city, index)=>(
          <CityItem key={index} city={city}></CityItem>
        ))}
      </section>
    </div>
    </>
  )
}

export default App
