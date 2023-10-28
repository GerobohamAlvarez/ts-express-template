
# ts-express-template

Project to be used as a template for the creation of node projects with express and typescript following clean architectures and good practices, the objective of this project is to be a boilerplate to start quickly any project without repetitive tasks focusing only on the functionality of your business or project.

## Installation

The installation process is very simple, just follow the steps below.

### 1.- Install dependencies:

```bash
  cd <proyect-folder>
  npm run install
```

### 2.- Configure transpiler options:

In the root of the project you will find the file __tsconfig.json__ where you can configure the different options offered by the typescript compiler for more information go to :

[https://www.typescriptlang.org/tsconfig](https://www.typescriptlang.org/tsconfig)

### 3.- Linter options:

In the root of the project you will find the file __.eslinttrc__ where you can configure the different options of the linter, it is configured with some options to my taste and this may vary over time, feel free to configure it to your liking:

[https://eslint.org/docs/latest/rules/](https://eslint.org/docs/latest/rules/)

### 4.- Prettier options:

En la raiz del proyecto encontrara el fichero __.prettierrc.json__ donde podra configurar las distintas opciones de prettier, esta configurado con algunas opciones basadas en las reglas del linter y algunas opciones a mi gusto, como siempre esto puede variar en el tiempo, sientete libre de configurarlas a tu gusto:

[https://prettier.io/docs/en/options](https://prettier.io/docs/en/options)



## Running Tests

To run tests, run the following command :

```bash
  npm run test
```

In case you need to see the live test results you can use the following command:

```bash
  npm run test:watch
```




## Environment Variables

The environment variables will be read with the new functionality offered by node
*--env-file=config/local/.env* so we avoid unnecessary dependencies.

in the future we will be adding the required or recommended environment variables, being this project a template it will only require the indispensable variables to start.


```
PROCESS_ENV=local
PORT=3000
```


## Authors

- [@TheByAlex](https://github.com/GerobohamAlvarez)


## Tech Stack

**Server:** Node, Express, Typescript.



