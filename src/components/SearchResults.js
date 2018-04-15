import React from 'react';
import ReactDOM from 'react-dom';
import ResultItem from './ResultItem';


class SearchResults extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    var searchResult = this.props.results;
    var inputValue = this.props.inputValue;

    return(
      <div>
        <h1>Search Results</h1>
        <ul>
        {searchResult.map((code, index) => {
          return(
            <li>
              <ResultItem itemValue={code} key={index} inputValue={inputValue}/> 
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}
export default SearchResults;
