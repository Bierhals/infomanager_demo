CREATE TABLE IF NOT EXISTS im_version (
  version INTEGER PRIMARY KEY ASC,
  comment TEXT NOT NULL,
  date TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS im_customer (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  dateCreated TIMESTAMP NOT NULL,
  dateChanged TIMESTAMP NOT NULL,
  userCreated INTEGER NOT NULL,
  userChanged INTEGER NOT NULL,
  name TEXT NOT NULL UNIQUE,
  statusID TEXT NOT NULL,
  street TEXT,
  city TEXT,
  postalCode TEXT,
  state TEXT,
  country TEXT,
  phone TEXT,
  email TEXT
);

CREATE TABLE IF NOT EXISTS im_asset (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  dateCreated TIMESTAMP NOT NULL,
  dateChanged TIMESTAMP NOT NULL,
  userCreated INTEGER NOT NULL,
  userChanged INTEGER NOT NULL,
  typeID TEXT NOT NULL,
  serial TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  statusID TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS im_customer_asset (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  dateCreated TIMESTAMP NOT NULL,
  dateChanged TIMESTAMP NOT NULL,
  userCreated INTEGER NOT NULL,
  userChanged INTEGER NOT NULL,
  customerID INTEGER NOT NULL,
  assetID INTEGER NOT NULL,
  validFrom TIMESTAMP NOT NULL,
  validTo TIMESTAMP,
  UNIQUE(assetID, validFrom),
  FOREIGN KEY(customerID) REFERENCES im_customer(id),
  FOREIGN KEY(assetID) REFERENCES im_asset(id)
);

INSERT INTO im_version (version, comment, date)
VALUES (1, 'Initial Datenbank', CURRENT_TIMESTAMP);

UPDATE sqlite_sequence SET seq = 1000000 WHERE name = 'im_customer';
INSERT INTO sqlite_sequence (name,seq)
  SELECT 'im_customer', 1000000
  WHERE NOT EXISTS 
    (SELECT name  FROM sqlite_sequence WHERE name = 'im_customer');

UPDATE sqlite_sequence SET seq = 1000000 WHERE name = 'im_asset';
INSERT INTO sqlite_sequence (name,seq)
  SELECT 'im_asset', 1000000
  WHERE NOT EXISTS 
    (SELECT name  FROM sqlite_sequence WHERE name = 'im_asset');

UPDATE sqlite_sequence SET seq = 1000000 WHERE name = 'im_customer_asset';
INSERT INTO sqlite_sequence (name,seq)
  SELECT 'im_customer_asset', 1000000
  WHERE NOT EXISTS 
    (SELECT name  FROM sqlite_sequence WHERE name = 'im_customer_asset');