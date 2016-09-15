module.exports = {
  herokuPostgres: {
    connector: "postgresql",
    url: process.env.DATABASE_URL
  },
  db: {
    connector: "memory"
  }
};
