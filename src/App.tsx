import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import BasicCardTemplate from './components/app/template/BasicCardTemplate';
import NavBarTemplate from './components/app/template/NavBarTemplate';
import GridTemplate from './components/app/template/GridTemplate';
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
import SearchComponentTemplate from './components/app/template/SearchComponentTemplate';
export default function App() {
  const dispatch = useDispatch()

  return (
    <div className="App">
      <NavBarTemplate />
      <SearchComponentTemplate />
      <GridTemplate leftBoxWidth={3} rightBoxWidth={9} />
    </div>

  );
}
