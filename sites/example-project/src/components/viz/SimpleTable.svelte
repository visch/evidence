<script>
    import ErrorChart from "./ErrorChart.svelte";

    export let col1 = undefined;
    export let col2 = undefined;
    export let col3 = undefined;
    export let col4 = undefined;
    export let col5 = undefined;
    export let col6 = undefined;
    export let col7 = undefined;
    export let col8 = undefined;
    export let col9 = undefined;
    export let col10 = undefined;

    export let headers = true;
    headers = (headers === "true" || headers === true);
    
    let endTable = [];

    let inputColumns = []

    if(col1){inputColumns.push(col1)}
    if(col2){inputColumns.push(col2)}
    if(col3){inputColumns.push(col3)}
    if(col4){inputColumns.push(col4)}
    if(col5){inputColumns.push(col5)}
    if(col6){inputColumns.push(col6)}
    if(col7){inputColumns.push(col7)}
    if(col8){inputColumns.push(col8)}
    if(col9){inputColumns.push(col9)}
    if(col10){inputColumns.push(col10)}

    let colLength = inputColumns[0].length;

    let tempLength;
    let error;
    for(let i=1; i<inputColumns.length; i++){
        // check if other columns have same length; else throw error
        tempLength = inputColumns[i].length;
        if(colLength !== tempLength){
            error = "Column lengths must be equal. If you want to display empty table cells, input two quote characters."
        }
    }

    let headerArr = []

    if(headers){
        for(i=0; i<inputColumns.length; i++){
            headerArr.push(inputColumns[i][0])
        }
    }

    let startRow = headers ? 1 : 0;
    let rowArr = []
    for(let j=startRow; j<colLength; j++){
        for(let k=0; k<inputColumns.length; k++){
            rowArr.push(inputColumns[k][j])
        }
        endTable.push(rowArr)
        rowArr = []
    }

</script>

{#if !error}

<table>
    <tr>
    {#each headerArr as header}
        <th>{header}</th>
    {/each}
    </tr>

    {#each endTable as row}
        <tr>
            {#each row as cell}
                <td>{cell}</td>
            {/each}
        </tr>
    {/each}

</table>

{:else}

<ErrorChart {error} chartType="Simple Table"/>

{/if}

<style>

    table{
    width:80%;
    font-size: calc(0.75em - 0px);
    border-collapse: collapse;
    font-family: sans-serif;
    text-align: center;
    margin: 0 auto;
  }

  th{
    max-width: 1px;
    font-weight: 600;
    border-bottom: 1px solid rgb(110, 110, 110);
    padding:0px 8px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  td{
    max-width: 1px;
    padding: 4px 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 1px solid var(--grey-200);
  }

</style>