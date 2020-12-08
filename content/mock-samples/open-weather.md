---
title: Open Weather API mock sample
excerpt: Start working with Open Weather API faster than ever with this ready to use sample for Mockoon
meta:
  title: Open Weather API mock sample
  description: Start working with Open Weather API faster than ever with this ready to use sample for Mockoon
image: open-weather.png
imageAlt: Mockoon and Open Weather logos side by side
order: 100
---

# Open Weather API mock sample

---

Are you planning on using Open Weather's API and look for an easy way to mock the most relevant endpoints for free and with no need of signing up? 

Mockoon got you covered with this ready to use JSON mock sample! By simply importing it in Mockoon, you will be able to make requests to the most useful endpoints and get realistic data returned in the span of a click. 

Our API mocking tool currently covers the following endpoints :

> **Get the full mock ready to import in Mockoon!** <a href="https://github.com/mockoon/mock-samples/blob/main/samples/open-weather.json" className="button is-link is-small"><i className='icon-download is-primary'></i>&nbsp;Download</a>
> 
> To import the file, please [follow the instructions](https://github.com/mockoon/mock-samples#how-to-import-the-samples-in-mockoon-application). 

### GET /data/2.5/weather
Access current weather data for any location on Earth using randomly generated data to mock this API as realistically as possible.

```json
{
  "coord": {
    "lon": {{faker 'address.longitude'}},
    "lat": {{faker 'address.latitude'}}
  },
  "weather": [
    {
      "id": {{faker 'random.number'}},
      "main": "{{oneOf (array 'Clear' 'Rain' 'Clouds' 'Snow' 'Extreme' 'Thunderstorm' 'Drizzle' 'Mist' 'Ash' 'Squall' 'Tornado')}}",
      "description": "{{oneOf (array 'clear sky' 'Light shower sleet' 'Shower sleet' 'Shower snow')}}",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": {{faker 'random.number' min = 250 max = 320}},
    "feels_like": {{faker 'random.number' min = 250 max = 320}},
    "temp_min": {{faker 'random.number' min = 250 max = 320}},
    "temp_max": {{faker 'random.number' min = 250 max = 320}},
    "pressure": {{faker 'random.number' min = 1000 max = 1400}},
    "humidity": {{faker 'random.number' min = 0 max = 100 precision = 0.1}}
  },
  "visibility": {{faker 'random.number'}},
  "wind": {
    "speed": {{faker 'random.number' min = 0 max = 80}},
    "deg": {{faker 'random.number' min = 0 max = 359 precision = 0.1}}
  },
  "clouds": {
    "all": {{faker 'random.number' min = 0 max = 100 precision = 0.1}}
  },
  "dt": {{faker 'random.number'}},
  "sys": {
    "type": 1,
    "id": {{faker 'random.number'}},
    "message": 0.0139,
    "country": "{{faker 'address.countryCode'}}",
    "sunrise": {{faker 'random.number'}},
    "sunset": {{faker 'random.number'}}
  },
  "timezone": {{faker 'random.number' min = -43200 max = 43200 precision = 3600}},
  "id": {{faker 'random.number'}},
  "name": "{{faker 'address.city'}}",
  "cod": 200
}
```
### GET /data/2.5/forecast

Easily mock Open Weather's forecast endpoint and get the hourly weather forecast for 4 days ahead.

```json
{
  "cod": "200",
  "message": 0.0179,
  "cnt": 42,
  "list": [
   {
     "dt": {{faker 'random.number'}},
     "main": {
       "temp": {{faker 'random.number' min = 250 max = 320}},
       "feels_like": {{faker 'random.number' min = 250 max = 320}},
       "temp_min": {{faker 'random.number' min = 250 max = 320}},
       "temp_max": {{faker 'random.number' min = 250 max = 320}},
       "pressure": {{faker 'random.number' min = 1000 max = 1400}},
       "sea_level": {{faker 'random.number' min = 1000 max = 1200}},
       "grnd_level": {{faker 'random.number' min = 1100 max = 1400}},
       "humidity": {{faker 'random.number' min = 0 max = 100 precision = 0.1}},
       "temp_kf": 0
     },
     "weather": [
       {
         "id": {{faker 'random.number'}},
         "main": "{{oneOf (array 'Clear' 'Rain' 'Clouds' 'Snow' 'Extreme' 'Thunderstorm' 'Drizzle' 'Mist' 'Ash' 'Squall' 'Tornado')}}",
         "description": "{{oneOf (array 'clear sky' 'Light shower sleet' 'Shower sleet' 'Shower snow')}}",
         "icon": "04n"
       }
     ],
     "clouds": {
       "all": {{faker 'random.number' min = 0 max = 100 precision = 0.1}}
     },
     "wind": {
       "speed": {{faker 'random.number' min = 0 max = 80}},
       "deg": {{faker 'random.number' min = 0 max = 359 precision = 0.1}}
     },
     "visibility": {{faker 'random.number'}},
     "pop": {{faker 'random.float' min = 0 max = 1 precision = 0.01}},
     "sys": {
       "pod": "{{oneOf (array 'd' 'n')}}"
     },
     "dt_txt": "{{date '2010' '2030' "yyyy-MM-dd HH:mm:ss"}}"
    }
  ],
  "city": {
   "id": {{faker 'random.number'}},
   "name": "{{faker 'address.city'}}",
   "coord": {
     "lon": {{faker 'address.longitude'}},
     "lat": {{faker 'address.latitude'}}
   },
   "country": "{{faker 'address.countryCode'}}",
   "timezone": {{faker 'random.number' min = -43200 max = 43200 precision = 3600}},
   "sunrise": {{faker 'random.number'}},
   "sunset": {{faker 'random.number'}}
  }
}
```