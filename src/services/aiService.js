import axios from 'axios';
import { config } from '../config';

/**
 * Send a message to the AI Agent and get a response
 * @param {string} message - The user's message
 * @param {string} category - The selected category (housing, groceries, etc.)
 * @returns {Promise<string>} - The AI agent's response
 */
export const sendMessageToAgent = async (message, category) => {
  try {
    // Check if endpoint is configured
    if (!config.AI_AGENT_ENDPOINT || config.AI_AGENT_ENDPOINT === 'YOUR_AGENT_ENDPOINT_HERE') {
      throw new Error('AI Agent endpoint not configured. Please set REACT_APP_AI_AGENT_ENDPOINT in your .env file.');
    }

    // Prepare the request payload
    // Adjust this structure based on your actual AI agent's API requirements
    const payload = {
      message: message,
      category: category,
      context: 'Dallas International Student Guide',
      timestamp: new Date().toISOString()
    };

    // Prepare headers
    const headers = {
      'Content-Type': 'application/json',
    };

    // Add API key if configured
    if (config.AI_AGENT_API_KEY) {
      headers['Authorization'] = `Bearer ${config.AI_AGENT_API_KEY}`;
      // Or use: headers['X-API-Key'] = config.AI_AGENT_API_KEY;
      // Adjust based on your agent's authentication method
    }

    // Make the API call
    const response = await axios.post(
      config.AI_AGENT_ENDPOINT,
      payload,
      { headers }
    );

    // Extract the response text
    // Adjust this based on your actual AI agent's response structure
    // Common patterns:
    // - response.data.message
    // - response.data.response
    // - response.data.text
    // - response.data.output
    
    const responseText = response.data.response || 
                        response.data.message || 
                        response.data.text ||
                        response.data.output ||
                        JSON.stringify(response.data);

    return responseText;

  } catch (error) {
    console.error('Error calling AI Agent:', error);
    
    // Provide helpful error messages
    if (error.message.includes('endpoint not configured')) {
      throw new Error(error.message);
    } else if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(`AI Agent Error: ${error.response.status} - ${error.response.data?.message || 'Unknown error'}`);
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response from AI Agent. Please check your network connection and endpoint URL.');
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error(`Request Error: ${error.message}`);
    }
  }
};

/**
 * Alternative: If your AI agent uses AWS Bedrock or similar service
 * Uncomment and modify this function as needed
 */
/*
export const sendMessageToBedrockAgent = async (message, category) => {
  try {
    const response = await fetch(config.AI_AGENT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-amz-bedrock-agent-session-id': sessionStorage.getItem('sessionId') || generateSessionId(),
      },
      body: JSON.stringify({
        inputText: message,
        enableTrace: false,
        sessionState: {
          sessionAttributes: {
            category: category
          }
        }
      })
    });

    const data = await response.json();
    return data.completion || data.output || 'No response received';
  } catch (error) {
    console.error('Error calling Bedrock Agent:', error);
    throw error;
  }
};

const generateSessionId = () => {
  const sessionId = `session-${Date.now()}-${Math.random().toString(36).substring(7)}`;
  sessionStorage.setItem('sessionId', sessionId);
  return sessionId;
};
*/

