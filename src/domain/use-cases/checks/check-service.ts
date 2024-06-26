import { LogEntity, LogSeverityLevel } from "../../entities/log.entity"
import { LogRepository } from "../../repository/log.repository"

interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>
}

type SuccessCallback = () => void
type ErrorCallback = (error: String) => void

export class CheckService implements CheckServiceUseCase {

    constructor(
        private readonly logRepository: LogRepository,
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback
    ) { }


    async execute(url: string): Promise<boolean> {

        try {
            const req = await fetch(url)

            if (!req.ok) {
                throw new Error(`Erro on check service ${url}`)
            }

            const log = new LogEntity({
                message: `Service ${url} is OK`, 
                level: LogSeverityLevel.low, 
                origin: 'check-service.ts'
            })

            this.logRepository.saveLog(log)

            this.successCallback && this.successCallback();
            return true

        } catch (error) {
            const errorMessage = `${ error }`

            const log = new LogEntity({
                level: LogSeverityLevel.high, 
                message: errorMessage,
                origin: 'check-service.ts'
            })

            this.logRepository.saveLog(log)
            
            this.errorCallback && this.errorCallback( errorMessage );
            return false
        }
    }

}
