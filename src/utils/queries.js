export const createMessageTable = `
DROP TABLE IF EXISTS messages;
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR DEFAULT '',
  message VARCHAR NOT NULL
  )
  `;

export const insertMessages = `
INSERT INTO messages(name, message)
VALUES ('Hannah', 'first message'),
      ('Alice', 'second message'),
      ('stephen', 'third message')
`;

export const dropMessagesTable = 'DROP TABLE messages';
