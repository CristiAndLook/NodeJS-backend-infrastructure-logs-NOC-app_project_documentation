import { CheckService } from "../domain/use-cases/checks/check-service"
import { CronService } from "./cron/cron-service"

export class Server {
    public static start() {
        console.log('Server started...')

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const URL = 'http://google.com'
                new CheckService(
                    ( ) => console.log(`Service ${URL} is ok`),
                    ( error ) => console.log (error)
                ).execute( URL )
                // new CheckService().execute('http://localhost:3000/posts')
            }
        )
        
    }
}