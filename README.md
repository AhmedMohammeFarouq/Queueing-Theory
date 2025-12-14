# 🚦 **Queueing Theory Simulator**

A **web-based simulator** for queueing theory, focusing on **stochastic models (M/M/1 & M/M/1/K)**. This tool allows users to calculate system performance measures and visualize customer arrivals, service times, and queue behavior.

---

## ⚡ **Features**

- Choose between **M/M/1** and **M/M/1/K** models.
- Input system parameters:
  - Arrival time (1/λ)
  - Service time (1/μ)
  - System capacity (K) for M/M/1/K
- Calculate key performance metrics:
  - ρ (utilization)
  - L (average number of customers)
  - Lq (average number in queue)
  - W (average time in system)
  - Wq (average waiting time in queue)
- Visual diagram showing **n(t)**, customer arrivals, and service times.
- Input validation to prevent incorrect or impossible values.
- Dynamic **case analysis** for different system behaviors.

---

## 🧩 **Logic and Workflow**

1. **Input Parameters**
   - Users enter arrival time, service time, system capacity, and the number of customers.
2. **Validation**
   - Ensures all inputs are numeric and valid according to the selected model.
3. **Calculate Performance Measures**
   - For **M/M/1**, compute ρ, L, Lq, W, and Wq.
   - For **M/M/1/K**, compute ρ, P₀, Pₖ, λ′, L, Lq, W, and Wq.
4. **Case Identification**
   - Determines if the system is fast arrivals, fast service, or critical (1/λ = 1/μ).
5. **Diagram Generation**
   - Draws **customer arrivals** and **service events** as arrows.
   - Visualizes **n(t)** (number of customers in the system over time).
6. **Output**
   - Displays metrics in a **clean, structured layout**.
   - Updates dynamically when input values change.

---

## 🛠️ **Technologies Used**

- **HTML5 & CSS3** for structure and styling
- **JavaScript** for calculations and dynamic visualizations
- **Bootstrap 5** for responsive design and components
- **Bootstrap Icons** for visual cues

---
## 🖼 Screenshots


---

## 🎨 **How to Use**

1. Open the live demo: [Queueing Theory Simulator](https://ahmedmohammefarouq.github.io/Queueing-Theory/)
2. Select the **queue model**: M/M/1 or M/M/1/K.
3. Enter the **arrival time**, **service time**, **capacity**, and other required parameters.
4. Click **"Calculate Performance Measures"**.
5. View the **results** and **diagram** showing system behavior.

---

## 📊 **Screenshots**

![Queueing Simulator Screenshot](screenshot.png)

---

## 🔗 **Live Demo**

[https://ahmedmohammefarouq.github.io/Queueing-Theory/](https://ahmedmohammefarouq.github.io/Queueing-Theory/)

---

## 📂 **Project Structure**

```css
/assets
  /css
    bootstrap.min.css
    style.css
  /js
    script.js
index.html
stoch.html
README.md

