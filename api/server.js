const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const productos = [
    {
        id: 1,
        nombre: 'Laptop',
        descripcion: 'Computador portátil para trabajo y estudio.',
        precio: 2500000
    },
    {
        id: 2,
        nombre: 'Celular',
        descripcion: 'Teléfono inteligente de última generación.',
        precio: 1200000
    },
    {
        id: 3,
        nombre: 'Audífonos',
        descripcion: 'Audífonos inalámbricos.',
        precio: 180000
    },
    {
        id: 4,
        nombre: 'Tablet',
        descripcion: 'Tablet para estudio y entretenimiento.',
        precio: 900000
    },
    {
        id: 5,
        nombre: 'Teclado',
        descripcion: 'Teclado inalámbrico para computador.',
        precio: 150000
    }
];

app.get('/productos', (req, res) => {
    const texto = (req.query.buscar || '').toLowerCase();

    const resultado = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(texto)
    );

    res.json(resultado);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`API Express funcionando en http://localhost:${PORT}`);
});