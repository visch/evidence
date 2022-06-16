<script context="module">
    import { dev } from '$app/env'    
    export const load = async ({fetch}) => {
        if(dev) {
            const res = await fetch("../api/settings.json")
            // const {settings} = await res.json()
            const body = await res.json()
            const settings = body.settings;
            const gitIgnore = body.gitIgnore;
            const customSettings = body.customSettings
            return {
                props: {
                    settings,
                    gitIgnore,
                    customSettings
                }
            }
        }
        else {
            return {
                props: {
                    settings: {},
                    gitIgnore: ""
                } 
            }
        }
    }
</script>

<script>
    export let settings
    export let customSettings
    export let gitIgnore
    import DatabaseSettingsPanel from '@evidence-dev/components/ui/Databases/DatabaseSettingsPanel.svelte';
    import VersionControlPanel from '@evidence-dev/components/ui/VersionControl/VersionControlPanel.svelte';
    import DeploySettingsPanel from '@evidence-dev/components/ui/Deployment/DeploySettingsPanel.svelte';
    import FormattingSettingsPanel from '@evidence-dev/components/ui/Formatting/FormattingSettingsPanel.svelte'
    import TelemetrySettingsPanel from '@evidence-dev/components/ui/TelemetryOptOut/TelemetrySettingsPanel.svelte';
    console.log(`DEBUG UI customSettings ${JSON.stringify(customSettings, null, 2)}`); //TODO DEBUG
</script>

{#if dev}
<DatabaseSettingsPanel {settings} {gitIgnore}/> 
<VersionControlPanel {settings}/>
{#if customSettings?.panelEnabled}
    <FormattingSettingsPanel {settings} {customSettings} />
{/if}
<DeploySettingsPanel {settings} /> 
<TelemetrySettingsPanel {settings} />
<br/>
{:else}
<p>Settings are only available in development mode.</p>
{/if}
