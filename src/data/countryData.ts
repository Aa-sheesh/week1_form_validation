
export interface CountryData {
  name: string;
  code: string;
  cities: string[];
}

export const countries: CountryData[] = [
  {
    name: "India",
    code: "IN",
    cities: [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Kolkata",
      "Pune",
      "Ahmedabad",
      "Jaipur",
      "Lucknow"
    ]
  },
  {
    name: "United States",
    code: "US",
    cities: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose"
    ]
  },
  {
    name: "United Kingdom",
    code: "UK",
    cities: [
      "London",
      "Birmingham",
      "Manchester",
      "Glasgow",
      "Liverpool",
      "Bristol",
      "Sheffield",
      "Leeds",
      "Edinburgh",
      "Leicester"
    ]
  },
  {
    name: "Canada",
    code: "CA",
    cities: [
      "Toronto",
      "Montreal",
      "Vancouver",
      "Calgary",
      "Edmonton",
      "Ottawa",
      "Quebec City",
      "Winnipeg",
      "Hamilton",
      "Halifax"
    ]
  },
  {
    name: "Australia",
    code: "AU",
    cities: [
      "Sydney",
      "Melbourne",
      "Brisbane",
      "Perth",
      "Adelaide",
      "Gold Coast",
      "Canberra",
      "Newcastle",
      "Wollongong",
      "Hobart"
    ]
  }
];
