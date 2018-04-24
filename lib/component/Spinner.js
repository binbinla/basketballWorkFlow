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
const colors_1 = require("../utils/colors");
var ANIMATION;
(function (ANIMATION) {
    ANIMATION["NONE"] = "none";
    ANIMATION["SLIDE"] = "slide";
    ANIMATION["FADE"] = "fade";
})(ANIMATION = exports.ANIMATION || (exports.ANIMATION = {}));
var SIZES;
(function (SIZES) {
    SIZES["SMALL"] = "small";
    SIZES["NORMAL"] = "normal";
    SIZES["LARGE"] = "large";
})(SIZES = exports.SIZES || (exports.SIZES = {}));
// const ANIMATION = ['none', 'slide', 'fade'];
// const SIZES = ['small', 'normal', 'large'];
class GameCard extends React.Component {
    constructor(props) {
        super(props);
        /**
         *
         */
        this.close = () => {
            this.setState({ visible: false });
        };
        /**
         *
         */
        this._handleOnRequestClose = () => {
            if (this.props.cancelable) {
                this.close();
            }
        };
        /**
         *
         */
        this._mapSize = (size) => {
            if (size === SIZES.LARGE) {
                return 'large';
            }
            else if (size === SIZES.NORMAL) {
                return 'large';
            }
            else if (size === SIZES.SMALL) {
                return 'small';
            }
            else {
                return undefined;
            }
        };
        this.state = {
            visible: this.props.visible,
            textContent: this.props.textContent || ''
        };
    }
    componentWillReceiveProps(nextProps) {
        const { visible, textContent } = nextProps;
        this.setState({ visible, textContent });
    }
    render() {
        return this._renderSpinner();
    }
    _renderDefaultContent() {
        return (React.createElement(react_native_1.View, { style: styles.background },
            React.createElement(react_native_1.ActivityIndicator, { color: this.props.color || colors_1.commonColors.white, size: this._mapSize(this.props.size || SIZES.LARGE), style: { flex: 1 } }),
            React.createElement(react_native_1.View, { style: styles.textContainer },
                React.createElement(react_native_1.Text, { style: [styles.textContent, this.props.textStyle] }, this.state.textContent))));
    }
    /**
     *
     */
    _renderSpinner() {
        const { visible } = this.state;
        if (!visible)
            return null;
        const spinner = (React.createElement(react_native_1.View, { style: [
                styles.container,
                { backgroundColor: this.props.overlayColor }
            ], key: `spinner_${Date.now()}` }, this.props.children ? this.props.children : this._renderDefaultContent()));
        return (React.createElement(react_native_1.Modal, { animationType: this.props.animation, onRequestClose: () => this._handleOnRequestClose(), supportedOrientations: ['landscape', 'portrait'], transparent: true, visible: visible }, spinner));
    }
}
exports.default = GameCard;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    background: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    textContent: {
        top: 50,
        height: 50,
        fontSize: 20,
        fontWeight: 'bold'
    }
});
//# sourceMappingURL=Spinner.js.map