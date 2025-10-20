import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Subscription name is required'],
      trim: true,
      minLength: 2,
      maxLength: 100,
    },
    price: {
      type: Number,
      required: [true, 'Subscription price is required'],
      min: [0, 'Price must be a positive number or zero'],
    },
    currency: {
      type: String,
      required: [true, 'Currency is required'],
      trim: true,
      uppercase: true,
      enum: ['USD', 'EUR', 'GBP', 'INR', 'JPY', 'AUD', 'CAD'], // Add more as needed
      default: 'USD',
    },
    frequency: {
      type: String,
      enum: ['monthly', 'yearly', 'weekly', 'daily'],
    },
    category: {
      type: String,
      enum: ['spotify', 'netflix', 'utilities', 'software', 'other'],
      required: [true, 'Subscription category is required'],
    },

    paymentMethod: {
      type: String,
      required: [true, 'Payment method is required'],
      trim: true,
    },
    status: {
      type: String,
      enum: ['active', 'expired', 'canceled'],
      default: 'active',
    },
    startDate: {
      type: Date,
      required: [true, 'Start date is required'],
      validate: {
        validator: function (value) {
          return value <= new Date();
        },
        message: 'Start date cannot be in the future',
      },
    },
    renewalDate: {
      type: Date,
      validate: {
        validator: function (value) {
          return value > this.startDate;
        },
        message: 'Renewal date must be after start date',
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Associated user is required'],
      index: true,
    },
  },
  { timestamps: true }
);

subscriptionSchema.pre('save', function (next) {
  if (!this.renewalDate) {
    const renewalIntervals = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    };

    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(this.renewalDate.getDate() + renewalIntervals[this.frequency]);
  }

  // Auto update status based on renewalDate
  if (this.renewalDate <= new Date()) {
    this.status = 'expired';
  }

  next();
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;
