// =============================================
// NutriTrack Pro - Diet Tracking Application
// =============================================

// =============================================
// FOOD DATABASE (Based on user's diet.py + expanded)
// =============================================

const foodDatabase = {
    // Proteínas
    "Pechuga de Pollo": { kcal: 165, protein: 31, carbs: 0, fats: 3.6, serving: 100, unit: "g", category: "protein" },
    "Pechuga de Pavo": { kcal: 135, protein: 30, carbs: 0, fats: 1, serving: 100, unit: "g", category: "protein" },
    "Salmón": { kcal: 208, protein: 20, carbs: 0, fats: 13, serving: 100, unit: "g", category: "protein" },
    "Ternera Magra": { kcal: 250, protein: 26, carbs: 0, fats: 15, serving: 100, unit: "g", category: "protein" },
    "Atún en Conserva": { kcal: 116, protein: 26, carbs: 0, fats: 1, serving: 100, unit: "g", category: "protein" },
    "Merluza": { kcal: 89, protein: 17, carbs: 0, fats: 2, serving: 100, unit: "g", category: "protein" },
    "Gambas": { kcal: 99, protein: 24, carbs: 0, fats: 0.3, serving: 100, unit: "g", category: "protein" },
    "Huevos (unidad)": { kcal: 70, protein: 6, carbs: 0.5, fats: 5, serving: 1, unit: "unidad", category: "protein" },
    "Claras de Huevo": { kcal: 52, protein: 11, carbs: 0.7, fats: 0.2, serving: 100, unit: "g", category: "protein" },
    "Proteina Whey (scoop)": { kcal: 110, protein: 24, carbs: 2, fats: 1.5, serving: 1, unit: "scoop", category: "protein" },
    "Queso Fresco Batido 0%": { kcal: 46, protein: 8, carbs: 3.5, fats: 0.1, serving: 100, unit: "g", category: "protein" },
    "Yogur Griego 0%": { kcal: 59, protein: 10, carbs: 4, fats: 0.7, serving: 100, unit: "g", category: "protein" },
    "Cottage Cheese": { kcal: 98, protein: 11, carbs: 3, fats: 4, serving: 100, unit: "g", category: "protein" },
    "Jamón York": { kcal: 95, protein: 18, carbs: 1, fats: 2, serving: 100, unit: "g", category: "protein" },
    "Lomo Embuchado": { kcal: 386, protein: 50, carbs: 2, fats: 20, serving: 100, unit: "g", category: "protein" },

    // Carbohidratos
    "Arroz Integral": { kcal: 111, protein: 2.6, carbs: 23, fats: 0.9, serving: 100, unit: "g", category: "carbs" },
    "Arroz Blanco": { kcal: 130, protein: 2.7, carbs: 28, fats: 0.3, serving: 100, unit: "g", category: "carbs" },
    "Patata cocida": { kcal: 77, protein: 2, carbs: 17, fats: 0.1, serving: 100, unit: "g", category: "carbs" },
    "Boniato": { kcal: 86, protein: 1.6, carbs: 20, fats: 0.1, serving: 100, unit: "g", category: "carbs" },
    "Avena": { kcal: 389, protein: 17, carbs: 66, fats: 7, serving: 100, unit: "g", category: "carbs" },
    "Pan Integral": { kcal: 250, protein: 9, carbs: 45, fats: 3, serving: 100, unit: "g", category: "carbs" },
    "Pan Blanco": { kcal: 265, protein: 8, carbs: 51, fats: 2.5, serving: 100, unit: "g", category: "carbs" },
    "Pasta Integral": { kcal: 350, protein: 13, carbs: 70, fats: 2.5, serving: 100, unit: "g", category: "carbs" },
    "Pasta Blanca": { kcal: 371, protein: 13, carbs: 75, fats: 1.5, serving: 100, unit: "g", category: "carbs" },
    "Quinoa": { kcal: 120, protein: 4.4, carbs: 21, fats: 1.9, serving: 100, unit: "g", category: "carbs" },
    "Platano (unidad)": { kcal: 89, protein: 1.1, carbs: 23, fats: 0.3, serving: 1, unit: "unidad", category: "carbs" },
    "Manzana (unidad)": { kcal: 52, protein: 0.3, carbs: 14, fats: 0.2, serving: 1, unit: "unidad", category: "carbs" },
    "Naranja (unidad)": { kcal: 47, protein: 0.9, carbs: 12, fats: 0.1, serving: 1, unit: "unidad", category: "carbs" },
    "Fresas": { kcal: 33, protein: 0.7, carbs: 8, fats: 0.3, serving: 100, unit: "g", category: "carbs" },
    "Arándanos": { kcal: 57, protein: 0.7, carbs: 14, fats: 0.3, serving: 100, unit: "g", category: "carbs" },
    "Tortitas de Arroz (unidad)": { kcal: 35, protein: 0.7, carbs: 7, fats: 0.3, serving: 1, unit: "unidad", category: "carbs" },
    "Cereales Fitness": { kcal: 378, protein: 9, carbs: 78, fats: 2, serving: 100, unit: "g", category: "carbs" },
    "Legumbres cocidas": { kcal: 127, protein: 9, carbs: 20, fats: 0.5, serving: 100, unit: "g", category: "carbs" },

    // Grasas
    "Aguacate": { kcal: 160, protein: 2, carbs: 8.5, fats: 15, serving: 100, unit: "g", category: "fats" },
    "Aceite de Oliva (cucharada)": { kcal: 90, protein: 0, carbs: 0, fats: 10, serving: 1, unit: "cucharada", category: "fats" },
    "Crema de cacahuete": { kcal: 588, protein: 25, carbs: 20, fats: 50, serving: 100, unit: "g", category: "fats" },
    "Almendras": { kcal: 579, protein: 21, carbs: 22, fats: 50, serving: 100, unit: "g", category: "fats" },
    "Nueces": { kcal: 654, protein: 15, carbs: 14, fats: 65, serving: 100, unit: "g", category: "fats" },
    "Crema de Almendras": { kcal: 614, protein: 21, carbs: 19, fats: 56, serving: 100, unit: "g", category: "fats" },
    "Chocolate Negro 85%": { kcal: 598, protein: 8, carbs: 24, fats: 55, serving: 100, unit: "g", category: "fats" },
    "Coco Rallado": { kcal: 660, protein: 6, carbs: 23, fats: 64, serving: 100, unit: "g", category: "fats" },
    "Semillas de Chía": { kcal: 486, protein: 17, carbs: 42, fats: 31, serving: 100, unit: "g", category: "fats" },
    "Semillas de Lino": { kcal: 534, protein: 18, carbs: 29, fats: 42, serving: 100, unit: "g", category: "fats" },
    "Aceitunas": { kcal: 115, protein: 0.8, carbs: 6, fats: 11, serving: 100, unit: "g", category: "fats" },

    // Verduras (muy bajas en calorías, no asignamos categoría macro)
    "Brócoli": { kcal: 34, protein: 2.8, carbs: 7, fats: 0.4, serving: 100, unit: "g", category: "carbs" },
    "Espinacas": { kcal: 23, protein: 2.9, carbs: 3.6, fats: 0.4, serving: 100, unit: "g", category: "carbs" },
    "Lechuga": { kcal: 15, protein: 1.4, carbs: 2.9, fats: 0.2, serving: 100, unit: "g", category: "carbs" },
    "Tomate": { kcal: 18, protein: 0.9, carbs: 3.9, fats: 0.2, serving: 100, unit: "g", category: "carbs" },
    "Pepino": { kcal: 15, protein: 0.7, carbs: 3.6, fats: 0.1, serving: 100, unit: "g", category: "carbs" },
    "Calabacín": { kcal: 17, protein: 1.2, carbs: 3.1, fats: 0.3, serving: 100, unit: "g", category: "carbs" },
    "Pimiento": { kcal: 26, protein: 0.9, carbs: 6, fats: 0.2, serving: 100, unit: "g", category: "carbs" },
    "Zanahoria": { kcal: 41, protein: 0.9, carbs: 10, fats: 0.2, serving: 100, unit: "g", category: "carbs" },
    "Champiñones": { kcal: 22, protein: 3.1, carbs: 3.3, fats: 0.3, serving: 100, unit: "g", category: "carbs" },
    "Cebolla": { kcal: 40, protein: 1.1, carbs: 9, fats: 0.1, serving: 100, unit: "g", category: "carbs" },
    "Espárragos": { kcal: 20, protein: 2.2, carbs: 3.9, fats: 0.1, serving: 100, unit: "g", category: "carbs" },
};

