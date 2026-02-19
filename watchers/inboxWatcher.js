/**
 * Personal AI Employee - Inbox Watcher
 * 
 * This module watches the /vault/Inbox folder for new markdown files.
 * When a new markdown file is added, it triggers the provided handler.
 */

const chokidar = require('chokidar');
const path = require('path');

class InboxWatcher {
  constructor(inboxPath, needsActionPath, logsPath) {
    this.inboxPath = inboxPath || './vault/Inbox';
    this.needsActionPath = needsActionPath || './vault/Needs_Action';
    this.logsPath = logsPath || './vault/Logs';
    this.watcher = null;
    this.fileHandler = null;
  }

  /**
   * Set the handler function for new files
   * @param {Function} handler - Function to call when a new file is detected
   */
  setFileHandler(handler) {
    this.fileHandler = handler;
  }

  /**
   * Start watching the inbox folder
   */
  async start() {
    console.log(`Starting inbox watcher for: ${this.inboxPath}`);

    // Initialize the file watcher
    this.watcher = chokidar.watch(this.inboxPath, {
      ignored: /^\./, // Ignore dotfiles
      persistent: true,
      ignoreInitial: true // Don't trigger events for existing files
    });

    // Listen for new file additions
    this.watcher.on('add', this.handleFileAdded.bind(this));

    // Handle errors
    this.watcher.on('error', this.handleError.bind(this));

    console.log('Inbox watcher started successfully!');
  }

  /**
   * Handle when a new file is added to the inbox
   */
  async handleFileAdded(filePath) {
    try {
      // Check if it's a markdown file
      if (path.extname(filePath).toLowerCase() !== '.md') {
        console.log(`Non-markdown file detected: ${filePath}. Skipping.`);
        return;
      }

      console.log(`New markdown file detected: ${filePath}`);

      // Call the registered file handler if available
      if (this.fileHandler) {
        await this.fileHandler(filePath);
      } else {
        console.warn(`No file handler registered for: ${filePath}`);
      }

    } catch (error) {
      console.error(`Error processing new file ${filePath}:`, error);
    }
  }

  /**
   * Handle watcher errors
   */
  handleError(error) {
    console.error('Watcher error:', error);
  }

  /**
   * Stop watching
   */
  async stop() {
    if (this.watcher) {
      console.log('Stopping inbox watcher...');
      await this.watcher.close();
      console.log('Inbox watcher stopped.');
    }
  }
}

// Export the InboxWatcher class
module.exports = { InboxWatcher };

// If this file is run directly, start the watcher with a basic handler
if (require.main === module) {
  const inboxPath = process.argv[2] || './vault/Inbox';
  const needsActionPath = process.argv[3] || './vault/Needs_Action';
  const logsPath = process.argv[4] || './vault/Logs';
  
  const watcher = new InboxWatcher(inboxPath, needsActionPath, logsPath);
  
  // Set a basic file handler for standalone operation
  watcher.setFileHandler(async (filePath) => {
    console.log(`Standalone handler: Processing ${filePath}`);
  });
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\nReceived SIGINT, stopping watcher...');
    await watcher.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\nReceived SIGTERM, stopping watcher...');
    await watcher.stop();
    process.exit(0);
  });
  
  // Start the watcher
  watcher.start()
    .catch(error => {
      console.error('Failed to start watcher:', error);
      process.exit(1);
    });
}