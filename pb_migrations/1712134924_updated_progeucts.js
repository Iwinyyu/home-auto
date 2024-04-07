/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kjtsjxqkxjewdsv")

  collection.name = "products"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kjtsjxqkxjewdsv")

  collection.name = "progeucts"

  return dao.saveCollection(collection)
})
