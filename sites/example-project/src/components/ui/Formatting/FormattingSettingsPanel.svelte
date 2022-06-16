<script>
    export let customSettings;
    import BuiltInFormating from "./BuiltInFormating.svelte";
    import CustomFormatting from "./CustomFormatting.svelte";
    import { slide } from 'svelte/transition';

       //see https://www.benlcollins.com/spreadsheets/google-sheets-custom-number-format/
    let builtInFormats = [
         // Date/Time:
        {formatName: "date", formatValue: "MMM dd, yyyy", valueType: 'date', exampleInput: new Date('Thu Jun 14 2022 07:32:04 GMT-0400'), userInput: undefined, exampleOutput: "June 14, 2022" },
        {formatName: "month", formatValue: "mmm", valueType: 'date', exampleInput: new Date('Thu Jun 14 2022 07:32:04 GMT-0400'),  userInput: undefined, exampleOutput: "Jun" },
        {formatName: "year", formatValue: "yyyy", valueType: 'date', exampleInput: new Date('Thu Jun 14 2022 07:32:04 GMT-0400'),  userInput: undefined, exampleOutput: "2022" },

        // Currency:
        {formatName: "usd", formatValue: '$0.00;($0.00)', valueType: 'number', exampleInput: 101.1,  userInput: undefined, exampleOutput: '$101.10' },
        {formatName: "eur", formatValue: '€0.00;(€0.00)', valueType: 'number', exampleInput: 101.1,  userInput: undefined, exampleOutput: '€101.10'},
        {formatName: "jpy", formatValue: '\\¥0.00;(\\¥0.00)', valueType: 'number', exampleInput: 101.1,  userInput: undefined, exampleOutput: '¥101.10'},
        {formatName: "gbp", formatValue: '\\£0.00;(\\£0.00)', valueType: 'number', exampleInput: 101.1,  userInput: undefined, exampleOutput: '£101.10' },
        {formatName: "cad", formatValue: '\\C\\A$0.00;(\\C\\A$0.00)', valueType: 'number', exampleInput: 101.1,  userInput: undefined, exampleOutput: 'CA$101.10' },
        {formatName: "chf", formatValue: '\\C\\H\\F_0.00;(\\C\\H\\F_0.00)', valueType: 'number', exampleInput: 101.1,  userInput: undefined, exampleOutput: 'CHF 101.10' },

        // Numbers
        {formatName: "num", formatValue: "0.##",  valueType: 'number', exampleInput: "11.231",  userInput: undefined, exampleOutput: "11.23" },
        {formatName: "num2", formatValue: "0.00", valueType: 'number', exampleInput: "11.2",  userInput: undefined, exampleOutput: "11.20"},
        {formatName: "numk", formatValue: '0.0,"K"', valueType: 'number', exampleInput: "64201",  userInput: undefined, exampleOutput: "64.2K"},
        {formatName: "numm", formatValue: '0.0,,"M"', valueType: 'number', exampleInput: "64200001",  userInput: undefined, exampleOutput: "64.2M"},
        {formatName: "numb", formatValue: '0.0,,,"B"', valueType: 'number', exampleInput: "64200000001",  userInput: undefined, exampleOutput: "64.2B"},

        {formatName: "id", formatValue: "@",  valueType: 'number', exampleInput: "11.231",  userInput: undefined, exampleOutput: "11.231" },

        // Percent:
        {formatName: "pct", formatValue: "0.0#%", valueType: 'number', exampleInput: "0.731",  userInput: undefined, exampleOutput: "73.1%" }, //TODO note 0.##% is not ideal as it could show something like 15.% => https://superuser.com/questions/205759/format-a-number-with-optional-decimal-places-in-excel
    ];

    console.log(`DEBUG UI FormattingSettingsPanel customSettings=${JSON.stringify(customSettings, null, 2)}`); //TODO DEBUG


</script>

<form>
<div class=container>
    <div class=panel> 
    <h1>Formats</h1>
    </div>
    <div class=panel transition:slide|local>
        <svelte:component this={BuiltInFormating} {builtInFormats} />
        <svelte:component this={CustomFormatting} {builtInFormats} {customSettings}/>
    </div>
</div>
</form>
<style>
    .container {
        margin-top: 2em;
        border-top: 1px solid var(--grey-200);
        border-left: 1px solid var(--grey-200);
        border-right: 1px solid var(--grey-200);
        border-radius: 5px 5px 0 0;
        font-size: 14px; 
        font-family: var(--ui-font-family);
    }   

    .panel {
        border-top: 1px solid var(--grey-200);
        padding:1.0em;
    }

    .panel:first-of-type {
        border-top:none;
    }

</style>