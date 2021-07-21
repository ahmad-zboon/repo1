alert("Hello have a great time here");

var favouriteInstrument=prompt('What do you like more Guitar or Ney?')

if(favouriteInstrument=='Guitar')
{document.write('<iframe width="420" height="345" src="https://www.youtube.com/embed/_ZaRQmLuChc?autoplay"></iframe>')}

else if(favouriteInstrument=='Ney')
{document.write('<iframe width="420" height="345" src="https://www.youtube.com/embed/JFjoVCIdEgw autoplay"></iframe>')}

while (favouriteInstrument !== 'Guitar' && favouriteInstrument !== 'Ney') {
  favouriteInstrument = prompt('please only answer with Guitar or Ney');
}

var likes = prompt('how many Likes do you give our website?');

if (likes > 5) {
  Likes = 5;
}

for (var i = 0; i < likes; i++) {

  document.write('<img src="https://i.pinimg.com/564x/63/3b/2e/633b2ea2a96ceaa39669a86dac0f3c01.jpg" width="50px">');
}
© 2021 GitHub, Inc.
