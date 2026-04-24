const events = [
  {
  id: "david-wilcock",
  name: "David Wilcock",
  role: "UFO Researcher & Author",
  coords: [40.0140, -105.2705],
  location: "Boulder County, Colorado, USA",
  date: "2026-04-20",
  status: "DOD",
  summary: "Author and UFO‑focused researcher tied to disclosure‑movement circles who was found dead by suicide in Boulder County, Colorado, in April 2026.",
  sources: [
    {
      label: "The Independent",
      url: "https://www.independent.co.uk/news/world/americas/david-wilcock-ufo-researcher-dead-b2963362.html",
      type: "primary"
    },
    {
      label: "News coverage / video",
      url: "https://www.youtube.com/watch?v=bY3_DpL9qx0",
      type: "secondary"
    }
  ]
},
{
  id: "nick-pope",
  name: "Nick Pope",
  role: "UFO Analyst & Former UK Defence Official",
  coords: [51.5074, -0.1278],
  location: "London, England, United Kingdom",
  date: "2026-04-07",
  status: "DOD",
  summary: "British UFO analyst and former UK Ministry of Defence desk officer on UFO reports who later became a prominent media commentator; he died around 7 April 2026 at age 60 after being diagnosed with stage‑four esophageal cancer.",
  sources: [
    {
      label: "Vice / aggregation of reports",
      url: "https://www.vice.com/en/article/ufo-expert-nick-pope-dies-at-60/",
      type: "secondary"
    },
    {
      label: "Ground News summary",
      url: "https://ground.news/article/what-caused-nick-popes-death-all-about-british-ufo-experts-last-days-and-his-wife-elizabeth-weiss",
      type: "secondary"
    },
    {
      label: "Express",
      url: "https://www.the-express.com/news/uk-news/204311/Top-UFO-expert-dies-suddenly-following-investigation/amp",
      type: "secondary"
    }
  ]
},
{
  id: "jason-thomas",
  name: "Jason Thomas",
  role: "Pharmaceutical Researcher (Novartis NIBR)",
  coords: [42.5030, -71.0723],
  location: "Wakefield, Massachusetts, USA",
  date: "2026-03-17",
  status: "DOD",
  summary: "Novartis Institutes for BioMedical Research investigator from Wakefield, Massachusetts who disappeared after leaving home on 12 December 2025; following a three‑month search, a body believed to be his was recovered from a nearby lake in March 2026.",
  sources: [
    {
      label: "Reddit: NIBR investigator missing",
      url: "https://www.reddit.com/r/biotech/comments/1pmy65z/nibr_investigator_missing/",
      type: "tertiary"
    },
    {
      label: "People",
      url: "https://people.com/body-found-lake-believed-belong-scientist-missing-3-months-11928819",
      type: "primary"
    },
    {
      label: "Newsweek overview",
      url: "https://www.newsweek.com/who-is-amy-eskridge-scientist-death-queried-us-expert-mysteries-11843659",
      type: "secondary"
    }
  ]
},
{
  id: "william-mccasland",
  name: "William McCasland",
  role: "Astronautical Engineer & Retired Air Force Major General",
  coords: [35.0844, -106.6504],
  location: "Albuquerque, New Mexico, USA",
  date: "2026-02-27",
  status: "MIA",
  summary: "Astronautical engineer and retired U.S. Air Force major general, former head of the Air Force Research Laboratory, who left his Albuquerque home on foot in February 2026 and disappeared, prompting an FBI‑assisted search because of his access to sensitive aerospace programs.",
  sources: [
    {
      label: "CNN",
      url: "https://edition.cnn.com/2026/03/17/us/fbi-search-william-mccasland-general-missing",
      type: "primary"
    }
  ]
},
{
    id: "nuno-loureiro",
    name: "Nuno Loureiro",
    role: "Plasma and Fusion Professor",
    coords: [42.3601, -71.0942],
    location: "Cambridge, Massachusetts, USA",
    date: "2025-12-15",
    status: "DOD",
    summary: "MIT professor of nuclear science and engineering and physics, and director of the Plasma Science and Fusion Center, who was shot and killed at his Cambridge home in December 2025.",
    sources: [
      {
        label: "MIT News",
        url: "https://news.mit.edu/2025/nuno-loureiro-professor-director-plasma-science-and-fusion-center-dies-1216",
        type: "primary"
      }
    ]
  },
  {
    id: "steven-garcia",
    name: "Steven Garcia",
    role: "U.S. Nuclear Researcher",
    coords: [35.0844, -106.6504],
    location: "Albuquerque, New Mexico, USA",
    date: "2025-08-28",
    status: "MIA",
    summary: "U.S. nuclear researcher from Albuquerque who walked out of his home in late August 2025 wearing casual clothes and carrying a handgun; he has not been seen since, with public discussion focusing on his work with sensitive U.S. programs.",
    sources: [
      {
        label: "New Mexico Missing Person Record",
        url: "https://missingpersons.dps.nm.gov/mpweb/mpdetailreport_serv?id=M101688",
        type: "primary"
      },
      {
        label: "Reddit post",
        url: "https://www.reddit.com/r/UFOB/comments/1slu47s/another_individual_connected_to_topsecret_us/",
        type: "tertiary"
      }
    ]
  },
  {
    id: "joshua-leblanc",
    name: "Joshua LeBlanc",
    role: "Nasa Nuclear Engineer",
    coords: [34.7304, -86.5861],
    location: "Huntsville, Alabama, USA",
    date: "2025-07-22",
    status: "DOD",
    summary: "29‑year‑old nuclear propulsion engineer at Nasa, who left his Huntsville home without his phone or wallet, was reported missing that morning and was later found dead when his Tesla burned after hitting a guardrail and trees, with the FBI now examining possible links to other scientist cases.",
    sources: [
      {
        label: "Fox News",
        url: "https://www.foxnews.com/us/nasa-nuclear-engineer-found-dead-burned-tesla-vanishing-alabama-home-last-year",
        type: "primary"
      }
    ]
  },
{
  id: "monica-reza",
  name: "Monica Reza",
  role: "Materials Scientist",
  coords: [34.3720, -117.9500],
  location: "Mount Waterman, California, USA",
  date: "2025-06-22",
  status: "MIA",
  summary: "Materials scientist and co‑inventor of a high‑performance superalloy for rocket engines who vanished mid‑hike near Mount Waterman in June 2025, only a few metres behind her group, with later reporting raising questions about phone data and the handling of the search.",
  sources: [
    {
      label: "Reddit investigation thread",
      url: "https://www.reddit.com/r/socalhiking/comments/1rvhyir/full_investigation_into_the_monica_reza/",
      type: "secondary"
    },
    {
      label: "Sentinel follow-up",
      url: "https://thesentinel.network/p/the-phone-gap-monica-rezas-cell-phone",
      type: "secondary"
    }
  ]
},
{
  id: "li-haibo",
  name: "Li Haibo",
  role: "Nanomaterials Scientist",
  coords: [38.4872, 106.2309],
  location: "Yinchuan, Ningxia, China",
  date: "2025-04-01",
  status: "DOD",
  summary: "Nanomaterials scientist at Ningxia University working on lithium‑ion battery performance and other advanced materials who reportedly died suddenly in his early forties.",
  sources: [
    {
      label: "Mundo América",
      url: "https://www.mundoamerica.com/news/2025/11/17/691b0e7dfc6c83bf4c8b459d.html",
      type: "secondary"
    }
  ]
},
{
  id: "carl-grillmair",
  name: "Carl Grillmair",
  role: "Nasa's JPL Astronomer",
  coords: [34.2011, -118.1710],
  location: "Pasadena, California, USA",
  date: "2024-11-01",
  status: "MIA",
  summary: "Astronomer at Nasa's Jet Propulsion Laboratory known for mapping the Milky Way and working with the Vera Rubin Observatory was found dead in California in 2024 in circumstances now being reviewed alongside other scientist deaths.",
  sources: [
    {
      label: "CBC News",
      url: "https://www.cbc.ca/news/world/missing-scientists-grillmair-9.7173081",
      type: "primary"
    }
  ]
},
  {
  id: "frank-werner-maiwald",
  name: "Frank Werner Maiwald",
  role: "Nasa's JPL Astronomer",
  coords: [34.0522, -118.2437],
  location: "Los Angeles, California, USA",
  date: "2024-07-04",
  status: "DOD",
  summary: "Principal researcher at Nasa's Jet Propulsion Laboratory associated with advanced Earth‑observation and planetary instruments who died in 2024 in the Los Angeles area; no public cause of death was reported.",
  sources: [
    {
      label: "Obituary / Legacy",
      url: "https://www.legacy.com/obituaries/search?query=frank+maiwald",
      type: "primary"
    },
    {
      label: "Economic Times summary",
      url: "https://economictimes.com/us/news/who-are-the-us-scientists-linked-to-nasa-and-military-research-vanished-or-died-under-unexplained-circumstances-heres-a-timeline/articleshow/109052183.cms",
      type: "secondary"
    }
  ]
},
  {
  id: "zhang-daibing",
  name: "Zhang Daibing",
  role: "Drone Systems Scientist",
  coords: [28.2282, 112.9388],
  location: "Changsha, Hunan, China",
  date: "2024-01-01",
  status: "DOD",
  summary: "Drone‑systems expert and deputy director of a national unmanned systems research institute in Changsha who died in 2024, with reports noting his work on advanced UAV technology but giving few public details about cause of death.",
  sources: [
    {
      label: "Newsweek",
      url: "https://www.newsweek.com/chinese-scientists-have-been-dying-mysterious-deaths-too-11861806",
      type: "primary"
    }
  ]
},
{
  id: "michael-david-hicks",
  name: "Michael David Hicks",
  role: "Nasa's JPL Astronomer",
  coords: [34.2667, -118.3000],
  location: "Sunland, California, USA",
  date: "2023-07-30",
  status: "DOD",
  summary: "Research scientist at Nasa's Jet Propulsion Laboratory who specialized in comets and near‑Earth asteroids, contributing to planetary defence missions such as DART, Dawn, and Deep Space 1; no public cause of death was reported.",
  sources: [
    {
      label: "Lunar and Planetary Laboratory",
      url: "https://lpl.arizona.edu/news/2023/fall/michael-david-hicks-1964-2023",
      type: "primary"
    },
    {
      label: "Times of India",
      url: "https://timesofindia.indiatimes.com/science/the-nasa-scientist-whose-death-went-under-the-radar-meet-michael-david-hicks-who-played-a-key-role-in-studying-near-earth-asteroids-and-comets/articleshow/130116590.cms",
      type: "secondary"
    }
  ]
},
{
  id: "feng-he",
  name: "Feng He",
  role: "Military AI Scientist",
  coords: [39.9042, 116.4074],
  location: "Beijing, China",
  date: "2023-07-01",
  status: "DOD",
  summary: "Defence AI scientist linked to the National University of Defense Technology in China who is reported to have died in a 2023 car accident in Beijing while working on military artificial‑intelligence systems.",
  sources: [
    {
      label: "Newsweek",
      url: "https://www.newsweek.com/chinese-scientists-have-been-dying-mysterious-deaths-too-11861806",
      type: "primary"
    }
  ]
},
{
  id: "grigory-klinishov",
  name: "Grigory Klinishov",
  role: "Nuclear Physicist & RDS-37 Co-Creator",
  coords: [55.7558, 37.6173],
  location: "Moscow, Russia",
  date: "2023-06-17",
  status: "DOD",
  summary: "Soviet-era nuclear physicist and one of the creators of the RDS-37 two-stage thermonuclear bomb who was found dead in his Moscow apartment in June 2023; Russian state media cited emergency services saying his death was a suicide and that a note was found.",
  sources: [
    {
      label: "Al Jazeera",
      url: "https://www.aljazeera.com/news/2023/6/22/russia-thermonuclear-bomb-scientist-dies-putin-boosts-nuke-force",
      type: "secondary"
    },
    {
      label: "RFE/RL",
      url: "https://www.rferl.org/a/russia-klinishov-creator-thermonuclear-bomb-suicide/32470236.html",
      type: "secondary"
    },
    {
      label: "Ukrainska Pravda",
      url: "https://www.pravda.com.ua/eng/news/2023/06/21/7407912/",
      type: "secondary"
    }
  ]
},
{
  id: "amy-eskridge",
  name: "Amy Eskridge",
  role: "Chemist & Exotic Physics Researcher",
  coords: [34.7304, -86.5861],
  location: "Huntsville, Alabama, USA",
  date: "2022-06-15",
  status: "DOD",
  summary: "Chemist associated in online discussion with exotic propulsion and energy‑weapon research in Huntsville whose 2022 death was officially ruled a self‑inflicted gunshot.",
  sources: [
    {
      label: "NewsNation",
      url: "https://www.newsnationnow.com/missing/amy-eskridge-energy-weapon-attack/",
      type: "secondary"
    },
    {
      label: "Newsweek",
      url: "https://www.newsweek.com/who-is-amy-eskridge-scientist-death-queried-us-expert-mysteries-11843659",
      type: "primary"
    },
    {
      label: "Reddit discussion",
      url: "https://www.reddit.com/r/UFOs/comments/1odx4bq/whats_the_real_story_behind_dr_amy_eskridge/",
      type: "tertiary"
    }
  ]
},
];

