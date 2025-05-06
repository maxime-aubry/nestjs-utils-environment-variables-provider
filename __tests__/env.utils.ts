export function setEnvironmentVariables(value: string): void {
    process.env.TEST = value;
};

export function clearEnvironmentVariables(): void {
    delete process.env.TEST;
};
