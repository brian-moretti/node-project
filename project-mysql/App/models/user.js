const mySqlConnectAndQuery = require("../../Core/Database");
const paginations = require("../../utilities/paginations");

class User {
  static tableName = "users";

  static async getAll(params) {
    let p = paginations(params);
    const query = `SELECT * FROM ${this.tableName} LIMIT ${p.maxData} OFFSET ${p.offsetData}`;
    return await mySqlConnectAndQuery(query);
  }

  static async getUser(id) {
    const query = `SELECT * FROM ${this.tableName} WHERE id = ?`;
    return await mySqlConnectAndQuery(query, id);
  }

  static async createUser(body) {
    const query = `INSERT INTO ${User.tableName} (name, surname, email) VALUES (?, ?, ?)`;
    let newBody = [body.name, body.surname, body.email];
    if (newBody.includes(undefined)) {
      throw new Error("Body");
    }
    return await mySqlConnectAndQuery(query, newBody);
  }

  static async updateUser(currentData, body) {
    const query = `UPDATE ${User.tableName} SET name = ?, surname = ?, email = ? WHERE id = ?`;
    let newBody = [
      body.name ?? currentData.name,
      body.surname ?? currentData.surname,
      body.email ?? currentData.email,
      currentData.id,
    ];
    return await mySqlConnectAndQuery(query, newBody);
  }

  static async deleteUser(id) {
    const query = `DELETE FROM ${User.tableName} WHERE id = ?`;
    let deletedUser = await this.getUser(id);
    const result = await mySqlConnectAndQuery(query, id);
    return [result, deletedUser];
  }
}

module.exports = User;
