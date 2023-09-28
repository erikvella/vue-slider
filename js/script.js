const {createApp} = Vue ;

createApp({
data(){
  return{
    posters:[
       'img/01.webp',
       'img/02.webp',
       'img/03.webp',
       'img/04.webp',
       'img/05.webp',
    ],
    counter : 0,
  }
},

methods:{
   nextPrev(isNext){
    if(isNext){
      console.log('Avanti');
      this.counter++;
    }else{
      console.log('Indietro');
      this.counter--;
    }

    // versione compatta(ternario)
    // isNext ? this.counter++ : this.counter--;
// controllo di validità del counter
if(this.counter === this.posters.length){
  this.counter = 0 ;
}
if(this.counter < 0){
  this.counter = this.posters.length -1;
}
   }
},

mounted(){

},
}).mount('#app');