// =============================================
// APPLICATION STATE
// =============================================

let appState = {
    user: {
        name: '',
        age: 0,
        sex: '',
        height: 0,
        weight: 0,
        bodyfat: null,
        activityLevel: 1.55,
        goal: 'moderate',
        targetWeight: null,
        targetBf: null
    },
    goals: {
        calories: 2000,
        protein: 150,
        carbs: 200,
        fats: 65
    },
    customFoods: {},
    dailyLogs: {}, // { "2026-01-22": { Desayuno: [...], Comida: [...], ... } }
    weightLog: [], // [{ date: "2026-01-22", weight: 85.5, bodyfat: 18 }]
    currentStep: 1,
    selectedDate: new Date().toISOString().split('T')[0],
    selectedMeal: 'Desayuno',
    selectedFood: null,
    setupComplete: false
};

// =============================================
// UTILITY FUNCTIONS
// =============================================

function saveState() {
    localStorage.setItem('nutritrack_state', JSON.stringify(appState));
}

function loadState() {
    const saved = localStorage.getItem('nutritrack_state');
    if (saved) {
        appState = { ...appState, ...JSON.parse(saved) };
        return true;
    }
    return false;
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
}

// =============================================
// CALORIC CALCULATIONS (Harris-Benedict + adjustments)
// =============================================

function calculateTMB(sex, weight, height, age) {
    if (sex === 'male') {
        // Mifflin-St Jeor for men
        return Math.round(10 * weight + 6.25 * height - 5 * age + 5);
    } else {
        // Mifflin-St Jeor for women
        return Math.round(10 * weight + 6.25 * height - 5 * age - 161);
    }
}

function calculateTDEE(tmb, activityLevel) {
    return Math.round(tmb * activityLevel);
}

function calculateGoalCalories(tdee, goal) {
    const deficits = {
        aggressive: -750,
        moderate: -500,
        slow: -250,
        maintain: 0
    };
    return Math.round(tdee + (deficits[goal] || 0));
}

function calculateMacros(calories, weight, goal) {
    // Protein: 2.2g per kg for fat loss, 2g for maintenance
    const proteinPerKg = goal === 'maintain' ? 2.0 : 2.2;
    const protein = Math.round(weight * proteinPerKg);

    // Fats: 25-30% of calories
    const fatCalories = calories * 0.27;
    const fats = Math.round(fatCalories / 9);

    // Carbs: remainder
    const proteinCalories = protein * 4;
    const carbCalories = calories - proteinCalories - fatCalories;
    const carbs = Math.round(carbCalories / 4);

    return { protein, carbs, fats };
}

function calculateProjectedTime(currentWeight, targetWeight, goal) {
    if (!targetWeight || targetWeight >= currentWeight) return 'N/A';

    const weeklyLoss = {
        aggressive: 0.7,
        moderate: 0.5,
        slow: 0.25,
        maintain: 0.1
    };

    const tolose = currentWeight - targetWeight;
    const weeks = Math.ceil(tolose / (weeklyLoss[goal] || 0.5));

    if (weeks <= 4) return `${weeks} semanas`;
    if (weeks <= 12) return `${Math.ceil(weeks / 4)} meses`;
    return `${Math.round(weeks / 4)} meses`;
}

// =============================================
// ONBOARDING FUNCTIONS
// =============================================

function initOnboarding() {
    updateStepIndicators();

    document.getElementById('nextBtn').addEventListener('click', nextStep);
    document.getElementById('prevBtn').addEventListener('click', prevStep);

    // Set default date for weight modal
    document.getElementById('weightDate').value = new Date().toISOString().split('T')[0];
}

function nextStep() {
    if (!validateCurrentStep()) return;

    if (appState.currentStep < 4) {
        appState.currentStep++;
        updateStep();

        if (appState.currentStep === 4) {
            calculateAndDisplayResults();
        }
    } else {
        // Finish onboarding
        finishOnboarding();
    }
}

function prevStep() {
    if (appState.currentStep > 1) {
        appState.currentStep--;
        updateStep();
    }
}

function validateCurrentStep() {
    const step = appState.currentStep;

    if (step === 1) {
        const name = document.getElementById('name').value.trim();
        const age = parseInt(document.getElementById('age').value);
        const sex = document.getElementById('sex').value;
        const height = parseInt(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);

        if (!name || !age || !sex || !height || !weight) {
            showToast('Por favor, completa todos los campos obligatorios', 'error');
            return false;
        }

        appState.user.name = name;
        appState.user.age = age;
        appState.user.sex = sex;
        appState.user.height = height;
        appState.user.weight = weight;
        appState.user.bodyfat = parseFloat(document.getElementById('bodyfat').value) || null;

        return true;
    }

    if (step === 2) {
        const activity = document.querySelector('input[name="activity"]:checked');
        if (!activity) {
            showToast('Por favor, selecciona tu nivel de actividad', 'error');
            return false;
        }
        appState.user.activityLevel = parseFloat(activity.value);
        return true;
    }

    if (step === 3) {
        const goal = document.querySelector('input[name="goal"]:checked');
        if (!goal) {
            showToast('Por favor, selecciona tu objetivo', 'error');
            return false;
        }
        appState.user.goal = goal.value;
        appState.user.targetWeight = parseFloat(document.getElementById('targetWeight').value) || null;
        appState.user.targetBf = parseFloat(document.getElementById('targetBf').value) || null;
        return true;
    }

    return true;
}

function updateStep() {
    // Hide all steps
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));

    // Show current step
    document.querySelector(`.step[data-step="${appState.currentStep}"]`).classList.add('active');

    // Update buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.style.visibility = appState.currentStep === 1 ? 'hidden' : 'visible';

    if (appState.currentStep === 4) {
        nextBtn.innerHTML = '¡Empezar! <span>🚀</span>';
    } else {
        nextBtn.innerHTML = 'Siguiente <span>→</span>';
    }

    updateStepIndicators();
}

