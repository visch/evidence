<script>
    export let customSettings;
    import { builtInFormats } from "$lib/modules/formats";
    import BuiltInFormating from "./BuiltInFormating.svelte";
    import CustomFormatting from "./CustomFormatting.svelte";
    import { slide } from 'svelte/transition';

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