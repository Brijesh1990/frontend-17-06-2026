<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ecommerce-app-db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'admin' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'pUeV-UNrGL1y{^ms]{(m8uWwc8vyB?zhbL%BdZPER;bD=Y}4>DfO461*7/5KI$Q)' );
define( 'SECURE_AUTH_KEY',  'h3<-6N>r[zQw}II#lqllTN1c.,N=wD[rnza?fw89ZSbbz_QgDTQFX;,9xF}0BshI' );
define( 'LOGGED_IN_KEY',    ' SoKfuMu,F7_h?AC9d_q5^HC$CLEjLBm@&(._%BuiRXzfz_3ojOl#jtw(4Bn9&F>' );
define( 'NONCE_KEY',        'R;g9nZ~k?mQD!BD/-%xh/G3eA|L$XLQeqnd9%- t6pQr:j+NC$Ee[9)&G21k[i$1' );
define( 'AUTH_SALT',        'yr.%mYq@ %@OxFf<Jjpy?v=::+uZZaU`,#nC7)3:.f|v,6R-UE0i& o)VK7vs~}[' );
define( 'SECURE_AUTH_SALT', '/FbT@z1$y7Hr%=~_RB2?Yr2bJpzjR<opJK>ag#!GL2|5`ZruM#U -5[qRY,c5< m' );
define( 'LOGGED_IN_SALT',   '$iqA mK0.s#wI:aLWMABRdW,$=m&xv<)f%2aTD{Om6Zzp=I5qNWKaeCx*=J(-2ml' );
define( 'NONCE_SALT',       'q:gL:G@;iAMY<Xzg(_CwcGXR)_Taq#)tzEepz$ne=]wC$8oGN)@r29HNwm&YTHqd' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
