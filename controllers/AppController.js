import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  static getStatus(request, response) {
    try {
      const redis = redisClient.isAlive();
      const db = dbClient.isAlive();
      response.status(200).send({ redis, db });
    } catch (error) {
      console.log(error);
    }
  }

  static async getStats(request, response) {
    try {
      const usr = await dbClient.nbUsers();
      const fl = await dbClient.nbFiles();
      response.status(200).send({ usr, fl });
    } catch (error) {
      console.log(error);
    }
  }
}

export default AppController;
