const codes = [
  {
    BusinessCode: 111,
    IndustryName: "Crop Production"
  },
  {
    BusinessCode: 112,
    IndustryName: "Animal Production and Aquaculture"
  },
  {
    BusinessCode: 113,
    IndustryName: "Forestry and Logging"
  },
  {
    BusinessCode: 114,
    IndustryName: "Fishing, Hunting and Trapping"
  },
  {
    BusinessCode: 115,
    IndustryName: "Support Activities for Agriculture and Forestry"
  },
  {
    BusinessCode: 211,
    IndustryName: "Oil and Gas Extraction"
  },
  {
    BusinessCode: 212,
    IndustryName: "Mining (except Oil and Gas)"
  },
  {
    BusinessCode: 213,
    IndustryName: "Support Activities for Mining"
  },
  {
    BusinessCode: 221,
    IndustryName: "Utilities"
  },
  {
    BusinessCode: 236,
    IndustryName: "Construction of Buildings"
  },
  {
    BusinessCode: 237,
    IndustryName: "Heavy and Civil Engineering Construction"
  },
  {
    BusinessCode: 238,
    IndustryName: "Specialty Trade Contractors"
  },
  {
    BusinessCode: 311,
    IndustryName: "Food Manufacturing"
  },
  {
    BusinessCode: 312,
    IndustryName: "Beverage and Tobacco Product Manufacturing"
  },
  {
    BusinessCode: 313,
    IndustryName: "Textile Mills"
  },
  {
    BusinessCode: 314,
    IndustryName: "Textile Product Mills"
  },
  {
    BusinessCode: 315,
    IndustryName: "Apparel Manufacturing"
  },
  {
    BusinessCode: 316,
    IndustryName: "Leather and Allied Product Manufacturing"
  },
  {
    BusinessCode: 321,
    IndustryName: "Wood Product Manufacturing"
  },
  {
    BusinessCode: 322,
    IndustryName: "Paper Manufacturing"
  },
  {
    BusinessCode: 323,
    IndustryName: "Printing and Related Support Activities"
  },
  {
    BusinessCode: 324,
    IndustryName: "Petroleum and Coal Products Manufacturing"
  },
  {
    BusinessCode: 325,
    IndustryName: "Chemical Manufacturing"
  },
  {
    BusinessCode: 326,
    IndustryName: "Plastics and Rubber Products Manufacturing"
  },
  {
    BusinessCode: 327,
    IndustryName: "Nonmetallic Mineral Product Manufacturing"
  },
  {
    BusinessCode: 331,
    IndustryName: "Primary Metal Manufacturing"
  },
  {
    BusinessCode: 332,
    IndustryName: "Fabricated Metal Product Manufacturing"
  },
  {
    BusinessCode: 333,
    IndustryName: "Machinery Manufacturing"
  },
  {
    BusinessCode: 334,
    IndustryName: "Computer and Electronic Product Manufacturing"
  },
  {
    BusinessCode: 335,
    IndustryName: "Electrical Equipment, Appliance, and Component Manufacturing"
  },
  {
    BusinessCode: 336,
    IndustryName: "Transportation Equipment Manufacturing"
  },
  {
    BusinessCode: 337,
    IndustryName: "Furniture and Related Product Manufacturing"
  },
  {
    BusinessCode: 339,
    IndustryName: "Miscellaneous Manufacturing"
  },
  {
    BusinessCode: 423,
    IndustryName: "Merchant Wholesalers, Durable Goods"
  },
  {
    BusinessCode: 424,
    IndustryName: "Merchant Wholesalers, Nondurable Goods"
  },
  {
    BusinessCode: 425,
    IndustryName: "Wholesale Electronic Markets and Agents and Brokers"
  },
  {
    BusinessCode: 441,
    IndustryName: "Motor Vehicle and Parts Dealers"
  },
  {
    BusinessCode: 442,
    IndustryName: "Furniture and Home Furnishings Stores"
  },
  {
    BusinessCode: 443,
    IndustryName: "Electronics and Appliance Stores"
  },
  {
    BusinessCode: 444,
    IndustryName: "Building Material and Garden Equipment and Supplies Dealers"
  },
  {
    BusinessCode: 445,
    IndustryName: "Food and Beverage Stores"
  },
  {
    BusinessCode: 446,
    IndustryName: "Health and Personal Care Stores"
  },
  {
    BusinessCode: 447,
    IndustryName: "Gasoline Stations"
  },
  {
    BusinessCode: 448,
    IndustryName: "Clothing and Clothing Accessories Stores"
  },
  {
    BusinessCode: 451,
    IndustryName: "Sporting Goods, Hobby, Musical Instrument, and Book Stores"
  },
  {
    BusinessCode: 452,
    IndustryName: "General Merchandise Stores"
  },
  {
    BusinessCode: 453,
    IndustryName: "Miscellaneous Store Retailers"
  },
  {
    BusinessCode: 454,
    IndustryName: "Nonstore Retailers"
  },
  {
    BusinessCode: 481,
    IndustryName: "Air Transportation"
  },
  {
    BusinessCode: 482,
    IndustryName: "Rail Transportation"
  },
  {
    BusinessCode: 483,
    IndustryName: "Water Transportation"
  },
  {
    BusinessCode: 484,
    IndustryName: "Truck Transportation"
  },
  {
    BusinessCode: 485,
    IndustryName: "Transit and Ground Passenger Transportation"
  },
  {
    BusinessCode: 486,
    IndustryName: "Pipeline Transportation"
  },
  {
    BusinessCode: 487,
    IndustryName: "Scenic and Sightseeing Transportation"
  },
  {
    BusinessCode: 488,
    IndustryName: "Support Activities for Transportation"
  },
  {
    BusinessCode: 491,
    IndustryName: "Postal Service"
  },
  {
    BusinessCode: 492,
    IndustryName: "Couriers and Messengers"
  },
  {
    BusinessCode: 493,
    IndustryName: "Warehousing and Storage"
  },
  {
    BusinessCode: 511,
    IndustryName: "Publishing Industries (except Internet)"
  },
  {
    BusinessCode: 512,
    IndustryName: "Motion Picture and Sound Recording Industries"
  },
  {
    BusinessCode: 515,
    IndustryName: "Broadcasting (except Internet)"
  },
  {
    BusinessCode: 517,
    IndustryName: "Telecommunications"
  },
  {
    BusinessCode: 518,
    IndustryName: "Data Processing, Hosting, and Related Services"
  },
  {
    BusinessCode: 519,
    IndustryName: "Other Information Services"
  },
  {
    BusinessCode: 521,
    IndustryName: "Monetary Authorities-Central Bank"
  },
  {
    BusinessCode: 522,
    IndustryName: "Credit Intermediation and Related Activities"
  },
  {
    BusinessCode: 523,
    IndustryName:
      "Securities, Commodity Contracts, and Other Financial Investments and Related Activities"
  },
  {
    BusinessCode: 524,
    IndustryName: "Insurance Carriers and Related Activities"
  },
  {
    BusinessCode: 525,
    IndustryName: "Funds, Trusts, and Other Financial Vehicles"
  },
  {
    BusinessCode: 531,
    IndustryName: "Real Estate"
  },
  {
    BusinessCode: 532,
    IndustryName: "Rental and Leasing Services"
  },
  {
    BusinessCode: 533,
    IndustryName:
      "Lessors of Nonfinancial Intangible Assets (except Copyrighted Works)"
  },
  {
    BusinessCode: 541,
    IndustryName: "Professional, Scientific, and Technical Services"
  },
  {
    BusinessCode: 551,
    IndustryName: "Management of Companies and Enterprises"
  },
  {
    BusinessCode: 561,
    IndustryName: "Administrative and Support Services"
  },
  {
    BusinessCode: 562,
    IndustryName: "Waste Management and Remediation Services"
  },
  {
    BusinessCode: 611,
    IndustryName: "Educational Services"
  },
  {
    BusinessCode: 621,
    IndustryName: "Ambulatory Health Care Services"
  },
  {
    BusinessCode: 622,
    IndustryName: "Hospitals"
  },
  {
    BusinessCode: 623,
    IndustryName: "Nursing and Residential Care Facilities"
  },
  {
    BusinessCode: 624,
    IndustryName: "Social Assistance"
  },
  {
    BusinessCode: 711,
    IndustryName: "Performing Arts, Spectator Sports, and Related Industries"
  },
  {
    BusinessCode: 712,
    IndustryName: "Museums, Historical Sites, and Similar Institutions"
  },
  {
    BusinessCode: 713,
    IndustryName: "Amusement, Gambling, and Recreation Industries"
  },
  {
    BusinessCode: 721,
    IndustryName: "Accommodation"
  },
  {
    BusinessCode: 722,
    IndustryName: "Food Services and Drinking Places"
  },
  {
    BusinessCode: 811,
    IndustryName: "Repair and Maintenance"
  },
  {
    BusinessCode: 812,
    IndustryName: "Personal and Laundry Services"
  },
  {
    BusinessCode: 813,
    IndustryName:
      "Religious, Grantmaking, Civic, Professional, and Similar Organizations"
  },
  {
    BusinessCode: 814,
    IndustryName: "Private Households"
  },
  {
    BusinessCode: 921,
    IndustryName: "Executive, Legislative, and Other General Government Suppor"
  },
  {
    BusinessCode: 922,
    IndustryName: "Justice, Public Order, and Safety Activities"
  },
  {
    BusinessCode: 923,
    IndustryName: "Administration of Human Resource Programs"
  },
  {
    BusinessCode: 924,
    IndustryName: "Administration of Environmental Quality Programs"
  },
  {
    BusinessCode: 925,
    IndustryName:
      "Administration of Housing Programs, Urban Planning, and Community Developmen"
  },
  {
    BusinessCode: 926,
    IndustryName: "Administration of Economic Programs"
  },
  {
    BusinessCode: 927,
    IndustryName: "Space Research and Technology"
  },
  {
    BusinessCode: 928,
    IndustryName: "National Security and International Affairs"
  }
];
export default codes;
