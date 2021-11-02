// Task A01
// Design a suitable, single SQL ‘CREATE TABLE’ instruction that results
// in the creation (IF NOT EXISTS) of the ‘Users’ table as illustrated in
// the AdaBoard schema; don’t forget to include the Primary Key and unique constraints.
// Use “strftime('%s','now')” rather than “CURRENT_TIMESTAMP”.

const createUsers =`
    CREATE TABLE IF NOT EXISTS users(
      userid INTEGER NOT NULL PRIMARY KEY,
      friendlyname VARCHAR(50),
      emailaddress VARCHAR(320) UNIQUE,
      password VARCHAR(256),
      admin INTEGER(1) NOT NULL CHECK (admin = 1 OR admin = 0),
      lastlogin INTEGER NOT NULL DEFAULT (strftime('%s','now'))
    );
`;
module.exports = { createUsers };
