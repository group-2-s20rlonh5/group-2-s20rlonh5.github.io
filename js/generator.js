
let currentActivityIndex;

async function getRandomActivity () {

  const activities = [
    {
      text:"write a paragraph about a good thing that happened this week",
      img:"/images/undraw_studying_s3l7.svg"
    },
    {
      text:"go on a (socially distant) walk",
      img:"/images/undraw_social_distancing_2g0u.svg"
    },
    {
      text:"do some meditation with lo-fi beats",
      img:"/images/undraw_meditating_0nae.svg"
    },
    {
      text:"learn to code and start a career in tech!",
      img:"/images/undraw_software_engineer_lvl5.svg"
    },
    {
      text:"make a bucket list for when lockdown is lifted",
      img:"/images/undraw_to_do_list_a49b.svg"
    },
    {
      text:"start a 30-day fitness challenge",
      img:"/images/undraw_Booked_j7rj.svg" 
    },
    {
      text:"start a blog and build your online presence",
      img:"/images/undraw_relaxing_at_home_9tyc.svg" 
    }
  ];

  let count = 0;
  let activity;
  document.getElementById("randomText").innerHTML = ""

  // flash randomly through activities
  while (count < activities.length) {
    let randomIndex = Math.floor(Math.random()* activities.length);

    if (randomIndex === currentActivityIndex)
      continue; // go to next iteration, ignore this duplicate

    activity = activities[randomIndex]
    currentActivityIndex = randomIndex;

    document.getElementById("randomImage").src = activity.img;
    
    // add delay before changing next image in while loop 
    count++;
    if (count < 4)
      await new Promise(r => setTimeout(r, 200)); // wait 200ms
  }

  document.getElementById("randomText").innerHTML = "Let's" + activity.text;

  document.getElementById('my-button').innerHTML = 'Play again'

}
