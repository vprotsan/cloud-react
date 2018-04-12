import React from 'react';
import SearchForm from './SearchForm'

class MainSearch extends React.Component {
   constructor(props){
      super(props)
   }

   render() {
      return (
         <div className="rectangle-2 container">
             <h1 className="icd">ICD-10 Medical Coding Reference</h1>
             <div className="rectangle-5 search-form">
               <SearchForm />
             </div>
             <h2>This website is a free reference tool designed for the fast lookup of all current American ICD-10-CM (diagnosis) and ICD-10-PCS (procedure) medical billing codes.</h2>
         </div>
      )
   }
}

export default MainSearch;
