const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "Fazia 94 graus Fahrenheit no Overworld, então :insertx: resolveu investigar um barulho estranho. Ao chegar em :inserty:, ficou completamente paralisado — e então :insertz:. Steve viu tudo acontecer, mas não se impressionou — afinal, :insertx: pesava 300 libras vestindo uma armadura de diamante, e o dia estava escaldante e pixelado.";
const insertX = ["um creeper de cartola", "Herobrine", "um urso polar completamente perdido"];
const insertY = ["a entrada de uma caverna escura", "um campo de abóboras dançantes", "a floresta de bambu dos pandas"];
const insertZ = ["foi sugado por um portal misterioso", "desapareceu em um piscar de olhos", "se transformou em pó brilhante e sumiu"];


randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Steve', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} graus centígrados`;
    newStory = newStory.replaceAll('94 graus Fahrenheit', temperature);
    newStory = newStory.replaceAll('300 libras', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}