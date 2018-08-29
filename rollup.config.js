import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import replace from 'rollup-plugin-replace'

export default {
  entry: 'src/layer.js',
  format: 'cjs',
  plugins: [vue(), replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.VUE_ENV': JSON.stringify('browser')
    }),
    resolve(), babel()
  ],
  dest: 'dist/vue-layer.js' // 输出文件
};