function updateStepIndicators() {
    document.querySelectorAll('.indicator').forEach((ind, i) => {
        ind.classList.toggle('active', i < appState.currentStep);
    });
}

function calculateAndDisplayResults() {
    const { sex, weight, height, age, activityLevel, goal, targetWeight } = appState.user;

    const tmb = calculateTMB(sex, weight, height, age);
    const tdee = calculateTDEE(tmb, activityLevel);
    const calories = calculateGoalCalories(tdee, goal);
    const macros = calculateMacros(calories, weight, goal);

    // Update state
    appState.goals = {
        calories,
        protein: macros.protein,
        carbs: macros.carbs,
        fats: macros.fats
    };

    // Display results
    document.getElementById('resultTMB').textContent = tmb;
    document.getElementById('resultTDEE').textContent = tdee;
    document.getElementById('resultCalories').textContent = calories;
    document.getElementById('resultProtein').textContent = macros.protein;
    document.getElementById('resultCarbs').textContent = macros.carbs;
    document.getElementById('resultFats').textContent = macros.fats;

    // Calculate percentages
    const proteinCal = macros.protein * 4;
    const carbsCal = macros.carbs * 4;
    const fatsCal = macros.fats * 9;
    const totalCal = proteinCal + carbsCal + fatsCal;

    document.getElementById('resultProteinPct').textContent = Math.round(proteinCal / totalCal * 100) + '%';
    document.getElementById('resultCarbsPct').textContent = Math.round(carbsCal / totalCal * 100) + '%';
    document.getElementById('resultFatsPct').textContent = Math.round(fatsCal / totalCal * 100) + '%';

    // Projected time
    const projected = calculateProjectedTime(weight, targetWeight, goal);
    document.getElementById('projectedTime').textContent = projected;
}

function finishOnboarding() {
    appState.setupComplete = true;

    // Add initial weight entry
    appState.weightLog.push({
        date: new Date().toISOString().split('T')[0],
        weight: appState.user.weight,
        bodyfat: appState.user.bodyfat
    });

    saveState();

    // Switch to dashboard
    document.getElementById('onboarding').classList.remove('active');
    document.getElementById('dashboard').classList.add('active');

    initDashboard();
    showToast(`¡Bienvenido, ${appState.user.name}! Tu plan está listo 🎉`);
}

// =============================================
// DASHBOARD FUNCTIONS
// =============================================

function initDashboard() {
    // Set greeting
    document.getElementById('userGreeting').textContent = `Hola, ${appState.user.name}`;
    document.getElementById('currentDate').textContent = formatDate(new Date());

    // Set date picker
    const datePicker = document.getElementById('selectedDate');
    datePicker.value = appState.selectedDate;
    datePicker.addEventListener('change', (e) => {
        appState.selectedDate = e.target.value;
        updateDailyView();
    });

    // Update goals display
    updateGoalsDisplay();

    // Update daily view
    updateDailyView();

    // Initialize chart
    initWeightChart();

    // Update stats
    updateStats();

    // Settings button
    document.getElementById('settingsBtn').addEventListener('click', openSettingsModal);

    // Add SVG gradient for calories ring
    addCaloriesGradient();
}

function addCaloriesGradient() {
    const svg = document.querySelector('.calories-ring svg');
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `
        <linearGradient id="caloriesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#6366f1"/>
            <stop offset="100%" style="stop-color:#8b5cf6"/>
        </linearGradient>
    `;
    svg.insertBefore(defs, svg.firstChild);

    // Apply gradient to progress ring
    document.getElementById('caloriesRing').setAttribute('stroke', 'url(#caloriesGradient)');
}

function updateGoalsDisplay() {
    document.getElementById('goalCaloriesDisplay').textContent = appState.goals.calories;
    document.getElementById('proteinGoal').textContent = appState.goals.protein;
    document.getElementById('carbsGoal').textContent = appState.goals.carbs;
    document.getElementById('fatsGoal').textContent = appState.goals.fats;
}

function updateDailyView() {
    const date = appState.selectedDate;
    const dayLog = appState.dailyLogs[date] || {
        Desayuno: [],
        Comida: [],
        Merienda: [],
        Cena: []
    };

    // Calculate totals
    let totalKcal = 0, totalProtein = 0, totalCarbs = 0, totalFats = 0;

    Object.keys(dayLog).forEach(meal => {
        let mealKcal = 0;
        const itemsContainer = document.getElementById(`${meal.toLowerCase()}Items`);

        if (dayLog[meal].length === 0) {
            itemsContainer.innerHTML = '<p class="empty-meal">Sin alimentos añadidos</p>';
        } else {
            itemsContainer.innerHTML = dayLog[meal].map((item, index) => {
                const food = getAllFoods()[item.name];
                if (!food) return '';

                let factor;
                if (food.unit === 'g' || food.unit === 'ml') {
                    factor = item.quantity / food.serving;
                } else {
                    factor = item.quantity;
                }

                const kcal = Math.round(food.kcal * factor);
                mealKcal += kcal;
                totalKcal += kcal;
                totalProtein += food.protein * factor;
                totalCarbs += food.carbs * factor;
                totalFats += food.fats * factor;

                const qtyDisplay = food.unit === 'g' || food.unit === 'ml'
                    ? `${item.quantity}${food.unit}`
                    : `${item.quantity} ${food.unit}${item.quantity > 1 ? 's' : ''}`;

                return `
                    <div class="food-item">
                        <div class="food-item-info">
                            <span class="food-item-name">${item.name}</span>
                            <span class="food-item-qty">${qtyDisplay}</span>
                        </div>
                        <span class="food-item-kcal">${kcal} kcal</span>
                        <button class="food-item-delete" onclick="removeFoodItem('${meal}', ${index})">✕</button>
                    </div>
                `;
            }).join('');
        }

        document.getElementById(`${meal.toLowerCase()}Calories`).textContent = `${Math.round(mealKcal)} kcal`;
    });

    totalProtein = Math.round(totalProtein);
    totalCarbs = Math.round(totalCarbs);
    totalFats = Math.round(totalFats);

    // Update summary
    const remaining = appState.goals.calories - totalKcal;
    document.getElementById('remainingCalories').textContent = Math.max(0, remaining);
    document.getElementById('consumedCalories').textContent = Math.round(totalKcal);

    // Update macros
    document.getElementById('proteinConsumed').textContent = totalProtein;
    document.getElementById('carbsConsumed').textContent = totalCarbs;
    document.getElementById('fatsConsumed').textContent = totalFats;

    // Update progress bars
    const proteinPct = Math.min(100, (totalProtein / appState.goals.protein) * 100);
    const carbsPct = Math.min(100, (totalCarbs / appState.goals.carbs) * 100);
    const fatsPct = Math.min(100, (totalFats / appState.goals.fats) * 100);

    document.getElementById('proteinProgress').style.width = `${proteinPct}%`;
    document.getElementById('carbsProgress').style.width = `${carbsPct}%`;
    document.getElementById('fatsProgress').style.width = `${fatsPct}%`;

    // Update calories ring
    const caloriesPct = Math.min(100, (totalKcal / appState.goals.calories) * 100);
    const circumference = 2 * Math.PI * 85;
    const offset = circumference - (caloriesPct / 100) * circumference;
    document.getElementById('caloriesRing').style.strokeDashoffset = offset;
}

