## PDF files

- [Пояснительная записка](https://github.com/Pavel-Innokentevich-Galanin/gpi_coursework5/raw/pdf/gpi_coursework4_pz.pdf)
- [Приложение А](https://github.com/Pavel-Innokentevich-Galanin/gpi_coursework5/raw/pdf/gpi_coursework4_a.pdf)
- [Приложение А (Схема программы)](https://github.com/Pavel-Innokentevich-Galanin/gpi_coursework5/raw/pdf/gpi_coursework4_a_programPlan.pdf)
- [Приложение Б](https://github.com/Pavel-Innokentevich-Galanin/gpi_coursework5/raw/pdf/gpi_coursework4_b.pdf)

---

## Installing packages

```bash
make gpi_install
```

## Project start

- 1st terminal: `make gpi_run-lamp-mysql` - LAMP MySQL
    - [localhost:8000](http://localhost:8000) - phpMyAdmin
    - ~~[localhost:8001](http://localhost:8001) - Apache PHP~~

- 2nd terminal: `make gpi_run-backend-api` - Express
    - [localhost:3001](http:localhost:3001) - NodeJS Express API (backend)

- 3rd terminal: `make gpi_run-frontend-adminpanel` - Frontend admin panel
    - [localhost:3003](http:localhost:3003) - React JS

- 4th terminal: `make gpi_run-frontend-webstore` - Frontend webstore
    - [localhost:3002](http:localhost:3002) - React JS

## Make PDF

```bash
make gpi_run-texlive-docker
```
