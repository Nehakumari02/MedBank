"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useTranslations } from 'next-intl'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { usePathname, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import Link from "next/link"

export type OrderList = {
  _id: string
  userId: string
  orderId: string
  orderTitle: string
  requestSheet: {
    status: "inAdminProgress" | "completed" | "pending" // Define other statuses as needed
    requestSheetLink: string
    _id: string
  }
  costEstimate: {
    status: "inAdminProgress" | "completed" | "pending"
    costEstimationLink: string
    _id: string
  }
  formalRequest: {
    status: "inAdminProgress" | "completed" | "pending"
    _id: string
  }
  sampleShipping: {
    status: "inAdminProgress" | "completed" | "pending"
    sampleShippingStatus: string // Define possible statuses if needed
    _id: string
  }
  qualityCheck: {
    status: "inAdminProgress" | "completed" | "pending"
    qualityCheckReportLink: string
    _id: string
  }
  libraryPrep: {
    status: "inAdminProgress" | "completed" | "pending"
    libraryCheckReportLink: string
    _id: string
  }
  analysisProgress: {
    status: "inAdminProgress" | "completed" | "pending"
    _id: string
  }
  analysisDone: {
    status: "inAdminProgress" | "completed" | "pending"
    _id: string
  }
  analysisRawData: {
    status: "inAdminProgress" | "completed" | "pending"
    rawDataLink: string
    _id: string
  }
  analysisSpecification: {
    status: "inAdminProgress" | "completed" | "pending"
    analysisSpecificationReportLink: string
    _id: string
  }
  invoice: {
    status: "inAdminProgress" | "completed" | "pending"
    invoiceLink: string
    _id: string
  }
  payment: {
    status: "inAdminProgress" | "completed" | "pending"
    paymentReceiptLink: string
    _id: string
  }
  createdAt: string // Date string or Date type if using actual Date objects
  updatedAt: string // Date string or Date type if using actual Date objects
  __v: number
}

interface OrderTitleCellProps {
  userId: string;
  orderId: string;
  orderTitle: string;
}

const OrderTitleCell: React.FC<OrderTitleCellProps> = ({ userId, orderId, orderTitle }) => {
  const router = useRouter();
  const language = usePathname().split("/")[1];

  return (
    <button
      onClick={() => {
        router.push(`/${language}/Admin_Restricted/${orderId}/NewOrder`);
      }}
      className="font-DM-Sans font-medium text-[14px] leading-[24px] text-center"
    >
      {orderTitle === "" ? "Order..." : orderTitle}
    </button>
  );
};