const map = L.map('map').setView([20, -30], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const titleEl = document.getElementById('main-title');
const sidebarList = document.querySelector('.sidebar-list');
const sortSelect = document.getElementById('sort-select');

titleEl.textContent = `${events.length} Scientists Now Dead/Missing`;

const markers = {};

function getMarkerColor(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const now = new Date();
  const diffDays = (now - date) / (1000 * 60 * 60 * 24);

  const yellow = '#ffd23f'; // 2023 and before
  const orange24 = '#ff9f1c'; // 2024
  const orange25 = '#ff6f51'; // 2025
  const red26 = '#ff3b30'; // 2026
  const deepRedRecent = '#c81d25'; // past 7 days in 2026

  if (year >= 2026) {
    if (diffDays <= 7) {
      return deepRedRecent;
    }
    return red26;
  }

  if (year === 2025) {
    return orange25;
  }

  if (year === 2024) {
    return orange24;
  }

  return yellow;
}

function createSourcesHtml(sources) {
  return sources.map(source => {
    const className = source.type === 'tertiary' ? 'source-link tertiary' : 'source-link';
    return `<li><a class="${className}" href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a></li>`;
  }).join('');
}

function openDetailCard(event) {
  const existingCard = document.querySelector('.detail-card');
  if (existingCard) {
    existingCard.remove();
  }

  const card = document.createElement('div');
  card.className = 'detail-card';
  card.innerHTML = `
    <button class="close-card" type="button">×</button>
    <p class="detail-date">${event.status} · ${event.date}</p>
    <h3>${event.name}</h3>
    <p class="detail-role">${event.role}</p>
    <p class="detail-location">${event.location}</p>
    <p class="detail-summary">${event.summary}</p>
    <h4>Sources</h4>
    <ul class="source-list">
      ${createSourcesHtml(event.sources)}
    </ul>
  `;

  document.body.appendChild(card);

  card.querySelector('.close-card').addEventListener('click', () => {
    card.remove();
  });
}

function renderSidebar(eventList) {
  sidebarList.innerHTML = '';

  eventList.forEach(event => {
    const item = document.createElement('article');
    item.className = 'incident-card';
    item.innerHTML = `
  <h3><button class="incident-link" type="button">${event.name}</button></h3>
  <p class="role">${event.role}</p>
  <p class="incident-date">${event.status} · ${event.date}</p>
  <p class="location">${event.location}</p>
`;

    item.querySelector('.incident-link').addEventListener('click', () => {
  markers[event.id].openPopup();
  openDetailCard(event);
});

    sidebarList.appendChild(item);
  });
}

events.forEach(event => {
  const isMissing = event.status === 'MIA';
  const color = getMarkerColor(event.date);

  const marker = L.circleMarker(event.coords, {
    radius: 5,
    fillColor: isMissing ? '#ffffff' : color,
    color: color,
    weight: isMissing ? 2 : 0,
    opacity: 1,
    fillOpacity: isMissing ? 0 : 0.95
  }).addTo(map);

  marker.bindPopup(`
    <strong>${event.name}</strong><br>
    ${event.role}
  `);

  marker.on('click', () => {
    openDetailCard(event);
  });

  markers[event.id] = marker;
});

function sortEvents(mode) {
  const sorted = [...events];

  if (mode === 'first-name') {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (mode === 'last-name') {
    sorted.sort((a, b) => {
      const aLast = a.name.split(' ').slice(-1)[0];
      const bLast = b.name.split(' ').slice(-1)[0];
      return aLast.localeCompare(bLast);
    });
  } else if (mode === 'latest') {
    sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (mode === 'earliest') {
    sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  renderSidebar(sorted);
}

sortSelect.addEventListener('change', (event) => {
  sortEvents(event.target.value);
});

renderSidebar(events);