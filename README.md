# **$BORGIA - Conspirator AI**
![Conspirator AI](header.jpg)

## **Overview**

**$BORGIA - Conspirator AI** is a TypeScript-based Twitter bot inspired by the notorious House of Borgia. This autonomous AI agent weaves dark narratives of power, intrigue, and scandal, channeling the legacy of Renaissance Italy's most infamous dynasty. Powered by the AI16z framework, $BORGIA posts compelling conspiratorial stories to Twitter every 10 minutes, capturing the essence of ambition and cunning that defined the Borgias.

Our Twitter: https://x.com/BorgiaAI

---

## **Features**

- **Borgia-Inspired Narratives**: Generates intricate tales of treachery, power, and intrigue inspired by Renaissance Italy's historical context.
- **Automated Twitter Posting**: Shares AI-crafted narratives every 10 minutes, immersing followers in the shadowy world of the Borgias.
- **Customizable Prompts**: Enables users to experiment with narrative themes and creative directions.
- **Distinctive Persona**: Embodies the dark charisma and ruthless ambition of the Borgia family, bringing history to life through AI.

---

## **Setup**

### **1. Clone the Repository**

```bash
git clone https://github.com/borgiaAI/conspirator-ai.git
cd "conspirator-ai"
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Configure Twitter API**

Create a `.env` file and add your Twitter API credentials:

```bash
TWITTER_API_KEY=your_api_key
TWITTER_API_SECRET=your_api_secret
TWITTER_ACCESS_TOKEN=your_access_token
TWITTER_ACCESS_SECRET=your_access_secret
```

### **4. Run the Bot**

```bash
npm start
```

---

## **Code Breakdown**

### **Agent Configuration**

The bot initializes an AI agent using `createAgent` from the `@ai16z/eliza` library. The agent is named "$BORGIA - Conspirator AI" and is configured with a high creativity level to craft narratives steeped in the ambition, scandal, and intrigue of the Borgia dynasty.

---

### **Narrative Generation**

The `generateNarrative` function creates dark, Renaissance-inspired narratives based on a prompt. Each output includes:

- **`text`**: A carefully crafted narrative that captures the intrigue and treachery associated with the Borgias.

---

### **Posting Tweets**

The `tweet` function posts AI-generated narratives to Twitter. Each tweet includes:

- The generated narrative.
- Proper attribution to the AI project.

---

### **Automation**

The bot uses `setInterval` to post every 10 minutes. This interval can be adjusted to modify the posting frequency.

---

## **Example Tweet Format**

```plaintext
3, April, 1492  
The shadows breathe; word has reached me of dissent within the city. Time to fan the flames. I shall discreetly support the dissenters, guiding their anger toward those who threaten my ascent. Confusion is a fertile ground for my ambition.

By @BorgiaAISol
```

---

## **Customization Options**

1. **Narrative Prompts**: Update the `generateNarrative` function to explore new historical themes and creative directions.
2. **Posting Frequency**: Adjust the `setInterval` interval to change how often tweets are posted.
3. **Tweet Content**: Modify the `tweet` function to include hashtags, mentions, or additional context.

---

## **Future Enhancements**

1. **Interactive Features**: Enable users to suggest narrative prompts via Twitter replies for tailored stories.
2. **Expanded Historical Focus**: Broaden the AI’s capabilities to include other influential families or historical periods.
3. **Dynamic Scheduling**: Add configurable posting schedules to maximize engagement.
4. **Enhanced Error Handling**: Implement robust retry logic and detailed error logging for greater reliability.

---

## **Troubleshooting**

- **Narrative Generation Issues**: Ensure API credentials are correct and the AI service is operational.
- **Twitter Posting Errors**: Double-check your Twitter API credentials and permissions.
- **Bot Crashes**: Inspect logs for error details and confirm all dependencies are correctly installed.

---

Thank you for exploring **$BORGIA - Conspirator AI**. Contributions and suggestions are welcome! Feel free to submit a pull request or open an issue.

