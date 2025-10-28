# Dallas Student Guide - AI-Powered App for International Students

An AI-powered web application designed to help international students navigate life in Dallas, Texas. Built with React and AWS services, this app provides assistance with housing, groceries, transportation, legal requirements, and cultural adaptation.

## 🌟 Features

- **Interactive AI Chat**: Powered by your custom AI agent endpoint
- **Category-Based Navigation**: Organized topics including:
  - 🏠 Housing
  - 🛒 Groceries
  - 🚗 Transportation
  - 📋 Legal Requirements
  - 🎭 Cultural Tips
- **Quick Prompts**: Pre-loaded questions for each category
- **Responsive Design**: Works seamlessly on mobile and desktop
- **Beautiful UI**: Modern, gradient-based design with smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- AWS Amplify CLI (for deployment)
- Your AI agent endpoint URL

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd amplify-chat-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure your AI agent endpoint**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your AI agent endpoint:
   ```
   REACT_APP_AI_AGENT_ENDPOINT=https://your-agent-endpoint.amazonaws.com/invoke
   REACT_APP_AI_AGENT_API_KEY=your-api-key-here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```
   
   The app will open at `http://localhost:3000`

## 🔧 Configuration

### AI Agent Integration

The app communicates with your AI agent through the `src/services/aiService.js` file. You may need to modify the request/response structure based on your specific agent's API:

```javascript
// In src/services/aiService.js
const payload = {
  message: message,
  category: category,
  context: 'Dallas International Student Guide'
};
```

Common response formats:
- `response.data.response`
- `response.data.message`
- `response.data.text`
- `response.data.output`

Update the response extraction logic in `aiService.js` to match your agent's format.

## 📦 Deployment to AWS Amplify

### Option 1: Using Amplify Console (Recommended)

1. **Initialize Amplify** (if not already done)
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize your project**
   ```bash
   amplify init
   ```
   Follow the prompts:
   - Enter a name for the project: `dallas-student-guide`
   - Enter a name for the environment: `dev`
   - Choose your default editor
   - Choose the type of app: `javascript`
   - Framework: `react`
   - Source Directory Path: `src`
   - Distribution Directory Path: `build`
   - Build Command: `npm run build`
   - Start Command: `npm start`

3. **Add hosting**
   ```bash
   amplify add hosting
   ```
   Choose:
   - Hosting with Amplify Console
   - Manual deployment

4. **Build and deploy**
   ```bash
   npm run build
   amplify publish
   ```

### Option 2: Connect to Git Repository

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" → "Host web app"
3. Connect your Git repository (GitHub, GitLab, Bitbucket, etc.)
4. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: build
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
5. Add environment variables in Amplify Console:
   - `REACT_APP_AI_AGENT_ENDPOINT`
   - `REACT_APP_AI_AGENT_API_KEY` (if needed)

### Option 3: Manual S3 + CloudFront Deployment

```bash
# Build the app
npm run build

# Deploy to S3 (requires AWS CLI)
aws s3 sync build/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## 🎨 Customization

### Modify Categories

Edit `src/config.js` to add or modify categories:

```javascript
CATEGORIES: [
  {
    id: 'housing',
    name: 'Housing',
    icon: '🏠',
    description: 'Your description here',
    prompts: [
      'Question 1',
      'Question 2',
      'Question 3'
    ]
  },
  // Add more categories...
]
```

### Styling

- Main colors and gradients: `src/App.css`, `src/index.css`
- Component styles: Individual CSS files in `src/components/`
- Adjust the gradient in `src/index.css` to match your brand

### AI Agent Response Format

If your AI agent returns data in a different format, update `src/services/aiService.js`:

```javascript
// Example for different response structure
const responseText = response.data.choices[0].message.content; // OpenAI format
// or
const responseText = response.data.completion; // Anthropic format
```

## 📱 Features Roadmap

- [ ] User authentication
- [ ] Save conversation history
- [ ] Multi-language support
- [ ] Voice input/output
- [ ] Location-based recommendations
- [ ] Integration with local services APIs
- [ ] Push notifications for important updates

## 🐛 Troubleshooting

### "AI Agent endpoint not configured" error
- Make sure you've created a `.env` file
- Ensure `REACT_APP_AI_AGENT_ENDPOINT` is set correctly
- Restart the development server after changing `.env`

### CORS errors
- Configure CORS on your AI agent endpoint
- Allow origin: `http://localhost:3000` (development) and your production domain
- Allow methods: `POST, OPTIONS`
- Allow headers: `Content-Type, Authorization`

### Build errors
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with React and AWS services
- Icons from emoji set
- Inspired by the needs of international students in Dallas

## 📞 Support

For questions or issues, please open an issue on GitHub or contact the development team.

---

**Made with ❤️ for international students in Dallas**