export const columns: ColumnDef<OrderList>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "orderId",
    header: ()=>{
      const t = useTranslations("UserDashboard");
      return(<span>{t("orderList.orderId")}</span>)
    },
    cell: ({ row }) => (
      <div className="capitalize font-DM-Sans font-medium text-[14px] leading-[24px] text-center">{row.getValue("orderId")}</div>
    ),
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    accessorKey: "orderTitle",
    header: ({ column }) => {
      const t = useTranslations("UserDashboard");
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {t("orderList.orderTitle")}
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      )
    },
    cell: ({ row }) =>(
      <OrderTitleCell
        userId={row.original.userId}
        orderId={row.original._id}
        orderTitle={row.getValue("orderTitle")}
      />
    ),
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    accessorKey: "school",
    header: ()=>{
      const t = useTranslations("UserDashboard");
      return(<span>{t("orderList.school")}</span>)
    },
    cell: ({ row }) => (
      <div className="capitalize font-DM-Sans font-medium text-[14px] leading-[24px] text-center">{row.getValue("school")}</div>
    ),
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    accessorKey: "Username",
    header: ()=>{
      const t = useTranslations("UserDashboard");
      return(<span>{t("orderList.username")}</span>)
    },
    cell: ({ row }) => (
      <div className="capitalize font-DM-Sans font-medium text-[14px] leading-[24px] text-center">{row.getValue("Username")}</div>
    ),
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    accessorKey: "requestSheetStatus",
    header: ()=>{
      const t = useTranslations("UserDashboard");
      return(<span>{t("orderList.requestSheet")}</span>)
    },
    cell: ({ row }) =>
      {
        const t = useTranslations("AdminDashboard");
        const requestSheetStatus = row.getValue("requestSheetStatus");
        if (requestSheetStatus === "inAdminProgress" ||requestSheetStatus === "isUserCompleted") {
          return <div className="h-[36px] flex flex-col items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.requestSheetInProgress")}</div>;
        } else if (requestSheetStatus === "isCompleted" || requestSheetStatus === "isAdminCompleted") {
          return <div className="h-[36px] flex flex-col items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.requestSheetIsCompleted")}</div>;
        } else {
          return <></>;
        }
      },
      width: "140px",
      minWidth: "140px",
      maxWidth: "140px",
  },
  {
    accessorKey: "costEstimateStatus",
    header: ()=>{
      const t = useTranslations("UserDashboard");
      return(<span>{t("orderList.costEstimate")}</span>)
    },
    cell: ({ row }) => {
      const t = useTranslations("AdminDashboard");
      const costEstimateStatus = row.getValue("costEstimateStatus");
  
      if (costEstimateStatus === "inAdminProgress" ||costEstimateStatus === "isUserCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.costEstimationInProgress")}</div>;
      } else if(costEstimateStatus === 'isAdminCompleted'){
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#79747E] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.costEstimationInProgress")}</div>;
      } else if (costEstimateStatus === "isCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.costEstimationIsCompleted")}</div>;
      } else {
        return <></>;
      }
    },
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    accessorKey: "formalRequestStatus",
    header: ()=>{
      const t = useTranslations("UserDashboard");
      return(<span>{t("orderList.formalRequest")}</span>)
    },
    cell: ({ row }) => {
      const formalRequestStatus = row.getValue("formalRequestStatus");
      const t = useTranslations("AdminDashboard");
  
      if (formalRequestStatus === "inAdminProgress" ||formalRequestStatus === "isUserCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.formalRequestInProgress")}</div>;
      } else if (formalRequestStatus === "isCompleted" || formalRequestStatus === "isAdminCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.formalRequestIsCompleted")}</div>;
      } else {
        return <></>;
      }
    },
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    accessorKey: "sampleShippingStatus",
    header: ()=>{
      const t = useTranslations("UserDashboard");
      return(<span>{t("orderList.sampleShipping")}</span>)
    },
    cell: ({ row }) => {
      const sampleShippingStatus = row.getValue("sampleShippingStatus");
      const t = useTranslations("AdminDashboard");
  
      if (sampleShippingStatus === "inAdminProgress" ||sampleShippingStatus === "isUserCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.sampleShippingInProgress")}</div>;
      } else if (sampleShippingStatus === "isCompleted" || sampleShippingStatus === "isAdminCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.sampleShippingIsCompleted")}</div>;
      } else {
        return <></>;
      }
    },
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    accessorKey: "qualityCheckStatus",
    header: ()=>{
      const t = useTranslations("UserDashboard");
      return(<span>{t("orderList.qualityCheck")}</span>)
    },
    cell: ({ row }) => {
      const qualityCheckStatus = row.getValue("qualityCheckStatus");
      const t = useTranslations("AdminDashboard");
  
      if (qualityCheckStatus === "inAdminProgress" ||qualityCheckStatus === "isUserCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.qualityCheckInProgress")}</div>;
      } else if(qualityCheckStatus === "isAdminCompleted"){
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#79747E] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.qualityCheckInProgress")}</div>;
      } else if (qualityCheckStatus === "isCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.qualityCheckIsCompleted")}</div>;
      } else {
        return <></>;
      }
    },
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    accessorKey: "libraryPrepStatus",
    header: ()=>{
      const t = useTranslations("UserDashboard");
      return(<span>{t("orderList.libraryPrep")}</span>)
    },
    cell: ({ row }) => {
      const t = useTranslations("AdminDashboard");
      const libraryPrepStatus = row.getValue("libraryPrepStatus");
  
      if (libraryPrepStatus === "inAdminProgress" ||libraryPrepStatus === "isUserCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.libraryPrepInProgress")}</div>;
      } else if(libraryPrepStatus === "isAdminCompleted"){ 
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#79747E] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.libraryPrepInProgress")}</div>;
      } else if (libraryPrepStatus === "isCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.libraryPrepIsCompleted")}</div>;
      } else {
        return <></>;
      }
    },
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    accessorKey: "analysisProgressStatus",
    header: ()=>{
      const t = useTranslations("UserDashboard");
      return(<span>{t("orderList.analysisProgress")}</span>)
    },
    cell: ({ row }) => {
      const t = useTranslations("AdminDashboard");
      const analysisProgressStatus = row.getValue("analysisProgressStatus");
  
      if (analysisProgressStatus === "inAdminProgress" ||analysisProgressStatus === "isUserCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.analysisProgressInProgress")}</div>;
      } else if (analysisProgressStatus === "isCompleted" || analysisProgressStatus === "isAdminCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.analysisProgressIsCompleted")}</div>;
      } else {
        return <></>;
      }
    },
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    accessorKey: "analysisDoneStatus",
    header: ()=>{
      const t = useTranslations("UserDashboard");
      return(<span>{t("orderList.analysisDone")}</span>)
    },
    cell: ({ row }) => {
      const t = useTranslations("AdminDashboard");
      const analysisDoneStatus = row.getValue("analysisDoneStatus");
  
      if (analysisDoneStatus === "inAdminProgress" ||analysisDoneStatus === "isUserCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.analysisDoneInProgress")}</div>;
      } else if (analysisDoneStatus === "isCompleted" || analysisDoneStatus === "isAdminCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.analysisDoneIsCompleted")}</div>;
      } else {
        return <></>;
      }
    },
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    accessorKey: "analysisRawDataStatus",
    header: ()=>{
      const t = useTranslations("UserDashboard");
      return(<span>{t("orderList.rawData")}</span>)
    },
    cell: ({ row }) => {
      const t = useTranslations("AdminDashboard");
      const rawDataStatus = row.getValue("analysisRawDataStatus");
  
      if (rawDataStatus === "inAdminProgress" ||rawDataStatus === "isUserCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.rawDataInProgress")}</div>;
      } else if (rawDataStatus === "isCompleted" || rawDataStatus === "isAdminCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.rawDataIsCompleted")}</div>;
      } else {
        return <></>;
      }
    },
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    accessorKey: "analysisSpecificationStatus",
    header: ()=>{
      const t = useTranslations("UserDashboard");
      return(<span>{t("orderList.analysisSpecification")}</span>)
    },
    cell: ({ row }) => {
      const t = useTranslations("AdminDashboard");
      const analysisSpecificationStatus = row.getValue("analysisSpecificationStatus");
  
      if (analysisSpecificationStatus === "inAdminProgress" ||analysisSpecificationStatus === "isUserCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.analysisSpecificationInProgress")}</div>;
      } else if (analysisSpecificationStatus === "isCompleted" || analysisSpecificationStatus === "isAdminCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.analysisSpecificationIsCompleted")}</div>;
      } else {
        return <></>;
      }
    },
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    accessorKey: "invoiceStatus",
    header: ()=>{
      const t = useTranslations("UserDashboard");
      return(<span>{t("orderList.invoice")}</span>)
    },
    cell: ({ row }) => {
      const t = useTranslations("AdminDashboard");
      const invoiceStatus = row.getValue("invoiceStatus");
  
      if (invoiceStatus === "inAdminProgress" ||invoiceStatus === "isUserCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.invoiceInProgress")}</div>;
      } else if(invoiceStatus === "isAdminCompleted"){
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#79747E] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.invoiceInProgress")}</div>;
      } else if (invoiceStatus === "isCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.invoiceIsCompleted")}</div>;
      } else {
        return <></>;
      }
    },
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    accessorKey: "paymentStatus",
    header: ()=>{
      const t = useTranslations("UserDashboard");
      return(<span>{t("orderList.payment")}</span>)
    },
    cell: ({ row }) => {
      const t = useTranslations("AdminDashboard");
      const paymentStatus = row.getValue("paymentStatus");
  
      if (paymentStatus === "inAdminProgress" ||paymentStatus === "isUserCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.paymentInProgress")}</div>;
      } else if (paymentStatus === "isCompleted" || paymentStatus === "isAdminCompleted") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">{t("orderList.paymentIsCompleted")}</div>;
      } else {
        return <></>;
      }
    },
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  // {
  //   accessorKey: "amountStatus",
  //   header: () => <div className="text-right">Amount</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue("amount"))

  //     // Format the amount as a dollar amount
  //     const formatted = new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: "USD",
  //     }).format(amount)

  //     return <div className="text-right font-medium">{formatted}</div>
  //   },
  // },
  // {
  //   id: "actions",
  //   enableHiding: false,
  //   cell: ({ row }) => {
  //     const payment = row.original

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(payment.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     )
  //   },
  // },
]

