import "@testing-library/jest-dom";
import { TextEncoder } from "util";

// ReferenceError: TextEncoder is not defined
// @see https://qiita.com/shin-tech/items/80ff25a297de799c0d51
global.TextEncoder = TextEncoder;
