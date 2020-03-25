const tbody = document.querySelector('table tbody');

fetch('https://coronavirus-19-api.herokuapp.com/countries')
  .then((res) => res.json())
  .then((data) => {
    for (const response of data) {
      const {
        country,
        cases,
        todayCases,
        deaths,
        todayDeaths,
        recovered,
        active,
        critical,
        casesPerOneMillion,
        deathsPerOneMillion
      } = response;

      //   tbody.innerHTML = '';
      tbody.innerHTML += `
                        <tr>
                            <td>${country}</td>
                            <td>${cases}</td>
                            <td>+${todayCases}</td>
                            <td>${deaths}</td>
                            <td>+${todayDeaths}</td>
                            <td>${recovered}</td>
                            <td>${active}</td>
                            <td>${critical}</td>
                            <td>${casesPerOneMillion}</td>
                            <td>${deathsPerOneMillion}</td>
                        </tr>
            `;
    }
  })
  .catch((err) => console.log(`Error getting api : ${err}`));
