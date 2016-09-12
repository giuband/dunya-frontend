const getArtists = numOfArtists =>
  [...Array(numOfArtists).keys()].map(index => ({
    name: `Cool Artist ${index}`,
    id: index,
    concerts: [parseInt(`${(index % 2) === 0 ? 1 : 2}`, 10), 5],
    raagas: [1, parseInt(`${(index % 2) === 0 ? 3 : 5}`, 10)],
    taalas: [parseInt(`${(index % 2) === 0 ? 1 : 3}`, 10), 4],
    instruments: [parseInt(`${(index % 2) === 0 ? 1 : 4}`, 10), 5],
  }));

const getConcerts = concertsIds =>
  concertsIds.map((concertID, index) => ({
    name: `Cool Concert ${index}`,
    id: concertID,
    raagas: [1, parseInt(`${(index % 2) === 0 ? 3 : 5}`, 10)],
    taalas: [parseInt(`${(index % 2) === 0 ? 1 : 3}`, 10), 4],
    instruments: [parseInt(`${(index % 2) === 0 ? 1 : 4}`, 10), 5],
  }));

const getRefineGenericCategory = (categoryName, categoryIDs) =>
  categoryIDs.map((id, index) => ({
    id,
    name: `Cool ${categoryName} ${index}`,
  }));

export const receivedData = {
  artists: getArtists(10),
  concerts: getConcerts([1, 2, 5]),
  instruments: getRefineGenericCategory('instrument', [1, 4, 5]),
  raagas: getRefineGenericCategory('raaga', [1, 3, 5]),
  taalas: getRefineGenericCategory('taala', [1, 3, 4]),
};
