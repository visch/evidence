<script context="module">
    import { dev } from '$app/env'    
    export const load = async ({fetch}) => {
        if(dev) {
            const settingsRes = await fetch("../api/settings.json");
            const customSettingsRes = await fetch("../api/customSettings.json")

            const settingsBody = await settingsRes.json();
            const settings = settingsBody.settings;
            const gitIgnore = settingsBody.gitIgnore;
            
            const customSettingsBody = await customSettingsRes.json();
            const customSettings = customSettingsBody.customSettings;

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
</script>

{#if dev}
<DatabaseSettingsPanel {settings} {gitIgnore}/> 
<VersionControlPanel {settings}/>
<DeploySettingsPanel {settings} />
<TelemetrySettingsPanel {settings} />
{#if customSettings?.panelEnabled}
    <FormattingSettingsPanel {settings} {customSettings} />
{/if}
<br/>
{:else}
<p>Settings are only available in development mode.</p>
{/if}
