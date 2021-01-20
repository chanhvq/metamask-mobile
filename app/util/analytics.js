export const ONBOARDING_WIZARD_STEP_DESCRIPTION = {
	1: 'Welcome',
	2: 'Accounts',
	3: 'Account Name',
	4: 'Main Navigation',
	5: 'Browser',
	6: 'Search'
};

const generateOpt = (category, action, name) => ({ category, action, name });

const NAMES = {
	//Onboarding
	ONBOARDING_METRICS_OPT_IN: 'Metrics Opt In',
	ONBOARDING_METRICS_OPT_OUT: 'Metrics Opt Out',
	ONBOARDING_SELECTED_CREATE_NEW_WALLET: 'Selected Create New Wallet',
	ONBOARDING_SELECTED_CREATE_NEW_PASSWORD: 'Selected Create New Password',
	ONBOARDING_SELECTED_IMPORT_WALLET: 'Selected Import Wallet',
	ONBOARDING_SELECTED_SYNC_WITH_EXTENSION: 'Selected Sync with Extension',
	ONBOARDING_SELECTED_WITH_SEEDPHRASE: 'Selected Import with Seedphrase',
	ONBOARDING_SELECTED_TAKE_THE_TOUR: `Onboarding wizard 'Take the tour'`,
	ONBOARDING_SELECTED_NO_THANKS: `Onboarding wizard 'No thanks'`,
	ONBOARDING_SELECTED_SKIP: 'Onboarding wizard Skip',
	ONBOARDING_SELECTED_SKIP_TUTORIAL: 'Onboarding wizard Skip',
	// Navigation Drawer
	NAVIGATION_TAPS_ACCOUNT_NAME: 'Tapped Account Name / Profile',
	NAVIGATION_TAPS_SEND: "Taps on 'Send'",
	NAVIGATION_TAPS_RECEIVE: "Taps on 'Receive'",
	NAVIGATION_TAPS_BROWSER: 'Taps Browser',
	NAVIGATION_TAPS_WALLET: 'Taps Wallet',
	NAVIGATION_TAPS_TRANSACTION_HISTORY: 'Transaction History',
	NAVIGATION_TAPS_SHARE_PUBLIC_ADDRESS: 'Share my Public address',
	NAVIGATION_TAPS_VIEW_ETHERSCAN: 'View on Etherscan',
	NAVIGATION_TAPS_GET_HELP: 'Get Help',
	NAVIGATION_TAPS_SEND_FEEDBACK: 'Send Feedback',
	NAVIGATION_TAPS_SETTINGS: 'Settings',
	NAVIGATION_TAPS_LOGOUT: 'Logout',
	NAVIGATION_TAPS_INSTAPAY: 'Taps Instapay',
	// Common Navigation
	COMMON_TAPS_HAMBURGER_MENU: 'Hamburger menu Tapped',
	COMMON_SWIPED_TO_OPEN_NAVIGATION: 'Swiped to open Navigation',
	COMMON_TAPS_ACCOUNT_PROFILE: 'Tapped Account Profiile',
	COMMON_SWITCHED_NETWORKS: 'Switched Networks',
	// Browser
	BROWSER_SEARCH: 'Search',
	BROWSER_FAVORITES: 'My Favorites',
	BROWSER_FEATURED_APPS: 'Featured Apps',
	BROWSER_FEATURED_APPS_OPEN: 'Featured Apps - Open App',
	// Dapp
	DAPP_BROWSER_OPTIONS: 'More Browser Options',
	DAPP_HOME: 'Home',
	DAPP_ADD_TO_FAVORITE: 'Add to Favorites',
	DAPP_OPEN_IN_BROWSER: 'Open in Browser',
	// Wallet
	WALLET_TOKENS: 'Tokens',
	WALLET_COLLECTIBLES: 'Collectibles',
	WALLET_QR_SCANNER: 'QR scanner',
	WALLET_COPIED_ADDRESS: 'Copied Address',
	WALLET_ADD_TOKENS: 'Add Tokens',
	WALLET_ADD_COLLECTIBLES: 'Add Collectibles',
	// Transactions
	TRANSACTIONS_CONFIRM_STARTED: 'Confirm Started',
	TRANSACTIONS_EDIT_TRANSACTION: 'Edit Transaction',
	TRANSACTIONS_EDIT_GAS: 'Edit Gas',
	TRANSACTIONS_CANCEL_TRANSACTION: 'Cancel',
	TRANSACTIONS_COMPLETED_TRANSACTION: 'Transaction Completed',
	TRANSACTIONS_CONFIRM_SIGNATURE: 'Confirm',
	TRANSACTIONS_CANCEL_SIGNATURE: 'Cancel',
	// Accounts
	ACCOUNTS_SWITCHED_ACCOUNTS: 'Switched Accounts',
	ACCOUNTS_ADDED_NEW_ACCOUNT: 'Added New Account',
	ACCOUNTS_IMPORTED_NEW_ACCOUNT: 'Imported New Account',
	// Authentication
	AUTHENTICATION_INCORRECT_PASSWORD: 'Incorrect Password',
	AUTHENTICATION_CONNECT: 'Popup Opened',
	AUTHENTICATION_CONNECT_CONFIRMED: 'Confirmed',
	AUTHENTICATION_CONNECT_CANCELED: 'Canceled',
	// Settings
	SETTINGS_GENERAL: 'General',
	SETTINGS_ADVANCED: 'Advanced',
	SETTINGS_SECURITY_AND_PRIVACY: 'Security & Privacy',
	SETTINGS_ABOUT: 'About MetaMask',
	SETTINGS_EXPERIMENTAL: 'Experimental',
	// Payment Channels
	PAYMENT_CHANNELS_ENABLED: 'Enabled',
	PAYMENT_CHANNELS_DISABLED: 'Disabled',
	// Receive Options
	RECEIVE_OPTIONS_SHARE_ADDRESS: 'Share address',
	RECEIVE_OPTIONS_QR_CODE: 'QR Code',
	RECEIVE_OPTIONS_PAYMENT_REQUEST: 'Payment Request',
	RECEIVE_OPTIONS_BUY: 'Buy',
	// InstaPay
	INSTAPAY_DEPOSIT_FUNDS: 'Deposit Funds',
	INSTAPAY_RECEIVE_FUNDS: 'Receive Funds',
	INSTAPAY_SEND_FUNDS: 'Send Funds',
	INSTAPAY_WITHDRAW_FUNDS: 'Withdraw Funds',
	// Send Flow
	SEND_FLOW_ADDS_RECIPIENT: `Adds recipient address 'Send to'`,
	SEND_FLOW_ADDS_AMOUNT: `Adds Amount`,
	SEND_FLOW_CONFIRM_SEND: `Confirm Send`,
	SEND_FLOW_ADJUSTS_TRANSACTION_FEE: `Adjusts transaction fee`,
	SEND_FLOW_CANCEL: `Cancel`,
	// Dapp Interactions
	DAPP_APPROVE_SCREEN_APPROVE: 'Approve',
	DAPP_APPROVE_SCREEN_CANCEL: 'Cancel',
	DAPP_APPROVE_SCREEN_EDIT_PERMISSION: 'Edit permission',
	DAPP_APPROVE_SCREEN_EDIT_FEE: 'Edit tx fee',
	DAPP_APPROVE_SCREEN_VIEW_DETAILS: 'View tx details',
	// Fiat Orders
	WALLET_BUY_ETH: 'Buy ETH',
	PAYMENTS_SELECTS_DEBIT_OR_ACH: 'Selects debit card or bank account as payment method',
	PAYMENTS_SELECTS_APPLE_PAY: 'Selects Apple Pay as payment method',

	// Swap
	SWAPS_OPENED: 'Swaps Opened',
	QUOTES_REQUESTED: 'Quotes Requested',
	QUOTES_RECEIVED: 'Quotes Received',
	QUOTES_REQUEST_CANCELLED: 'Quotes Request Cancelled',
	ALL_AVAILABLE_QUOTES_OPENED: 'All Available Quotes Opened',
	SWAP_STARTED: 'Swap Started',
	SWAP_COMPLETED: 'Swap Completed',
	SWAP_FAILED: 'Swap Failed',
	QUOTES_TIMED_OUT: 'Quotes Timed Out',
	NO_QUOTES_AVAILABLE: 'No Quotes Available'
};

