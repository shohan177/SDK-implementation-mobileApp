import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  topBannerImg: {

    height: 150,
    width: '100%',
    backgroundColor: '#343434',
    borderRadius: 10,
    padding: 10,
    position: 'relative',

  },
  topBannerTxt: {
    color: 'white',
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    top: '49%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  roundImage: {
    flexDirection: 'row',
    backgroundColor: '#272727',
    paddingVertical: 5,
    borderRadius: 5,
    marginVertical: 10,
  },
  roundBtn: {
    flex: 1,
  },
  roundOne: {
    flex: 1,
    margin: 5,
    // width: 200,
    height: 120,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textColorCenter: {
    textAlign: 'center',
    color: '#ddd',
    fontWeight: 'bold',
  },

  //round updated design started
  roundView: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-between',
  },
  roundImg: { height: '100%', width: '100%' },
  roundTxt: {
    color: 'white',
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    top: '24%',
    fontSize: 50,
    fontWeight: 'bold',
  },
  roundTouchable: {
    height: 180,
    width: '49%',
    backgroundColor: '#282828',
    borderRadius: 10,
    padding: 10,
  },
});

export default styles;
