/* eslint-disable */
db.createUser({
  "user": "admindevwebii",
  "pwd": "admin",
  "roles": ["readWrite", "dbAdmin"]
}, {
  "w": "majority",
  "wtimeout": 5000
})

db = db.getSiblingDB('admin')

db.createUser({
	"user": "root",
  "pwd": "password",
	"roles": [{
		"role": "root",
		"db": "admin"
	}]
})
/* eslint-enable */
