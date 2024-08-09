const data = [
  {
    location: 'London',
    latitude: 51.5073219,
    longitude: -0.1276474,
  },

  {
    location: 'Singapore',
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: 'Dhaka',
    latitude: 23.810331,
    longitude: 90.412521,
  },
  {
    location: 'Toronto',
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
  {
    location: 'Khulna',
    latitude: 22.82,
    longitude: 89.550003,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const filtered = data.filter((item) => item.location === location);
  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: '',
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
}

export { getLocationByName, getLocations };
