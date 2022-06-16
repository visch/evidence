
<script>
    import * as ssf from 'ssf';

    export let formats;
    
    function formatExample(format) {
        console.log(`formatting using name=${format.formatName}, format=${format.formatValue}, userInput=${format.userInput}, and exampleInput=${format.exampleInput}`); //TODO DEBUG
        let normalizedUserInput = format.userInput?.trim();
        if (normalizedUserInput) {
            try {
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
                        normalizedUserInput = format.userInput.trim();
                        break;
                    }
                }
                let result = ssf.format(format.formatValue, normalizedUserInput);
                console.log(`Formatting result ${result}`);
                return result;
            } catch (error){
                console.log(error);
                return "";
            }
        } else {
            let result = ssf.format(format.formatValue, format.exampleInput);
            console.log(`Formatting result ${result}`);
            return result;
        }
    }
</script>

{#each formats as format}
    {format.formatName} | 
    {format.formatValue} | 
    <input id=id_format_row{format.formatName} placeholder={format.exampleInput} bind:value={format.userInput} /> | 
    {formatExample(format)} <br/>
{/each}
