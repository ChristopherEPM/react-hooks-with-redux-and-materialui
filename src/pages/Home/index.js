import React, {useState} from  'react';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';
export default () => {
  const [searchText, setSearchText] = useState('');
  const handleSearchTextChange = event => {
    setSearchText(event.target.value)
  };

  const handleCleanTextClick = event => {
    console.log(1)
  };

  const handleSearchTextClick = event => {
    console.log(2)
  };

  
  return (
    <Container>
      <Card>
        <Grid>
          <Typography> Bienvenido </Typography>
        </Grid>
        <Grid>
          <label>icono</label> 
        </Grid>
        <TextField
          value={searchText}
          placeholder="Buscar..."
          onChange={handleSearchTextChange}/>
        <Grid>
        <Button variant="contained" onClick={handleCleanTextClick}> Limpiar </Button>
        <Button variante="contained" color="primary" size="large" 
          onClick={handleSearchTextClick}> 
          Buscar
        </Button>
        </Grid>
      </Card>
    </Container>
    )

}