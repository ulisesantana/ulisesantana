---
title: Descubriendo los arrays en JavaScript
date: 2020-06-28
description: Durante los últimos 5 años los arrays en JavaScript han experimentado muchas mejoras. Te muestro algunas de ellas en esta entrada.
tags: [javascript, arrays, basics]
cover: ./js-arrays-basic.png
draft: false
---

# Arrays en JavaScript

## ¿Qué es un array?

En JavaScript los arrays son objetos parecidos a una lista y contiene métodos para poder recorrerlo y mutarlo. 
Tanto su longitud como el tipo de elementos que contiene es variable. 


## Cómo crear un array
Un array se puede crear de diferentes maneras:

### 1. Expresando el array
Directamente expresando el array. `const food = ['pizza', 'sandwich']`

### 2. Usando el constructor 
```javascript
const food = new Array(2);
food[0] = 'pizza';
food[1] = 'sandwich';
```

### 3. Array.from

Convierte iterables y cosas parecidas a un array como los NodeList a un array para poder usar sus métodos y trabajar con ellos más cómodamente. 

<!--AÑADIR IFRAME DE EJEMPLO--->

También sirve para clonar arrays:

<a class="badge" href="https://repl.it/@ulisesantana/clone-array" target="_blank">

![Run on Repl.it](https://repl.it/badge/github/ulisesantana/clone-array)

</a>

```javascript
const array = [1, 2, 3, 4, 5]
const array2 = Array.from(array)

array2[0] = 'foo'

console.table({'Array original': array, 'Array clonado': array2})
/**
┌────────────────┬───────┬───┬───┬───┬───┐
│    (index)     │   0   │ 1 │ 2 │ 3 │ 4 │
├────────────────┼───────┼───┼───┼───┼───┤
│ Array original │   1   │ 2 │ 3 │ 4 │ 5 │
│ Array clonado  │ 'foo' │ 2 │ 3 │ 4 │ 5 │
└────────────────┴───────┴───┴───┴───┴───┘
*/

const array3 = array

array3[0] = 'bar'

console.table({'Array original': array, 'Array copiado': array3})
/**
┌────────────────┬───────┬───┬───┬───┬───┐
│    (index)     │   0   │ 1 │ 2 │ 3 │ 4 │
├────────────────┼───────┼───┼───┼───┼───┤
│ Array original │ 'bar' │ 2 │ 3 │ 4 │ 5 │
│ Array copiado  │ 'bar' │ 2 │ 3 │ 4 │ 5 │
└────────────────┴───────┴───┴───┴───┴───┘
*/
```


La diferencia entre `array2` y `array3` es que `array2` se crea a partir de una nueva instancia de Array basándose en `array`, mientras que `array3` copia la referencia en memoria de `array`. De esta manera, cualquier mutación en `array3` hará que `array` mute también y viceversa.

### 4. Array.of



## La mutabilidad del array

```javascript
const array = []

array[0] = 1
array[99] = 100

array.length
```

## Cómo limpiar un array
```javascript
const array = [1,2,3,4,5]
console.log(array) // [1,2,3,4,5] 
array.length = 0
console.log(array) // [] 
```

## Destructuring

## Métodos básicos


## Métodos que mutan el array

### Formas de recorrer un array

#### for

#### for of

#### forEach



