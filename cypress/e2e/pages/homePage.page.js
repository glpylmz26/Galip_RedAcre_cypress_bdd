const getSelector = (element) => {
  switch (element) {
    case `Accpet Cookies`: return `#onetrust-accept-btn-handler`;
    case `Round Trip Dropdown`: return `[class="form-control"][title="Round trip"]`;
    case `Departing From`: return `.route-selection-origin .input-holder.airport-selection `;
    case `Departing From Airport Input Box`: return `input.form-control.airport-search-input`;
    case `Departing Airport Option`: return `.airport-name.ellipsis`;
    case `Flying To`: return `.route-selection-destination .input-holder.airport-selection `;
    case `Flying To Airport Input Box`: return `input[name="Destination1"]`;
    case `Flying To Airport Option`: return `.airport-name.ellipsis`;
    case `Departure Date`: return `[name="DepartureDate1"]`;
    case `Find Flights Button`: return `[class="input-holder buttons"] button[type="submit"]`;
    case `Flexible Dates`: return `[class = "LinkUI__Link-bREbZJ BPjDb"]`;
  }
};

export default {
  getSelector
};
