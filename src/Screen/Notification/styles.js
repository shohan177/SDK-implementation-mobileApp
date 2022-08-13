import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },

  row: {
    marginVertical: 2,
    backgroundColor: '#343434',
    borderRadius:10,
    marginVertical:4
  },
  content: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 50,
  },
  ContentItems: {
    flexDirection: 'row',
  },
  ContentItemBar: {
    // borderWidth:3,
    borderLeftWidth: 3,
    borderLeftColor: '#ECB033',
    marginLeft: 7,
    height: 40,
    marginTop: 5,
    borderRadius:2,
   
  },
  ContentItems2: {
    marginLeft: 5,
    justifyContent: 'center',
  },
  contentText: {
    fontSize: 18,
    color: 'white',
  },
  contentText2: {
    fontSize: 12,
    color: 'gray',
    width: 250,
  },
  starCardImg:{
    height:40,
    width:40,
    // borderRadius:100,
    // borderWidth:2,
    // borderColor:'gold',
    

  },
  imgBorder:{
    borderRadius:100,
    borderWidth:2,
    borderColor:'#ECB033',
    padding:4,
    marginLeft:7
  }

});

export default styles;
