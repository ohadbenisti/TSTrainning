class SimpleLogger {
    private getTimestamp(): string {
        return new Date().toISOString();
    }

    log(message:string){
        console.log(`[LOG] ${this.getTimestamp()} - ${message}`);
    }

    error(message:string){
        console.error(`[ERROR] ${this.getTimestamp()} - ${message}`)
    }
    warn(message:string){
        console.warn(`[WARN] ${this.getTimestamp()} - ${message}`)
    }
}
interface Logger {
    log(message: string): void;
    error(message: string): void;
    warn(message: string): void;
}

const Logger = new SimpleLogger();
Logger.error("This is an error message");
Logger.warn("This is a warning message");
Logger.log("This is a log message");

console.log(`\x1b[32mThis is a log message`);