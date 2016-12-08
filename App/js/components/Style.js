import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";

const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    iconPadding: {
        padding: 10,
        paddingTop: 25
    },
    imageIcon: {
        "width": 14,
        "height": 14
    },
    iconHome: {
        "width": 20,
        "marginLeft": -4
    },
    toolbarTitleView: {
        "position": "absolute",
        "top": 27,
        "left": 0,
        "width": width - 160,
        "marginLeft": 80,
        "marginRight": 80,
        "alignItems": "center"
    },
    toolbarTitle: {
        "color": "#494949",
        "fontSize": 16,
        "alignSelf": "center"
    },
    loginBtn : {
        marginTop: 50
    }
});
