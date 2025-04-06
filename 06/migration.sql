DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS catalogs_conversations;
DROP TABLE IF EXISTS catalogs;
DROP TABLE IF EXISTS conversations;

CREATE TABLE IF NOT EXISTS conversations (
                                             "id" SERIAL PRIMARY KEY,
                                             "participants" INT[] NOT NULL,
                                             "blackList" BOOLEAN[] NOT NULL,
                                             "favoriteList" BOOLEAN[] NOT NULL,
                                             "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                                             "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS catalogs (
                                        "id" SERIAL PRIMARY KEY,
                                        "userId" INT NOT NULL REFERENCES users ("id") ON DELETE CASCADE,
                                        "catalogName" VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS catalogs_conversations (
                                                      "catalogId" INT NOT NULL REFERENCES catalogs ("id") ON DELETE CASCADE,
                                                      "conversationId" INT NOT NULL REFERENCES conversations ("id") ON DELETE CASCADE,
                                                      PRIMARY KEY ("catalogId", "conversationId")
);

CREATE TABLE IF NOT EXISTS messages (
                                        "id" SERIAL PRIMARY KEY,
                                        "sender" INT NOT NULL REFERENCES users ("id") ON DELETE CASCADE,
                                        "body" TEXT NOT NULL,
                                        "conversation" INT NOT NULL REFERENCES conversations ("id") ON DELETE CASCADE,
                                        "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                                        "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);