import * as ssf from 'ssf';

export const customFormat = (value, columnFormat) => {
    console.log(`value=${value}, columnFormat=${columnFormat}`);
    return ssf.format('$#,##0', value);
}
