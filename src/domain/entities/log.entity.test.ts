import { LogEntity, LogSeverityLevel } from './log.entity';



describe('LogEntity', () => {

    const dataObj = {
        message: 'Hola Mundo',
        level: LogSeverityLevel.high,
        origin: 'log.entity.test.ts'
    }


    test('should create a LogEntity instance', () => {

        const log = new LogEntity(dataObj);

        expect(log).toBeInstanceOf(LogEntity);
        expect(log.message).toBe(dataObj.message);
        expect(log.level).toBe(dataObj.level);
        expect(log.origin).toBe(dataObj.origin);
        expect(log.createdAt).toBeInstanceOf(Date);

    });

    test('should create a LogEntity instance from json', () => {

        const json = `{"level":"low","message":"Service http://google.com is OK","createdAt":"2024-04-23T00:58:56.183Z","origin":"check-service.ts"}`;

        const log = LogEntity.fromJson(json);


        expect(log).toBeInstanceOf(LogEntity);
        expect(log.message).toBe("Service http://google.com is OK");
        expect(log.level).toBe(LogSeverityLevel.low);
        expect(log.origin).toBe("check-service.ts");
        expect(log.createdAt).toBe("2024-04-23T00:58:56.183Z");

    });


    test('should create a LogEntity instance from object', () => {

        const log = LogEntity.fromObject(dataObj);

        expect(log).toBeInstanceOf(LogEntity);
        expect(log.message).toBe(dataObj.message);
        expect(log.level).toBe(dataObj.level);
        expect(log.origin).toBe(dataObj.origin);
        expect(log.createdAt).toBeInstanceOf(Date);



    })



})