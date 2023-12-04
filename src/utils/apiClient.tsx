const baseUrl = 'https://api.themoviedb.org';

export async function fetchGet({route}: {route: string}) {
  let responseJson;
  try {
    const response = await fetch(baseUrl + route, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjM3ZTk2YTc3NjljYWM4NmMxZmZjMzU5Y2ExYjkyMSIsInN1YiI6IjY1MDdmNzFlM2NkMTJjMDE0ZWJmY2ZkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QvcnXKgIWKaA6YBD1QMx4P-VPH8jUROqEm-eM6tMaMM ',
      },
    });

    responseJson = await response.json();
    // console.log('JSON IS _______________', responseJson);
    return responseJson;

    // if (response.ok && response.status === 200) {
    //   console.log(`response json " ${JSON.stringify(responseJson)}`);
    //   // const pareseDecryptedData = await JSON.parse(responseJson.data);
    //   // responseJson.data = pareseDecryptedData;
    // }
  } catch (error) {
    console.error('There wan an error!!!!', error);
    console.log('respons json in error:', JSON.stringify(responseJson));
  }
}

export async function fetchGetDetail(
  {page}: {page: number},
  {route}: {route: String},
  {query}: {query: String},
) {
  let responseJson;
  try {
    const response = await fetch(
      baseUrl + route + query,
      // `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjM3ZTk2YTc3NjljYWM4NmMxZmZjMzU5Y2ExYjkyMSIsInN1YiI6IjY1MDdmNzFlM2NkMTJjMDE0ZWJmY2ZkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QvcnXKgIWKaA6YBD1QMx4P-VPH8jUROqEm-eM6tMaMM ',
        },
      },
    );

    console.log('URL is _______', baseUrl + route + query);
    responseJson = await response.json();
    // console.log('JSON IS _______________', responseJson);
    return responseJson;

    // if (response.ok && response.status === 200) {
    //   console.log(`response json " ${JSON.stringify(responseJson)}`);
    //   // const pareseDecryptedData = await JSON.parse(responseJson.data);
    //   // responseJson.data = pareseDecryptedData;
    // }
  } catch (error) {
    console.error('There wan an error!!!!', error);
    console.log('respons json in error:', JSON.stringify(responseJson));
  }
}
