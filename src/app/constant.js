export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '-38.827925',
      bl_lng: '140.913548',
      tr_lat: '-29.192343',
      tr_lng: '152.990806',
      limit: '300'
    },
    headers: {
      'X-RapidAPI-Key': '2fb1dc7c84msh2d969393e50b817p1f6691jsnc3907e9949c4',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };