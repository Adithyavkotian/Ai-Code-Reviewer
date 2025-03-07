const generateContent = require('../src/service/ai.service');

module.exports.generateContent = async (req, res) => {
    const prompt = req.body.prompt;
    
    if (!prompt) {
        res.status(400).send('Prompt is required');
        return;
    }
    
    try {
        // Await the result of the async function
        const result = await generateContent(prompt);
        res.send(result);
    } catch (error) {
        res.status(500).send('Error generating content');
    }
};