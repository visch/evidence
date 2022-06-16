import * as ssf from 'ssf';
import { getContext } from 'svelte';

//see https://www.benlcollins.com/spreadsheets/google-sheets-custom-number-format/
//TODO note 0.##% is not ideal as it could show something like 15.% => https://superuser.com/questions/205759/format-a-number-with-optional-decimal-places-in-excel
export const builtInFormats = [
    // Date/Time:
   {formatName: "date", formatValue: "MMM dd, yyyy", valueType: 'date', exampleInput: new Date('Thu Jun 14 2022 07:32:04 GMT-0400'), exampleOutput: "June 14, 2022" },
   {formatName: "month", formatValue: "mmm", valueType: 'date', exampleInput: new Date('Thu Jun 14 2022 07:32:04 GMT-0400'), exampleOutput: "Jun" },
   {formatName: "year", formatValue: "yyyy", valueType: 'date', exampleInput: new Date('Thu Jun 14 2022 07:32:04 GMT-0400'), exampleOutput: "2022" },

   // Currency:
   {formatName: "usd", formatValue: '$0.00;($0.00)', valueType: 'number', exampleInput: 101.1, exampleOutput: '$101.10' },
   {formatName: "eur", formatValue: '€0.00;(€0.00)', valueType: 'number', exampleInput: 101.1, exampleOutput: '€101.10'},
   {formatName: "jpy", formatValue: '\\¥0.00;(\\¥0.00)', valueType: 'number', exampleInput: 101.1, exampleOutput: '¥101.10'},
   {formatName: "gbp", formatValue: '\\£0.00;(\\£0.00)', valueType: 'number', exampleInput: 101.1, exampleOutput: '£101.10' },
   {formatName: "cad", formatValue: '\\C\\A$0.00;(\\C\\A$0.00)', valueType: 'number', exampleInput: 101.1, exampleOutput: 'CA$101.10' },
   {formatName: "chf", formatValue: '\\C\\H\\F_0.00;(\\C\\H\\F_0.00)', valueType: 'number', exampleInput: 101.1, exampleOutput: 'CHF 101.10' },

   // Numbers
   {formatName: "num", formatValue: "0.##", valueType: 'number', exampleInput: 11.231, exampleOutput: "11.23" },
   {formatName: "num2", formatValue: "0.00", valueType: 'number', exampleInput: 11.2, exampleOutput: "11.20"},
   {formatName: "numk", formatValue: '0.0,"K"', valueType: 'number', exampleInput: 64201, exampleOutput: "64.2K"},
   {formatName: "numm", formatValue: '0.0,,"M"', valueType: 'number', exampleInput: 64200001, exampleOutput: "64.2M"},
   {formatName: "numb", formatValue: '0.0,,,"B"', valueType: 'number', exampleInput: 64200000001, exampleOutput: "64.2B"},

   {formatName: "id", formatValue: "@", valueType: 'number', exampleInput: "11.231", exampleOutput: "11.231" },

   // Percent:
   {formatName: "pct", formatValue: "0.0#%", valueType: 'number', exampleInput: 0.731, exampleOutput: "73.1%" },
];

export const getCustomFormats = () => {
    return getContext('customSettings').getCustomFormats() || [];
}

export const applyFormatting = (value, columnFormat) => {
    return ssf.format(columnFormat, value);
}

export const getColumnFormat = (formatName) => {
    let customFormats = getCustomFormats();
    return [... builtInFormats, ...customFormats].find(format => format.formatName === formatName)?.formatValue;
}