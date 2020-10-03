---
title: Introducción al Array de JavaScript
date: 2020-06-28
description: Durante los últimos 5 años los arrays en JavaScript han experimentado muchas mejoras. Te muestro algunas de ellas en esta entrada.
tags: [javascript, arrays, basics]
cover: ./js-arrays-basic.png
draft: false
---

## ¿Qué es un array?

En JavaScript los arrays son objetos parecidos a una lista y contiene métodos para poder recorrerlo y mutarlo. 
Tanto su longitud como el tipo de elementos que contiene es variable. 


## Cómo crear un array
Un array se puede crear de diferentes maneras:

1. Expresando el array
2. Usando el constructor Array
3. Usando el método Array.from
4. Usando el método Array.of

### 1. Expresando el array
Directamente expresando el array con los valores que queramos incluir. También al tener longitud variable podemos 
instanciarlo vacío para posteriormente rellenarlo, ya que el rellenarlo su longitud irá aumentando.

```javascript
const food = ['pizza', 'sandwich']
console.log(food) // [ 'pizza', 'sandwich' ]

const emptyArray = [];
console.log(emptyArray.length) // 0
```

### 2. Usando el constructor Array
El constructor de Array se comporta de una manera u otra dependiendo del número y tipo de parámetros que reciba, 
en otras palabras, está sobrecargado. Si le pasamos sólo un parámetro y este parámetro es un número, entonces instanciará 
un Array vacío con la longitud del número que le hayamos pasado. En caso de que le pasemos más de un parámetro o si el único 
parámetro que le pasamos no es un número, instanciará un nuevo array con los elementos que le hemos pasado y su longitud 
será igual al número de parámetros que le hemos pasado. Por cierto, usar la palabra reservada `new` es completamente opcional.

```javascript
const numberArray = new Array(10)
console.log(numberArray) // [ <10 empty items> ]

const stringArray = new Array('foo')
console.log(stringArray) // [ 'foo' ]

const fibonacciNumbers = new Array(1,1,2,3,5,8,13)
console.log(fibonacciNumbers) // [ 1, 1,  2, 3, 5, 8, 13]
```

### 3. Array.from

Este método fue introducido en ES2015 y funciona a modo de factoría convirtiendo iterables y cosas parecidas a un array 
(también conocidos como array-like objects) como los NodeList a un array para poder usar sus métodos y trabajar con ellos 
con mayor comodidad. 

<!--AÑADIR IFRAME DE EJEMPLO--->




### 4. Array.of



## La mutabilidad del array en JavaScript

```javascript
const array = []

array[0] = 1
array[99] = 100

array.length // 100
console.log(array) // [ 1, <98 empty items>, 100 ]
```

```javascript
const array = [1,2,3,4,5]
console.log(array) // [1,2,3,4,5] 
array.length = 0
console.log(array) // [] 
```

## Cómo clonar un array en JavaScript


### Usando Array.from

Como habíamos visto a la hora de crear un array se puede usar Array.from ya que acepta cualquier cosa que se parezca a un array y crea una nueva instancia del mismo. 

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

## Destructuring

## Métodos básicos


## Métodos que mutan el array


## Formas de recorrer un array

### for

### for of

### forEach

### Comparativa con benchmark




