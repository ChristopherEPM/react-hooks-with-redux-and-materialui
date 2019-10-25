import { makeStyles } from '@material-ui/styles';
// makestyles help us when we create a style object, 
// to let us use it inside the hook like a class

const centeredStyleObj = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'

};

export default makeStyles({
  container:{
    height: '100vh',
    flexDirection: 'column',
    ...centeredStyleObj
  },
  cardContainer:{
    flexDirection: 'column',
    width: 400,
    height: 200,
    padding: '2rem',
    ...centeredStyleObj
  },
  title: {
    fontSize:'4rem'
  },
  titleGridContainer: {
    ...centeredStyleObj
  },
  textFieldSearch: {
    width: '90%'
  },
  searchButton: {
    marginLeft: '.5rem'
  },
  movieIcon: {
    fontSize: '4rem'
  }

});
