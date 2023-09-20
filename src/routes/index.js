// const express = require("express");
import express from 'express';
import { testEnvironmentVariable } from '../config';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: testEnvironmentVariable }));

// module.exports = indexRouter;
export default indexRouter;
