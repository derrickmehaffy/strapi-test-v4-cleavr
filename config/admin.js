module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9872f7be6636f316186c59cfceee181e'),
  },
});
