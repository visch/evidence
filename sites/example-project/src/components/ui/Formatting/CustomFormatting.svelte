<script>
	
    import FormatGrid from "./FormatGrid.svelte";

	export let builtInFormats = {};
    export let customSettings = {};

	const valueTypeOptions = ["number", "string", "date"];

	let formatName;
	let formatValue;
	let valueType;
	let editingCustomFormat = false;

    async function submitNewCustomFormat() {
        console.log(`DEBUG customSettings pre post => ${JSON.stringify(customSettings, null, 2)}`); //TODO DEBUG

		if (! (builtInFormats.find(format => format.formatName === formatName) || customSettings.customFormats?.find(format => format.formatName === formatName))) {
			const submitted = await fetch("/api/customSettings.json", {
				method: "POST",
				body: JSON.stringify({
					newCustomFormat : {formatName, formatValue, valueType}
				})
				});
			let result = await submitted.json();
			if (result) {
				customSettings = result;
				cancelAddCustomFormat();
				console.log(`DEBUG settings post post => ${JSON.stringify(customSettings, null, 2)}`); //TODO DEBUG
			} else {
				//TODO handle error
			}

		} else {
			//TODO error handling on duplicate
		}

    }

    function resetNewCustomFormat() {
		formatName = undefined;
		formatValue = undefined;
		valueType = undefined;
	}
	function cancelAddCustomFormat() {
		resetNewCustomFormat();
		editingCustomFormat = false;
	}
  
	function showAddCustomFormat() {
		resetNewCustomFormat();
		editingCustomFormat = true;
	}

</script>

<h1>Custom Formats</h1>
<FormatGrid formats={customSettings.customFormats} source="custom"/>
{#if editingCustomFormat }
	<form on:submit|preventDefault={submitNewCustomFormat} autocomplete="off">
		Format Name : <input id="formatName"  placeholder="my_currency_format" bind:value={formatName} />
		Format Text : <input id="formatValue" placeholder="$#,##0.0" bind:value={formatValue} />
		Value Type  : 
			<select id="valueType" bind:value={valueType}>
				{#each valueTypeOptions as option}
					<option value={option}>
						{option}
					</option>
            	{/each}
			</select>
        <footer>
            <button id="submitCustomFormatButton" type=submit  disabled={ !(formatName && formatValue) }>Add</button>
            <button id="cancelAddCustomFormatButton" on:click={cancelAddCustomFormat} >Cancel</button>    
        </footer>
	</form>
{:else}
   <button id="showAddCustomFormatButton" on:click={showAddCustomFormat} disabled={ editingCustomFormat }>Add Custom Format</button>
{/if}