interface DashboardDataTableProps {
  data: OrderList[];
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}
export const DashboardOrderDataTable: React.FC<DashboardDataTableProps> = ({ data=[], searchQuery, setSearchQuery }) => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const language = usePathname().split("/")[1];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full h-full">
      <div className="rounded-md border shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)] bg-white">
      <div className="flex items-center justify-between py-4">
        <span className="font-DM-Sans font-bold text-[#333333] text-[14px] md:text-[22px] leading-[28px] pl-[18px] md:pl-[40px]">Order List</span>
        <div className="hidden items-center gap-[2px] md:gap-[12px] md:mr-[20px] pr-[5px]">
        <Input
          placeholder="Search"
          // value={(table.getColumn("orderTitle")?.getFilterValue() as string) ?? ""}
          value={searchQuery}
          onChange={(event) =>
            // table.getColumn("orderTitle")?.setFilterValue(event.target.value)
            setSearchQuery(event.target.value)
          }
          className="max-w-sm hidden md:block md:max-w-[360px] md:w-[360px]"
        />
        <button className="md:hidden">{searchIcon}</button>
        <button>{filterIcon}</button>
        </div>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
        <Table className="">
          <TableHeader className="sticky">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="md:h-[54px] border-t-[1px] border-b-[1px] border-dashed text-[#333333] font-DM-Sans font-medium text-[12px] md:text-[14px] leading-[24px] text-center">
                {headerGroup.headers.map((header) => {
                  const columnDef = header.column.columnDef as ColumnDef<TData, TValue> & {
                    width?: string | number;
                    minWidth?: string | number;
                    maxWidth?: string | number;
                  };
                  return (
                    <TableHead key={header.id}
                    className="text-center"
                      style={{ width: columnDef.width,
                        flexGrow: 0,
                        minWidth: columnDef.minWidth,
                        maxWidth: columnDef.maxWidth }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-none"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} 
                    className="border-r-[1px] font-DM-Sans font-normal text-[14px] leading-[24px] text-center"
                    style={{
                          width: (cell.column.columnDef as ColumnDef<TData, TValue> & {
                            width?: string | number;
                            minWidth?: string | number;
                            maxWidth?: string | number;
                          }).width,
                          flexGrow: 0,
                          minWidth: (cell.column.columnDef as ColumnDef<TData, TValue> & {
                            width?: string | number;
                            minWidth?: string | number;
                            maxWidth?: string | number;
                          }).minWidth,
                          maxWidth: (cell.column.columnDef as ColumnDef<TData, TValue> & {
                            width?: string | number;
                            minWidth?: string | number;
                            maxWidth?: string | number;
                          }).maxWidth,
                        }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="w-full border-t-[1px] flex items-center justify-center pt-[4px]"><Link href={`/${language}/Admin_Restricted/Orders`} className="font-DM-Sans font-normal text-[12px] text-[#3E8DA7] leading-[24px] text-center">View full table</Link></div>
      </div>
    </div>
  )
}

const filterIcon = <svg className="h-[24px] w-[24px] md:h-[34px] md:w-[34px] " width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="17" cy="17" r="16.75" stroke="#333333" strokeOpacity="0.25" strokeWidth="0.5"/>
<path d="M11 11.25H23C23.1989 11.25 23.3897 11.329 23.5303 11.4697C23.671 11.6103 23.75 11.8011 23.75 12V13.1895C23.75 13.3884 23.6709 13.5791 23.5303 13.7198L18.7198 18.5303C18.5791 18.6709 18.5 18.8616 18.5 19.0605V23.7893C18.5 23.9033 18.474 24.0158 18.424 24.1182C18.374 24.2207 18.3013 24.3104 18.2114 24.3805C18.1215 24.4506 18.0169 24.4994 17.9053 24.523C17.7938 24.5466 17.6783 24.5445 17.5677 24.5168L16.0677 24.1418C15.9056 24.1011 15.7616 24.0075 15.6587 23.8757C15.5559 23.7438 15.5 23.5814 15.5 23.4143V19.0605C15.5 18.8616 15.4209 18.6709 15.2802 18.5303L10.4697 13.7198C10.3291 13.5791 10.25 13.3884 10.25 13.1895V12C10.25 11.8011 10.329 11.6103 10.4697 11.4697C10.6103 11.329 10.8011 11.25 11 11.25Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

const searchIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M13.88 13.135L16.745 16L16 16.745L13.135 13.88C12.6 14.265 11.955 14.5 11.25 14.5C9.455 14.5 8 13.045 8 11.25C8 9.455 9.455 8 11.25 8C13.045 8 14.5 9.455 14.5 11.25C14.5 11.955 14.265 12.6 13.88 13.135ZM11.25 9C10.005 9 9 10.005 9 11.25C9 12.495 10.005 13.5 11.25 13.5C12.495 13.5 13.5 12.495 13.5 11.25C13.5 10.005 12.495 9 11.25 9Z" fill="#333333"/>
<circle cx="12" cy="12" r="11.75" stroke="#333333" strokeOpacity="0.25" strokeWidth="0.5"/>
</svg>