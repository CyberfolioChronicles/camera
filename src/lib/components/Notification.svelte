<script>
	import { r_ } from '$lib/i18n';
	import { ws } from '$lib/connector/websocket';
	/**
	 * @type {import('svelte/store').Readable<import("$lib/types/notification").default[]>}
	 */
	const notifications = ws.getNotifications();
	let showNotifications = false;

  // Toggle the visibility of the notification list
  const toggleNotifications = () => {
    showNotifications = !showNotifications;
  };
</script>

<div class="notification-container">
  <div class="notification-button" on:click={toggleNotifications}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  </div>
  {#if showNotifications}
    <div class="notification-list">
      {#each $notifications as $notification}
      <div class="notification">
        <h3>{$r_($notification.title, $notification)}</h3>
        <p>{$r_($notification.comment, $notification)}</p>
      </div>
    {/each}
    </div>
  {/if}
</div>

<style>
  .notification-container {
    position: fixed;
    top: 10px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 1000;
  }

  .notification-button {
    background-color: lightgrey;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 0px;
  }

  .notification-button svg {
    fill: currentColor;
    stroke: currentColor;
  }

  .notification-list {
    background-color: rgba(0, 0, 170, 0.7); 
    border-radius: 15px;
    padding: 15px;
    max-width: 300px; 
    overflow-y: auto;
  }

  .notification {
    background-color: rgba(0,0,0,0);
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 20px;
  }

  h3 {
    margin: 0 0 5px;
    color: #fff;
  }

  p {
    margin: 0;
    color: #fff;
  }

</style>