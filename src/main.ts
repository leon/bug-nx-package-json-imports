import express from 'express';
import { parseISO } from 'date-fns/parseISO';
import { format } from 'date-fns/format';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  const date = parseISO('2024-01-01');
  res.send({ message: `Hello ${format(date, 'yyyy-MM-dd')}` });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
