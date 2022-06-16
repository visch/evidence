
<script>
    import * as ssf from 'ssf';
    export let formats;
    export let source;
    
   function formatExample(format) {
        if (format.userInput) {
            try {
                let normalizedUserInput = format.userInput;
                switch (format.valueType) {
                    case 'boolean': {
                        normalizedUserInput = Boolean(format.userInput.trim())
                        break;
                    }
                    case 'number': {
                        normalizedUserInput = Number(format.userInput.trim());
                        if (Number.isNaN(normalizedUserInput)) {
                            throw "input is not a number";
                        }
                        break;
                    }
                    case 'date': {
                        normalizedUserInput = new Date(format.userInput.trim()); 
                        break;
                    }
                    default: {
                        normalizedUserInput = format.userInput.trim(); break;
                    }
                }
                return ssf.format(format.formatValue, normalizedUserInput);
            } catch (error){
                console.log(error);
                return "";
            }
        } else {
            return ssf.format(format.formatValue, format.exampleInput);
        }
   }
</script>
{source} <br/>
{#each formats as format}
    {format.formatName} | 
    {format.formatValue} | 
    <input id=id_format_row{format.formatName} placeholder={format.exampleInput} bind:value={format.userInput} /> | 
    {formatExample(format)} <br/>
{/each}
