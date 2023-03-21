import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { createContext, useEffect, useState } from 'react';
import { Datafields, MyPartsFilterState } from '../../interfaces/DataProps';
import FilterComponent from './FilterComponent';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface ComponentData {
  leftBoxWidth: number;
  rightBoxWidth: number;
}

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



export const FilterContext = createContext<MyPartsFilterState>({} as MyPartsFilterState);

export const UpdatePartsFilter = createContext<any>([]);


export default function GridTemplate(props: ComponentData) {
  const [filterArr, setFilterArr] = useState([]);


  useEffect(() => {
    if (filterArr != null) {
      console.log('filterArr: ', filterArr)
    }
  }, [filterArr]);



  const [showLeft, setShowLeft] = useState(true);
  var showhideLeftBox = function () {
    console.log('setShowLeft ', showLeft)
    setShowLeft(!showLeft);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      
        <a onClick={() => { showhideLeftBox() }} style={{ color: 'blue' }}> Show/ Hide Filters</a>
      

      <UpdatePartsFilter.Provider value={[filterArr, setFilterArr]}>

        <FilterContext.Provider value={{ data: dataProps }}      >

          <Grid container spacing={1}>
            {showLeft ?
              <Grid item xs={props.leftBoxWidth} >
                <FilterComponent />
              </Grid> : <></>
            }
            <Grid item xs={(showLeft) ? props.rightBoxWidth : 12}>
              <Item>Right Data</Item>
            </Grid>
          </Grid></FilterContext.Provider></UpdatePartsFilter.Provider>
    </Box>
  );
}