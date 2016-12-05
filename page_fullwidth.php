<?php

/*
Template Name: Full Width
*/

//* Add landing body class to the head
add_filter( 'body_class', 'digital_add_body_class' );
function digital_add_body_class( $classes ) {
  $classes[] = 'page-fullwidth';
  return $classes;
}

//* Remove Skip Links from a template
remove_action ( 'genesis_before_header', 'genesis_skip_links', 5 );

//* Remove Sidebar from Full Width Template
remove_action( 'genesis_sidebar', 'genesis_do_sidebar' );

//* Run the Genesis loop
genesis();