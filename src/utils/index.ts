export const SEPARATOR: string = ',';

export function isArray(value: string): boolean {
    if (value.includes(','))
        return true;
    return false;
};

export function convertToArray(value: string): string[] {
    const items: string[] = value.split(SEPARATOR);
    return items;
};
