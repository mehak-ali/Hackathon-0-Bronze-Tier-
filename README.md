# Personal AI Employee - Bronze Tier Hackathon Submission

![Bronze Tier](https://img.shields.io/badge/Hackathon-Bronze_Tier-blue.svg) ![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg) ![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## System Overview

The Personal AI Employee is an innovative task management system that combines artificial intelligence with a simple, transparent markdown-based vault system. Designed to enhance personal productivity, it monitors designated folders, processes incoming tasks intelligently, and automates routine operations while escalating complex tasks for human review.

This system represents a paradigm shift toward transparent AI assistance, where users maintain complete visibility into how their tasks are processed and managed.

## Architecture Explanation

The Personal AI Employee follows a highly modular, clean architecture with distinct layers:

### Core Components
- **System Layer** (`lib/system.js`): Orchestrates the entire system lifecycle
- **Agent Layer** (`lib/taskProcessor.js`): The intelligent decision-making component
- **Skills Layer** (`skills/`): Reusable functions for specific operations (task extraction, summarization, planning)
- **Watchers Layer** (`watchers/`): File system monitors that detect changes in real-time
- **Vault Layer** (`agent/vaultManager.js`): The markdown-based storage system with structured folders
- **Logger Layer** (`lib/logger.js`): Centralized logging system with severity levels

### Data Flow
1. **Inbox Monitoring**: The system continuously monitors the `Inbox` folder for new markdown files
2. **Task Detection**: When a new file is detected, it's processed by the AI agent
3. **Skill Application**: Relevant skills are applied based on content analysis
4. **Decision Making**: The agent decides whether to process automatically or escalate
5. **Action Execution**: Tasks are moved to appropriate folders and logged
6. **Feedback Loop**: System maintains comprehensive logs for transparency and debugging

## Folder Structure

```
personal-ai-employee/
├── agent/                    # Core vault management
│   ├── vaultManager.js      # File and vault management utilities
│   ├── index.js             # Placeholder for compatibility
│   └── taskProcessor.js     # Placeholder for compatibility
├── lib/                     # Core system components
│   ├── system.js            # Main system orchestrator
│   ├── logger.js            # Centralized logging
│   └── taskProcessor.js     # Task processing logic
├── skills/                  # Reusable AI functions
│   ├── index.js             # Skill registry
│   ├── taskExtractionSkill.js # Task extraction capability
│   ├── summarizeSkill.js    # Content summarization
│   ├── planningSkill.js     # Planning and scheduling
│   ├── skillRunner.js       # Dynamic skill execution
│   └── README.md            # Skills architecture documentation
├── vault/                   # Task storage system
│   ├── Inbox/               # New tasks arrive here
│   ├── Needs_Action/        # Tasks requiring human attention
│   ├── Done/                # Completed tasks
│   ├── Logs/                # System logs and activity records
│   ├── Dashboard.md         # System dashboard
│   └── Company_Handbook.md  # Operational guidelines
├── watchers/                # File system monitoring
│   ├── inboxWatcher.js      # Monitors Inbox for new tasks
│   ├── vaultWatcher.js      # Placeholder for compatibility
│   └── README.md            # Watchers documentation
├── index.js                 # Main application entry point
├── package.json             # Project dependencies and scripts
└── README.md                # This file
```

## Setup Instructions

### Prerequisites
- Node.js v14 or higher
- npm package manager

### Installation Steps
1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the System
- Start the Personal AI Employee:
  ```bash
  npm start
  ```
- The system will begin monitoring the vault for new tasks
- Add markdown files to the `vault/Inbox/` directory to create new tasks

### Development Mode
- Run in development mode with auto-restart:
  ```bash
  npm run dev
  ```

## How the AI Works

### Intelligent Task Processing
The Personal AI Employee employs a multi-tiered approach to task processing:

1. **Content Analysis**: When a new file arrives, the system analyzes its content to identify task-related keywords and patterns
2. **Skill Matching**: Based on the analysis, appropriate skills are selected for processing
3. **Decision Logic**: The system evaluates whether the task can be processed automatically or requires human intervention
4. **Execution**: Tasks are processed using the selected skills or escalated to the Needs Action folder

### Skill-Based Architecture
The AI's capabilities are organized into discrete, reusable skills:

- **Task Extraction Skill**: Identifies and extracts actionable items from unstructured text
- **Summarization Skill**: Creates concise summaries of longer documents using frequency-based algorithms
- **Planning Skill**: Generates step-by-step plans from objectives with time estimates and priorities

### Real-Time Monitoring
The system uses the `chokidar` library to monitor file system changes in real-time, ensuring immediate response to new tasks without the need for periodic polling.

### Enhanced Error Handling & Logging
- **Centralized Logging**: All system events are logged with timestamps and severity levels
- **Graceful Error Recovery**: Errors are caught and logged without crashing the system
- **Structured Error Responses**: All operations return consistent response objects
- **Comprehensive Monitoring**: System health and performance metrics are tracked

## Bronze Tier Compliance Checklist

✅ **Core Functionality**:
- File system monitoring implemented
- Task processing capabilities included
- Markdown-based vault system operational

✅ **AI Elements**:
- Task extraction using pattern recognition
- Content summarization algorithm
- Planning and scheduling assistance
- Decision-making logic for task routing

✅ **Modular Architecture**:
- Clean separation of concerns
- Independent, reusable components
- Well-documented interfaces

✅ **Documentation**:
- Comprehensive README
- Inline code comments
- Architecture documentation
- Usage instructions

✅ **Code Quality**:
- Production-ready formatting
- Error handling implemented
- Structured responses
- Consistent coding standards

✅ **System Integration**:
- All components work together seamlessly
- Proper dependency management
- Standard Node.js project structure

## Future Improvements

### Short-Term Enhancements
- **Natural Language Processing**: Implement more sophisticated NLP for better task understanding
- **Machine Learning**: Train models to improve task categorization accuracy over time
- **Notification System**: Add email or messaging capabilities for task updates
- **Web Interface**: Develop a simple dashboard for visual task management

### Long-Term Vision
- **Advanced Skills**: Expand the skill library with capabilities like calendar integration, email automation, and research assistance
- **Collaboration Features**: Enable multiple users to share and collaborate on tasks
- **API Integration**: Connect with popular productivity tools (Google Calendar, Trello, Slack)
- **Predictive Analytics**: Anticipate user needs based on historical patterns

### Technical Improvements
- **Database Backend**: Transition from file-based to database storage for scalability
- **Cloud Deployment**: Containerize the system for cloud deployment options
- **Enhanced Security**: Implement encryption and access controls for sensitive tasks
- **Performance Optimization**: Improve processing speed for large documents

## Contributing

We welcome contributions to the Personal AI Employee project! To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built for the Bronze Tier Hackathon
- Inspired by PKM (Personal Knowledge Management) systems
- Powered by Node.js and the open-source ecosystem

---

*Made with ❤️ for the Bronze Tier Hackathon 2026*