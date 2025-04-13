In this project, let's build a **Gradient Generator** app by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/gradient-generator-output-v0.gif" alt="gradient-generator" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

Install dependencies


- Download dependencies by running `npm install`
- Start up the app using `npm start`


## 🚀 Features

- Select gradient direction (Top, Bottom, Right, Left)
- Choose "from" and "to" colors using color pickers
- Real-time CSS gradient preview
- Responsive and styled using `styled-components`

---

## 📂 Folder Structure

gradient-generator/<br/>
├── public/<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;└── index.html<br/>
├── src/<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;├── components/<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── GradientGenerator/<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── index.js<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;└── styledComponents.js<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── GradientDirectionItem/<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── index.js<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;└── styledComponents.js<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;├── utils/<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;└── constants.js<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;├── App.js<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;├── index.js<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;└── index.css<br/>
├── package.json<br/>
└── README.md


---

## 🛠️ Installation & Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/gradient-generator.git
   cd gradient-generator

<br/>
🧪 Testing Criteria
✅ Initially, the selected gradient direction is Top
✅ Default colors are #8ae323 and #014f7b
✅ Clicking "Generate" applies the selected gradient to the background
✅ Active direction button has opacity: 1, inactive ones opacity: 0.5
✅ Container element has data-testid="gradientGenerator"

🧰 Built With
React

styled-components

CSS Linear Gradients

JavaScript (ES6)



<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/gradient-generator-component-breakdown-structure.png" alt="gradetient-generator-component-breakdown-structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>



<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/GradientGenerator/index.js`
- `src/components/GradientGenerator/styledComponents.js`
- `src/components/GradientDirectionItem/index.js`
- `src/components/GradientDirectionItem/styledComponents.js`






### Resources


<summary>Colors</summary>

<br/>

<div style="background-color: #8ae323; width: 150px; padding: 10px; color: black">Hex: #8ae323</div>
<div style="background-color: #014f7b; width: 150px; padding: 10px; color: white">Hex: #014f7b</div>
<div style="background-color: #ededed; width: 150px; padding: 10px; color: black">Hex: #ededed</div>
<div style="background-color: #334155; width: 150px; padding: 10px; color: white">Hex: #334155</div>
<div style="background-color: #ffffff79; width: 150px; padding: 10px; color: black">Hex: #ffffff79</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #00c9b7; width: 150px; padding: 10px; color: black">Hex: #00c9b7</div>




<summary>Font-families</summary>

- Roboto

📄 License
This project is open source and available under the MIT License.
