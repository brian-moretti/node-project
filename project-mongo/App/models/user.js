const { ObjectId } = require("mongodb");
const { MongoConnectToDb } = require("../../Core/Database");

class User {
  static collection = "users";

  static async getAll(params) {
    const page = params.page || 0;
    const maxUsers = 3;
    const offsetData = page <= 1 ? 0 : (page - 1) * maxUsers;
    const db = await MongoConnectToDb();
    return await db
      .collection(this.collection)
      .find()
      .sort({ name: 1 })
      .skip(offsetData)
      .limit(maxUsers)
      .toArray();
  }

  static async getUser(id) {
    const db = await MongoConnectToDb();
    if (ObjectId.isValid(id)) {
      return await db
        .collection(this.collection)
        .findOne({ _id: new ObjectId(id) });
    } else {
      throw new Error("Id not valid");
    }
  }

  static async createUser(body) {
    const db = await MongoConnectToDb();
    return await db.collection(this.collection).insertOne(body);
  }

  static async updateUser(currentData, body) {
    const db = await MongoConnectToDb();
    let newBody = {
      name: body.name ?? currentData.name,
      surname: body.surname ?? currentData.surname,
      email: body.email ?? currentData.email,
      _id: currentData._id,
    };
    if (ObjectId.isValid(currentData._id)) {
      return await db
        .collection(this.collection)
        .updateOne({ _id: currentData._id }, { $set: newBody });
    } else {
      throw new Error("Id not valid");
    }
  }

  static async deleteUser(id) {
    const db = await MongoConnectToDb();
    if (ObjectId.isValid(id)) {
      let deletedUser = await this.getUser(id);
      const result = await db
        .collection(this.collection)
        .deleteOne({ _id: new ObjectId(id) });
      return [result, deletedUser];
    } else {
      throw new Error("Id not valid");
    }
  }
}

module.exports = User;
