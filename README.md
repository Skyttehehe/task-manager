How to install and run__
git clone https://github.com/your-username/task-manager.git__
cd task-manager__

npm install__

npm run dev__

----------------------------------------------------

Probably adding validation that the id can not be the same, added the possibility that you can pick your own id to make it easier to test, if id is empty right now it just makes a random id, edge case the id is a dupe. probably fixing that with more time__

The post function got a bit out of hand, probably would clean that up. my assumption is that only the title is required, and everything else is optional.__

----------------------------------------------------

I would probably improve the tests below, and add some more__
im using postman to test __
Current tests__
https://skyttehehe-5857025.postman.co/workspace/skytte's-Workspace~3731c2b7-776e-44ab-8d64-b4540e9f8a9b/collection/53421484-c573f2f7-9d2c-41e9-acc9-6f36286cb2e0?action=share&source=copy-link&creator=53421484

Post task__
http://localhost:3000/api/tasks__
{ "id": "abc123", "title": "sell groceries", "completed": false}__
//Required fields: title

Get all tasks __
http://localhost:3000/api/tasks__

Get a single task by id
http://localhost:3000/api/tasks/abc123__

PATCH
http://localhost:3000/api/tasks/abc123__
{ "title": "buy groceries", "completed": true}__
//Updating both title and completed status__

Delete__
http://localhost:3000/api/tasks/abc123__

Get all completed__
http://localhost:3000/api/tasks?completed=true__

Get all tasks desc__
http://localhost:3000/api/tasks?sort=title&order=desc__

Get all completed tasks desc__
http://localhost:3000/api/tasks?completed=true&sort=createdAt&order=desc__