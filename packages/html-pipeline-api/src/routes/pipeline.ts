import express from 'express';

const router = express.Router();

// Endpoint for text conversion
router.post('/convert-text', (req, res) => {
    const { text } = req.body;
    // Logic for text conversion
    res.json({ convertedText: text }); // Placeholder response
});

// Endpoint for sanitization
router.post('/sanitize', (req, res) => {
    const { text } = req.body;
    // Logic for sanitizing text
    const sanitizedText = text.replace(/<[^>]+>/g, ''); // Simple example
    res.json({ sanitizedText });
});

// Endpoint for markdown to HTML transformation
router.post('/markdown-to-html', (req, res) => {
    const { markdown } = req.body;
    // Logic for converting markdown to HTML
    const html = markdown; // Placeholder for markdown transformation logic
    res.json({ html });
});

export default router;