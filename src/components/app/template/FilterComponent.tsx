
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
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"
import TextField from '@mui/material/TextField';


interface Field {
    title: string;
    inputType: string;
    labelText: string;
    chipText: string;
    keyText: string;
    optionValues: string[];
    checked: boolean;
}


interface Datafields {
    title: string;
    key: string;
    fields: Field[];
}

interface Dataprops {
    data: Datafields[];
}




const dataProps: Dataprops = {

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
const generateKey = (data: string) => {
    console.log(`${data}_${new Date().getTime()}`)
    return `${data}_${new Date().getTime()}`;
}

export default function FilterComponent() {

    const [filterData, setFilterData] = useState(dataProps)

    const [tmpfilterData, setTmpFilterData] = useState(dataProps)

    const resetFilter = () => {
        setTmpFilterData(filterData)
    }
    const searchFilter = (e: React.ChangeEvent<HTMLInputElement>, key: string): void => {
        let filterDatas = tmpfilterData.data;
        console.log(e.target.value, key)
        if (e.target.value === '') {
            resetFilter()
        } else {
            console.log(filterDatas)
        }
    }


    useEffect(
        () => {
            console.log('redux state ', '')
        });


    const filterDataFunc = (event: React.ChangeEvent<HTMLInputElement>, keyData: string, valueData: string) => {
       
        ;
        for (let i = 0; i < tmpfilterData.data.length; i++) {
            if (tmpfilterData.data[i].key == keyData) {
                tmpfilterData.data[i].fields.map(e => {
                    if (e.keyText == valueData) {
                        e.checked=event.target.checked
                        console.log('Inside Loop',e,event.target.checked,'key: ', keyData, ' value: ', valueData, ' event checked ', tmpfilterData);
                    }
                }
                );
            }
        }
        console.log(tmpfilterData)
        setTmpFilterData({... tmpfilterData})
    }



    return (
        <>
            <div>
                {
                    tmpfilterData.data.map((data, index) => {
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
                                        data.fields.map((fieldData, index) => {
                                            return <FormControlLabel control={<Checkbox onClick={(e: any) => filterDataFunc(e, data.key, fieldData.keyText)} checked={fieldData.checked} />}
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
};

