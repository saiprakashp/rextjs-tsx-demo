import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';

const ariaLabel = { 'aria-label': 'description' };

interface SearchProps {
    handleUserSearch(value: number): void;
}


function SearchComponentTemplate({ handleUserSearch }: SearchProps) {

    const [hideAdvFilter, setHideAdvFilter] = useState(false)
    const handleUserSearchData = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleUserSearch(parseInt(event.target.value))
    }
    return <>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Input defaultValue="2019" inputProps={ariaLabel} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUserSearchData(e)} />
                    <Button variant="contained" sx={{ background: 'yellowgreen' }}>Contained</Button>
                    <a onClick={() => { setHideAdvFilter(!hideAdvFilter) }} style={{ color: 'black' }}>Hide Advance Filter</a>
                </Box>
                {!hideAdvFilter ?
                    <>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <Input defaultValue="User Name" inputProps={ariaLabel} />
                            <Input defaultValue="User Name" inputProps={ariaLabel} />
                            <Input defaultValue="User Name" inputProps={ariaLabel} />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <Input defaultValue="User Name" inputProps={ariaLabel} />
                            <Input defaultValue="User Name" inputProps={ariaLabel} />
                            <Input defaultValue="User Name" inputProps={ariaLabel} />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <Input defaultValue="User Name" inputProps={ariaLabel} />
                            <Input defaultValue="User Name" inputProps={ariaLabel} />
                            <Input defaultValue="User Name" inputProps={ariaLabel} />
                        </Box>
                    </> : <></>}

            </CardContent>
        </Card></>;
}

export default SearchComponentTemplate;