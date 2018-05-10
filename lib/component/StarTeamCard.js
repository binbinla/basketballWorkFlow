"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const colors_1 = require("../utils/colors");
const team_map_1 = __importDefault(require("../utils/team-map"));
class StarTeamCard extends React.Component {
    constructor(props) {
        super(props);
        this.changeState = () => {
            this.setState({ isSelected: !this.state.isSelected }, () => {
                if (this.state.isSelected) {
                    this.props.callBackSelected(this.state.isSelected, this.props.id);
                }
                else {
                    this.props.callBackSelected(this.state.isSelected, this.props.id);
                }
            });
        };
        this.renderSelectedIcon = () => {
            if (this.state.isSelected) {
                return (React.createElement(react_native_1.Text, { style: styles.select }, "\u221A"));
            }
            else {
                return null;
            }
        };
        this.state = {
            isSelected: this.props.hasSelected
        };
    }
    render() {
        const teamName = team_map_1.default[this.props.teamAttr].team;
        const logo = team_map_1.default[this.props.teamAttr].logo;
        return (React.createElement(react_native_1.TouchableOpacity, { onPress: this.changeState },
            React.createElement(react_native_1.View, { style: [styles.container] },
                React.createElement(react_native_1.View, { style: styles.leftContainer },
                    React.createElement(react_native_1.Image, { style: styles.image, source: logo }),
                    React.createElement(react_native_1.Text, { style: styles.name }, teamName)),
                this.renderSelectedIcon())));
    }
}
exports.default = StarTeamCard;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors_1.commonColors.white,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomColor: colors_1.commonColors.borderColor,
        borderBottomWidth: 0.5
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    name: {
        fontSize: 14,
        color: colors_1.commonColors.black
    },
    select: {
        fontSize: 18,
        color: colors_1.commonColors.black,
        marginRight: 5
    }
});
//# sourceMappingURL=StarTeamCard.js.map