const ACTIONS = {
	//Onboarding
	METRICS_OPTS: 'Metrics Option',
	IMPORT_OR_CREATE: 'Import or Create',
	IMPORT_OR_SYNC: 'Import or Sync',
	ONBOARDING_NEXT: 'Onboarding Next',
	ONBOARDING_SKIP: 'Onboarding Skip',
	// Navigation Drawer
	NAVIGATION_DRAWER: 'Navigation Drawer',
	// Common Navigation
	COMMON_BROWSER_DAPP_WALLET: 'Browser & Dapp & Wallet View',
	// Browser
	BROWSER_VIEW: 'Browser View',
	// Dapp
	DAPP_VIEW: 'Dapp View',
	// Wallet
	WALLET_VIEW: 'Wallet View',
	//Transactions
	CONFIRM_SCREEN: 'Confirm Screen',
	SIGN_SCREEN: 'Sign Request',
	// Accounts
	ACCOUNTS_MODAL: 'Account Modal',
	// Authentication
	UNLOCK: 'Unlock',
	CONNECT: 'Connect',
	// Settings
	SETTINGS: 'Settings',
	// Payment Channels
	PAYMENT_CHANNELS: 'Payment Channels',
	// Receive Options
	RECEIVE_OPTIONS: 'Receive Options',
	// InstaPay View
	INSTAPAY_VIEW: 'InstaPay View',
	// Send Flow
	SEND_FLOW: 'Send Flow',
	// Dapp Interactions
	APPROVE_REQUEST: 'Approve Request',
	BUY_ETH: 'Buy ETH',
	SELECTS_DEBIT_OR_ACH: 'Selects Debit or ACH',
	SELECTS_APPLE_PAY: 'Selects Apple Pay'
};

