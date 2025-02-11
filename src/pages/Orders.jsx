import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Collapse, Paper } from '@mui/material';
import { ordersData } from '../data/dummy'; // استيراد بيانات الطلبات
import { Header } from '../components'; // استيراد الهيدر الخاص بك

const Orders = () => {
  const [open, setOpen] = useState({});

  const handleClick = (index) => {
    setOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="m-2 mt-24 p-2 md:p-8 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg">
      <Header title="Orders" />

      {/* حاوية التمرير مع التحكم في الحجم */}
      <div className="overflow-x-auto overflow-y-auto max-h-[500px] mt-8 bg-gray-50 p-4 rounded-lg shadow-md">
        <TableContainer component={Paper}>
          <Table className="min-w-full"> {/* استخدام min-w-full لضمان توسيع الجدول عند الحاجة للتمرير الأفقي */}
            <TableHead>
              <TableRow className="rounded-t-lg">
                <TableCell className="font-semibold text-gray-700 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg" style={{ minWidth: '200px' }}>المنتج</TableCell>
                <TableCell className="font-semibold text-gray-700 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg" style={{ minWidth: '200px' }}>الاسم</TableCell>
                <TableCell className="font-semibold text-gray-700  bg-white dark:text-gray-200 dark:bg-secondary-dark-bg" style={{ minWidth: '200px' }}>المكان</TableCell>
                <TableCell className="font-semibold text-gray-700  bg-white dark:text-gray-200 dark:bg-secondary-dark-bg" style={{ minWidth: '200px' }}>التاريخ</TableCell>
                <TableCell className="font-semibold text-gray-700  bg-white dark:text-gray-200 dark:bg-secondary-dark-bg" style={{ minWidth: '200px' }}>الاجراءات</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ordersData.map((order, index) => (
                <React.Fragment key={`${order.OrderID}-${index}`}> {/* دمج OrderID مع الفهرس لضمان الفريدة */}
                  <TableRow>
                    <TableCell> {order.ProductImage ? (
                      <img src={order.ProductImage} alt="Product" className="w-20 h-20 object-cover rounded-md" />
                    ) : (
                      <span>لا توجد صورة</span>
                    )}
                    </TableCell>
                    <TableCell>{order.CustomerName}</TableCell>
                    <TableCell>{order.OrderID}</TableCell>
                    <TableCell>{order.Location}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleClick(index)}
                        className=" text-white px-4 py-2 rounded-md"
                      >
                        {open[index] ? 'إخفاء التفاصيل' : 'عرض التفاصيل'}
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={4} className="p-4 bg-gray-100">
                      <Collapse in={open[index]} timeout="auto" unmountOnExit>
                        <div>
                          <p>المنتجات: {order.OrderItems}</p>
                          <p>المبلغ الإجمالي: ${order.TotalAmount}</p>
                          <p>حالة الطلب: <span className={`font-semibold ${order.Status === 'Completed' ? 'text-green-500' : 'text-orange-500'}`}>{order.Status}</span></p>
                        </div>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Orders;
