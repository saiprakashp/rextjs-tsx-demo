import { DataStoreActionCreator } from "../types";
import Axios, { AxiosPromise } from "axios";



export const getFilters = (
  userName: string
): DataStoreActionCreator<AxiosPromise> => async dispatch => {
  const res = await Axios.request({
    url: `https://jsonplaceholder.typicode.com/users/${userName}`
  }).catch(err => {
    throw err;
  });
  const dataProps: any = {

    data: [
      {
        title: 'My Work Status', key: 'my_work_status',
        fields: [
          { title: 'Ready & Incomplete', inputType: 'checkbox', labelText: 'Ready & Incomplete', chipText: '57', optionValues: [], keyText: 'ready_and_complete', checked: false },
          { title: 'Not Ready', inputType: 'checkbox', labelText: 'Not Ready', chipText: '20', optionValues: [], keyText: 'not_ready', checked: false },
          { title: 'Complete', inputType: 'checkbox', labelText: 'Complete', chipText: '23', optionValues: [], keyText: 'complete', checked: false },
          { title: 'Over Duration', inputType: 'checkbox', labelText: 'Over Duration', chipText: '6', optionValues: [], keyText: 'over_duration', checked: false },
          { title: 'Work Delinquent', inputType: 'checkbox', labelText: 'Work Delinquent', chipText: '6', optionValues: [], keyText: 'work_delinquent', checked: false },
        ]
      },
      { title: 'Global Lyfe Cycle', key: 'global_life_cycle', fields: [] },
      { title: 'ECM', key: 'ecm', fields: [] }
    ]
  };
  dispatch({ type: "GET_FILTERS", payload: dataProps });

  return dataProps;
};
