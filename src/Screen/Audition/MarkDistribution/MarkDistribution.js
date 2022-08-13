import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import HeaderComp from '../../../Components/HeaderComp';
import Heading from '../../../Components/Reuseable/Heading';
import UnderlineImage from '../../../Components/Reuseable/UnderlineImage';
import imagePath from '../../../Constants/imagePath';
import RoundTopBanner from '../../Audition/Round1/RoundTopBanner';
const MarkDistribution = () => {
  return (
    <View style={styles.container}>
      <HeaderComp />

      <RoundTopBanner title='AUDITION FIRST ROUND ENDING TIME' />
      <View style={{ backgroundColor: '#343434', borderRadius: 10 }}>
        <Heading heading="Audition Mark Distribution" />
        <UnderlineImage />
        <View style>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.userVote}>
              <Image resizeMode="stretch" source={imagePath.UserVote} />
            </View>
            <View style={styles.userVoteView}>
              <Text style={{ color: '#fff', paddingLeft: 5 }}>User Vote</Text>
            </View>
            <View style={styles.userVoteMarkView}>
              <Text style={styles.userVoteMarkTxt}>30</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.userVote}>
              <Image resizeMode="stretch" source={imagePath.JuryMark} />
            </View>
            <View style={styles.userVoteView}>
              <Text style={{ color: '#fff', paddingLeft: 5 }}>Jury Mark</Text>
            </View>
            <View style={styles.userVoteMarkView}>
              <Text style={styles.userVoteMarkTxt}>30</Text>
            </View>
          </View>

        </View>
      </View>
    </View>
  )
}

export default MarkDistribution

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  userVote: {
    flex: 1,
    margin: 6,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  userVoteView: {
    flex: 3,
    margin: 6,
    backgroundColor: '#000000',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userVoteMarkView: {
    flex: 1,
    margin: 6,
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
  },
  userVoteMarkTxt: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
})