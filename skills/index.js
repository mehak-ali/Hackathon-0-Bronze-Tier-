/**
 * Personal AI Employee - Skills Module
 * 
 * This module contains reusable functions and skills that the AI employee can use
 * to perform various tasks. Each skill is designed to handle specific types of tasks.
 */

// Import all skills
const { taskExtractionSkill } = require('./taskExtractionSkill');
const { summarizeSkill } = require('./summarizeSkill');
const { planningSkill } = require('./planningSkill');

/**
 * Get all available skills
 * @returns {Array} - Array of skill objects
 */
function getSkills() {
  return [
    {
      name: 'Task Extraction',
      categories: ['task', 'extraction', 'identification'],
      keywords: ['task', 'need to', 'should', 'must', 'required', 'complete', 'do'],
      description: 'Extracts tasks from text content',
      execute: taskExtractionSkill
    },
    {
      name: 'Summarization',
      categories: ['summarize', 'condense', 'abstract'],
      keywords: ['summarize', 'summary', 'abstract', 'overview', 'outline'],
      description: 'Creates concise summaries of longer texts',
      execute: summarizeSkill
    },
    {
      name: 'Planning',
      categories: ['plan', 'schedule', 'organize', 'arrange'],
      keywords: ['plan', 'schedule', 'organize', 'arrange', 'coordinate'],
      description: 'Generates plans from objectives',
      execute: planningSkill
    }
  ];
}

module.exports = { getSkills };