
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              BookEasy
            </h1>
          </div>
          <div className="flex space-x-3">
            <Link to="/login">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                Увійти
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Реєстрація
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Система бронювання для малого бізнесу
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Допомагаємо клієнтам легко бронювати послуги, а власникам бізнесу — ефективно керувати розкладом та отримувати аналітику
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/client-dashboard">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Забронювати послугу
              </Button>
            </Link>
            <Link to="/business-dashboard">
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                Для бізнесу
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border-blue-100 hover:shadow-lg transition-shadow duration-300 hover:border-blue-200">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg text-blue-900">Легке бронювання</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Інтуїтивний календар для швидкого вибору часу та послуги
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-blue-100 hover:shadow-lg transition-shadow duration-300 hover:border-blue-200">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg text-blue-900">Керування розкладом</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Повний контроль над робочим часом та доступністю послуг
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-blue-100 hover:shadow-lg transition-shadow duration-300 hover:border-blue-200">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg text-blue-900">Аналітика</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Детальна статистика завантаженості та рекомендації
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-blue-100 hover:shadow-lg transition-shadow duration-300 hover:border-blue-200">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg text-blue-900">Сповіщення</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Автоматичні нагадування та підтвердження бронювань
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Demo Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <h3 className="text-2xl font-bold mb-2">Демонстрація інтерфейсу</h3>
            <p className="text-blue-100">Переглядайте різні ролі користувачів та функціонал системи</p>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">Для клієнтів:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Перегляд доступних послуг</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Бронювання через календар</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Історія бронювань</span>
                  </li>
                </ul>
                <Link to="/client-dashboard">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Спробувати як клієнт
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">Для власників бізнесу:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Керування послугами</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Панель бронювань</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Аналітика та звіти</span>
                  </li>
                </ul>
                <Link to="/business-dashboard">
                  <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                    Спробувати як власник
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 BookEasy. Система бронювання для малого бізнесу.</p>
          <p className="mt-2 text-sm">Створено як навчальний проект для вивчення Java Backend Development</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
