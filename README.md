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


## 🎨 **How to Use**

1. Open the live demo: [Queueing Theory Simulator](https://ahmedmohammefarouq.github.io/Queueing-Theory/)
2. Select the **queue model**: M/M/1 or M/M/1/K.
3. Enter the **arrival time**, **service time**, **capacity**, and other required parameters.
4. Click **"Calculate Performance Measures"**.
5. View the **results** and **diagram** showing system behavior.

---

## 📊 **Screenshots**
### Deterministic Queue Model

<img width="1895" height="928" alt="image" src="https://github.com/user-attachments/assets/095ff9ad-1540-4323-9133-cd68468b3ec5" />
<img width="1896" height="925" alt="image" src="https://github.com/user-attachments/assets/aee1ac8a-be52-48ed-9277-1fa51592b44f" />

  - #### Case One  { Arrival time (1/λ) < Service time (1/μ)}

<img width="1902" height="930" alt="image" src="https://github.com/user-attachments/assets/2cc84b4d-c580-4345-aaf2-6aa63f6e71d3" />

<img width="1900" height="929" alt="image" src="https://github.com/user-attachments/assets/84564cdd-0c0f-4627-abd9-c907dc92905e" />

<img width="1900" height="930" alt="image" src="https://github.com/user-attachments/assets/a6818169-ee6a-492d-a2c2-4e9154f25012" />

  
  - #### Case two  { Arrival time (1/λ) >= Service time (1/μ)}
    
<img width="1899" height="929" alt="image" src="https://github.com/user-attachments/assets/95f64483-5105-479a-8904-73e6249686f0" />

<img width="1900" height="823" alt="image" src="https://github.com/user-attachments/assets/df386549-4058-4ed7-a72c-191c2084f5eb" />

<img width="1900" height="929" alt="image" src="https://github.com/user-attachments/assets/ef596b70-61c8-460d-9f1a-3d90fced0460" />

### Stochastic Models (M/M/1 & M/M/1/K)

<img width="1919" height="926" alt="image" src="https://github.com/user-attachments/assets/978b16b9-ac29-48a0-bdea-77ae20c328f1" />

  - #### Case One  {M/M/1 }

<img width="1902" height="633" alt="image" src="https://github.com/user-attachments/assets/47fe9291-3305-4a9b-ad9c-41082a9f15bb" />

<img width="1908" height="631" alt="image" src="https://github.com/user-attachments/assets/bf20a532-2d0d-4823-8a76-e8f802b2255e" />

  - #### Case One  {M/M/1/K }

<img width="1899" height="624" alt="image" src="https://github.com/user-attachments/assets/73605aac-b578-4840-8e09-a9cac5a4b96c" />

<img width="1898" height="805" alt="image" src="https://github.com/user-attachments/assets/b449cfc7-393a-4d84-bb59-9c16e5d45119" />


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

