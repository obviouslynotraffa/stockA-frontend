import { Nike, Jordan, Yeezy, OffWhite } from '../assets/images'

import { NikeSBDunkLowxTS, NikeAirForce1LowxTS, NikeAirMax270ReactxTS } from '../assets/images'

import { supportIcon, shieldTick, truckFast, poi, liveChat, phone } from '../assets/icons';

import { customer1, customer2 } from '../assets/images';

import { facebook, instagram, twitter } from '../assets/icons';

import { applestore, playstore } from '../assets/images';

import { scottScutler,  andyLisk, terraCarmichael, gregSwarth, lauraLewis,  seanMccarteny, deenaBahri, stephenWinn   } from '../assets/images';

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
];

export const BrandImages = [
    {
        src: Nike, 
        alt: "Nike logo",
    },
    {
        src: Jordan, 
        alt: "Jordan logo",
    },
    {
        src: OffWhite,
        alt: "Off-white logo",
    },
    {
        src: Yeezy,
        alt: "Yeezy logo",
    },
];


export const TravisScottSneakers = [
    {
        src: NikeSBDunkLowxTS,
        alt: "Nike SB Dunk Low x Travis Scott"
    },
    {
        src: NikeAirForce1LowxTS,
        alt: "Nike Air Force 1 Low x Travis Scott Cactus Jack"
    },
    {
        src: NikeAirMax270ReactxTS,
        alt: "Nike Air Max 270 React x Travis Scott Cactus Trails"
    }
];


export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: supportIcon,
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


export const socials = [
    {
        src: facebook,
        alt: "Facebook logo"
    },
    {
        src: twitter,
        alt: "Twitter logo"
    },
    {
        src: instagram,
        alt: "Instagram logo"
    }
];


export const appStores = [
    {
        src: applestore,
        alt: "Apple Store logo"
    },
    {
        src: playstore,
        alt: "Play Store logo"
    }    
];

export const footerLinks = [
    {
        title: "Usefull links",
        links: [
            { name: "Coupons", link: "/" },
            { name: "Blog", link: "/" },
            { name: "Return policy", link: "/" },
            { name: "Join affiliate", link: "/" },
            { name: "Contanct us", link: "/" }
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    }

];

export const ContactInfo = [
    {
        title: "Call Us",
        info: "Whether you need help with your account, have inquiries about our products, or simply want to provide feedback, we're here to provide prompt and personalized support tailored to your needs.",
        details: "+1-800-123-4567",
        icon: phone
    },
    {
        title: "Visit Us",
        info: "Planning to visit our physical location? We're excited to welcome you in person! Our friendly team is ready to assist you with any questions or concerns you may have during your visit.",
        details: "123 Main Street, New York, NY 10001",
        icon: poi
    },
    {
        title: "Live Chat",
        info: "Prefer instant assistance without picking up the phone? Our live chat feature puts you in direct contact with our knowledgeable support team in real-time. We're here to help you 24/7!",
        details: "Start Chat",
        icon: liveChat
    }
];

export const FAQData = [
    {
        question: "What is your return policy?",
        answer: "Our return policy for limited edition shoes is designed to ensure customer satisfaction while also considering the exclusivity of these items. Generally, we offer a 45 days return window from the date of delivery for unworn and undamaged shoes, accompanied by their original packaging. However, due to the limited availability of these items, exchanges may not always be possible, and refunds will be issued in accordance with our standard return policy. Please refer to our website or contact our customer service team for specific details and instructions on returning limited edition shoes."
    },
    {
        question: "How can I cancel my order?",
        answer: "If you wish to cancel your order, please contact our customer service team as soon as possible with your order details. We'll do our best to accommodate your request, but please note that orders can only be canceled before they are shipped."
    },
    {
        question: "When can I expect to receive my item?",
        answer: "The shipping time for our limited edition shoes varies depending on the destination and the shipping method selected at checkout. Typically, orders are processed and shipped within 1-3 business days. Once shipped, domestic delivery usually takes 3-7 business days, while international delivery may take longer. Customers will receive a tracking number via email to monitor the status of their shipment."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods to make purchasing our products convenient for our customers. These methods typically include credit/debit cards, PayPal, and sometimes alternative payment options like Apple Pay or Google Pay. At checkout, you'll be able to select your preferred payment method and securely complete your transaction."
    }
];


export const ManagementData = [
    {
        imgURL: scottScutler,
        name: "Scott Cutler",
        title: "CHIEF EXECUTIVE OFFICER"
    },
    {
        imgURL: gregSwarth,
        name: "Greg Swarth",
        title: "CHIEF OPERATING OFFICER"
    },
    {
        imgURL: deenaBahri,
        name: "Deena Bahri",
        title: "CHIEF MARKETING OFFICER"
    },
    {
        imgURL: terraCarmichael,
        name: "Terra Carmichael",
        title: "CHIEF COMMUNICATIONS OFFICER"
    },
    {
        imgURL: lauraLewis,
        name: "Laura Lewis",
        title: "CHIEF ADMINISTRATIVE OFFICER"
    },
    {
        imgURL: andyLisk,
        name: "Andy Lisk",
        title: "CHIEF SUPPLY CHAIN OFFICER"
    },
    {
        imgURL: seanMccarteny,
        name: "Sean McCarteny",
        title: "CHIEF PRODUCT OFFICER"
    },
    {
        imgURL: stephenWinn,
        name: "Stephen Winn",
        title: "CHIEF TECHNOLOGY OFFICER"
    }
];

export const KeyNumbersData = [
    {
        number: 150,
        additional: "K+",
        desc: "Product catalog with hundreds of brands"
    },
    {
        number: 25,
        additional: "M",
        desc: "Average Monthly Visitors"
    },
    {
        number: 1,
        additional: "K+",
        desc: "StockA Team Members"
    },
    {
        number: 10,
        additional: "",
        desc: "Authentication Centers"
    }
];
    