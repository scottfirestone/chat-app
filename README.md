# Project README

## Server
Server built with Rails. See `./server` and associated README for instructions.

## Client
Client built with React. See `./client` and associated README for instructions.

## Notes
* I thought it would be fun to create rooms which allow multiple (more than 2) users, so I've implemented that functionality.
* I'm using SQLite here (for simplicity) but would opt for postgreSQL on a production app.
* Action Cable was new tech for me, and brought some challenges in implementing - but I opted for websockets to ensure real time updates (i.e. rather than polling).
* I read that FastJsonapi is one of the faster gems for serialization so I implemented that, but had trouble returning specific fields on associations (e.g. returning `message.user_name`). Rather, I'm storing `users` in redux store and mapping each message to one of those users. On a production app, I would expect the client to get all the data it needs about a message without such a lookup.
* With more time I'd add tests for server channel functionality, and include tests for client UI (only redux tested due to time constraints).
* Other "nice to have" UI:
  * right-align current user's messages.
  * unsubscribe users upon leaving rooms.
  * including user avatars.
  * list currently subscribed users in room.
  * overall more attractive UI.
