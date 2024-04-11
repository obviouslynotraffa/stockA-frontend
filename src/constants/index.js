import { Nike, Jordan, Yeezy, OffWhite } from '../assets/images'
import { DunkTrevis, AirForceTrevis, ReactTrevis } from '../assets/images'

import { serviceIcon1, serviceIcon2, serviceIcon3 } from '../assets/icons';

import { customer1, customer2 } from '../assets/images';

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
];

export const BrandImages = [
    {
        src: Nike, 
        alt: "nike logo",
    },
    {
        src: Jordan, 
        alt: "jordan logo",
    },
    {
        src: OffWhite,
        alt: "off-white logo",
    },
    {
        src: Yeezy,
        alt: "yeezy logo",
    },
];


export const TravisScottSneakers = [
    {
        src: DunkTrevis,
        alt: "Travis Scott x Dunk Low"
    },
    {
        src: AirForceTrevis,
        alt: "Travis Scott x Air Force One"
    },
    {
        src:ReactTrevis,
        alt: "Travis x React"
    }
];


export const services = [
    {
        imgURL: serviceIcon2,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: serviceIcon3,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: serviceIcon1,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.4,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.7,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];
