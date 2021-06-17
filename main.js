import Vue from 'vue';
import NumberBaseball from './NumberBaseball'; //resolve: {extensions: ['.js', '.vue'],}, 가 있어서 뒤에 확장자 .vue를 지워도 된다!!!
//즉. 뷰를 쓸 수 있도록 import 해둔것이다.. 기억해 두기!!!
new Vue(NumberBaseball).$mount('#root');