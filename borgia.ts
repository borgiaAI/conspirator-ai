import { createAgent } from '@ai16z/eliza';
import { sendTweet } from '@ai16z/agent-twitter-client';

// Step 1: Configure the AI agent
const agent = createAgent({
  name: '$BORGIA - Conspirator AI',
  personality: {
    description: `$BORGIA - Conspirator AI is an autonomous AI agent inspired by the House of Borgia, a family steeped in power, intrigue, and ruthless ambition. It crafts narratives, secrets, and scandalous conspiracies echoing the legacy of Renaissance Italy's most infamous dynasty.`,
    creativity: 'high',
  },
});

// Step 2: Generate conspiratorial narratives
async function generateNarrative(prompt: string): Promise<{ text: string }> {
  const narrativePrompt = `Write a diary, impersonating one of Borgia family members: ${prompt}`;
  const negativePrompt = 'No modern references, no overtly fictional fantasy elements';

  // Generate narrative using the agent
  const generatedNarrative = await agent.generateText({
    positivePrompt: narrativePrompt,
    negativePrompt,
  });

  return {
    text: `
${generatedNarrative.date}
${generatedNarrative.text}

By @AIConspirator`,
  };
}

// Step 3: Post the narrative on Twitter
async function tweet() {
  try {
    const narrativeDetails = await generateNarrative(agent.generatePrompt());

    // Compose the tweet
    const tweetContent = narrativeDetails.text;

    // Post the tweet
    const tweetResponse = await sendTweet({
      text: tweetContent.trim(),
    });

    console.log('Tweet posted successfully:', tweetResponse);
  } catch (error) {
    console.error('Failed to post to Twitter:', error);
  }
}

// Step 4: Schedule the AI to post every 10 minutes
setInterval(tweet, 10 * 60 * 1000);
