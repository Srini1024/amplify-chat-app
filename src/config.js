// Configuration file for AI Agent endpoint
export const config = {
  // Replace this with your actual AI agent endpoint URL
  AI_AGENT_ENDPOINT: process.env.REACT_APP_AI_AGENT_ENDPOINT || 'YOUR_AGENT_ENDPOINT_HERE',
  
  // Optional: Add authentication headers if needed
  AI_AGENT_API_KEY: process.env.REACT_APP_AI_AGENT_API_KEY || '',
  
  // Categories for the student guide
  CATEGORIES: [
    {
      id: 'housing',
      name: 'Housing',
      icon: '🏠',
      description: 'Find apartments, understand lease agreements, and get housing tips',
      prompts: [
        'Where can I find affordable housing near universities?',
        'What should I know about lease agreements?',
        'How do I set up utilities in Dallas?'
      ]
    },
    {
      id: 'groceries',
      name: 'Groceries',
      icon: '🛒',
      description: 'Discover grocery stores, international markets, and food shopping tips',
      prompts: [
        'Where can I find international grocery stores?',
        'What are the best budget-friendly grocery stores?',
        'Where can I buy ingredients from my home country?'
      ]
    },
    {
      id: 'transportation',
      name: 'Transportation',
      icon: '🚗',
      description: 'Learn about DART, driving licenses, and getting around Dallas',
      prompts: [
        'How does the DART system work?',
        'How do I get a Texas driver\'s license?',
        'What are the best transportation options for students?'
      ]
    },
    {
      id: 'legal',
      name: 'Legal Requirements',
      icon: '📋',
      description: 'Understand visa requirements, SSN, taxes, and legal obligations',
      prompts: [
        'How do I apply for a Social Security Number?',
        'What are my visa obligations as a student?',
        'Do I need to file taxes as an international student?'
      ]
    },
    {
      id: 'cultural',
      name: 'Cultural Tips',
      icon: '🎭',
      description: 'Learn about American culture, social norms, and local events',
      prompts: [
        'What cultural differences should I be aware of?',
        'Where can I meet other international students?',
        'What are popular activities in Dallas?'
      ]
    }
  ]
};

