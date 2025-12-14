const calc = document.getElementById("conte");
const capacity = document.getElementById("capacity");
const arrivalss = document.getElementById("arrivals");
const servicee = document.getElementById("service");
const m = document.getElementById("m");
const time = document.getElementById("time");
const number = document.getElementById("number");
const kendellNotation = document.getElementById("kendellNotation");
const container = document.getElementById("diagram");

let timeti;
let time2ti;
let num;
let num2;

function calcti() {
  if (+arrivalss.value < +servicee.value) {
    for (let i = 500; i >= 10; i--) {
      let x = Math.floor(i / +arrivalss.value);
      let y = Math.floor(
        i / +servicee.value - +arrivalss.value / +servicee.value
      );
      let valueOfti = x - y;

      if (+capacity.value + 1 === valueOfti) {
        timeti = i;
      }
    }

    console.log("timeti =", timeti);
  } else {
    for (let i = 500; i >= 10; i--) {
      let x = Math.floor(i / +servicee.value);
      let y = Math.floor(i / +arrivalss.value);
      let valueOfti2 = x - y;

      if (+m.value === valueOfti2) {
        time2ti = i;
        // break; // ✅ stop loop
      }
    }

    console.log("time2ti =", time2ti);
  }
}

////////////////////////////////
//clic Event
document.getElementById("btn").addEventListener("click", function () {
  if (validate()) {
    drawFullDiagram();
    calcti();
    calcWaiting();
    calcTime();
    displayCalc();
  } else {
    console.log("enter all inputs");
    document.getElementById("conte").innerHTML = `
                  <div class="col-lg-12 pt-3">
            <h2 class=" fs-1 text-center bg-secondary rounded p-2 ">
            Please Enter the required inpouts</h2>
          </div>
      `;
  }
  console.log(validate());
});

//calc n(t)

let nOfT;

function calcTime() {
  if (arrivalss.value < servicee.value) {
    if (+time.value < +arrivalss.value) {
      nOfT = 0;
      console.log("Casssssssssssse 1");
    } else if (+time.value >= +arrivalss.value && +time.value < timeti) {
      console.log("Casssssssssssse 2");
      nOfT =
        Math.floor(+time.value / +arrivalss.value) -
        Math.floor((+time.value - +arrivalss.value) * (1 / +servicee.value));
    } else if (+time.value >= timeti) {
      if (+servicee.value % +arrivalss.value === 0) {
        console.log("spciall casse ");
        nOfT = ` (k-1) =${+capacity.value}`;
        // n;
      } else {
        console.log("cassssssssssssssssssssee3");
        nOfT = `(k-1)or(k-2) = ${+capacity.value - 1} Or ${+capacity.value}`;
      }
    }
  } else {
    if (+time.value >= time2ti) {
      nOfT = `0 or 1`;
      console.log("> case oneeeeeeeeeeeeeeeeeeeeeee");
    } else {
      let x = Math.floor(+time.value / +servicee.value);
      let y = Math.floor(+time.value / +arrivalss.value);
      nOfT = +m.value + y - x;
      console.log("> case two00000000000000000000");
      console.log(nOfT);
    }
  }
}
// calcTime();
//////////////////////////////////////////
let wqOfn;

function calcWaiting() {
  num = Math.round((1 / +arrivalss.value) * +timeti);
  console.log("n1 =", num);
  num2 = Math.round((1 / +arrivalss.value) * +time2ti);
  console.log("n2 =", num2);
  if (arrivalss.value < servicee.value) {
    if (+number.value === 0) {
      wqOfn = 0;
    } else if (+number.value < num) {
      wqOfn = (+servicee.value - +arrivalss.value) * (+number.value - 1);
    } else {
      if (+servicee.value % +arrivalss.value === 0) {
        console.log("special case");
        wqOfn = (+servicee.value - +arrivalss.value) * (num - 2);
      } else {
        console.log("case 3");
        wqOfn = `${(+servicee.value - +arrivalss.value) * (num - 2)} or ${
          (+servicee.value - +arrivalss.value) * (num - 3)
        }`;
      }
    }

    console.log("wqOfn =", wqOfn);
  } else {
    if (+number.value === 0) {
      wqOfn = (+m.value - 1) / ((2 * 1) / +servicee.value);
      console.log("Case 1");
    } else if (+number.value > num2) {
      wqOfn = 0;
      console.log("Case 2");
    } else if (+number.value <= num2) {
      wqOfn =
        (+m.value - 1 + +number.value) * +servicee.value -
        +number.value * +arrivalss.value;
      console.log("case 3");
    }
  }
}

