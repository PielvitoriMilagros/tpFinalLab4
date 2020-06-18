# **Trabajo Práctico Final - Clínica Online**

![principal](https://github.com/PielvitoriMilagros/tpFinalLab4/blob/master/multiReadMe/0presentacion.gif)

El proyecto se realiza para simular la gestión de una clínica que realizará su administración de manera OnLine. Desde la aplicación creada será posible registrarse tanto como profesionales, pacientes o administradores. Cada usuario tendrá su propio menú dentro del perfil, desde el cual podrán acceder a las funcionalidades que les correspondan.

----

## **Consigna a cumplir**

```
La clínica OnLine, especialista en salud, cuenta actualmente con consultorios (6 en la actualidad), dos laboratorios (físicos en la clínica), y una sala de espera general. Está abierta al público de lunes a viernes en el horario de 8:00 a 19:00, y los sábados en el horario de 8:00 a 14:00.

Trabajan en ella profesionales de diversas especialidades, que ocupan los consultorios acorde a su disponibilidad, y reciben en ellos pacientes con turno para consulta o tratamiento. Dichos turnos son pedidos por la web seleccionando el profesional o la especialidad .La duración mínima de un turno es 30 minutos, pero los profesionales pueden cambiar la duración según su especialidad. un profesional puede tener más de una especialidad.

```

## Tres tipos de Usuario

** Administrador **
> Los administradores serán los encargados de habilitar a los profesionales para que puedan comenzar a atender.
> Solamente un administrador podrá dar de alta a otro.

** Profesional **
> Los profesionales son los especialistas que se registran en el sistema para comenzar a atender pacientes.
> Podrán tener más de una especialidad, y requieren de la autorización de un administrador para comenzar a atender

** Paciente **
> Los usuarios que se registren como pacientes serán los tomadores de los turnos.
> Podrán filtrar la opción que más les convenga antes de solicitar un turno, teniendo acceso a todos sus detalles

## Manejo del sistema

** Menú del profesional

![principal](https://github.com/PielvitoriMilagros/tpFinalLab4/blob/master/multiReadMe/1verificaEmail.gif)


![principal](https://github.com/PielvitoriMilagros/tpFinalLab4/blob/master/multiReadMe/2verifica.gif)


** Login
> Se agregan botones para facilitar el login rápido de usuarios durante las pruebas
![principal](https://github.com/PielvitoriMilagros/tpFinalLab4/blob/master/multiReadMe/4login.gif)


** Solicitud de turno
> La solicitud de un turno se realiza filtrando por el parámetro que el usuario crea conveniente, mostrandole todas las posibilidades disponibles.

![principal](https://github.com/PielvitoriMilagros/tpFinalLab4/blob/master/multiReadMe/3solicitaTurno.gif)


** Atención de un profesional
> Se agregó la funcionalidad de simular una atención de profesional, para poder corroborar el funcionamiento, las reseñas, los datos adicionales de la consulta, y los comentarios.

![principal](https://github.com/PielvitoriMilagros/tpFinalLab4/blob/master/multiReadMe/5atender.gif)







Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
