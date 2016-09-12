import { createSelector } from 'reselect';

const getSelectedArtists = state => state.filtersData.selectedData.artists;
const getArtistsDetails = state => state.filtersData.receivedData.artists;
const getConcerts = state => state.filtersData.receivedData.concerts;

/**
 * As filtersData.selectedData.artists only stores the name of each selected artist,
 * use this selector to automatically retrieve the details for each of them
 * @type {[type]}
 */
const getSelectedArtistsDetails = createSelector(
  getSelectedArtists,
  getArtistsDetails,
  (selectedArtists, artistsDetails) => selectedArtists.map(artistName =>
    artistsDetails.find(curArtist => curArtist.name === artistName))
);

const sortByName = (objectA, objectB) => {
  if (objectA.name > objectB.name) {
    return 1;
  }
  if (objectA.name < objectB.name) {
    return -1;
  }
  return 0;
};

export const getVisibleConcerts = createSelector(
  [getSelectedArtistsDetails, getConcerts],
  (selectedArtists, concerts) => {
    if (!selectedArtists.length) {
      // if no artists selected, return concerts
      return concerts;
    }
    const selectedConcertsIDs = selectedArtists.reduce((selectedConcerts, curArtist) => {
      const concatenatedConcertsIDs = [...selectedConcerts, ...curArtist.concerts];
      // remove duplicates
      return [...new Set(concatenatedConcertsIDs)];
    }, []);
    const selectedConcerts = selectedConcertsIDs.map(concertID =>
      concerts.find(curConcert => curConcert.id === concertID));
    const sortedSelectedConcerts = selectedConcerts.sort(sortByName);
    return sortedSelectedConcerts;
  }
);
