const router = require('express').Router();
const { Game, User, Console, Message } = require('../models');
const withAuth = require('../utils/auth');
 
router.get('/', async (req, res) => {
  try {
    // Get all games
    const gameData = await Game.findAll({
    });

    // Serialize data so the template can read it
    const games = gameData.map((game) => game.get({ plain: true }));
    
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      games, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/game/:id', async (req, res) => {
  try {
    const gameData = await Game.findByPk(req.params.id, {
      include: [
        {
          model: Console, 
          attributes: ["name"]
        },
        {
          model: Message,
          attributes: ["name" , "description"]
        }
      ],
    });

    const game = gameData.get({ plain: true });
    // const message = messageData.get({ plain: true});
    console.log("game here", game);
    // console.log("msg here", message);

    res.render('game', {
      ...game, 
      // message,

      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
// router.get('/loggedin', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Game, Message }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('homepage', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('login');
});

module.exports = router;
