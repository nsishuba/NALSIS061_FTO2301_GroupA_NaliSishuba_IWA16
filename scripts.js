
const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment

  const createHtml = (athlete) => {
    const {firstName, surname, id, races} = athlete
    const [{date, time}] = races.reverse() //reversing to get latest Date 
  
    const fragment = document.createDocumentFragment();
  
    let title = document.createElement("h2");
    title.innerHTML = id;
    fragment.appendChild(title);
  
    const list = document.createElement("dl");
    
    const day = new Date(date).getDate();
    const month = MONTHS[new Date(date).getMonth()];
    const year = new Date(date).getFullYear();
    
    const [first, second, third, fourth] = time;
    const total = first + second + third + fourth;

    let hours = 0;
    let minutes = 0;

    if (total >= 60) {
      hours = Math.floor(total / 60);
      minutes = total - (hours * 60);
    } 
    else {
      minutes = total;
    }

    list.innerHTML = /* html */ `
      <dt>Athlete:</dt>
      <dd>${firstName} ${surname}</dd>
  
      <dt>Total Races:</dt>
      <dd>${races.length}</dd>
  
      <dt>Event Date (Latest):</dt>
      <dd>${day} ${month} ${year}</dd>
  
      <dt>Total Time (Latest):</dt>
      <dd>${hours.toString().padStart(2, 0)}:${minutes}</dd>
    `;
  
    return fragment.appendChild(list);
  }
  
  const { response: {data: {NM372, SV782}}} = data;
  document.querySelector('[data-athlete="NM372"]').appendChild(createHtml(NM372));
  document.querySelector('[data-athlete="SV782"]').appendChild(createHtml(SV782));

