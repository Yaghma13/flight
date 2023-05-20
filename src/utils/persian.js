const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

export function convertEnglishNumberToPersian(input) {
    return `${input}`.replace(/[0-9]/g, (char) => persianNumbers[Number(char)]);
}