function getAllFoods() {
    return { ...foodDatabase, ...appState.customFoods };
}

function removeFoodItem(meal, index) {
    const date = appState.selectedDate;
    if (appState.dailyLogs[date] && appState.dailyLogs[date][meal]) {
        appState.dailyLogs[date][meal].splice(index, 1);
        saveState();
        updateDailyView();
        showToast('Alimento eliminado');
    }
}

function updateStats() {
    // Days tracked
    const daysTracked = Object.keys(appState.dailyLogs).length;
    document.getElementById('daysTracked').textContent = daysTracked;

    // Current streak
    let streak = 0;
    const today = new Date();
    for (let i = 0; i < 365; i++) {
        const checkDate = new Date(today);
        checkDate.setDate(checkDate.getDate() - i);
        const dateStr = checkDate.toISOString().split('T')[0];
        if (appState.dailyLogs[dateStr] &&
            Object.values(appState.dailyLogs[dateStr]).some(m => m.length > 0)) {
            streak++;
        } else if (i > 0) {
            break;
        }
    }
    document.getElementById('currentStreak').textContent = streak;

    // Weight change
    if (appState.weightLog.length >= 2) {
        const initial = appState.weightLog[0].weight;
        const current = appState.weightLog[appState.weightLog.length - 1].weight;
        const change = (current - initial).toFixed(1);
        document.getElementById('weightChange').textContent = change > 0 ? `+${change}` : change;
    }

    // Average adherence
    let totalAdherence = 0;
    let countedDays = 0;
    Object.keys(appState.dailyLogs).forEach(date => {
        const dayLog = appState.dailyLogs[date];
        let dayKcal = 0;
        Object.values(dayLog).forEach(meal => {
            meal.forEach(item => {
                const food = getAllFoods()[item.name];
                if (food) {
                    let factor = food.unit === 'g' || food.unit === 'ml'
                        ? item.quantity / food.serving
                        : item.quantity;
                    dayKcal += food.kcal * factor;
                }
            });
        });
        if (dayKcal > 0) {
            const adherence = 100 - Math.abs(100 - (dayKcal / appState.goals.calories * 100));
            totalAdherence += Math.max(0, adherence);
            countedDays++;
        }
    });
    const avgAdherence = countedDays > 0 ? Math.round(totalAdherence / countedDays) : 0;
    document.getElementById('avgAdherence').textContent = `${avgAdherence}%`;
}

// =============================================
// WEIGHT CHART
// =============================================

let weightChart = null;

function initWeightChart() {
    const ctx = document.getElementById('weightChart').getContext('2d');

    const sortedLog = [...appState.weightLog].sort((a, b) => new Date(a.date) - new Date(b.date));
    const labels = sortedLog.map(e => formatDate(e.date));
    const weights = sortedLog.map(e => e.weight);

    weightChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels.length ? labels : ['Hoy'],
            datasets: [{
                label: 'Peso (kg)',
                data: weights.length ? weights : [appState.user.weight],
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 6,
                pointBackgroundColor: '#6366f1',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: '#71717a'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: '#71717a'
                    }
                }
            }
        }
    });
}

function updateWeightChart() {
    const sortedLog = [...appState.weightLog].sort((a, b) => new Date(a.date) - new Date(b.date));
    weightChart.data.labels = sortedLog.map(e => formatDate(e.date));
    weightChart.data.datasets[0].data = sortedLog.map(e => e.weight);
    weightChart.update();
}

// =============================================
// FOOD MODAL
// =============================================

function openFoodModal(meal) {
    appState.selectedMeal = meal;
    appState.selectedFood = null;

    document.getElementById('modalMealName').textContent = meal;
    document.getElementById('addToMealName').textContent = meal;
    document.getElementById('selectedFoodPanel').style.display = 'none';
    document.getElementById('foodSearch').value = '';

    renderFoodList();
    initFoodModalEvents();

    document.getElementById('foodModal').classList.add('active');
}

function closeFoodModal() {
    document.getElementById('foodModal').classList.remove('active');
}

function initFoodModalEvents() {
    const searchInput = document.getElementById('foodSearch');
    searchInput.addEventListener('input', (e) => {
        renderFoodList(e.target.value);
    });

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderFoodList(searchInput.value, e.target.dataset.category);
        });
    });
}

function renderFoodList(search = '', category = 'all') {
    const allFoods = getAllFoods();
    const foodList = document.getElementById('foodList');

    let foods = Object.entries(allFoods);

    // Filter by category
    if (category === 'custom') {
        foods = Object.entries(appState.customFoods);
    } else if (category !== 'all') {
        foods = foods.filter(([_, data]) => data.category === category);
    }

    // Filter by search
    if (search) {
        const searchLower = search.toLowerCase();
        foods = foods.filter(([name]) => name.toLowerCase().includes(searchLower));
    }

    if (foods.length === 0) {
        foodList.innerHTML = '<p class="empty-meal">No se encontraron alimentos</p>';
        return;
    }

    foodList.innerHTML = foods.map(([name, data]) => {
        const servingText = data.unit === 'g' || data.unit === 'ml'
            ? `por ${data.serving}${data.unit}`
            : `por ${data.unit}`;

        return `
            <div class="food-list-item" data-food="${name}" onclick="selectFood('${name}')">
                <div class="food-list-item-info">
                    <span class="food-list-item-name">${name}</span>
                    <span class="food-list-item-serving">${servingText}</span>
                </div>
                <span class="food-list-item-kcal">${data.kcal} kcal</span>
            </div>
        `;
    }).join('');
}

function selectFood(name) {
    const food = getAllFoods()[name];
    if (!food) return;

    appState.selectedFood = name;

    // Update selection visual
    document.querySelectorAll('.food-list-item').forEach(item => {
        item.classList.toggle('selected', item.dataset.food === name);
    });

    // Show selected food panel
    const panel = document.getElementById('selectedFoodPanel');
    panel.style.display = 'block';

    document.getElementById('selectedFoodName').textContent = name;

    // Set default quantity based on unit
    const qty = food.unit === 'g' || food.unit === 'ml' ? food.serving : 1;
    document.getElementById('foodQuantity').value = qty;

    // Set unit display
    const unitText = food.unit === 'g' ? 'gramos' :
        food.unit === 'ml' ? 'ml' :
            food.unit === 'unidad' ? 'unidad(es)' :
                food.unit === 'scoop' ? 'scoop(s)' :
                    food.unit === 'cucharada' ? 'cucharada(s)' : food.unit;
    document.getElementById('quantityUnit').textContent = unitText;

    updateSelectedFoodNutrition();
}

function adjustQuantity(delta) {
    const input = document.getElementById('foodQuantity');
    const current = parseInt(input.value) || 0;
    const newVal = Math.max(1, current + delta);
    input.value = newVal;
    updateSelectedFoodNutrition();
}

