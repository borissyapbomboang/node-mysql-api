import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import packageJson from '../../package.json';

const router = express.Router();
const swaggerDocument = YAML.load(path.join(__dirname, '../../swagger.yaml'));

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));

export default router;