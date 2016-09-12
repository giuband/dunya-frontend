import { createSelector } from 'reselect';

const sortByName = (objectA, objectB) => {
  if (objectA.name > objectB.name) {
    return 1;
  }
  if (objectA.name < objectB.name) {
    return -1;
  }
  return 0;
};

/**
 * Returns the details of each entry of a specific category.
 * Examples:
 *  category = concerts
 *  state.filtersData.receivedData = { artists: [{a1}, ...], concerts: [{c1}, {c2}...] }
 *  this would return: { concerts: [{c1}, {c2}...] }
 */
const getCategoryData = (state, props) => ({
  categoryName: [props.category],
  categoryDataContent: state.filtersData.receivedData[props.category],
});

/**
 * Returns the details of each entry for each category different from the selected one.
 * Examples:
 *  category = concerts
 *  state.filtersData.receivedData = { artists: [{a1}...], concerts: [{c1}...], raagas: [{r1}...] }
 *  this would return: { artists: [{a1}...], raagas: [{r1}...] }
 */
const getOtherCategoriesDetails = (state, props) => {
  const keys = Object.keys(state.filtersData.receivedData);
  const otherCategoriesKeys = keys.filter(key => key !== props.category);
  const otherCategoriesData = otherCategoriesKeys.reduce((curState, curKey) =>
    Object.assign(curState, { [curKey]: state.filtersData.receivedData[curKey] }), {});
  return otherCategoriesData;
};

/**
 * Returns the list of selected items for remaining categories.
 * Examples:
 *  category = concerts
 *  state.filtersData.selectedData = { artists: [1, 4 ...], concerts: [3, 8], raagas: [4] }
 *  this would return: { artists: [1, 4 ...], raagas: [4] }
 */
const getSelectedOtherCategories = (state, props) => {
  const keys = Object.keys(state.filtersData.selectedData);
  const otherCategoriesKeys = keys.filter(key => key !== props.category);
  const selectedForOtherCategories = otherCategoriesKeys.reduce((curState, curKey) =>
    Object.assign(curState, { [curKey]: state.filtersData.selectedData[curKey] }), {});
  return selectedForOtherCategories;
};

/** Gets the entry details object given its name */
const getDetailsForSelectedEntry = (entryName, entriesInCategory) =>
  entriesInCategory.find(curEntry => curEntry.name === entryName);

/**
 * Given a list of categorized entries, retrieves the details of each entry in a given category.
 * Example:
 *  category = concerts
 *  selectedForCategories = { artists: [1, 4], concerts: [3, 8], raagas: [4] }
 *  entriesForCategories = {artists: [{a1},...], concerts: [{c1},...], raagas: [{r1}, ...]}
 * This would return: [{c3}, {c8}]
 */
const getDetailsForCategoryEntries = (category, selectedForCategories, entriesForCategories) => {
  const selectedInCategory = selectedForCategories[category];
  const objectsInCategory = entriesForCategories[category];
  return selectedInCategory.map(selected =>
    getDetailsForSelectedEntry(selected, objectsInCategory));
};

/**
 * Given a list of categorized entries, retrieves the details of each entry for each category.
 * Example:
 *  category = concerts
 *  selectedForCategories = { artists: [1, 4], concerts: [3, 8], raagas: [4] }
 *  entriesForCategories = {artists: [{a1},...], concerts: [{c1},...], raagas: [{r1}, ...]}
 * This would return: {artists:[{a1}, {a4}], concerts:[{c3}, {c8}], raagas: [{r4}]}
 */
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
 *  category = concerts (the selected category is read from the props)
 *  state.filtersData.selectedData = { artists: [1], concerts: [3, 8], raagas: [2] }
 *  state.filtersData.receivedData = { artists: [{a1}...], concerts: [{c1}...], raagas: [{r1}...] }
 *  this would return: { artists: [{a1}], raagas: [{r2}] }
 */
const getSelectedOtherCategoriesDetails = createSelector(
  [getSelectedOtherCategories, getOtherCategoriesDetails],
  (selectedOtherCategories, otherCategoriesDetails) =>
    getSelectedDetailsAllCategories(selectedOtherCategories, otherCategoriesDetails)
);

const getEntriesForcedByOtherCategoryFilter = (otherCategorySelections, ownCategoryName) => {
  let forcedEntries = [];
  otherCategorySelections.forEach((entry) => {
    forcedEntries = [...forcedEntries, ...entry[ownCategoryName]];
  });
  const filteredEntries = [...new Set(forcedEntries)];
  if (filteredEntries.length === 1 && filteredEntries[0] === undefined) {
    return [];
  }
  return filteredEntries;
};

export const makeGetVisibleCategoryData = () =>
  createSelector(
    [getSelectedOtherCategoriesDetails, getCategoryData],
    (selectedInOtherCategories, { categoryName, categoryDataContent }) => {
      let filteredCategoryEntries = [];
      Object.keys(selectedInOtherCategories).forEach((category) => {
        const entriesForcedByOtherCategoryFilter = getEntriesForcedByOtherCategoryFilter(
          selectedInOtherCategories[category], categoryName);
        filteredCategoryEntries = [...filteredCategoryEntries,
                                   ...entriesForcedByOtherCategoryFilter];
      });
      // remove duplicated entries
      filteredCategoryEntries = [...new Set(filteredCategoryEntries)];
      if (!filteredCategoryEntries.length) {
        return categoryDataContent;
      }
      const filteredCategoryEntriesContent = filteredCategoryEntries.map((entryID) => {
        const correspondingEntry = categoryDataContent.find(curEntry => curEntry.id === entryID);
        return correspondingEntry;
      });
      return filteredCategoryEntriesContent.sort(sortByName);
    }
  );
