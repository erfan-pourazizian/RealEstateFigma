export const options = [
    {
        inputName: 'Address *',
        img: '/Images/location.webp',
        alt: 'Address',
        queryName: 'sort',
        opt: [
            {name: "Lowest Price", value: "price-asc"},
            {name: "Highest Price", value: "price-des"},
            {name: "Newest", value: "date-asc"},
            {name: "Oldest", value: "date-desc"},
            {name: "Verified", value: "verified-score"},
            {name: "City Level Score", value: "city-level-score"},
        ]
    },
    {
        inputName: 'Unit',
        img: '/Images/empty.webp',
        alt: 'Unit',
        queryName: 'roomsMin',
        opt: [
            {name: "1", value: "1"},
            {name: "2", value: "2"},
            {name: "3", value: "3"},
            {name: "4", value: "4"},
            {name: "5", value: "5"},
            {name: "6", value: "6"},
            {name: "7", value: "7"},
            {name: "8", value: "8"},
            {name: "9", value: "9"},
            {name: "10", value: "10"},
        ]
    },
    {
        inputName: 'Property Type ',
        img: '/Images/property.webp',
        alt: 'Property Type ',
        queryName: 'categoryExternalID',
        opt: [
            { name: "Apartment", value: "4" },
            { name: "Townhouses", value: "16" },
            { name: "Villas", value: "3" },
            { name: "Penthouses", value: "18" },
            { name: "Hotel Apartments", value: "21" },
            { name: "Villa Compound", value: "19" },
            { name: "Residential Plot", value: "14" },
            { name: "Residential Floor", value: "12" },
            { name: "Residential Building", value: "17" },
        ]
    },
    {
        inputName: 'SQFT',
        img: '/Images/sqft.webp',
        alt: 'SQFT',
        queryName: 'areaMax',
        opt: [
            { name: "1000", value: "1000" },
            { name: "2000", value: "2000" },
            { name: "3000", value: "3000" },
            { name: "4000", value: "4000" },
            { name: "5000", value: "5000" },
            { name: "10000", value: "10000" },
            { name: "20000", value: "20000" },
        ]
    },
    {
        inputName: 'Beds',
        img: '/Images/beds.webp',
        alt: 'Beds',
        queryName: 'roomsMin',
        opt: [
            { name: "1", value: "1" },
            { name: "2", value: "2" },
            { name: "3", value: "3" },
            { name: "4", value: "4" },
            { name: "5", value: "5" },
            { name: "6", value: "6" },
            { name: "7", value: "7" },
            { name: "8", value: "8" },
            { name: "9", value: "9" },
            { name: "10", value: "10" },
        ]
    },
    {
        inputName: 'Bath',
        img: '/Images/bath.webp',
        alt: 'Bath',
        queryName: 'bathsMin',
        opt: [
            { name: "1", value: "1" },
            { name: "2", value: "2" },
            { name: "3", value: "3" },
            { name: "4", value: "4" },
            { name: "5", value: "5" },
            { name: "6", value: "6" },
            { name: "7", value: "7" },
            { name: "8", value: "8" },
            { name: "9", value: "9" },
            { name: "10", value: "10" },
        ]
    },
];
