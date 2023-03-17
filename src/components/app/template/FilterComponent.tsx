
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import BasicCardTemplate from '../template/BasicCardTemplate';
import NavBarTemplate from '../template/NavBarTemplate';
import GridTemplate from '../template/GridTemplate';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from "react-redux";
import { getFilters } from "../../../reducers/actions";
import { FilterDataStore, DataStoreDispatch } from "../../../types";
import TextField from '@mui/material/TextField';
import { Datafields } from '../../interfaces/DataProps';





// const dataProps: Dataprops = {

//     data: [
//         {
//             title: 'My Work Status', key: 'my_work_status',
//             fields: [
//                 { title: 'Ready & Incomplete', inputType: 'checkbox', labelText: 'Ready & Incomplete', chipText: '57', optionValues: [], keyText: 'ready_and_complete', checked: false },
//                 { title: 'Not Ready', inputType: 'checkbox', labelText: 'Not Ready', chipText: '20', optionValues: [], keyText: 'not_ready', checked: false },
//                 { title: 'Complete', inputType: 'checkbox', labelText: 'Complete', chipText: '23', optionValues: [], keyText: 'complete', checked: false },
//                 { title: 'Over Duration', inputType: 'checkbox', labelText: 'Over Duration', chipText: '6', optionValues: [], keyText: 'over_duration', checked: false },
//                 { title: 'Work Delinquent', inputType: 'checkbox', labelText: 'Work Delinquent', chipText: '6', optionValues: [], keyText: 'work_delinquent', checked: false },
//             ]
//         },
//         { title: 'Global Lyfe Cycle', key: 'global_life_cycle', fields: [] },
//         { title: 'ECM', key: 'ecm', fields: [] }
//     ]
// };
const generateKey = (data: string) => {
    return `${data}_${new Date().getTime()}`;
}

const FilterComponent: React.FC = props => {
    const dispatch = useDispatch<DataStoreDispatch>();

    const filterData: Datafields[] = useSelector(
        (state: Datafields[]) => state
    )


    let [tmpfilterData, setTmpFilterData] = useState<Datafields[]>();

    const resetFilter = () => {

    }

    const filterDataFunc = (event: React.ChangeEvent<HTMLInputElement>, keyData: string, valueData: string) => {

    }

    React.useEffect(() => {
        dispatch(getFilters("1"))
    }, [dispatch]);
    React.useEffect(() => {
        setTmpFilterData(filterData)
    }, [filterData]);


    const searchFilter = (e: React.ChangeEvent<HTMLInputElement>, key: string): void => {
        let filterDatas = tmpfilterData;
        console.log(e.target.value, key)
        if (e.target.value === '') {
            resetFilter()
        } else {
            console.log(filterDatas)
        }
    }

    return (
        <>
            <div>
                {
                    (tmpfilterData == null) ? <p>Loading</p> :
                        Object.values(tmpfilterData).map((data, index) => {
                            return <Card sx={{ width: 'auto', marginBottom: '12px' }} key={generateKey(data.key)} >
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {data.title}
                                    </Typography>
                                    <Typography component="div">
                                        <TextField id="standard-basic" label="Search Text" variant="standard" onChange={(e: any) => searchFilter(e, data.key)} />
                                    </Typography>
                                    <FormGroup>
                                        {
                                            Object.values(data.fields).map((fieldData: any, index) => {
                                                return <FormControlLabel control={<Checkbox onClick={(e: any) =>
                                                    filterDataFunc(e, data.key, fieldData.keyText)} checked={fieldData.checked} />}
                                                    label={fieldData.title} key={generateKey(fieldData.keyText)}
                                                />
                                            })
                                        }
                                    </FormGroup>
                                </CardContent>
                            </Card>
                        })
                }


            </div>



        </>
    );
}

export default FilterComponent;