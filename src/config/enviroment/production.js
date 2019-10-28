module.exports = {
    port: process.env.PORT,
    secret: 'k6sndf91eef4ww',
    db: `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds127644.mlab.com:27644/heroku_z7dv32p9`
};