const CATEGORIES = {
	ACCOUNTS: 'Accounts',
	AUTH: 'Auth',
	BROWSER_VIEW: 'Browser View',
	COMMON_NAVIGATION: 'Common Navigation',
	DAPP_VIEW: 'Dapp View',
	NAVIGATION_DRAWER: 'Navigation Drawer',
	ONBOARDING: 'Onboarding',
	SETTINGS: 'Settings',
	TRANSACTIONS: 'Transactions',
	WALLET_VIEW: 'Wallet View',
	RECEIVE_OPTIONS: 'Receive Options',
	INSTAPAY_VIEW: 'InstaPay View',
	SEND_FLOW: 'Send Flow',
	DAPP_INTERACTIONS: 'Dapp Interactions',
	WALLET: 'Wallet',
	PAYMENTS: 'Payments',
	SWAPS: 'Swaps'
};

export const ANALYTICS_EVENT_OPTS = {
	//Onboarding
	ONBOARDING_METRICS_OPT_IN: generateOpt(
		CATEGORIES.ONBOARDING,
		ACTIONS.METRICS_OPTS,
		NAMES.ONBOARDING_METRICS_OPT_IN
	),
	ONBOARDING_METRICS_OPT_OUT: generateOpt(
		CATEGORIES.ONBOARDING,
		ACTIONS.METRICS_OPTS,
		NAMES.ONBOARDING_METRICS_OPT_OUT
	),
	ONBOARDING_SELECTED_CREATE_NEW_WALLET: generateOpt(
		CATEGORIES.ONBOARDING,
		ACTIONS.IMPORT_OR_CREATE,
		NAMES.ONBOARDING_SELECTED_CREATE_NEW_WALLET
	),
	ONBOARDING_SELECTED_CREATE_NEW_PASSWORD: generateOpt(
		CATEGORIES.ONBOARDING,
		ACTIONS.IMPORT_OR_CREATE,
		NAMES.ONBOARDING_SELECTED_CREATE_NEW_PASSWORD
	),
	ONBOARDING_SELECTED_IMPORT_WALLET: generateOpt(
		CATEGORIES.ONBOARDING,
		ACTIONS.IMPORT_OR_CREATE,
		NAMES.ONBOARDING_SELECTED_IMPORT_WALLET
	),
	ONBOARDING_SELECTED_IMPORT_WITH_SEEDPHRASE: generateOpt(
		CATEGORIES.ONBOARDING,
		ACTIONS.IMPORT_OR_SYNC,
		NAMES.ONBOARDING_SELECTED_WITH_SEEDPHRASE
	),
	ONBOARDING_SELECTED_SYNC_WITH_EXTENSION: generateOpt(
		CATEGORIES.ONBOARDING,
		ACTIONS.IMPORT_OR_SYNC,
		NAMES.ONBOARDING_SELECTED_SYNC_WITH_EXTENSION
	),
	ONBOARDING_SELECTED_TAKE_THE_TOUR: generateOpt(
		CATEGORIES.ONBOARDING,
		ACTIONS.ONBOARDING_NEXT,
		NAMES.ONBOARDING_SELECTED_TAKE_THE_TOUR
	),
	ONBOARDING_SELECTED_NO_THANKS: generateOpt(
		CATEGORIES.ONBOARDING,
		ACTIONS.ONBOARDING_NEXT,
		NAMES.ONBOARDING_SELECTED_NO_THANKS
	),
	ONBOARDING_SELECTED_SKIP_TUTORIAL: generateOpt(
		CATEGORIES.ONBOARDING,
		ACTIONS.ONBOARDING_NEXT,
		NAMES.ONBOARDING_SELECTED_SKIP_TUTORIAL
	),
	// Navigation Drawer
	NAVIGATION_TAPS_ACCOUNT_NAME: generateOpt(
		CATEGORIES.NAVIGATION_DRAWER,
		ACTIONS.NAVIGATION_DRAWER,
		NAMES.NAVIGATION_TAPS_ACCOUNT_NAME
	),
	NAVIGATION_TAPS_SEND: generateOpt(
		CATEGORIES.NAVIGATION_DRAWER,
		ACTIONS.NAVIGATION_DRAWER,
		NAMES.NAVIGATION_TAPS_SEND
	),
	NAVIGATION_TAPS_RECEIVE: generateOpt(
		CATEGORIES.NAVIGATION_DRAWER,
		ACTIONS.NAVIGATION_DRAWER,
		NAMES.NAVIGATION_TAPS_RECEIVE
	),
	NAVIGATION_TAPS_BROWSER: generateOpt(
		CATEGORIES.NAVIGATION_DRAWER,
		ACTIONS.NAVIGATION_DRAWER,
		NAMES.NAVIGATION_TAPS_BROWSER
	),
	NAVIGATION_TAPS_WALLET: generateOpt(
		CATEGORIES.NAVIGATION_DRAWER,
		ACTIONS.NAVIGATION_DRAWER,
		NAMES.NAVIGATION_TAPS_WALLET
	),
	NAVIGATION_TAPS_TRANSACTION_HISTORY: generateOpt(
		CATEGORIES.NAVIGATION_DRAWER,
		ACTIONS.NAVIGATION_DRAWER,
		NAMES.NAVIGATION_TAPS_TRANSACTION_HISTORY
	),
	NAVIGATION_TAPS_SHARE_PUBLIC_ADDRESS: generateOpt(
		CATEGORIES.NAVIGATION_DRAWER,
		ACTIONS.NAVIGATION_DRAWER,
		NAMES.NAVIGATION_TAPS_SHARE_PUBLIC_ADDRESS
	),
	NAVIGATION_TAPS_VIEW_ETHERSCAN: generateOpt(
		CATEGORIES.NAVIGATION_DRAWER,
		ACTIONS.NAVIGATION_DRAWER,
		NAMES.NAVIGATION_TAPS_VIEW_ETHERSCAN
	),
	NAVIGATION_TAPS_GET_HELP: generateOpt(
		CATEGORIES.NAVIGATION_DRAWER,
		ACTIONS.NAVIGATION_DRAWER,
		NAMES.NAVIGATION_TAPS_GET_HELP
	),
	NAVIGATION_TAPS_SEND_FEEDBACK: generateOpt(
		CATEGORIES.NAVIGATION_DRAWER,
		ACTIONS.NAVIGATION_DRAWER,
		NAMES.NAVIGATION_TAPS_SEND_FEEDBACK
	),
	NAVIGATION_TAPS_SETTINGS: generateOpt(
		CATEGORIES.NAVIGATION_DRAWER,
		ACTIONS.NAVIGATION_DRAWER,
		NAMES.NAVIGATION_TAPS_SETTINGS
	),
	NAVIGATION_TAPS_LOGOUT: generateOpt(
		CATEGORIES.NAVIGATION_DRAWER,
		ACTIONS.NAVIGATION_DRAWER,
		NAMES.NAVIGATION_TAPS_LOGOUT
	),
	NAVIGATION_TAPS_INSTAPAY: generateOpt(
		CATEGORIES.NAVIGATION_DRAWER,
		ACTIONS.NAVIGATION_DRAWER,
		NAMES.NAVIGATION_TAPS_INSTAPAY
	),
	// Common Navigation
	COMMON_TAPS_HAMBURGER_MENU: generateOpt(
		CATEGORIES.COMMON_NAVIGATION,
		ACTIONS.COMMON_BROWSER_DAPP_WALLET,
		NAMES.COMMON_TAPS_HAMBURGER_MENU
	),
	COMMON_SWIPED_TO_OPEN_NAVIGATION: generateOpt(
		CATEGORIES.COMMON_NAVIGATION,
		ACTIONS.COMMON_BROWSER_DAPP_WALLET,
		NAMES.COMMON_SWIPED_TO_OPEN_NAVIGATION
	),
	COMMON_TAPS_ACCOUNT_PROFILE: generateOpt(
		CATEGORIES.COMMON_NAVIGATION,
		ACTIONS.COMMON_BROWSER_DAPP_WALLET,
		NAMES.COMMON_TAPS_ACCOUNT_PROFILE
	),
	COMMON_SWITCHED_NETWORKS: generateOpt(
		CATEGORIES.COMMON_NAVIGATION,
		ACTIONS.COMMON_BROWSER_DAPP_WALLET,
		NAMES.COMMON_SWITCHED_NETWORKS
	),
	// Browser
	BROWSER_SEARCH: generateOpt(CATEGORIES.BROWSER_VIEW, ACTIONS.BROWSER_VIEW, NAMES.BROWSER_SEARCH),
	BROWSER_FAVORITES: generateOpt(CATEGORIES.BROWSER_VIEW, ACTIONS.BROWSER_VIEW, NAMES.BROWSER_FAVORITES),
	BROWSER_FEATURED_APPS: generateOpt(CATEGORIES.BROWSER_VIEW, ACTIONS.BROWSER_VIEW, NAMES.BROWSER_FEATURED_APPS),
	BROWSER_FEATURED_APPS_OPEN: generateOpt(
		CATEGORIES.BROWSER_VIEW,
		ACTIONS.BROWSER_VIEW,
		NAMES.BROWSER_FEATURED_APPS_OPEN
	),
	// Dapp
	DAPP_BROWSER_OPTIONS: generateOpt(CATEGORIES.DAPP_VIEW, ACTIONS.DAPP_VIEW, NAMES.DAPP_BROWSER_OPTIONS),
	DAPP_HOME: generateOpt(CATEGORIES.DAPP_VIEW, ACTIONS.DAPP_VIEW, NAMES.DAPP_HOME),
	DAPP_ADD_TO_FAVORITE: generateOpt(CATEGORIES.DAPP_VIEW, ACTIONS.DAPP_VIEW, NAMES.DAPP_ADD_TO_FAVORITE),
	DAPP_OPEN_IN_BROWSER: generateOpt(CATEGORIES.DAPP_VIEW, ACTIONS.DAPP_VIEW, NAMES.DAPP_OPEN_IN_BROWSER),
	// Wallet
	WALLET_TOKENS: generateOpt(CATEGORIES.WALLET_VIEW, ACTIONS.WALLET_VIEW, NAMES.WALLET_TOKENS),
	WALLET_COLLECTIBLES: generateOpt(CATEGORIES.WALLET_VIEW, ACTIONS.WALLET_VIEW, NAMES.WALLET_COLLECTIBLES),
	WALLET_QR_SCANNER: generateOpt(CATEGORIES.WALLET_VIEW, ACTIONS.WALLET_VIEW, NAMES.WALLET_QR_SCANNER),
	WALLET_COPIED_ADDRESS: generateOpt(CATEGORIES.WALLET_VIEW, ACTIONS.WALLET_VIEW, NAMES.WALLET_COPIED_ADDRESS),
	WALLET_ADD_TOKENS: generateOpt(CATEGORIES.WALLET_VIEW, ACTIONS.WALLET_VIEW, NAMES.WALLET_ADD_TOKENS),
	WALLET_ADD_COLLECTIBLES: generateOpt(CATEGORIES.WALLET_VIEW, ACTIONS.WALLET_VIEW, NAMES.WALLET_ADD_COLLECTIBLES),
	// Transactions
	TRANSACTIONS_CONFIRM_STARTED: generateOpt(
		CATEGORIES.TRANSACTIONS,
		ACTIONS.CONFIRM_SCREEN,
		NAMES.TRANSACTIONS_CONFIRM_STARTED
	),
	TRANSACTIONS_EDIT_TRANSACTION: generateOpt(
		CATEGORIES.TRANSACTIONS,
		ACTIONS.CONFIRM_SCREEN,
		NAMES.TRANSACTIONS_EDIT_TRANSACTION
	),
	TRANSACTIONS_EDIT_GAS: generateOpt(CATEGORIES.TRANSACTIONS, ACTIONS.CONFIRM_SCREEN, NAMES.TRANSACTIONS_EDIT_GAS),
	TRANSACTIONS_CANCEL_TRANSACTION: generateOpt(
		CATEGORIES.TRANSACTIONS,
		ACTIONS.CONFIRM_SCREEN,
		NAMES.TRANSACTIONS_CANCEL_TRANSACTION
	),
	TRANSACTIONS_COMPLETED_TRANSACTION: generateOpt(
		CATEGORIES.TRANSACTIONS,
		ACTIONS.CONFIRM_SCREEN,
		NAMES.TRANSACTIONS_COMPLETED_TRANSACTION
	),
	TRANSACTIONS_CONFIRM_SIGNATURE: generateOpt(
		CATEGORIES.TRANSACTIONS,
		ACTIONS.SIGN_SCREEN,
		NAMES.TRANSACTIONS_CONFIRM_SIGNATURE
	),
	TRANSACTIONS_CANCEL_SIGNATURE: generateOpt(
		CATEGORIES.TRANSACTIONS,
		ACTIONS.SIGN_SCREEN,
		NAMES.TRANSACTIONS_CANCEL_SIGNATURE
	),
	// Accounts
	ACCOUNTS_SWITCHED_ACCOUNTS: generateOpt(
		CATEGORIES.ACCOUNTS,
		ACTIONS.ACCOUNTS_MODAL,
		NAMES.ACCOUNTS_SWITCHED_ACCOUNTS
	),
	ACCOUNTS_ADDED_NEW_ACCOUNT: generateOpt(
		CATEGORIES.ACCOUNTS,
		ACTIONS.ACCOUNTS_MODAL,
		NAMES.ACCOUNTS_ADDED_NEW_ACCOUNT
	),
	ACCOUNTS_IMPORTED_NEW_ACCOUNT: generateOpt(
		CATEGORIES.ACCOUNTS,
		ACTIONS.ACCOUNTS_MODAL,
		NAMES.ACCOUNTS_IMPORTED_NEW_ACCOUNT
	),
	// Authentication
	AUTHENTICATION_INCORRECT_PASSWORD: generateOpt(
		CATEGORIES.AUTH,
		ACTIONS.UNLOCK,
		NAMES.AUTHENTICATION_INCORRECT_PASSWORD
	),
	AUTHENTICATION_CONNECT: generateOpt(CATEGORIES.AUTH, ACTIONS.CONNECT, NAMES.AUTHENTICATION_CONNECT),
	AUTHENTICATION_CONNECT_CONFIRMED: generateOpt(
		CATEGORIES.AUTH,
		ACTIONS.CONNECT,
		NAMES.AUTHENTICATION_CONNECT_CONFIRMED
	),
	AUTHENTICATION_CONNECT_CANCELED: generateOpt(
		CATEGORIES.AUTH,
		ACTIONS.CONNECT,
		NAMES.AUTHENTICATION_CONNECT_CANCELED
	),
	// Settings
	SETTINGS_GENERAL: generateOpt(CATEGORIES.SETTINGS, ACTIONS.SETTINGS, NAMES.SETTINGS_GENERAL),
	SETTINGS_ADVANCED: generateOpt(CATEGORIES.SETTINGS, ACTIONS.SETTINGS, NAMES.SETTINGS_ADVANCED),
	SETTINGS_SECURITY_AND_PRIVACY: generateOpt(
		CATEGORIES.SETTINGS,
		ACTIONS.SETTINGS,
		NAMES.SETTINGS_SECURITY_AND_PRIVACY
	),
	SETTINGS_ABOUT: generateOpt(CATEGORIES.SETTINGS, ACTIONS.SETTINGS, NAMES.SETTINGS_ABOUT),
	SETTINGS_EXPERIMENTAL: generateOpt(CATEGORIES.SETTINGS, ACTIONS.SETTINGS, NAMES.SETTINGS_EXPERIMENTAL),
	// Payment Channels
	PAYMENT_CHANNELS_ENABLED: generateOpt(
		CATEGORIES.SETTINGS,
		ACTIONS.PAYMENT_CHANNELS,
		NAMES.PAYMENT_CHANNELS_ENABLED
	),
	PAYMENT_CHANNELS_DISABLED: generateOpt(
		CATEGORIES.SETTINGS,
		ACTIONS.PAYMENT_CHANNELS,
		NAMES.PAYMENT_CHANNELS_DISABLED
	),
	// Receive Options
	RECEIVE_OPTIONS_SHARE_ADDRESS: generateOpt(
		CATEGORIES.RECEIVE_OPTIONS,
		ACTIONS.RECEIVE_OPTIONS,
		NAMES.RECEIVE_OPTIONS_SHARE_ADDRESS
	),
	RECEIVE_OPTIONS_QR_CODE: generateOpt(
		CATEGORIES.RECEIVE_OPTIONS,
		ACTIONS.RECEIVE_OPTIONS,
		NAMES.RECEIVE_OPTIONS_QR_CODE
	),
	RECEIVE_OPTIONS_PAYMENT_REQUEST: generateOpt(
		CATEGORIES.RECEIVE_OPTIONS,
		ACTIONS.RECEIVE_OPTIONS,
		NAMES.RECEIVE_OPTIONS_PAYMENT_REQUEST
	),
	RECEIVE_OPTIONS_BUY: generateOpt(CATEGORIES.RECEIVE_OPTIONS, ACTIONS.RECEIVE_OPTIONS, NAMES.RECEIVE_OPTIONS_BUY),
	// InstaPay View
	INSTAPAY_DEPOSIT_FUNDS: generateOpt(CATEGORIES.INSTAPAY_VIEW, ACTIONS.INSTAPAY_VIEW, NAMES.INSTAPAY_DEPOSIT_FUNDS),
	INSTAPAY_RECEIVE_FUNDS: generateOpt(CATEGORIES.INSTAPAY_VIEW, ACTIONS.INSTAPAY_VIEW, NAMES.INSTAPAY_RECEIVE_FUNDS),
	INSTAPAY_SEND_FUNDS: generateOpt(CATEGORIES.INSTAPAY_VIEW, ACTIONS.INSTAPAY_VIEW, NAMES.INSTAPAY_SEND_FUNDS),
	INSTAPAY_WITHDRAW_FUNDS: generateOpt(
		CATEGORIES.INSTAPAY_VIEW,
		ACTIONS.INSTAPAY_VIEW,
		NAMES.INSTAPAY_WITHDRAW_FUNDS
	),
	// Send flow
	SEND_FLOW_ADDS_RECIPIENT: generateOpt(CATEGORIES.SEND_FLOW, ACTIONS.SEND_FLOW, NAMES.SEND_FLOW_ADDS_RECIPIENT),
	SEND_FLOW_ADDS_AMOUNT: generateOpt(CATEGORIES.SEND_FLOW, ACTIONS.SEND_FLOW, NAMES.SEND_FLOW_ADDS_AMOUNT),
	SEND_FLOW_CONFIRM_SEND: generateOpt(CATEGORIES.SEND_FLOW, ACTIONS.SEND_FLOW, NAMES.SEND_FLOW_CONFIRM_SEND),
	SEND_FLOW_ADJUSTS_TRANSACTION_FEE: generateOpt(
		CATEGORIES.SEND_FLOW,
		ACTIONS.SEND_FLOW,
		NAMES.SEND_FLOW_ADJUSTS_TRANSACTION_FEE
	),
	SEND_FLOW_CANCEL: generateOpt(CATEGORIES.SEND_FLOW, ACTIONS.SEND_FLOW, NAMES.SEND_FLOW_CANCEL),
	// Dapp Interactions
	DAPP_APPROVE_SCREEN_APPROVE: generateOpt(
		CATEGORIES.DAPP_INTERACTIONS,
		ACTIONS.APPROVE_REQUEST,
		NAMES.DAPP_APPROVE_SCREEN_APPROVE
	),
	DAPP_APPROVE_SCREEN_CANCEL: generateOpt(
		CATEGORIES.DAPP_INTERACTIONS,
		ACTIONS.APPROVE_REQUEST,
		NAMES.DAPP_APPROVE_SCREEN_CANCEL
	),
	DAPP_APPROVE_SCREEN_EDIT_PERMISSION: generateOpt(
		CATEGORIES.DAPP_INTERACTIONS,
		ACTIONS.APPROVE_REQUEST,
		NAMES.DAPP_APPROVE_SCREEN_EDIT_PERMISSION
	),
	DAPP_APPROVE_SCREEN_EDIT_FEE: generateOpt(
		CATEGORIES.DAPP_INTERACTIONS,
		ACTIONS.APPROVE_REQUEST,
		NAMES.DAPP_APPROVE_SCREEN_EDIT_FEE
	),
	DAPP_APPROVE_SCREEN_VIEW_DETAILS: generateOpt(
		CATEGORIES.DAPP_INTERACTIONS,
		ACTIONS.APPROVE_REQUEST,
		NAMES.DAPP_APPROVE_SCREEN_VIEW_DETAILS
	),
	// Fiat Orders
	WALLET_BUY_ETH: generateOpt(CATEGORIES.WALLET, ACTIONS.BUY_ETH, NAMES.WALLET_BUY_ETH),
	PAYMENTS_SELECTS_DEBIT_OR_ACH: generateOpt(
		CATEGORIES.PAYMENTS,
		ACTIONS.SELECTS_DEBIT_OR_ACH,
		NAMES.PAYMENTS_SELECTS_DEBIT_OR_ACH
	),
	PAYMENTS_SELECTS_APPLE_PAY: generateOpt(
		CATEGORIES.PAYMENTS,
		ACTIONS.SELECTS_APPLE_PAY,
		NAMES.PAYMENTS_SELECTS_APPLE_PAY
	)
};
