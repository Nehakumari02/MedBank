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
    requestSheetStatus: {
      type: String,
      enum: ["isPending", "inUserProgress", "inAdminProgress", "isAdminCompleted", "isUserCompleted", "isCompleted"],
      default: "isPending",
    },
    requestSheetLink: {
      type: String,
    },
    costEstimateStatus: {
      type: String,
      enum: ["isPending", "inUserProgress", "inAdminProgress", "isAdminCompleted", "isUserCompleted", "isCompleted"],
      default: "isPending",
    },
    costEstimationLink: {
      type: String,
    },
    formalRequestStatus: {
      type: String,
      enum: ["isPending", "inUserProgress", "inAdminProgress", "isAdminCompleted", "isUserCompleted", "isCompleted"],
      default: "isPending",
    },
    sampleShippingStatus: {
      type: String,
      enum: ["isPending", "inProgress", "inTransit", "isCompleted"],
      default: "isPending",
    },
    sampleShipping: {
      type: String,
      enum: ["","ok", "notOk"],
    },
    qualityCheckStatus: {
      type: String,
      enum: ["isPending", "inUserProgress", "inAdminProgress", "isAdminCompleted", "isUserCompleted", "isCompleted"],
      default: "isPending",
    },
    qualityCheckReportLink: {
      type: String,
    },
    libraryPrepStatus: {
      type: String,
      enum: ["isPending", "inUserProgress", "inAdminProgress", "isAdminCompleted", "isUserCompleted", "isCompleted"],
      default: "isPending",
    },
    libraryCheckReportLink: {
      type: String,
    },
    analysisProgressStatus: {
        type: String,
        enum: ["isPending", "inUserProgress", "inAdminProgress", "isAdminCompleted", "isUserCompleted", "isCompleted"],
        default: "isPending",
      },
    analysisDoneStatus: {
        type: String,
        enum: ["isPending", "inUserProgress", "inAdminProgress", "isAdminCompleted", "isUserCompleted", "isCompleted"],
        default: "isPending",
      },
    analysisRawDataStatus: {
      type: String,
      enum: ["isPending", "inUserProgress", "inAdminProgress", "isAdminCompleted", "isUserCompleted", "isCompleted"],
      default: "isPending",
    },
    rawDataLink: {
      type: String,
    },
    analysisSpecificationStatus: {
      type: String,
      enum: ["isPending", "inUserProgress", "inAdminProgress", "isAdminCompleted", "isUserCompleted", "isCompleted"],
      default: "isPending",
    },
    analysisSpecificationReportLink: {
      type: String,
    },
    
    invoiceStatus: {
      type: String,
      enum: ["isPending", "inUserProgress", "inAdminProgress", "isAdminCompleted", "isUserCompleted", "isCompleted"],
      default: "isPending",
    },
    invoiceLink: {
      type: String,
    },
    paymentStatus: {
      type: String,
      enum: ["isPending", "inUserProgress", "inAdminProgress", "isAdminCompleted", "isUserCompleted", "isCompleted"],
      default: "isPending",
    },
    paymentRecieptLink: {
      type: String,
    },

    samples: [
      {
        id: { type: String, required: true },
        name: { type: String, required: true },
        qualityFees: { type: String },
        libraryFees: { type: String },
        AnalysisFees: { type: String },
        tax: { type: String },
        others: { type: String },
        total: { type: String }
      }
    ]
  },
  { timestamps: true }
);

const Order = models.Order || mongoose.model("Order", orderSchema);
export default Order;
