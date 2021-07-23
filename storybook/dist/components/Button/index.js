"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
const Button = ({ children, backgroundColor = '#7159c1', color = '#fff' }) => {
    return react_1.default.createElement(styles_1.Container, { backgroundColor: backgroundColor, color: color }, children);
};
exports.Button = Button;
