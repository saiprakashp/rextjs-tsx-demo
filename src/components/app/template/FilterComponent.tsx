
import React, { useState, useContext, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Card, InputAdornment } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Datafields, MyPartsFilterState } from '../../interfaces/DataProps';
import {  FilterContext, UpdatePartsFilter } from '../../../App';
import SearchIcon from '@mui/icons-material/Search';


const generateKey = (data: string) => {
    return `${data}_${new Date().getTime()}`;
}

const FilterComponent: React.FC = props => {
    const [filterArr, setFilterArr] = useContext(UpdatePartsFilter) as any;
    const filterData = useContext(FilterContext) as MyPartsFilterState;


    const [tmpfilterData, setTmpFilterData] = useState<MyPartsFilterState>();

    const resetFilter = () => {

    }

    const filterDataFunc = (event: React.ChangeEvent<HTMLInputElement>, keyData: string, valueData: string) => {
        if (tmpfilterData != null && tmpfilterData.data.get(keyData) !== undefined) {
            const data: Datafields | any = tmpfilterData.data.get(keyData);
            for (let i = 0; i < data.fields.length; i++) {
                if (data.fields[i].keyText == valueData) {
                    data.fields[i].checked = event.target.checked;
                    updatFilterStateData(keyData + "~" + valueData, event.target.checked)
                    break;
                }
            }
        }
        if (tmpfilterData != null)
            setTmpFilterData({ ...tmpfilterData });
    }

    const updatFilterStateData = (key: string, act: boolean) => {
        if (filterArr != null) {

            let filterArrTmp = filterArr;
            if (act) {
                filterArrTmp.push(key);
            } else {
                filterArrTmp = filterArrTmp.filter(function (item: any) {
                    return item !== key
                })
            }
            setFilterArr([...filterArrTmp])
        }
    }
    const searchFilter = (e: React.ChangeEvent<HTMLInputElement>, key: string): void => {
        let filterDatas = tmpfilterData;
        console.log(e.target.value, key)
        if (e.target.value === '') {
            resetFilter()
        } else {
            console.log(filterDatas)
        }
    }



    useEffect(() => {
        if (filterData != null) {
            setTmpFilterData(filterData);
        }
    }, [tmpfilterData]);



    return (
        <>

            <div>
                {
                    (tmpfilterData != null) ?
                        [...tmpfilterData.data.keys()].map((d, index) => {
                            if (tmpfilterData != null && tmpfilterData.data.get(d) !== undefined) {
                                const data: Datafields | any = tmpfilterData.data.get(d);
                                return <Card sx={{ width: 'auto', marginBottom: '12px' }} key={generateKey(data.key)} >
                                    <CardContent>
                                        <Typography variant="h6" component="div">
                                            {data.title}
                                        </Typography>
                                        <Typography component="div">
                                            <TextField
                                                label="Search Text"
                                                variant="standard"
                                                onChange={(e: any) => searchFilter(e, data.key)}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <SearchIcon />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        </Typography>
                                        <FormGroup>
                                            {
                                                Object.values(data.fields).map((fieldData: any, index) => {
                                                    return <FormControlLabel control={<Checkbox onClick={(e: any) =>
                                                        filterDataFunc(e, data.key, fieldData.keyText)} checked={fieldData.checked} />}
                                                        label={fieldData.title + " (" + fieldData.chipText + ")"} key={generateKey(fieldData.keyText)}
                                                    />
                                                })
                                            }
                                        </FormGroup>
                                    </CardContent>
                                </Card>
                            }
                        })
                        : <p> Loading</p>
                }
            </div>



        </>
    );
}

export default FilterComponent;