"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const src_1 = require("../src");
exports.default = {
    title: 'Button',
    component: src_1.Button,
    argTypes: {
        children: {
            type: 'string'
        },
        icon: {
            type: ''
        }
    }
};
const Default = (args) => react_1.default.createElement(src_1.Button, Object.assign({}, args));
exports.Default = Default;
exports.Default.args = {
    children: 'Botão'
};
