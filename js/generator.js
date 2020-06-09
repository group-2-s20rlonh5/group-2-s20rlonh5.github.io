
function getRandomActivity () {
  
  console.log('hello world');

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
      text:"do some meditation",
      img:"/images/undraw_meditating_0nae.svg"
    }
  ];

  const activity = activities[Math.floor(Math.random()* activities.length)]

  document.getElementById("random").innerHTML = '<img src="'+ activity.img + '">' + '<h3> Let\'s ' + activity.text + '</h3>'; 
}
