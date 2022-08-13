import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import imagePath from '../../../Constants/imagePath';
import styles from './Styles';
const FangroupCard = () => {
  return (
    <View>
      <View style={styles.CardRow}>
        <View style={styles.MainCard}>
          <TouchableOpacity style={styles.cardImg}>
            <Image style={styles.starCardImg} source={imagePath.star5} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.cardText}>Ariful Islam</Text>
            <Text style={styles.time}>5.31pm 2nd july</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.CardContent}>
          <Text style={styles.cardContentText}>
            The king of bollywood. Always evergreen!
          </Text>

          <View style={{position: 'relative'}}>
            <Image
              style={styles.cardCoverImg}
              source={imagePath.fangroupCardCover}
            />
          </View>

          <View style={styles.cardInfo}>
            <View>
              <Text style={styles.infoText}>
                <FontAwesome5 name={'heart'} />
                240
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.infoText}>16 Comments</Text>
              </View>
              <View>
                <Text style={styles.infoText}>106 Share</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.7,
              margin: 10,
            }}
          />
          <View style={styles.cardButtons}>
            <TouchableOpacity style={styles.likeBtn}>
              <Text style={styles.btnText}>
                <Icon name="heart" color={'red'} />
                Like
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likeBtn}>
              <Text style={styles.btnText}>
                <FontAwesome5 name={'comment'} />
                Comment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likeBtn}>
              <Text style={styles.btnText}>
                {' '}
                <FontAwesome5 name={'share'} />
                Share
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FangroupCard;
