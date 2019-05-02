import { PixelRatio, Platform, Dimensions} from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import RF from "react-native-responsive-fontsize"

var { width, height} = Dimensions.get('window');

const fontScale = PixelRatio.getFontScale();
export const fontSize = size => {
    if(Platform.OS === 'ios'){
        return size*fontScale;
    }else{
        return RF(size/6.5)
    }
}

const widthPercentageToDP = widthPercent => {
    const screenWidth = Dimensions.get('window').width;
    // Convert string input to decimal number
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};

const heightPercentageToDP = heightPercent => {
    const screenHeight = Dimensions.get('window').height;
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};


const { height, width } = Dimensions.get('window');
const IPHONE_7_RESOLUTION = Math.sqrt(750 * 750 + 1294 * 1294);
const CURRENT_RESOLUTION = Math.sqrt(height * height + width * width);
const RESOLUTIONS_PROPORTION = CURRENT_RESOLUTION / IPHONE_7_RESOLUTION;
export const DIMENSIONS = { height, width };
export const calcSize = size => RESOLUTIONS_PROPORTION * size;

export function size(num){
    if(Platform.OS === 'ios'){
        // return PixelRatio.getPixelSizeForLayoutSize(num/5)
        return Math.floor(num/2);
        // return num;
    }else{
        // return num * Math.pow(PixelRatio.get(), 3)/10;
        return PixelRatio.roundToNearestPixel( calcSize(num) );
    }

}

export default styles = {
    color: {
        main: 'black',
        text: {
        },
        line: {
            blur: '#d3dce9',
        },
        border: {
            main: '#B4C9D4',
        },
        helmet: '#202632',
    }
}