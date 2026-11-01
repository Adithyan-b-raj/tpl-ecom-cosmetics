<?php
/**
 * Plugin Name: AURA BOTANICA — WooCommerce Blocksy POS & Urgency Bridge
 * Description: Syncs Cloudflare Edge tokens and in-store POS stock matrix with WooCommerce.
 * Version: 1.0.0
 */
if (!defined('ABSPATH')) exit;
add_action('wp_head', function() {
  echo '<style>:root { --color-primary: #4A5D4E; --color-dark: #1C241E; }</style>';
});
