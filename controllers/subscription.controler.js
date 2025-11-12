import Subscription from '../models/subscription.model.js';

export const getSubscriptions = async (req, res, next) => {
  try {
    // Fetch all subscriptions from database
    const subscriptions = await Subscription.find();

    console.log(subscriptions);

    if (subscriptions.length === 0) {
      const error = new Error('No subscriptions found');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      message: 'Subscriptions fetched successfully',
      data: {
        subscriptions,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getSubscription = async (req, res, next) => {
  try {
    // Fetch subscription from database
    const subscription = await Subscription.findById(req.params.id);

    if (!subscription) {
      const error = new Error('Subscription not found');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      message: 'Subscription fetched successfully',
      data: {
        subscription,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const createSubscription = async (req, res, next) => {
  try {
    const { user, frequency, startDate } = req.body;

    const newSubscription = new Subscription({
      user,
      frequency,
      startDate,
    });

    await newSubscription.save();

    res.status(201).json({
      success: true,
      message: 'Subscription created successfully',
      data: {
        subscription: newSubscription,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const updateSubscription = async (req, res, next) => {
  try {
    const updatedSubscription = await Subscription.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedSubscription) {
      const error = new Error('Subscription not found');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      message: 'Subscription updated successfully',
      data: {
        subscription: updatedSubscription,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteSubscription = async (req, res, next) => {
  try {
    const deletedSubscription = await Subscription.findByIdAndDelete(
      req.params.id
    );

    if (!deletedSubscription) {
      const error = new Error('Subscription not found');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      message: 'Subscription deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
