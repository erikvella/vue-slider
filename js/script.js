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
    runAutoSlide : false
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
setInterval(() => {
  this.nextPrev(true);
  if(this.runAutoSlide) this.nextPrev(true);
},1000)
},
}).mount('#app');

