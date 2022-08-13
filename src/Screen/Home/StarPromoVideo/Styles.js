import {
    StyleSheet,
} from 'react-native';
const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'pink',
        backgroundColor: '#343434',
        paddingVertical: 10,
        borderRadius: 10,
        marginHorizontal: 0,
        marginBottom: 9,
        // borderColor: '#2c2c2cb6',
        // borderWidth: 3
    },
    containerWidthScreen: {
        // backgroundColor: 'pink',
        backgroundColor: '#343434',
        paddingVertical: 10,
        borderRadius: 10,
        // borderColor: '#2c2c2cb6',
        // borderWidth: 3
    },
    item: {
        width: 120,
        height: 210,
        position: 'relative',
        backgroundColor: '#FFAD00',
        overflow: 'hidden',
        borderRadius: 6,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        // borderRadius: 8,
        width: "100%",
        height: 50

    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',

    },
    profileImage: {
        height: 60,
        width: 60,
        position: 'absolute',
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'

    }
});

export default styles;