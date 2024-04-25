import { CheckService } from "../domain/use-cases/checks/check-service"
import { FileSystemDatasource } from "../infraestructure/datasources/file-system.datasource"
import { MongoLogDatasource } from "../infraestructure/datasources/mongo-log.datasource"
import { LogRepositoryImpl } from "../infraestructure/repositories/log.repository.impl"
import { CronService } from "./cron/cron-service"
import { EmailService } from "./email/email.service"
import { SendEmailLogs } from "../domain/use-cases/emails/send-email-logs"
import { PostgresLogDatasource } from "../infraestructure/datasources/postgres-log.datasource"
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple"

const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource(),
);
const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDatasource(),
);
const postgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDatasource(),
);

const emailService = new EmailService()

export class Server {
    public static start() {
        console.log('Server started...')

        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository,
        // ).execute(
        //     ['camira01@misena.edu.co']
        // )

        // emailService.sendEmailWithFileSystemLogs(['camira01@misena.edu.co'])

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const URL = 'http://google.com'
        //         new CheckService(
        //             logRepository,
        //             ( ) => console.log(`Service ${URL} is ok`),
        //             ( error ) => console.log (error)
        //         ).execute( URL )
        //         // new CheckService().execute('http://localhost:3000/posts')
        //     }
        // )

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com';

        //         new CheckServiceMultiple(
        //             [fsLogRepository, postgresLogRepository, mongoLogRepository],
        //             () => console.log(`${url} is ok`),
        //             (error) => console.log(error),
        //         ).execute(url);

        //     }
        // );
    }
}