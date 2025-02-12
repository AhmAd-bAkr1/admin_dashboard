import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Collapse, Paper } from '@mui/material';
import { ordersData } from '../data/dummy'; // استيراد بيانات الطلبات
import { Header } from '../components'; // استيراد الهيدر الخاص بك
import '../App.css';

const Orders = () => {
  const [open, setOpen] = useState({});

  const handleClick = (index) => {
    setOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="m-2 mt-24 p-2 md:p-8 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg">
      <Header title="Orders" />

      {/* حاوية التمرير مع التحكم في الحجم */}
      <div className="overflow-x-auto overflow-y-auto max-h-screen mt-8 bg-gray-100 p-4 shadow-md dark:text-gray-200 dark:bg-secondary-dark-bg">
        <TableContainer component={Paper} className="dark:text-gray-200 dark:bg-secondary-dark-bg">
          <Table className="min-w-full dark:text-gray-200 dark:bg-secondary-dark-bg">
            {/* رأس الجدول */}
            <TableHead className="dark:text-gray-200 dark:bg-secondary-dark-bg">
              <TableRow className="rounded-t-lg">
                <TableCell className="font-semibold text-gray-700 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg" style={{ minWidth: '200px' }}>المنتج</TableCell>
                <TableCell className="font-semibold text-gray-700 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg" style={{ minWidth: '200px' }}>النوع</TableCell>
                <TableCell className="font-semibold text-gray-700 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg" style={{ minWidth: '200px' }}>المكان</TableCell>
                <TableCell className="font-semibold text-gray-700 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg" style={{ minWidth: '200px' }}>رقم المنتج</TableCell>
                <TableCell className="font-semibold text-gray-700 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg" style={{ minWidth: '200px' }}>الاجراءات</TableCell>
              </TableRow>
            </TableHead>

            {/* جسم الجدول */}
            <TableBody>
              {ordersData.map((order, index) => (
                <React.Fragment key={`${order.OrderID}-${index}`}>
                  {/* صف الجدول الأول */}
                  <TableRow className="dark:text-gray-200 dark:bg-secondary-dark-bg">
                    <TableCell>
                      {order.ProductImage ? (
                        <img src={order.ProductImage} alt="Product" className="w-20 h-20 object-cover rounded-md" />
                      ) : (
                        <span>لا توجد صورة</span>
                      )}
                    </TableCell>
                    <TableCell className="dark:text-gray-200 dark:bg-secondary-dark-bg">{order.CustomerName}</TableCell>
                    <TableCell className="dark:text-gray-200 dark:bg-secondary-dark-bg">{order.Location}</TableCell>
                    <TableCell className="dark:text-gray-200 dark:bg-secondary-dark-bg">{order.OrderID}</TableCell>
                    <TableCell className="dark:text-gray-200 dark:bg-secondary-dark-bg">
                      <Button
                        onClick={() => handleClick(index)}
                        className="text-white px-4 py-2 rounded-md bg-white"
                      >
                        {open[index] ? 'إخفاء التفاصيل' : 'عرض التفاصيل'}
                      </Button>
                    </TableCell>
                  </TableRow>

                  {/* الصف الذي يحتوي على التفاصيل */}
                  <TableRow>
                    <TableCell colSpan={5} className="borderNone p-4 bg-gray-50 dark:text-gray-200 dark:bg-secondary-dark-bg">
                      <Collapse in={open[index]} timeout="auto" unmountOnExit>
                        {/* تفاصيل الطلب */}
                        <Table className="w-full">
                          <TableBody>
                            <TableRow>
                              <TableCell>
                                {order.ProductImage ? (
                                  <img src={order.ProductImage} alt="Product" className="w-20 h-20 object-cover rounded-md" />
                                ) : (
                                  <span>لا توجد صورة</span>
                                )}
                              </TableCell>
                              <TableCell>{order.CustomerName}</TableCell>
                              <TableCell>{order.Location}</TableCell>
                              <TableCell>{order.OrderID}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                {order.ProductImage ? (
                                  <img src={order.ProductImage} alt="Product" className="w-20 h-20 object-cover rounded-md" />
                                ) : (
                                  <span>لا توجد صورة</span>
                                )}
                              </TableCell>
                              <TableCell>{order.CustomerName}</TableCell>
                              <TableCell>{order.Location}</TableCell>
                              <TableCell>{order.OrderID}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
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
