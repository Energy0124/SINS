/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Article from '../api/article/article.model';
import Message from '../api/message/message.model';
import Game from '../api/game/game.model';

Game.find({}).removeAsync()
  .then(() => {
    Game.create({
        name: 'Bullet Hell Game',
        tags: 'shooting, bullet hell',
        description: 'This is a bullet hell shooting game created with Unity 5',
        imagePath: 'https://theskb.files.wordpress.com/2015/12/touhou.gif'
      }
    );
  });

Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
      'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
      'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
      'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
      'tests alongside code. Automatic injection of scripts and ' +
      'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
      'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
      'payload, minifies your scripts/css/images, and rewrites asset ' +
      'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
      'and openshift subgenerators'
    });
  });

Message.find({}).removeAsync()
  .then(() => {
    Message.create({
        userName: 'Admin',
        text: 'Hello world!',
        imagePath: 'https://media.giphy.com/media/3ornjHgZHMljdazdUk/giphy.gif'
      }, {
        userName: 'Touhou Lover',
        text: 'I love bullet hell!',
        imagePath: 'https://s-media-cache-ak0.pinimg.com/736x/e1/27/83/e12783c0a483d800433e47db1c8d9f76.jpg'
      }
    );
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
        provider: 'local',
        name: 'CSer',
        email: 'test@example.com',
        password: 'testtest',
        country: 'Hong Kong',
        description: 'CSer no sleep!',
        imagePath: 'https://s-media-cache-ak0.pinimg.com/736x/e1/27/83/e12783c0a483d800433e47db1c8d9f76.jpg'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'adminadmin',
        country: 'Hong Kong',
        description: 'I love Touhou Project!',
        imagePath: 'https://media.giphy.com/media/3ornjHgZHMljdazdUk/giphy.gif',
        level: 99
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Real Admin',
        email: 'realadmin@example.com',
        password: 'realadmin',
        country: 'Hong Kong',
        description: 'Inori is the best!',
        imagePath: 'https://49.media.tumblr.com/7b94c50cf9485cb3e848709bba2e6a03/tumblr_ngda64EKr61sg9gi2o1_500.gif'
      })
      .then(() => {
        console.log('finished populating users');
      });
  });
Article.find({}).removeAsync()
  .then(() => {
    Article.createAsync({
        name: "Game Wiki",
        info: "Testing Game wiki"
      })
      .then(() => {
        console.log('finished populating wiki');
      });
  });
