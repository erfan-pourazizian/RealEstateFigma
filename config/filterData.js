export const filterData = [
  {
    items: [
      { name: "Daily", value: "daily" },
      { name: "Weekly", value: "weekly" },
      { name: "Monthly", value: "monthly" },
      { name: "Yearly", value: "yearly" },
    ],
    isRange: false,
    placeholder: "Rent Frequency",
    queryName: "rentFrequency",
  },
  {
    items: [
      {
        min: { name: "10,000", value: "10000" },
        max: { name: "85,000", value: "85000" },
      },
    ],
    isRange: true,
    placeholder: "Min Price",
    queryName: "minPrice",
  },
  {
    items: [
      {
        min: { name: "50,000", value: "50000" },
        max: { name: "1000,000", value: "1000000" },
      },
    ],
    isRange: true,
    placeholder: "Max Price",
    queryName: "maxPrice",
  },
  {
    items: [
      { name: "Lowest Price", value: "price-asc" },
      { name: "Highest Price", value: "price-des" },
      { name: "Verified", value: "verified-score" },
      { name: "City Level Score", value: "city-level-score" },
    ],
    isRange: false,
    placeholder: "Sort",
    queryName: "sort",
  },
  {
    items: [
      {
        min: { name: "1000", value: "1000" },
        max: { name: "20000", value: "20000" },
      },
    ],
    isRange: true,
    placeholder: "Max Area(sqft)",
    queryName: "areaMax",
  },
  {
    items: [
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
    ],
    isRange: false,
    placeholder: "Rooms",
    queryName: "roomsMin",
  },
  {
    items: [
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
    ],
    isRange: false,
    placeholder: "Baths",
    queryName: "bathsMin",
  },
  {
    items: [
      { name: "Furnished", value: "furnished" },
      { name: "Unfurnished", value: "unfurnished" },
    ],
    isRange: false,
    placeholder: "Furnish Type",
    queryName: "furnishingStatus",
  },
  {
    items: [
      { name: "Apartment", value: "4" },
      { name: "Townhouses", value: "16" },
      { name: "Villas", value: "3" },
      { name: "Penthouses", value: "18" },
      { name: "Hotel Apartments", value: "21" },
      { name: "Villa Compound", value: "19" },
      { name: "Residential Plot", value: "14" },
      { name: "Residential Floor", value: "12" },
      { name: "Residential Building", value: "17" },
    ],
    isRange: false,
    placeholder: "Property Type",
    queryName: "categoryExternalID",
  },
];

export const getFilterValues = (filterValues) => {
  const {
    rentFrequency,
    categoryExternalID,
    minPrice,
    maxPrice,
    areaMax,
    roomsMin,
    bathsMin,
    sort,
    locationExternalIDs,
  } = filterValues;

  const values = [
    {
      name: "rentFrequency",
      value: rentFrequency,
    },
    {
      name: "minPrice",
      value: minPrice,
    },
    {
      name: "maxPrice",
      value: maxPrice,
    },
    {
      name: "areaMax",
      value: areaMax,
    },
    {
      name: "roomsMin",
      value: roomsMin,
    },
    {
      name: "bathsMin",
      value: bathsMin,
    },
    {
      name: "sort",
      value: sort,
    },
    {
      name: "locationExternalIDs",
      value: locationExternalIDs,
    },
    {
      name: "categoryExternalID",
      value: categoryExternalID,
    },
  ];

  return values;
};
