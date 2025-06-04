
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, User, CheckCircle, Calendar as CalendarIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessDashboard = () => {
  // Mock data for demonstration
  const todayBookings = [
    { id: 1, client: 'Олексій Петренко', service: 'Чоловіча стрижка', time: '09:00', status: 'CONFIRMED', phone: '+380501234567' },
    { id: 2, client: 'Марія Іванова', service: 'Жіноча стрижка', time: '10:30', status: 'PENDING', phone: '+380509876543' },
    { id: 3, client: 'Дмитро Коваль', service: 'Стрижка + борода', time: '14:00', status: 'CONFIRMED', phone: '+380672345678' },
    { id: 4, client: 'Анна Сидорова', service: 'Фарбування', time: '15:30', status: 'PENDING', phone: '+380931234567' },
  ];

  const services = [
    { id: 1, name: 'Чоловіча стрижка', duration: 30, price: 200, active: true },
    { id: 2, name: 'Жіноча стрижка', duration: 45, price: 350, active: true },
    { id: 3, name: 'Стрижка + борода', duration: 60, price: 300, active: true },
    { id: 4, name: 'Фарбування', duration: 90, price: 800, active: false },
  ];

  const analytics = {
    todayRevenue: 1650,
    weekRevenue: 8200,
    monthRevenue: 32500,
    totalBookings: 156,
    confirmedBookings: 134,
    pendingBookings: 22,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              BookEasy
            </h1>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Перукарня "Стиль"</span>
            <Button variant="outline" className="border-blue-200 text-blue-600">
              Налаштування
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Панель бізнесу
          </h2>
          <p className="text-gray-600">Керуйте бронюваннями, послугами та переглядайте аналітику</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-blue-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Виручка сьогодні</p>
                  <p className="text-2xl font-bold text-green-600">{analytics.todayRevenue} ₴</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Бронювань сьогодні</p>
                  <p className="text-2xl font-bold text-blue-600">{todayBookings.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CalendarIcon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Підтверджено</p>
                  <p className="text-2xl font-bold text-green-600">{analytics.confirmedBookings}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Очікує підтвердження</p>
                  <p className="text-2xl font-bold text-yellow-600">{analytics.pendingBookings}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-blue-50">
            <TabsTrigger value="bookings" className="data-[state=active]:bg-white">Бронювання</TabsTrigger>
            <TabsTrigger value="services" className="data-[state=active]:bg-white">Послуги</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-white">Аналітика</TabsTrigger>
          </TabsList>

          <TabsContent value="bookings">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">Сьогоднішні бронювання</CardTitle>
                <CardDescription>Керуйте записами клієнтів на сьогодні</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayBookings.map((booking) => (
                    <div key={booking.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-800">{booking.client}</h4>
                          <p className="text-sm text-gray-600">{booking.service}</p>
                          <p className="text-sm text-gray-500">{booking.phone}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-lg font-medium">{booking.time}</span>
                          </div>
                          <Badge 
                            variant={booking.status === 'CONFIRMED' ? 'default' : 'secondary'}
                            className={booking.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                          >
                            {booking.status === 'CONFIRMED' ? 'Підтверджено' : 'Очікує'}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        {booking.status === 'PENDING' && (
                          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                            Підтвердити
                          </Button>
                        )}
                        <Button size="sm" variant="outline" className="border-blue-200 text-blue-600">
                          Редагувати
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                          Скасувати
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <Card className="border-blue-100">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-blue-900">Мої послуги</CardTitle>
                    <CardDescription>Керуйте переліком своїх послуг</CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Додати послугу
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {services.map((service) => (
                    <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-800">{service.name}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {service.price} ₴
                          </Badge>
                          <Badge 
                            variant={service.active ? 'default' : 'secondary'}
                            className={service.active ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}
                          >
                            {service.active ? 'Активна' : 'Неактивна'}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{service.duration} хв</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="border-blue-200 text-blue-600">
                            Редагувати
                          </Button>
                          <Button size="sm" variant="outline" className={service.active ? 'text-red-600' : 'text-green-600'}>
                            {service.active ? 'Деактивувати' : 'Активувати'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="text-blue-900">Виручка</CardTitle>
                  <CardDescription>Фінансова статистика</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Сьогодні</span>
                      <span className="font-semibold text-green-600">{analytics.todayRevenue} ₴</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Цього тижня</span>
                      <span className="font-semibold text-green-600">{analytics.weekRevenue} ₴</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Цього місяця</span>
                      <span className="font-semibold text-green-600">{analytics.monthRevenue} ₴</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="text-blue-900">Завантаженість</CardTitle>
                  <CardDescription>Статистика бронювань</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-gray-600">Всього бронювань</span>
                      <span className="font-semibold text-blue-600">{analytics.totalBookings}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-600">Підтверджено</span>
                      <span className="font-semibold text-green-600">{analytics.confirmedBookings}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                      <span className="text-gray-600">Очікує</span>
                      <span className="font-semibold text-yellow-600">{analytics.pendingBookings}</span>
                    </div>
                    <div className="mt-4 p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
                      <p className="text-sm text-gray-700 font-medium">💡 Рекомендація:</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Найбільша завантаженість у п'ятницю після 15:00. Розгляньте можливість подовження робочого дня.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BusinessDashboard;