//////////////////////////////////////////
function displayCalc() {
  calcTime();
  document.getElementById("conte").innerHTML = `
              <div class="col-lg-12 pt-3">
            <h2 class=" fs-1 text-center bg-secondary rounded p-2 ">${
              servicee.value < arrivalss.value
                ? "Case  (1/&lambda; > 1/ &mu;)"
                : servicee.value % arrivalss.value === 0
                ? "Case  (1/&lambda; < 1/ &mu;), And This Is Special Case [m(1/&lambda;) = 1/ &mu; ]"
                : "Case  (1/&lambda; < 1/ &mu;) "
            }</h2>
          </div>
              <div class="col-lg-6 pt-3">
            <h3>The Arrival rate (&lambda;) = 1 / ${
              arrivalss.value ? arrivalss.value : "&lambda;"
            }</h3>
          </div>
          <div class="col-lg-6 pt-3">
            <h3>The Service rate (&mu;) = 1 / ${
              servicee.value ? servicee.value : "&mu;"
            }</h3>
          </div>
        
              <div class="col-lg-6 pt-3">
            <h3>t<span class=" fs-5 ">i</span> = ${
              +arrivalss.value >= servicee.value ? time2ti : timeti
            }</h3>
          </div>
          <div class="col-lg-6 pt-3">
            <h3>n = ${+arrivalss.value >= servicee.value ? num2 : num}</h3>
          </div>
        
          <div class="col-lg-12 mt-3 pb-3">
            <h3 class="fw-bold">
              Number Of Customers In The System At n(${
                time.value ? time.value : "t"
              })=  ${nOfT}
            </h3>
          </div>
          <div class="col-lg-12 mt-3 pb-3">
            <h3 class="fw-bold  ">
              The Waiting To Customers  W<sub>q</sub>(${
                number.value ? number.value : "n"
              })=  ${wqOfn}
            </h3>
          </div>
  `;
}
// helper arrow drawing

