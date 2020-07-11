import { StyleSheet } from 'react-native'
import { Colors } from '@Theme'

const HEADER_MAX_HEIGHT = 270;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = StyleSheet.create({
    fill: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.PRIMARY,
        overflow: 'hidden',
        height: HEADER_MAX_HEIGHT,
        paddingTop: 50,
        zIndex: 10
    },
    location: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 16,
        flexDirection: 'row',
    },
    circleButton: {
        backgroundColor: Colors.WHITE,
        borderRadius: 100 / 2,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.GREY_LIGHTEST,
        borderWidth: 0.1,
        shadowColor: Colors.GREY_LIGHTEST,
        shadowOpacity: 0.1,
        shadowRadius: 1,
    }
});

export { styles, HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT, HEADER_SCROLL_DISTANCE };