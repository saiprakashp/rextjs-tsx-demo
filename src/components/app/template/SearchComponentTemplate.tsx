import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
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
import { Container } from '@mui/material';
import Input from '@mui/material/Input';
const ariaLabel = { 'aria-label': 'description' };
function SearchComponentTemplate() {
    return <Box
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
        <Input defaultValue="User Name" inputProps={ariaLabel} />
        <Input defaultValue="User Name" inputProps={ariaLabel} />
        <Button variant="contained">Contained</Button>
    </Box>;
}

export default SearchComponentTemplate;