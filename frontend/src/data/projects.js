// projectData.js

export const projectData = [
  {
    id: 0,
    name: '2022 Formula 1 Analysis',
    summary: 'Mid-season analysis to draw predictions',
    description: 'Scraping half of the 2022 Formula 1 season data off their website, cleaning the data, loading into MongoDB, and displaying the data through a Flask webapp. Then fitting the data to a LightGBM model for season predictions',
    technology: 'Python, Juptyer, Flask, MongoDB, LightGBM',
    image: require('../static/project_images/CIMG0861.JPG'),
    repository: 'https://github.com/Spakicey/2022-Formula1-Analysis',
    deployment: '',
    visible: 'visible',
  },
  {
    id: 1,
    name: 'MechaCar Statistical Analysis',
    summary: 'Automotive statistical analysis',
    description: 'Using R to gain new insights into mpg and suspension coil PSI data',
    technology: 'R, Linear Regression, T-Test',
    image: require('../static/project_images/CIMG0884.JPG'),
    repository: 'https://github.com/Spakicey/mechacar-statistical-analysis',
    deployment: '',
    visible: 'visible',
  },
  {
    id: 2,
    name: 'Mapping Earthquakes',
    summary: 'Interactive maps',
    description: 'Creating interactive maps displaying tectonic plates and earthquakes locations and magnitudes',
    technology: 'D3, GeoJSON, JavaScript',
    image: require('../static/project_images/CIMG0861.JPG'),
    repository: 'https://github.com/Spakicey/mapping-earthquakes',
    deployment: '',
    visible: 'visible',
  },
  {
    id: 3,
    name: 'Belly Button Biodiversity',
    summary: 'Interactive dashboard for volunteers\' data',
    description: 'This project contains interactive charts for top 10 bacterial species (OTUs), a bubble chart showing bacteria cultures per sample, and a guage chart showing weekly frequency of belly button washes',
    technology: 'JavaScript, D3, Plotly',
    image: require('../static/project_images/CIMG0861.JPG'),
    repository: 'https://github.com/Spakicey/belly-button-biodiversity',
    deployment: 'https://spakicey.github.io/belly-button-biodiversity/',
    visible: 'visible',
  },
]

{/*
  {
    id: ,
    name: '',
    summary: '',
    description: '',
    technology: '',
    image: require('../static/project_images/'),
    repository: 'https://github.com/Spakicey/',
    deployment: '',
    visible: 'visible',
  },
*/}
