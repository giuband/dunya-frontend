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
  [getSelectedArtists, getArtistsDetails],
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

/**
 * GENERIC APPROACH
 */

/**
 * Returns the details of each entry of a specific category
 * Examples:
 *  category = concerts
 *  state.filtersData.receivedData = { artists: [{a1}, ...], concerts: [{c1}, {c2}...]}
 *  this would return: [{c1}, {c2}...]
 */
const getCategoryData = (state, props) => state.filtersData.receivedData[props.category];

/**
 * Returns the details of each entry of a specific category
 * Examples:
 *  category = concerts
 *  state.filtersData.receivedData = { artists: [{a1}...], concerts: [{c1}...], raagas: [{r1}...] }
 *  this would return: { artists: [{a1}...], raagas: [{r1}...] }
 */
const getOtherCategoriesDetails = (state, props) => {
  const keys = Object.keys(state.filtersData.receivedData);
  const receivedDataOtherKeys = keys.filter(key => key !== props.category);
  const selectedInOtherCategories = receivedDataOtherKeys.reduce((curState, curKey) =>
    Object.assign(curState, { [curKey]: state.filtersData.receivedData[curKey] }), {});
  return selectedInOtherCategories;
};

/**
 * Returns the list of selected items for remaining categories
 * Examples:
 *  category = concerts
 *  state.filtersData.selectedData = { artists: [1, 4 ...], concerts: [3, 8], raagas: [4] }
 *  this would return: { artists: [1, 4 ...], raagas: [4] }
 */
const getSelectedOtherCategories = (state, props) => {
  const keys = Object.keys(state.filtersData.selectedData);
  const selectedDataOtherKeys = keys.filter(key => key !== props.category);
  const selectedForOtherCategories = selectedDataOtherKeys.reduce((curState, curKey) =>
    Object.assign(curState, { [curKey]: state.filtersData.selectedData[curKey] }), {});
  return selectedForOtherCategories;
};

const getDetailsForSelectedEntry = (selected, entriesInCategory) =>
  entriesInCategory.find(curEntry => curEntry.name === selected);

const getDetailsForCategoryEntries = (category, selectedForCategories, entriesForCategories) => {
  const selectedInCategory = selectedForCategories[category];
  const objectsInCategory = entriesForCategories[category];
  return selectedInCategory.map(selected =>
    getDetailsForSelectedEntry(selected, objectsInCategory));
};

const getSelectedDetailsAllCategories = (selectedForCategories, entriesForCategories) => {
  const categories = Object.keys(selectedForCategories);
  return categories.reduce((curState, category) =>
    Object.assign(curState, {
      [category]: getDetailsForCategoryEntries(category, selectedForCategories,
        entriesForCategories),
    }), {});
};

/**
 * Returns the list of selected items for remaining categories with corresponding details
 * Examples:
 *  category = concerts
 *  state.filtersData.selectedData = { artists: [1], concerts: [3, 8], raagas: [2] }
 *  state.filtersData.receivedData = { artists: [{a1}...], concerts: [{c1}...], raagas: [{r1}...] }
 *  this would return: { artists: [{a1}], raagas: [{r2}] }
 */
const getSelectedOtherCategoriesDetails = createSelector(
  [getSelectedOtherCategories, getOtherCategoriesDetails],
  (selectedOtherCategories, otherCategoriesDetails) =>
    getSelectedDetailsAllCategories(selectedOtherCategories, otherCategoriesDetails)
);

export const makeGetVisibleCategoryData = () =>
  createSelector(
    [getSelectedOtherCategoriesDetails, getCategoryData],
    (selectedInOtherCategories, categoryData) => {
      console.log(selectedInOtherCategories, categoryData);
      return categoryData;
    }
  );
