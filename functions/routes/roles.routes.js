const { Router } = require('express')
const router = Router();
const admin = require("firebase-admin");

const db = admin.firestore();
// Crear Roles

router.post('/roles', async (req, res) => {
    try {
        await db
            .collection('rolesUsuario')
            .doc('/' + req.body.id + '/')
            .create({ rol: req.body.rol })
        return res.status(200).json('Registro Creado');
    } catch (error) {
        return res.status(500).send(error);
    }
})

//Consultar un Rol

router.get('/roles/:id', async (req, res) => {
    try {
        const doc = db.collection('rolesUsuario').doc(req.params.id);
        const rol = await doc.get();
        const response = rol.data();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).send(error);
    }
})

// Consultar todos los roles

router.get('/roles', async (req, res) => {
    try {
        const query = db.collection('rolesUsuario');
        const querySnapShot = await query.get();
        const docs = querySnapShot.docs;

        const response = docs.map((doc) => ({
            id: doc.id,
            rol: doc.data().rol,
        }));
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).send(error);
    }
})

//editar Roles

router.put('/roles/:id', async (req, res) => {
    try {
        const doc = db.collection('rolesUsuario').doc(req.params.id);
        await doc.update({
            rol: req.body.rol,
        });
        return res.status(200).json('registro actualizado');
    } catch (error) {
        return res.status(500).send(error);
    }
})


//borrar Roles
router.delete('/roles/:id', async (req, res) => {
    try {
        const doc = db.collection('rolesUsuario').doc(req.params.id);
        await doc.delete();
        return res.status(200).json('Registro Eliminado');
    } catch (error) {
        return res.status(500).send(error);
    }
})

module.exports = router;