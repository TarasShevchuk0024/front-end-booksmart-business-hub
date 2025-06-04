
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClientDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Mock data for demonstration
  const availableServices = [
    { id: 1, name: 'Чоловіча стрижка', duration: 30, price: 200, business: 'Перукарня "Стиль"' },
    { id: 2, name: 'Жіноча стрижка', duration: 45, price: 350, business: 'Салон "Красуня"' },
    { id: 3, name: 'Заміна масла', duration: 60, price: 800, business: 'Автосервіс "Майстер"' },
    { id: 4, name: 'Персональне тренування', duration: 90, price: 500, business: 'Фітнес "Енергія"' },
  ];

  const myBookings = [
    { id: 1, service: 'Чоловіча стрижка', date: '2024-06-08', time: '14:00', status: 'CONFIRMED', business: 'Перукарня "Стиль"' },
    { id: 2, service: 'Заміна масла', date: '2024-06-10', time: '10:00', status: 'PENDING', business: 'Автосервіс "Майстер"' },
  ];

  const timeSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

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
            <span className="text-gray-600">Вітаємо, Олексій!</span>
            <Button variant="outline" className="border-blue-200 text-blue-600">
              Профіль
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Панель клієнта
          </h2>
          <p className="text-gray-600">Оберіть послугу та забронюйте зручний час</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Available Services */}
          <div className="lg:col-span-2">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">Доступні послуги</CardTitle>
                <CardDescription>Оберіть послугу для бронювання</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {availableServices.map((service) => (
                    <div key={service.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-800">{service.name}</h3>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {service.price} ₴
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{service.business}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{service.duration} хв</span>
                        </div>
                        <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          Забронювати
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Booking Calendar */}
            <Card className="mt-6 border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">Оберіть час</CardTitle>
                <CardDescription>Доступні слоти на сьогодні</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant="outline"
                      className="border-blue-200 text-blue-600 hover:bg-blue-50"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* My Bookings */}
          <div>
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">Мої бронювання</CardTitle>
                <CardDescription>Поточні та майбутні записи</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myBookings.map((booking) => (
                    <div key={booking.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-800">{booking.service}</h4>
                        <Badge 
                          variant={booking.status === 'CONFIRMED' ? 'default' : 'secondary'}
                          className={booking.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                        >
                          {booking.status === 'CONFIRMED' ? 'Підтверджено' : 'Очікує'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{booking.business}</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{booking.date} о {booking.time}</span>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <Button size="sm" variant="outline" className="text-xs">
                          Змінити
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs text-red-600 hover:text-red-700">
                          Скасувати
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Profile Card */}
            <Card className="mt-6 border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">Профіль</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">Олексій Петренко</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">alex@example.com</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4 border-blue-200 text-blue-600">
                    Редагувати профіль
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
