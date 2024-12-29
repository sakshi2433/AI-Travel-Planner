const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        { text: "Generate Travel Plan for from \"Ranchi\" to \"Rajasthan\", India for 4 Days and 3 Nights for Just Me with a Luxury budget with a Flight details, flight price with Booking URL, hotel options list with Hotel Name, Hotel address, price, hotel image URL, geo coordinates, rating, descriptions and places to visit nearby with place name, place details, place image URL, geo coordinates, ticket Pricing, time to travel each of the location for 4 days and 3 nights with each day plan with best time to visit in JSON format." },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `Okay, here's a luxurious 4-day, 3-night Rajasthan itinerary designed for a solo traveler, packed with details you requested, in JSON format. Please note that flight prices and hotel availability can vary significantly; I've provided examples and booking URLs for illustration. *Always check live prices and availability.*
              \`\`\`json
              ${JSON.stringify({
            "trip_name": "Luxury Rajasthan Escape (Solo Traveler)",
            "duration": "4 Days, 3 Nights",
            "traveler_type": "Solo",
            "budget": "Luxury",
            "location": "Rajasthan, India",
            "flight_details": {
              "arrival_city": "Jaipur",
              "departure_city": "Ranchi",
              "airline": "IndiGo",
              "departure_time": "7:00 AM",
              "arrival_time": "8:15 AM",
              "price": "INR 5000",
              "booking_url": "https://www.goindigo.in/",
            },
            "hotels": [
              {
                "hotel_name": "Rambagh Palace, Jaipur",
                "address": "Bhawani Singh Road, Jaipur, Rajasthan 302005, India",
                "price_per_night": "INR 45000 (Approx)",
                "image_url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/1f/ff/ff/rambagh-palace.jpg",
                "geo_coordinates": {
                  "latitude": 26.9185,
                  "longitude": 75.8195

                },
                "rating": 4.8,
                "description": "A magnificent palace hotel offering unparalleled luxury and regal experiences.",
                "nearby_places": [
                  {
                    "place_name": "City Palace",
                    "place_details": "A beautiful palace complex with museums, courtyards and gardens, showcasing the royal heritage of Jaipur.",
                    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/City_Palace_Jaipur_Entrance_Gate.jpg/1280px-City_Palace_Jaipur_Entrance_Gate.jpg",
                    "geo_coordinates": {
                      "latitude": 26.9242,
                      "longitude": 75.8229

                    },
                    "ticket_price": "INR 700 (Approx)",
                    "time_to_travel": "10 minutes"
                  },
                  {
                    "place_name": "Hawa Mahal",
                    "place_details": "The Palace of Winds, an iconic structure with intricate latticework, offering stunning views.",
                    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Hawa_Mahal%2C_Jaipur.jpg/1280px-Hawa_Mahal%2C_Jaipur.jpg",
                    "geo_coordinates": {
                      "latitude": 26.9239,
                      "longitude": 75.8267

                    },
                    "ticket_price": "INR 200 (Approx)",
                    "time_to_travel": "12 minutes"
                  }

                ]
              },
              {
                "hotel_name": "The Oberoi Udaivilas, Udaipur",
                "address": "Haridas Ji Ki Magri, Mulla Talai, Udaipur, Rajasthan 313001, India",
                "price_per_night": "INR 55000 (Approx)",
                "image_url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1e/a3/43/49/the-oberoi-udaivilas.jpg",
                "geo_coordinates": {
                  "latitude": 24.5911,
                  "longitude": 73.6968

                },
                "rating": 4.9,
                "description": "An exquisite lakeside palace hotel renowned for its luxurious experiences and stunning views.",
                "nearby_places": [
                  {
                    "place_name": "Lake Pichola",
                    "place_details": "A stunning artificial lake in Udaipur, offering boat rides and serene views.",
                    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Pichola_Lake_in_Udaipur.jpg/1280px-Pichola_Lake_in_Udaipur.jpg",
                    "geo_coordinates": {
                      "latitude": 24.5803,
                      "longitude": 73.6786

                    },
                    "ticket_price": "INR 400 (Approx)",
                    "time_to_travel": "15 minutes"
                  },
                  {
                    "place_name": "City Palace, Udaipur",
                    "place_details": "A grand palace complex with a museum, offering insights into the royal history of Udaipur.",
                    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/City_Palace%2C_Udaipur_view_from_lake_Pichola.jpg/1280px-City_Palace%2C_Udaipur_view_from_lake_Pichola.jpg",
                    "geo_coordinates": {
                      "latitude": 24.5795,
                      "longitude": 73.6824

                    },
                    "ticket_price": "INR 300 (Approx)",
                    "time_to_travel": "20 minutes"
                  }

                ]
              },
              {
                "hotel_name": "Umaid Bhawan Palace, Jodhpur",
                "address": "Circuit House Rd, Cantt Area, Jodhpur, Rajasthan 342006, India",
                "price_per_night": "INR 40000 (Approx)",
                "image_url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/20/e0/78/umaid-bhawan-palace.jpg",
                "geo_coordinates": {
                  "latitude": 26.2888,
                  "longitude": 73.0296

                },
                "rating": 4.7,
                "description": "A magnificent palace hotel offering a blend of art deco and royal Rajputana architecture.",
                "nearby_places": [
                  {
                    "place_name": "Mehrangarh Fort",
                    "place_details": "An imposing fort perched on a hilltop, showcasing the rich history and culture of Jodhpur.",
                    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Mehrangarh_Fort_India.jpg/1280px-Mehrangarh_Fort_India.jpg",
                    "geo_coordinates": {
                      "latitude": 26.2998,
                      "longitude": 73.0175

                    },
                    "ticket_price": "INR 600 (Approx)",
                    "time_to_travel": "25 minutes"
                  },
                  {
                    "place_name": "Jaswant Thada",
                    "place_details": "A stunning marble cenotaph, known for its intricate carvings and serene surroundings.",
                    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Jaswant_Thada_%28Jodhpur%29.jpg/1280px-Jaswant_Thada_%28Jodhpur%29.jpg",
                    "geo_coordinates": {
                      "latitude": 26.2997,
                      "longitude": 73.0214

                    },
                    "ticket_price": "INR 200 (Approx)",
                    "time_to_travel": "28 minutes"
                  }

                ]
              }
            ],
            "itinerary": {
              "day 1": {
                "places": [
                  {
                    "place_name": "Amber Fort",
                    "place_details": "A magnificent fort built with red sandstone and marble, offering stunning views and historical significance.",
                    "ticket_price": "INR 500 (foreign nationals), INR 100 (Indians)",
                    "time_to_travel": "9:00 AM to 12:00 PM"
                  },
                  {
                    "place_name": "Hawa Mahal",
                    "place_details": "A five-story palace built in 1799, known as the Palace of Winds, offering a glimpse into the royal history.",
                    "ticket_price": "INR 200 (foreign nationals), INR 50 (Indians)",
                    "time_to_travel": "1:00 PM to 2:00 PM"
                  },
                  {
                    "place_name": "City Palace",
                    "place_details": "A complex of courtyards, gardens, and buildings, offering a rich history and museum tours.",
                    "ticket_price": "INR 700 (foreign nationals), INR 300 (Indians)",
                    "time_to_travel": "3:00 PM to 5:00 PM"
                  },
                  {
                    "place_name": "Chokhi Dhani",
                    "place_details": "A luxury ethnic resort offering traditional Rajasthani food, cultural performances, and a glimpse into the vibrant local culture.",
                    "ticket_price": "INR 1,200 per person (approx.)",
                    "time_to_travel": "7:00 PM to 10:00 PM"
                  }
                ]
              },
              "day 2": {
                "places": [
                  {
                    "place_name": "Jantar Mantar",
                    "place_details": "An astronomical observatory and UNESCO World Heritage Site featuring large instruments.",
                    "ticket_price": "INR 200 (foreign nationals), INR 50 (Indians)",
                    "time_to_travel": "9:00 AM to 11:00 AM"
                  },
                  {
                    "place_name": "Albert Hall Museum",
                    "place_details": "A stunning Indo-Saracenic architecture housing a rich collection of artifacts.",
                    "ticket_price": "INR 150 (foreign nationals), INR 40 (Indians)",
                    "time_to_travel": "12:00 PM to 1:30 PM"
                  },
                  {
                    "place_name": "Nahargarh Fort",
                    "place_details": "Overlooking Jaipur, this fort offers panoramic views and a peaceful ambiance.",
                    "ticket_price": "INR 200 (foreign nationals), INR 50 (Indians)",
                    "time_to_travel": "3:00 PM to 5:00 PM"
                  },
                  {
                    "place_name": "Light & Sound Show at Amber Fort",
                    "place_details": "A captivating show narrating the history of Amber Fort using lights and sound.",
                    "ticket_price": "INR 250 per person (approx.)",
                    "time_to_travel": "7:00 PM to 8:00 PM"
                  }
                ]
              },
              "day 3": {
                "places": [
                  {
                    "place_name": "Pushkar Lake and Brahma Temple",
                    "place_details": "A holy lake surrounded by ghats and the famous Brahma Temple, offering a serene experience.",
                    "ticket_price": "Free",
                    "time_to_travel": "8:00 AM to 11:00 AM"
                  },
                  {
                    "place_name": "Ajmer Sharif Dargah",
                    "place_details": "A famous shrine of Khwaja Moinuddin Chishti, visited by people of all faiths.",
                    "ticket_price": "Free",
                    "time_to_travel": "12:00 PM to 2:00 PM"
                  },
                  {
                    "place_name": "Shopping in Jaipur (Johari Bazaar and Bapu Bazaar)",
                    "place_details": "Explore vibrant markets offering jewelry, textiles, and handicrafts.",
                    "ticket_price": "Free (Shopping costs vary)",
                    "time_to_travel": "4:00 PM to 7:00 PM"
                  }
                ]
              },
              "day 4": {
                "places": [
                  {
                    "place_name": "Jaipur Hot Air Balloon Ride",
                    "place_details": "A luxury experience offering stunning aerial views of Jaipur.",
                    "ticket_price": "INR 12,000 per person (approx.)",
                    "time_to_travel": "6:00 AM to 8:00 AM"
                  },
                  {
                    "place_name": "Panna Meena Ka Kund",
                    "place_details": "An ancient stepwell with beautiful symmetrical architecture.",
                    "ticket_price": "Free",
                    "time_to_travel": "9:00 AM to 10:00 AM"
                  },
                  {
                    "place_name": "Lunch at a Luxury Hotel (e.g., Rambagh Palace)",
                    "place_details": "Enjoy a royal dining experience in an opulent palace setting.",
                    "ticket_price": "INR 3,000 to INR 5,000 per person (approx.)",
                    "time_to_travel": "1:00 PM to 3:00 PM"
                  }
                ]
              }
            }
          }
          )}
             \`\`\`
             **Important Notes:**
             *   **Prices:** Hotel and flight prices are approximate and can vary. Check real-time pricing.
             *   **Customization:** This itinerary can be customized further based on your specific interests.
             *   **Booking:** It's recommended to book hotels and flights in advance, especially during peak season.
             *   **Travel Times:**  Travel times between cities may vary depending on the mode of transport (flights, cars). The itinerary uses flight time for intercity travel.
             Let me know if you have specific preferences or adjustments you'd like to make!
             `},
      ],
    },
  ],
});

