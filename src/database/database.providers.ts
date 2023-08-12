import { DataSource } from "typeorm";
import 'dotenv/config'
export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.DB_PORT) || 5432,
                username: process.env.DB_USERNAME || 'postgres',
                password: process.env.DB_PASSWORD || '',
                database: process.env.DB_NAME || 'postgres',
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true,
            });

            return dataSource.initialize();
        }
    }
]