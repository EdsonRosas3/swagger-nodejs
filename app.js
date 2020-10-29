const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();

const swaggerOptions = {
    swaggerDefinition:{
        info:{
            title: 'Bibliote API',
            version: '1.0.0',
            description: 'Una API de libros'
        },
    },
    apis: ['app.js']
};

const swaggerDocs =swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /books:
 *   get:
 *     description: devuelve todos los libros
 *     responses:
 *       200:
 *         description: Success
 * 
 */
app.get('/books',(req,res)=>{
    res.send([
        {
            id:1,
            titulo: 'Fundamentos de Javascript'
        },
        {
            id:2,
            titulo: 'Aplicaciones web prograsivas'
        }
    ])
})

/**
 * @swagger
 * /books:
 *   post:
 *     description: Creamos un nuevo libro
 *     parameters:
 *     - name: titulo
 *       description: titulo del libro
 *       in: formData
 *       required: true
 *       type: string
 *     responses:
 *       200:
 *         description: Created
 * 
 */
app.post('/books',(req,res)=>{
    res.status(201).send();
})

app.listen(5000, ()=>console.log('Server on port 5000'));