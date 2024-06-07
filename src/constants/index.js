import { Nike, Jordan, Yeezy, OffWhite } from '../assets/images'
import { NikeSBDunkLowxTS, NikeAirForce1LowxTS, NikeAirMax270ReactxTS } from '../assets/images'
import { customer1, customer2 } from '../assets/images';
import { facebook, instagram, twitter } from '../assets/icons';
import { scottScutler,  andyLisk, terraCarmichael, gregSwarth, lauraLewis,  seanMccarteny, deenaBahri, stephenWinn   } from '../assets/images';

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/login", label: "Login" }
];

export const BrandImages = [
    {
        src: Nike, 
        alt: "Nike Logo",
    },
    {
        src: Jordan, 
        alt: "Jordan Logo",
    },
    {
        src: OffWhite,
        alt: "Off-white Logo",
    },
    {
        src: Yeezy,
        alt: "Yeezy Logo",
    },
];


export const TravisScottSneakers = [
    {
        src: NikeSBDunkLowxTS,
        alt: "Nike SB Dunk Low for Travis Scott"
    },
    {
        src: NikeAirForce1LowxTS,
        alt: "Nike Air Force 1 Low for Travis Scott Cactus Jack"
    },
    {
        src: NikeAirMax270ReactxTS,
        alt: "Nike Air Max 270 React for Travis Scott Cactus Trails"
    }
];


export const services = [
    {
        imgURL: "bg-truck-fast",
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: "bg-shield",
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: "bg-support",
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
        src: "bg-applestore",
        alt: "Apple Store logo"
    },
    {
        src: "bg-playstore",
        alt: "Play Store logo"
    }    
];

export const footerLinks = [
    {
        title: "Usefull links",
        links: [
            { name: "Coupons", link: "https://www.youtube.com/watch?v=xvFZjo5PgG0" },
            { name: "Blog", link: "https://www.youtube.com/watch?v=xvFZjo5PgG0" },
            { name: "Return policy", link: "https://www.youtube.com/watch?v=xvFZjo5PgG0" },
            { name: "Join affiliate", link: "https://www.youtube.com/watch?v=xvFZjo5PgG0" },
            { name: "Contact us", link: "/contact" }
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/about" },
            { name: "FAQs", link: "/contact" },
            { name: "How it works", link: "https://www.youtube.com/watch?v=xvFZjo5PgG0" },
            { name: "Privacy policy", link: "https://www.youtube.com/watch?v=xvFZjo5PgG0" },
            { name: "Payment policy", link: "https://www.youtube.com/watch?v=xvFZjo5PgG0" },
        ],
    }

];

export const ContactInfo = [
    {
        title: "Call Us",
        info: "Whether you need help with your account, have inquiries about our products, or simply want to provide feedback, we're here to provide prompt and personalized support tailored to your needs.",
        details: "+1-800-123-4567",
        icon: "bg-phone"
    },
    {
        title: "Visit Us",
        info: "Planning to visit our physical location? We're excited to welcome you in person! Our friendly team is ready to assist you with any questions or concerns you may have during your visit.",
        details: "123 Main Street, New York, NY 10001",
        icon: "bg-poi"
    },
    {
        title: "Live Chat",
        info: "Prefer instant assistance without picking up the phone? Our live chat feature puts you in direct contact with our knowledgeable support team in real-time. We're here to help you 24/7!",
        details: "Start Chat",
        icon: "bg-live-chat"
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
    

export const OurValuesData = [
    {
        imgURL: "bg-verified",
        title: "Committed to What is Right",
        desc: "We believe in the power of truth, authenticity, and transparency. We do the right thing and we do it the right way."
    },
    {
        imgURL: "bg-trophy",
        title: "Champions for Our Customers",
        desc: "We always listen and learn to ensure our customers experience the quality they deserve every day."
    },
    {
        imgURL: "bg-hands",
        title: "Playing on the Dream Team",
        desc: "Our team is united by our vision, commitment to each other, and the joy of sharing this journey together. We play to win and we do it while having fun."
    },
    {
        imgURL: "bg-rocket",
        title: "Hungry for the Future",
        desc: "We are committed to learning, growing, and innovating. We push against the status quo and are not afraid to make mistakes."
    },
    {
        imgURL: "bg-mountain",
        title: "Building a Dynasty",
        desc: "We continuously build a better product, a better workplace, and a better world. We will keep raising the bar, changing the game, and ensuring that what we do is never forgotten."
    }
];


export const CommunityData = [
    {
        imgURL : "bg-art",
        title : "Art & Culture",
        text : "StockA is inherently connected to the artistic community. The worlds of sneakers and streetwear, in particular, have roots that trace back to some of the most famous street artists, graffiti writers and designers. The company supports organizations that aim to introduce young people to the arts and culture through initiatives"
    },
    {
        imgURL: "bg-playworks",
        title: "Youth & Recreation",
        text: "The company supports initiatives designed to engage young people in recreational activities that align with the products traded on StockA, including skateboarding schools, basketball camps, and other activities designed to connect kids to sports and educational programming."
    },
    {
        imgURL: "bg-sostenibility",
        title: "Sustainability",
        text: "StockA is committed to investing in sustainable practices within its business operations and externally through its support of campaigns, initiatives, and philanthropic associations such as Oceana, an organization dedicated to protecting and restoring the world’s oceans."
    },
    {
        imgURL: "bg-student",
        title: "Tech Education",
        text: "StockA collaborates with organizations that engage young people in STEAM initiatives and the development of related technical skills to encourage a future in applied contexts, with a specific focus on minorities and disadvantaged students. Diversity in technology is painfully lacking, and StockA aims to play a role in ensuring the industry is representative."
    },
    {
        imgURL: "bg-change",
        title: "Social Justice",
        text: "StockA promotes a diverse and inclusive community, not only for its team members but for the millions of buyers, sellers, manufacturers, and creators it serves.  In 2020, StockA matched team member donations to organizations like the George Floyd Memorial Fund, the NAACP Legal Defense Fund, and Know Your Rights Camp, totaling over $100,000 in support of their work."
    }
];


export const GoodToKnowData = [
    {
        imgURL: "bg-authenticity",
        title: "AUTHENTICITY",
        subt1:"",
        subt2:"",
        text1: "All products are 100% authentic and brand new.",
        text2: "We do not sell nor support the sale of fake products. All our products are authenticated and thoroughly checked before they're shipped out.",
        text3: ""
    },
    {
        imgURL: "bg-shipping",
        title: "SHIPPING",
        subt1:"",
        subt2:"",
        text1: "We always aim to ship out your order as soon as possible. However, we are a small team taking care over hundreds of orders. Please check the estimated shipping times before ordering to avoid disappointment.",
        text2: "You can check the estimated shipping time in the 'Shipping Information' tab (above the Add To Cart button).",
        text3: "Please read our full shipping policy."
    },
    {
        imgURL: "bg-undo",
        title: "CANCELLATIONS & RETURNS",
        subt1:"Cancellations",
        subt2:"Returns",
        text1: "Unfortunately you can not cancel your order once it's placed. However, if we have not fulfilled your order yet, you may request a different size/color or model. We will charge a transaction fee if we have to cancel your order.",
        text2: "We have 14-day return policy and all products are eligible for returns. You can only request a return if the product is still unworn and brand new.",
        text3: "Please read our full refund policy before requesting a return."
    }
];