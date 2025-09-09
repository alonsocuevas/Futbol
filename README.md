# FutbolApp ⚽

[![Estado](https://img.shields.io/badge/estado-%20concluido-yellow)](#) [![Licencia](https://img.shields.io/badge/licencia-MIT-blue)](#LICENSE) [![Stack](https://img.shields.io/badge/stack-HTML%2C%20CSS%2C%20JS-orange)](#)

Aplicación web para la administración de jugadores y equipos de una asociación de fútbol. Permite registrar jugadores, calcular su precio de venta basado en goles y validar reglas de negocio específicas.

---

## 🎯 Funcionalidades

- Registro de jugadores con datos:
  - Nombre (mínimo 4 caracteres)  
  - Número de camiseta (1 a 40)  
  - Edad  
  - Si es arquero o no  
  - Equipo al que pertenece  
  - Goles realizados  
  - Precio de venta calculado automáticamente (cada gol vale $5000)  
- Validaciones de datos:
  - Nombre demasiado corto o número de camiseta inválido genera alerta  
- Modal interactivo para mostrar datos del jugador ingresado  
- Lista de jugadores registrada en la sesión  
- Interfaz responsiva y visualmente atractiva con fondo personalizado  
- Botón de navegación para volver al portafolio o página principal  

---

## Demo en línea

Disponible en GitHub Pages:  
https://alonsocuevas.github.io/Futbol/futbolapp/index.html

---

## Instalación y Uso

1. Clona el repositorio:  
```bash
git clone https://github.com/alonsocuevas/Futbol.git
cd Futbol/futbolapp
```
2. Abre index.html en un navegador.

3. Interactúa con la interfaz:

- Ingresa los datos de un jugador

- Revisa el modal con los detalles del jugador y su precio de venta

- Navega entre jugadores ingresados y visualiza la lista

## Tecnologías
- HTML5

- CSS3

- JavaScript (ES6)

- Modal interactivo con JavaScript

- Diseño responsivo con efectos de blur y semitransparencia

## Mejoras sugeridas
- Guardado persistente de jugadores usando localStorage o base de datos

- Implementar edición y eliminación de jugadores

- Integrar cálculo de estadísticas por equipo

- Mejora en la visualización de la lista de jugadores con tablas o tarjetas

## Autor
Alonso Cuevas Pizarro [![Mi GitHub](https://img.shields.io/badge/-GitHub-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/alonsocuevas)
