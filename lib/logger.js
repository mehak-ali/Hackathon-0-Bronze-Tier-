/**
 * Personal AI Employee - Logger Module
 * 
 * This module provides centralized logging functionality for the system.
 * It handles writing log entries to files with timestamps and severity levels.
 */

const fs = require('fs').promises;
const path = require('path');

class Logger {
  constructor() {
    this.logsPath = null;
    this.logFileName = null;
    this.initialized = false;
  }

  /**
   * Initialize the logger with configuration
   * @param {string} logsPath - Path to the logs directory
   * @param {string} logFileName - Name of the log file
   */
  async initialize(logsPath, logFileName) {
    this.logsPath = logsPath;
    this.logFileName = logFileName;
    
    // Ensure logs directory exists
    await this.ensureLogsDirectory();
    this.initialized = true;
  }

  /**
   * Ensure the logs directory exists
   */
  async ensureLogsDirectory() {
    if (!this.logsPath) {
      throw new Error('Logger not initialized: logsPath not set');
    }
    
    try {
      await fs.access(this.logsPath);
    } catch {
      await fs.mkdir(this.logsPath, { recursive: true });
    }
  }

  /**
   * Log an info message
   * @param {string} message - The message to log
   */
  async info(message) {
    if (!this.initialized) {
      throw new Error('Logger not initialized');
    }
    
    const logEntry = `[${new Date().toISOString()}] INFO: ${message}\n`;
    await this.writeLogEntry(logEntry);
  }

  /**
   * Log a warning message
   * @param {string} message - The message to log
   */
  async warn(message) {
    if (!this.initialized) {
      throw new Error('Logger not initialized');
    }
    
    const logEntry = `[${new Date().toISOString()}] WARN: ${message}\n`;
    await this.writeLogEntry(logEntry);
  }

  /**
   * Log an error message
   * @param {string} message - The message to log
   */
  async error(message) {
    if (!this.initialized) {
      throw new Error('Logger not initialized');
    }
    
    const logEntry = `[${new Date().toISOString()}] ERROR: ${message}\n`;
    await this.writeLogEntry(logEntry);
  }

  /**
   * Write a log entry to the file
   * @param {string} logEntry - The formatted log entry to write
   */
  async writeLogEntry(logEntry) {
    if (!this.initialized) {
      throw new Error('Logger not initialized');
    }
    
    try {
      const logFilePath = path.join(this.logsPath, this.logFileName);
      await fs.appendFile(logFilePath, logEntry);
    } catch (error) {
      // Fallback: try to log to console if file writing fails
      console.error(`Failed to write to log file: ${error.message}`);
      console.error(`Log entry would have been: ${logEntry}`);
    }
  }

  /**
   * Get the path to the current log file
   * @returns {string} - The path to the log file
   */
  getLogFilePath() {
    if (!this.initialized) {
      throw new Error('Logger not initialized');
    }
    
    return path.join(this.logsPath, this.logFileName);
  }
}

module.exports = { Logger };