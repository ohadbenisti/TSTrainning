type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface ILogger {
    setLevel(level: LogLevel): void;
    debug(...args: unknown[]): void;
    info(...args: unknown[]): void;
    warn(...args: unknown[]): void;
    error(...args: unknown[]): void;
}

const logMethods: Record<LogLevel, (...args: unknown[]) => void> = {
    debug: (...args) => console.debug('[DEBUG]', ...args),
    info:  (...args) => console.info('[INFO]', ...args),
    warn:  (...args) => console.warn('[WARN]', ...args),
    error: (...args) => console.error('[ERROR]', ...args),
};

class Logger implements ILogger {
    constructor(private level: LogLevel = 'info') {}

    private shouldLog(level: LogLevel): boolean {
        const levels: LogLevel[] = ['debug', 'info', 'warn', 'error'];
        return levels.indexOf(level) >= levels.indexOf(this.level);
    }

    debug(...args: unknown[]) {
        if (this.shouldLog('debug')) logMethods.debug(...args);
    }

    info(...args: unknown[]) {
        if (this.shouldLog('info')) logMethods.info(...args);
    }

    warn(...args: unknown[]) {
        if (this.shouldLog('warn')) logMethods.warn(...args);
    }

    error(...args: unknown[]) {
        if (this.shouldLog('error')) logMethods.error(...args);
    }

    setLevel(level: LogLevel) {
        this.level = level;
    }
}

// Example of polymorphism:
class SilentLogger implements ILogger {
    setLevel(_: LogLevel) {}
    debug(..._args: unknown[]) {}
    info(..._args: unknown[]) {}
    warn(..._args: unknown[]) {}
    error(..._args: unknown[]) {}
}

export { ILogger, Logger, SilentLogger };