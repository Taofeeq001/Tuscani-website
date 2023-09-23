'use client'
import {SlCalender} from 'react-icons/sl'
import {LiaMapMarkedAltSolid} from 'react-icons/lia'
import {BiSolidDiscount} from 'react-icons/bi'
import {TfiHeadphoneAlt} from 'react-icons/tfi'
import {TbBottle} from 'react-icons/tb'
import {GiDutchBike} from 'react-icons/gi'
import {PiTicketLight} from 'react-icons/pi'
import {BsBusFront} from 'react-icons/bs'
import {TiGroupOutline} from 'react-icons/ti'
import {PiMapPinLineLight} from 'react-icons/pi'
import moruwa from '../../../../public/Images/moruwa.svg'
import bike from '../../../../public//Images/biketour.svg'
import bus from '../../../../public//Images/bustrips.svg'
import taxi from '../../../../public//Images/new.svg'
import Link from 'next/link'

// import Link from "next/link"
export const popularity =[
    {
        // image: <img src="/Images/moruwa.svg"/>,
        image: moruwa,
        title: 'BIKE/RICKSHAW',
        price: 10,
        icon1: <SlCalender/>,
        icon1det: 'Your bike for a day',
        icon2: <LiaMapMarkedAltSolid/>,
        icon2det: 'City App',
        icon3: <BiSolidDiscount/>,
        icon3det: 'Discount on RickshawApp',
        icon4: <TfiHeadphoneAlt/>,
        icon4det: 'Guaranteed Support',
        link: "/bike-rickshaw"
    },
    {
        // image: <img src="/Images/bike-tour.svg"/>,
        image: bike,
        title: 'BIKE TOURS',
        price: 30,
        icon1: <GiDutchBike/>,
        icon1det: 'A Mountain Bike Included',
        icon2: <LiaMapMarkedAltSolid/>,
        icon2det: 'A guide for you',
        icon3: <TbBottle/>,
        icon3det: 'Bottle of Water',
        icon4: <TfiHeadphoneAlt/>,
        icon4det: 'Guaranteed Support',
        link:"/bike-tour"

    },
    {
        // image: <img src="/Images/bus-strips.svg"/>,
        image: bus,
        title: 'BUS STRIP',
        price: 45,
        icon1: <PiTicketLight/>,
        icon1det: 'Park Ticket',
        icon2: <BsBusFront/>,
        icon2det: 'Return Bus',
        icon3: <TiGroupOutline/>,
        icon3det: 'Companion',
        icon4: <TfiHeadphoneAlt/>,
        icon4det: 'Guaranteed Support',
        link: "/bus-strip"
    },
    {
        // image: <img src="/Images/Taxi.svg"/>,
        image: taxi,
        title: 'BIKE/RICKSHAW',
        price: 10,
        icon1: <SlCalender/>,
        icon1det: 'Personal Driver ',
        icon2: <PiMapPinLineLight/>,
        icon2det: 'Wherever You Want',
        icon3: <BiSolidDiscount/>,
        icon3det: 'At the Best Price',
        icon4: <TfiHeadphoneAlt/>,
        icon4det: 'Guaranteed Support',
        link: "/transfer"
    },

]