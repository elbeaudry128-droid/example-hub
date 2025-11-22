# HTML Pipeline API Wrapper

This package provides an Express API wrapper for the html-pipeline.

## Installation

```bash
npm install html-pipeline-api
```

## Usage

```javascript
const express = require('express');
const { HtmlPipeline } = require('html-pipeline');

const app = express();
const pipeline = new HtmlPipeline();

app.post('/api/process', (req, res) => {
    const { html } = req.body;
    const processedHtml = pipeline.process(html);
    res.send({ processedHtml });
});

app.listen(3000, () => {
    console.log('HTML Pipeline API listening on port 3000');
});
```

## License

MIT License