function updateSelectedFoodNutrition() {
    if (!appState.selectedFood) return;

    const food = getAllFoods()[appState.selectedFood];
    const quantity = parseFloat(document.getElementById('foodQuantity').value) || 0;

    let factor;
    if (food.unit === 'g' || food.unit === 'ml') {
        factor = quantity / food.serving;
    } else {
        factor = quantity;
    }

    document.getElementById('selectedKcal').textContent = Math.round(food.kcal * factor);
    document.getElementById('selectedProtein').textContent = (food.protein * factor).toFixed(1);
    document.getElementById('selectedCarbs').textContent = (food.carbs * factor).toFixed(1);
    document.getElementById('selectedFats').textContent = (food.fats * factor).toFixed(1);
}

// Listen to quantity input changes
document.getElementById('foodQuantity')?.addEventListener('input', updateSelectedFoodNutrition);

function addFoodToMeal() {
    if (!appState.selectedFood) {
        showToast('Selecciona un alimento primero', 'error');
        return;
    }

    const quantity = parseFloat(document.getElementById('foodQuantity').value);
    if (!quantity || quantity <= 0) {
        showToast('Introduce una cantidad válida', 'error');
        return;
    }

    const date = appState.selectedDate;
    const meal = appState.selectedMeal;

    if (!appState.dailyLogs[date]) {
        appState.dailyLogs[date] = {
            Desayuno: [],
            Comida: [],
            Merienda: [],
            Cena: []
        };
    }

    appState.dailyLogs[date][meal].push({
        name: appState.selectedFood,
        quantity: quantity
    });

    saveState();
    closeFoodModal();
    updateDailyView();
    updateStats();
    showToast(`${appState.selectedFood} añadido a ${meal}`);
}

// =============================================
// CUSTOM FOOD MODAL
// =============================================

function openCustomFoodModal() {
    // Clear form
    document.getElementById('customFoodName').value = '';
    document.getElementById('customFoodServingSize').value = '100';
    document.getElementById('customFoodServingUnit').value = 'g';
    document.getElementById('customKcal').value = '';
    document.getElementById('customProtein').value = '';
    document.getElementById('customCarbs').value = '';
    document.getElementById('customFats').value = '';

    document.getElementById('customFoodModal').classList.add('active');
}

function closeCustomFoodModal() {
    document.getElementById('customFoodModal').classList.remove('active');
}

function saveCustomFood() {
    const name = document.getElementById('customFoodName').value.trim();
    const serving = parseInt(document.getElementById('customFoodServingSize').value);
    const unit = document.getElementById('customFoodServingUnit').value;
    const kcal = parseInt(document.getElementById('customKcal').value) || 0;
    const protein = parseFloat(document.getElementById('customProtein').value) || 0;
    const carbs = parseFloat(document.getElementById('customCarbs').value) || 0;
    const fats = parseFloat(document.getElementById('customFats').value) || 0;

    if (!name) {
        showToast('Introduce un nombre para el alimento', 'error');
        return;
    }

    // Determine category based on macros
    let category = 'carbs';
    if (protein > carbs && protein > fats) category = 'protein';
    else if (fats > carbs && fats > protein) category = 'fats';

    appState.customFoods[name] = {
        kcal, protein, carbs, fats, serving, unit, category
    };

    saveState();
    closeCustomFoodModal();
    renderFoodList();
    showToast(`"${name}" guardado en tus alimentos`);
}

// =============================================
// WEIGHT MODAL
// =============================================

