import React from 'react';
import { connect } from 'react-redux';
import Search from '../Search';
import Results from '../Results';
import './MainBody.scss';

const propTypes = {
  receivedData: React.PropTypes.object,
};

const MainBody = (props) => {
  if (!Object.keys(props.receivedData).length) {
    // mount main body only once we have received the data for the filters
    return null;
  }
  return (
    <div className="MainBody">
      <section className="MainBody__Item">
        <Search />
      </section>
      <section className="MainBody__Item">
        <Results />
      </section>
    </div>
  );
};

const mapStateToProps = state => ({ receivedData: state.filtersData.receivedData });

MainBody.propTypes = propTypes;
export default connect(mapStateToProps, {})(MainBody);
