How to install and run
git clone https://github.com/your-username/task-manager.git
cd task-manager

npm install

npm run dev

----------------------------------------------------

Probably adding validation that the id can not be the same, added the possibility that you can pick your own id to make it easier to test, if id is empty right now it just makes a random id, edge case the id is a dupe. probably fixing that with more time

The post function got a bit out of hand, probably would clean that up. my assumption is that only the title is required, and everything else is optional.

----------------------------------------------------

I would probably improve the tests below, and add some more
im using postman to test 
Current tests
https://skyttehehe-5857025.postman.co/workspace/skytte's-Workspace~3731c2b7-776e-44ab-8d64-b4540e9f8a9b/collection/53421484-c573f2f7-9d2c-41e9-acc9-6f36286cb2e0?action=share&source=copy-link&creator=53421484

Post task
http://localhost:3000/api/tasks
{ "id": "abc123", "title": "sell groceries", "completed": false}
//Required fields: title

Get all tasks 
http://localhost:3000/api/tasks

Get a single task by id
http://localhost:3000/api/tasks/abc123

PATCH
http://localhost:3000/api/tasks/abc123
{ "title": "buy groceries", "completed": true}
//Updating both title and completed status

Delete
http://localhost:3000/api/tasks/abc123

Get all completed
http://localhost:3000/api/tasks?completed=true

Get all tasks desc
http://localhost:3000/api/tasks?sort=title&order=desc

Get all completed tasks desc
http://localhost:3000/api/tasks?completed=true&sort=createdAt&order=desc