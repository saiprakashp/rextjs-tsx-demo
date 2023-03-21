
import React, { useState, useContext, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Card, InputAdornment } from '@mui/material';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Datafields, MyPartsFilterState } from '../../interfaces/DataProps';

import SearchIcon from '@mui/icons-material/Search';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FilterContext, UpdatePartsFilter } from './GridTemplate';

const generateKey = (data: string) => {
    return `${data}_${new Date().getTime()}`;
}

const FilterComponent: React.FC = props => {
    const [filterArr, setFilterArr] = useContext(UpdatePartsFilter) as any;
    const filterData = useContext(FilterContext) as MyPartsFilterState;


    const [filterCardData, setFilterCardData] = useState<MyPartsFilterState | undefined>();

    const resetFilter = () => {

    }

    const filterDataFunc = (event: React.ChangeEvent<HTMLInputElement>, keyData: string, valueData: string) => {
        if (filterCardData != null && filterCardData.data.get(keyData) !== undefined) {
            const data: Datafields | any = filterCardData.data.get(keyData);
            for (let i = 0; i < data.fields.length; i++) {
                if (data.fields[i].keyText == valueData) {
                    data.fields[i].checked = event.target.checked;
                    updatFilterStateData(keyData + "~" + valueData, event.target.checked)
                    break;
                }
            }
        }
        if (filterCardData != null)
            setFilterCardData({ ...filterCardData });
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
        let filterDatas = filterCardData;
        console.log(e.target.value, key)
        if (e.target.value === '') {
            resetFilter()
        } else {
            console.log(filterDatas)
        }
    }



    useEffect(() => {
        if (filterData != null) {
            setFilterCardData(filterData);
        }
    }, [filterCardData]);



    return (
        <>

            {
                (filterCardData != null) ?
                    [...filterCardData.data.keys()].map((d, index) => {
                        if (filterCardData != null && filterCardData.data.get(d) !== undefined) {
                            const data: Datafields | any = filterCardData.data.get(d);
                            return <Accordion sx={{ maxWidth: '20rem', bordershadow: '0', backgroundcolor: 'white', borderRadiou: '0' }}
                                key={generateKey(data.key)} >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={'panelt' + index}
                                    id={'panelt' + index}
                                >
                                    <Typography>{data.title}</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography  >
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
                                    <Typography>
                                        <FormGroup>
                                            {
                                                Object.values(data.fields).map((fieldData: any, index) => {
                                                    return (
                                                        <FormControlLabel control={<Checkbox onClick={(e: any) =>
                                                            filterDataFunc(e, data.key, fieldData.keyText)} checked={fieldData.checked} />}
                                                            labelPlacement="end"
                                                            label={fieldData.title + " (" + fieldData.chipText + ")"}
                                                            key={generateKey(fieldData.keyText)}
                                                        />)
                                                })
                                            }
                                        </FormGroup>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        }
                    })
                    : <a> Loading</a>
            }



        </>
    );
}

export default FilterComponent;