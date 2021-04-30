const router = require('express').Router();
const { Message } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/game', withAuth, async (req, res) => {
  try {
    const newMessagePost = await Message.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newMessagePost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const newMessagePostDel = await Message.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!newMessagePostDel) {
//       res.status(404).json({ message: 'No post found by user!' });
//       return;
//     }

//     res.status(200).json(newMessagePostDel);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