function openWeightModal() {
    document.getElementById('weightDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('newWeight').value = '';
    document.getElementById('newBodyfat').value = '';
    document.getElementById('weightModal').classList.add('active');
}

function closeWeightModal() {
    document.getElementById('weightModal').classList.remove('active');
}

function saveWeight() {
    const date = document.getElementById('weightDate').value;
    const weight = parseFloat(document.getElementById('newWeight').value);
    const bodyfat = parseFloat(document.getElementById('newBodyfat').value) || null;

    if (!date || !weight) {
        showToast('Introduce fecha y peso', 'error');
        return;
    }

    // Check if entry for this date exists
    const existingIndex = appState.weightLog.findIndex(e => e.date === date);
    if (existingIndex >= 0) {
        appState.weightLog[existingIndex] = { date, weight, bodyfat };
    } else {
        appState.weightLog.push({ date, weight, bodyfat });
    }

    // Update current weight
    appState.user.weight = weight;
    if (bodyfat) appState.user.bodyfat = bodyfat;

    saveState();
    closeWeightModal();
    updateWeightChart();
    updateStats();
    showToast('Peso registrado correctamente');
}

// =============================================
// SETTINGS MODAL
// =============================================

function openSettingsModal() {
    document.getElementById('settingsCalories').value = appState.goals.calories;
    document.getElementById('settingsProtein').value = appState.goals.protein;
    document.getElementById('settingsCarbs').value = appState.goals.carbs;
    document.getElementById('settingsFats').value = appState.goals.fats;
    document.getElementById('settingsName').value = appState.user.name;
    document.getElementById('settingsWeight').value = appState.user.weight;

    document.getElementById('settingsModal').classList.add('active');
}

function closeSettingsModal() {
    document.getElementById('settingsModal').classList.remove('active');
}

function saveSettings() {
    appState.goals.calories = parseInt(document.getElementById('settingsCalories').value);
    appState.goals.protein = parseInt(document.getElementById('settingsProtein').value);
    appState.goals.carbs = parseInt(document.getElementById('settingsCarbs').value);
    appState.goals.fats = parseInt(document.getElementById('settingsFats').value);
    appState.user.name = document.getElementById('settingsName').value;
    appState.user.weight = parseFloat(document.getElementById('settingsWeight').value);

    saveState();
    closeSettingsModal();
    updateGoalsDisplay();
    updateDailyView();
    document.getElementById('userGreeting').textContent = `Hola, ${appState.user.name}`;
    showToast('Configuración guardada');
}

function resetAllData() {
    if (confirm('¿Estás seguro de que quieres borrar todos los datos? Esta acción no se puede deshacer.')) {
        localStorage.removeItem('nutritrack_state');
        location.reload();
    }
}

function recalculateGoals() {
    if (confirm('¿Recalcular objetivos basándote en tus datos actuales?')) {
        closeSettingsModal();
        appState.setupComplete = false;
        appState.currentStep = 1;

        // Pre-fill form with existing data
        document.getElementById('onboarding').classList.add('active');
        document.getElementById('dashboard').classList.remove('active');

        document.getElementById('name').value = appState.user.name;
        document.getElementById('age').value = appState.user.age;
        document.getElementById('sex').value = appState.user.sex;
        document.getElementById('height').value = appState.user.height;
        document.getElementById('weight').value = appState.user.weight;
        document.getElementById('bodyfat').value = appState.user.bodyfat || '';

        updateStep();
    }
}

// =============================================
// DIET GENERATOR
// =============================================

let generatorState = {
    currentStep: 1,
    selectedFoods: [],
    foodMealAssignments: {}, // { "Pechuga de Pollo": ["Comida", "Cena"], "Avena": ["Desayuno"], ... }
    daysToGenerate: 1,
    mealsCount: 4,
    generatedPlan: null,
    viewingPlanIndex: null
};

// Initialize saved plans in app state if not exists
if (!appState.savedPlans) {
    appState.savedPlans = [];
}

const mealDistribution = {
    3: { Desayuno: 0.30, Comida: 0.40, Cena: 0.30 },
    4: { Desayuno: 0.25, Comida: 0.35, Merienda: 0.15, Cena: 0.25 },
    5: { Desayuno: 0.20, 'Media Mañana': 0.10, Comida: 0.35, Merienda: 0.15, Cena: 0.20 }
};

const mealIcons = {
    'Desayuno': '🌅',
    'Media Mañana': '☕',
    'Comida': '☀️',
    'Merienda': '🌤️',
    'Cena': '🌙'
};

function openDietGeneratorModal() {
    generatorState.currentStep = 1;
    generatorState.selectedFoods = [];
    generatorState.foodMealAssignments = {};
    generatorState.generatedPlan = null;

    // Populate food selection
    populateFoodSelection();

    // Show goals
    document.getElementById('genGoalKcal').textContent = appState.goals.calories;
    document.getElementById('genGoalProt').textContent = appState.goals.protein;
    document.getElementById('genGoalCarbs').textContent = appState.goals.carbs;
    document.getElementById('genGoalFats').textContent = appState.goals.fats;

    // Reset UI
    updateGeneratorStep();
    initGeneratorEvents();

    document.getElementById('dietGeneratorModal').classList.add('active');
}

function closeDietGeneratorModal() {
    document.getElementById('dietGeneratorModal').classList.remove('active');
}

function populateFoodSelection() {
    const allFoods = getAllFoods();

    const proteinFoods = Object.entries(allFoods).filter(([_, f]) => f.category === 'protein');
    const carbFoods = Object.entries(allFoods).filter(([_, f]) => f.category === 'carbs');
    const fatFoods = Object.entries(allFoods).filter(([_, f]) => f.category === 'fats');

    document.getElementById('proteinSelection').innerHTML = proteinFoods.map(([name, data]) => createFoodAssignmentItem(name, data)).join('');
    document.getElementById('carbsSelection').innerHTML = carbFoods.map(([name, data]) => createFoodAssignmentItem(name, data)).join('');
    document.getElementById('fatsSelection').innerHTML = fatFoods.map(([name, data]) => createFoodAssignmentItem(name, data)).join('');

    updateSelectionCount();
    initFoodAssignmentEvents();
}

function createFoodAssignmentItem(name, data) {
    const kcalInfo = `${data.kcal} kcal`;
    return `
        <div class="food-assignment-item" data-food="${name}">
            <div class="food-assignment-header">
                <div class="food-assignment-name">
                    <span class="food-toggle-btn">✓</span>
                    <span>${name}</span>
                    <span class="food-info-badge">${kcalInfo}</span>
                </div>
            </div>
            <div class="food-assignment-meals">
                <span class="meals-hint">¿En qué comidas lo consumirías?</span>
                <div class="meal-tag" data-meal="Desayuno">
                    <span class="meal-tag-icon">🌅</span> Desayuno
                </div>
                <div class="meal-tag" data-meal="Comida">
                    <span class="meal-tag-icon">☀️</span> Comida
                </div>
                <div class="meal-tag" data-meal="Merienda">
                    <span class="meal-tag-icon">🌤️</span> Merienda
                </div>
                <div class="meal-tag" data-meal="Cena">
                    <span class="meal-tag-icon">🌙</span> Cena
                </div>
            </div>
        </div>
    `;
}

function initFoodAssignmentEvents() {
    // Toggle food item selection
    document.querySelectorAll('.food-assignment-header').forEach(header => {
        header.addEventListener('click', function (e) {
            const item = this.closest('.food-assignment-item');
            const foodName = item.dataset.food;

            if (item.classList.contains('active')) {
                // Deactivate
                item.classList.remove('active');
                delete generatorState.foodMealAssignments[foodName];
            } else {
                // Activate
                item.classList.add('active');
                // Initialize with empty meals array
                if (!generatorState.foodMealAssignments[foodName]) {
                    generatorState.foodMealAssignments[foodName] = [];
                }
            }
            updateSelectionCount();
        });
    });

    // Toggle meal tags
    document.querySelectorAll('.meal-tag').forEach(tag => {
        tag.addEventListener('click', function (e) {
            e.stopPropagation();
            const item = this.closest('.food-assignment-item');
            const foodName = item.dataset.food;
            const mealName = this.dataset.meal;

            // Make sure the food is active
            if (!item.classList.contains('active')) {
                item.classList.add('active');
                generatorState.foodMealAssignments[foodName] = [];
            }

            // Toggle this meal
            if (this.classList.contains('selected')) {
                this.classList.remove('selected');
                const idx = generatorState.foodMealAssignments[foodName].indexOf(mealName);
                if (idx > -1) {
                    generatorState.foodMealAssignments[foodName].splice(idx, 1);
                }
            } else {
                this.classList.add('selected');
                if (!generatorState.foodMealAssignments[foodName].includes(mealName)) {
                    generatorState.foodMealAssignments[foodName].push(mealName);
                }
            }
            updateSelectionCount();
        });
    });
}

function updateSelectionCount() {
    // Count foods that have at least one meal assigned
    const assignedFoods = Object.entries(generatorState.foodMealAssignments)
        .filter(([_, meals]) => meals.length > 0);
    document.getElementById('selectedCount').textContent = assignedFoods.length;
}

function initGeneratorEvents() {
    // Days selector
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            generatorState.daysToGenerate = parseInt(e.target.dataset.days);
        });
    });

    // Meals selector
    document.querySelectorAll('.meal-count-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.meal-count-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            generatorState.mealsCount = parseInt(e.target.dataset.meals);
            updateDistributionDisplay();
        });
    });
}

function updateDistributionDisplay() {
    const dist = mealDistribution[generatorState.mealsCount];
    const container = document.querySelector('.distribution-display');

    container.innerHTML = Object.entries(dist).map(([meal, pct]) => `
        <div class="dist-item">
            <span class="dist-meal">${meal}</span>
            <span class="dist-pct">${Math.round(pct * 100)}%</span>
        </div>
    `).join('');
}

function nextGeneratorStep() {
    if (generatorState.currentStep === 1) {
        // Count foods with at least one meal assigned
        const assignedFoods = Object.entries(generatorState.foodMealAssignments)
            .filter(([_, meals]) => meals.length > 0);

        if (assignedFoods.length < 5) {
            showToast('Selecciona al menos 5 alimentos y asígnales comidas', 'error');
            return;
        }
    }

    if (generatorState.currentStep < 3) {
        generatorState.currentStep++;
        updateGeneratorStep();

        if (generatorState.currentStep === 3) {
            generateDietPlans();
        }
    } else {
        // Save and close
        closeDietGeneratorModal();
    }
}

function prevGeneratorStep() {
    if (generatorState.currentStep > 1) {
        generatorState.currentStep--;
        updateGeneratorStep();
    }
}

function updateGeneratorStep() {
    // Hide all steps
    document.querySelectorAll('.generator-step').forEach(s => s.classList.remove('active'));

    // Show current
    document.querySelector(`.generator-step[data-gen-step="${generatorState.currentStep}"]`).classList.add('active');

    // Update buttons
    const prevBtn = document.getElementById('genPrevBtn');
    const nextBtn = document.getElementById('genNextBtn');

    prevBtn.style.visibility = generatorState.currentStep === 1 ? 'hidden' : 'visible';

    if (generatorState.currentStep === 3) {
        nextBtn.innerHTML = 'Cerrar';
    } else {
        nextBtn.innerHTML = 'Siguiente →';
    }

    // Update indicators
    document.querySelectorAll('.gen-indicator').forEach((ind, i) => {
        ind.classList.toggle('active', i < generatorState.currentStep);
    });
}

