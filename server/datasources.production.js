module.exports = {
  heroku-postgres: {
    connector: "postgresql",
    url: process.env.DATABASE_URL
  },
  db: {
    connector: "memory"
  }
};
