# Proyecto final - Procesadores de Lenguajes#
___

![logo](https://raw.githubusercontent.com/alu0100698121/MusicL/master/public/MusicL2.png)

___
## 1. Objetivo
El objetivo de este proyecto es conseguir un lenguaje de propósito específico para la creación de partituras músicales.

En primera instancia, se ofrecerá un árbol que describe la notación que se escribe por texto.

#### 1.1 Objetivos futuros
- Consguir representar en forma de partitura real la notación escrita. (Pendiente)

## 2. Acceso a la página web

La aplicación se encuentra alojada en [Heroku][Heroku]: [musicl.herokuapp.com][MusicL]
   

## 3. Descripción de uso del DSL

Para escribir una partitura, primero debe indicarse la clave, la armadura (número de sostenidos o bemoles) y el compás de la composición musical. Por ejemplo, para escribir una partitura en clave de sol, en Re Mayor (2 sostenidos) y con un compás de 4/4, se ha de comenzar así:

    SOL 2# 4/4
    
Luego, querremos añadir notas; para ello, se indica el nombre de la nota (en notación musical inglesa), una alteración accidental si se desea (# -> sostenido, b -> bemol) junto con el valor de su figura (1 -> Redonda, 2 -> Blanca, 4 -> Negra). Si continuamos con el ejemeplo anterior, podemos añadir un par de notas:

    SOL 2# 4/4 C4 D4 Eb4 F4
    
Por último, el compositor debe marcar los fines de compases y de partitura con una simple o doble barra vertical, respectivamente. Continuando con el ejemplo anterior, completamos una escala de la siguente manera:

    SOL 2# 4/4 C4 D4 Eb4 F4 | G4 A4 B4 C4 ||


## 4. Dependencias

Para el desarrollo de este proyecto se han usado estas dependecias:
- [Jison][Jison]
- [Sass][Sass]
- [Sinatra][Sinatra]


## 5. Autores
- [Laura Fariña Rodríguez][Laura-gh]
- [Eliasib Jesús García Martín][Eliasib-gh]
- [Alejandro Hernández Hernández][Alejandro-gh]
- [Néstor Albelo Jorge][Nestor-gh]


[Heroku]: https://www.heroku.com/
[MusicL]: http://musicl.herokuapp.com/
[Jison]: http://zaach.github.io/jison/
[Sass]: http://sass-lang.com/
[Sinatra]: http://www.sinatrarb.com/
[Laura-gh]: https://github.com/alu0100693096
[Eliasib-gh]: https://github.com/alu0100698121
[Alejandro-gh]: https://github.com/alu0100699715
[Nestor-gh]: https://github.com/alu0100598322