function drawFullDiagram() {
  let arrivals = [];
  let service = [+arrivalss.value];
  let serviceListForCaseTwo1 = [];
  let serviceListForCaseTwo = [];
  let arrivalsListForCaseTwo = [];
  let arrivalsListForCaseTwo1 = [];
  for (let i = 1; i <= 90; i++) {
    arrivals.push(+arrivalss.value * i);
    service.push(+arrivalss.value + +servicee.value * i);
  }
  for (let i = 0; i < m.value; i++) {
    serviceListForCaseTwo1.push(+servicee.value * i + 1);
    if (arrivals[i] < +m.value * +servicee.value) {
      arrivalsListForCaseTwo.push(
        +m.value * +servicee.value + +servicee.value * (i + 1)
      );
    }
  }
  for (let i = 1; i <= 90; i++) {
    if (arrivals[i] >= +m.value * +servicee.value) {
      arrivalsListForCaseTwo1.push(+arrivals[i] + +servicee.value);
    }
  }
  serviceListForCaseTwo = serviceListForCaseTwo1
    .concat(arrivalsListForCaseTwo)
    .concat(arrivalsListForCaseTwo1);

  container.innerHTML = "";
  const layers = ["A customer arrives", "A customer enters to be served"];
  function drawArrows(rowIndex, data, color) {
    const rows = container.children;
    const row = rows[rowIndex];
    row.style.overflow = "hidden";
    row.style.borderLeft = "3px solid black";
    data.forEach((t, i) => {
      const wrap = document.createElement("div");
      wrap.style.position = "absolute";
      wrap.style.left = t * 12.5 + "px";
      wrap.style.top = "45px";
      wrap.style.textAlign = "center";

      const label = document.createElement("div");
      label.innerText = "C" + (i + 1);
      label.style.marginLeft = "-5px";
      label.style.fontSize = "15px";
      label.style.color = color[i];

      const arrow = document.createElement("div");
      arrow.style.width = "2px";
      arrow.style.height = "71px";

      arrow.style.background = color[i];

      wrap.appendChild(label);
      wrap.appendChild(arrow);
      row.appendChild(wrap);
    });
  }
  // create rows
  layers.forEach((title) => {
    const row = document.createElement("div");
    row.style.position = "relative";
    row.style.height = "140px";
    row.style.borderBottom = "2px solid #000";

    const label = document.createElement("div");
    label.innerText = title;
    label.style.position = "absolute";
    label.style.left = "0";
    label.style.top = "0";
    row.appendChild(label);

    for (let i = 0; i <= 90; i += 2) {
      const line = document.createElement("div");
      line.style.position = "absolute";
      line.style.left = i * 12.5 + "px";
      line.style.top = "0";
      line.style.bottom = "0";
      line.style.width = "1px";
      line.style.borderLeft = "1px dotted gray";
      row.appendChild(line);
    }

    container.appendChild(row);
  });

  // draw X-axis
  const axis = document.createElement("div");
  axis.className = "d-flex mt-2";
  for (let i = 0; i <= 90; i += 2) {
    const tick = document.createElement("div");
    tick.style.width = "25px";
    tick.style.textAlign = "start";
    tick.innerText = i;
    tick.style.marginTop = "-10px";
    tick.style.marginBottom = "80px";
    tick.style.fontSize = "12px";

    axis.appendChild(tick);
  }
  container.appendChild(axis);

  const colors = [
    "red",
    "blue",
    "green",
    "brown",
    "purple",
    "orange",
    "green",
    "brown",
    "purple",
    "blue",
    "green",
    "brown",
    "purple",
    "orange",
    "brown",
    "purple",
    "blue",
    "green",
    "purple",
    "orange",
    "green",
    "brown",
    "purple",
    "blue",
    "green",
    "brown",
    "purple",
    "orange",
    "brown",
    "purple",
    "blue",
    "green",
    "purple",
    "orange",
    "green",
    "brown",
    "purple",
    "blue",
    "green",
    "brown",
    "purple",
    "orange",
    "brown",
    "purple",
    "blue",
    "green",
    "purple",
    "orange",
    "green",
    "brown",
    "purple",
    "blue",
    "green",
    "brown",
    "purple",
    "orange",
    "brown",
    "purple",
    "blue",
    "green",
    "purple",
    "orange",
    "green",
    "brown",
    "purple",
    "blue",
    "green",
    "brown",
    "purple",
    "orange",
    "brown",
    "purple",
    "blue",
    "green",
    "brown",
    "purple",
    "orange",
    "green",
    "brown",
  ];

  // draw n(t)
  const nChart = document.createElement("div");
  nChart.style.height = "227px";
  nChart.style.borderLeft = "3px solid black";
  nChart.style.borderBottom = "3px solid black";
  nChart.style.position = "relative";
  nChart.style.marginTop = "40px";

  // //////////////////////////////////////

  function buildCase1(arrivals, serviceStart) {
    let nt = [];
    let current = 0; // عدد العملاء الحالي في الطابور
    drawArrows(0, arrivals, colors);
    drawArrows(1, service, colors);
    for (let t = 0; t <= 90; t++) {
      // الطابور لا ينزل تحت الصفر
      if (current < 0) {
        current = 0;
      }
      //  إضافة +1 فقط عند أول وصول
      if (t === arrivals[0]) {
        current++;
      }
      if (servicee.value % arrivalss.value === 0) {
        // فحص هل يوجد عميل دخل الخدمة عند الزمن t
        serviceStart.forEach((s) => {
          if (current < capacity.value) {
            if (s === t) {
              current--; // إنقاص الطابور
            }
          }
        });
        // فحص هل يوجد عميل وصل عند الزمن t
        arrivals.forEach((a) => {
          if (current < capacity.value) {
            if (a === t) {
              current++; // زيادة الطابور
            }
          }
        });
      } else {
        // فحص هل يوجد عميل دخل الخدمة عند الزمن t
        serviceStart.forEach((s) => {
          if (s === t) {
            current--; // إنقاص الطابور
          }
        });
        // فحص هل يوجد عميل وصل عند الزمن t
        arrivals.forEach((a) => {
          if (current < capacity.value) {
            if (a === t) {
              current++; // زيادة الطابور
            }
          }
        });
      }

      // تخزين القيمة
      nt.push({
        t: t,
        count: current,
      });
    }

    return nt;
  }

  function buildCase2(arrivals, serviceStart) {
    console.log("hi in casse 2");
    drawArrows(0, arrivals, colors);
    drawArrows(1, serviceListForCaseTwo, colors);
    let nt = [];
    let current = m.value; // عدد العملاء الحالي في الطابور

    for (let t = 0; t <= 90; t++) {
      serviceStart.forEach((s) => {
        if (s === t) {
          current--; // إنقاص الطابور
        }
      });
      // فحص هل يوجد عميل وصل عند الزمن t
      arrivals.forEach((a) => {
        if (a === t) {
          current++; // زيادة الطابور
        }
      });
      // //  إضافة +1 فقط عند أول وصول
      // if (t === arrivals[0]) {
      //   current++;
      // }
      // فحص هل يوجد عميل دخل الخدمة عند الزمن t

      // الطابور لا ينزل تحت الصفر
      if (current < 0) {
        current = 0;
      }

      // تخزين القيمة
      nt.push({
        t: t,
        count: current,
      });
    }

    return nt;
  }

  if (arrivalss.value >= servicee.value) {
    var nt = buildCase2(arrivals, serviceListForCaseTwo);
  } else {
    var nt = buildCase1(arrivals, service);
  }

  console.log(nt);

  // //////////////////////////////////////

  // draw steps
  nt.forEach((p, i) => {
    if (i === 0) return;
    const step = document.createElement("div");
    step.style.position = "absolute";
    step.style.left = nt[i - 1].t * 12.5 + "px";
    step.style.top = 200 - nt[i - 1].count * 20 + "px";
    step.style.width = "12.5px";
    step.style.height = 2 + nt[i - 1].count * 20 + "px";
    step.style.marginTop = "22.5px";
    step.style.background = "purple";
    nChart.appendChild(step);
  });

  // Y numbers
  for (let y = 1; y <= 13; y++) {
    const yn = document.createElement("div");
    yn.innerText = y;
    yn.style.position = "absolute";
    yn.style.left = "-20px";
    yn.style.top = 200 - y * 20 + "px";
    yn.style.width = "100%";
    yn.style.borderBottom = "1px dotted gray";
    nChart.appendChild(yn);
  }
  for (let y = 0; y <= 90; y += 2) {
    const ylay = document.createElement("div");
    ylay.style.position = "absolute";
    ylay.style.left = y * 12.5 + "px";
    ylay.style.bottom = "0";
    ylay.style.width = "1px";
    ylay.style.height = "405px";
    ylay.style.borderLeft = "1px dotted gray";

    nChart.appendChild(ylay);
  }

  // X numbers under n(t)
  const axis2 = document.createElement("div");
  axis2.className = "d-flex mt-1";
  for (let i = 0; i <= 90; i += 2) {
    const t = document.createElement("div");
    t.style.width = "25px";
    t.style.fontSize = "12px";
    t.style.textAlign = "start";
    t.style.zIndex = "99999";
    t.innerText = i;
    axis2.appendChild(t);
  }

  container.appendChild(nChart);
  container.appendChild(axis2);
}
//////////////////////////////
//regex
const regexInt = /^[1-9]\d*$/;
const regexKendall = /^[A-Z]\/[A-Z]\/\d+\/\d+$/;
const regexFloat = /^\d+(\.\d+)?$/;

