<script lang="ts">
    import Button from "lluis/DeprecatedButton.svelte"
    import Icon from "lluis/Icon.svelte"
</script>
  
<Button
    target="_blank"
    href = "https://toot.kytta.dev"
>
    <slot name="icon-left">
          <Icon icon="mastodon" prefix="fab" size="small" />
    </slot>
<div>Share on Mastodon</div>
</Button>