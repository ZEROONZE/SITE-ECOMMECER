import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "8922commerce",
  database: "ecommerce",
  synchronize: false,
  logging: false,
  entities: [],
  migrations: ["./src/database/migrations/*.ts"],
  subscribers: [],
});

export function createConnection(host = "localhost"): Promise<DataSource> {
  console.log(`Connecting to database on ${host}`);
  return AppDataSource.setOptions({ host }).initialize();
}

export default AppDataSource;
