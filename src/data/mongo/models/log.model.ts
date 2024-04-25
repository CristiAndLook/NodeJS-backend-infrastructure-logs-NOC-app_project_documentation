/*
export enum LogSeverityLevel {
    low    = 'low',
    medium = 'medium',
    high   = 'high',
}

export interface LogEntityOptions {
    level: LogSeverityLevel;
    message: string;
    origin: string;
    createdAt?: Date;
}
*/
import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({

    message: {
        type: String,
        required: true,
    },
    origin: {
        type: String,
    },
    level: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'low'
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

});


export const LogModel = mongoose.model('Log', logSchema);