function generateDietPlans() {
    const goals = appState.goals;
    const distribution = mealDistribution[generatorState.mealsCount];
    const days = generatorState.daysToGenerate;
    const foodAssignments = generatorState.foodMealAssignments;
    const allFoods = getAllFoods();

    const plan = [];

    for (let d = 0; d < days; d++) {
        const dayPlan = { meals: {} };
        let dayTotals = { kcal: 0, protein: 0, carbs: 0, fats: 0 };

        Object.entries(distribution).forEach(([mealName, percentage]) => {
            const mealCalories = Math.round(goals.calories * percentage);
            const mealProtein = Math.round(goals.protein * percentage);
            const mealCarbs = Math.round(goals.carbs * percentage);
            const mealFats = Math.round(goals.fats * percentage);

            // Get foods assigned to this meal by user
            const mealFoodsAvailable = Object.entries(foodAssignments)
                .filter(([_, meals]) => meals.includes(mealName))
                .map(([foodName]) => foodName);

            const mealFoods = generateMeal(mealFoodsAvailable, allFoods, mealCalories, mealProtein, mealCarbs, mealFats, mealName);

            dayPlan.meals[mealName] = mealFoods;

            // Calculate meal totals
            mealFoods.forEach(item => {
                const food = allFoods[item.name];
                if (food) {
                    const factor = (food.unit === 'g' || food.unit === 'ml') ? item.quantity / food.serving : item.quantity;
                    dayTotals.kcal += food.kcal * factor;
                    dayTotals.protein += food.protein * factor;
                    dayTotals.carbs += food.carbs * factor;
                    dayTotals.fats += food.fats * factor;
                }
            });
        });

        dayPlan.totals = {
            kcal: Math.round(dayTotals.kcal),
            protein: Math.round(dayTotals.protein),
            carbs: Math.round(dayTotals.carbs),
            fats: Math.round(dayTotals.fats)
        };

        plan.push(dayPlan);
    }

    generatorState.generatedPlan = plan;
    displayGeneratedPlans(plan);
}

function generateMeal(availableFoods, allFoodsDb, targetKcal, targetProtein, targetCarbs, targetFats, mealName) {
    const meal = [];

    // Si no hay alimentos asignados para esta comida, retornar vacío
    if (availableFoods.length === 0) {
        return meal;
    }

    // Categorizar todos los alimentos disponibles para esta comida
    const proteins = availableFoods.filter(f => allFoodsDb[f]?.category === 'protein');
    const carbSources = availableFoods.filter(f => allFoodsDb[f]?.category === 'carbs');
    const fatSources = availableFoods.filter(f => allFoodsDb[f]?.category === 'fats');

    // Separar verduras (bajas en calorías) de carbohidratos densos
    const veggies = carbSources.filter(c => allFoodsDb[c].kcal <= 50);
    const mainCarbs = carbSources.filter(c => allFoodsDb[c].kcal > 50);

    // Calcular cuánta proteína necesitamos de las fuentes de proteína
    let proteinFromProteinSources = targetProtein * 0.8; // 80% de proteína de fuentes proteicas

    // Añadir TODAS las proteínas asignadas, distribuyendo la cantidad entre ellas
    if (proteins.length > 0) {
        const proteinPerSource = proteinFromProteinSources / proteins.length;

        proteins.forEach(proteinFood => {
            const food = allFoodsDb[proteinFood];
            let quantity;

            if (food.unit === 'g' || food.unit === 'ml') {
                quantity = Math.round((proteinPerSource / food.protein) * food.serving / 10) * 10;
                quantity = Math.max(30, Math.min(200, quantity));
            } else {
                quantity = Math.max(1, Math.round(proteinPerSource / food.protein));
                quantity = Math.min(4, quantity);
            }

            meal.push({ name: proteinFood, quantity });
        });
    }

    // Calcular calorías restantes después de proteínas
    let usedKcal = 0;
    meal.forEach(item => {
        const food = allFoodsDb[item.name];
        const factor = (food.unit === 'g' || food.unit === 'ml') ? item.quantity / food.serving : item.quantity;
        usedKcal += food.kcal * factor;
    });

    const remainingKcal = targetKcal - usedKcal;

    // Añadir TODOS los carbohidratos densos, distribuyendo las calorías
    if (mainCarbs.length > 0 && remainingKcal > 100) {
        const kcalPerCarb = (remainingKcal * 0.7) / mainCarbs.length; // 70% de lo restante para carbs

        mainCarbs.forEach(carbFood => {
            const food = allFoodsDb[carbFood];
            let quantity;

            if (food.unit === 'g' || food.unit === 'ml') {
                quantity = Math.round((kcalPerCarb / food.kcal) * food.serving / 10) * 10;
                quantity = Math.max(20, Math.min(150, quantity));
            } else {
                quantity = Math.max(1, Math.round(kcalPerCarb / food.kcal));
                quantity = Math.min(3, quantity);
            }

            meal.push({ name: carbFood, quantity });
        });
    }

    // Añadir TODAS las grasas asignadas (cantidades pequeñas)
    if (fatSources.length > 0) {
        const fatPerSource = targetFats / (fatSources.length * 2); // Dividir grasas

        fatSources.forEach(fatFood => {
            const food = allFoodsDb[fatFood];
            let quantity;

            if (food.unit === 'g' || food.unit === 'ml') {
                quantity = Math.round((fatPerSource / food.fats) * food.serving / 5) * 5;
                quantity = Math.max(10, Math.min(30, quantity));
            } else {
                quantity = Math.max(1, Math.round(fatPerSource / food.fats));
                quantity = Math.min(2, quantity);
            }

            meal.push({ name: fatFood, quantity });
        });
    }

    // Añadir verduras si están asignadas (cantidad fija de 100g)
    if (veggies.length > 0 && (mealName === 'Comida' || mealName === 'Cena')) {
        veggies.forEach(veggie => {
            meal.push({ name: veggie, quantity: 100 });
        });
    } else if (veggies.length > 0) {
        // Para desayuno/merienda, añadir solo una porción pequeña
        veggies.slice(0, 1).forEach(veggie => {
            meal.push({ name: veggie, quantity: 50 });
        });
    }

    return meal;
}

