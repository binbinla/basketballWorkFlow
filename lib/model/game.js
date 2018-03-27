"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameModel {
    constructor(item) {
        this.id = item.id;
        this.city = item.city;
        this.team = item.team,
            this.color = item.color,
            this.conf = item.conf,
            this.logo = item.logo;
    }
}
exports.GameModel = GameModel;
//# sourceMappingURL=game.js.map