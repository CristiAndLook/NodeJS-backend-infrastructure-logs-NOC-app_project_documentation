import { CheckService } from "../domain/use-cases/checks/check-service"
import { FileSystemDatasource } from "../infraestructure/datasources/file-system.datasource"
import { LogRepositoryImpl } from "../infraestructure/repositories/log.repository.impl"
import { CronService } from "./cron/cron-service"
import { EmailService } from "./email/email.service"
import { SendEmailLogs } from "../domain/use-cases/emails/send-email-logs"

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource(),
)

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
        //             fileSystemLogRepository,
        //             ( ) => console.log(`Service ${URL} is ok`),
        //             ( error ) => console.log (error)
        //         ).execute( URL )
        //         // new CheckService().execute('http://localhost:3000/posts')
        //     }
        // )
    }
}