function setValid(id) {
  const el = document.getElementById(id);
  el.classList.remove("is-invalid");
  el.classList.add("is-valid");
}

function setInvalid(id) {
  const el = document.getElementById(id);
  el.classList.remove("is-valid");
  el.classList.add("is-invalid");
}

function validate() {
  let ok = true;

  // arrival
  if (regexInt.test(arrivalss.value)) setValid("arrivals");
  else {
    setInvalid("arrivals");
    ok = false;
  }

  // service
  if (regexInt.test(servicee.value)) setValid("service");
  else {
    setInvalid("service");
    ok = false;
  }

  // M
  if (regexInt.test(m.value)) setValid("m");
  else {
    if (+arrivalss.value >= +servicee.value) {
      ok = false;
    } else {
      ok = true;
    }
  }

  // capacity
  if (regexInt.test(capacity.value)) setValid("capacity");
  else {
    if (+arrivalss.value < servicee.value) {
      setInvalid("capacity");
      ok = false;
    }
  }

  // kendall
  if (regexKendall.test(kendellNotation.value)) setValid("kendellNotation");

  // n(t)
  if (regexInt.test(time.value)) setValid("time");

  // Wq(n)
  if (regexInt.test(number.value)) setValid("number");

  return ok;
}

////////////////////////////////

