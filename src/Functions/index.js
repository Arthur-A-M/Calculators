

export const handleStringPress = (setValue, addedValue) => {
    if (addedValue === '.') {
        if (setValue.length === 0) {
            return '0.';
        }
        const dotCount = setValue.split('.').length - 1;
        if (dotCount > 0) {
            return setValue;
        }
    }
    if (['+', '-', '*', '/'].includes(addedValue)) {
        const operationCount = (setValue.split('+').length - 1) +
            (setValue.split('-').length - 1) +
            (setValue.split('*').length - 1) +
            (setValue.split('/').length - 1);
        if (operationCount > 0) {
            return setValue;
        }
    }
    if (addedValue === '=') {
        return eval(setValue);
    }
    return setValue + addedValue;
}
