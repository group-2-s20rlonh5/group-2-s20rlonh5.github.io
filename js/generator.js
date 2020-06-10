
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

  const activity = activities[Math.floor(Math.random()* activities.length)]

  document.getElementById("random").innerHTML = '<img src="'+ activity.img + '">' + '<h3> Let\'s ' + activity.text + '</h3>'; 
}
