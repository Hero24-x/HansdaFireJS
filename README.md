# HansdaFireJS 🔥

A simple yet powerful Node.js-based JavaScript firewall built for ethical hackers, bug bounty hunters, and cybersecurity students.  
Detect and block malicious requests (XSS, SQLi, LFI, etc.) using signature-based filtering.

> Author: **Shibnath Hansda** [`@hansdatechs`](https://github.com/hansdatechs)

---

## 🚀 Features

- 🔒 Detects common attack patterns (XSS, SQLi, LFI, etc.)
- 🌐 Works as middleware in Express.js
- ⏱️ Basic IP-based rate limiting
- 🧾 Real-time console logging
- ⚡ Lightweight, fast, and easy to integrate

---

## 📁 Folder Structure

HansdaFireJS/
│
├── core/
│ ├── firewall.js
│ ├── rules.js
│ └── rateLimiter.js
│
├── utils/
│ └── logger.js
│
├── index.js 
├── package.json 
└── README.md 
---
---
## ⚙️ Installation

> Step-by-step to get it running:

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/HansdaFireJS.git
cd HansdaFireJS

# 2. Initialize and install required packages
npm install express

# 3. Start the server
node index.js

---

```yaml
🧠 Usage
Launch with node | index.js |
The firewall will monitor every request coming to your server
If a malicious payload is detected, it will log and block it

✍️ Customization
You can add or modify attack signatures in:

## bash
core/rules.js


Rate limits per IP can be configured in

## bash
core/rateLimiter.js

👨‍💻 Author
Shibnath Hansda — @hansdatechs
Cybersecurity educator, ethical hacker, and creator of advanced Termux-based tools.

📜 License
MIT License
Use it freely. Modify it. Share it. Just don’t misuse it. Stay ethical. 🧠⚔️









