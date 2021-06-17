<template>
    <div>
        
    <form @submit.prevent="onSubmitForm"> <!-- v-on: 을 @로 대체할 수 있다. -->
      <input  minlength="4" maxlength="4" v-model="value" />
      <button type="submit">입력</button>
    </form>
    <div>시도: {{tries.length}}</div>
    <ul>
        <li v-for="t in tries" :key="t.try">
        <div>{{t.try}}</div>
        <div>{{t.result}}</div>
      </li>
    </ul>
  
    </div>
</template>

<script>

let getNumbers = () => {   // 랜덤하게 숫자 4개를 뽑느 코드이다
    let candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let array = [];
    for (let i = 0; i < 4; i += 1) {
      const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
      array.push(chosen);
    }
    return array;
  };


    export default {
         data() { //화면에 보여지는 데이터이다. 화면에 보이지 않으면 data에 선언하지 않아도 된다.
            return{
                answer:getNumbers(),
                tries: [],
                value: '',
                result: '',
            }
         },
         methods: {
             onSubmitForm(e) {
                //  e.preventDefault(); 위에 submit 옆에 선언해 두었다.
                if (this.value === this.answer.join('')) { // 정답 맞췄으면
          this.tries.push({
            try: this.value,
            result: '홈런',
          });
          this.result = '홈런';
          alert('게임을 다시 실행합니다.');
          this.value = '';
          this.answer = getNumbers();
          this.tries = [];
          
        } else { // 정답 틀렸을 때
          if (this.tries.length >= 9) { // 10번째 시도
            this.result = `10번 넘게 틀려서 실패! 답은 ${this.answer.join(',')}였습니다!`;
            alert(this.result);
            //alert('게임을 다시 시작합니다.');
            this.value = '';
            this.answer = getNumbers();
            this.tries = [];
            
          }
          let strike = 0;
          let ball = 0;
          const answerArray = this.value.split('').map(v => parseInt(v));
          for (let i = 0; i < 4; i += 1) {
            if (answerArray[i] === this.answer[i]) { // 숫자 자릿수 모두 정답
              strike++;
            } else if (this.answer.includes(answerArray[i])) { // 숫자만 정답
              ball++;
            }
          }
          this.tries.push({
            try: this.value,
            result: `${strike} 스트라이크, ${ball} 볼입니다.`,
          });
          this.value = '';
          this.$refs.answer.focus();
        }
      }
    }
  };
</script>

<style>

</style>