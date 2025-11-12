import { Router } from 'express';
import { createSubscription, getSubscription, getSubscriptions } from '../controllers/subscription.controler.js';

const subscriptionRouter = Router();

subscriptionRouter.get('/', getSubscriptions);

subscriptionRouter.get('/:id', getSubscription);

subscriptionRouter.post('/', createSubscription);

subscriptionRouter.put('/:id', (req, res) =>
  res.send({ title: 'UPDATE subscription' })
);

subscriptionRouter.delete('/:id', (req, res) =>
  res.send({ title: 'DELETE subscription' })
);

subscriptionRouter.get('/user/:id', (req, res) =>
  res.send({ title: 'GET all user subscriptions' })
);

subscriptionRouter.put('/:id/cancel', (req, res) =>
  res.send({ title: 'CANCEL subscriptions' })
);

subscriptionRouter.put('/upcomming-renewals', (req, res) =>
  res.send({ title: 'GET upcomming renewals' })
);

export default subscriptionRouter;
