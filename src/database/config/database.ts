import { Pool} from 'pg'

export const pool = new Pool({
    user:'protouser',
    host:'localhost',
    password:'passuser',
    database: 'UserDb',
    port: 5432
});