function calculate() {
  const model = document.getElementById("model").value;
  const arrivalTime = Number(document.getElementById("arrival").value);
  const serviceTime = Number(document.getElementById("service").value);
  const K = Number(document.getElementById("capacity").value);

  const caseBox = document.getElementById("case");
  const resultBox = document.getElementById("results");

  if (!arrivalTime || !serviceTime || arrivalTime <= 0 || serviceTime <= 0) {
    caseBox.innerText = "Please enter arrival and service times greater than 0";
    resultBox.innerHTML = "";
    return;
  }

  if (model === "mm1k" && (!K || K <= 0)) {
    caseBox.innerText = "Please enter a valid system capacity (K > 0)";
    resultBox.innerHTML = "";
    return;
  }

  const lambda = 1 / arrivalTime;
  const mu = 1 / serviceTime;

  caseBox.innerText =
    arrivalTime > serviceTime
      ? "Case: 1/λ > 1/μ (Fast arrivals)"
      : arrivalTime < serviceTime
      ? "Case: 1/λ < 1/μ (Fast service)"
      : "Case: 1/λ = 1/μ (Critical)";

  if (model === "mm1") {
    if (lambda >= mu) {
      resultBox.innerHTML =
        "<span class='text-danger fw-bold'>System is unstable (λ ≥ μ)</span>";
      return;
    }

    const rho = lambda / mu;
    const L = lambda / (mu - lambda);
    const Lq = (lambda * lambda) / (mu * (mu - lambda));
    const W = 1 / (mu - lambda);
    const Wq = lambda / (mu * (mu - lambda));

    resultBox.innerHTML = `
            <h5 class="fw-bold mb-3">M/M/1 Results</h5>
            <p>λ = ${lambda.toFixed(3)}</p>
            <p>μ = ${mu.toFixed(3)}</p>
            <p>ρ = ${rho.toFixed(3)}</p>
            <p>L = ${L.toFixed(3)}</p>
            <p>Lq = ${Lq.toFixed(3)}</p>
            <p>W = ${W.toFixed(3)} sec</p>
            <p>Wq = ${Wq.toFixed(3)} sec</p>
          `;
  }

  if (model === "mm1k") {
    const rho = lambda / mu;

    if (rho === 1) {
      resultBox.innerHTML =
        "<span class='text-danger fw-bold'>ρ = 1 is not allowed</span>";
      return;
    }

    const P0 = (1 - rho) / (1 - Math.pow(rho, K + 1));
    const PK = Math.pow(rho, K) * P0;
    const lambdaEff = lambda * (1 - PK);

    const L =
      (rho * (1 - (K + 1) * Math.pow(rho, K) + K * Math.pow(rho, K + 1))) /
      ((1 - rho) * (1 - Math.pow(rho, K + 1)));

    const W = L / lambdaEff;
    const Wq = W - 1 / mu;
    const Lq = lambdaEff * Wq;

    resultBox.innerHTML = `
            <h5 class="fw-bold mb-3">M/M/1/K Results</h5>
            <p>λ = ${lambda.toFixed(3)}</p>
            <p>μ = ${mu.toFixed(3)}</p>
            <p>K = ${K}</p>
            <p>ρ = ${rho.toFixed(3)}</p>
            <p>P₀ = ${P0.toFixed(3)}</p>
            <p>Pₖ = ${PK.toFixed(3)}</p>
            <p>λ′ = ${lambdaEff.toFixed(3)}</p>
            <p>L = ${L.toFixed(3)}</p>
            <p>Lq = ${Lq.toFixed(3)}</p>
            <p>W = ${W.toFixed(3)} sec</p>
            <p>Wq = ${Wq.toFixed(3)} sec</p>
          `;
  }
}
