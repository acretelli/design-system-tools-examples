"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Separator = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Separator = styled_components_1.default.hr `
  height: 2px;
  width: 100%;
  background-color: #666;
  margin: 20px 10px;
`;
