```mermaid
sequenceDiagram
Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
Server->>Browser: html
Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
Server->>Browser: spa.js
Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
Server->>Browser: main.css
Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
Server->>Browser: data.json
```