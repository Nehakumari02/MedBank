import mongoose, { Schema, models } from "mongoose";

const orderSchema = new Schema(
  {
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    orderTitle: {
      type: String,
      required: false,
    },
    requestSheet: {
      status: {
        type: String,
        enum: ["isPending", "inProgress", "isCompleted"],
        default: "isPending",
      },
      requestSheetLink: {
        type: String,
      },
    },
    costEstimate: {
      status: {
        type: String,
        enum: ["isPending", "inProgress", "isCompleted"],
        default: "isPending",
      },
      costEstimationLink: {
        type: String,
      },
    },
    formalRequest: {
      status: {
        type: String,
        enum: ["isPending", "inProgress", "isCompleted"],
        default: "isPending",
      },
    },
    sampleShipping: {
      status: {
        type: String,
        enum: ["isPending", "inProgress", "inTransit", "isCompleted"],
        default: "isPending",
      },
      sampleShippingStatus: {
        type: String,
        enum: ["ok", "notOk"],
      },
    },
    qualityCheck: {
      status: {
        type: String,
        enum: ["isPending", "inProgress", "isCompleted"],
        default: "isPending",
      },
      qualityCheckReportLink: {
        type: String,
      },
    },
    libraryPrep: {
      status: {
        type: String,
        enum: ["isPending", "inProgress", "isCompleted"],
        default: "isPending",
      },
      libraryCheckReportLink: {
        type: String,
      },
    },
    analysisProgress: {
      status: {
        type: String,
        enum: ["isPending", "inProgress", "isCompleted"],
        default: "isPending",
      },
    },
    analysisDone: {
      status: {
        type: String,
        enum: ["isPending", "inProgress", "isCompleted"],
        default: "isPending",
      },
    },
    analysisRawData: {
      status: {
        type: String,
        enum: ["isPending", "inProgress", "isCompleted"],
        default: "isPending",
      },
      rawDataLink: {
        type: String,
      },
    },
    analysisSpecification: {
      status: {
        type: String,
        enum: ["isPending", "inProgress", "isCompleted"],
        default: "isPending",
      },
      analysisSpecificationReportLink: {
        type: String,
      },
    },
    invoice: {
      status: {
        type: String,
        enum: ["isPending", "inProgress", "isCompleted"],
        default: "isPending",
      },
      invoiceLink: {
        type: String,
      },
    },
    payment: {
      status: {
        type: String,
        enum: ["isPending", "inProgress", "isCompleted"],
        default: "isPending",
      },
      paymentRecieptLink: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const Order = models.Order || mongoose.model("Order", orderSchema);
export default Order;
