import mongoose, { Schema, models } from "mongoose";

const orderSchema = new Schema(
  {
    orderId: {
      type: String,
      required: true,
    },
    orderTitle: {
      type: String,
      required: false,
    },
    requestSheet: {
      type: new Schema({
        status: {
          type: String,
          enum: ["isPending", "inProgress", "isCompleted"],
          default: "isPending",
        },
        requestSheetLink: {
          type: String,
        },
      }),
      required: false,
    },
    costEstimate: {
      type: new Schema({
        status: {
          type: String,
          enum: ["isPending", "inProgress", "isCompleted"],
          default: "isPending",
        },
        costEstimationLink: {
          type: String,
        },
      }),
      required: false,
    },
    formalRequest: {
      type: new Schema({
        status: {
          type: String,
          enum: ["isPending", "inProgress", "isCompleted"],
          default: "isPending",
        },
      }),
      required: false,
    },
    sampleShipping: {
      type: new Schema({
        status: {
          type: String,
          enum: ["isPending", "inProgress", "inTransit", "isCompleted"],
          default: "isPending",
        },
        sampleShippingStatus: {
          type: String,
          enum: ["ok","notOk"],
        },
      }),
      required: false,
    },
    qualityCheck: {
      type: new Schema({
        status: {
          type: String,
          enum: ["isPending", "inProgress", "isCompleted"],
          default: "isPending",
        },
        qualityCheckReportLink: {
          type: String,
        },
      }),
      required: false,
    },
    libraryPrep: {
      type: new Schema({
        status: {
          type: String,
          enum: ["isPending", "inProgress", "isCompleted"],
          default: "isPending",
        },
        libraryCheckReportLink: {
          type: String,
        },
      }),
      required: false,
    },
    analysisProgress: {
      type: new Schema({
        status: {
          type: String,
          enum: ["isPending", "inProgress", "isCompleted"],
          default: "isPending",
        },
      }),
      required: false,
    },
    analysisDone: {
      type: new Schema({
        status: {
          type: String,
          enum: ["isPending", "inProgress", "isCompleted"],
          default: "isPending",
        }
      }),
      required: false,
    },
    analysisRawData: {
      type: new Schema({
        status: {
          type: String,
          enum: ["isPending", "inProgress", "isCompleted"],
          default: "isPending",
        },
        rawDataLink: {
          type: String,
        },
      }),
      required: false,
    },
    analysisSpecification: {
      type: new Schema({
        status: {
          type: String,
          enum: ["isPending", "inProgress", "isCompleted"],
          default: "isPending",
        },
        analysisSpecificationReportLink: {
          type: String,
        },
      }),
      required: false,
    },
    invoice: {
      type: new Schema({
        status: {
          type: String,
          enum: ["isPending", "inProgress", "isCompleted"],
          default: "isPending",
        },
        invoiceLink: {
          type: String,
        },
      }),
      required: false,
    },
    payment: {
      type: new Schema({
        status: {
          type: String,
          enum: ["isPending", "inProgress", "isCompleted"],
          default: "isPending",
        },
        paymentRecieptLink: {
          type: String,
        },
      }),
      required: false,
    },
  },
  { timestamps: true }
);

const Order = models.Order || mongoose.model("Order", orderSchema);
export default Order;