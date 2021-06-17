let VueLoaderPlugin = require('vue-loader/lib/plugin');
let path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue'],
    },
    entry: { //가장 대표가 되는 파일을 담는 공간이다.
        app: path.join(__dirname, 'main.js'), //app은 하나로 합쳐줄 파일 이름이다. main.js외 수백개의 js가 app.js 하나로 합쳐지는 것이다.!
    },
    module: {
        rules: [{
            test: /\.vue$/, //파일명이 .vue로 끝나는 파일을 뜻한다. .vue로 끝나는 것은 vue loader가 담당한다.!!!
            use: 'vue-loader', //vue loader를 사용하겠다.! 이건 남이 만든 코더이므로 다운을 받자
            // npm i vue-loader -D
        }],
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    output: { //최종 결과물이 나오는 것이다.
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    },
};