function displayGeneratedPlans(plan) {
    const container = document.getElementById('generatedPlansContainer');

    container.innerHTML = plan.map((day, i) => {
        const dayTitle = plan.length === 1 ? 'Tu día' : `Día ${i + 1}`;

        return `
            <div class="generated-day">
                <div class="generated-day-header">
                    <span class="day-title">${dayTitle}</span>
                    <span class="day-summary">${day.totals.kcal} kcal | P: ${day.totals.protein}g | C: ${day.totals.carbs}g | G: ${day.totals.fats}g</span>
                </div>
                <div class="generated-meals">
                    ${Object.entries(day.meals).map(([mealName, foods]) => {
            const allFoods = getAllFoods();
            let mealKcal = 0;
            foods.forEach(item => {
                const food = allFoods[item.name];
                const factor = (food.unit === 'g' || food.unit === 'ml') ? item.quantity / food.serving : item.quantity;
                mealKcal += food.kcal * factor;
            });

            return `
                            <div class="generated-meal">
                                <div class="generated-meal-header">
                                    <span>${mealIcons[mealName] || '🍽️'} ${mealName}</span>
                                    <span class="generated-meal-kcal">${Math.round(mealKcal)} kcal</span>
                                </div>
                                <div class="generated-meal-foods">
                                    ${foods.map(item => {
                const food = allFoods[item.name];
                const unit = (food.unit === 'g' || food.unit === 'ml') ? food.unit : ` ${food.unit}`;
                return `<p>• ${item.name} (${item.quantity}${unit})</p>`;
            }).join('')}
                                </div>
                            </div>
                        `;
        }).join('')}
                </div>
                <button class="save-plan-btn" onclick="savePlan(${i})">
                    💾 Guardar este plan
                </button>
            </div>
        `;
    }).join('');
}

function regeneratePlans() {
    generateDietPlans();
    showToast('¡Nuevas opciones generadas!');
}

function savePlan(dayIndex) {
    const plan = generatorState.generatedPlan[dayIndex];
    const planName = `Plan del ${formatDate(new Date())}`;

    if (!appState.savedPlans) {
        appState.savedPlans = [];
    }

    appState.savedPlans.push({
        id: Date.now(),
        name: planName,
        createdAt: new Date().toISOString(),
        plan: plan
    });

    saveState();
    updateSavedPlansList();
    showToast('¡Plan guardado correctamente! 📋');
}

function updateSavedPlansList() {
    const container = document.getElementById('savedPlansList');

    if (!appState.savedPlans || appState.savedPlans.length === 0) {
        container.innerHTML = `
            <div class="empty-plans">
                <span class="empty-icon">📝</span>
                <p>Aún no tienes planes guardados</p>
                <p class="hint">Genera tu primera dieta automática para empezar</p>
            </div>
        `;
        return;
    }

    container.innerHTML = appState.savedPlans.map((saved, index) => {
        const plan = saved.plan;
        return `
            <div class="saved-plan-card" onclick="viewSavedPlan(${index})">
                <div class="saved-plan-header">
                    <span class="saved-plan-name">${saved.name}</span>
                    <span class="saved-plan-date">${formatDate(saved.createdAt)}</span>
                </div>
                <div class="saved-plan-stats">
                    <span>🔥 ${plan.totals.kcal} kcal</span>
                    <span>🥩 ${plan.totals.protein}g</span>
                    <span>🍚 ${plan.totals.carbs}g</span>
                    <span>🥑 ${plan.totals.fats}g</span>
                </div>
            </div>
        `;
    }).join('');
}

function viewSavedPlan(index) {
    generatorState.viewingPlanIndex = index;
    const saved = appState.savedPlans[index];
    const plan = saved.plan;

    document.getElementById('viewPlanTitle').textContent = saved.name;

    const container = document.getElementById('planDetailContainer');
    const allFoods = getAllFoods();

    container.innerHTML = `
        <div class="plan-day-detail">
            <div class="plan-day-title">
                <span>📅 Plan completo</span>
                <span class="plan-day-macros">${plan.totals.kcal} kcal | P: ${plan.totals.protein}g | C: ${plan.totals.carbs}g | G: ${plan.totals.fats}g</span>
            </div>
            <div class="plan-meals-grid">
                ${Object.entries(plan.meals).map(([mealName, foods]) => {
        let mealKcal = 0;
        foods.forEach(item => {
            const food = allFoods[item.name];
            if (food) {
                const factor = (food.unit === 'g' || food.unit === 'ml') ? item.quantity / food.serving : item.quantity;
                mealKcal += food.kcal * factor;
            }
        });

        return `
                        <div class="plan-meal-detail">
                            <div class="plan-meal-name">
                                ${mealIcons[mealName] || '🍽️'} ${mealName}
                                <span style="color: var(--primary-color); font-size: 0.8rem;">${Math.round(mealKcal)} kcal</span>
                            </div>
                            <div class="plan-meal-foods">
                                ${foods.map(item => {
            const food = allFoods[item.name];
            if (!food) return '';
            const unit = (food.unit === 'g' || food.unit === 'ml') ? food.unit : ` ${food.unit}`;
            const factor = (food.unit === 'g' || food.unit === 'ml') ? item.quantity / food.serving : item.quantity;
            const kcal = Math.round(food.kcal * factor);
            return `
                                        <p>
                                            <span>${item.name}</span>
                                            <span class="food-qty">${item.quantity}${unit} (${kcal} kcal)</span>
                                        </p>
                                    `;
        }).join('')}
                            </div>
                        </div>
                    `;
    }).join('')}
            </div>
        </div>
    `;

    document.getElementById('viewPlanModal').classList.add('active');
}

function closeViewPlanModal() {
    document.getElementById('viewPlanModal').classList.remove('active');
}

function deleteSavedPlan() {
    if (generatorState.viewingPlanIndex !== null) {
        if (confirm('¿Eliminar este plan guardado?')) {
            appState.savedPlans.splice(generatorState.viewingPlanIndex, 1);
            saveState();
            updateSavedPlansList();
            closeViewPlanModal();
            showToast('Plan eliminado');
        }
    }
}

function applyPlanToday() {
    if (generatorState.viewingPlanIndex === null) return;

    const saved = appState.savedPlans[generatorState.viewingPlanIndex];
    const plan = saved.plan;
    const today = appState.selectedDate;

    // Initialize today's log if needed
    if (!appState.dailyLogs[today]) {
        appState.dailyLogs[today] = {
            Desayuno: [],
            Comida: [],
            Merienda: [],
            Cena: []
        };
    }

    // Map meal names to standard meals
    const mealMapping = {
        'Desayuno': 'Desayuno',
        'Media Mañana': 'Desayuno',
        'Comida': 'Comida',
        'Merienda': 'Merienda',
        'Cena': 'Cena'
    };

    // Add all foods from the plan
    Object.entries(plan.meals).forEach(([mealName, foods]) => {
        const targetMeal = mealMapping[mealName] || 'Comida';
        foods.forEach(food => {
            appState.dailyLogs[today][targetMeal].push({
                name: food.name,
                quantity: food.quantity
            });
        });
    });

    saveState();
    closeViewPlanModal();
    updateDailyView();
    updateStats();
    showToast('¡Plan aplicado correctamente! 🎉');
}

// Update loadState to handle savedPlans
const originalLoadState = loadState;
loadState = function () {
    const result = originalLoadState();
    if (!appState.savedPlans) {
        appState.savedPlans = [];
    }
    return result;
};

// =============================================
// INITIALIZATION
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    const hasData = loadState();

    if (hasData && appState.setupComplete) {
        // Go directly to dashboard
        document.getElementById('onboarding').classList.remove('active');
        document.getElementById('dashboard').classList.add('active');
        initDashboard();
        updateSavedPlansList();
    } else {
        // Show onboarding
        initOnboarding();
    }

    // Add event listener for quantity input
    const qtyInput = document.getElementById('foodQuantity');
    if (qtyInput) {
        qtyInput.addEventListener('input', updateSelectedFoodNutrition);
    }
});

// Close modals when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
    }
});
