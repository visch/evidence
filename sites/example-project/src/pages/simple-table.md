<script>
import SimpleTable from '$lib/viz/SimpleTable.svelte'

</script>

# Markdown Syntax
| x |y1|y2|y3|
|---|---|---|---|
|2000|119|9|9401|
|2001|23|15|1847|
|2002|3134|17|3854|
|2003|413|21|4958|
|2004|556|ff|9337|


| column1 | column2 | column3 |
|:--------|
# HTML Syntax
<table>
    <tr>
        <th>x</th>
        <th>y1</th>
        <th>y2</th>
        <th>y3</th>
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
    </tr>
</table>

# Simple Tables
<!-- <SimpleTable>
    <Column title="x" values={[2000, 2001, 2002, 2003, 2004]}/>
    <Column title="y1" values={[1, 2, 3, 4, 5]}/>
    <Column title="y2" values={[1, 2, 3, 4, 5]}/>
    <Column title="y3" values={[1, 2, 3, 4, 5]}/>
</SimpleTable>

<SimpleTable
    title1="x"
    values1={[2000, 2001, 2002, 2003, 2004]}
    title2="y1"
    values2={[1, 2, 3, 4, 5]}
    title3="y2"
    values3={[1, 2, 3, 4, 5]}
    title4="y3"
    values4={[1, 2, 3, 4, 5]}
/> -->

<SimpleTable
    col1={['x', 2000, 2001, 2002, 2003, 2004]}
    col2={['y1', 1, 2, 3, 4, 5]}
    col3={['y2', 1, 2, 3, 4, 5]}
    col4={['y3', 1, 2, 3, 4, 5]}
    headers=false
/>