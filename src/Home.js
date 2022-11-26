import React from 'react'
import './Home.css'
import ImageSlider from './ImageSlider'
import Product from './Product'
import SliderData from './SliderData'


function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
          {/* <ImageSlider slider={SliderData} /> */}



       <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
          alt=""

        />
         {/* <img  className='home_image'
        src='https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg'
        alt=""
        />
        <img className='home_image'
        src='https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg'
        alt=""
        />
        <img className='home_image'
        src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg'
        alt=""
       
        />
        <img className='home_image'
        src='	https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg'

        alt=''
        />
 */}

        
          <div className='home_row '>
          <Product  
          title='FAFAYASMOLA Ethiopian coffee ceremony table set up Art Canvas Print Vintage Painting Poster Modern Home Decor Canvas Wall Art Prints Living Room Decoration Office 24 inches x36 inches , 24 x 36 Inch'
           price={29.99} 
           image='https://m.media-amazon.com/images/I/61u1u0Ly61L.__AC_SX300_SY300_QL70_FMwebp_.jpg
           '
           rating={5}
           />
          <Product 
          id="123"
           title='Ethiopian Eritrean Saba Dinner Set Plates 6 pieces Porcelain (ሸክላ)'
           price={5.99}
          image='https://m.media-amazon.com/images/I/71hKzeo6stL._AC_SX425_.jpg'
          rating={5}
          />
          <Product
          id=""
           title='Lenovo - 2022 - IdeaPad Flex 5i - 2-in-1 Chromebook Laptop Computer - Intel Core i3-1115G4 - 13.3" FHD Touch Display - 8GB Memory - 128GB Storage - Chrome OS'
           price={332}
          image='	https://m.media-amazon.com/images/I/81uDDuBAwpL._AC_UL480_FMwebp_QL65_.jpg'
          rating={5} 
          />
          </div>
          <div className='home_row'>
          <Product  
          id="1223"
          title='1.69 Inches Smartwatch Activity Tracker Fitness Smart Watches for Women Men, IP68 Waterproof Watch Pedometer Heart Rate Sleep Monitor'
           price={4.99}
          image='	https://m.media-amazon.com/images/I/61-EeNlbZRL._AC_UY327_FMwebp_QL65_.jpg'
          rating={5}/>
          <Product  
          id="1324"
          title='Primitives by Kathy - 28559 Primitives by Kathy Box Style Coffee Mug, 20 oz'
           price={16.99}
          image='https://m.media-amazon.com/images/I/71rOqpdDDbL._AC_UL480_FMwebp_QL65_.jpg'
          rating={5}/>
          <Product 
          id="1324"
           title=' Ethiopian Traditional Pillow'
           price={29}
          image='https://m.media-amazon.com/images/I/71kJeOEtkcL._AC_SX425_.jpg'
          rating={5} />
          </div>
          <div className='home_row'>
          <Product 
          id="1324"
          title='Ergonomic Gaming Office Chair - PU Leather Executive Swivel Computer Desk Chair with Flip-up Armrests and Lumbar Support for Working, Studying, Gaming, Grey'
           price={249.99}
          image='https://m.media-amazon.com/images/I/61QSebJIbXL.__AC_SX300_SY300_QL70_FMwebp_.jpg
          '
          rating={4}/>
          <Product 
          id="1324" 
          title='Nintendo N64 Logo Sweatshirt'
           price={18.89}
          image='https://m.media-amazon.com/images/I/61Ex+TZHjvL._AC_UL480_FMwebp_QL65_.jpg'
          rating={3}/>
          <Product 
          id="1324"
           title='Drum Workshop, Inc. Mens Baseball'
           price={27.95 - 45.00}
          image='https://m.media-amazon.com/images/I/61pv2phClbL._AC_UX466_.jpg'
          rating={2}/>
          </div>
          <div className='home_row'>
          <Product 
          id="1324"
          title='Hisense 55-Inch Class R6 Series Dolby Vision HDR 4K UHD Roku Smart TV with Alexa Compatibility (55R6G, 2021 Model)'
           price={20.99}
          image='https://m.media-amazon.com/images/I/71RshxhlEiL._AC_UY327_FMwebp_QL65_.jpg
          '
          rating={1} />
          <Product  title='Gibson Home Rockaway 12-Piece Dinnerware Set Service'
           price={55.98}
          image='		https://m.media-amazon.com/images/I/61zc1GfMB0L._AC_UL480_FMwebp_QL65_.jpg
          '
          rating={5}/>
          <Product
          id="1324"
          title='Gaiam Essentials Thick Yoga Mat Fitness & Exercise Mat with Easy-Cinch Yoga Mat'
           price={49.99}
           image='https://m.media-amazon.com/images/I/81mao7QZ1iL._AC_UL480_FMwebp_QL65_.jpg'
          rating={4}/>
          </div>
          <div className='home_row'>
          <Product 
          id="1324"
          title='CeraVe Moisturizing Cream | Body and Face Moisturizer for Dry Skin | Body Cream with Hyaluronic Acid and Ceramides | Normal | Fragrance Free | 19 Oz | Packages May Vary'
           price={20.99}
          image='https://m.media-amazon.com/images/I/61VIt2hm6hL._AC_UL480_FMwebp_QL65_.jpg
          '
          rating={5} />
          <Product  title='Alexis 45 Wide Rectangular Coffee Table in Brass'
           price={150}
          image='	https://m.media-amazon.com/images/I/91JdKBS7hrL._AC_UL480_FMwebp_QL65_.jpg'
          rating={5}/>
          <Product
          id="1324"
          title='Flash Furniture Capri Comfortable Sleep 12 Inch CertiPUR-US Certified Hybrid Pocket Spring Mattress, Full Mattress in a Box'
           price={250}
           image='https://m.media-amazon.com/images/I/91AuqujDrWL._AC_UL480_FMwebp_QL65_.jpg'
          rating={5}/>
          </div>

      </div>
    </div>
  )
}

export default Home