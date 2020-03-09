import { uglify } from "rollup-plugin-uglify";
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import resolve from '@rollup/plugin-node-resolve';

export default {
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    uglify(),
    filesize(),
  ],
};
