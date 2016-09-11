import React from 'react';
import { connect } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import { getFiltersData } from '../../actions/filtersData';
import { DATA_FETCH_STATUS } from '../../constants';
import '../../stylesheets/RefineSearch.scss';

const propTypes = {
  receivedData: React.PropTypes.object,
  status: React.PropTypes.string,
  getFiltersData: React.PropTypes.func,
};

const renderRefineSection = (receivedData) => (
  <div className="RefineSeach">
    <header className="RefineSearch__category-name-header">
      Refine
    </header>
    <div>
      {Object.keys(receivedData).map((categoryFilter) =>
        <CategoryFilter
          key={categoryFilter}
          category={categoryFilter}
          data={receivedData[categoryFilter]}
        />)
      }
    </div>
  </div>
);

const renderProgressOverview = () =>
  <h2>Getting data...</h2>;

const renderErrorOverview = () =>
  <h2>There was an error retrieving data</h2>;


class RefineSearch extends React.Component {
  componentWillMount() {
    // retrieve data to fill up the "refine" section
    this.props.getFiltersData();
  }

  render() {
    const { receivedData, status } = this.props;
    switch (status) {
      case DATA_FETCH_STATUS.SUCCESS:
        return renderRefineSection(receivedData);
      case DATA_FETCH_STATUS.FAILURE:
        return renderErrorOverview();
      default:
        return renderProgressOverview();
    }
  }
}

const mapStateToProps = (state) => state.filtersData;

RefineSearch.propTypes = propTypes;

export default connect(mapStateToProps, { getFiltersData })(RefineSearch);
