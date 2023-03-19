import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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

export default function GridTemplate(props: ComponentData) {

  const [showLeft, setShowLeft] = useState(true);
  var showhideLeftBox = function () {
    console.log('setShowLeft ', showLeft)
    setShowLeft(!showLeft);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div style={{ margin: '1%' }}>
        <a onClick={() => { showhideLeftBox() }} style={{ color: 'blue' }}> Show/ Hide Filters</a>
      </div>
      <Grid container spacing={1}>
        {showLeft ?
          <Grid item xs={props.leftBoxWidth} >
            <FilterComponent />
          </Grid> : <></>
        }
        <Grid item xs={(showLeft) ? props.rightBoxWidth : 12}>
          <Item>Right Data</Item>
        </Grid>
      </Grid>
    </Box>
  );
}