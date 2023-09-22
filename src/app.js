import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/v1', indexRouter);
app.use("/users", usersRouter)

// error handler must come last. 
app.use((err, req, res, next) => {
  res.status(400).json({ error: err.stack });
});

// module.exports = app;
export default app;
