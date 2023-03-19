import { useState, createContext,useEffect } from 'react';
import NavBarTemplate from './components/app/template/NavBarTemplate';
import GridTemplate from './components/app/template/GridTemplate';
import SearchComponentTemplate from './components/app/template/SearchComponentTemplate';
import { Datafields, MyPartsFilterState } from './components/interfaces/DataProps';


export const FilterContext = createContext<MyPartsFilterState>({} as MyPartsFilterState);



let dataProps = new Map<string, Datafields>();
dataProps.set('my_work_status',
  {
    title: 'My Work Status', key: 'my_work_status',
    fields: [
      { title: 'Ready & Incomplete', inputType: 'checkbox', labelText: 'Ready & Incomplete', chipText: '57', optionValues: [], keyText: 'ready_and_complete', checked: false },
      { title: 'Not Ready', inputType: 'checkbox', labelText: 'Not Ready', chipText: '20', optionValues: [], keyText: 'not_ready', checked: false },
      { title: 'Complete', inputType: 'checkbox', labelText: 'Complete', chipText: '23', optionValues: [], keyText: 'complete', checked: false },
      { title: 'Over Duration', inputType: 'checkbox', labelText: 'Over Duration', chipText: '6', optionValues: [], keyText: 'over_duration', checked: false },
      { title: 'Work Delinquent', inputType: 'checkbox', labelText: 'Work Delinquent', chipText: '6', optionValues: [], keyText: 'work_delinquent', checked: false },
    ]
  });

dataProps.set('global_life_cycle',
  {
    title: 'Global Lyfe Cycle', key: 'global_life_cycle', fields: [
      { title: 'Ready & Incomplete', inputType: 'checkbox', labelText: 'Ready & Incomplete', chipText: '57', optionValues: [], keyText: 'ready_and_complete', checked: false },
      { title: 'Not Ready', inputType: 'checkbox', labelText: 'Not Ready', chipText: '20', optionValues: [], keyText: 'not_ready', checked: false },
      { title: 'Complete', inputType: 'checkbox', labelText: 'Complete', chipText: '23', optionValues: [], keyText: 'complete', checked: false },
      { title: 'Over Duration', inputType: 'checkbox', labelText: 'Over Duration', chipText: '6', optionValues: [], keyText: 'over_duration', checked: false },
      { title: 'Work Delinquent', inputType: 'checkbox', labelText: 'Work Delinquent', chipText: '6', optionValues: [], keyText: 'work_delinquent', checked: false },
    ]
  });

dataProps.set('ecm',
  {
    title: 'ECM', key: 'ecm', fields: [
      { title: 'Ready & Incomplete', inputType: 'checkbox', labelText: 'Ready & Incomplete', chipText: '57', optionValues: [], keyText: 'ready_and_complete', checked: false },
      { title: 'Not Ready', inputType: 'checkbox', labelText: 'Not Ready', chipText: '20', optionValues: [], keyText: 'not_ready', checked: false },
      { title: 'Complete', inputType: 'checkbox', labelText: 'Complete', chipText: '23', optionValues: [], keyText: 'complete', checked: false },
      { title: 'Over Duration', inputType: 'checkbox', labelText: 'Over Duration', chipText: '6', optionValues: [], keyText: 'over_duration', checked: false },
      { title: 'Work Delinquent', inputType: 'checkbox', labelText: 'Work Delinquent', chipText: '6', optionValues: [], keyText: 'work_delinquent', checked: false },
    ]
  });


export const UpdatePartsFilter = createContext<any>([]);
const App = () => {

  const [filterArr, setFilterArr] = useState([]);


  useEffect(() => {
    if (filterArr != null) {
      console.log('filterArr: ',filterArr)
    }
  }, [filterArr]);


  return (
    <div className="App">
      <NavBarTemplate />
      <SearchComponentTemplate />
      <UpdatePartsFilter.Provider value={[filterArr, setFilterArr]}>

        <FilterContext.Provider value={{ data: dataProps }}      >
          <GridTemplate leftBoxWidth={3} rightBoxWidth={9} />
        </FilterContext.Provider>
      </UpdatePartsFilter.Provider>
    </div >

  );
}

export default App;