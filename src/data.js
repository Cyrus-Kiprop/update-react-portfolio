import image from "./assets/images/projects/bookstore-phone.png";

import img1 from "./assets/images/projects/ror-scaffold.png";
import img2 from "./assets/images/projects/ror-social.png";
const projects = [
  {
    name: "Well-paid-geek-bot",
    url:
      "https://github.com/Cyrus-Kiprop/update-react-portfolio/raw/master/src/assets/images/projects/slack-notbook.png",
    exUrl: [
      "https://github.com/Cyrus-Kiprop/update-react-portfolio/raw/master/src/assets/images/projects/slack-one.png",
      "https://github.com/Cyrus-Kiprop/update-react-portfolio/raw/master/src/assets/images/projects/slack_ruby_bot.jpeg",
      "https://github.com/Cyrus-Kiprop/update-react-portfolio/raw/master/src/assets/images/projects/slack-notbook.png",
    ],
    description:
      "Slack Bot for the tech Savvy. The bot is designed using ruby. The main aim of the app is to programmers through a slack bot service. The slack bot offers four unique features: memes, latest css design articles, programming articles and an updated list of jobs for job seekers, all at the comfort of your slack app. ",
    stack: ["Ruby", "Rspec", "Capybara"],
    live: "https://slack.com/create#email",
    github: "https://github.com/Cyrus-Kiprop/well-paid-geek-bot",
  },
  {
    name: "Gaurdian of the Galaxies",
    url:
      "https://github.com/Cyrus-Kiprop/update-react-portfolio/raw/master/src/assets/images/projects/star-wars.png",
    exUrl: [
      "https://github.com/Cyrus-Kiprop/update-react-portfolio/raw/master/src/assets/images/projects/star-wars.png",

      "https://github.com/Cyrus-Kiprop/update-react-portfolio/raw/master/src/assets/images/projects/game-play.png",

      "https://github.com/Cyrus-Kiprop/update-react-portfolio/raw/master/src/assets/images/projects/game-menu.png",
    ],
    description:
      "Guardian of the Galaxy is a shooter game inspired by the guardian of the Galaxy movie. The game is browser based, and designed on the Phaser 3 game library. The game uses a collection of amazing art designed by various game designers from OpenGameArt website( Please Refer to the acknowlegment section for more Informations). The main goal of this game is to score the highest possible score, while killing invading alien ships.",
    stack: ["Javascript", "Phaser-3", "Jest", "ES6"],
    live: "https://gallant-wescoff-7173eb.netlify.app/",
    github: "https://github.com/Cyrus-Kiprop/phaser-shooting-game",
  },

  {
    name: "Health App",
    url:
      "https://github.com/Cyrus-Kiprop/update-react-portfolio/raw/master/src/assets/images/projects/api-desktop.png",
    exUrl: [
      "https://github.com/Cyrus-Kiprop/update-react-portfolio/raw/master/src/assets/images/projects/api-doc-login.png",
      "https://github.com/Cyrus-Kiprop/update-react-portfolio/raw/master/src/assets/images/projects/api-desktop.png",
      "https://github.com/Cyrus-Kiprop/update-react-portfolio/raw/master/src/assets/images/projects/api-mobile-doc.png",
    ],
    description:
      "A progressive Health Tracking mobile web app. User can utilize the apps' exposed api utility to view and keep track of their fitness levels.",
    stack: [
      "Ruby on Rails",
      "Rspec",
      "Json-Serializers",
      "Shoulda-matchers",
      "Api-documentation",
    ],
    live:
      "https://web.postman.co/collections/8007314-882ee6da-afb0-49db-9eaa-4e9c94059972?version=latest&workspace=ab4298f5-d0f8-4bf1-8dc4-baa6db7fbe13",
    github: "https://github.com/Cyrus-Kiprop/rails-react-health-app",
  },
  // {
  //   name: "Private Events",
  //   url: image,
  //   exUrl: [img1, image, img2],
  //   description:
  //     "The project involves creation of a private events website(EventBrite like in functionality) in rails. The app implements authentication, rails scopes and association. Many to many relationship is the main key feature. **The project contain database models and schemas that model the user and the post object. visit The Odin Project 'Members Only' for the full project specifications.",
  //   stack: ["Ruby on Rails", "Rspec", "Devise", "HTML", "CSS"],
  //   live:
  //     "https://web.postman.co/collections/8007314-882ee6da-afb0-49db-9eaa-4e9c94059972?version=latest&workspace=ab4298f5-d0f8-4bf1-8dc4-baa6db7fbe13",
  //   github: "https://github.com/Cyrus-Kiprop/private-events",
  // },

  {
    name: "Facebook clone Tutorial",
    url:
      "https://github.com/Cyrus-Kiprop/update-react-portfolio/raw/master/src/assets/images/projects/reverse-ror.png",
    exUrl: [
      "https://github.com/Cyrus-Kiprop/update-react-portfolio/raw/master/src/assets/images/projects/ror-scaffold.png",
      "https://github.com/Cyrus-Kiprop/update-react-portfolio/raw/master/src/assets/images/projects/reverse-ror.png",
      "https://github.com/Cyrus-Kiprop/update-react-portfolio/raw/master/src/assets/images/projects/ror-social.png",
    ],
    description:
      "A facebook clone app built using Ruby on rails. The app tries to replicate facebook complex data models required as well as well as delivering a  properly secured app. The  app is a tutorial series code base where starters can clone and get started easily without worrying on association concepts",
    stack: [
      "Ruby on Rails",
      "Rspec",
      "Minitest",
      "Postgresql",
      "Authentication",
    ],
    live: "https://agile-mountain-91033.herokuapp.com/users/sign_in",
    github: "https://github.com/Cyrus-Kiprop/ror-social-scaffold",
  },
  {
    name: "Bookstore (In progress)",
    url: image,
    exUrl: [img1, image, img2],
    description: "A Boostore app created using react/redux. ",
    stack: ["React", "Redux", "Hooks", "ES6"],
    live: "https://bookstore-react-redux-ck-fh.herokuapp.com/",
    github: "https://github.com/cyrus-kiprop/bookstore-react-redux",
  },
];

export default projects;
