import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'dpg-d05caaili9vc738m0q90-a.frankfurt-postgres.render.com',
        port: 5432,
        username: 'skivori',
        password: 'm8jnuT4AAx0flfGmGgEPOpgqi31rbSMp',
        database: 'casino_pg',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        ssl: true,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
      });

      return dataSource.initialize();
    },
  },
];