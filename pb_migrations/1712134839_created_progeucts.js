/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kjtsjxqkxjewdsv",
    "created": "2024-04-03 09:00:39.765Z",
    "updated": "2024-04-03 09:00:39.765Z",
    "name": "progeucts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "omaofytz",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "51r6evpt",
        "name": "photo",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kjtsjxqkxjewdsv");

  return dao.deleteCollection(collection);
})
