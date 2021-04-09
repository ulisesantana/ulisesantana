---
title: Introducción a micro frontends
date: 2021-01-03
description: Micro frontends es una arquitectura que cada vez suena más y se usa más por parte de las empresas.
tags: [micro frontends,arquitectura,frontend]
cover: ./thumbnail.png
draft: true
---

Cada vez se habla más de micro frontends, una arquitectura inspirada en la 
arquitectura de [microservicios](https://microservices.io/) nacida de la necesidad 
de dar más flexibilidad al frontend. Por lo general, independientemente de como 
sea el backend, el frontend de las aplicaciones de hoy en día están desarrolladas 
por un único equipo y a medida que el producto evoluciona y se añaden funcionalidades 
el frontend se hace más grande, difícil de mantener y complejo para las nuevas incorporaciones al equipo de frontend. 
En las siguientes arquitecturas vemos como el frontend es siempre un monolito:

![monolith-frontback-microservices.png](content/blog/2021/micro-frontends-intro/monolith-frontback-microservices.png)
<small>From [https://micro-frontends.org/](https://micro-frontends.org/)</small>

De izquierda a derecha vamos pasando de una arquitectura más acoplada a menos acoplada llegando finalmente a la 
arquitectura de microservicios. En todas el frontend sigue siendo un único equipo que responde a todo y que debe 
comunicarse con múltiples equipos para saber cómo integrarse con el backend. En la siguiente imagen vemos cual 
sería el siguiente paso lógico: micro frontends.

![verticals-headline.png](content/blog/2021/micro-frontends-intro/verticals-headline.png)
<small>From [https://micro-frontends.org/](https://micro-frontends.org/)</small>

Ahora vemos como ya no hay equipos dependiendo de si es frontend o backend, sino que se definen por funcionalidades 
de la aplicación muy bien definidas. Tal vez por esto micro frontends es una arquitectura que cada vez va ganando 
más tracción y empresas como Ikea, DAZN o Zalando la usan en sus aplicaciones. 
[Luca Mezzalira](https://lucamezzalira.com/about/), vicepresidente de arquitectura en DAZN, define los micro 
frontends de una manera clara y concisa:

> Los micro frontends son la representación técnica de un subdominio empresarial, permiten implementaciones 
> independientes con la misma o diferente elección de tecnología, finalmente evitando compartir lógica con otros 
> subdominios y son propiedad de un solo equipo.

Tal como define Luca, cada equipo es responsable de una parte del dominio del negocio y tiene total autonomía sobre 
el mismo, dándole toda la libertad que necesita para innovar y ofrecer la mejor solución sin afectar al resto de la 
aplicación. Esto permite a grandes empresas poder dividir su dominio y delegarlo a equipos que se comportan como 
startups, libres de tomar las decisiones que necesiten para poder validar el producto lo antes posible.

Estos equipos a cambio de esa libertad y agilidad tiene toda la responsabilidad sobre esa parte del dominio, por lo 
que debe ser un equipo multifuncional que se encargue de:

- Desarrollo
- Testing
- Build
- Despliegue
- Documentar
- Dar soporte vital al micro frontend

Por otro lado, la independencia tecnológica que te brinda la arquitectura con micro frontends te permite poder 
elegir la herramienta que mejor se ajusta al problema que tienes que solucionar, ya que no es lo mismo una landing 
page que la página del perfil del usuario. Las necesidades en cuanto a tráfico y qué puede hacer o no el usuario 
final son muy diferentes. En el caso de la landing page te interesa generar contenido estático que poder cachear 
para minimizar el tiempo de respuesta, ya que al fin y al cabo es la parte que vende el producto, mientras que el 
perfil de usuario contiene información dinámica y no es donde el usuario va a pasar la mayor parte del tiempo una 
vez se dé de alta en la plataforma.

## Vertical u Horizontal

## API First

## Gestión de dependencias

## Frameworks para micro frontends

## SEO

## Recursos

- [Lessons from DAZN: Scaling Your Project with Micro-Frontends](https://www.infoq.com/presentations/dazn-microfrontend/)
- [Micro Frontends](https://micro-frontends-es.org/)
- [Micro Frontends post](https://martinfowler.com/articles/micro-frontends.html)
- [Micro frontends: The Benefits of Microservices for Client-Side Development](https://thenewstack.io/microfrontends-the-benefits-of-microservices-for-client-side-development/)