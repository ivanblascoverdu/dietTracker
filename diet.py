import os

# CONFIGURACIÓN DE TUS OBJETIVOS (Basado en 181cm, 90kg, Activo)
OBJETIVO_KCAL = 2550
OBJETIVO_PROT = 200
OBJETIVO_HC = 230
OBJETIVO_GRASA = 75

# BASE DE DATOS DE ALIMENTOS (Valores por cada 100g de producto)
# Formato: "Nombre": [Kcal, Proteína, Carbohidratos, Grasas]
alimentos_db = {
    "Pechuga de Pollo": [165, 31, 0, 3.6],
    "Arroz Integral": [111, 2.6, 23, 0.9],
    "Huevos (unidad)": [70, 6, 0.5, 5],
    "Claras de Huevo": [52, 11, 0.7, 0.2],
    "Avena": [389, 17, 66, 7],
    "Crema de cacahuete": [588, 25, 20, 50],
    "Patata cocida": [77, 2, 17, 0.1],
    "Salmón": [208, 20, 0, 13],
    "Ternera Magra": [250, 26, 0, 15],
    "Queso Fresco Batido 0%": [46, 8, 3.5, 0.1],
    "Aguacate": [160, 2, 8.5, 15],
    "Platano (unidad)": [89, 1.1, 23, 0.3],
    "Proteina Whey (scoop)": [110, 24, 2, 1.5],
    "Pan Integral": [250, 9, 45, 3],
    "Pasta Integral": [350, 13, 70, 2.5],
    "Aceite de Oliva (cucharada)": [90, 0, 0, 10],
}

dieta_actual = {"Desayuno": [], "Comida": [], "Merienda": [], "Cena": []}

def calcular_totales():
    t_kcal = t_prot = t_hc = t_grasa = 0
    for momento in dieta_actual:
        for item in dieta_actual[momento]:
            nombre, cantidad = item
            valores = alimentos_db[nombre]
            factor = cantidad / 100 if "unidad" not in nombre and "scoop" not in nombre and "cucharada" not in nombre else cantidad
            t_kcal += valores[0] * factor
            t_prot += valores[1] * factor
            t_hc += valores[2] * factor
            t_grasa += valores[3] * factor
    return round(t_kcal), round(t_prot), round(t_hc), round(t_grasa)

def mostrar_interfaz():
    os.system('cls' if os.name == 'nt' else 'clear')
    kcal, p, hc, g = calcular_totales()
    print(f"--- TRACKER DE DIETA PARA RECOMPOSICIÓN (90KG) ---")
    print(f"CALORÍAS: {kcal}/{OBJETIVO_KCAL} | P: {p}/{OBJETIVO_PROT}g | HC: {hc}/{OBJETIVO_HC}g | G: {g}/{OBJETIVO_GRASA}g")
    print("-" * 50)
    for momento, items in dieta_actual.items():
        print(f"[{momento}]: {', '.join([f'{i[1]}g/un de {i[0]}' for i in items])}")
    print("-" * 50)

def main():
    while True:
        mostrar_interfaz()
        print("1. Añadir Alimento | 2. Ver Alimentos | 3. Resetear | 4. Salir")
        opcion = input("Selecciona una opción: ")

        if opcion == "1":
            comida = input("¿En qué momento? (Desayuno/Comida/Merienda/Cena): ").capitalize()
            if comida in dieta_actual:
                nombre = input("Nombre del alimento (exacto): ")
                if nombre in alimentos_db:
                    cant = float(input(f"Cantidad de {nombre} (gramos/unidades): "))
                    dieta_actual[comida].append((nombre, cant))
                else:
                    print("Alimento no encontrado.")
        elif opcion == "2":
            print("\nBase de datos disponible:")
            for k in alimentos_db.keys(): print(f"- {k}")
            input("\nPresiona Enter para continuar...")
        elif opcion == "4":
            break

if __name__ == "__main__":
    main()