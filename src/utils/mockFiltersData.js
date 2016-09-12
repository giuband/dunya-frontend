const getArtists = numOfArtists =>
  [...Array(numOfArtists).keys()].map(index => ({
    name: `Cool Artist ${index}`,
    id: `a${index}`,
    concerts: [`${(index % 2) === 0 ? 'c1' : 'c2'}`, 'c5'],
    raagas: ['r1', `${(index % 2) === 0 ? 'r3' : 'r5'}`],
    taalas: [`${(index % 2) === 0 ? 't1' : 't3'}`, 't4'],
    instruments: [`${(index % 2) === 0 ? 'i1' : 'i4'}`, 'i5'],
  }));

const getConcerts = concertsIds =>
  concertsIds.map((concertID, index) => ({
    name: `Cool Concert ${index}`,
    id: concertID,
    raagas: ['r1', `${(index % 2) === 0 ? 'r3' : 'r5'}`],
    taalas: [`${(index % 2) === 0 ? 't1' : 't3'}`, 't4'],
    instruments: [`${(index % 2) === 0 ? 'i1' : 'i4'}`, 'i5'],
  }));

const getRefineGenericCategory = (categoryName, categoryIDs) =>
  categoryIDs.map((id, index) => ({
    id,
    name: `Cool ${categoryName} ${index}`,
  }));

export const receivedData = {
  artists: getArtists(10),
  concerts: getConcerts(['c1', 'c2', 'c5']),
  instruments: getRefineGenericCategory('instrument', ['i1', 'i4', 'i5']),
  raagas: getRefineGenericCategory('raaga', ['r1', 'r3', 'r5']),
  taalas: getRefineGenericCategory('taala', ['t1', 't3', 't4']),
};
