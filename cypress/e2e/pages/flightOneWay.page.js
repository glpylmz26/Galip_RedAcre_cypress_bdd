const getSelector = (element) => {
  switch (element) {
    case `Flexible Dates`: return `[class = "LinkUI__Link-bREbZJ BPjDb"]`;
    case `Flight Price`: return `[class="sc-gZpLeQ gRaRW"] [class="sc-jVOTke cmVAqE"]`;
  }
};

export default {
  getSelector,
};
