"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const colors_1 = require("../../utils/colors");
class NewsWebView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_native_1.View, { style: [styles.container] },
            React.createElement(react_native_1.WebView, { source: { uri: this.props.url }, style: { width: '100%', height: '100%' }, renderLoading: () => {
                    return React.createElement(react_native_1.View, { style: styles.loadingContainer },
                        React.createElement(react_native_1.Text, { style: styles.loadingText }, "\u6570\u636E\u52A0\u8F7D\u4E2D..."));
                } })));
    }
}
exports.default = NewsWebView;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors_1.commonColors.white,
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        fontSize: 15,
        color: colors_1.commonColors.black
    }
});
//# sourceMappingURL=NewsWebView2.js.map