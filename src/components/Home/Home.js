import React from 'react'
import Product from '../Product/Product'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <img className='home__image'
            src="https://m.media-amazon.com/images/I/71iv6xO1QOL._SX3000_.jpg"
             alt="" />

            <div className='home__row'>
            <Product
            id="101"
            title="Hand Picked Dumbells"
            price={299}
            rating={5}
            image ="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Sports/PC_QC_DB_L._SY116_CB406090888_.jpg"
            />

            <Product
            id="102"
            title="Shop from small businesses | Get rewards"
            price={1999}
            rating={4}
            image ="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/Store/2021/Jupiter/mock/DesktopGateway-cc-379x304_vernacs_T2.11._SY304_CB641246847_.jpg"
            />

            </div>
            
            <div className='home__row'>
            <Product
            id="103"
            title="Styles For Men"
            price={500}
            rating={5}
            image ="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/1-min._SY116_CB666463598_.jpg"
            />

            <Product
            id="104"
            title="Tea & Coffee"
            price={200}
            rating={3}
            image ="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GWGraphics/Desktop-Qc-2-1x._SY116_CB669420330_.png"
            />

            <Product
            id="105"
            title="Bluetooth Headset"
            price={3100}
            rating={5}
            image ="https://m.media-amazon.com/images/I/31lkxF1dMvL._AC_SY200_.jpg"
            />
            </div>

            <div className='home__row'>
            <Product
            id="106"
            title="138 cm Televsion"
            price={44999}
            rating={5}
            image ="https://m.media-amazon.com/images/I/61V7cDH8AAS._AC_UY218_.jpg"
            /> 
            </div>

        </div>
    )
}

export default Home
