import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { UserPhoto } from "./entity/Photo";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 23306,
    username: "bpf",
    password: "ceWtw7jXZvEzcQbwgJyMccCbqmKAuEs5",
    database: "bpf",
    synchronize: true,
    logging: false,
    entities: [User, UserPhoto],
    migrations: [],
    subscribers: [],
})
