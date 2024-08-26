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

export type OrderList = {
  id: string
  orderTitle:string,
  requestSheet:boolean|"inProgress",
  costEstimate:boolean|"inProgress",
  formalRequest:boolean|"inProgress",
  sampleShipping:boolean|"inProgress",
  qualityCheck:boolean|"inProgress",
  libraryPrep:boolean|"inProgress",
  analysisProgress:boolean|"inProgress",
  analysisDone:boolean|"inProgress",
  rawData:boolean|"inProgress",
  analysisSpecification:boolean|"inProgress",
  invoice:boolean|"inProgress",
  payment:boolean|"inProgress"
}

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
    accessorKey: "id",
    header: "OrderId",
    cell: ({ row }) => (
      <div className="capitalize font-DM-Sans font-medium text-[14px] leading-[24px] text-center">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "orderTitle",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Order Title
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      )
    },
    cell: ({ row }) => <div className="font-DM-Sans font-medium text-[14px] leading-[24px] text-center">{row.getValue("orderTitle")}</div>,
  },
  {
    accessorKey: "requestSheet",
    header: "Request Sheet",
    cell: ({ row }) =>
      {
        const requestSheetStatus = row.getValue("requestSheet");

        if (requestSheetStatus === "inProgress") {
          return <div className="h-[36px] flex flex-col items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Request <br /><span className="text-nowrap">Sheet Sent</span></div>;
        } else if (requestSheetStatus === true) {
          return <div className="h-[36px] flex flex-col items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Request <br /><span className="text-nowrap">Sheet Sent</span></div>;
        } else {
          return <></>;
        }
      },
  },
  {
    accessorKey: "costEstimate",
    header: "Cost Estimate",
    cell: ({ row }) => {
      const costEstimateStatus = row.getValue("costEstimate");
  
      if (costEstimateStatus === "inProgress") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Cost Estimate</div>;
      } else if (costEstimateStatus === true) {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Cost Estimate</div>;
      } else {
        return <></>;
      }
    },
  },
  {
    accessorKey: "formalRequest",
    header: "Formal Request",
    cell: ({ row }) => {
      const formalRequestStatus = row.getValue("formalRequest");
  
      if (formalRequestStatus === "inProgress") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Formal Request</div>;
      } else if (formalRequestStatus === true) {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Formal Request</div>;
      } else {
        return <></>;
      }
    },
  },
  {
    accessorKey: "sampleShipping",
    header: "Sample Shipping",
    cell: ({ row }) => {
      const sampleShippingStatus = row.getValue("sampleShipping");
  
      if (sampleShippingStatus === "inProgress") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Sample Shipping</div>;
      } else if (sampleShippingStatus === true) {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Sample Shipping</div>;
      } else {
        return <></>;
      }
    },
  },
  {
    accessorKey: "qualityCheck",
    header: "Quality Check",
    cell: ({ row }) => {
      const qualityCheckStatus = row.getValue("qualityCheck");
  
      if (qualityCheckStatus === "inProgress") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Quality Check</div>;
      } else if (qualityCheckStatus === true) {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Quality Check</div>;
      } else {
        return <></>;
      }
    },
  },
  {
    accessorKey: "libraryPrep",
    header: "Library Prep",
    cell: ({ row }) => {
      const libraryPrepStatus = row.getValue("libraryPrep");
  
      if (libraryPrepStatus === "inProgress") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Library Prep</div>;
      } else if (libraryPrepStatus === true) {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Library Prep</div>;
      } else {
        return <></>;
      }
    },
  },
  {
    accessorKey: "analysisProgress",
    header: "Analysis Progress",
    cell: ({ row }) => {
      const analysisProgressStatus = row.getValue("analysisProgress");
  
      if (analysisProgressStatus === "inProgress") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Analysis Progress</div>;
      } else if (analysisProgressStatus === true) {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Analysis Progress</div>;
      } else {
        return <></>;
      }
    },
  },
  {
    accessorKey: "analysisDone",
    header: "Analysis Done",
    cell: ({ row }) => {
      const analysisDoneStatus = row.getValue("analysisDone");
  
      if (analysisDoneStatus === "inProgress") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Analysis Done</div>;
      } else if (analysisDoneStatus === true) {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Analysis Done</div>;
      } else {
        return <></>;
      }
    },
  },
  {
    accessorKey: "rawData",
    header: "Raw Data",
    cell: ({ row }) => {
      const rawDataStatus = row.getValue("rawData");
  
      if (rawDataStatus === "inProgress") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Raw Data</div>;
      } else if (rawDataStatus === true) {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Raw Data</div>;
      } else {
        return <></>;
      }
    },
  },
  {
    accessorKey: "analysisSpecification",
    header: "Analysis Specification",
    cell: ({ row }) => {
      const analysisSpecificationStatus = row.getValue("analysisSpecification");
  
      if (analysisSpecificationStatus === "inProgress") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Analysis Specification</div>;
      } else if (analysisSpecificationStatus === true) {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Analysis Specification</div>;
      } else {
        return <></>;
      }
    },
  },
  {
    accessorKey: "invoice",
    header: "Invoice",
    cell: ({ row }) => {
      const invoiceStatus = row.getValue("invoice");
  
      if (invoiceStatus === "inProgress") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Invoice</div>;
      } else if (invoiceStatus === true) {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Invoice</div>;
      } else {
        return <></>;
      }
    },
  },
  {
    accessorKey: "payment",
    header: "Payment",
    cell: ({ row }) => {
      const paymentStatus = row.getValue("payment");
  
      if (paymentStatus === "inProgress") {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#FF914D] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Payment</div>;
      } else if (paymentStatus === true) {
        return <div className="h-[36px] flex items-center justify-center text-white px-[2px] py-[4px] bg-[#5CE1E6] rounded-[2px] font-DM-Sans font-medium text-[10px] leading-[15px] text-center">Payment</div>;
      } else {
        return <></>;
      }
    },
  },
  // {
  //   accessorKey: "amount",
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

export function ArchiveDataTable({ data }: { data: OrderList[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
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
      <div className="rounded-md border shadow-[0px_8px_13px_-3px_rgba(0,_0,_0,_0.07)]">
      <div className="flex items-center justify-between py-4">
        <span className="font-DM-Sans font-bold text-[#333333] text-[14px] md:text-[22px] leading-[28px] pl-[18px] md:pl-[40px]">Order List</span>
        <div className="flex items-center gap-[2px] md:gap-[12px] md:mr-[20px] pr-[5px]">
        <Input
          placeholder="Search"
          value={(table.getColumn("orderTitle")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("orderTitle")?.setFilterValue(event.target.value)
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
                  return (
                    <TableHead key={header.id}>
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
                    <TableCell key={cell.id} className="border-r-[1px] font-DM-Sans font-normal text-[14px] leading-[24px] text-center">
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
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        {/* <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div> */}
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
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