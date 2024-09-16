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
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => (
      <div className="font-DM-Sans font-medium text-[14px] leading-[24px] text-center">
        {row.getValue("id")}
      </div>
    ),
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="font-DM-Sans font-medium text-[14px] leading-[24px] text-center">
        {row.getValue("name")}
      </div>
    ),
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    accessorKey: "school",
    header: "Affiliation of Customer",
    cell: ({ row }) => (
      <div className="font-DM-Sans font-medium text-[14px] leading-[24px] text-center">
        {row.getValue("school")}
      </div>
    ),
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    accessorKey: "Username",
    header: "Username",
    cell: ({ row }) => (
      <div className="font-DM-Sans font-medium text-[14px] leading-[24px] text-center">
        {row.getValue("Username")}
      </div>
    ),
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    accessorKey: "qualityCheckStatus",
    header: "Quality Check Status",
    cell: ({ row }) => {
      const status = row.getValue("qualityCheckStatus");
      let statusColor = "";

      switch (status) {
        case "inAdminProgress":
          statusColor = "#FF914D"; // Orange
          break;
        case "isCompleted":
          statusColor = "#5CE1E6"; // Light Blue
          break;
        default:
          statusColor = "black";
      }

      return (
        <div
          className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center"
          style={{ backgroundColor: statusColor }}
        >
          Quality Check
        </div>
      );
    },
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    accessorKey: "libraryPrepStatus",
    header: "Library Prep Status",
    cell: ({ row }) => {
      const status = row.getValue("libraryPrepStatus");
      let statusColor = "";

      switch (status) {
        case "inAdminProgress":
          statusColor = "#FF914D"; // Orange
          break;
        case "isCompleted":
          statusColor = "#5CE1E6"; // Light Blue
          break;
        default:
          statusColor = "black";
      }

      return (
        <div
          className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center"
          style={{ backgroundColor: statusColor }}
        >
          Library Prep
        </div>
      );
    },
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
  {
    accessorKey: "analysisSpecificationStatus",
    header: "Analysis Specification Status",
    cell: ({ row }) => {
      const status = row.getValue("analysisSpecificationStatus");
      let statusColor = "";

      switch (status) {
        case "inAdminProgress":
          statusColor = "#FF914D"; // Orange
          break;
        case "isCompleted":
          statusColor = "#5CE1E6"; // Light Blue
          break;
        default:
          statusColor = "black";
      }

      return (
        <div
          className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center"
          style={{ backgroundColor: statusColor }}
        >
          Analysis Specification
        </div>
      );
    },
    width: "140px",
    minWidth: "140px",
    maxWidth: "140px",
  },
];


interface DashboardDataTableProps {
  data: OrderList[];
  totalPages: number;
  currentPage: number;
  searchQuery: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  buttons: (number | string)[];
}
export const DashboardSampleListDataTable: React.FC<DashboardDataTableProps> = ({ data=[], totalPages, currentPage, setCurrentPage, buttons, searchQuery, setSearchQuery }) => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const language = usePathname().split("/")[1];
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

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
        <span className="font-DM-Sans font-bold text-[#333333] text-[14px] md:text-[22px] leading-[28px] pl-[18px] md:pl-[40px]">Sample List</span>
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
                    <TableCell key={cell.id} className="border-r-[1px] font-DM-Sans font-normal text-[14px] leading-[24px] text-center"
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
        <div className="w-full border-t-[1px] flex items-center justify-center pt-[4px]"><Link href={`/${language}/Admin_Restricted/Samples`} className="font-DM-Sans font-normal text-[12px] text-[#3E8DA7] leading-[24px] text-center">View full table</Link></div>
      </div>
      <div className="flex items-center justify-start space-x-2 py-4">
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