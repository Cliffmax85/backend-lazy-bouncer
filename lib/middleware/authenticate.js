const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {

 try {
   const { session } = req.cookies;
   const payload = jwt.verify(session, process.env.JWT_SECRET);
   req.user = payload;
   next();
 } catch (error) {
   error.message = 'You must be signed in to continue';
   error.status = 401;
   next(error);
 }

  // try {
  //   const { session } = req.cookies;
  //   if (!session) throw new Error('You must be signed in to continue');
  //   const payload = jwt.verify(session, process.env.JWT_SECRET);
  //   req.user = payload;
  // } catch (error) {
  //   error.status = 401;
  //   next(error);
  // }
};
